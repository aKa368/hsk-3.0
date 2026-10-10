@echo off
setlocal
cd /d "%~dp0"
title Build Android APK - HSK 3.0 Thu Phong

echo =======================================================
echo   DONG GOI ANDROID APK - HSK 3.0 THU PHONG
echo =======================================================
echo.

if exist "D:\Build\init_build_env.bat" (
    call "D:\Build\init_build_env.bat"
) else (
    set JAVA_HOME=D:\Build\jdk-17
    set ANDROID_HOME=D:\Build\android_sdk
    set PATH=D:\Build\jdk-17\bin;%PATH%
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    if exist "build_bundle.py" (
        echo [*] Dong bo bundle du lieu HSK build_bundle.py...
        python build_bundle.py
    )
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [*] Kiem tra cu phap cac module JS chinh...
    node -c strokes.js data.js curriculum_data.js dict_data.js visual_vocab_data.js
)

echo [*] Dang sao chep toan bo tai nguyen web vao Android assets...
set ASSETS=android\app\src\main\assets
if not exist "%ASSETS%" mkdir "%ASSETS%"
if not exist "%ASSETS%\js" mkdir "%ASSETS%\js"

xcopy /Y /Q "*.js" "%ASSETS%\" >nul
xcopy /Y /Q "*.html" "%ASSETS%\" >nul
xcopy /Y /Q "*.css" "%ASSETS%\" >nul
xcopy /Y /Q "*.json" "%ASSETS%\" >nul
xcopy /Y /Q "*.png" "%ASSETS%\" >nul
if exist "js\*.js" xcopy /Y /Q "js\*.js" "%ASSETS%\js\" >nul

cd /d "%~dp0android"
if exist "gradlew.bat" (
    echo [*] Dang chay Gradle assembleDebug...
    call gradlew.bat assembleDebug
    if %errorlevel% equ 0 (
        copy /Y "app\build\outputs\apk\debug\app-debug.apk" "..\HSK_3.0.apk" >nul
        copy /Y "app\build\outputs\apk\debug\app-debug.apk" "..\HSK30_ThuPhong.apk" >nul
        echo.
        echo [OK] DA BUILD THANH CONG FILE APK!
        echo      - D:\Build\hsk-write-grammar\HSK_3.0.apk
        echo      - D:\Build\hsk-write-grammar\HSK30_ThuPhong.apk
        echo.
        if "%1"=="--non-interactive" exit /b 0
        pause
        exit /b 0
    )
)

echo [LOI] Build that bai. Kiem tra lai JDK va Android SDK.
if "%1"=="--non-interactive" exit /b 1
pause
exit /b 1
