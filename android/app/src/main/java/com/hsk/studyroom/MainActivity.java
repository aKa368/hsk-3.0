package com.hsk.studyroom;

import android.annotation.SuppressLint;
import android.net.Uri;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
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

        // Kết nối Javascript Interface gọi TTS Native
        webView.addJavascriptInterface(new NativeTTSBridge(), "AndroidTTS");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return assetLoader.shouldInterceptRequest(request.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri url = request.getUrl();
                if ("appassets.androidplatform.net".equals(url.getHost())) {
                    return false;
                }
                return false;
            }
        });

        // Tải trang chủ ứng dụng HSK 3.0
        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html");
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
