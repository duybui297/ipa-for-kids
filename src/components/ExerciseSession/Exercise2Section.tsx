import React, { useState } from 'react';
import { Volume2, CheckCircle2, XCircle, Sparkles, HelpCircle, RotateCcw, Link2, Unlink } from 'lucide-react';
import { EXERCISE_2_WORDS, EXERCISE_2_SYMBOLS, Exercise2WordItem, Exercise2SymbolItem } from '../../data/exerciseWorksheetData';
import { evaluateExercise2, ScoreResult, isRewardEligible, describeReward } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';
import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number, subKey?: string) => number;
  words?: Exercise2WordItem[];
  symbols?: Exercise2SymbolItem[];
  examSetTitle?: string;
}

export const Exercise2Section: React.FC<Props> = ({
  onEarnStars,
  words = EXERCISE_2_WORDS,
  symbols = EXERCISE_2_SYMBOLS,
  examSetTitle
}) => {
  // Map of symbol -> word letter id (e.g. {'/i:/': 'C'})
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [awardedStars, setAwardedStars] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelectSymbol = (symbol: string) => {
    soundService.playPop();
    if (selectedSymbol === symbol) {
      setSelectedSymbol(null);
    } else {
      setSelectedSymbol(symbol);
    }
  };

  const handleSelectWord = (wordId: string) => {
    if (!selectedSymbol) {
      soundService.playPop();
      return;
    }
    soundService.playPop();
    // Bind symbol to word
    setMatchedPairs((prev) => {
      const next = { ...prev };
      // Remove any other symbol previously linked to this word
      Object.keys(next).forEach((key) => {
        if (next[key] === wordId) delete next[key];
      });
      next[selectedSymbol] = wordId;
      return next;
    });
    setSelectedSymbol(null);
    if (scoreResult) setScoreResult(null);
  };

  const handleRemovePair = (symbol: string) => {
    soundService.playPop();
    setMatchedPairs((prev) => {
      const next = { ...prev };
      delete next[symbol];
      return next;
    });
    if (scoreResult) setScoreResult(null);
  };

  const handleCheck = () => {
    const result = evaluateExercise2(matchedPairs, symbols);
    setScoreResult(result);
    const awarded = isRewardEligible(result) ? onEarnStars(result.starsEarned) : 0;
    setAwardedStars(awarded);
    if (isRewardEligible(result)) {
      if (result.scorePercent < 100) {
        soundService.playChime();
      }
      triggerExerciseConfetti(result.scorePercent);
    } else {
      soundService.playError();
    }
  };

  const handleReset = () => {
    setMatchedPairs({});
    setSelectedSymbol(null);
    setScoreResult(null);
    setShowExplanation(false);
  };

  const pairedCount = Object.keys(matchedPairs).length;

  return (
    <div className="space-y-6">
      {/* Exercise 2 Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-pink-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-purple-100 text-purple-700 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 2 • Nối ký hiệu với từ
            </span>
            {examSetTitle && (
              <span className="bg-purple-50 text-purple-800 text-xs font-black px-2.5 py-1 rounded-full border border-purple-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">{symbols.length} ký hiệu nguyên âm</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Cầu Nối Thần Kỳ: Ký Hiệu IPA & Từ Vựng
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Bé bấm chọn 1 ô <span className="font-bold text-pink-600">Ký hiệu IPA</span>, rồi bấm vào ô <span className="font-bold text-indigo-600">Từ vựng tương ứng</span> để kết nối nhé!
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
            {showExplanation ? 'Ẩn lời giải' : `Xem lời giải ${symbols.length} cặp`}
          </button>
          <button
            onClick={handleCheck}
            disabled={pairedCount === 0}
            className={`px-5 py-2 rounded-2xl font-black text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
              pairedCount === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white hover:scale-102 active:scale-98 shadow-purple-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Kiểm tra ({pairedCount}/{symbols.length})
          </button>
        </div>
      </div>

      {/* Result feedback */}
      {scoreResult && (
        <div
          className={`p-5 rounded-3xl border-2 animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4 ${
            scoreResult.scorePercent >= 75
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{scoreResult.scorePercent === 100 ? '👑' : '⭐'}</span>
            <div>
              <div className="font-black text-lg">
                Đúng {scoreResult.correctCount}/{scoreResult.totalCount} cặp ({scoreResult.scorePercent}%)
              </div>
              <p className="text-sm font-medium">{scoreResult.feedback}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-black text-sm bg-white/80 px-4 py-2 rounded-2xl border shadow-xs">
            <span>{describeReward(scoreResult, awardedStars)}</span>
          </div>
        </div>
      )}

      {/* Matching Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: IPA Symbols */}
        <div className="bg-white rounded-3xl p-5 border-2 border-pink-100 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="font-black text-base text-pink-700 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-pink-100 text-pink-700 text-xs flex items-center justify-center font-bold">1</span>
              {symbols.length} Ký Hiệu Nguyên Âm
            </h3>
            <span className="text-xs text-slate-400">
              {selectedSymbol ? 'Đã chọn: ' + selectedSymbol + ' (chọn từ bên phải)' : 'Bấm để chọn ký hiệu'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {symbols.map((item) => {
              const linkedWordId = matchedPairs[item.symbol];
              const linkedWord = words.find((w) => w.id === linkedWordId);
              const isSelected = selectedSymbol === item.symbol;
              const isSubmitted = scoreResult !== null;
              const isCorrect = linkedWordId === item.targetWordId;

              return (
                <div
                  key={item.symbol}
                  onClick={() => handleSelectSymbol(item.symbol)}
                  className={`p-3 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-pink-500 bg-pink-100/70 scale-102 ring-2 ring-pink-400'
                      : linkedWordId
                      ? 'border-indigo-300 bg-indigo-50/50'
                      : 'border-slate-200 bg-white hover:border-pink-300 hover:bg-pink-50/30'
                  } ${
                    isSubmitted && linkedWordId
                      ? isCorrect
                        ? 'border-emerald-400 bg-emerald-50'
                        : 'border-rose-400 bg-rose-50'
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-mono font-black text-slate-800 tracking-wider">
                      {item.symbol}
                    </span>
                    {linkedWordId && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePair(item.symbol);
                        }}
                        className="text-slate-400 hover:text-rose-500 p-1"
                        title="Huỷ nối"
                      >
                        <Unlink className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Connected Target Indicator */}
                  <div className="mt-2 min-h-6 text-xs">
                    {linkedWord ? (
                      <span className="inline-flex items-center gap-1 font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-lg">
                        <Link2 className="w-3 h-3" />
                        {linkedWord.id}. {linkedWord.word}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">Chưa nối</span>
                    )}
                  </div>

                  {/* Validation mark */}
                  {isSubmitted && linkedWordId && (
                    <div className="mt-1 flex items-center gap-1 text-[11px] font-bold">
                      {isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Đúng: {item.targetWordId}. {item.word}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Words (A, B, C…) */}
        <div className="bg-white rounded-3xl p-5 border-2 border-indigo-100 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <h3 className="font-black text-base text-indigo-700 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-bold">2</span>
              {words.length} Từ Vựng (A - {words[words.length - 1]?.id})
            </h3>
            <span className="text-xs text-slate-400">Bấm để nối với ký hiệu đang chọn</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {words.map((w) => {
              // Check if any symbol is mapped to this word
              const pairedSymbol = Object.keys(matchedPairs).find(
                (sym) => matchedPairs[sym] === w.id
              );

              return (
                <div
                  key={w.id}
                  onClick={() => handleSelectWord(w.id)}
                  className={`p-3 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    pairedSymbol
                      ? 'border-indigo-400 bg-indigo-50/70 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-800 text-xs font-black flex items-center justify-center">
                      {w.id}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundService.speakUS(w.word);
                      }}
                      className="p-1 hover:bg-indigo-100 rounded-full text-slate-400 hover:text-indigo-600"
                      title={`Nghe phát âm ${w.word}`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <div className="font-black text-slate-800 text-sm sm:text-base">{w.word}</div>
                    <div className="text-[11px] text-slate-500">{w.meaning}</div>
                  </div>

                  {/* Paired Symbol Indicator */}
                  <div className="mt-2 min-h-5 text-xs">
                    {pairedSymbol ? (
                      <span className="font-mono font-bold text-pink-700 bg-pink-100/70 px-2 py-0.5 rounded-lg inline-block">
                        {pairedSymbol}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400">Trống</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Explanation / Answer Sheet */}
      {showExplanation && (
        <div className="bg-purple-50/80 border-2 border-purple-200 rounded-3xl p-5 animate-fade-in space-y-3">
          <div className="flex items-center gap-2 font-black text-purple-900 text-base">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span>Bảng Lời Giải Chi Tiết Bài 2 ({symbols.length} Cặp Ký Hiệu & Từ Vựng Chuẩn)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {symbols.map((item) => (
              <div key={item.symbol} className="bg-white p-3 rounded-2xl border border-purple-200 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-black text-pink-600 text-sm">{item.symbol}</span>
                  <span className="font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {item.targetWordId}. {item.word}
                  </span>
                </div>
                <p className="text-slate-600">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
