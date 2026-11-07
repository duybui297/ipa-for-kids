import { AppProgress, ProgressSnapshot } from '../types/progress';

const union = (a: string[], b: string[]) => Array.from(new Set([...a, ...b]));

/**
 * Gộp tiến độ trên máy với tiến độ trên cloud mà không làm mất thành tích:
 * bộ đếm lấy giá trị lớn hơn, danh sách lấy hợp, điểm bài tập lấy điểm cao nhất.
 * (Nếu bé học offline trên 2 máy cùng lúc, bộ đếm có thể ít hơn tổng thực tế,
 * nhưng không bao giờ bị giảm.)
 */
export function mergeProgress(a: AppProgress, b: AppProgress): AppProgress {
  return {
    stars: Math.max(a.stars, b.stars),
    solvedPairs: Math.max(a.solvedPairs, b.solvedPairs),
    solvedFinalSounds: Math.max(a.solvedFinalSounds, b.solvedFinalSounds),
    voiceRecordCount: Math.max(a.voiceRecordCount, b.voiceRecordCount),
    practicedStopWordIds: union(a.practicedStopWordIds, b.practicedStopWordIds),
    recordedWords: union(a.recordedWords, b.recordedWords),
  };
}

export function mergeBestStars(a: Record<string, number>, b: Record<string, number>): Record<string, number> {
  const merged: Record<string, number> = { ...a };
  for (const [key, value] of Object.entries(b)) {
    merged[key] = Math.max(merged[key] ?? 0, value);
  }
  return merged;
}

/** `remote` thắng ở các lựa chọn không phải thành tích (vd: mascot). */
export function mergeSnapshots(local: ProgressSnapshot, remote: ProgressSnapshot): ProgressSnapshot {
  return {
    progress: mergeProgress(local.progress, remote.progress),
    exerciseBestStars: mergeBestStars(local.exerciseBestStars, remote.exerciseBestStars),
    mascot: remote.mascot,
  };
}

export function snapshotsEqual(a: ProgressSnapshot, b: ProgressSnapshot): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}
