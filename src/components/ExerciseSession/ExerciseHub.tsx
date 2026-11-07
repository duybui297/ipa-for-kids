import React, { useState } from 'react';
import { MascotId } from '../../types/ipa';
import { MASCOTS } from '../../data/characters';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Exercise1Section } from './Exercise1Section';
import { Exercise2Section } from './Exercise2Section';
import { Exercise3Section } from './Exercise3Section';
import { Exercise4Section } from './Exercise4Section';
import { Exercise5Section } from './Exercise5Section';
import { Exercise6Section } from './Exercise6Section';
import { FullWorksheetSolutionSheet } from './FullWorksheetSolutionSheet';
import { PRACTICE_EXAM_SETS, getPracticeSetById } from '../../data/exerciseSets';
import { soundService } from '../../services/speechService';
import { 
  GraduationCap, 
  Sparkles, 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Layers,
  CheckCircle2,
  ListFilter
} from 'lucide-react';

interface Props {
  mascotId: MascotId;
  onEarnStars: (count: number) => void;
}

export type ExerciseTab = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'solutions';

// Emoji mapping for 15 topics
const SET_ICONS: Record<number, string> = {
  1: '🐶',
  2: '🎒',
  3: '🏡',
  4: '🍜',
  5: '⛅',
  6: '⚽',
  7: '👗',
  8: '🖐️',
  9: '🚗',
  10: '🌾',
  11: '🐬',
  12: '🎡',
  13: '🚀',
  14: '⏰',
  15: '🏆'
};

export const ExerciseHub: React.FC<Props> = ({ mascotId, onEarnStars }) => {
  const [selectedSetId, setSelectedSetId] = useState<number>(1);
  const [activeExercise, setActiveExercise] = useState<ExerciseTab>('b1');
  const [showAllSetsGrid, setShowAllSetsGrid] = useState<boolean>(false);
  const mascot = MASCOTS[mascotId] || MASCOTS.chiikawa;

  const currentSet = getPracticeSetById(selectedSetId);

  const handleSelectSet = (id: number) => {
    soundService.playPop();
    setSelectedSetId(id);
  };

  const handlePrevSet = () => {
    soundService.playPop();
    setSelectedSetId((prev) => (prev > 1 ? prev - 1 : PRACTICE_EXAM_SETS.length));
  };

  const handleNextSet = () => {
    soundService.playPop();
    setSelectedSetId((prev) => (prev < PRACTICE_EXAM_SETS.length ? prev + 1 : 1));
  };

  const exerciseNavItems = [
    {
      id: 'b1' as ExerciseTab,
      label: 'Bài 1: Nghe & Khoanh',
      subLabel: '8 cặp từ đối lập',
      icon: '🎧'
    },
    {
      id: 'b2' as ExerciseTab,
      label: 'Bài 2: Nối Ký Hiệu',
      subLabel: '12 nguyên âm đơn',
      icon: '🔗'
    },
    {
      id: 'b3' as ExerciseTab,
      label: 'Bài 3: Xếp Vào Nhà',
      subLabel: 'Phần 3a & 3b (8 nhà)',
      icon: '🏡'
    },
    {
      id: 'b4' as ExerciseTab,
      label: 'Bài 4: Điền Phiên Âm',
      subLabel: '8 câu khuyết âm',
      icon: '✏️'
    },
    {
      id: 'b5' as ExerciseTab,
      label: 'Bài 5: Tìm Từ Khác Âm',
      subLabel: '6 câu odd-one-out',
      icon: '🔍'
    },
    {
      id: 'b6' as ExerciseTab,
      label: 'Bài 6: Nhận Ký Hiệu',
      subLabel: '8 câu nghe âm bắt IPA',
      icon: '🎯'
    },
    {
      id: 'solutions' as ExerciseTab,
      label: 'Trọn Bộ Lời Giải Chi Tiết',
      subLabel: 'Đáp án & Mẹo phát âm',
      icon: '📖'
    }
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Dedicated Session Hero Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-pink-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-rose-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5" />
                Phòng Luyện Thi 15 Bộ Đề Chuẩn IPA
              </span>
              <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                15 Bộ Đề Độc Lập • Kèm Lời Giải 100%
              </span>
              <span className="bg-purple-100 text-purple-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-purple-200">
                Chuẩn 44 Âm IPA
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
              Thư Viện 15 Bộ Đề Thực Hành Bài Tập IPA
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed">
              Mỗi bộ đề gồm đúng 6 bài tập phân hóa cao (Nghe đối lập, nối ký hiệu, phân loại nhà âm, điền khuyết, tìm từ khác âm và nhận diện âm thanh), tự động chấm điểm và cung cấp lời giải khẩu hình miệng chi tiết.
            </p>
          </div>

          {/* Companion Mascot Cheer Card */}
          <div className="bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 p-4 rounded-3xl border-2 border-pink-200 flex items-center gap-3.5 shadow-2xs shrink-0 max-w-sm">
            <MascotAvatar mascotId={mascotId} size="md" mood="happy" />
            <div className="text-xs">
              <div className="font-black text-slate-800 flex items-center gap-1">
                <span>{mascot.name} đồng hành</span>
                <span>✨</span>
              </div>
              <p className="text-slate-600 mt-0.5 leading-snug">
                "Bé có tới <strong className="text-pink-600 font-black">15 bộ đề phong phú</strong> để luyện tập! Làm xong bấm <strong className="text-pink-600">Kiểm tra</strong> nhận sao nhé!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 15 Practice Sets Selector Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-indigo-200 shadow-sm space-y-4">
        {/* Top Control Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-50 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shadow-sm text-sm">
              #{selectedSetId.toString().padStart(2, '0')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{SET_ICONS[currentSet.id] || '📝'}</span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 font-heading">
                  {currentSet.title}
                </h2>
              </div>
              <p className="text-xs text-indigo-700 font-medium">
                Chủ đề: {currentSet.topic} • (Bộ {currentSet.id} / 15 bộ đề)
              </p>
            </div>
          </div>

          {/* Quick Nav Buttons & Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrevSet}
              className="p-2 rounded-xl border border-indigo-200 bg-indigo-50/60 hover:bg-indigo-100 text-indigo-800 cursor-pointer transition-all flex items-center gap-1 text-xs font-bold"
              title="Bộ đề trước"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Bộ trước</span>
            </button>

            {/* Select Dropdown */}
            <select
              value={selectedSetId}
              onChange={(e) => handleSelectSet(Number(e.target.value))}
              aria-label="Chọn bộ đề luyện tập"
              className="px-3 py-2 rounded-xl border-2 border-indigo-300 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-600 cursor-pointer shadow-2xs"
            >
              {PRACTICE_EXAM_SETS.map((s) => (
                <option key={s.id} value={s.id}>
                  Bộ {s.id.toString().padStart(2, '0')}: {s.topic}
                </option>
              ))}
            </select>

            <button
              onClick={handleNextSet}
              className="p-2 rounded-xl border border-indigo-200 bg-indigo-50/60 hover:bg-indigo-100 text-indigo-800 cursor-pointer transition-all flex items-center gap-1 text-xs font-bold"
              title="Bộ đề kế tiếp"
            >
              <span className="hidden sm:inline">Bộ sau</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowAllSetsGrid((prev) => !prev)}
              className={`p-2 rounded-xl border cursor-pointer transition-all flex items-center gap-1 text-xs font-bold ${
                showAllSetsGrid 
                  ? 'bg-indigo-600 text-white border-indigo-600' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Xem danh sách cả 15 bộ đề"
            >
              <ListFilter className="w-4 h-4" />
              <span className="hidden sm:inline">{showAllSetsGrid ? 'Thu gọn' : 'Xem 15 Bộ'}</span>
            </button>
          </div>
        </div>

        {/* Expandable Grid of 15 sets OR Scrollable Pill Bar */}
        {showAllSetsGrid ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 pt-1 animate-fade-in">
            {PRACTICE_EXAM_SETS.map((s) => {
              const isSelected = s.id === selectedSetId;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSet(s.id)}
                  className={`p-2.5 rounded-2xl border-2 text-left cursor-pointer transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-102'
                      : 'border-slate-200 bg-slate-50/80 hover:bg-indigo-50 hover:border-indigo-200 text-slate-800'
                  }`}
                >
                  <span className="text-xl shrink-0">{SET_ICONS[s.id] || '📝'}</span>
                  <div className="min-w-0">
                    <div className={`text-xs font-black truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      Bộ {s.id.toString().padStart(2, '0')}
                    </div>
                    <div className={`text-[10px] truncate ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {s.topic}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {PRACTICE_EXAM_SETS.map((s) => {
              const isSelected = s.id === selectedSetId;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSet(s.id)}
                  className={`px-3 py-2 rounded-2xl border-2 font-bold text-left transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm scale-102'
                      : 'border-slate-200 bg-slate-50/80 hover:bg-indigo-50/60 hover:border-indigo-200 text-slate-700'
                  }`}
                >
                  <span className="text-base">{SET_ICONS[s.id] || '📝'}</span>
                  <div>
                    <div className={`text-xs font-black leading-tight ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                      Bộ {s.id.toString().padStart(2, '0')}
                    </div>
                    <div className={`text-[10px] leading-none mt-0.5 max-w-[100px] truncate ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                      {s.topic}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Exercise Navigation Sub-Bar (Bài 1 -> Bài 6 + Lời giải) */}
      <div className="bg-white rounded-3xl p-3 border-2 border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          {exerciseNavItems.map((tab) => {
            const isActive = activeExercise === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveExercise(tab.id);
                  soundService.playPop();
                }}
                className={`px-3.5 py-2.5 rounded-2xl border-2 font-bold text-left transition-all shrink-0 cursor-pointer flex items-center gap-2.5 ${
                  isActive
                    ? 'border-pink-600 bg-pink-600 text-white shadow-md shadow-pink-200 scale-102'
                    : 'border-slate-200 bg-slate-50/70 hover:bg-pink-50/50 hover:border-pink-200 text-slate-700'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <div>
                  <div className={`text-xs font-black leading-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
                    {tab.label}
                  </div>
                  <div className={`text-[10px] leading-none mt-0.5 ${isActive ? 'text-pink-100' : 'text-slate-400'}`}>
                    {tab.subLabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Exercise Content Container (Keyed by selectedSetId so state resets cleanly between sets) */}
      <div className="min-h-[480px]">
        {activeExercise === 'b1' && (
          <Exercise1Section 
            key={currentSet.id} 
            questions={currentSet.exercise1} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'b2' && (
          <Exercise2Section 
            key={currentSet.id} 
            words={currentSet.exercise2Words} 
            symbols={currentSet.exercise2Symbols} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'b3' && (
          <Exercise3Section 
            key={currentSet.id} 
            data3a={currentSet.exercise3a} 
            data3b={currentSet.exercise3b} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'b4' && (
          <Exercise4Section 
            key={currentSet.id} 
            questions={currentSet.exercise4} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'b5' && (
          <Exercise5Section 
            key={currentSet.id} 
            questions={currentSet.exercise5} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'b6' && (
          <Exercise6Section 
            key={currentSet.id} 
            questions={currentSet.exercise6} 
            examSetTitle={currentSet.title}
            onEarnStars={onEarnStars} 
          />
        )}
        {activeExercise === 'solutions' && (
          <FullWorksheetSolutionSheet 
            key={currentSet.id} 
            initialSetId={currentSet.id} 
          />
        )}
      </div>
    </div>
  );
};
