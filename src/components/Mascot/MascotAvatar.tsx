import React from 'react';
import { MascotId } from '../../types/ipa';

interface MascotAvatarProps {
  mascotId: MascotId;
  mood?: 'idle' | 'happy' | 'speaking' | 'surprised' | 'cheering';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSpeech?: boolean;
  speechText?: string;
  className?: string;
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  mascotId,
  mood = 'idle',
  size = 'md',
  showSpeech = false,
  speechText,
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48',
  };

  const renderSvg = () => {
    switch (mascotId) {
      case 'chiikawa':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Chiikawa body */}
            <circle cx="60" cy="65" r="45" fill="#FFFFFF" stroke="#4B5563" strokeWidth="3.5" />
            
            {/* Ears */}
            <ellipse cx="36" cy="24" rx="12" ry="14" fill="#FFFFFF" stroke="#4B5563" strokeWidth="3.5" />
            <ellipse cx="36" cy="24" rx="6" ry="7" fill="#FCE7F3" />
            <ellipse cx="84" cy="24" rx="12" ry="14" fill="#FFFFFF" stroke="#4B5563" strokeWidth="3.5" />
            <ellipse cx="84" cy="24" rx="6" ry="7" fill="#FCE7F3" />
            
            {/* Little arms */}
            <ellipse cx="22" cy="72" rx="7" ry="10" fill="#FFFFFF" stroke="#4B5563" strokeWidth="3" transform="rotate(-20 22 72)" />
            <ellipse cx="98" cy="72" rx="7" ry="10" fill="#FFFFFF" stroke="#4B5563" strokeWidth="3" transform="rotate(20 98 72)" />

            {/* Cute rosy cheeks */}
            <circle cx="34" cy="70" r="8" fill="#F472B6" opacity="0.6" />
            <circle cx="86" cy="70" r="8" fill="#F472B6" opacity="0.6" />

            {/* Big sparkly black eyes */}
            <ellipse cx="45" cy="56" rx="6" ry="8" fill="#1F2937" />
            <circle cx="43" cy="53" r="2.5" fill="#FFFFFF" />
            <circle cx="47" cy="58" r="1.2" fill="#FFFFFF" />

            <ellipse cx="75" cy="56" rx="6" ry="8" fill="#1F2937" />
            <circle cx="73" cy="53" r="2.5" fill="#FFFFFF" />
            <circle cx="77" cy="58" r="1.2" fill="#FFFFFF" />

            {/* Eyebrows */}
            <path d="M 40 45 Q 45 42 50 45" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 70 45 Q 75 42 80 45" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Mouth depending on mood */}
            {mood === 'speaking' ? (
              <path d="M 54 66 Q 60 76 66 66 Z" fill="#F43F5E" stroke="#4B5563" strokeWidth="2.5" />
            ) : mood === 'happy' || mood === 'cheering' ? (
              <path d="M 52 64 Q 60 72 68 64" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" fill="none" />
            ) : mood === 'surprised' ? (
              <ellipse cx="60" cy="67" rx="5" ry="6" fill="#F43F5E" stroke="#4B5563" strokeWidth="2.5" />
            ) : (
              <path d="M 54 65 Q 60 62 66 65" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            )}

            {/* Cute flower pin */}
            <circle cx="88" cy="38" r="5" fill="#FDE047" />
            <circle cx="88" cy="38" r="2" fill="#F97316" />
          </svg>
        );

      case 'doraemon':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Blue Head */}
            <circle cx="60" cy="60" r="48" fill="#0284C7" stroke="#0F172A" strokeWidth="3" />
            {/* White Face Inner */}
            <ellipse cx="60" cy="66" rx="38" ry="34" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />

            {/* Red Collar & Golden Bell */}
            <rect x="30" y="100" width="60" height="9" rx="4.5" fill="#EF4444" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="60" cy="107" r="7" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
            <line x1="53" y1="106" x2="67" y2="106" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="60" cy="109" r="1.5" fill="#0F172A" />

            {/* Big Doraemon Eyes */}
            <ellipse cx="48" cy="42" rx="10" ry="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="72" cy="42" rx="10" ry="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="51" cy="42" r="3.5" fill="#0F172A" />
            <circle cx="69" cy="42" r="3.5" fill="#0F172A" />

            {/* Red Nose */}
            <circle cx="60" cy="55" r="7" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
            <circle cx="58" cy="53" r="2" fill="#FFFFFF" />

            {/* Whiskers */}
            <line x1="30" y1="62" x2="48" y2="64" stroke="#0F172A" strokeWidth="2" />
            <line x1="28" y1="70" x2="48" y2="70" stroke="#0F172A" strokeWidth="2" />
            <line x1="30" y1="78" x2="48" y2="76" stroke="#0F172A" strokeWidth="2" />

            <line x1="90" y1="62" x2="72" y2="64" stroke="#0F172A" strokeWidth="2" />
            <line x1="92" y1="70" x2="72" y2="70" stroke="#0F172A" strokeWidth="2" />
            <line x1="90" y1="78" x2="72" y2="76" stroke="#0F172A" strokeWidth="2" />

            {/* Center line down from nose */}
            <line x1="60" y1="62" x2="60" y2="82" stroke="#0F172A" strokeWidth="2" />

            {/* Smile / Mouth */}
            {mood === 'speaking' ? (
              <path d="M 40 80 Q 60 102 80 80 Z" fill="#DC2626" stroke="#0F172A" strokeWidth="2.5" />
            ) : mood === 'happy' || mood === 'cheering' ? (
              <path d="M 38 78 Q 60 98 82 78" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            ) : mood === 'surprised' ? (
              <ellipse cx="60" cy="85" rx="7" ry="9" fill="#DC2626" stroke="#0F172A" strokeWidth="2.5" />
            ) : (
              <path d="M 42 78 Q 60 88 78 78" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            )}
          </svg>
        );

      case 'minion':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Minion Body Pill */}
            <rect x="25" y="20" width="70" height="85" rx="35" fill="#FACC15" stroke="#B45309" strokeWidth="3" />
            
            {/* Hair Strands */}
            <path d="M 55 20 Q 52 10 50 8" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
            <path d="M 60 20 Q 60 8 60 6" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
            <path d="M 65 20 Q 68 10 70 8" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />

            {/* Goggle strap */}
            <rect x="25" y="45" width="70" height="12" fill="#374151" stroke="#1F2937" strokeWidth="2" />

            {/* Dual Goggles */}
            <circle cx="48" cy="51" r="16" fill="#9CA3AF" stroke="#4B5563" strokeWidth="3" />
            <circle cx="48" cy="51" r="12" fill="#E5E7EB" />
            <circle cx="72" cy="51" r="16" fill="#9CA3AF" stroke="#4B5563" strokeWidth="3" />
            <circle cx="72" cy="51" r="12" fill="#E5E7EB" />

            {/* Eyes (Heterochromia or sweet brown) */}
            <circle cx="50" cy="51" r="6" fill="#854D0E" />
            <circle cx="50" cy="51" r="3" fill="#1C1917" />
            <circle cx="48" cy="49" r="1.5" fill="#FFFFFF" />

            <circle cx="70" cy="51" r="6" fill="#0284C7" />
            <circle cx="70" cy="51" r="3" fill="#1C1917" />
            <circle cx="68" cy="49" r="1.5" fill="#FFFFFF" />

            {/* Denim Overalls */}
            <path d="M 30 85 L 90 85 L 90 102 C 90 104 85 105 60 105 C 35 105 30 104 30 102 Z" fill="#2563EB" stroke="#1E40AF" strokeWidth="2" />
            <rect x="48" y="78" width="24" height="12" fill="#2563EB" stroke="#1E40AF" strokeWidth="2" />
            <circle cx="40" cy="85" r="2" fill="#1F2937" />
            <circle cx="80" cy="85" r="2" fill="#1F2937" />

            {/* Mouth */}
            {mood === 'speaking' ? (
              <path d="M 46 70 Q 60 82 74 70 Z" fill="#991B1B" stroke="#451A03" strokeWidth="2.5" />
            ) : mood === 'happy' || mood === 'cheering' ? (
              <path d="M 44 68 Q 60 80 76 68" stroke="#451A03" strokeWidth="3" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M 48 70 Q 60 74 72 70" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            )}
          </svg>
        );

      case 'omnom':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Green Om Nom Body */}
            <path d="M 30 85 C 15 65 25 35 60 35 C 95 35 105 65 90 85 C 80 100 40 100 30 85 Z" fill="#22C55E" stroke="#15803D" strokeWidth="3.5" />
            
            {/* Top stalk / antenna */}
            <path d="M 60 35 Q 58 20 62 14" stroke="#15803D" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="62" cy="14" r="5" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" />

            {/* Huge Round Eyes */}
            <ellipse cx="44" cy="50" rx="14" ry="16" fill="#FFFFFF" stroke="#15803D" strokeWidth="3" />
            <ellipse cx="76" cy="50" rx="14" ry="16" fill="#FFFFFF" stroke="#15803D" strokeWidth="3" />

            {/* Pupils looking up excitedly */}
            <circle cx="46" cy="48" r="7" fill="#14532D" />
            <circle cx="44" cy="45" r="2.5" fill="#FFFFFF" />

            <circle cx="74" cy="48" r="7" fill="#14532D" />
            <circle cx="72" cy="45" r="2.5" fill="#FFFFFF" />

            {/* Cute Little Feet */}
            <ellipse cx="38" cy="95" rx="8" ry="5" fill="#16A34A" stroke="#15803D" strokeWidth="2" />
            <ellipse cx="82" cy="95" rx="8" ry="5" fill="#16A34A" stroke="#15803D" strokeWidth="2" />

            {/* Big hungry mouth or happy smile with 4 teeth */}
            {mood === 'speaking' || mood === 'surprised' ? (
              <g>
                <path d="M 36 72 Q 60 92 84 72 Z" fill="#7F1D1D" stroke="#15803D" strokeWidth="3" />
                {/* 4 sharp white teeth */}
                <polygon points="42,72 45,76 48,72" fill="#FFFFFF" />
                <polygon points="52,72 55,76 58,72" fill="#FFFFFF" />
                <polygon points="62,72 65,76 68,72" fill="#FFFFFF" />
                <polygon points="72,72 75,76 78,72" fill="#FFFFFF" />
              </g>
            ) : (
              <g>
                <path d="M 36 70 Q 60 84 84 70" stroke="#15803D" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* 2 teeth peeking */}
                <polygon points="48,71 52,76 56,72" fill="#FFFFFF" stroke="#15803D" strokeWidth="1" />
                <polygon points="64,72 68,76 72,71" fill="#FFFFFF" stroke="#15803D" strokeWidth="1" />
              </g>
            )}
          </svg>
        );

      case 'kpop_hunter':
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
            {/* Twin Tails Hair (Purple/Pink Gradient) */}
            <ellipse cx="20" cy="55" rx="14" ry="24" fill="#A855F7" stroke="#6B21A8" strokeWidth="2.5" transform="rotate(-15 20 55)" />
            <ellipse cx="100" cy="55" rx="14" ry="24" fill="#A855F7" stroke="#6B21A8" strokeWidth="2.5" transform="rotate(15 100 55)" />

            {/* Chibi Face */}
            <circle cx="60" cy="62" r="34" fill="#FFE4E6" stroke="#475569" strokeWidth="2.5" />
            {/* Front Bangs Hair */}
            <path d="M 28 55 C 35 30 85 30 92 55 C 80 48 70 58 60 48 C 50 58 40 48 28 55 Z" fill="#C084FC" stroke="#6B21A8" strokeWidth="2.5" />

            {/* Glowing Hair Bows / Stars */}
            <polygon points="26,38 29,43 35,43 30,47 32,53 26,49 20,53 22,47 17,43 23,43" fill="#FACC15" />
            <polygon points="94,38 97,43 103,43 98,47 100,53 94,49 88,53 90,47 85,43 91,43" fill="#FACC15" />

            {/* Anime Sparkly Eyes */}
            <ellipse cx="46" cy="64" rx="7" ry="9" fill="#9333EA" />
            <circle cx="44" cy="61" r="3" fill="#FFFFFF" />
            <circle cx="48" cy="66" r="1.5" fill="#F472B6" />

            <ellipse cx="74" cy="64" rx="7" ry="9" fill="#9333EA" />
            <circle cx="72" cy="61" r="3" fill="#FFFFFF" />
            <circle cx="76" cy="66" r="1.5" fill="#F472B6" />

            {/* Rosy Cheeks */}
            <circle cx="36" cy="72" r="5" fill="#FB7185" opacity="0.6" />
            <circle cx="84" cy="72" r="5" fill="#FB7185" opacity="0.6" />

            {/* Star Talisman Mic */}
            <line x1="88" y1="85" x2="80" y2="76" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="78" cy="74" r="5" fill="#EC4899" stroke="#BE185D" strokeWidth="1.5" />

            {/* Mouth */}
            {mood === 'speaking' ? (
              <ellipse cx="60" cy="76" rx="4" ry="5" fill="#E11D48" />
            ) : mood === 'happy' || mood === 'cheering' ? (
              <path d="M 54 74 Q 60 80 66 74" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M 55 75 Q 60 78 65 75" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" fill="none" />
            )}
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {showSpeech && speechText && (
        <div className="absolute -top-12 z-20 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl shadow-lg border-2 border-pink-300 text-xs sm:text-sm font-bold text-slate-800 animate-bounce max-w-[200px] text-center pointer-events-none">
          {speechText}
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r-2 border-b-2 border-pink-300" />
        </div>
      )}
      <div
        className={`${sizeMap[size]} transition-transform duration-300 ${
          mood === 'cheering' ? 'scale-110 animate-bounce' : mood === 'speaking' ? 'scale-105' : 'hover:scale-105'
        }`}
      >
        {renderSvg()}
      </div>
    </div>
  );
};
