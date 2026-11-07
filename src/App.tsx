import { useEffect, useMemo, useRef, useState } from 'react';
import { MascotId } from './types/ipa';
import { MASCOTS } from './data/characters';
import { MascotAvatar } from './components/Mascot/MascotAvatar';
import { MascotSelector } from './components/Navigation/MascotSelector';
import { IPAExplorer } from './components/IPAChart/IPAExplorer';
import { ConfusingPairsHub } from './components/ConfusingPairs/ConfusingPairsHub';
import { FinalSoundDetective } from './components/Games/FinalSoundDetective';
import { StopSoundNinja } from './components/Games/StopSoundNinja';
import { VoiceStudio } from './components/PracticeStudio/VoiceStudio';
import { VideoReferenceRoom } from './components/VideoRoom/VideoReferenceRoom';
import { ExerciseHub } from './components/ExerciseSession/ExerciseHub';
import { BadgeCollectionModal } from './components/Reward/BadgeCollectionModal';
import { soundService } from './services/speechService';
import { checkUnlockedBadges } from './utils/gameRules';
import { usePersistentState } from './hooks/usePersistentState';
import { Award, BookOpen, Candy, Search, Flame, Mic, Video, GraduationCap } from 'lucide-react';

import { triggerStarMilestoneConfetti, triggerBadgeUnlockedConfetti } from './utils/confetti';

const STAR_MILESTONES = [50, 75, 100, 150, 200, 250, 300, 400, 500];
const STARTING_STARS = 30;
const STOP_WORD_STARS = 15;
const FIRST_RECORDING_STARS = 20;

type TabId = 'chart' | 'pairs' | 'exercise' | 'detective' | 'ninja' | 'studio' | 'videos';

interface AppProgress {
  stars: number;
  solvedPairs: number;
  solvedFinalSounds: number;
  voiceRecordCount: number;
  practicedStopWordIds: string[];
  recordedWords: string[];
}

const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0;
const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string');

function isAppProgress(v: unknown): v is AppProgress {
  if (typeof v !== 'object' || v === null) return false;
  const p = v as Record<string, unknown>;
  return (
    isCount(p.stars) &&
    isCount(p.solvedPairs) &&
    isCount(p.solvedFinalSounds) &&
    isCount(p.voiceRecordCount) &&
    isStringArray(p.practicedStopWordIds) &&
    isStringArray(p.recordedWords)
  );
}

function isMascotId(v: unknown): v is MascotId {
  return typeof v === 'string' && Object.prototype.hasOwnProperty.call(MASCOTS, v);
}

/** Tiến độ mặc định; giữ lại số sao từ phiên bản cũ (key 'ipa_stars') nếu có. */
function createInitialProgress(): AppProgress {
  let stars = STARTING_STARS;
  try {
    const legacy = Number.parseInt(window.localStorage.getItem('ipa_stars') ?? '', 10);
    if (Number.isFinite(legacy) && legacy >= 0) stars = legacy;
  } catch {
    // ignore
  }
  return { stars, solvedPairs: 0, solvedFinalSounds: 0, voiceRecordCount: 0, practicedStopWordIds: [], recordedWords: [] };
}

export default function App() {
  // Bản cũ lưu mascot dạng chuỗi thô; JSON.parse thất bại sẽ rơi về fallback bên dưới,
  // nên giá trị cũ vẫn được dùng lại.
  const [activeMascot, setActiveMascot] = usePersistentState<MascotId>(
    'ipa_mascot',
    () => {
      try {
        const raw = window.localStorage.getItem('ipa_mascot');
        if (isMascotId(raw)) return raw;
      } catch {
        // ignore
      }
      return 'chiikawa';
    },
    isMascotId
  );
  const [progress, setProgress] = usePersistentState<AppProgress>('ipa_progress_v1', createInitialProgress, isAppProgress);
  const [activeTab, setActiveTab] = useState<TabId>('chart');
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [showMascotSelector, setShowMascotSelector] = useState(false);
  const [milestoneCelebration, setMilestoneCelebration] = useState<{ message: string; stars: number } | null>(null);

  const stars = progress.stars;

  const unlockedBadges = useMemo(
    () =>
      checkUnlockedBadges({
        stars: progress.stars,
        solvedPairs: progress.solvedPairs,
        solvedFinalSounds: progress.solvedFinalSounds,
        stopSoundsPracticed: progress.practicedStopWordIds.length,
        voiceRecordCount: progress.voiceRecordCount,
      }),
    [progress]
  );

  // Ăn mừng khi vượt mốc sao (side-effect nằm trong effect, không nằm trong state updater)
  const prevStarsRef = useRef(stars);
  useEffect(() => {
    const prev = prevStarsRef.current;
    prevStarsRef.current = stars;
    const crossed = [...STAR_MILESTONES].reverse().find((m) => prev < m && stars >= m);
    if (crossed) {
      triggerStarMilestoneConfetti(stars);
      setMilestoneCelebration({ message: `Bé xuất sắc vượt mốc ${crossed} Sao Thưởng!`, stars: crossed });
    }
  }, [stars]);

  useEffect(() => {
    if (!milestoneCelebration) return;
    const timer = setTimeout(() => setMilestoneCelebration(null), 4500);
    return () => clearTimeout(timer);
  }, [milestoneCelebration]);

  // Ăn mừng khi mở khóa huy hiệu mới (không chạy lúc vừa tải trang)
  const prevBadgesRef = useRef(unlockedBadges);
  useEffect(() => {
    const isNew = unlockedBadges.some((b) => !prevBadgesRef.current.includes(b));
    prevBadgesRef.current = unlockedBadges;
    if (isNew) triggerBadgeUnlockedConfetti();
  }, [unlockedBadges]);

  const handleEarnStars = (amount: number) => {
    if (amount <= 0) return;
    setProgress((prev) => ({ ...prev, stars: prev.stars + amount }));
  };

  const handlePracticeStopWord = (wordId: string) => {
    if (progress.practicedStopWordIds.includes(wordId)) return false;
    setProgress((prev) =>
      prev.practicedStopWordIds.includes(wordId)
        ? prev
        : { ...prev, stars: prev.stars + STOP_WORD_STARS, practicedStopWordIds: [...prev.practicedStopWordIds, wordId] }
    );
    return true;
  };

  /** Lượt thu âm đầu tiên của mỗi từ được thưởng sao; các lượt sau chỉ tính vào huy hiệu. */
  const handleRecordCompleted = (word: string): number => {
    const isFirstTime = !progress.recordedWords.includes(word);
    setProgress((prev) => {
      const first = !prev.recordedWords.includes(word);
      return {
        ...prev,
        voiceRecordCount: prev.voiceRecordCount + 1,
        stars: prev.stars + (first ? FIRST_RECORDING_STARS : 0),
        recordedWords: first ? [...prev.recordedWords, word] : prev.recordedWords,
      };
    });
    return isFirstTime ? FIRST_RECORDING_STARS : 0;
  };

  const navTabs: { id: TabId; label: string; icon: typeof BookOpen; color: string; activeBg: string }[] = [
    { id: 'chart', label: 'Bảng 44 Âm IPA', icon: BookOpen, color: 'text-pink-600', activeBg: 'bg-pink-600' },
    { id: 'pairs', label: 'Phân Biệt Cặp Âm & Từ Dễ Nhầm', icon: Candy, color: 'text-amber-600', activeBg: 'bg-amber-500' },
    { id: 'exercise', label: '📝 Phòng Bài Tập (Bài 1 - 6)', icon: GraduationCap, color: 'text-rose-600', activeBg: 'bg-rose-600' },
    { id: 'detective', label: 'Thám Tử Âm Cuối', icon: Search, color: 'text-purple-600', activeBg: 'bg-purple-600' },
    { id: 'ninja', label: 'Ninja Chặn Hơi', icon: Flame, color: 'text-red-600', activeBg: 'bg-red-600' },
    { id: 'studio', label: 'Studio Thu Âm Bé', icon: Mic, color: 'text-rose-600', activeBg: 'bg-rose-600' },
    { id: 'videos', label: 'Video & Cambridge', icon: Video, color: 'text-indigo-600', activeBg: 'bg-indigo-600' },
  ];

  const currentMascot = MASCOTS[activeMascot];

  return (
    <div className="min-h-screen bg-[#fdf8f5] text-slate-800 flex flex-col selection:bg-pink-200">
      {/* Top Header / App Shell */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-2 border-pink-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Logo & Kid Level */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMascotSelector((v) => !v)}
              aria-expanded={showMascotSelector}
              className="relative transition-transform hover:scale-105 cursor-pointer focus:outline-hidden"
              title="Đổi bạn đồng hành"
              aria-label="Đổi bạn hoạt hình đồng hành"
            >
              <MascotAvatar mascotId={activeMascot} size="sm" mood="happy" />
              <span className="absolute -bottom-1 -right-1 bg-pink-500 text-white rounded-full p-1 shadow-xs text-[10px]">
                ✨
              </span>
            </button>

            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg sm:text-xl font-black text-pink-600 tracking-tight font-heading">
                  IPA Kids Galaxy
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full border border-rose-200">
                  Lớp 3 • US Accent
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                Bạn đồng hành: <span className="font-bold text-slate-700">{currentMascot.name}</span>
                <button
                  onClick={() => setShowMascotSelector((v) => !v)}
                  className="text-pink-600 font-bold hover:underline ml-1 cursor-pointer"
                >
                  (Đổi)
                </button>
              </p>
            </div>
          </div>

          {/* User Stars & Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-amber-50 px-3.5 py-1.5 rounded-2xl border-2 border-amber-300 shadow-xs">
              <span className="text-xl">⭐</span>
              <span className="text-sm font-black text-amber-900">{stars}</span>
            </div>

            <button
              onClick={() => setIsBadgeModalOpen(true)}
              className="flex items-center gap-1.5 bg-pink-50 hover:bg-pink-100 px-3 py-1.5 rounded-2xl border-2 border-pink-200 text-xs font-bold text-pink-700 transition-colors cursor-pointer"
              aria-label="Mở kho huy hiệu"
            >
              <Award className="w-4 h-4 text-pink-600" />
              <span className="hidden sm:inline">Huy hiệu:</span>
              <span>{unlockedBadges.length}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Mascot Selector Drawer */}
        {showMascotSelector && (
          <div className="max-w-6xl mx-auto px-4 pb-4 animate-fade-in">
            <MascotSelector
              activeMascot={activeMascot}
              onSelectMascot={(id) => {
                setActiveMascot(id);
                setShowMascotSelector(false);
              }}
            />
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-none pb-1">
          <nav className="flex items-center gap-2 min-w-max py-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    setActiveTab(tab.id);
                    soundService.playPop();
                  }}
                  className={`px-3.5 py-2 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? `${tab.activeBg} text-white shadow-md shadow-pink-200 scale-102`
                      : 'bg-white hover:bg-pink-50 text-slate-600 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Star Milestone Celebration Toast */}
      {milestoneCelebration && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce duration-300">
          <div className="bg-linear-to-r from-amber-500 via-rose-500 to-purple-600 text-white px-5 py-3 rounded-3xl shadow-2xl border-2 border-yellow-200 flex items-center gap-3">
            <span className="text-2xl animate-spin">🌟</span>
            <div className="text-sm font-black tracking-wide">
              {milestoneCelebration.message}
            </div>
            <button
              onClick={() => setMilestoneCelebration(null)}
              aria-label="Đóng thông báo"
              className="ml-2 hover:bg-white/20 rounded-full p-1 text-white text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main App Content Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {activeTab === 'chart' && (
          <IPAExplorer onNavigateToPairs={() => setActiveTab('pairs')} />
        )}
        {activeTab === 'pairs' && (
          <ConfusingPairsHub
            mascotId={activeMascot}
            onEarnStars={handleEarnStars}
            onCorrectAnswer={() => setProgress((prev) => ({ ...prev, solvedPairs: prev.solvedPairs + 1 }))}
          />
        )}
        {activeTab === 'exercise' && (
          <ExerciseHub mascotId={activeMascot} onEarnStars={handleEarnStars} />
        )}

        {activeTab === 'detective' && (
          <FinalSoundDetective
            mascotId={activeMascot}
            onEarnStars={handleEarnStars}
            onCorrectAnswer={() => setProgress((prev) => ({ ...prev, solvedFinalSounds: prev.solvedFinalSounds + 1 }))}
          />
        )}

        {activeTab === 'ninja' && (
          <StopSoundNinja
            mascotId={activeMascot}
            practicedWordIds={progress.practicedStopWordIds}
            onPracticeWord={handlePracticeStopWord}
          />
        )}

        {activeTab === 'studio' && (
          <VoiceStudio
            mascotId={activeMascot}
            onRecordCompleted={handleRecordCompleted}
          />
        )}

        {activeTab === 'videos' && <VideoReferenceRoom />}
      </main>

      {/* Mascot Cheers Floating Footer */}
      <footer className="mt-auto bg-white border-t border-pink-100 py-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base">🌸</span>
            <span>
              IPA Kids Galaxy - Thiết kế sinh động cho bé học phát âm chuẩn giọng Mỹ (General American Accent)
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Chiikawa</span> • <span>Doraemon</span> • <span>Minions</span> • <span>Om Nom</span> • <span>K-pop Heroine</span>
          </div>
        </div>
      </footer>

      {/* Rewards Badge Modal */}
      <BadgeCollectionModal
        isOpen={isBadgeModalOpen}
        onClose={() => setIsBadgeModalOpen(false)}
        unlockedBadgeIds={unlockedBadges}
        totalStars={stars}
      />
    </div>
  );
}
