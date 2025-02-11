# Overview
Project này là một nền tảng web cho phép người dùng tìm kiếm các startup hiện có cũng như tự mình đăng tải những ý tưởng startup mới lên nền tảng này. 

# Tech stacks
* React 19
* Next 15
* TypeScript
* TailwindCSS
* ShadCN
* Sanity

# Features
* **Live Content API:** cập nhật các nội dung mới theo thời gian thực sử dụng Sanity thông qua SanityLive component.
* **GitHub Authentication:** cho phép xác thực người dùng thông qua GitHub.
* **Xem tất cả các bài đăng:** cho phép người dùng xem tất cả các bài đăng startup trên nền tảng. Người dùng có thể phân loại các bài đăng dựa trên category.
* **Tìm kiếm bài đăng:** cho phép người dùng tìm kiếm các bài đăng theo tiêu đề, category hoặc tên người đăng bài.
* **Tạo bài đăng:** cho phép người dùng đăng tải nội dung startup của mình lên nền tảng bằng cách cung cấp các thông tin như tiêu đề, mô tả, category, link ảnh và nội dung.
* **Xem nội dung bài đăng:** cho phép người dùng nhấp vào một bài đăng để xem thông tin cụ thể của bài đăng đó.
* **Gợi ý bài đăng liên quan:** đưa ra gợi ý cho người dùng về 4 bài đăng có liên quan đến bài đăng hiện tại đang xem dựa trên category.
* **Xem thông tin người dùng:** cho phép người dùng hiện tại xem thông tin của mình hoặc một người dùng khác có tài khoản trên nền tảng. Đồng thời cung cấp các bài đăng người đó đã đăng tải.
* **App router:** sử dụng cấu trúc App Folder của Next.js để sắp xếp các thư mục và file cũng như tạo các đường dẫn tương ứng cho trang web.
* **Partial Pre-rendering (PPR):** cho phép load các thành phần ngay khi chúng sẵn sàng, giúp tăng tốc độ tải của trang web. Theo đó các thành phần như tiêu đề và nội dung được đưa lên web trước mà không cần đợi các nội dung khác được load xong. Các thành phần dynamic như số lượng view của bài đăng sẽ được đưa lên sau khi hoàn thành lấy dữ liệu.

# Cloning the repository

```bash
git clone https://github.com/hapo-minhng/startup-app.git
cd startup-app
```

# Installation
Install the project dependencies:

```bash
npm install
```
# Set up environment variables
Create a .env.local at the root of the project:

```bash
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION="vX"

SANITY_WRITE_TOKEN=
```
Replace the placeholder values with actual Sanity credentials. You can obtain these credentials by signing up & creating a new project on the [Sanity website](https://www.sanity.io/).

# Run the project

```bash
npm run dev
```
