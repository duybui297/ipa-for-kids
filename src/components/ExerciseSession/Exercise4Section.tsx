import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw } from 'lucide-react';
import { EXERCISE_4_DATA, Exercise4Question } from '../../data/exerciseWorksheetData';
import { evaluateExercise4, ScoreResult, isRewardEligible, describeReward } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';
import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number, subKey?: string) => number;
  questions?: Exercise4Question[];
  examSetTitle?: string;
}

export const Exercise4Section: React.FC<Props> = ({
  onEarnStars,
  questions = EXERCISE_4_DATA,
  examSetTitle
}) => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [awardedStars, setAwardedStars] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (questionId: number, choice: 'A' | 'B') => {
    soundService.playPop();
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    if (scoreResult) setScoreResult(null);
  };

  const handleCheck = () => {
    const res = evaluateExercise4(answers, questions);
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
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-100 text-amber-800 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 4 • Điền ký hiệu còn thiếu
            </span>
            {examSetTitle && (
              <span className="bg-amber-50 text-amber-800 text-xs font-black px-2.5 py-1 rounded-full border border-amber-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">8 câu hỏi phiên âm</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Mảnh Ghép IPA Bị Thiếu: Khoanh Ký Hiệu Chuẩn
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Phiên âm bị mất một nguyên âm (dấu gạch dưới <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-700">_</code>). Bé đọc từ, nghe âm còn thiếu rồi chọn A hoặc B nhé!
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
                : 'bg-amber-600 hover:bg-amber-700 text-white hover:scale-102 active:scale-98 shadow-amber-200'
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
            <span className="text-3xl">{scoreResult.scorePercent === 100 ? '⭐' : '📝'}</span>
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

      {/* Worksheet Table / Card View */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xs overflow-hidden">
        {/* Table header */}
        <div className="hidden sm:grid grid-cols-12 gap-3 p-4 bg-slate-50 border-b border-slate-200 font-black text-xs text-slate-500 uppercase tracking-wider">
          <div className="col-span-1 text-center">Câu</div>
          <div className="col-span-3">Từ vựng</div>
          <div className="col-span-3">Phiên âm khuyết</div>
          <div className="col-span-5 text-center">Chọn ký hiệu bổ sung (A hoặc B)</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">
          {questions.map((q) => {
            const userChoice = answers[q.id];
            const isSubmitted = scoreResult !== null;
            const isCorrect = userChoice === q.correctChoice;

            return (
              <div
                key={q.id}
                className={`p-4 transition-colors ${
                  isSubmitted
                    ? isCorrect
                      ? 'bg-emerald-50/40'
                      : 'bg-rose-50/40'
                    : 'hover:bg-slate-50/50'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* Col 1: Câu No */}
                  <div className="sm:col-span-1 flex items-center sm:justify-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 font-black text-xs flex items-center justify-center">
                      {q.id}
                    </span>
                    <span className="sm:hidden font-bold text-slate-700 text-sm">Câu {q.id}</span>
                  </div>

                  {/* Col 2: Từ */}
                  <div className="sm:col-span-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => soundService.speakUS(q.word)}
                      className="p-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-600 transition-colors"
                      title={`Nghe phát âm ${q.word}`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="font-black text-slate-900 text-base">{q.word}</div>
                      <div className="text-[11px] text-slate-500">{q.meaning}</div>
                    </div>
                  </div>

                  {/* Col 3: Phiên âm khuyết */}
                  <div className="sm:col-span-3">
                    <span className="font-mono text-base font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200 inline-block">
                      {q.templateIpa}
                    </span>
                  </div>

                  {/* Col 4: Choices A & B */}
                  <div className="sm:col-span-5 flex items-center justify-start sm:justify-center gap-3">
                    {/* Choice A */}
                    <button
                      onClick={() => handleSelect(q.id, 'A')}
                      className={`px-4 py-2 rounded-2xl border-2 font-mono text-base font-black flex items-center gap-2 transition-all cursor-pointer ${
                        userChoice === 'A'
                          ? 'border-amber-500 bg-amber-100 text-amber-900 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-amber-300 text-slate-700'
                      } ${
                        isSubmitted && q.correctChoice === 'A'
                          ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400 text-emerald-900'
                          : ''
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-white text-slate-600 text-xs font-sans font-bold flex items-center justify-center">
                        A
                      </span>
                      <span>{q.choiceA}</span>
                    </button>

                    {/* Choice B */}
                    <button
                      onClick={() => handleSelect(q.id, 'B')}
                      className={`px-4 py-2 rounded-2xl border-2 font-mono text-base font-black flex items-center gap-2 transition-all cursor-pointer ${
                        userChoice === 'B'
                          ? 'border-amber-500 bg-amber-100 text-amber-900 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-amber-300 text-slate-700'
                      } ${
                        isSubmitted && q.correctChoice === 'B'
                          ? 'ring-2 ring-emerald-500 bg-emerald-50 border-emerald-400 text-emerald-900'
                          : ''
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md bg-white text-slate-600 text-xs font-sans font-bold flex items-center justify-center">
                        B
                      </span>
                      <span>{q.choiceB}</span>
                    </button>

                    {/* Result icon if submitted */}
                    {isSubmitted && (
                      <span className="ml-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-500" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Explanation text */}
                {(showExplanation || isSubmitted) && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600 flex items-start gap-1.5 animate-fade-in">
                    <span className="font-bold text-amber-700 shrink-0">💡 Giải thích:</span>
                    <span>
                      {q.explanation} (Phiên âm đầy đủ:{' '}
                      <strong className="font-mono text-slate-800">{q.fullIpa}</strong>)
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
