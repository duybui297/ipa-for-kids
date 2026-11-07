import React from 'react';
import { MASCOTS } from '../../data/characters';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Sparkles, Heart } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface MascotSelectorProps {
  activeMascot: MascotId;
  onSelectMascot: (id: MascotId) => void;
}

export const MascotSelector: React.FC<MascotSelectorProps> = ({
  activeMascot,
  onSelectMascot,
}) => {
  const handleSelect = (id: MascotId) => {
    onSelectMascot(id);
    soundService.playPop();
  };

  const current = MASCOTS[activeMascot];

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border-2 border-pink-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <h3 className="text-base sm:text-lg font-bold text-slate-800">
            Chọn Bạn Đồng Hành Học Cùng Bé:
          </h3>
        </div>
        <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
          {current.name} đang đồng hành
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {(Object.keys(MASCOTS) as MascotId[]).map((id) => {
          const mascot = MASCOTS[id];
          const isSelected = activeMascot === id;

          return (
            <button
              key={id}
              onClick={() => handleSelect(id)}
              className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center relative ${
                isSelected
                  ? 'bg-linear-to-b from-pink-50 to-white border-pink-500 shadow-md ring-3 ring-pink-200 scale-102'
                  : 'bg-slate-50/60 hover:bg-white border-slate-200 hover:border-pink-300'
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2 bg-pink-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5" /> ĐANG CHỌN
                </span>
              )}
              <MascotAvatar mascotId={id} size="sm" mood={isSelected ? 'happy' : 'idle'} />
              <span className="font-black text-sm text-slate-800 mt-1">{mascot.name}</span>
              <span className="text-[11px] text-slate-500 leading-tight line-clamp-1 mt-0.5">
                {mascot.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Catchphrase banner */}
      <div className="mt-3 bg-pink-50/80 rounded-2xl px-4 py-2 text-xs sm:text-sm text-pink-800 flex items-center gap-2 border border-pink-200">
        <span className="text-lg">💬</span>
        <span className="italic font-semibold">"{current.catchphrase}"</span>
      </div>
    </div>
  );
};
