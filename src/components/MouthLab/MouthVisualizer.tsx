import React, { useState } from 'react';
import { Phoneme } from '../../types/ipa';
import { Volume2, Sparkles, Wind, Eye, Layers } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface MouthVisualizerProps {
  phoneme: Phoneme;
  onPlaySound?: () => void;
  isPlaying?: boolean;
}

export const MouthVisualizer: React.FC<MouthVisualizerProps> = ({
  phoneme,
  onPlaySound,
  isPlaying = false,
}) => {
  const [viewMode, setViewMode] = useState<'front' | 'side'>('front');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSlowMo, setIsSlowMo] = useState(false);

  const handleSpeak = (text: string) => {
    soundService.speakUS(text, isSlowMo ? 0.6 : 0.95);
    if (onPlaySound) onPlaySound();
  };

  // Render Front Lips view based on lip shape
  const renderFrontLips = () => {
    const shape = phoneme.mouthGuide.lips;

    return (
      <svg viewBox="0 0 240 180" className="w-full h-52 sm:h-60 mx-auto drop-shadow-md">
        {/* Face contour backdrop */}
        <ellipse cx="120" cy="90" rx="90" ry="70" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2.5" />
        
        {/* Cute blush cheeks */}
        <circle cx="55" cy="95" r="14" fill="#FDA4AF" opacity="0.6" />
        <circle cx="185" cy="95" r="14" fill="#FDA4AF" opacity="0.6" />

        {/* Nose hint */}
        <path d="M 115 50 Q 120 58 125 50" stroke="#FB7185" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Dynamic Lips & Tongue based on phoneme */}
        {shape === 'wide-smile' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Dark inner mouth */}
            <path d="M 60 90 Q 120 68 180 90 Q 120 120 60 90 Z" fill="#881337" />
            {/* Upper & lower teeth */}
            <rect x="75" y="80" width="90" height="9" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="80" y="93" width="80" height="7" rx="2" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            {/* Tongue raised */}
            <path d="M 85 96 Q 120 86 155 96 Q 120 108 85 96 Z" fill="#FB7185" />
            {/* Outer Lips stretched wide */}
            <path d="M 50 90 Q 120 60 190 90 Q 120 135 50 90 Z" fill="none" stroke="#F43F5E" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
            {/* Upper lip curve */}
            <path d="M 50 90 Q 95 68 120 76 Q 145 68 190 90" fill="none" stroke="#E11D48" strokeWidth="3" />
            {/* Stretch smile arrows */}
            <path d="M 38 90 L 26 90 M 29 86 L 25 90 L 29 94" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
            <path d="M 202 90 L 214 90 M 211 86 L 215 90 L 211 94" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {shape === 'relaxed-neutral' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Inner mouth smaller opening */}
            <ellipse cx="120" cy="92" rx="36" ry="14" fill="#881337" />
            {/* Upper teeth peeking */}
            <rect x="96" y="83" width="48" height="7" rx="2" fill="#FFFFFF" />
            {/* Tongue relaxed */}
            <ellipse cx="120" cy="96" rx="28" ry="7" fill="#FB7185" />
            {/* Outer lips relaxed */}
            <path d="M 80 92 Q 120 76 160 92 Q 120 114 80 92 Z" fill="none" stroke="#F43F5E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}

        {shape === 'round-tight' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Circular small tight mouth */}
            <circle cx="120" cy="92" r="16" fill="#881337" />
            {/* Tongue body behind */}
            <circle cx="120" cy="93" r="8" fill="#FB7185" />
            {/* Puckered lips */}
            <circle cx="120" cy="92" r="24" fill="none" stroke="#F43F5E" strokeWidth="8" />
            {/* Lip creases */}
            <line x1="120" y1="62" x2="120" y2="67" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
            <line x1="120" y1="117" x2="120" y2="122" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
            {/* Arrow indicators showing forward pucker */}
            <path d="M 88 92 L 76 92" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 152 92 L 164 92" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {shape === 'open-wide' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Big jaw drop opening for /æ/ and /ɑː/ */}
            <ellipse cx="120" cy="96" rx="46" ry="32" fill="#881337" />
            {/* Upper teeth */}
            <rect x="90" y="72" width="60" height="9" rx="2" fill="#FFFFFF" />
            {/* Flat tongue at the floor of mouth */}
            <ellipse cx="120" cy="114" rx="38" ry="12" fill="#FB7185" />
            {/* Big outer open lips */}
            <ellipse cx="120" cy="96" rx="54" ry="38" fill="none" stroke="#F43F5E" strokeWidth="9" />
            {/* Vertical arrows for jaw drop */}
            <path d="M 120 142 L 120 154 M 116 150 L 120 154 L 124 150" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {shape === 'tongue-between-teeth' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Inner mouth */}
            <ellipse cx="120" cy="92" rx="42" ry="16" fill="#881337" />
            {/* Upper and lower teeth */}
            <rect x="88" y="80" width="64" height="7" rx="1" fill="#FFFFFF" />
            <rect x="88" y="98" width="64" height="6" rx="1" fill="#FFFFFF" />
            {/* Tongue stick out between teeth */}
            <path d="M 102 85 Q 120 85 138 85 L 138 102 Q 120 114 102 102 Z" fill="#F43F5E" stroke="#BE185D" strokeWidth="1.5" />
            {/* Outer lips */}
            <path d="M 72 92 Q 120 74 168 92 Q 120 116 72 92 Z" fill="none" stroke="#FB7185" strokeWidth="7" strokeLinecap="round" />
          </g>
        )}

        {shape === 'lips-closed-stop' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Tightly pressed lips */}
            <line x1="75" y1="92" x2="165" y2="92" stroke="#BE185D" strokeWidth="4" strokeLinecap="round" />
            <path d="M 75 92 Q 120 78 165 92" stroke="#F43F5E" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 75 92 Q 120 106 165 92" stroke="#F43F5E" strokeWidth="8" strokeLinecap="round" fill="none" />
            {/* Lock badge indicating closed stop */}
            <rect x="110" y="82" width="20" height="18" rx="4" fill="#F59E0B" />
            <circle cx="120" cy="90" r="2.5" fill="#FFFFFF" />
          </g>
        )}

        {shape !== 'wide-smile' &&
          shape !== 'relaxed-neutral' &&
          shape !== 'round-tight' &&
          shape !== 'open-wide' &&
          shape !== 'tongue-between-teeth' &&
          shape !== 'lips-closed-stop' && (
            <g className={isPlaying ? 'animate-pulse' : ''}>
              <ellipse cx="120" cy="92" rx="38" ry="18" fill="#881337" />
              <rect x="94" y="80" width="52" height="7" rx="2" fill="#FFFFFF" />
              <ellipse cx="120" cy="98" rx="30" ry="8" fill="#FB7185" />
              <path d="M 76 92 Q 120 70 164 92 Q 120 118 76 92 Z" fill="none" stroke="#F43F5E" strokeWidth="8" strokeLinecap="round" />
            </g>
          )}
      </svg>
    );
  };

  // Render Side Cutaway view (Oral Cavity & Vocal Cords)
  const renderSideCutaway = () => {
    const isStop = phoneme.mouthGuide.isStopSound;
    const isVoiced = phoneme.mouthGuide.isVoiced;

    return (
      <svg viewBox="0 0 240 180" className="w-full h-52 sm:h-60 mx-auto drop-shadow-md">
        {/* Oral cavity contour */}
        <path
          d="M 50 160 L 50 130 C 50 90 70 40 120 40 C 170 40 190 70 190 100 L 175 100 C 175 80 160 55 120 55 C 80 55 65 90 65 130 L 65 160 Z"
          fill="#FED7AA"
          stroke="#EA580C"
          strokeWidth="2"
        />

        {/* Hard Palate (Vòm miệng cứng) & Teeth */}
        <path d="M 120 55 Q 160 55 175 75" fill="none" stroke="#F97316" strokeWidth="4" />
        <rect x="172" y="75" width="8" height="12" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        <text x="110" y="48" fontSize="10" fill="#9A3412" fontWeight="bold">Vòm miệng</text>

        {/* Tongue shape depending on phoneme */}
        {phoneme.symbol.includes('iː') || phoneme.id.includes('long_i') ? (
          // High front tongue
          <path
            d="M 65 140 Q 110 95 155 78 Q 165 85 168 95 Q 130 115 65 140 Z"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="2"
          />
        ) : phoneme.symbol.includes('ɪ') || phoneme.id.includes('short_i') ? (
          // Mid-high relaxed tongue
          <path
            d="M 65 140 Q 110 110 150 92 Q 160 100 165 105 Q 125 125 65 140 Z"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="2"
          />
        ) : isStop ? (
          // Tongue touching alveolar ridge and holding air
          <path
            d="M 65 140 Q 110 100 170 76 L 170 88 Q 125 115 65 140 Z"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="2.5"
          />
        ) : (
          // Neutral tongue
          <path
            d="M 65 140 Q 110 120 150 110 Q 155 120 155 125 Q 120 135 65 140 Z"
            fill="#FB7185"
            stroke="#E11D48"
            strokeWidth="2"
          />
        )}

        {/* Lower lip & teeth */}
        <rect x="172" y="102" width="7" height="10" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />

        {/* Vocal Cords (Thanh quản) in the throat */}
        <g transform="translate(48, 140)">
          <ellipse cx="8" cy="8" rx="8" ry="12" fill={isVoiced ? '#EF4444' : '#94A3B8'} />
          {isVoiced && (
            <path
              d="M -4 4 Q 0 8 -4 12 M 20 4 Q 16 8 20 12"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              className="animate-ping"
            />
          )}
          <text x="-4" y="28" fontSize="9" fill={isVoiced ? '#B91C1C' : '#64748B'} fontWeight="bold">
            {isVoiced ? 'RUNG ĐỘNG ⚡' : 'KHÔNG RUNG 🍃'}
          </text>
        </g>

        {/* Airflow arrows or Stop Barrier */}
        {isStop ? (
          <g>
            {/* Air flow trapped */}
            <path d="M 60 130 Q 100 85 145 76" stroke="#EF4444" strokeWidth="3" strokeDasharray="4 2" fill="none" />
            {/* Big Stop Hand / Barrier */}
            <circle cx="168" cy="74" r="10" fill="#EF4444" />
            <text x="164" y="78" fontSize="12" fill="#FFFFFF" fontWeight="bold">✕</text>
            <rect x="145" y="12" width="85" height="22" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
            <text x="150" y="27" fontSize="10" fill="#991B1B" fontWeight="bold">CHẶN HƠI LẠI 🛑</text>
          </g>
        ) : (
          <g>
            {/* Continuous airflow line */}
            <path
              d="M 60 130 Q 100 80 185 85"
              stroke="#0284C7"
              strokeWidth="3"
              strokeDasharray="5 3"
              fill="none"
              className={isPlaying ? 'animate-pulse' : ''}
            />
            <polygon points="190,85 182,80 182,90" fill="#0284C7" />
            <text x="140" y="28" fontSize="10" fill="#0369A1" fontWeight="bold">HƠI THOÁT RA 💨</text>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg border-2 border-pink-100 flex flex-col gap-4">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-black text-pink-600 bg-pink-100 px-3 py-1 rounded-2xl border border-pink-300">
            {phoneme.symbol}
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-800">{phoneme.displayName}</h3>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Chuẩn phát âm American English (US)
            </span>
          </div>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('front')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'front'
                ? 'bg-white text-pink-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Mặt trước (Môi)
          </button>
          <button
            onClick={() => setViewMode('side')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'side'
                ? 'bg-white text-pink-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Mặt cắt (Lưỡi & Hơi)
          </button>
        </div>
      </div>

      {/* Main visual display */}
      <div className="relative bg-linear-to-b from-pink-50/60 to-purple-50/60 rounded-2xl p-4 flex flex-col items-center border border-pink-100">
        {viewMode === 'front' ? renderFrontLips() : renderSideCutaway()}

        {/* Play audio controls */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handleSpeak(phoneme.examples[0]?.word || phoneme.symbol)}
            className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-2xl shadow-md shadow-pink-200 transition-transform active:scale-95 text-sm"
          >
            <Volume2 className="w-4 h-4" />
            Nghe phát âm chuẩn US
          </button>

          <button
            onClick={() => setIsSlowMo(!isSlowMo)}
            className={`px-3 py-2 text-xs font-bold rounded-2xl border transition-colors ${
              isSlowMo
                ? 'bg-amber-100 text-amber-800 border-amber-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🐢 {isSlowMo ? 'Tốc độ: Chậm 0.6x' : 'Tốc độ: Chuẩn 1x'}
          </button>
        </div>
      </div>

      {/* Mouth & Anatomy details breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
          <span className="font-bold text-rose-700 block mb-1">👄 Khẩu hình Môi:</span>
          <p className="text-slate-700">{phoneme.mouthGuide.lipsTextVi}</p>
        </div>
        <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
          <span className="font-bold text-amber-800 block mb-1">👅 Vị trí Lưỡi:</span>
          <p className="text-slate-700">{phoneme.mouthGuide.tonguePositionVi}</p>
        </div>
        <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200">
          <span className="font-bold text-sky-800 flex items-center gap-1 mb-1">
            <Wind className="w-3.5 h-3.5" /> Luồng hơi:
          </span>
          <p className="text-slate-700">{phoneme.mouthGuide.airFlowVi}</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-2xl border border-purple-200">
          <span className="font-bold text-purple-800 block mb-1">⚡ Dây thanh quản:</span>
          <p className="text-slate-700">
            {phoneme.mouthGuide.isVoiced
              ? 'Hữu thanh (Cổ họng rung êm khi sờ vào)'
              : 'Vô thanh (Chỉ có luồng gió thoát ra, cổ họng không rung)'}
          </p>
        </div>
      </div>

      {/* Vietnamese Common Mistake alert */}
      <div className="p-3.5 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400 text-xs sm:text-sm text-yellow-900">
        <span className="font-bold block mb-0.5">⚠️ Chú ý cho bé lớp 3 (Tránh nhầm lẫn):</span>
        {phoneme.vietnameseCommonMistake}
      </div>

      {/* Step by Step imitation guide */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-slate-800 text-xs uppercase tracking-wider">
            Các bước luyện tập cùng bạn nhỏ
          </span>
          <span className="text-xs text-pink-600 font-bold">
            Bước {activeStep + 1} / {phoneme.mouthGuide.stepByStep.length}
          </span>
        </div>
        <div className="flex gap-1.5 mb-3">
          {phoneme.mouthGuide.stepByStep.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-2 flex-1 rounded-full transition-all ${
                activeStep === idx ? 'bg-pink-500' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>
        <p className="text-sm font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
          {phoneme.mouthGuide.stepByStep[activeStep]}
        </p>
      </div>

      {/* Example Words carousel */}
      <div>
        <span className="font-bold text-slate-800 text-xs uppercase tracking-wider block mb-2">
          Từ vựng mẫu bé luyện đọc ngay:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {phoneme.examples.map((ex) => (
            <button
              key={ex.word}
              onClick={() => handleSpeak(ex.word)}
              className="p-2.5 bg-pink-50/70 hover:bg-pink-100 border border-pink-200 rounded-2xl flex items-center justify-between transition-transform active:scale-95 text-left group"
            >
              <div>
                <span className="text-base font-black text-slate-800 group-hover:text-pink-600 block">
                  {ex.word}
                </span>
                <span className="text-xs font-ipa text-pink-600 block">{ex.ipa}</span>
                <span className="text-[11px] text-slate-500 block truncate">{ex.meaningVi}</span>
              </div>
              <span className="text-2xl group-hover:scale-110 transition-transform">{ex.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
