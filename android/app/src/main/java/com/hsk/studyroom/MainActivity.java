package com.hsk.studyroom;

import android.annotation.SuppressLint;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private WebViewAssetLoader assetLoader;
    private TextToSpeech tts;

    public class NativeTTSBridge {
        @JavascriptInterface
        public void speak(String text) {
            if (tts != null && text != null && !text.isEmpty()) {
                tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "HSK_TTS_UTTERANCE");
            }
        }

        @JavascriptInterface
        public void stop() {
            if (tts != null) {
                tts.stop();
            }
        }

        @JavascriptInterface
        public boolean isNativeAndroid() {
            return true;
        }

        @JavascriptInterface
        public String getNativeVersionName() {
            try {
                return getPackageManager().getPackageInfo(getPackageName(), 0).versionName;
            } catch (Exception e) {
                return "1.2.0";
            }
        }

        @JavascriptInterface
        public long getNativeVersionCode() {
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
                    return getPackageManager().getPackageInfo(getPackageName(), 0).getLongVersionCode();
                } else {
                    return getPackageManager().getPackageInfo(getPackageName(), 0).versionCode;
                }
            } catch (Exception e) {
                return 2026101001L;
            }
        }

        @JavascriptInterface
        public void openExternalUrl(String url) {
            if (url == null || url.isEmpty()) return;
            runOnUiThread(() -> {
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                } catch (Exception e) {
                    Toast.makeText(MainActivity.this, "Không thể mở liên kết: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                }
            });
        }

        @JavascriptInterface
        public void downloadAndInstallApk(String apkUrl) {
            if (apkUrl == null || apkUrl.isEmpty()) return;
            runOnUiThread(() -> {
                try {
                    Uri uri = Uri.parse(apkUrl);
                    DownloadManager.Request request = new DownloadManager.Request(uri);
                    request.setTitle("HSK 3.0 Cập Nhật");
                    request.setDescription("Đang tải bản cập nhật mới nhất HSK 3.0...");
                    request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                    
                    String fileName = "HSK_3.0_v" + System.currentTimeMillis() + ".apk";
                    request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);
                    request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_WIFI | DownloadManager.Request.NETWORK_MOBILE);
                    request.setAllowedOverRoaming(true);
                    request.setMimeType("application/vnd.android.package-archive");

                    DownloadManager dm = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
                    if (dm != null) {
                        final long downloadId = dm.enqueue(request);
                        Toast.makeText(MainActivity.this, "🚀 Đang tải bản cập nhật HSK 3.0 về máy qua CDN tốc độ cao...", Toast.LENGTH_LONG).show();

                        // Tự động mở trình cài đặt khi tải xong
                        BroadcastReceiver onComplete = new BroadcastReceiver() {
                            @Override
                            public void onReceive(Context ctxt, Intent intent) {
                                long id = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                                if (id == downloadId) {
                                    try {
                                        Uri fileUri = dm.getUriForDownloadedFile(downloadId);
                                        if (fileUri != null) {
                                            Intent install = new Intent(Intent.ACTION_VIEW);
                                            install.setDataAndType(fileUri, "application/vnd.android.package-archive");
                                            install.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                            install.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                                            startActivity(install);
                                        }
                                    } catch (Exception e) {
                                        Toast.makeText(MainActivity.this, "Vui lòng mở mục Tải về (Downloads) để cài đặt APK", Toast.LENGTH_LONG).show();
                                    }
                                    try {
                                        unregisterReceiver(this);
                                    } catch (Exception ignored) {}
                                }
                            }
                        };
                        registerReceiver(onComplete, new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));
                    } else {
                        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                    }
                } catch (Exception e) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(apkUrl));
                        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                    } catch (Exception ex) {
                        Toast.makeText(MainActivity.this, "Lỗi tải APK: " + ex.getMessage(), Toast.LENGTH_SHORT).show();
                    }
                }
            });
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Khởi tạo TextToSpeech Native chuẩn Android (Offline 100%, giọng tiếng Trung chuẩn)
        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                tts.setLanguage(Locale.CHINESE);
                tts.setSpeechRate(0.85f);
            }
        });

        // Chặn hoàn toàn Web Inspector và DevTools từ bên ngoài
        WebView.setWebContentsDebuggingEnabled(false);

        webView = new WebView(this);
        setContentView(webView);

        // Chặn menu context / copy text mức độ native
        webView.setLongClickable(false);
        webView.setOnLongClickListener(v -> true);
        webView.setHapticFeedbackEnabled(false);

        // Cấu hình AssetLoader để tải toàn bộ tài nguyên cục bộ từ assets/
        assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);

        // Kết nối Javascript Interface gọi TTS Native & Update Bridge
        webView.addJavascriptInterface(new NativeTTSBridge(), "AndroidTTS");

        // Bắt sự kiện tải file trong WebView (không để WebView bị đơ khi bấm link file)
        webView.setDownloadListener((url, userAgent, contentDisposition, mimetype, contentLength) -> {
            try {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
            } catch (Exception e) {
                Toast.makeText(MainActivity.this, "Không thể tải file: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                if (request.getUrl() != null && "appassets.androidplatform.net".equals(request.getUrl().getHost())) {
                    return assetLoader.shouldInterceptRequest(request.getUrl());
                }
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if (url != null && ("appassets.androidplatform.net".equals(url.getHost()) || "aka368.github.io".equals(url.getHost()))) {
                    return false;
                }
                // Điều hướng link bên ngoài (GitHub, file APK, tải xuống) ra ngoài hệ thống
                if (url != null) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, url);
                        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                        return true;
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
                return false;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, android.webkit.WebResourceError error) {
                if (request.isForMainFrame() && request.getUrl() != null && "aka368.github.io".equals(request.getUrl().getHost())) {
                    // Tự động chuyển về tài nguyên Offline đóng gói sẵn trong APK khi mạng lỗi
                    view.loadUrl("https://appassets.androidplatform.net/assets/index.html");
                }
            }
        });

        // Tự động đồng bộ bản mới nhất khi có mạng, chạy Offline mượt mà khi không có mạng
        if (isNetworkAvailable()) {
            webView.loadUrl("https://aka368.github.io/hsk-3.0/index.html");
        } else {
            webView.loadUrl("https://appassets.androidplatform.net/assets/index.html");
        }
    }

    private boolean isNetworkAvailable() {
        try {
            android.net.ConnectivityManager cm = (android.net.ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
            if (cm != null) {
                android.net.NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
                return activeNetwork != null && activeNetwork.isConnectedOrConnecting();
            }
        } catch (Exception ignored) {}
        return false;
    }

    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
