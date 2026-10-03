# HSK 3.0 (Writing, Grammar & Comprehensive Chinese Study Room)

Ứng dụng học tập, luyện viết chữ Hán, ngữ pháp và tra cứu từ điển tiếng Trung toàn diện theo tiêu chuẩn **HSK 3.0** (Cấp độ 1 đến 9).

---

## 🌟 Tính Năng Nổi Bật

1. **Luyện viết chữ Hán Hanzi (Ô Mễ Chuẩn):**
   - Hướng dẫn quy tắc bút thuận, diễn hoạt nét viết động (stroke order animation).
   - Chế độ in mờ tập tô và tự kiểm tra trí nhớ nét viết trực tiếp trên màn hình cảm ứng hoặc bút Stylus.
   - Hỗ trợ tra cứu tự do bất kỳ chữ Hán nào với Pinyin, âm Hán-Việt và bộ thủ.

2. **Vở tập tô đoạn văn & Trích đoạn Y kinh Cổ truyền:**
   - Hơn 160 bài viết mẫu trích xuất từ giáo trình HSK 1-9.
   - Module chuyên sâu Y học Cổ truyền (Đông Y) với các tác phẩm kinh điển: *Hoàng Đế Nội Kinh*, *Thương Hàn Luận*.
   - Hỗ trợ công cụ tự tạo bài tập tô theo danh sách từ vựng tự chọn.

3. **Từ điển HSK 3.0 Song Ngữ (11.470+ mục từ & 122.000+ từ CC-CEDICT):**
   - Tra cứu 4-trong-1: Chữ Hán, Pinyin, Tiếng Việt, Tiếng Anh.
   - Chiết tự nguồn gốc chữ, mẹo nhớ và các chữ dễ gây nhầm lẫn.
   - Hệ thống lọc theo 17 chủ đề thực tế đời sống và chủ đề Y học Cổ truyền.

4. **Thẻ nhớ Flashcard SRS (Spaced Repetition SM-2):**
   - Thuật toán lặp lại ngắt quãng SuperMemo SM-2 tự động tính toán thời gian ôn luyện.
   - Thẻ lật 3D hai mặt kèm phát âm âm thanh chuẩn Bắc Kinh.

5. **Phòng thi thử trắc nghiệm (Interactive Quiz Engine):**
   - Đề thi trắc nghiệm 4 lựa chọn sinh tự động theo cấp độ HSK 1 - 6.
   - Kiểm tra đa kỹ năng: Nhận diện Pinyin, Dịch nghĩa ngữ cảnh, Nghe phát âm chọn từ.

6. **Tự động cập nhật trực tuyến (In-App OTA Auto-Update):**
   - Tích hợp Service Worker và bộ nhớ đệm ngoại tuyến thông minh.
   - Tự động đồng bộ tài nguyên và sửa lỗi tức thì mà người dùng không cần cài lại file APK.

---

## 📱 Cài Đặt Android APK

* Tải file APK trực tiếp: `HSK_3.0.apk` trong thư mục gốc dự án.
* Hoặc chạy script đóng gói 1-click: `Build_Android_APK.bat`.

---

## 🛠️ Công Nghệ Phát Triển

* **Frontend:** Vanilla HTML5, CSS3 Grid/Flexbox, ES6+ Modular JavaScript.
* **Mobile Engine:** Android Native WebView (SDK 34, MinSDK 24, AndroidX WebKit).
* **Audio Engine:** 3-Tier Audio Engine (Native Android TTS -> Web Speech API -> Cloud Audio Fallback).
* **Offline-First:** PWA Service Worker Cache Management, IndexedDB & LocalStorage.
* **CI/CD:** GitHub Actions tự động kiểm thử cú pháp và đóng gói Android APK.
