import {
  EXERCISE_1_DATA,
  EXERCISE_2_SYMBOLS,
  EXERCISE_3A_DATA,
  EXERCISE_3B_DATA,
  EXERCISE_4_DATA,
  EXERCISE_5_DATA,
  EXERCISE_6_DATA,
  Exercise1Question,
  Exercise2SymbolItem,
  Exercise3Set,
  Exercise4Question,
  Exercise5Question,
  Exercise6Question
} from '../data/exerciseWorksheetData';
import type { MascotId } from '../types/ipa';

export interface ScoreResult {
  correctCount: number;
  totalCount: number;
  scorePercent: number;
  starsEarned: number;
  feedback: string;
}

/** Bé cần đạt tối thiểu ngưỡng này (%) để được cộng sao cho một bài tập. */
export const REWARD_THRESHOLD_PERCENT = 75;
export const STARS_PER_CORRECT_ANSWER = 2;

export function isRewardEligible(result: ScoreResult): boolean {
  return result.scorePercent >= REWARD_THRESHOLD_PERCENT;
}

interface FeedbackMessages {
  perfect: string;
  great: string;
  good: string;
  tryAgain: string;
}

function buildScoreResult(correctCount: number, totalCount: number, messages: FeedbackMessages): ScoreResult {
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  let feedback = messages.tryAgain;
  if (scorePercent === 100) feedback = messages.perfect;
  else if (scorePercent >= 75) feedback = messages.great;
  else if (scorePercent >= 50) feedback = messages.good;

  return {
    correctCount,
    totalCount,
    scorePercent,
    starsEarned: correctCount * STARS_PER_CORRECT_ANSWER,
    feedback,
  };
}

function countCorrectChoices<Choice extends string>(
  answers: Record<number, Choice>,
  data: { id: number; correctChoice: Choice }[]
): number {
  return data.filter((q) => answers[q.id] === q.correctChoice).length;
}

export function evaluateExercise1(
  answers: Record<number, 'A' | 'B'>,
  data: Exercise1Question[] = EXERCISE_1_DATA
): ScoreResult {
  return buildScoreResult(countCorrectChoices(answers, data), data.length, {
    perfect: 'Xuất sắc! Bé nghe chuẩn 100% đôi tai vàng!',
    great: 'Rất giỏi! Bé nhận diện các cặp âm rất tốt!',
    good: 'Khá lắm! Bé hãy nghe lại các câu sai nhé!',
    tryAgain: 'Bé cố gắng thêm nhé!',
  });
}

export function evaluateExercise2(
  matchedPairs: Record<string, string>, // symbol -> word letter id (e.g. '/i:/' -> 'C')
  data: Exercise2SymbolItem[] = EXERCISE_2_SYMBOLS
): ScoreResult {
  const correctCount = data.filter((item) => matchedPairs[item.symbol] === item.targetWordId).length;
  return buildScoreResult(correctCount, data.length, {
    perfect: `Tuyệt đỉnh! Bé đã nối đúng ${data.length}/${data.length} ký hiệu!`,
    great: 'Rất cừ! Trí nhớ ký hiệu của bé rất siêu!',
    good: 'Tốt rồi, bé hãy kiểm tra các từ chưa khớp!',
    tryAgain: 'Bé nhớ ôn lại bảng ký hiệu nhé!',
  });
}

export function evaluateExercise3(
  set: '3a' | '3b',
  assignments: Record<string, string>, // word -> house symbol
  customSetData?: Exercise3Set
): ScoreResult {
  const data = customSetData || (set === '3a' ? EXERCISE_3A_DATA : EXERCISE_3B_DATA);
  const correctCount = data.allWords.filter((item) => assignments[item.word] === item.targetSymbol).length;
  return buildScoreResult(correctCount, data.allWords.length, {
    perfect: `Tuyệt vời! Cả ${data.houses.length} ngôi nhà đều đón đúng cư dân!`,
    great: 'Bé phân biệt các gia đình âm rất chuẩn!',
    good: 'Khá tốt! Xem lại các từ bị nhầm nhà nào!',
    tryAgain: 'Bé hãy thử sắp xếp lại nhé!',
  });
}

export function evaluateExercise4(
  answers: Record<number, 'A' | 'B'>,
  data: Exercise4Question[] = EXERCISE_4_DATA
): ScoreResult {
  return buildScoreResult(countCorrectChoices(answers, data), data.length, {
    perfect: 'Kỳ diệu! Điền đúng 100% phiên âm IPA!',
    great: 'Bé điền ký hiệu rất chuẩn xác!',
    good: 'Làm tốt lắm, xem kỹ lại các ký hiệu bị nhầm nhé!',
    tryAgain: 'Bé rèn luyện thêm nhé!',
  });
}

export function evaluateExercise5(
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>,
  data: Exercise5Question[] = EXERCISE_5_DATA
): ScoreResult {
  return buildScoreResult(countCorrectChoices(answers, data), data.length, {
    perfect: 'Thần sầu! Bé tìm ra tất cả các từ khác biệt!',
    great: 'Bé có khả năng phân tích âm rất tốt!',
    good: 'Tốt rồi, đọc to lại 4 từ để nghe sự khác biệt!',
    tryAgain: 'Bé cố gắng lên nhé!',
  });
}

export function evaluateExercise6(
  answers: Record<number, 'A' | 'B' | 'C'>,
  data: Exercise6Question[] = EXERCISE_6_DATA
): ScoreResult {
  return buildScoreResult(countCorrectChoices(answers, data), data.length, {
    perfect: 'Đỉnh cao! Đôi tai vàng nhận diện âm thanh tuyệt đối!',
    great: 'Bé nghe và bắt âm rất nhạy!',
    good: 'Khá lắm! Nghe thật kỹ để phân biệt các âm gần giống nhau nhé!',
    tryAgain: 'Bé luyện nghe thêm nhé!',
  });
}

export function getMascotReactionMessage(mascotId: MascotId, percent: number): string {
  if (percent === 100) {
    switch (mascotId) {
      case 'doraemon':
        return 'Doraemon tặng bảo bối Bánh mì Trí nhớ! Bé làm đúng trọn vẹn 100% rồi!';
      case 'minion':
        return 'BANANA! Siêu phàm quá bé ơi, đúng 100% luôn nè!';
      case 'omnom':
        return 'Om Nom nhảy múa tặng kẹo ngọt! Bé quá thông minh!';
      case 'kpop_hunter':
        return 'Jennie bắn tim tặng bé! Bắt trọn 100% các âm luôn!';
      default:
        return 'Chiikawa vui mừng vỗ tay rạng rỡ! Bé học giỏi điểm 10 tuyệt đối!';
    }
  }

  if (percent >= REWARD_THRESHOLD_PERCENT) {
    return 'Bé làm rất cừ khôi! Nhận sao lấp lánh và mở lời giải chi tiết để xem mẹo phát âm nhé!';
  }

  return 'Đừng lo bé nhé! Nhấn nút "Xem Lời Giải Chi Tiết" để xem hướng dẫn từng câu và làm lại!';
}

/** Dòng chữ hiển thị phần thưởng sau khi bé bấm "Kiểm tra". */
export function describeReward(result: ScoreResult, awardedStars: number): string {
  if (!isRewardEligible(result)) {
    return `Đạt từ ${REWARD_THRESHOLD_PERCENT}% để nhận sao nhé!`;
  }
  if (awardedStars > 0) {
    return `Thưởng: +${awardedStars} sao ⭐`;
  }
  return 'Bé đã nhận đủ sao cho bài này rồi ⭐';
}
