# Deploy IPA Kids Galaxy lên ethanbui.net/products/ipa-for-kids

Kiến trúc (giống cách `/products/nihongo-flash` đang chạy):

```
Trình duyệt ──► www.ethanbui.net/products/ipa-for-kids/*   (project Vercel "ethanbui", Next.js rewrites)
                      │ proxy
                      ▼
               ipa-for-kids.vercel.app/products/ipa-for-kids/*  (project Vercel "ipa-for-kids", Vite static)
                      │
                      ▼
               Supabase (dùng chung project với ethanbui.net; bảng riêng learning_progress)
```

## 1. Supabase (project dùng chung với ethanbui.net)

1. **SQL Editor → tab mới (+)** → dán `supabase/migrations/20261107000000_learning_progress.sql` → **Run**.
   Chỉ tạo bảng mới `learning_progress`, không đụng bảng của site chính.
2. **Authentication → URL Configuration**: **giữ nguyên Site URL** (`https://www.ethanbui.net`).
   Thêm vào **Redirect URLs**:
   - `https://www.ethanbui.net/products/ipa-for-kids**`
   - `https://ethanbui.net/products/ipa-for-kids**`
   - `https://ipa-for-kids.vercel.app/products/ipa-for-kids**`
3. Đăng nhập trong app dùng **mã 6 số** gửi qua email, nên dùng được luôn template Magic Link hiện tại
   (đã có `{{ .Token }}` theo `PRODUCT_AUTH_SETUP.md` của ethanbui).

## 2. Vercel – project `ipa-for-kids`

1. **Settings → Environment Variables** (Production + Preview), dùng chính giá trị
   `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` của project `ethanbui`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`  (anon/publishable — **không** dùng service_role)
2. Push code → Vercel tự build. Kiểm tra `https://ipa-for-kids.vercel.app/products/ipa-for-kids`.

## 3. Repo `ethanbui` – gắn vào domain chính

Áp dụng `docs/ethanbui-site.patch` trong repo ethanbui:

```bash
cd <thư mục repo ethanbui>
git apply <đường dẫn>/IPA-English-For-Kids/docs/ethanbui-site.patch
git commit -am "feat(products): route /products/ipa-for-kids to ipa-for-kids Vercel app"
git push
```

Patch gồm 2 thay đổi:
- `next.config.mjs`: rewrite `/products/ipa-for-kids` và `/products/ipa-for-kids/:path*` sang Vercel của app.
- `src/middleware.ts`: loại `products/ipa-for-kids` khỏi middleware i18n (nếu không, middleware sẽ chèn locale
  vào URL và app không chạy).

Kiểm tra: `https://www.ethanbui.net/products/ipa-for-kids` → app chạy → bấm **Lưu tiến độ** → nhập email →
nhập mã 6 số → hiện "Đã lưu lên mây".

## Chạy local

```bash
cp .env.example .env.local   # điền 2 biến Supabase
npm install
npm run dev                  # http://localhost:3000/products/ipa-for-kids/
```
