import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { triggerGameVictoryConfetti, triggerStarMilestoneConfetti } from '../../utils/confetti';
import { FINAL_SOUND_QUESTIONS } from '../../data/ipaData';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Volume2, ArrowRight, RotateCcw } from 'lucide-react';
import { soundService } from '../../services/speechService';
import { calculateGameScore, evaluateFinalSound } from '../../utils/gameRules';

interface FinalSoundDetectiveProps {
  mascotId: MascotId;
  onEarnStars: (stars: number) => void;
  /** Gọi mỗi khi bé chọn đúng một âm cuối (dùng để mở khóa huy hiệu). */
  onCorrectAnswer?: () => void;
}

export const FinalSoundDetective: React.FC<FinalSoundDetectiveProps> = ({
  mascotId,
  onEarnStars,
  onCorrectAnswer,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = FINAL_SOUND_QUESTIONS[currentIndex];

  const playWordAudio = (slow: boolean = false) => {
    soundService.speakUS(question.wordFull, slow ? 0.6 : 0.95);
  };

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = evaluateFinalSound(option, question.correctOption);
    const scoreResult = calculateGameScore(isCorrect, streak, score);

    setStreak(scoreResult.newStreak);
    setScore(scoreResult.totalStars);

    if (isCorrect) {
      soundService.playChime();
      onEarnStars(scoreResult.starsEarned);
      onCorrectAnswer?.();
      setCorrectCount((prev) => prev + 1);

      const isFinalQuestion = currentIndex === FINAL_SOUND_QUESTIONS.length - 1;
      if (isFinalQuestion) {
        triggerGameVictoryConfetti();
      } else if (scoreResult.newStreak >= 3 && scoreResult.newStreak % 3 === 0) {
        triggerStarMilestoneConfetti(scoreResult.totalStars);
      } else {
        confetti({
          particleCount: 55,
          spread: 75,
          origin: { y: 0.65 },
          colors: ['#a855f7', '#38bdf8', '#fbbf24', '#f43f5e'],
          shapes: ['circle', 'star'],
        });
      }
    } else {
      soundService.playWrongBoing();
    }
  };

  const handleNext = () => {
    if (currentIndex < FINAL_SOUND_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      soundService.playChime();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setIsFinished(false);
    soundService.playPop();
  };

  const isCorrect = selectedOption !== null && evaluateFinalSound(selectedOption, question.correctOption);

  if (isFinished) {
    const total = FINAL_SOUND_QUESTIONS.length;
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-purple-200 flex flex-col items-center gap-4 text-center">
        <MascotAvatar mascotId={mascotId} size="lg" mood={correctCount === total ? 'cheering' : 'happy'} />
        <h2 className="text-2xl font-black text-slate-800">🏆 Hoàn thành hồ sơ phá án!</h2>
        <p className="text-sm text-slate-600">
          Bé đã bắt đúng <strong className="text-purple-700">{correctCount}/{total}</strong> âm cuối và nhận{' '}
          <strong className="text-amber-600">{score} sao</strong>.
        </p>
        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Chơi lại từ đầu
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-purple-200 flex flex-col gap-5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🕵️‍♀️</span>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Thám Tử Âm Cuối (Final Sound)</h2>
            <p className="text-xs text-slate-500">Bắt trọn âm đuôi - Tuyệt đối không nuốt âm!</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-purple-50 px-3 py-1.5 rounded-2xl border border-purple-300">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-black text-purple-900">{score} sao</span>
          </div>
          {streak >= 2 && (
            <div className="hidden sm:flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-2xl border border-amber-300 text-xs font-bold text-amber-700 animate-bounce">
              🔥 x{streak}
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-linear-to-r from-purple-400 to-indigo-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / FINAL_SOUND_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Detective Board */}
      <div className="bg-linear-to-b from-purple-50/70 via-indigo-50/50 to-pink-50/70 rounded-3xl p-6 flex flex-col items-center justify-center border border-purple-100 relative">
        <div className="absolute top-3 left-4 text-xs font-black text-slate-400 uppercase tracking-widest">
          Vụ án âm thanh {currentIndex + 1} / {FINAL_SOUND_QUESTIONS.length}
        </div>

        <div className="flex items-center gap-4 mb-2">
          <MascotAvatar
            mascotId={mascotId}
            size="md"
            mood={isAnswered ? (isCorrect ? 'happy' : 'surprised') : 'idle'}
          />
          <div className="text-5xl">{question.emoji}</div>
        </div>

        {/* Word with Missing Blank */}
        <div className="my-4 bg-white/90 backdrop-blur-xs px-8 py-4 rounded-3xl shadow-md border-2 border-purple-200 flex items-center justify-center gap-2">
          <span className="text-4xl sm:text-5xl font-black text-slate-800 tracking-wider">
            {question.wordIncomplete.replace(/_/g, '')}
          </span>
          <span
            className={`text-4xl sm:text-5xl font-black px-3 py-1 rounded-2xl transition-all ${
              isAnswered
                ? isCorrect
                  ? 'bg-emerald-100 text-emerald-600 border-2 border-emerald-400 scale-110'
                  : 'bg-rose-100 text-rose-600 border-2 border-rose-400'
                : 'bg-purple-100 text-purple-600 border-2 border-dashed border-purple-400 animate-pulse'
            }`}
          >
            {isAnswered ? question.correctOption : '?'}
          </span>
        </div>

        {/* Audio buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => playWordAudio(false)}
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-md shadow-purple-200 transition-transform active:scale-95 text-sm cursor-pointer"
          >
            <Volume2 className="w-4 h-4 animate-bounce" />
            Nghe âm đuôi mẫu
          </button>
          <button
            onClick={() => playWordAudio(true)}
            className="px-3 py-2 bg-white text-slate-700 text-xs font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer"
          >
            🐢 Nghe chậm
          </button>
        </div>

        <span className="text-xs text-slate-500 mt-2">
          Ý nghĩa từ: <span className="font-semibold text-slate-700">{question.meaningVi}</span>
        </span>
      </div>

      {/* Consonant Options Badges */}
      <div>
        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-2 text-center sm:text-left">
          Chọn âm đuôi bạn vừa nghe thấy để điền vào chỗ trống:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {question.options.map((opt) => {
            const isOptCorrect = opt.toLowerCase() === question.correctOption.toLowerCase();
            const isOptSelected = selectedOption === opt;

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
                className={`py-4 px-6 rounded-2xl font-black text-2xl transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isAnswered
                    ? isOptCorrect
                      ? 'bg-emerald-500 text-white ring-4 ring-emerald-200 shadow-lg scale-105'
                      : isOptSelected
                      ? 'bg-rose-400 text-white'
                      : 'bg-slate-100 text-slate-400 opacity-50'
                    : 'bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-500 text-slate-800 shadow-sm hover:-translate-y-1'
                }`}
              >
                <span>-{opt}</span>
                <span className="text-[10px] font-ipa font-normal opacity-80">
                  {opt === 't' ? '/t/' : opt === 'd' ? '/d/' : opt === 'sh' ? '/ʃ/' : opt === 'ch' ? '/tʃ/' : `/${opt}/`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation Banner */}
      {isAnswered && (
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
          <div className="text-xs sm:text-sm text-slate-700 flex-1">
            <span className="font-bold text-slate-900 block mb-0.5">
              {isCorrect ? '🎯 Phá án thành công!' : '🔎 Thám tử nhớ nhé:'}
            </span>
            <p>{question.explanationVi}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm shrink-0 cursor-pointer"
          >
            {currentIndex < FINAL_SOUND_QUESTIONS.length - 1 ? (
              <>
                Từ tiếp theo <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Hoàn thành xuất sắc! 🏆
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
