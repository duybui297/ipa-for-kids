import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw } from 'lucide-react';
import { EXERCISE_6_DATA, Exercise6Question } from '../../data/exerciseWorksheetData';
import { evaluateExercise6, ScoreResult } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';
import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number) => void;
  questions?: Exercise6Question[];
  examSetTitle?: string;
}

export const Exercise6Section: React.FC<Props> = ({
  onEarnStars,
  questions = EXERCISE_6_DATA,
  examSetTitle
}) => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const handleSelect = (questionId: number, choice: 'A' | 'B' | 'C') => {
    soundService.playPop();
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    if (scoreResult) setScoreResult(null);
  };

  const handlePlayAudio = (q: Exercise6Question) => {
    setCurrentlyPlaying(q.id);
    soundService.speakUS(q.spokenWord);
    setTimeout(() => setCurrentlyPlaying(null), 1200);
  };

  const handleCheck = () => {
    const res = evaluateExercise6(answers, questions);
    setScoreResult(res);
    if (res.scorePercent >= 75) {
      if (res.scorePercent < 100) {
        soundService.playChime();
      }
      triggerExerciseConfetti(res.scorePercent);
      onEarnStars(res.starsEarned);
    } else {
      soundService.playError();
    }
  };

  const handleReset = () => {
    setAnswers({});
    setScoreResult(null);
    setShowExplanation(false);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-indigo-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 6 • Nhận diện ký hiệu nguyên âm
            </span>
            {examSetTitle && (
              <span className="bg-indigo-50 text-indigo-800 text-xs font-black px-2.5 py-1 rounded-full border border-indigo-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">8 câu luyện nghe biểu tượng</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Luyện Tai Bắt Ký Hiệu IPA
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Bé bấm nghe một từ phát âm, nhận ra nguyên âm trong từ đó và khoanh ký hiệu A, B hoặc C. Nhớ nhé: <span className="font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">dấu : nghĩa là đọc dài</span>!
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Làm lại
          </button>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="px-3.5 py-2 rounded-2xl border-2 border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            {showExplanation ? 'Ẩn lời giải' : 'Xem lời giải chi tiết'}
          </button>
          <button
            onClick={handleCheck}
            disabled={answeredCount === 0}
            className={`px-5 py-2 rounded-2xl font-black text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
              answeredCount === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-102 active:scale-98 shadow-indigo-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Kiểm tra ({answeredCount}/{questions.length})
          </button>
        </div>
      </div>

      {/* Score Banner */}
      {scoreResult && (
        <div
          className={`p-5 rounded-3xl border-2 animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4 ${
            scoreResult.scorePercent >= 75
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{scoreResult.scorePercent === 100 ? '🎯' : '⭐'}</span>
            <div>
              <div className="font-black text-lg">
                Đúng {scoreResult.correctCount}/{scoreResult.totalCount} câu ({scoreResult.scorePercent}%)
              </div>
              <p className="text-sm font-medium">{scoreResult.feedback}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-black text-sm bg-white/80 px-4 py-2 rounded-2xl border shadow-xs">
            <span>Thưởng: +{scoreResult.starsEarned} sao ⭐</span>
          </div>
        </div>
      )}

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((q) => {
          const userChoice = answers[q.id];
          const isSubmitted = scoreResult !== null;
          const isCorrect = userChoice === q.correctChoice;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl p-5 border-2 transition-all shadow-xs flex flex-col justify-between ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : userChoice
                  ? 'border-indigo-300'
                  : 'border-slate-200 hover:border-indigo-200'
              }`}
            >
              {/* Question Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center">
                    {q.id}
                  </span>
                  <span className="font-bold text-slate-700 text-sm">Câu {q.id}</span>
                </div>

                {/* Big Audio Play Button */}
                <button
                  onClick={() => handlePlayAudio(q)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currentlyPlaying === q.id
                      ? 'bg-indigo-600 text-white scale-105'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  }`}
                  title="Bấm để nghe âm từ"
                >
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>
                    {currentlyPlaying === q.id ? 'Đang phát...' : 'Nghe âm từ'}
                  </span>
                </button>
              </div>

              {/* Spoken Word hint (visible for learning comfort) */}
              <div className="my-2 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Từ mẫu: <strong className="text-slate-800 font-bold">{q.spokenWord}</strong> ({q.wordMeaning})
                </span>
                <span className="font-mono text-indigo-600">{q.fullIpa}</span>
              </div>

              {/* 3 Choices A, B, C */}
              <div className="grid grid-cols-3 gap-2.5 my-3">
                {/* Choice A */}
                <button
                  onClick={() => handleSelect(q.id, 'A')}
                  className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer relative ${
                    userChoice === 'A'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-950 font-black shadow-xs'
                      : 'border-slate-200 bg-white hover:border-indigo-200 text-slate-700'
                  } ${
                    isSubmitted && q.correctChoice === 'A'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400 text-emerald-950 font-black'
                      : ''
                  }`}
                >
                  <div className="text-[10px] font-sans font-black text-slate-400 mb-0.5">A</div>
                  <div className="font-mono text-lg font-black">{q.choiceA}</div>
                </button>

                {/* Choice B */}
                <button
                  onClick={() => handleSelect(q.id, 'B')}
                  className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer relative ${
                    userChoice === 'B'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-950 font-black shadow-xs'
                      : 'border-slate-200 bg-white hover:border-indigo-200 text-slate-700'
                  } ${
                    isSubmitted && q.correctChoice === 'B'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400 text-emerald-950 font-black'
                      : ''
                  }`}
                >
                  <div className="text-[10px] font-sans font-black text-slate-400 mb-0.5">B</div>
                  <div className="font-mono text-lg font-black">{q.choiceB}</div>
                </button>

                {/* Choice C */}
                <button
                  onClick={() => handleSelect(q.id, 'C')}
                  className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer relative ${
                    userChoice === 'C'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-950 font-black shadow-xs'
                      : 'border-slate-200 bg-white hover:border-indigo-200 text-slate-700'
                  } ${
                    isSubmitted && q.correctChoice === 'C'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400 text-emerald-950 font-black'
                      : ''
                  }`}
                >
                  <div className="text-[10px] font-sans font-black text-slate-400 mb-0.5">C</div>
                  <div className="font-mono text-lg font-black">{q.choiceC}</div>
                </button>
              </div>

              {/* Status Indicator */}
              {isSubmitted && (
                <div
                  className={`mt-1 py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                    isCorrect
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Chính xác! Đáp án đúng: {q.correctChoice} ({q.targetSymbol})</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Chưa đúng! Đáp án đúng là {q.correctChoice}: {q.targetSymbol}</span>
                    </>
                  )}
                </div>
              )}

              {/* Explanation */}
              {(showExplanation || isSubmitted) && (
                <div className="mt-2.5 p-3 bg-indigo-50/80 border border-indigo-200 rounded-2xl text-xs text-indigo-950 animate-fade-in flex items-start gap-1.5">
                  <span className="font-bold text-indigo-800 shrink-0">💡 Lời giải:</span>
                  <p className="leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
