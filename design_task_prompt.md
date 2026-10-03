Nhiệm vụ thiết kế UI/UX và nâng cấp giao diện Web App: HSK 3.0 Luyện Viết & Ngữ Pháp (HSK 4, 5, 6)

1. Bối cảnh dự án:
Dự án nằm tại: D:\Build\hsk-write-grammar
Các file hiện có:
- D:\Build\hsk-write-grammar\index.html
- D:\Build\hsk-write-grammar\style.css
- D:\Build\hsk-write-grammar\app.js
- D:\Build\hsk-write-grammar\data.js (chứa dữ liệu chữ Hán, ngữ pháp, bài tập mẫu)
- D:\Build\hsk-write-grammar\js\hanzi-writer.min.js

2. Yêu cầu cải tiến từ người dùng:
Giao diện trước đây còn đơn giản và hơi rập khuôn dạng phòng thi. Người dùng yêu cầu:
- Không chỉ copy giao diện thi khô khan mà phải là MỘT WEB HỌC TẬP VÀ LUYỆN VIẾT THỰC THỤ, HIỆN ĐẠI, THẨM MỸ CAO (Modern Educational / Chinese Writing Studio UI).
- NÂNG CẤP TRỌNG TÂM: Tính năng Luyện viết đoạn văn (Writing Lab):
  + Phía trên: Tạo đoạn văn mẫu chuẩn HSK 3.0, có phân tích cấu trúc trực quan (highlight các thành phần: Mở đoạn, Luận điểm/Chi tiết, Từ nối/Liên từ câu phức HSK 4-6, Kết đoạn, và điểm ngữ pháp trọng tâm).
  + Ngay phía dưới: Khu vực để người học luyện viết tương ứng (Active Writing Canvas / Editor), có hướng dẫn cấu trúc từng câu, gợi ý từ khóa, bộ đếm số chữ live, nút đối chiếu với đoạn mẫu.
  + Cấu trúc đoạn văn thay đổi linh hoạt theo cấp HSK:
    * HSK 4: Đoạn ngắn 40-60 chữ, tập trung liên kết 5 từ gợi ý, câu đơn kết hợp câu phức đơn giản (因为...所以, 虽然...但是).
    * HSK 5: Đoạn văn nghị luận / tự sự 80-100 chữ, dùng liên từ nâng cao (与其...不如, 尽管...然而, 从而), trật tự logic chặt chẽ.
    * HSK 6: Cấu trúc tóm tắt (缩写) và hành văn học thuật / phân tích chuyên sâu.
  + Thiết kế để người học có thể tiến bộ lâu dài theo thời gian (có checklist tự chấm, mức độ đạt chuẩn).
- Nâng cấp UI toàn diện:
  + Tone màu và Visual Hierarchy hiện đại, sạch sẽ, typography tối ưu cho chữ Hán (Hán tự sắc nét, Pinyin và âm Hán-Việt hài hòa).
  + Bố cục khoa học, micro-interactions mượt mà, tối ưu cảm ứng cả trên Mobile và Tablet / iPad (touch targets >= 44px).
  + Giữ các tính năng cốt lõi đang chạy tốt: HanziWriter viết tay, Ghép câu (Word Order), Sửa bệnh cú (Bingju).

3. Mục tiêu cụ thể:
Hãy sử dụng đầy đủ các kỹ năng UI/UX và thiết kế web của bạn để:
1. Chỉnh sửa và làm mới `index.html` tại D:\Build\hsk-write-grammar\index.html
2. Thiết kế lại file CSS `style.css` tại D:\Build\hsk-write-grammar\style.css mang phong cách giao diện hiện đại, chuyên nghiệp, sang trọng.
3. Cập nhật `app.js` nếu cần để logic hiển thị đoạn văn mẫu phía trên và khung luyện viết phía dưới hoạt động mượt mà.
Kiểm tra đảm bảo trang web chạy mượt và không bị lỗi cú pháp.