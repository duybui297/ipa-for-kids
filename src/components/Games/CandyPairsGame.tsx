import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { triggerGameVictoryConfetti, triggerStarMilestoneConfetti } from '../../utils/confetti';
import { MINIMAL_PAIRS_QUESTIONS } from '../../data/ipaData';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Volume2, Sparkles, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { soundService } from '../../services/speechService';
import { calculateGameScore } from '../../utils/gameRules';

interface CandyPairsGameProps {
  mascotId: MascotId;
  onEarnStars: (stars: number) => void;
  onGameComplete?: () => void;
}

export const CandyPairsGame: React.FC<CandyPairsGameProps> = ({
  mascotId,
  onEarnStars,
  onGameComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [isMascotEating, setIsMascotEating] = useState(false);

  const question = MINIMAL_PAIRS_QUESTIONS[currentIndex];
  const targetWord = question.correctOption === 'A' ? question.optionA.word : question.optionB.word;

  const playAudio = (slow: boolean = false) => {
    soundService.speakUS(targetWord, slow ? 0.65 : 0.95);
  };

  const handleSelect = (option: 'A' | 'B') => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === question.correctOption;
    const scoreResult = calculateGameScore(isCorrect, streak, score);

    setStreak(scoreResult.newStreak);
    setScore(scoreResult.totalStars);

    if (isCorrect) {
      soundService.playOmNomChomp();
      setIsMascotEating(true);
      onEarnStars(scoreResult.starsEarned);

      // Check if completing final question
      const isFinalQuestion = currentIndex === MINIMAL_PAIRS_QUESTIONS.length - 1;
      if (isFinalQuestion) {
        triggerGameVictoryConfetti();
      } else if (scoreResult.newStreak >= 3 && scoreResult.newStreak % 3 === 0) {
        triggerStarMilestoneConfetti(scoreResult.totalStars);
      } else {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#f472b6', '#38bdf8', '#fbbf24', '#4ade80'],
          shapes: ['circle', 'star'],
        });
      }
      setTimeout(() => setIsMascotEating(false), 1200);
    } else {
      soundService.playWrongBoing();
    }
  };

  const handleNext = () => {
    if (currentIndex < MINIMAL_PAIRS_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      if (onGameComplete) onGameComplete();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStreak(0);
  };

  const isCorrectAnswer = selectedOption === question.correctOption;

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-amber-200 flex flex-col gap-5">
      {/* Top Game Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍬</span>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Cho Bạn Ăn Kẹo Âm Tiết</h2>
            <p className="text-xs text-slate-500">Phân biệt chuẩn xác âm i ngắn /ɪ/ vs i dài /iː/</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-300">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-black text-amber-900">{score} sao</span>
          </div>
          {streak >= 2 && (
            <div className="hidden sm:flex items-center gap-1 bg-rose-50 px-2.5 py-1 rounded-2xl border border-rose-300 text-xs font-bold text-rose-600 animate-pulse">
              🔥 Chuỗi x{streak}
            </div>
          )}
        </div>
      </div>

      {/* Progress pill */}
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-linear-to-r from-pink-400 to-amber-400 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / MINIMAL_PAIRS_QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Mascot Feeding Arena */}
      <div className="bg-linear-to-b from-amber-50/70 via-pink-50/50 to-purple-50/70 rounded-3xl p-6 flex flex-col items-center justify-center border border-amber-100 relative overflow-hidden">
        <div className="absolute top-3 left-4 text-xs font-black text-slate-400 uppercase tracking-widest">
          Câu {currentIndex + 1} / {MINIMAL_PAIRS_QUESTIONS.length}
        </div>

        <MascotAvatar
          mascotId={mascotId}
          size="lg"
          mood={isMascotEating ? 'speaking' : isCorrectAnswer ? 'cheering' : 'idle'}
          showSpeech={true}
          speechText={
            isAnswered
              ? isCorrectAnswer
                ? 'Ngon tuyệt! Bé giỏi quá! 🍭'
                : 'Thử nghe lại xem nào bé ơi! 👂'
              : 'Nghe kỹ và chọn đúng kẹo cho tớ nhé!'
          }
        />

        {/* Audio Listen Buttons */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => playAudio(false)}
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black rounded-2xl shadow-lg shadow-pink-200 transition-transform active:scale-95 text-base cursor-pointer"
          >
            <Volume2 className="w-5 h-5 animate-bounce" />
            Bấm Nghe Âm Thanh
          </button>
          <button
            onClick={() => playAudio(true)}
            className="px-3.5 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200 shadow-xs transition-colors text-xs flex items-center gap-1 cursor-pointer"
            title="Nghe chậm"
          >
            🐢 Chậm 0.6x
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500">{question.promptTextVi}</p>
      </div>

      {/* Two Big Candy Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Option A */}
        <button
          onClick={() => handleSelect('A')}
          disabled={isAnswered}
          className={`relative p-5 rounded-3xl border-3 text-left transition-all cursor-pointer flex items-center justify-between ${
            isAnswered
              ? question.correctOption === 'A'
                ? 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-100'
                : selectedOption === 'A'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'bg-slate-50 border-slate-200 opacity-60'
              : 'bg-white hover:bg-pink-50/50 border-pink-200 hover:border-pink-400 shadow-md hover:-translate-y-1'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl p-2 bg-pink-100 rounded-2xl">{question.optionA.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-800">{question.optionA.word}</span>
                <span className="text-xs font-ipa font-bold px-2 py-0.5 bg-pink-100 text-pink-700 rounded-lg">
                  {question.optionA.ipa}
                </span>
              </div>
              <span className="text-xs text-slate-500">{question.optionA.meaningVi}</span>
            </div>
          </div>
          {isAnswered && question.correctOption === 'A' && (
            <CheckCircle2 className="w-7 h-7 text-emerald-500 shrink-0" />
          )}
        </button>

        {/* Option B */}
        <button
          onClick={() => handleSelect('B')}
          disabled={isAnswered}
          className={`relative p-5 rounded-3xl border-3 text-left transition-all cursor-pointer flex items-center justify-between ${
            isAnswered
              ? question.correctOption === 'B'
                ? 'bg-emerald-50 border-emerald-500 ring-4 ring-emerald-100'
                : selectedOption === 'B'
                ? 'bg-rose-50 border-rose-400 opacity-80'
                : 'bg-slate-50 border-slate-200 opacity-60'
              : 'bg-white hover:bg-sky-50/50 border-sky-200 hover:border-sky-400 shadow-md hover:-translate-y-1'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl p-2 bg-sky-100 rounded-2xl">{question.optionB.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-800">{question.optionB.word}</span>
                <span className="text-xs font-ipa font-bold px-2 py-0.5 bg-sky-100 text-sky-700 rounded-lg">
                  {question.optionB.ipa}
                </span>
              </div>
              <span className="text-xs text-slate-500">{question.optionB.meaningVi}</span>
            </div>
          </div>
          {isAnswered && question.correctOption === 'B' && (
            <CheckCircle2 className="w-7 h-7 text-emerald-500 shrink-0" />
          )}
        </button>
      </div>

      {/* Answer Explanation & Next Round Action */}
      {isAnswered && (
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
          <div className="text-xs sm:text-sm text-slate-700 flex-1">
            <span className="font-bold text-slate-900 block mb-1">
              {isCorrectAnswer ? '🎉 Tuyệt vời! Giải thích cho bé:' : '💡 Gợi ý nhớ lâu:'}
            </span>
            <p>{question.explanationVi}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm shrink-0 cursor-pointer"
          >
            {currentIndex < MINIMAL_PAIRS_QUESTIONS.length - 1 ? (
              <>
                Câu tiếp theo <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Chơi lại màn này <RotateCcw className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
