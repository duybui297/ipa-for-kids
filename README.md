# IPA Kids Galaxy 🌸

Ứng dụng web giúp học sinh tiểu học (lớp 3) học phát âm tiếng Anh giọng Mỹ qua bảng 44 âm IPA, các cặp âm dễ nhầm, mini-game và 15 bộ đề luyện tập có chấm điểm tự động.

## Tính năng

- **Bảng 44 âm IPA**: 12 nguyên âm đơn, 8 nguyên âm đôi, 24 phụ âm, kèm mô hình khẩu hình và ví dụ.
- **Cặp âm dễ nhầm**: 11 cặp minimal pairs (/iː/–/ɪ/, /p/–/b/, /θ/–/s/…), có câu đố nghe nhanh.
- **Phòng bài tập**: 15 bộ đề × 6 dạng bài (nghe–khoanh, nối ký hiệu, xếp vào nhà, điền phiên âm, tìm từ khác âm, nhận diện âm).
- **Mini-game**: Thám Tử Âm Cuối, Ninja Chặn Hơi (unreleased stops).
- **Studio thu âm**: bé thu giọng mình và so với giọng mẫu US.
- **Sao & huy hiệu**: tiến độ được lưu trong `localStorage` của trình duyệt.

Giọng đọc mẫu dùng Web Speech API có sẵn trong trình duyệt (`en-US`), hiệu ứng âm thanh dùng Web Audio API. App chạy hoàn toàn phía client, không cần API key hay backend.

## Chạy local

Yêu cầu: Node.js 20+ (hoặc Bun).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Lệnh | Mô tả |
| --- | --- |
| `npm run dev` | Chạy dev server (Vite) |
| `npm run build` | Build production vào `dist/` |
| `npm run preview` | Xem thử bản build |
| `npm run lint` | Kiểm tra kiểu TypeScript |
| `npm test` | Chạy unit test (chấm điểm, huy hiệu, tính nhất quán của 15 bộ đề) |

## Cấu trúc

```
src/
  App.tsx                 # Khung app, điều hướng tab, tiến độ (sao, huy hiệu)
  components/             # Các màn hình: IPAChart, ConfusingPairs, ExerciseSession, Games, ...
  data/                   # Dữ liệu âm IPA, cặp âm, 15 bộ đề (exerciseSets/)
  hooks/usePersistentState.ts
  services/speechService.ts   # Giọng đọc US + hiệu ứng âm thanh
  utils/                  # Logic chấm điểm, luật huy hiệu, confetti
docs/screenshots/         # Ảnh chụp màn hình (không đóng gói vào bản build)
```

## Thêm / sửa bộ đề

Mỗi bộ đề nằm trong `src/data/exerciseSets/setN.ts` và được đăng ký trong `src/data/exerciseSets/index.ts`.
Sau khi sửa, chạy `npm test`: test `exerciseSets.test.ts` sẽ báo lỗi nếu đáp án không khớp dữ liệu
(ví dụ một "nhà" ở Bài 3 có 4 từ, hoặc Bài 5 có hai từ khác âm).
