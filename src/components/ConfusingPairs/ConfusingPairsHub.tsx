import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CONFUSING_PAIRS_DATA, ConfusingPair, MinimalPairItem } from '../../data/confusingPairsData';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Volume2, Sparkles, ArrowLeftRight, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface ConfusingPairsHubProps {
  mascotId: MascotId;
  onEarnStars: (stars: number) => void;
  /** Gọi mỗi khi bé đoán đúng một câu đố (dùng để mở khóa huy hiệu). */
  onCorrectAnswer?: () => void;
}

export const ConfusingPairsHub: React.FC<ConfusingPairsHubProps> = ({
  mascotId,
  onEarnStars,
  onCorrectAnswer,
}) => {
  const [selectedPairId, setSelectedPairId] = useState<string>(CONFUSING_PAIRS_DATA[0].id);
  const [activeGroupFilter, setActiveGroupFilter] = useState<'all' | 'vowels' | 'voiced_voiceless' | 'fricatives_affricates'>('all');

  // Mini quiz state for current pair
  const [quizWord, setQuizWord] = useState<MinimalPairItem | null>(null);
  const [targetOption, setTargetOption] = useState<'A' | 'B'>('A');
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const currentPair: ConfusingPair =
    CONFUSING_PAIRS_DATA.find((p) => p.id === selectedPairId) || CONFUSING_PAIRS_DATA[0];

  const filteredPairs = CONFUSING_PAIRS_DATA.filter((p) => {
    if (activeGroupFilter === 'all') return true;
    return p.group === activeGroupFilter;
  });

  const handlePlayPairComparison = (wordA: string, wordB: string) => {
    soundService.speakPair(wordA, wordB, 0.85);
  };

  const handleStartQuizForCurrentPair = () => {
    const randomIndex = Math.floor(Math.random() * currentPair.pairs.length);
    const chosenItem = currentPair.pairs[randomIndex];
    const chosenOption: 'A' | 'B' = Math.random() > 0.5 ? 'A' : 'B';
    setQuizWord(chosenItem);
    setTargetOption(chosenOption);
    setQuizAnswered(false);
    setSelectedAnswer(null);

    // Speak the target word
    const wordToSpeak = chosenOption === 'A' ? chosenItem.wordA : chosenItem.wordB;
    soundService.speakUS(wordToSpeak, 0.85);
  };

  const handleQuizSelect = (choice: 'A' | 'B') => {
    if (quizAnswered || !quizWord) return;
    setSelectedAnswer(choice);
    setQuizAnswered(true);

    const isCorrect = choice === targetOption;
    if (isCorrect) {
      soundService.playOmNomChomp();
      onEarnStars(10);
      onCorrectAnswer?.();
      setQuizScore((prev) => prev + 10);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#f472b6', '#38bdf8', '#fbbf24', '#4ade80'],
      });
    } else {
      soundService.playWrongBoing();
    }
  };

  const firstPair = currentPair.pairs[0];

  return (
    <div className="flex flex-col gap-6">
      {/* Top Hub Header */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-pink-200 shadow-xl flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2.5 bg-pink-100 rounded-2xl">⚖️</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 font-heading">
                Phân Biệt Các Cặp Âm & Từ Dễ Nhầm Lẫn
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                Kho tài liệu đối chiếu tối thiểu (Minimal Pairs) giúp bé phát âm chuẩn xác, không bị lẫn âm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-amber-50 px-3.5 py-1.5 rounded-2xl border border-amber-300">
            <span className="text-base">⭐</span>
            <span className="text-xs font-black text-amber-900">{quizScore} sao luyện cặp</span>
          </div>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
          {[
            { id: 'all', label: `Tất cả ${CONFUSING_PAIRS_DATA.length} Cặp Âm`, icon: '📚' },
            { id: 'vowels', label: 'Cặp Nguyên Âm (i, u, æ, ɑː)', icon: '👄' },
            { id: 'voiced_voiceless', label: 'Vô Thanh vs Hữu Thanh (p/b, t/d, k/g, s/z)', icon: '⚡' },
            { id: 'fricatives_affricates', label: 'Chu Môi & Thè Lưỡi (sh/ch, th/s, f/v)', icon: '🎯' },
          ].map((grp) => (
            <button
              key={grp.id}
              onClick={() => {
                const groupId = grp.id as typeof activeGroupFilter;
                setActiveGroupFilter(groupId);
                const firstInGroup = CONFUSING_PAIRS_DATA.find((p) => groupId === 'all' || p.group === groupId);
                if (firstInGroup && groupId !== 'all' && currentPair.group !== groupId) {
                  setSelectedPairId(firstInGroup.id);
                  setQuizWord(null);
                }
              }}
              className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeGroupFilter === grp.id
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-200 scale-102'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{grp.icon}</span>
              <span>{grp.label}</span>
            </button>
          ))}
        </div>

        {/* Pair Switcher Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-1">
          {filteredPairs.map((pair) => {
            const isSelected = selectedPairId === pair.id;
            return (
              <button
                key={pair.id}
                onClick={() => {
                  setSelectedPairId(pair.id);
                  setQuizWord(null);
                  soundService.playPop();
                }}
                className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-pink-50/80 border-pink-500 shadow-md ring-2 ring-pink-200 scale-102'
                    : 'bg-slate-50/60 hover:bg-white border-slate-200 hover:border-pink-300 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-ipa font-black text-sm text-pink-700 bg-white px-2 py-0.5 rounded-lg border border-pink-200">
                      /{pair.phonemeA.symbol}/
                    </span>
                    <span className="text-xs font-bold text-slate-400">vs</span>
                    <span className="font-ipa font-black text-sm text-sky-700 bg-white px-2 py-0.5 rounded-lg border border-sky-200">
                      /{pair.phonemeB.symbol}/
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
                    {pair.pairs.length} cặp
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">
                  {pair.pairs[0]?.wordA} ↔ {pair.pairs[0]?.wordB}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE PAIR COMPARISON POSTER (MATCHING SHORT I VS LONG I LAYOUT) */}
      <div className="bg-linear-to-r from-rose-100 via-pink-100 to-amber-100 p-5 sm:p-7 rounded-3xl border-2 border-pink-300 shadow-xl flex flex-col gap-5">
        {/* Top Header of Active Pair */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-pink-800 bg-white/80 px-3 py-1 rounded-full border border-pink-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {currentPair.groupNameVi}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-800 font-heading">
              {currentPair.title}
            </h3>
          </div>

          {/* Speak Pair Audio Button */}
          <button
            onClick={() => handlePlayPairComparison(firstPair.wordA, firstPair.wordB)}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-pink-50 text-pink-700 font-black rounded-2xl border border-pink-300 shadow-xs transition-transform active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-pink-600 animate-pulse" />
            Nghe đối chiếu mẫu: <span className="underline">{firstPair.wordA}</span> vs <span className="underline">{firstPair.wordB}</span>
          </button>
        </div>

        {/* Side-by-Side 2 Comparison Cards (Sound A vs Sound B) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card A */}
          <div className="bg-white/95 rounded-3xl p-5 border-2 border-pink-300 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black font-ipa text-pink-600 bg-pink-100 px-3.5 py-1 rounded-2xl border border-pink-300">
                /{currentPair.phonemeA.symbol}/
              </span>
              <span className="text-xs font-black bg-pink-600 text-white px-3 py-1 rounded-full">
                {currentPair.phonemeA.tag}
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-800">{currentPair.phonemeA.name}</h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="bg-pink-50/70 p-2.5 rounded-xl border border-pink-100">
                <span className="font-bold text-pink-800 block mb-0.5">👄 Khẩu hình Môi:</span>
                <p>{currentPair.phonemeA.mouthSummary}</p>
              </div>
              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-800 block mb-0.5">👅 Vị trí Lưỡi:</span>
                <p>{currentPair.phonemeA.tongueSummary}</p>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>Thanh quản:</strong> {currentPair.phonemeA.vocalVibration}</span>
                <span className="text-pink-600 font-bold">{currentPair.phonemeA.soundLength}</span>
              </div>
            </div>
          </div>

          {/* Card B */}
          <div className="bg-white/95 rounded-3xl p-5 border-2 border-sky-300 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-black font-ipa text-sky-600 bg-sky-100 px-3.5 py-1 rounded-2xl border border-sky-300">
                /{currentPair.phonemeB.symbol}/
              </span>
              <span className="text-xs font-black bg-sky-600 text-white px-3 py-1 rounded-full">
                {currentPair.phonemeB.tag}
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-800">{currentPair.phonemeB.name}</h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="bg-sky-50/70 p-2.5 rounded-xl border border-sky-100">
                <span className="font-bold text-sky-800 block mb-0.5">👄 Khẩu hình Môi:</span>
                <p>{currentPair.phonemeB.mouthSummary}</p>
              </div>
              <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-800 block mb-0.5">👅 Vị trí Lưỡi:</span>
                <p>{currentPair.phonemeB.tongueSummary}</p>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                <span><strong>Thanh quản:</strong> {currentPair.phonemeB.vocalVibration}</span>
                <span className="text-sky-600 font-bold">{currentPair.phonemeB.soundLength}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot Advice & Golden Rule Box */}
        <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-pink-200 flex flex-col sm:flex-row items-center gap-4">
          <MascotAvatar mascotId={mascotId} size="md" mood="speaking" />
          <div className="text-xs sm:text-sm text-slate-700 flex-1 space-y-1.5">
            <span className="font-black text-pink-700 block text-sm flex items-center gap-1.5">
              💡 {currentPair.contrastRuleVi}
            </span>
            <div className="p-2.5 bg-yellow-50 rounded-xl border-l-4 border-yellow-400 text-yellow-900 font-medium">
              <strong>⚠️ Chú ý cho bé tránh bẫy:</strong> {currentPair.vietnameseLearnerTrap}
            </div>
          </div>
        </div>

        {/* MINIMAL PAIRS TABLE (BẢNG CẶP TỪ TỐI THIỂU ĐỐI CHIẾU) */}
        <div className="bg-white rounded-3xl p-5 border border-pink-200 shadow-md flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-800">
                Bảng Cặp Từ Đối Chiếu Thực Tế ({currentPair.pairs.length} cặp từ)
              </h4>
              <p className="text-xs text-slate-500">
                Bấm loa từng từ hoặc bấm biểu tượng đối chiếu ở giữa để nghe máy đọc liền mạch cả 2 từ
              </p>
            </div>

            <button
              onClick={handleStartQuizForCurrentPair}
              className="px-4 py-2 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black rounded-2xl shadow-md text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
            >
              <HelpCircle className="w-4 h-4" />
              Đố bé: Đoán từ trong cặp này
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentPair.pairs.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50/80 hover:bg-pink-50/40 rounded-2xl border border-slate-200 hover:border-pink-300 transition-colors flex items-center justify-between gap-2"
              >
                {/* Word A */}
                <button
                  onClick={() => soundService.speakUS(item.wordA, 0.9)}
                  className="flex-1 p-2 rounded-xl bg-white hover:bg-pink-100/60 border border-slate-200 hover:border-pink-300 transition-all text-left cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-black text-slate-800 group-hover:text-pink-600">
                      {item.wordA}
                    </span>
                    <span className="text-lg">{item.emojiA}</span>
                  </div>
                  <span className="text-xs font-ipa font-bold text-pink-600 block">{item.ipaA}</span>
                  <span className="text-[11px] text-slate-500 truncate block mt-0.5">{item.meaningA}</span>
                </button>

                {/* Compare Center Button */}
                <button
                  onClick={() => handlePlayPairComparison(item.wordA, item.wordB)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-pink-500 hover:text-white text-slate-600 flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs"
                  title="Nghe đối chiếu 2 từ"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </button>

                {/* Word B */}
                <button
                  onClick={() => soundService.speakUS(item.wordB, 0.9)}
                  className="flex-1 p-2 rounded-xl bg-white hover:bg-sky-100/60 border border-slate-200 hover:border-sky-300 transition-all text-left cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-black text-slate-800 group-hover:text-sky-600">
                      {item.wordB}
                    </span>
                    <span className="text-lg">{item.emojiB}</span>
                  </div>
                  <span className="text-xs font-ipa font-bold text-sky-600 block">{item.ipaB}</span>
                  <span className="text-[11px] text-slate-500 truncate block mt-0.5">{item.meaningB}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE MINI QUIZ WIDGET (CHO BÉ LUYỆN TẬP TỨC THÌ) */}
        {quizWord && (
          <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-300 shadow-xl flex flex-col items-center gap-4 animate-scale-up">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                🎯 Thử thách nghe tai thần: Bé đoán xem âm nào vừa phát ra?
              </span>
              <button
                onClick={handleStartQuizForCurrentPair}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Đổi từ khác
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  soundService.speakUS(
                    targetOption === 'A' ? quizWord.wordA : quizWord.wordB,
                    0.85
                  )
                }
                className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 text-white font-black rounded-2xl shadow-md transition-transform active:scale-95 text-base cursor-pointer"
              >
                <Volume2 className="w-5 h-5 animate-bounce" />
                Bấm nghe lại âm thanh bí ẩn
              </button>
            </div>

            {/* 2 Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              <button
                onClick={() => handleQuizSelect('A')}
                disabled={quizAnswered}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                  quizAnswered
                    ? targetOption === 'A'
                      ? 'bg-emerald-50 border-emerald-500 ring-3 ring-emerald-200'
                      : selectedAnswer === 'A'
                      ? 'bg-rose-50 border-rose-400'
                      : 'opacity-50 border-slate-200'
                    : 'bg-slate-50 hover:bg-pink-50 border-slate-300 hover:border-pink-500 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{quizWord.emojiA}</span>
                  <div>
                    <span className="text-xl font-black text-slate-800 block">
                      {quizWord.wordA}
                    </span>
                    <span className="text-xs font-ipa font-bold text-pink-600 block">
                      {quizWord.ipaA}
                    </span>
                    <span className="text-[11px] text-slate-500">{quizWord.meaningA}</span>
                  </div>
                </div>
                {quizAnswered && targetOption === 'A' && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                )}
              </button>

              <button
                onClick={() => handleQuizSelect('B')}
                disabled={quizAnswered}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                  quizAnswered
                    ? targetOption === 'B'
                      ? 'bg-emerald-50 border-emerald-500 ring-3 ring-emerald-200'
                      : selectedAnswer === 'B'
                      ? 'bg-rose-50 border-rose-400'
                      : 'opacity-50 border-slate-200'
                    : 'bg-slate-50 hover:bg-sky-50 border-slate-300 hover:border-sky-500 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{quizWord.emojiB}</span>
                  <div>
                    <span className="text-xl font-black text-slate-800 block">
                      {quizWord.wordB}
                    </span>
                    <span className="text-xs font-ipa font-bold text-sky-600 block">
                      {quizWord.ipaB}
                    </span>
                    <span className="text-[11px] text-slate-500">{quizWord.meaningB}</span>
                  </div>
                </div>
                {quizAnswered && targetOption === 'B' && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                )}
              </button>
            </div>

            {quizAnswered && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold text-slate-800">
                  {selectedAnswer === targetOption ? '🎉 Hoan hô! Bé đoán siêu chuẩn!' : '💡 Bé hãy nghe lại để cảm nhận sự khác biệt nhé!'}
                </span>
                <button
                  onClick={handleStartQuizForCurrentPair}
                  className="ml-2 px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Câu tiếp theo ➔
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
