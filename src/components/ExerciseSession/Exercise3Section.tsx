import React, { useState } from 'react';
import { Volume2, CheckCircle2, Sparkles, HelpCircle, RotateCcw, Home } from 'lucide-react';
import { EXERCISE_3A_DATA, EXERCISE_3B_DATA, Exercise3Set } from '../../data/exerciseWorksheetData';
import { evaluateExercise3, ScoreResult, isRewardEligible, describeReward } from '../../utils/exerciseScoring';
import { soundService } from '../../services/speechService';
import { triggerExerciseConfetti } from '../../utils/confetti';

interface Props {
  onEarnStars: (count: number, subKey?: string) => number;
  data3a?: Exercise3Set;
  data3b?: Exercise3Set;
  examSetTitle?: string;
}

export const Exercise3Section: React.FC<Props> = ({
  onEarnStars,
  data3a = EXERCISE_3A_DATA,
  data3b = EXERCISE_3B_DATA,
  examSetTitle
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'3a' | '3b'>('3a');

  // Mapping of word -> house symbol for 3a and 3b
  const [assignments3a, setAssignments3a] = useState<Record<string, string>>({});
  const [assignments3b, setAssignments3b] = useState<Record<string, string>>({});

  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [scoreResult3a, setScoreResult3a] = useState<ScoreResult | null>(null);
  const [scoreResult3b, setScoreResult3b] = useState<ScoreResult | null>(null);
  const [awardedStars, setAwardedStars] = useState<Record<'3a' | '3b', number>>({ '3a': 0, '3b': 0 });

  const [showExplanation, setShowExplanation] = useState(false);

  const currentData = activeSubTab === '3a' ? data3a : data3b;
  const assignments = activeSubTab === '3a' ? assignments3a : assignments3b;
  const setAssignments = activeSubTab === '3a' ? setAssignments3a : setAssignments3b;
  const currentScore = activeSubTab === '3a' ? scoreResult3a : scoreResult3b;
  const setCurrentScore = activeSubTab === '3a' ? setScoreResult3a : setScoreResult3b;

  // Unassigned words pool
  const unassignedWords = currentData.allWords.filter((w) => !assignments[w.word]);

  const handleSelectPoolWord = (word: string) => {
    soundService.speakUS(word);
    if (selectedWord === word) {
      setSelectedWord(null);
    } else {
      setSelectedWord(word);
    }
  };

  const handleAssignToHouse = (houseSymbol: string) => {
    if (!selectedWord) return;
    soundService.playPop();

    // Mỗi nhà chỉ chứa đúng số từ thuộc về nó (dữ liệu chuẩn: 3 từ / nhà)
    const houseCapacity = currentData.allWords.filter((w) => w.targetSymbol === houseSymbol).length;
    const wordsInHouse = Object.values(assignments).filter((sym) => sym === houseSymbol).length;
    if (wordsInHouse >= houseCapacity) {
      soundService.playError();
      return;
    }

    setAssignments((prev) => ({
      ...prev,
      [selectedWord]: houseSymbol
    }));
    setSelectedWord(null);
    if (currentScore) setCurrentScore(null);
  };

  const handleRemoveFromHouse = (word: string) => {
    soundService.playPop();
    setAssignments((prev) => {
      const next = { ...prev };
      delete next[word];
      return next;
    });
    if (currentScore) setCurrentScore(null);
  };

  const handleCheck = () => {
    const res = evaluateExercise3(activeSubTab, assignments, currentData);
    setCurrentScore(res);
    const awarded = isRewardEligible(res) ? onEarnStars(res.starsEarned, activeSubTab) : 0;
    setAwardedStars((prev) => ({ ...prev, [activeSubTab]: awarded }));
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
    setAssignments({});
    setSelectedWord(null);
    setCurrentScore(null);
    setShowExplanation(false);
  };

  const assignedCount = Object.keys(assignments).length;

  return (
    <div className="space-y-6">
      {/* Header and Sub-tab selector */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-emerald-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              Bài 3 • Xếp từ vào ngôi nhà
            </span>
            {examSetTitle && (
              <span className="bg-emerald-50 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full border border-emerald-200">
                {examSetTitle}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">Mỗi nhà đúng 3 từ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 mt-1 font-heading">
            Gia Đình Âm Thanh: Đưa Từ Vào Đúng Ngôi Nhà
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Bấm chọn từ vựng ở kho bên dưới, sau đó bấm vào <span className="font-bold text-emerald-700">Ngôi nhà</span> mang âm tương ứng!
          </p>
        </div>

        {/* Action Controls & Sub-tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => {
                setActiveSubTab('3a');
                setSelectedWord(null);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeSubTab === '3a'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              Phần 3a ({data3a.houses.map((h) => h.symbol).join(', ')})
            </button>
            <button
              onClick={() => {
                setActiveSubTab('3b');
                setSelectedWord(null);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                activeSubTab === '3b'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              Phần 3b ({data3b.houses.map((h) => h.symbol).join(', ')})
            </button>
          </div>

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
            {showExplanation ? 'Ẩn lời giải' : 'Xem lời giải'}
          </button>
          <button
            onClick={handleCheck}
            disabled={assignedCount === 0}
            className={`px-5 py-2 rounded-2xl font-black text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer ${
              assignedCount === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-102 active:scale-98 shadow-emerald-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Kiểm tra ({assignedCount}/12)
          </button>
        </div>
      </div>

      {/* Score Banner */}
      {currentScore && (
        <div
          className={`p-5 rounded-3xl border-2 animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-4 ${
            currentScore.scorePercent >= 75
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : 'bg-amber-50 border-amber-300 text-amber-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentScore.scorePercent === 100 ? '🏡' : '⭐'}</span>
            <div>
              <div className="font-black text-lg">
                Đúng {currentScore.correctCount}/{currentScore.totalCount} từ ({currentScore.scorePercent}%)
              </div>
              <p className="text-sm font-medium">{currentScore.feedback}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-black text-sm bg-white/80 px-4 py-2 rounded-2xl border shadow-xs">
            <span>{describeReward(currentScore, awardedStars[activeSubTab])}</span>
          </div>
        </div>
      )}

      {/* 4 Houses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentData.houses.map((house) => {
          // Words assigned to this house
          const wordsInThisHouse = Object.entries(assignments)
            .filter(([_, sym]) => sym === house.symbol)
            .map(([w]) => currentData.allWords.find((item) => item.word === w)!)
            .filter(Boolean);

          const capacity = currentData.allWords.filter((w) => w.targetSymbol === house.symbol).length;

          const isFull = wordsInThisHouse.length >= capacity;
          const isTargeted = selectedWord !== null && !isFull;

          return (
            <div
              key={house.symbol}
              onClick={() => {
                if (selectedWord && !isFull) {
                  handleAssignToHouse(house.symbol);
                }
              }}
              className={`rounded-3xl border-2 p-4 transition-all flex flex-col justify-between ${
                house.bgLight
              } ${house.borderColor} ${
                isTargeted
                  ? 'hover:scale-102 hover:shadow-md cursor-pointer ring-2 ring-emerald-400'
                  : ''
              } shadow-xs min-h-[260px]`}
            >
              {/* House Roof & Title */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-black/5">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-emerald-700" />
                    <div>
                      <span className="text-xs font-bold text-slate-500">{house.soundName}</span>
                      <div className="text-xl font-mono font-black text-slate-800">
                        Nhà {house.symbol}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black bg-white/80 px-2 py-0.5 rounded-full border text-slate-700">
                    {wordsInThisHouse.length}/{capacity} từ
                  </span>
                </div>

                {/* Slot preview or Drop Prompt */}
                <div className="space-y-2 mt-3">
                  {wordsInThisHouse.map((item) => {
                    const isSubmitted = currentScore !== null;
                    const isCorrect = item.targetSymbol === house.symbol;

                    return (
                      <div
                        key={item.word}
                        className={`bg-white p-2.5 rounded-2xl border-2 flex items-center justify-between shadow-2xs ${
                          isSubmitted
                            ? isCorrect
                              ? 'border-emerald-400 bg-emerald-50/70'
                              : 'border-rose-400 bg-rose-50/70'
                            : 'border-slate-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-sm text-slate-800">{item.word}</span>
                            <span className="text-xs font-mono text-emerald-700">{item.ipa}</span>
                          </div>
                          <span className="text-[11px] text-slate-500">{item.meaning}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              soundService.speakUS(item.word);
                            }}
                            className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-emerald-700"
                            title={`Nghe từ ${item.word}`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFromHouse(item.word);
                            }}
                            className="p-1 text-slate-400 hover:text-rose-600 rounded-full text-xs font-bold"
                            title="Đưa ra khỏi nhà"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Empty slots placeholders */}
                  {Array.from({ length: 3 - wordsInThisHouse.length }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`border-2 border-dashed rounded-2xl p-3 text-center text-xs font-medium ${
                        selectedWord
                          ? 'border-emerald-400 bg-emerald-100/30 text-emerald-800 animate-pulse'
                          : 'border-slate-300 text-slate-400'
                      }`}
                    >
                      {selectedWord ? '+ Bấm để đưa từ vào đây' : 'Ô trống (cần 1 từ)'}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom hint */}
              <div className="pt-2 text-center text-[11px] text-slate-500 italic">
                {isFull ? `Đã đủ ${capacity} từ` : 'Còn trống chỗ'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Word Pool / Deck */}
      <div className="bg-white rounded-3xl p-5 border-2 border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
              📦
            </span>
            <span className="font-black text-sm text-slate-800">
              Kho từ vựng cần xếp ({unassignedWords.length} từ còn lại):
            </span>
          </div>
          <span className="text-xs text-slate-400">Bấm vào từ để chọn & nghe phát âm</span>
        </div>

        {unassignedWords.length === 0 ? (
          <div className="text-center py-6 text-sm text-emerald-700 font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Bé đã xếp hết tất cả 12 từ vào các ngôi nhà! Bấm "Kiểm tra" nhé!</span>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5">
            {unassignedWords.map((item) => {
              const isSelected = selectedWord === item.word;

              return (
                <button
                  key={item.word}
                  onClick={() => handleSelectPoolWord(item.word)}
                  className={`px-4 py-2.5 rounded-2xl border-2 font-bold text-sm transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-md scale-105'
                      : 'bg-slate-50 hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-emerald-500" />
                  <span>{item.word}</span>
                  <span className="text-xs opacity-75 font-mono">({item.ipa})</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Explanation drawer */}
      {showExplanation && (
        <div className="bg-emerald-50/80 border-2 border-emerald-200 rounded-3xl p-5 animate-fade-in space-y-3">
          <div className="flex items-center gap-2 font-black text-emerald-950 text-base">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span>Lời Giải Chi Tiết Cho {currentData.title}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {currentData.houses.map((house) => (
              <div key={house.symbol} className="bg-white p-3.5 rounded-2xl border border-emerald-200 text-xs">
                <div className="font-mono font-black text-emerald-800 text-sm mb-1">
                  Nhà {house.symbol} ({house.soundName}):
                </div>
                <ul className="space-y-1 text-slate-700 font-medium">
                  {house.words.map((w) => {
                    const fullItem = currentData.allWords.find((item) => item.word === w);
                    return (
                      <li key={w} className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">• {w}</span>
                        <span className="font-mono text-emerald-600 text-[11px]">{fullItem?.ipa}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
