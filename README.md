# Thị Ngọc - Hệ Thống Chatbot AI Studio 🌸

Không gian trải nghiệm chatbot AI thông minh của Thị Ngọc hỗ trợ giải trí, kết nối và trò chuyện tương tác đa tính cách.

![React](https://img.shields.io/badge/React-19-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)

---

## ✨ Tính Năng Nổi Bật

- **Bộ sưu tập Chatbot đa dạng**: Haruto, Nicolai Morozov, Ilya Morozov, Hà Hoàng Khôi Nguyên,... với từng cá tính, cốt truyện và tag riêng biệt.
- **Hệ thống lọc Hashtag thông minh**: Tra cứu bot theo tag (`SFW`, `NSFW`, `Trai Việt`, `Trai Nga`, `Slow Burn`, `Yandere`, `Txvt`,...).
- **Tìm kiếm đa năng**: Hỗ trợ tìm kiếm theo tên, tag, viết tắt chữ cái đầu (acronym).
- **Giao diện hiện đại**: Thiết kế phong cách aesthetic, hiệu ứng ánh sao tương tác lấp lánh (sparkle cursor trail), hỗ trợ responsive hoàn hảo trên di động và máy tính.
- **Tích hợp liên kết nhân vật**: Điều hướng mượt mà đến các nền tảng chat hoặc phòng chat trực tiếp.

---

## 🛠️ Cài Đặt & Chạy Cục Bộ (Local Development)

### Yêu cầu:
- [Node.js](https://nodejs.org/) (phiên bản 18+ hoặc 20+)
- Trình quản lý gói `npm` hoặc `pnpm` / `yarn`

### Các bước thực hiện:

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   cd <ten-repo>
   ```

2. **Cài đặt các thư viện phụ thuộc:**
   ```bash
   npm install
   ```

3. **Thiết lập biến môi trường (nếu cần):**
   ```bash
   cp .env.example .env
   ```

4. **Khởi chạy môi trường phát triển (Dev server):**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại: `http://localhost:3000` (hoặc cổng hiển thị trong terminal).

5. **Đóng gói dự án để triển khai (Build):**
   ```bash
   npm run build
   ```
   Mã nguồn sau khi build sẽ nằm trong thư mục `dist/`.

---

## 🚀 Hướng Dẫn Đẩy Lên GitHub Lần Đầu

Mở terminal tại thư mục dự án và chạy các lệnh sau:

```bash
# 1. Khởi tạo Git repository (nếu chưa có)
git init

# 2. Thêm tất cả file vào staging
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: initial commit for Thi Ngoc AI Studio"

# 4. Đổi tên nhánh chính thành main
git branch -M main

# 5. Liên kết tới repository GitHub của bạn (thay bằng URL GitHub của bạn)
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git

# 6. Đẩy code lên GitHub
git push -u origin main
```

---

## 🌐 Triển Khai (Deploy) Miễn Phí

Dự án là một Single Page Application (Vite + React) chuẩn, có thể deploy miễn phí trong 1 phút lên:
- **GitHub Pages**
- **Vercel** (`npx vercel`)
- **Cloudflare Pages**
- **Netlify**

---

## 📄 Bản Quyền

Dự án thuộc sở hữu của **Thị Ngọc**. Phát triển trên nền tảng React & Vite.
