// Pure game logic and scoring functions decoupled from UI

export interface GameScoreResult {
  starsEarned: number;
  newStreak: number;
  totalStars: number;
  isCorrect: boolean;
}

export function calculateGameScore(
  isCorrect: boolean,
  currentStreak: number,
  currentStars: number
): GameScoreResult {
  if (!isCorrect) {
    return {
      starsEarned: 0,
      newStreak: 0,
      totalStars: currentStars,
      isCorrect: false,
    };
  }

  const nextStreak = currentStreak + 1;
  // Base 10 stars, plus 5 bonus stars if streak >= 3
  const starsEarned = nextStreak >= 3 ? 15 : 10;
  
  return {
    starsEarned,
    newStreak: nextStreak,
    totalStars: currentStars + starsEarned,
    isCorrect: true,
  };
}

export function cleanIpaSymbol(ipa: string): string {
  return ipa.replace(/[/\[\]ˈˌː̚]/g, '').trim();
}

export function evaluateFinalSound(input: string, correct: string): boolean {
  return input.trim().toLowerCase() === correct.trim().toLowerCase();
}

export function evaluateMinimalPairChoice(
  selectedOption: 'A' | 'B',
  correctOption: 'A' | 'B'
): boolean {
  return selectedOption === correctOption;
}

export interface LearningProgress {
  stars: number;
  /** Số câu đúng ở mini-quiz Cặp Âm Dễ Nhầm */
  solvedPairs: number;
  /** Số câu đúng ở game Thám Tử Âm Cuối */
  solvedFinalSounds: number;
  /** Số từ khác nhau đã luyện ở Ninja Chặn Hơi */
  stopSoundsPracticed: number;
  /** Số lượt thu âm thành công */
  voiceRecordCount: number;
}

export const EMPTY_PROGRESS: LearningProgress = {
  stars: 0,
  solvedPairs: 0,
  solvedFinalSounds: 0,
  stopSoundsPracticed: 0,
  voiceRecordCount: 0,
};

/**
 * Ngưỡng mở khóa huy hiệu. Phải khớp với mô tả trong STICKER_BADGES (data/ipaData.ts).
 */
export const BADGE_RULES: { id: string; isUnlocked: (p: LearningProgress) => boolean }[] = [
  { id: 'badge_star', isUnlocked: (p) => p.stars >= 50 },
  { id: 'badge_i_master', isUnlocked: (p) => p.solvedPairs >= 3 },
  { id: 'badge_final_detective', isUnlocked: (p) => p.solvedFinalSounds >= 3 },
  { id: 'badge_ninja_stop', isUnlocked: (p) => p.stopSoundsPracticed >= 4 },
  { id: 'badge_omnom_candy', isUnlocked: (p) => p.solvedPairs >= 10 },
  { id: 'badge_kpop_mic', isUnlocked: (p) => p.voiceRecordCount >= 5 },
];

export function checkUnlockedBadges(progress: LearningProgress): string[] {
  return BADGE_RULES.filter((rule) => rule.isUnlocked(progress)).map((rule) => rule.id);
}
