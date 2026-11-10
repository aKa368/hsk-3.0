# HSK 3.0 — PROJECT.md

## 1. Quickstart & Cấu hình
- Build APK: `Build_Android_APK.bat --non-interactive` (dùng JDK 17 `D:\Build\jdk-17`, Android SDK `D:\Build\android_sdk`).
- Config phiên bản: `version.json` & `android/app/build.gradle` (`versionCode`, `versionName`).
- Kiểm tra cú pháp JS: `node -c strokes.js data.js curriculum_data.js dict_data.js visual_vocab_data.js stroke_cache_db.js pinyin-pro.min.js chaizi_data.js app.js test_stroke_engine.js test_hsk_upgrade.js`.
- Chạy kiểm thử: `node test_stroke_engine.js && node test_hsk_upgrade.js`.

## 2. Kiến trúc & File trọng yếu
- `index.html`, `app.js`, `style.css`: Giao diện SPA & logic học tập HSK 3.0 (phong cách Hallmark Vellum/Ink).
- `heti.min.css`: Thư viện Typography CJK cân chỉnh khoảng cách Hán tự - Latin - Số và ép dấu câu CJK.
- `pinyin-pro.min.js`: Thư viện xử lý Pinyin UMD cục bộ hỗ trợ so khớp Pinyin viết tắt/thông minh (nh -> 你好, bj -> 北京).
- `chaizi_data.js`: Bảng tra cứu Chiết tự cấu tạo chữ Hán với 14.562 ký tự (chaizi-jt) gán vào `window.CHAIZI_DATA`.
- `strokes.js`: Bộ dữ liệu vector nét chữ Hán (MakeMeAHanzi contour & medians).
- `stroke_cache_db.js`: Động cơ lưu trữ IndexedDB/LocalStorage Offline-First 3 tầng & `SvgStrokeEngine` render nét động SVG thuần (clipPath, stroke-dasharray/stroke-dashoffset).
- `test_stroke_engine.js`: Bộ kiểm thử toàn diện cho cấu trúc nét chữ, SVG path parser, median path calculator, và offline fallback (25 checks PASS 100%).
- `test_hsk_upgrade.js`: Bộ kiểm thử tích hợp Typography Heti, Pinyin-Pro match, Chaizi lookup và UI integration (14 checks PASS 100%).
- `version.json`: Chứa metadata phiên bản cho OTA update qua GitHub Pages / Raw CDN.
- `android/`: Dự án Android WebView wrapper nạp assets từ `android/app/src/main/assets`.
- `HSK_3.0.apk`: File APK artifact tại gốc repo cho phép người dùng/updater tải trực tiếp.

## 3. Vấn đề phát sinh & Cạm bẫy (Gotchas & Issues Log)
- `[2026-11-10/v1.3.1] [Phát hành bản nâng cấp toàn diện v1.3.1: Heti Typography, Pinyin-Pro Smart Search, Chaizi Breakdown & Vector Stroke Engine] → [Tích hợp heti.min.css tối ưu hóa giãn dòng và dấu câu CJK trong các bài đọc Tab 2, 4, 7; Nhúng pinyin-pro.min.js tăng tốc tìm kiếm từ điển Tab 6 cho phép gõ tắt Pinyin; Tạo chaizi_data.js 14.562 chữ Hán hiển thị badge Chiết tự; Đồng bộ toàn bộ assets vào Android WebView và build HSK_3.0.apk (18.7MB) thành công; Tất cả 39/39 test PASS 100%]`.
- `[2026-11-10/v1.3.1] [Tối ưu hóa Vector nét chữ Hán & Offline First Giai đoạn 4 - Phần 1] → [Nâng cấp stroke_cache_db.js cơ chế 3 tầng RAM -> IndexedDB/localStorage -> Multi-CDN -> Local Fallback Generator; Tích hợp SvgStrokeEngine mượt mà 60fps bằng clipPath & stroke-dashoffset; Tích hợp dự phòng tự động khi HanziWriter vắng mặt; Tạo test_stroke_engine.js đạt 25/25 checks PASS 100%]`.
- `[2026-10-26/v1.2.12] [Quên build APK & tag release sau khi redesign] → [Chỉ commit code web mà quên chạy Build_Android_APK.bat, chưa tag git và chưa tạo GitHub Release] → [Bắt buộc: Sau khi hoàn thiện code/UI, PHẢI chạy build APK, commit artifact HSK_3.0.apk, tạo git tag vX.Y.Z, push và tạo GitHub Release]`.
- `[2026-10-19/v1.2.9] [Tab click bị trễ/kẹt do DOM state] → [Event listener gán sau khi render chậm] → [Bảo đảm gán event handler 100% trước khi DOM render nội dung nặng]`.

## 4. Trạng thái hiện tại & Việc tiếp theo
- Hiện tại: Hoàn thành trọn gói phát hành phiên bản v1.3.1 (Heti typography CJK, Pinyin-Pro tra cứu viết tắt, Chaizi chiết tự 14.562 chữ, SvgStrokeEngine vector nét 60fps, build APK 18.7MB).
- Tiếp theo: Triển khai Giai đoạn 4 - Phần 2 (Tối ưu hóa âm thanh phát âm và chế độ luyện nghe nói HSK 3.0).
