import React from 'react';
import { STICKER_BADGES } from '../../data/ipaData';
import { Award, Star, X, CheckCircle, Lock } from 'lucide-react';

interface BadgeCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedBadgeIds: string[];
  totalStars: number;
}

export const BadgeCollectionModal: React.FC<BadgeCollectionModalProps> = ({
  isOpen,
  onClose,
  unlockedBadgeIds,
  totalStars,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-4 border-pink-200 relative animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">
            🏆
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Kho Huy Hiệu Của Bé</h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <span>Đã sưu tập:</span>
              <span className="font-bold text-pink-600">
                {unlockedBadgeIds.length} / {STICKER_BADGES.length} huy hiệu
              </span>
              <span>•</span>
              <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                ⭐ {totalStars} sao
              </span>
            </div>
          </div>
        </div>

        {/* Grid of Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {STICKER_BADGES.map((b) => {
            const isUnlocked = unlockedBadgeIds.includes(b.id);

            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/70 border-amber-300 shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="text-4xl mb-2 relative">
                  {b.icon}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-slate-300/60 backdrop-blur-2xs rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>

                <span className="font-bold text-xs text-slate-800 line-clamp-1">{b.name}</span>
                <span className="text-[10px] text-slate-500 mt-1 leading-tight">{b.desc}</span>

                {isUnlocked ? (
                  <span className="mt-2 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <CheckCircle className="w-2.5 h-2.5" /> Đã mở khóa
                  </span>
                ) : (
                  <span className="mt-2 text-[10px] font-semibold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
                    Chưa mở
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl text-xs transition-colors cursor-pointer"
          >
            Đóng & Tiếp tục học
          </button>
        </div>
      </div>
    </div>
  );
};
