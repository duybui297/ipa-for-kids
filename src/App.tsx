import React, { useState, useEffect } from 'react';
import { MascotId } from './types/ipa';
import { MASCOTS } from './data/characters';
import { MascotAvatar } from './components/Mascot/MascotAvatar';
import { MascotSelector } from './components/Navigation/MascotSelector';
import { IPAExplorer } from './components/IPAChart/IPAExplorer';
import { CandyPairsGame } from './components/Games/CandyPairsGame';
import { ConfusingPairsHub } from './components/ConfusingPairs/ConfusingPairsHub';
import { FinalSoundDetective } from './components/Games/FinalSoundDetective';
import { StopSoundNinja } from './components/Games/StopSoundNinja';
import { VoiceStudio } from './components/PracticeStudio/VoiceStudio';
import { VideoReferenceRoom } from './components/VideoRoom/VideoReferenceRoom';
import { ExerciseHub } from './components/ExerciseSession/ExerciseHub';
import { BadgeCollectionModal } from './components/Reward/BadgeCollectionModal';
import { soundService } from './services/speechService';
import { checkUnlockedBadges } from './utils/gameRules';
import { 
  Sparkles, 
  Award, 
  BookOpen, 
  Candy, 
  Search, 
  Flame, 
  Mic, 
  Video, 
  Volume2, 
  Star, 
  HeartHandshake,
  GraduationCap
} from 'lucide-react';

import { triggerStarMilestoneConfetti, triggerBadgeUnlockedConfetti } from './utils/confetti';

const STAR_MILESTONES = [50, 75, 100, 150, 200, 250, 300, 400, 500];

export default function App() {
  const [activeMascot, setActiveMascot] = useState<MascotId>('chiikawa');
  const [activeTab, setActiveTab] = useState<'chart' | 'pairs' | 'exercise' | 'detective' | 'ninja' | 'studio' | 'videos'>('chart');
  const [stars, setStars] = useState<number>(30);
  const [solvedPairsCount, setSolvedPairsCount] = useState<number>(0);
  const [solvedFinalSoundsCount, setSolvedFinalSoundsCount] = useState<number>(0);
  const [recordCount, setRecordCount] = useState<number>(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['badge_star']);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [showMascotSelector, setShowMascotSelector] = useState(false);
  const [milestoneCelebration, setMilestoneCelebration] = useState<{ message: string; stars: number } | null>(null);

  // Load saved progress
  useEffect(() => {
    try {
      const savedStars = localStorage.getItem('ipa_stars');
      if (savedStars) setStars(parseInt(savedStars, 10));
      const savedMascot = localStorage.getItem('ipa_mascot') as MascotId;
      if (savedMascot && MASCOTS[savedMascot]) setActiveMascot(savedMascot);
    } catch {
      // Local storage fallback
    }
  }, []);

  // Update badges whenever metrics change
  useEffect(() => {
    const badges = checkUnlockedBadges(stars, solvedPairsCount, solvedFinalSoundsCount, recordCount);
    if (badges.length > 0) {
      setUnlockedBadges((prev) => {
        const newlyUnlocked = badges.filter((b) => !prev.includes(b));
        if (newlyUnlocked.length > 0) {
          triggerBadgeUnlockedConfetti();
        }
        return Array.from(new Set([...prev, ...badges]));
      });
    }
    try {
      localStorage.setItem('ipa_stars', stars.toString());
      localStorage.setItem('ipa_mascot', activeMascot);
    } catch {
      // ignore
    }
  }, [stars, solvedPairsCount, solvedFinalSoundsCount, recordCount, activeMascot]);

  const handleEarnStars = (amount: number) => {
    setStars((prev) => {
      const next = prev + amount;
      // Check if crossed milestone
      const crossedMilestone = STAR_MILESTONES.find((m) => prev < m && next >= m);
      if (crossedMilestone) {
        triggerStarMilestoneConfetti(next);
        setMilestoneCelebration({
          message: `Bé xuất sắc vượt mốc ${crossedMilestone} Sao Thưởng!`,
          stars: crossedMilestone
        });
        setTimeout(() => setMilestoneCelebration(null), 4500);
      }
      return next;
    });
  };

  const navTabs = [
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
              onClick={() => setShowMascotSelector(!showMascotSelector)}
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
                  onClick={() => setShowMascotSelector(!showMascotSelector)}
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
                  onClick={() => {
                    setActiveTab(tab.id as unknown as typeof activeTab);
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
          <ConfusingPairsHub mascotId={activeMascot} onEarnStars={handleEarnStars} />
        )}
        {activeTab === 'exercise' && (
          <ExerciseHub mascotId={activeMascot} onEarnStars={handleEarnStars} />
        )}

        {activeTab === 'detective' && (
          <FinalSoundDetective
            mascotId={activeMascot}
            onEarnStars={handleEarnStars}
            onGameComplete={() => {
              setSolvedFinalSoundsCount((prev) => prev + 5);
              soundService.playChime();
            }}
          />
        )}

        {activeTab === 'ninja' && (
          <StopSoundNinja mascotId={activeMascot} onEarnStars={handleEarnStars} />
        )}

        {activeTab === 'studio' && (
          <VoiceStudio
            mascotId={activeMascot}
            onEarnStars={handleEarnStars}
            onRecordCompleted={() => setRecordCount((prev) => prev + 1)}
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
