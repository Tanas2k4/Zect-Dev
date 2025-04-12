import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./src", // 👈 chỉ định thư mục gốc là src
  base: "./", // 👈 dùng để xử lý đường dẫn tĩnh đúng
  server: {
    port: 5173, // 👈 cổng mặc định của Vite
    strictPort: true, // 👈 Bắt buộc dùng port này, nếu bị chiếm sẽ báo lỗi ngay
  },
  build: {
    outDir: "../dist",
  },
});
