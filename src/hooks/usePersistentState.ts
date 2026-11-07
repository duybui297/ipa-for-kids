import { useEffect, useState } from 'react';

function readStoredValue<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    // localStorage có thể bị chặn (chế độ ẩn danh, iframe sandbox) hoặc dữ liệu hỏng
    return fallback;
  }
}

/**
 * useState có lưu vào localStorage. Dữ liệu đọc lên được kiểm tra bằng `isValid`
 * để một giá trị hỏng/không tương thích không làm vỡ app.
 */
export function usePersistentState<T>(
  key: string,
  initialValue: T | (() => T),
  isValid: (value: unknown) => value is T
) {
  const [value, setValue] = useState<T>(() => {
    const fallback = typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
    return readStoredValue(key, fallback, isValid);
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Bỏ qua: tiến độ chỉ không được lưu lại, app vẫn chạy bình thường
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export function isNumberRecord(value: unknown): value is Record<string, number> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((v) => typeof v === 'number' && Number.isFinite(v) && v >= 0)
  );
}
