# 18 Phút - Peter Bregman (Web App & Game)

Chào mừng bạn đến với dự án **18 Phút** – Ứng dụng đọc sách kết hợp Game trắc nghiệm tương tác dựa trên cuốn sách nổi tiếng **"18 Minutes: Find Your Focus, Master Distraction, and Get the Right Things Done"** của tác giả Peter Bregman.

Dự án này được thiết kế nhằm giúp người đọc không chỉ tiếp thu kiến thức một cách thụ động mà còn có thể ôn tập, ghi nhớ sâu sắc các bài học thực tế qua các thử thách trắc nghiệm thú vị.

---

## 🚀 Tính Năng Nổi Bật

- 📖 **Đọc Sách Tiện Lợi (Song Ngữ)**: Mục lục trực quan tiếng Việt (Nội dung) và tiếng Anh (Content). Nội dung các chương sách được số hóa từ các tệp Markdown (`src/content/vn/chapters` và `src/content/en/chapters`) và hiển thị mượt mà với React Markdown.
- 🎮 **Game Thử Thách**: Mỗi chương (bản tiếng Việt) đi kèm với một bộ 10 câu hỏi trắc nghiệm tương tác giúp kiểm tra và khắc sâu kiến thức.
- 🧘 **Trang Tác Giả (About Page)**: Giới thiệu về tác giả Thiên Cơ, động lực phát triển ứng dụng dưới dạng mô hình *"Tea-supported software"*, thông tin liên hệ và các sở thích cá nhân độc đáo.
- 🔍 **Thu Phóng Linh Hoạt (Font Zoom)**: Hỗ trợ thu phóng kích thước chữ trực tiếp trên giao diện đọc sách và trang tác giả để tùy biến trải nghiệm đọc.
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
│   │   ├── about/          # Trang giới thiệu tác giả (About page)
│   │   ├── chapters/       # Mục lục và giao diện đọc chương sách tiếng Việt
│   │   ├── en/             # Các route dành cho phiên bản tiếng Anh
│   │   │   └── chapters/   # Mục lục và giao diện đọc chương sách tiếng Anh
│   │   ├── quizzes/        # Giao diện quản lý và chơi game trắc nghiệm (Game)
│   │   ├── globals.css     # Định nghĩa styles chung & Tailwind imports
│   │   └── layout.tsx      # Bố cục giao diện chung (Header, Footer, Navbar)
│   ├── components/         # Các thành phần giao diện dùng chung (như ThemeToggle, Navbar)
│   ├── content/
│   │   ├── en/chapters/    # Các tệp Markdown tiếng Anh (.md) chứa nội dung chương
│   │   └── vn/chapters/    # Các tệp Markdown tiếng Việt (.md) chứa nội dung chương
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

## 🌐 Hướng Dẫn Deploy Lên Vercel

Ứng dụng Next.js này có thể được triển khai (deploy) dễ dàng và nhanh chóng lên nền tảng **Vercel** bằng hai phương thức sau:

### Cách 1: Sử dụng Vercel Dashboard (Khuyên dùng)

1. **Đưa mã nguồn lên GitHub/GitLab/Bitbucket**:
   - Đảm bảo dự án của bạn đã được đẩy lên một kho lưu trữ (repository) trực tuyến (ví dụ: GitHub).
2. **Liên kết với Vercel**:
   - Truy cập [Vercel](https://vercel.com/) và đăng nhập bằng tài khoản Git tương ứng.
   - Nhấp vào nút **Add New...** -> **Project**.
3. **Import Repository**:
   - Chọn kho lưu trữ chứa dự án `18phut`.
4. **Cấu hình dự án (Project Settings)**:
   - Vercel sẽ tự động phát hiện đây là dự án **Next.js** và điền sẵn cấu hình chuẩn:
     - **Framework Preset**: `Next.js`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
   - Nhấp vào nút **Deploy**.
5. **Hoàn tất**:
   - Vercel sẽ tiến hành biên dịch và cung cấp một đường dẫn (URL) chạy trực tuyến sau khoảng 1-2 phút.

### Cách 2: Sử dụng Vercel CLI

Nếu muốn deploy trực tiếp từ dòng lệnh (terminal):

1. **Cài đặt Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Đăng nhập vào Vercel**:
   ```bash
   vercel login
   ```
3. **Triển khai dự án**:
   Chạy lệnh sau tại thư mục gốc của dự án:
   ```bash
   vercel
   ```
   Làm theo các hướng dẫn trên màn hình để thiết lập và deploy bản nháp (preview build).
4. **Deploy lên môi trường Production**:
   ```bash
   vercel --prod
   ```

---

## ☁️ Hướng Dẫn Deploy Lên Cloudflare Pages

Dự án này **đã được cấu hình sẵn** để sử dụng tính năng **Static Export** của Next.js (trong tệp [next.config.ts](file:///home/mark/working/18phut/next.config.ts)), đây là phương pháp tối ưu nhất về hiệu năng và hoàn toàn miễn phí trên Cloudflare Pages vì ứng dụng sử dụng cấu trúc nội dung từ các file Markdown tĩnh và các trang chi tiết đã được định nghĩa sẵn hàm `generateStaticParams()`.

### Hướng dẫn triển khai lên Cloudflare Pages

Bạn có thể triển khai bản build tĩnh lên Cloudflare Pages bằng 2 cách dưới đây:

#### Cách 1: Sử dụng Git Integration (Tự động deploy khi push code)

1. **Đẩy mã nguồn dự án của bạn lên GitHub/GitLab**.
2. **Cấu hình trên Cloudflare Pages Dashboard**:
   - Truy cập **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
   - Chọn repo chứa mã nguồn dự án `18phut` của bạn.
   - Ở phần **Build settings**, cấu hình như sau:
     - **Framework preset**: `Next.js (Static HTML Export)`
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Nhấp vào **Save and Deploy**. Cloudflare sẽ tự động build ứng dụng và cung cấp tên miền có đuôi `*.pages.dev`.

#### Cách 2: Sử dụng Wrangler CLI (Deploy trực tiếp từ Terminal)

Phương pháp này phù hợp nếu bạn muốn tự kiểm soát quá trình build hoặc deploy trực tiếp từ local mà không cần liên kết trực tiếp repo Git với Cloudflare.

1. **Biên dịch dự án thành các tệp tĩnh**:
   ```bash
   npm run build
   ```
2. **Triển khai thư mục `out` lên Cloudflare Pages**:
   Sử dụng công cụ `wrangler` của Cloudflare để upload trực tiếp:
   ```bash
   npx wrangler pages deploy out
   ```
   *Lưu ý*:
   - Trong lần đầu tiên chạy lệnh này, Wrangler sẽ tự động mở trình duyệt để bạn đăng nhập tài khoản Cloudflare.
   - CLI sẽ hỏi bạn muốn tạo dự án mới hay chọn dự án hiện có.
   - Bạn có thể bỏ qua các bước lựa chọn bằng cách chỉ định tên dự án trực tiếp:
     ```bash
     npx wrangler pages deploy out --project-name=18phut
     ```
   - Trong môi trường tự động (như CI/CD / GitHub Actions), bạn có thể thiết lập các biến môi trường `CLOUDFLARE_API_TOKEN` và `CLOUDFLARE_ACCOUNT_ID` để tự động hóa deploy mà không cần đăng nhập thủ công.

### Kiểm tra Build tĩnh ở local (Tùy chọn)

Nếu bạn muốn kiểm tra xem bản Build tĩnh hoạt động có chính xác không trước khi deploy:
1. Chạy lệnh build:
   ```bash
   npm run build
   ```
2. Dự án sẽ xuất ra thư mục tĩnh tên là `out`. Bạn có thể dùng một local web server để chạy thử thư mục này:
   ```bash
   npx serve@latest out
   ```

---

> [!NOTE]
> **Lưu ý về cấu hình**: Tệp [next.config.ts](file:///home/mark/working/18phut/next.config.ts) đã được thiết lập sẵn thuộc tính `output: 'export'` cùng với `images.unoptimized: true` để Next.js xuất ra các file tĩnh chuẩn mà không sử dụng trình tối ưu ảnh động (vốn cần máy chủ Node.js chạy runtime). Nếu sau này bạn phát triển thêm các tính năng động (như API Routes, Server Actions) và muốn chạy trên Cloudflare Edge Runtime, bạn cần bỏ cấu hình `output: 'export'` và tích hợp adapter `@cloudflare/next-on-pages`.

---

## 📝 Bản Quyền & Thiết Kế

- Nội dung sách thuộc bản quyền của tác giả **Peter Bregman**.
- Thiết kế & phát triển ứng dụng bởi **Thiên Cơ** (Mô hình *Tea-supported software* – mời tác giả trà xanh 🍵 / nước vối để tiếp thêm nhiên liệu sáng tạo).
