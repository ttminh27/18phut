# 18 Phút - Peter Bregman (Web App & Mini Game)

Chào mừng bạn đến với dự án **18 Phút** – Ứng dụng đọc sách kết hợp Mini Game trắc nghiệm tương tác dựa trên cuốn sách nổi tiếng **"18 Minutes: Find Your Focus, Master Distraction, and Get the Right Things Done"** của tác giả Peter Bregman.

Dự án này được thiết kế nhằm giúp người đọc không chỉ tiếp thu kiến thức một cách thụ động mà còn có thể ôn tập, ghi nhớ sâu sắc các bài học thực tế qua các thử thách trắc nghiệm thú vị.

---

## 🚀 Tính Năng Nổi Bật

- 📖 **Đọc Sách Tiện Lợi**: Mục lục trực quan, nội dung các chương sách được số hóa từ các tệp Markdown (`src/content/chapters`) và hiển thị định dạng mượt mà với React Markdown.
- 🎮 **Mini Game Thử Thách**: Mỗi chương đi kèm với một bộ 10 câu hỏi trắc nghiệm tương tác giúp kiểm tra và khắc sâu kiến thức.
- 🌓 **Chế Độ Giao Diện (Dark/Light Mode)**: Hỗ trợ chuyển đổi giao diện sáng/tối linh hoạt giúp bảo vệ mắt khi đọc sách vào ban đêm.
- 📱 **Thiết Kế Responsive**: Tương thích hoàn hảo trên các thiết bị di động (Mobile), máy tính bảng (Tablet) và máy tính để bàn (Desktop).
- ⚡ **Tốc Độ Vượt Trội**: Trải nghiệm tải trang cực nhanh nhờ sức mạnh tối ưu hóa của Next.js App Router.

---

## 🛠️ Công Nghệ Sử Dụng

- **Core**: [Next.js (App Router)](https://nextjs.org/) + React 19 + TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown Parsing**: [React Markdown](https://github.com/remarkjs/react-markdown) + `@tailwindcss/typography`
- **Build/Lint**: ESLint + PostCSS

---

## 📁 Cấu Trúc Thư Mục Chính

```text
├── public/                 # Các tài nguyên tĩnh (hình ảnh, favicon, v.v.)
├── src/
│   ├── app/                # Next.js App Router (pages & layouts)
│   │   ├── chapters/       # Trang mục lục và giao diện đọc chương sách
│   │   ├── quizzes/        # Giao diện quản lý và chơi mini game trắc nghiệm
│   │   ├── globals.css     # Định nghĩa styles chung & Tailwind imports
│   │   └── layout.tsx      # Bố cục giao diện chung (Header, Footer, Navbar)
│   ├── components/         # Các thành phần giao diện dùng chung (như ThemeToggle)
│   ├── content/
│   │   └── chapters/       # Tệp Markdown (.md) chứa nội dung chi tiết các chương
│   ├── data/               # Dữ liệu câu hỏi trắc nghiệm JSON và mã nguồn Python hỗ trợ
│   └── lib/                # Thư viện tiện ích, trình đọc & xử lý file
├── .gitignore              # Định nghĩa các tệp/thư mục không đưa lên git
├── package.json            # Thông tin dependencies và scripts của dự án
└── tsconfig.json           # Cấu hình dự án TypeScript
```

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu hệ thống
- Đã cài đặt **Node.js** (Khuyến nghị phiên bản LTS mới nhất)
- Đã cài đặt trình quản lý gói `npm`, `yarn`, `pnpm` hoặc `bun`

### 1. Khởi động môi trường và cài đặt dependencies

Di chuyển vào thư mục dự án và cài đặt các thư viện cần thiết:

```bash
npm install
```

### 2. Chạy dự án ở chế độ phát triển (Development Mode)

```bash
npm run dev
```

Sau khi chạy lệnh trên, ứng dụng sẽ hoạt động tại địa chỉ: [http://localhost:3000](http://localhost:3000).

### 3. Biên dịch ứng dụng cho production (Build & Start)

Biên dịch dự án thành sản phẩm tối ưu:

```bash
npm run build
```

Khởi chạy server production:

```bash
npm run start
```

---

## 📝 Bản Quyền & Thiết Kế

- Nội dung sách thuộc bản quyền của tác giả **Peter Bregman**.
- Giao diện và phát triển ứng dụng bởi **Thiên Cơ**.
