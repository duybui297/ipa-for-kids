# Handoff: IPA Kids Galaxy

Ứng dụng web giúp học sinh tiểu học (khoảng lớp 3) học phát âm tiếng Anh qua bảng 44 âm IPA, các cặp âm dễ nhầm,
mini-game và **29 bộ đề luyện tập** có chấm điểm tự động. Giao diện tiếng Việt, mascot hoạt hình, thưởng sao và huy hiệu.

- Repo: `duybui297/ipa-for-kids`
- Chạy tại: `https://www.ethanbui.net/products/ipa-for-kids` (cấu hình triển khai xem `DEPLOY.md`, không lặp lại ở đây)
- Stack: Vite + React 19 + TypeScript + Tailwind CSS v4, chạy hoàn toàn phía client.
  Supabase chỉ dùng để phụ huynh đăng nhập và đồng bộ tiến độ (không bắt buộc, không có thì app vẫn chạy).

## 1. Chạy và kiểm tra

```bash
npm install
npm run dev     # http://localhost:3000/products/ipa-for-kids/
npm test        # unit test + kiểm tra tính nhất quán dữ liệu 29 bộ đề
npm run lint    # tsc --noEmit
npm run build
```

Trước khi merge, chạy đủ `npm test` và `npm run lint`. Test dữ liệu bộ đề bắt được lỗi đề "không thể làm đúng"
(đáp án lệch dữ liệu), loại lỗi đã từng xảy ra trong dự án.

## 2. Các khu vực chức năng (tab trên header)

| Tab | Component chính | Ghi chú |
| --- | --- | --- |
| Bảng 44 Âm IPA | `components/IPAChart/IPAExplorer.tsx`, `MouthLab/MouthVisualizer.tsx` | Dữ liệu âm: `data/ipaData.ts` |
| Phân Biệt Cặp Âm | `components/ConfusingPairs/ConfusingPairsHub.tsx` | 11 cặp, `data/confusingPairsData.ts` |
| Phòng Bài Tập | `components/ExerciseSession/*` | 15 bộ âm đơn + 14 bộ âm đôi, 6 bài/bộ |
| Thám Tử Âm Cuối | `components/Games/FinalSoundDetective.tsx` | `FINAL_SOUND_QUESTIONS` trong `ipaData.ts` |
| Ninja Chặn Hơi | `components/Games/StopSoundNinja.tsx` | 4 từ, `STOP_SOUND_QUESTIONS` |
| Studio Thu Âm | `components/PracticeStudio/VoiceStudio.tsx` | MediaRecorder; không chấm phát âm |
| Video & Cambridge | `components/VideoRoom/VideoReferenceRoom.tsx` | Mô phỏng khẩu hình bằng SVG, không có video thật |

Âm thanh: `services/speechService.ts` dùng Web Speech API (giọng **en-US** của trình duyệt) cho giọng đọc mẫu,
và Web Audio API cho hiệu ứng.

## 3. Phòng Bài Tập và dữ liệu bộ đề

```
src/data/exerciseSets/
  types.ts                 # PracticeExamSet và kiểu của 6 bài
  set1.ts … set15.ts       # 15 bộ nguyên âm đơn (id 1–15)
  diphthong/dset1.ts … 14  # 14 bộ nguyên âm đôi (id 101–114)
  index.ts                 # EXAM_SET_CATEGORIES, PRACTICE_EXAM_SETS (tất cả), getPracticeSetById, getCategoryOfSet
  exerciseSets.test.ts     # kiểm tra tính nhất quán, chạy trên mọi bộ
```

- 6 dạng bài: (1) nghe và khoanh A/B, (2) nối ký hiệu với từ, (3a/3b) xếp từ vào "ngôi nhà" âm,
  (4) điền ký hiệu còn thiếu, (5) tìm từ khác âm, (6) nghe và chọn ký hiệu.
- `ExerciseHub.tsx` có nút chọn nhóm **Nguyên âm đơn / Nguyên âm đôi**. Số thứ tự "Bộ 01…" hiển thị theo vị trí
  trong nhóm, **không** theo `id`. `id` phải duy nhất trên toàn bộ vì được dùng làm key lưu điểm.
- Số câu, số ký hiệu, số nhà trong giao diện đều lấy từ dữ liệu, không ghi cứng. Bộ âm đôi có Bài 2 chỉ 7–8 ký hiệu
  và Bài 3b có lúc chỉ 3 nhà.
- Bộ âm đôi được sinh từ tài liệu Word "Bộ đề nguyên âm đôi 14 bộ". Đáp án lấy nguyên từ tài liệu và đã đối chiếu
  chéo (0 lỗi). Phần **nghĩa tiếng Việt** (293 từ) và phiên âm của 14 từ tài liệu không ghi
  (`age, bye, cry, frown, gray, how, ice, lane, nice, oyster, price, site, smile, where`) là bổ sung thêm.

**Thêm một bộ đề mới:** tạo file theo mẫu một bộ hiện có, đăng ký vào nhóm trong `index.ts` (hoặc `diphthong/index.ts`),
chọn `id` chưa dùng, rồi chạy `npm test`.

Chấm điểm: `utils/exerciseScoring.ts`. Mỗi câu đúng được 2 sao. Cần đạt ít nhất **75%**
(`REWARD_THRESHOLD_PERCENT`) mới được cộng sao.

## 4. Sao, huy hiệu và tiến độ

- Trạng thái nằm ở `App.tsx`: `progress` (sao, các bộ đếm, danh sách từ đã luyện), `exerciseBestStars`, mascot.
  Kiểu dữ liệu ở `types/progress.ts`, lưu `localStorage` qua `hooks/usePersistentState.ts`
  (key `ipa_progress_v1`, `ipa_exercise_best_stars_v1`, `ipa_mascot`; có migrate từ key cũ `ipa_stars`).
- **Chống "cày" sao:** bài tập chỉ cộng phần sao vượt kỷ lục cũ của đúng bài đó (key `set{id}:{bài}`).
  Ninja chỉ thưởng lần đầu mỗi từ. Studio chỉ thưởng lượt thu âm đầu tiên của mỗi từ.
- **Huy hiệu:** luật nằm ở `BADGE_RULES` trong `utils/gameRules.ts` và phải khớp mô tả trong `STICKER_BADGES`
  (`data/ipaData.ts`). Có test kiểm tra hai danh sách khớp nhau. Huy hiệu được tính lại từ `progress`,
  không lưu riêng.
- **Đồng bộ cloud:** `hooks/useCloudSync.ts` và `components/Account/AccountMenu.tsx`. Phụ huynh đăng nhập bằng
  mã email 6 số. Khi đăng nhập, dữ liệu máy và cloud được gộp bằng `utils/progressMerge.ts`
  (bộ đếm lấy giá trị lớn hơn, danh sách lấy hợp, điểm bài lấy cao nhất), nên không mất thành tích.
  Sau đó tự lưu (debounce 1,5 giây). Bảng `learning_progress`, mỗi tài khoản một dòng, có RLS.

## 5. Lịch sử thay đổi chính

1. **Review chất lượng** (commit `3c2d6f7`):
   - Sửa 2 lỗi dữ liệu đề: bộ 9 bài 3b không thể đạt 100%, bộ 7 bài 5 có 2 đáp án.
   - Sửa lỗi cày sao vô hạn, 3 huy hiệu không thể mở, và game Thám Tử bị kẹt ở câu cuối.
   - Studio thu âm không còn cộng sao giả khi micro bị từ chối.
   - Sửa effect của phòng Video chạy lại liên tục.
   - Thêm các class animation còn thiếu, gỡ dependency thừa, thêm test.
2. **Subpath và đồng bộ tiến độ** (`f783457`, `13fece7`): app phục vụ dưới `/products/ipa-for-kids/`,
   thêm đăng nhập phụ huynh và đồng bộ Supabase.
3. **14 bộ đề nguyên âm đôi** (`a20e00f`): thêm nhóm âm đôi, bỏ các số lượng ghi cứng trong giao diện.

## 6. Việc còn mở / cần quyết định

- **Giọng đọc và phiên âm lệch nhau:** bộ âm đôi dùng phiên âm giọng Anh (/əʊ/, /ɪə/, /eə/), nhưng giọng đọc mẫu là
  en-US. Ở Bài 1 và Bài 6, bé nghe "go" thành /oʊ/, "hair" có /r/. Hướng xử lý: cho nhóm âm đôi đọc bằng en-GB
  (`speakUS` hiện gắn cứng `en-US`).
- **Bộ âm đơn cũng lẫn kiểu Anh và Mỹ:** app ghi "US Accent" nhưng dữ liệu dùng /ɒ/ (gần như không có trong giọng Mỹ),
  và dấu dài viết bằng dấu hai chấm `:` thay vì `ː`, trong khi bộ âm đôi dùng `ː`. Cần quyết định một chuẩn.
- **Duyệt lại nghĩa tiếng Việt** của bộ âm đôi, nhất là từ nhiều nghĩa (`break`, `change`, `fair`, `post`, `jack`).
- **Bản quyền nhân vật:** Doraemon, Minion, Om Nom là nhân vật có bản quyền (SVG tự vẽ trong `MascotAvatar.tsx`).
  Nên đổi sang nhân vật tự thiết kế nếu mở rộng công khai.
- **Dữ liệu và code thừa:** `MINIMAL_PAIRS_QUESTIONS` trong `ipaData.ts` không còn được dùng (component cũ đã xoá).
  `getMascotReactionMessage` trong `exerciseScoring.ts` chưa được gọi ở đâu.
- **Studio thu âm không chấm phát âm**, chỉ ghi âm để bé nghe lại và so với giọng mẫu.
- **Ảnh chụp màn hình** từ AI Studio nằm ở `docs/screenshots/`, không đóng gói vào bản build.
- **Chưa có test component/UI**, mới chỉ có test logic và dữ liệu. Các thay đổi giao diện gần đây chưa được kiểm
  tra thủ công đầy đủ trên trình duyệt (nhất là nhóm âm đôi và luồng đăng nhập).

## 7. Quy ước

- Nội dung hiển thị và comment viết bằng tiếng Việt.
- Logic thuần đặt trong `utils/` và có test (`*.test.ts`, chạy bằng `node:test` qua `tsx`).
- Không ghi cứng số lượng câu hay số bộ trong UI, luôn lấy từ dữ liệu.
- Side-effect (confetti, âm thanh, timer) không đặt trong hàm cập nhật state. Timer phải được dọn khi unmount.
