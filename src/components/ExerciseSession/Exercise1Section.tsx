import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw } from 'lucide-react';
import { EXERCISE_1_DATA, Exercise1Question } from '../../data/exerciseWorksheetData';
import { evaluateExercise1, ScoreResult } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';

import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number) => void;
  questions?: Exercise1Question[];
  examSetTitle?: string;
}

export const Exercise1Section: React.FC<Props> = ({
  onEarnStars,
  questions = EXERCISE_1_DATA,
  examSetTitle
}) => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const handleSelect = (questionId: number, choice: 'A' | 'B') => {
    soundService.playPop();
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    // Reset submitted score if user changes answers
    if (scoreResult) setScoreResult(null);
  };

  const handlePlayAudio = (q: Exercise1Question) => {
    setCurrentlyPlaying(q.id);
    soundService.speakUS(q.targetAudioWord);
    setTimeout(() => setCurrentlyPlaying(null), 1200);
  };

  const handleCheckAnswers = () => {
    const result = evaluateExercise1(answers, questions);
    setScoreResult(result);
    if (result.scorePercent >= 70) {
      if (result.scorePercent < 100) {
        soundService.playChime();
      }
      triggerExerciseConfetti(result.scorePercent);
      onEarnStars(result.starsEarned);
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
      {/* Intro Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-pink-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-pink-100 text-pink-700 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 1 • Nghe và khoanh
            </span>
            {examSetTitle && (
              <span className="bg-pink-50 text-pink-800 text-xs font-black px-2.5 py-1 rounded-full border border-pink-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">8 câu hỏi đôi âm</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Luyện Tai: Nghe Cô/Thầy Phát Âm Và Khoanh A hoặc B
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Bấm vào chiếc loa <Volume2 className="inline w-4 h-4 text-pink-500" /> để nghe từ phát âm, sau đó chọn từ A hoặc B mà bé vừa nghe được!
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
            onClick={handleCheckAnswers}
            disabled={answeredCount === 0}
            className={`px-5 py-2 rounded-2xl font-black text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
              answeredCount === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-pink-600 hover:bg-pink-700 text-white hover:scale-102 active:scale-98 shadow-pink-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Kiểm tra ({answeredCount}/{questions.length})
          </button>
        </div>
      </div>

      {/* Score Banner when checked */}
      {scoreResult && (
        <div
          className={`p-5 rounded-3xl border-2 animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4 ${
            scoreResult.scorePercent >= 75
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{scoreResult.scorePercent === 100 ? '🎉' : '⭐'}</span>
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

      {/* Grid of Questions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((q) => {
          const userChoice = answers[q.id];
          const isSubmitted = scoreResult !== null;
          const isCorrect = userChoice === q.correctChoice;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl p-5 border-2 transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 shadow-emerald-50'
                    : 'border-rose-300 shadow-rose-50'
                  : userChoice
                  ? 'border-pink-300 shadow-pink-50'
                  : 'border-slate-200 hover:border-pink-200'
              } shadow-xs flex flex-col justify-between`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-pink-100 text-pink-700 font-black text-xs flex items-center justify-center">
                    {q.id}
                  </span>
                  <span className="text-xs font-bold text-slate-500">Cặp âm đối lập</span>
                </div>

                {/* Speaker Audio Button */}
                <button
                  onClick={() => handlePlayAudio(q)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currentlyPlaying === q.id
                      ? 'bg-pink-600 text-white scale-105'
                      : 'bg-pink-50 hover:bg-pink-100 text-pink-600'
                  }`}
                  title="Nghe mẫu phát âm"
                >
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>Nghe từ ({currentlyPlaying === q.id ? 'Đang phát...' : 'Phát âm'})</span>
                </button>
              </div>

              {/* Options A and B */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {/* Option A */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelect(q.id, 'A')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(q.id, 'A');
                    }
                  }}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative select-none ${
                    userChoice === 'A'
                      ? 'border-pink-500 bg-pink-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-pink-200 hover:bg-slate-50'
                  } ${
                    isSubmitted && q.correctChoice === 'A'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50/70 border-emerald-400'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="w-6 h-6 rounded-lg bg-pink-200 text-pink-800 text-xs font-black flex items-center justify-center">
                      A
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundService.speakUS(q.wordA);
                      }}
                      className="p-1 hover:bg-pink-200/50 rounded-full text-slate-400 hover:text-pink-600"
                      title={`Nghe thử ${q.wordA}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-lg font-black text-slate-800">{q.wordA}</div>
                  <div className="text-xs font-mono font-bold text-pink-600">{q.ipaA}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{q.meaningA}</div>
                </div>

                {/* Option B */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelect(q.id, 'B')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(q.id, 'B');
                    }
                  }}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative select-none ${
                    userChoice === 'B'
                      ? 'border-pink-500 bg-pink-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-pink-200 hover:bg-slate-50'
                  } ${
                    isSubmitted && q.correctChoice === 'B'
                      ? 'ring-2 ring-emerald-500 bg-emerald-50/70 border-emerald-400'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="w-6 h-6 rounded-lg bg-pink-200 text-pink-800 text-xs font-black flex items-center justify-center">
                      B
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundService.speakUS(q.wordB);
                      }}
                      className="p-1 hover:bg-pink-200/50 rounded-full text-slate-400 hover:text-pink-600"
                      title={`Nghe thử ${q.wordB}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="text-lg font-black text-slate-800">{q.wordB}</div>
                  <div className="text-xs font-mono font-bold text-pink-600">{q.ipaB}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{q.meaningB}</div>
                </div>
              </div>

              {/* Status Indicator after submitting */}
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
                      <span>Chính xác! Đáp án đúng: {q.correctChoice} ({q.targetAudioWord})</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Chưa đúng! Đáp án đúng là {q.correctChoice}: {q.targetAudioWord}</span>
                    </>
                  )}
                </div>
              )}

              {/* Explanation collapsible/visible */}
              {(showExplanation || isSubmitted) && (
                <div className="mt-3 p-3 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 animate-fade-in">
                  <div className="font-bold flex items-center gap-1 text-amber-800 mb-1">
                    <span>💡 Lời giải chi tiết:</span>
                  </div>
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
