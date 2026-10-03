Nhiệm vụ thiết kế UI/UX: Tạo Hệ Thống Theme Đa Dạng (Theme Switcher) cho HSK 3.0 Web App

Dự án nằm tại: D:\Build\hsk-write-grammar
Các file chính:
- index.html
- style.css
- app.js
- data.js

Yêu cầu từ người dùng:
Tạo tính năng chọn nhiều giao diện đẹp mắt khác nhau (Theme Switcher) để người học đổi qua lại tùy sở thích và môi trường học:

Hãy thiết kế 4 theme xuất sắc bằng CSS variables (data-theme="..."):
1. Theme "paper" (Mặc định - Thư phòng Giấy Ngà):
   - Nền giấy xuyến ngà ấm áp (#f8f4eb, #fffefb), mực đen mun (#2d2621), ấn chương đỏ son (#b93829). Phong cách cổ điển, trang nhã.
2. Theme "dark" (Đêm Đọc Trầm Mặc - Dark Scholar):
   - Nền than chì sâu thẳm (#16181d, #1f232b), chữ trắng kem, điểm xuyết vàng kim ấm (#e5b567) và ngọc bích (#34d399), dịu mắt khi đọc đêm.
3. Theme "bamboo" (Trúc Diệp Thanh Tân - Bamboo Garden):
   - Nền trà xanh thanh nhã (#f2f7f2, #ffffff), điểm xuyết xanh ngọc trúc (#2e6f40, #15803d), viền ngọc bích dịu mát.
4. Theme "notion" (Tối Giản Hiện Đại - Clean Minimalist):
   - Phong cách Apple / Notion: Nền trắng tinh khôi (#ffffff, #f9fafb), viền xám siêu mảnh (#e5e7eb), chữ đen tuyền (#111827), điểm nhấn xanh dương (#2563eb).

Thực hiện:
- Thêm bộ chọn Theme (Dropdown hoặc Icon đổi giao diện) trên Header của index.html.
- Khai báo CSS variables tương ứng cho từng theme [data-theme="paper"], [data-theme="dark"], [data-theme="bamboo"], [data-theme="notion"] trong style.css.
- Thêm hàm chuyển theme và lưu vào localStorage trong app.js để khi reload trang không bị mất theme đã chọn.
- Đảm bảo toàn bộ 5 tab (Luyện nét, Vở tập tô, Viết đoạn, Ngữ pháp, Ghép câu) đều ăn khớp mượt mà trên cả 4 theme.
