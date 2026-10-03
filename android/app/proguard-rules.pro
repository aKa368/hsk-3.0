# R8 / ProGuard rules for HSK 3.0
-optimizationpasses 5
-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-dontpreverify
-verbose

# Obfuscate classes and methods
-repackageclasses 'com.hsk.studyroom.internal'
-allowaccessmodification

# Keep Android entry points
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Application
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider

# Keep AndroidX WebKit
-keep class androidx.webkit.** { *; }

# Strip logging and debugging information
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int d(...);
    public static int i(...);
    public static int w(...);
    public static int e(...);
}

# Giữ lại JavascriptInterface cho Native TTS Bridge
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keep class com.hsk.studyroom.MainActivity$NativeTTSBridge { *; }
