import React, { useState } from 'react';
import { PHONEMES_DATA } from '../../data/ipaData';
import { CONFUSING_PAIRS_DATA, ConfusingPair } from '../../data/confusingPairsData';
import { Phoneme, VowelLengthTag } from '../../types/ipa';
import { MouthVisualizer } from '../MouthLab/MouthVisualizer';
import { Volume2, Sparkles, ArrowRight, ArrowLeftRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface IPAExplorerProps {
  onNavigateToPairs?: () => void;
}

export const IPAExplorer: React.FC<IPAExplorerProps> = ({ onNavigateToPairs }) => {
  const [selectedPhoneme, setSelectedPhoneme] = useState<Phoneme>(PHONEMES_DATA[0]);
  const [activeFilter, setActiveFilter] = useState<'all_44' | 'pairs' | 'stops' | 'finals'>('all_44');
  const [selectedPairId, setSelectedPairId] = useState<string>('pair_i_long_short');
  const [selectedStopSub, setSelectedStopSub] = useState<'all' | 't' | 'p' | 'k'>('all');
  const [selectedFinalSub, setSelectedFinalSub] = useState<'all' | 'sz' | 'td' | 'shch' | 'th'>('all');

  const monophthongs = PHONEMES_DATA.filter((p) => p.chartGroup === 'monophthong');
  const diphthongs = PHONEMES_DATA.filter((p) => p.chartGroup === 'diphthong');
  const consonants = PHONEMES_DATA.filter((p) => p.chartGroup === 'consonant');

  const currentPair: ConfusingPair =
    CONFUSING_PAIRS_DATA.find((p) => p.id === selectedPairId) || CONFUSING_PAIRS_DATA[0];

  const handleSelectPhoneme = (phoneme: Phoneme) => {
    setSelectedPhoneme(phoneme);
    soundService.playPop();
    soundService.speakUS(phoneme.chartExample.word, 0.9);
  };

  const handleSelectPairPhoneme = (symbol: string) => {
    const matched = PHONEMES_DATA.find((p) => p.symbol === symbol);
    if (matched) {
      handleSelectPhoneme(matched);
    }
  };

  const getVowelTagStyle = (tag?: VowelLengthTag) => {
    switch (tag) {
      case 'long':
        return {
          cardBorder: 'border-amber-400 bg-amber-50/40 hover:bg-amber-50 hover:border-amber-500 text-amber-700',
          symbolColor: 'text-amber-800',
          badgeText: 'DÀI',
          badgeBg: 'bg-amber-600 text-white',
        };
      case 'short':
        return {
          cardBorder: 'border-teal-400 bg-teal-50/40 hover:bg-teal-50 hover:border-teal-500 text-teal-700',
          symbolColor: 'text-teal-800',
          badgeText: 'NGẮN',
          badgeBg: 'bg-teal-600 text-white',
        };
      case 'neutral':
        return {
          cardBorder: 'border-purple-400 bg-purple-50/40 hover:bg-purple-50 hover:border-purple-500 text-purple-700',
          symbolColor: 'text-purple-800',
          badgeText: 'NHẸ',
          badgeBg: 'bg-purple-600 text-white',
        };
      case 'diphthong':
      default:
        return {
          cardBorder: 'border-sky-400 bg-sky-50/40 hover:bg-sky-50 hover:border-sky-500 text-sky-700',
          symbolColor: 'text-sky-800',
          badgeText: 'ĐÔI',
          badgeBg: 'bg-sky-600 text-white',
        };
    }
  };

  const isPhonemeInActivePair = (symbol: string) => {
    if (activeFilter !== 'pairs') return false;
    return symbol === currentPair.phonemeA.symbol || symbol === currentPair.phonemeB.symbol;
  };

  const isPhonemeInActiveStop = (symbol: string) => {
    if (activeFilter !== 'stops') return false;
    if (selectedStopSub === 'all') return ['t', 'p', 'k'].includes(symbol);
    return symbol === selectedStopSub;
  };

  const isPhonemeInActiveFinal = (symbol: string) => {
    if (activeFilter !== 'finals') return false;
    if (selectedFinalSub === 'all') return ['s', 'z', 't', 'd', 'ʃ', 'tʃ', 'θ'].includes(symbol);
    if (selectedFinalSub === 'sz') return ['s', 'z'].includes(symbol);
    if (selectedFinalSub === 'td') return ['t', 'd'].includes(symbol);
    if (selectedFinalSub === 'shch') return ['ʃ', 'tʃ'].includes(symbol);
    if (selectedFinalSub === 'th') return symbol === 'θ';
    return false;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Top Filter Chips */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-pink-100 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Main category 1: Full 44 IPA Chart */}
          <button
            onClick={() => setActiveFilter('all_44')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'all_44'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <span>📜</span> Bảng 44 Âm Đầy Đủ
          </button>

          {/* Main category 2: Confusing Pairs (contains i short vs i long and all 11 pairs) */}
          <button
            onClick={() => {
              setActiveFilter('pairs');
              handleSelectPairPhoneme(currentPair.phonemeA.symbol);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'pairs'
                ? 'bg-pink-600 text-white shadow-xs'
                : 'bg-pink-50 hover:bg-pink-100 text-pink-700'
            }`}
          >
            <span>⭐</span> Các Cặp Âm Dễ Nhầm (11 Cặp)
          </button>

          {/* Main category 3: Unreleased Stops */}
          <button
            onClick={() => {
              setActiveFilter('stops');
              const stopP = PHONEMES_DATA.find((p) => p.id === 'cons_t');
              if (stopP) setSelectedPhoneme(stopP);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'stops'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50 hover:bg-red-100 text-red-700'
            }`}
          >
            <span>🛑</span> Âm Chặn Hơi [t̚], [p̚], [k̚]
          </button>

          {/* Main category 4: Ending Consonants */}
          <button
            onClick={() => {
              setActiveFilter('finals');
              const finalS = PHONEMES_DATA.find((p) => p.id === 'cons_s');
              if (finalS) setSelectedPhoneme(finalS);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'finals'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-purple-50 hover:bg-purple-100 text-purple-700'
            }`}
          >
            <span>🎯</span> Âm Cuối Dễ Quên
          </button>
        </div>

        <span className="text-xs font-bold text-slate-500">
          Đang chọn: <strong className="text-pink-600 font-ipa font-black">/{selectedPhoneme.symbol}/</strong> ({selectedPhoneme.chartExample.word})
        </span>
      </div>

      {/* ========================================================================= */}
      {/* SUB-SECTION SPOTLIGHT 1: CÁC CẶP ÂM DỄ NHẦM LẪN (CHỨA i NGẮN/DÀI & CÁC CẶP KHÁC) */}
      {/* ========================================================================= */}
      {activeFilter === 'pairs' && (
        <div className="bg-linear-to-r from-amber-50 via-pink-50 to-teal-50 p-5 sm:p-6 rounded-3xl border-2 border-pink-300 shadow-md flex flex-col gap-4 animate-fade-in">
          {/* Sub-chips for all pairs */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-pink-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Chọn cặp âm đối chiếu (Bao gồm i ngắn - i dài & 10 cặp quan trọng khác):
              </span>
              {onNavigateToPairs && (
                <button
                  onClick={onNavigateToPairs}
                  className="text-xs font-black text-pink-700 hover:text-pink-900 flex items-center gap-1 cursor-pointer bg-white px-3 py-1 rounded-full border border-pink-200 shadow-2xs hover:bg-pink-100 transition-colors"
                >
                  Mở kho 11 cặp đầy đủ & Quiz ➔
                </button>
              )}
            </div>

            {/* Horizontal Sub-chips Scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {CONFUSING_PAIRS_DATA.map((pair) => {
                const isSelected = selectedPairId === pair.id;
                const isShortLongI = pair.id === 'pair_i_long_short';
                return (
                  <button
                    key={pair.id}
                    onClick={() => {
                      setSelectedPairId(pair.id);
                      handleSelectPairPhoneme(pair.phonemeA.symbol);
                      soundService.playPop();
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-pink-600 text-white shadow-sm ring-2 ring-pink-300 scale-102 font-black'
                        : isShortLongI
                        ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 font-black'
                        : 'bg-white hover:bg-pink-100/60 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span className="font-ipa font-black">
                      /{pair.phonemeA.symbol}/ vs /{pair.phonemeB.symbol}/
                    </span>
                    <span className="opacity-80 text-[11px]">
                      ({pair.pairs[0]?.wordA} - {pair.pairs[0]?.wordB})
                    </span>
                    {isShortLongI && <span className="text-[10px] bg-amber-400 text-slate-900 px-1 rounded font-black">Hot</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pair Comparison Spotlight Box */}
          <div className="bg-white/90 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-pink-200 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full">
                  {currentPair.groupNameVi}
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-800">
                  {currentPair.title}
                </h4>
              </div>

              <button
                onClick={() =>
                  soundService.speakPair(
                    currentPair.pairs[0].wordA,
                    currentPair.pairs[0].wordB,
                    0.85
                  )
                }
                className="text-xs font-bold bg-white hover:bg-pink-50 text-pink-700 px-3.5 py-1.5 rounded-xl border border-pink-300 shadow-2xs flex items-center gap-1.5 cursor-pointer transition-transform active:scale-95"
              >
                <Volume2 className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
                Nghe đối chiếu mẫu: <span className="underline">{currentPair.pairs[0].wordA}</span> vs <span className="underline">{currentPair.pairs[0].wordB}</span>
              </button>
            </div>

            {/* Side-by-side 2 Sound Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Card Sound A */}
              <div
                onClick={() => handleSelectPairPhoneme(currentPair.phonemeA.symbol)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedPhoneme.symbol === currentPair.phonemeA.symbol
                    ? 'bg-pink-50/80 border-pink-500 ring-3 ring-pink-200 shadow-md'
                    : 'bg-white hover:bg-pink-50/30 border-pink-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-3xl font-black font-ipa text-pink-600 bg-pink-100 px-3 py-0.5 rounded-xl border border-pink-200">
                    /{currentPair.phonemeA.symbol}/
                  </span>
                  <span className="text-xs font-black bg-pink-600 text-white px-2.5 py-0.5 rounded-full">
                    {currentPair.phonemeA.tag}
                  </span>
                </div>
                <h5 className="font-bold text-slate-800 text-sm">{currentPair.phonemeA.name}</h5>
                <div className="text-xs text-slate-600 space-y-1 mt-2">
                  <p><strong>👄 Môi:</strong> {currentPair.phonemeA.mouthSummary}</p>
                  <p><strong>👅 Lưỡi:</strong> {currentPair.phonemeA.tongueSummary}</p>
                  <p className="text-[11px] text-pink-700 font-semibold">{currentPair.phonemeA.soundLength}</p>
                </div>
              </div>

              {/* Card Sound B */}
              <div
                onClick={() => handleSelectPairPhoneme(currentPair.phonemeB.symbol)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedPhoneme.symbol === currentPair.phonemeB.symbol
                    ? 'bg-sky-50/80 border-sky-500 ring-3 ring-sky-200 shadow-md'
                    : 'bg-white hover:bg-sky-50/30 border-sky-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-3xl font-black font-ipa text-sky-600 bg-sky-100 px-3 py-0.5 rounded-xl border border-sky-200">
                    /{currentPair.phonemeB.symbol}/
                  </span>
                  <span className="text-xs font-black bg-sky-600 text-white px-2.5 py-0.5 rounded-full">
                    {currentPair.phonemeB.tag}
                  </span>
                </div>
                <h5 className="font-bold text-slate-800 text-sm">{currentPair.phonemeB.name}</h5>
                <div className="text-xs text-slate-600 space-y-1 mt-2">
                  <p><strong>👄 Môi:</strong> {currentPair.phonemeB.mouthSummary}</p>
                  <p><strong>👅 Lưỡi:</strong> {currentPair.phonemeB.tongueSummary}</p>
                  <p className="text-[11px] text-sky-700 font-semibold">{currentPair.phonemeB.soundLength}</p>
                </div>
              </div>
            </div>

            {/* Quick Minimal Pairs Preview Row */}
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 flex flex-col gap-2">
              <span className="text-xs font-bold text-slate-600">
                Ví dụ cặp từ thực tế (Bấm loa từng từ hoặc bấm ↔ để nghe máy đọc liền mạch cả 2 từ):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {currentPair.pairs.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-1 shadow-2xs"
                  >
                    <button
                      onClick={() => soundService.speakUS(item.wordA, 0.9)}
                      className="text-left px-1.5 py-0.5 hover:bg-pink-50 rounded cursor-pointer"
                    >
                      <span className="text-xs font-black text-pink-700">{item.wordA} {item.emojiA}</span>
                      <span className="text-[10px] text-slate-400 block font-ipa">{item.ipaA}</span>
                    </button>

                    <button
                      onClick={() => soundService.speakPair(item.wordA, item.wordB, 0.85)}
                      className="p-1 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white text-slate-500 cursor-pointer transition-colors"
                      title="Nghe đối chiếu"
                    >
                      <ArrowLeftRight className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => soundService.speakUS(item.wordB, 0.9)}
                      className="text-right px-1.5 py-0.5 hover:bg-sky-50 rounded cursor-pointer"
                    >
                      <span className="text-xs font-black text-sky-700">{item.emojiB} {item.wordB}</span>
                      <span className="text-[10px] text-slate-400 block font-ipa">{item.ipaB}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Rule & Vietnamese Trap Note */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              <span className="font-black block mb-0.5">💡 Quy tắc ghi nhớ: {currentPair.contrastRuleVi}</span>
              <span className="text-amber-800">⚠️ <strong>Cảnh giác lỗi học viên Việt Nam:</strong> {currentPair.vietnameseLearnerTrap}</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-SECTION SPOTLIGHT 2: ÂM CHẶN HƠI [t̚], [p̚], [k̚] */}
      {/* ========================================================================= */}
      {activeFilter === 'stops' && (
        <div className="bg-linear-to-r from-red-50 via-rose-50 to-orange-50 p-5 rounded-3xl border-2 border-red-300 shadow-md flex flex-col gap-3 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-red-500" />
              Quy tắc Ninja Chặn Hơi [Unreleased Stops]: Giữ hơi trong họng, không bật nổ
            </span>
          </div>

          {/* Sub-chips for stops */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'Tất cả 3 âm chặn' },
              { id: 't', label: 'Âm [t̚] (cat, bat, hat, pet)' },
              { id: 'p', label: 'Âm [p̚] (cup, stop, cap, map)' },
              { id: 'k', label: 'Âm [k̚] (book, black, look, back)' },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedStopSub(sub.id as typeof selectedStopSub);
                  const matched = PHONEMES_DATA.find((p) => p.symbol === (sub.id === 'all' ? 't' : sub.id));
                  if (matched) setSelectedPhoneme(matched);
                  soundService.playPop();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedStopSub === sub.id
                    ? 'bg-red-600 text-white shadow-xs font-black'
                    : 'bg-white hover:bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                sym: 't̚',
                word: 'cat',
                phonemeSym: 't',
                desc: 'Đầu lưỡi chạm ngạc cứng chặn kín hơi rồi dừng lại ngay, không bật "thờ".',
              },
              {
                sym: 'p̚',
                word: 'cup',
                phonemeSym: 'p',
                desc: 'Hai môi mím chặt chặn hơi và ngắt âm ngay lập tức, không bật "pờ".',
              },
              {
                sym: 'k̚',
                word: 'book',
                phonemeSym: 'k',
                desc: 'Cuống lưỡi nâng lên vòm họng mềm chặn luồng hơi, không bật "khờ/cờ".',
              },
            ].map((st) => (
              <div
                key={st.sym}
                onClick={() => {
                  const p = PHONEMES_DATA.find((x) => x.symbol === st.phonemeSym);
                  if (p) handleSelectPhoneme(p);
                }}
                className="p-3.5 bg-white rounded-2xl border border-red-200 hover:border-red-400 cursor-pointer transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl font-black font-ipa text-red-600 bg-red-100 px-2.5 py-0.5 rounded-xl">
                    [{st.sym}]
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundService.speakUS(st.word, 0.85);
                    }}
                    className="p-1.5 rounded-xl bg-red-50 hover:bg-red-200 text-red-700 flex items-center gap-1 text-xs font-bold"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    {st.word}
                  </button>
                </div>
                <p className="text-xs text-slate-600 mt-1">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-SECTION SPOTLIGHT 3: ÂM CUỐI DỄ QUÊN (ENDING CONSONANTS) */}
      {/* ========================================================================= */}
      {activeFilter === 'finals' && (
        <div className="bg-linear-to-r from-purple-50 via-indigo-50 to-pink-50 p-5 rounded-3xl border-2 border-purple-300 shadow-md flex flex-col gap-3 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-purple-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Thám Tử Âm Cuối: Người Việt thường quên bật âm đuôi làm mất nghĩa từ
            </span>
          </div>

          {/* Sub-chips for finals */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'Tất cả âm cuối' },
              { id: 'sz', label: 'Cặp /s/ vs /z/ (bus - buzz, cats - dogs)' },
              { id: 'td', label: 'Cặp /t/ vs /d/ (hat - bed, pet - red)' },
              { id: 'shch', label: 'Cặp /ʃ/ vs /tʃ/ (fish - watch, wish - rich)' },
              { id: 'th', label: 'Âm thè lưỡi /θ/ (math, tooth, mouth)' },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedFinalSub(sub.id as typeof selectedFinalSub);
                  soundService.playPop();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFinalSub === sub.id
                    ? 'bg-purple-600 text-white shadow-xs font-black'
                    : 'bg-white hover:bg-purple-100 text-purple-800 border border-purple-200'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { sym: 's', word: 'bus', meaning: 'xe buýt' },
              { sym: 'z', word: 'buzz', meaning: 'tiếng vo ve' },
              { sym: 't', word: 'hat', meaning: 'cái mũ' },
              { sym: 'd', word: 'bed', meaning: 'cái giường' },
              { sym: 'ʃ', word: 'fish', meaning: 'con cá' },
              { sym: 'tʃ', word: 'watch', meaning: 'đồng hồ' },
              { sym: 'θ', word: 'math', meaning: 'môn toán' },
              { sym: 'k', word: 'book', meaning: 'quyển sách' },
            ].map((fn) => (
              <button
                key={fn.word}
                onClick={() => {
                  const p = PHONEMES_DATA.find((x) => x.symbol === fn.sym);
                  if (p) handleSelectPhoneme(p);
                  soundService.speakUS(fn.word, 0.9);
                }}
                className="p-2.5 bg-white hover:bg-purple-50 rounded-xl border border-purple-200 text-left transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-ipa font-black text-purple-700 text-base">/{fn.sym}/</span>
                  <Volume2 className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <span className="text-sm font-black text-slate-800 block mt-0.5">{fn.word}</span>
                <span className="text-[11px] text-slate-500 block">{fn.meaning}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FULL POSTER 44 SOUNDS (MATCHING USER SCREENSHOT EXACTLY) */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-slate-200 shadow-xl flex flex-col gap-6">
        {/* Poster Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 font-heading tracking-tight">
              Bảng 44 âm tiếng Anh (IPA)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
              20 nguyên âm + 24 phụ âm, phát âm giọng Mỹ (General American Accent)
            </p>
          </div>

          {/* Legend Badges exactly as user image */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1 hidden sm:inline">Phân loại:</span>
            <div className="flex items-center gap-1.5 bg-teal-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-2xs">
              <span>⚡</span> NGẮN
            </div>
            <div className="flex items-center gap-1.5 bg-amber-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-2xs">
              <span>⏱️</span> DÀI
            </div>
            <div className="flex items-center gap-1.5 bg-purple-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-2xs">
              <span>🍃</span> NHẸ
            </div>
          </div>
        </div>

        {/* SECTION 1: NGUYÊN ÂM ĐƠN · 12 ÂM */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Nguyên âm đơn · 12 âm
            </h3>
            <span className="text-xs text-slate-400">Bấm từng ô để nghe & xem khẩu hình</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
            {monophthongs.map((p) => {
              const isSelected = selectedPhoneme.id === p.id;
              const isHighlightedInPair = isPhonemeInActivePair(p.symbol);
              const isHighlightedInStop = isPhonemeInActiveStop(p.symbol);
              const isHighlightedInFinal = isPhonemeInActiveFinal(p.symbol);
              const isSpecialHighlight = isHighlightedInPair || isHighlightedInStop || isHighlightedInFinal;
              const style = getVowelTagStyle(p.vowelLength);

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPhoneme(p)}
                  className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-between text-center relative ${
                    isSelected
                      ? 'border-pink-600 bg-pink-50 ring-3 ring-pink-200 shadow-md scale-105 z-10'
                      : isSpecialHighlight
                      ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-400 shadow-sm scale-104 animate-pulse'
                      : style.cardBorder
                  }`}
                  title={`${p.displayName} - ${p.chartExample.word}`}
                >
                  <span className={`text-2xl font-black font-ipa ${style.symbolColor}`}>
                    {p.symbol}
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 mt-1 block truncate">
                    {p.chartExample.word}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: NGUYÊN ÂM ĐÔI · 8 ÂM */}
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              Nguyên âm đôi · 8 âm
            </h3>
            <span className="text-xs text-slate-500 italic">
              "Miệng trượt từ âm đầu sang âm sau."
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {diphthongs.map((p) => {
              const isSelected = selectedPhoneme.id === p.id;
              const isHighlightedInPair = isPhonemeInActivePair(p.symbol);

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPhoneme(p)}
                  className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-between text-center relative ${
                    isSelected
                      ? 'border-pink-600 bg-pink-50 ring-3 ring-pink-200 shadow-md scale-105 z-10'
                      : isHighlightedInPair
                      ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-400 shadow-sm scale-104'
                      : 'border-sky-400 bg-sky-50/40 hover:bg-sky-50 text-sky-800 hover:border-sky-500'
                  }`}
                  title={`${p.displayName} - ${p.chartExample.word}`}
                >
                  <span className="text-2xl font-black font-ipa text-sky-700">{p.symbol}</span>
                  <span className="text-[11px] font-bold text-slate-700 mt-1 block truncate">
                    {p.chartExample.word}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: PHỤ ÂM · 24 ÂM */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              Phụ âm · 24 âm
            </h3>
            <span className="text-xs text-slate-500">
              Có âm vô thanh (thổi gió) & hữu thanh (rung họng)
            </span>
          </div>

          {/* Consonants Row 1 & 2 */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
            {consonants.map((p) => {
              const isSelected = selectedPhoneme.id === p.id;
              const isHighlightedInPair = isPhonemeInActivePair(p.symbol);
              const isHighlightedInStop = isPhonemeInActiveStop(p.symbol);
              const isHighlightedInFinal = isPhonemeInActiveFinal(p.symbol);
              const isSpecialHighlight = isHighlightedInPair || isHighlightedInStop || isHighlightedInFinal;

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectPhoneme(p)}
                  className={`p-2.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center justify-between text-center relative ${
                    isSelected
                      ? 'border-pink-600 bg-pink-50 ring-3 ring-pink-200 shadow-md scale-105 z-10'
                      : isSpecialHighlight
                      ? 'border-pink-500 bg-pink-100 ring-2 ring-pink-400 shadow-sm scale-104 animate-pulse'
                      : 'border-slate-300 bg-slate-50/50 hover:bg-slate-100/70 hover:border-slate-400 text-slate-800'
                  }`}
                  title={`${p.displayName} - ${p.chartExample.word}`}
                >
                  <span className="text-2xl font-black font-ipa text-slate-800">{p.symbol}</span>
                  <span className="text-[11px] font-semibold text-slate-600 mt-1 block truncate">
                    {p.chartExample.word}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SELECTED PHONEME DETAILED MOUTH VISUALIZER LAB */}
      <div className="mt-2">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">👄</span>
            <h3 className="text-lg font-bold text-slate-800">
              Mô Hình Khẩu Hình & Hướng Dẫn Phát Âm Chi Tiết:
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Đang mở: <strong className="text-pink-600 font-ipa font-black">/{selectedPhoneme.symbol}/</strong> ({selectedPhoneme.chartExample.word})
          </span>
        </div>

        <MouthVisualizer phoneme={selectedPhoneme} />
      </div>
    </div>
  );
};
