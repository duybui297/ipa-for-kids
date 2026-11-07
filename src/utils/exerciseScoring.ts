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

export interface ScoreResult {
  correctCount: number;
  totalCount: number;
  scorePercent: number;
  starsEarned: number;
  feedback: string;
}

export function evaluateExercise1(
  answers: Record<number, 'A' | 'B'>,
  data: Exercise1Question[] = EXERCISE_1_DATA
): ScoreResult {
  let correctCount = 0;
  data.forEach((q) => {
    if (answers[q.id] === q.correctChoice) {
      correctCount++;
    }
  });

  const totalCount = data.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé cố gắng thêm nhé!';
  if (scorePercent === 100) feedback = 'Xuất sắc! Bé nghe chuẩn 100% đôi tai vàng!';
  else if (scorePercent >= 75) feedback = 'Rất giỏi! Bé nhận diện các cặp âm rất tốt!';
  else if (scorePercent >= 50) feedback = 'Khá lắm! Bé hãy nghe lại các câu sai nhé!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function evaluateExercise2(
  matchedPairs: Record<string, string>,
  data: Exercise2SymbolItem[] = EXERCISE_2_SYMBOLS
): ScoreResult {
  let correctCount = 0;
  data.forEach((item) => {
    // matchedPairs maps symbol to word letter id (e.g. '/i:/' -> 'C')
    if (matchedPairs[item.symbol] === item.targetWordId) {
      correctCount++;
    }
  });

  const totalCount = data.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé nhớ ôn lại bảng ký hiệu nhé!';
  if (scorePercent === 100) feedback = 'Tuyệt đỉnh! Bé đã nối đúng 12/12 ký hiệu!';
  else if (scorePercent >= 75) feedback = 'Rất cừ! Trí nhớ ký hiệu của bé rất siêu!';
  else if (scorePercent >= 50) feedback = 'Tốt rồi, bé hãy kiểm tra các từ chưa khớp!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function evaluateExercise3(
  set: '3a' | '3b',
  assignments: Record<string, string>, // maps word -> target house symbol
  customSetData?: Exercise3Set
): ScoreResult {
  const data = customSetData || (set === '3a' ? EXERCISE_3A_DATA : EXERCISE_3B_DATA);
  let correctCount = 0;

  data.allWords.forEach((item) => {
    if (assignments[item.word] === item.targetSymbol) {
      correctCount++;
    }
  });

  const totalCount = data.allWords.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé hãy thử sắp xếp lại nhé!';
  if (scorePercent === 100) feedback = 'Tuyệt vời! Cả 4 ngôi nhà đều đón đúng cư dân!';
  else if (scorePercent >= 75) feedback = 'Bé phân biệt các gia đình âm rất chuẩn!';
  else if (scorePercent >= 50) feedback = 'Khá tốt! Xem lại các từ bị nhầm nhà nào!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function evaluateExercise4(
  answers: Record<number, 'A' | 'B'>,
  data: Exercise4Question[] = EXERCISE_4_DATA
): ScoreResult {
  let correctCount = 0;
  data.forEach((q) => {
    if (answers[q.id] === q.correctChoice) {
      correctCount++;
    }
  });

  const totalCount = data.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé rèn luyện thêm nhé!';
  if (scorePercent === 100) feedback = 'Kỳ diệu! Điền đúng 100% phiên âm IPA!';
  else if (scorePercent >= 75) feedback = 'Bé điền ký hiệu rất chuẩn xác!';
  else if (scorePercent >= 50) feedback = 'Làm tốt lắm, xem kỹ lại dấu hai chấm nhé!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function evaluateExercise5(
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>,
  data: Exercise5Question[] = EXERCISE_5_DATA
): ScoreResult {
  let correctCount = 0;
  data.forEach((q) => {
    if (answers[q.id] === q.correctChoice) {
      correctCount++;
    }
  });

  const totalCount = data.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé cố gắng lên nhé!';
  if (scorePercent === 100) feedback = 'Thần sầu! Bé tìm ra tất cả các từ khác biệt!';
  else if (scorePercent >= 75) feedback = 'Bé có khả năng phân tích âm rất tốt!';
  else if (scorePercent >= 50) feedback = 'Tốt rồi, đọc to lại 4 từ để nghe sự khác biệt!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function evaluateExercise6(
  answers: Record<number, 'A' | 'B' | 'C'>,
  data: Exercise6Question[] = EXERCISE_6_DATA
): ScoreResult {
  let correctCount = 0;
  data.forEach((q) => {
    if (answers[q.id] === q.correctChoice) {
      correctCount++;
    }
  });

  const totalCount = data.length;
  const scorePercent = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const starsEarned = correctCount * 2;

  let feedback = 'Bé luyện nghe thêm nhé!';
  if (scorePercent === 100) feedback = 'Đỉnh cao! Đôi tai vàng nhận diện âm thanh tuyệt đối!';
  else if (scorePercent >= 75) feedback = 'Bé nghe và bắt âm rất nhạy!';
  else if (scorePercent >= 50) feedback = 'Khá lắm! Chú ý dấu dài : khi nghe nhé!';

  return { correctCount, totalCount, scorePercent, starsEarned, feedback };
}

export function getMascotReactionMessage(mascotId: string, percent: number): string {
  if (percent === 100) {
    switch (mascotId) {
      case 'doraemon':
        return 'Doraemon tặng bảo bối Bánh mì Trí nhớ! Bé làm đúng trọn vẹn 100% rồi!';
      case 'minions':
        return 'BANANA! Siêu phàm quá bé ơi, đúng 100% luôn nè!';
      case 'omnom':
        return 'Om Nom nhảy múa tặng kẹo ngọt! Bé quá thông minh!';
      default:
        return 'Chiikawa vui mừng vỗ tay rạng rỡ! Bé học giỏi điểm 10 tuyệt đối!';
    }
  }

  if (percent >= 70) {
    return 'Bé làm rất cừ khôi! Nhận sao lấp lánh và mở lời giải chi tiết để xem mẹo phát âm nhé!';
  }

  return 'Đừng lo bé nhé! Nhấn nút "Xem Lời Giải Chi Tiết" để xem hướng dẫn từng câu và làm lại!';
}
