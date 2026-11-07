import { MascotId } from './ipa';

/** Tiến độ học của bé, lưu trên máy (localStorage) và đồng bộ lên Supabase khi đăng nhập. */
export interface AppProgress {
  stars: number;
  solvedPairs: number;
  solvedFinalSounds: number;
  voiceRecordCount: number;
  practicedStopWordIds: string[];
  recordedWords: string[];
}

/** Toàn bộ dữ liệu cần đồng bộ của một tài khoản. */
export interface ProgressSnapshot {
  progress: AppProgress;
  /** Sao cao nhất từng đạt ở từng bài tập, key dạng `set1:b3-3a` */
  exerciseBestStars: Record<string, number>;
  mascot: MascotId;
}

export const MASCOT_IDS: readonly MascotId[] = ['chiikawa', 'doraemon', 'minion', 'omnom', 'kpop_hunter'];

const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string');

export function isAppProgress(v: unknown): v is AppProgress {
  if (typeof v !== 'object' || v === null) return false;
  const p = v as Record<string, unknown>;
  return (
    isCount(p.stars) &&
    isCount(p.solvedPairs) &&
    isCount(p.solvedFinalSounds) &&
    isCount(p.voiceRecordCount) &&
    isStringArray(p.practicedStopWordIds) &&
    isStringArray(p.recordedWords)
  );
}

export function isMascotId(v: unknown): v is MascotId {
  return typeof v === 'string' && (MASCOT_IDS as readonly string[]).includes(v);
}
