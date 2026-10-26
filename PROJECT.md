# HSK 3.0 — PROJECT.md

## 1. Quickstart & Cấu hình
- Build APK: `Build_Android_APK.bat --non-interactive` (dùng JDK 17 `D:\Build\jdk-17`, Android SDK `D:\Build\android_sdk`).
- Config phiên bản: `version.json` & `android/app/build.gradle` (`versionCode`, `versionName`).
- Kiểm tra cú pháp JS: `node -c strokes.js data.js curriculum_data.js dict_data.js visual_vocab_data.js stroke_cache_db.js app.js`.

## 2. Kiến trúc & File trọng yếu
- `index.html`, `app.js`, `style.css`: Giao diện SPA & logic học tập HSK 3.0 (phong cách Hallmark Vellum/Ink).
- `version.json`: Chứa metadata phiên bản cho OTA update qua GitHub Pages / Raw CDN.
- `android/`: Dự án Android WebView wrapper nạp assets từ `android/app/src/main/assets`.
- `HSK_3.0.apk`: File APK artifact tại gốc repo cho phép người dùng/updater tải trực tiếp.

## 3. Vấn đề phát sinh & Cạm bẫy (Gotchas & Issues Log)
- `[2026-10-26/v1.2.12] [Quên build APK & tag release sau khi redesign] → [Chỉ commit code web mà quên chạy Build_Android_APK.bat, chưa tag git và chưa tạo GitHub Release] → [Bắt buộc: Sau khi hoàn thiện code/UI, PHẢI chạy build APK, commit artifact HSK_3.0.apk, tạo git tag vX.Y.Z, push và tạo GitHub Release]`.
- `[2026-10-19/v1.2.9] [Tab click bị trễ/kẹt do DOM state] → [Event listener gán sau khi render chậm] → [Bảo đảm gán event handler 100% trước khi DOM render nội dung nặng]`.

## 4. Trạng thái hiện tại & Việc tiếp theo
- Hiện tại: v1.2.12 (build 2026102501) - Tái thiết kế Hallmark Vellum/Ink, APK và GitHub Release đã phát hành.
- Tiếp theo: Giám sát phản hồi người dùng về hiển thị từ điển và bài tập.
