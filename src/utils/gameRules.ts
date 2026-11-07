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

export function checkUnlockedBadges(
  stars: number,
  solvedPairs: number,
  solvedFinalSounds: number,
  voiceRecordCount: number
): string[] {
  const badges: string[] = [];

  if (stars >= 50) badges.push('badge_star');
  if (solvedPairs >= 3) badges.push('badge_i_master');
  if (solvedFinalSounds >= 3) badges.push('badge_final_detective');
  if (solvedPairs >= 5) badges.push('badge_omnom_candy');
  if (voiceRecordCount >= 1) badges.push('badge_kpop_mic');

  return badges;
}
