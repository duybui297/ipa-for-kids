import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw } from 'lucide-react';
import { EXERCISE_5_DATA, Exercise5Question } from '../../data/exerciseWorksheetData';
import { evaluateExercise5, ScoreResult, isRewardEligible, describeReward } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';
import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number, subKey?: string) => number;
  questions?: Exercise5Question[];
  examSetTitle?: string;
}

export const Exercise5Section: React.FC<Props> = ({
  onEarnStars,
  questions = EXERCISE_5_DATA,
  examSetTitle
}) => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [awardedStars, setAwardedStars] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (questionId: number, letter: 'A' | 'B' | 'C' | 'D') => {
    soundService.playPop();
    setAnswers((prev) => ({ ...prev, [questionId]: letter }));
    if (scoreResult) setScoreResult(null);
  };

  const handleCheck = () => {
    const res = evaluateExercise5(answers, questions);
    setScoreResult(res);
    const awarded = isRewardEligible(res) ? onEarnStars(res.starsEarned) : 0;
    setAwardedStars(awarded);
    if (isRewardEligible(res)) {
      if (res.scorePercent < 100) {
        soundService.playChime();
      }
      triggerExerciseConfetti(res.scorePercent);
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
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-rose-100 text-rose-800 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 5 • Tìm từ khác âm (Odd One Out)
            </span>
            {examSetTitle && (
              <span className="bg-rose-50 text-rose-800 text-xs font-black px-2.5 py-1 rounded-full border border-rose-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">6 câu hỏi 4 lựa chọn</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Thám Tử Truy Tìm Âm Khác Biệt
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Trong mỗi câu có <span className="font-bold text-emerald-600">3 từ cùng một nguyên âm</span> và <span className="font-bold text-rose-600">1 từ khác biệt</span>. Bé đọc to, nghe và khoanh chữ cái của từ khác nhé!
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
                : 'bg-rose-600 hover:bg-rose-700 text-white hover:scale-102 active:scale-98 shadow-rose-200'
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
            <span className="text-3xl">{scoreResult.scorePercent === 100 ? '🔍' : '⭐'}</span>
            <div>
              <div className="font-black text-lg">
                Đúng {scoreResult.correctCount}/{scoreResult.totalCount} câu ({scoreResult.scorePercent}%)
              </div>
              <p className="text-sm font-medium">{scoreResult.feedback}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-black text-sm bg-white/80 px-4 py-2 rounded-2xl border shadow-xs">
            <span>{describeReward(scoreResult, awardedStars)}</span>
          </div>
        </div>
      )}

      {/* Questions Cards */}
      <div className="space-y-4">
        {questions.map((q) => {
          const userChoice = answers[q.id];
          const isSubmitted = scoreResult !== null;
          const isCorrect = userChoice === q.correctChoice;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl p-5 border-2 transition-all shadow-xs ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : userChoice
                  ? 'border-rose-300'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-800 font-black text-xs flex items-center justify-center">
                    {q.id}
                  </span>
                  <span className="font-bold text-slate-700 text-sm">Câu {q.id}: Tìm từ khác nhóm âm</span>
                </div>
                {isSubmitted && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng ({q.correctChoice})
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> Sai (Đáp án: {q.correctChoice})
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* 4 Choices Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
                {q.words.map((item) => {
                  const isSelected = userChoice === item.letter;
                  const isTargetCorrect = q.correctChoice === item.letter;

                  return (
                    <div
                      key={item.letter}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelect(q.id, item.letter)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelect(q.id, item.letter);
                        }
                      }}
                      className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer relative select-none ${
                        isSelected
                          ? 'border-rose-500 bg-rose-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-rose-200 hover:bg-slate-50'
                      } ${
                        isSubmitted && isTargetCorrect
                          ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 text-xs font-black flex items-center justify-center">
                          {item.letter}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            soundService.speakUS(item.word);
                          }}
                          className="p-1 hover:bg-rose-100 rounded-full text-slate-400 hover:text-rose-600"
                          title={`Nghe thử ${item.word}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-base font-black text-slate-800">{item.word}</div>
                      <div className="text-xs font-mono font-bold text-rose-600">{item.ipa}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.meaning}</div>

                      {/* Vowel sound badge */}
                      <div className="mt-2 text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md inline-block">
                        Âm: {item.vowelSound}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation note */}
              {(showExplanation || isSubmitted) && (
                <div className="mt-2 p-3 bg-rose-50/80 border border-rose-200 rounded-2xl text-xs text-rose-950 animate-fade-in flex items-start gap-1.5">
                  <span className="font-bold text-rose-800 shrink-0">💡 Lời giải:</span>
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
