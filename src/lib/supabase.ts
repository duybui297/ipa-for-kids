import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/**
 * Client Supabase, hoặc `null` khi chưa cấu hình biến môi trường.
 * Khi `null`, app vẫn chạy bình thường và chỉ lưu tiến độ trên máy.
 */
export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          flowType: 'pkce',
        },
      })
    : null;

/**
 * URL mà link đăng nhập trong email (nếu template có link) sẽ quay về.
 * Bỏ dấu "/" cuối vì Next.js của ethanbui.net tự chuyển /path/ -> /path.
 */
export function getAuthRedirectUrl(): string {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${window.location.origin}${basePath}`;
}
