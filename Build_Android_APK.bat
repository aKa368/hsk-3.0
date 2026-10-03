@echo off
setlocal
cd /d "%~dp0android"
title Build Android APK - HSK 3.0 Thu Phong

echo =======================================================
echo   DONG GOI ANDROID APK - HSK 3.0 THU PHONG
echo =======================================================
echo.

set JAVA_HOME=D:\Build\jdk-17
set PATH=D:\Build\jdk-17\bin;%PATH%

if exist "gradlew.bat" (
    echo [*] Dang sao chep du lieu web moi nhat vao assets...
    xcopy /Y /Q "..\*.js" "app\src\main\assets\"
    xcopy /Y /Q "..\*.html" "app\src\main\assets\"
    xcopy /Y /Q "..\*.css" "app\src\main\assets\"
    xcopy /Y /Q "..\*.json" "app\src\main\assets\"

    echo [*] Dang chay Gradle dong goi APK...
    call gradlew.bat assembleDebug
    if %errorlevel% equ 0 (
        copy /Y "app\build\outputs\apk\debug\app-debug.apk" "..\HSK30_ThuPhong.apk"
        echo.
        echo [OK] DA BUILD THANH CONG FILE APK!
        echo      Duong dan: D:\Build\hsk-write-grammar\HSK30_ThuPhong.apk
        echo.
        pause
        exit /b 0
    )
)

echo [LOI] Build that bai. Kiem tra lai JDK va Android SDK.
pause
