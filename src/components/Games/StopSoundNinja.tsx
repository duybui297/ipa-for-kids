import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { triggerGameVictoryConfetti } from '../../utils/confetti';
import { STOP_SOUND_QUESTIONS } from '../../data/ipaData';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Volume2, Sparkles, Wind, Check, Flame } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface StopSoundNinjaProps {
  mascotId: MascotId;
  /** Id các từ bé đã luyện (lưu ở App để không bị reset khi chuyển tab). */
  practicedWordIds: string[];
  /** Ghi nhận bé đã luyện một từ; trả về true nếu là lần đầu (được thưởng sao). */
  onPracticeWord: (wordId: string) => boolean;
}

export const StopSoundNinja: React.FC<StopSoundNinjaProps> = ({
  mascotId,
  practicedWordIds,
  onPracticeWord,
}) => {
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [isHoldingBreath, setIsHoldingBreath] = useState(false);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = STOP_SOUND_QUESTIONS[activeQuestionIdx];

  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    };
  }, []);

  const handleTestStopSound = () => {
    if (isHoldingBreath) return; // tránh bấm liên tục khi hiệu ứng đang chạy
    const practicedQuestion = question;
    setIsHoldingBreath(true);
    soundService.playAirStop();
    soundService.speakUS(practicedQuestion.audioText, 0.85);

    holdTimerRef.current = setTimeout(() => {
      holdTimerRef.current = null;
      setIsHoldingBreath(false);
      const isFirstTime = onPracticeWord(practicedQuestion.id);
      if (!isFirstTime) return;

      const practicedCount = new Set([...practicedWordIds, practicedQuestion.id]).size;
      if (practicedCount === STOP_SOUND_QUESTIONS.length) {
        triggerGameVictoryConfetti();
      } else {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#ef4444', '#f97316', '#fbbf24', '#ffffff'],
          shapes: ['circle', 'star'],
        });
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-red-200 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🥷</span>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Ninja Chặn Hơi (Unreleased Stops)</h2>
            <p className="text-xs text-slate-500">Bí kíp phát âm âm cuối chuẩn xác của người Mỹ</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-red-50 text-red-700 px-3 py-1.5 rounded-2xl border border-red-300 text-xs font-bold">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          Bí Kíp Đỉnh Cao
        </div>
      </div>

      {/* Secret Scroll Explanation Box */}
      <div className="bg-linear-to-r from-orange-50 via-red-50 to-pink-50 p-4 sm:p-5 rounded-3xl border border-red-200 flex flex-col sm:flex-row items-center gap-4">
        <MascotAvatar mascotId={mascotId} size="md" mood="speaking" />
        <div className="text-xs sm:text-sm text-slate-700 flex-1">
          <span className="font-black text-red-700 text-sm block mb-1 flex items-center gap-1.5">
            📜 Bí Mật Của Ninja Âm Thanh:
          </span>
          <p className="leading-relaxed">
            Trong tiếng Anh Mỹ, khi các âm <strong>/t/, /p/, /k/</strong> đứng ở cuối từ hoặc trước một phụ âm khác, người Mỹ không thổi bật tiếng nổ to (như "két-tờ" hay "búp-bờ"), mà họ dùng đầu lưỡi hoặc môi <strong>CHẶN ĐỨNG LUỒNG HƠI LẠI</strong>! Âm thanh ngắt đột ngột đầy tự nhiên.
          </p>
        </div>
      </div>

      {/* Interactive Air Gauge & Stop Simulator */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
        {/* Air flow particle simulation line */}
        <div className="w-full flex items-center justify-between mb-4 px-4">
          <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
            <Wind className="w-4 h-4" /> Luồng không khí từ phổi
          </span>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            isHoldingBreath ? 'bg-red-500 text-white animate-pulse' : 'bg-emerald-500/20 text-emerald-300'
          }`}>
            {isHoldingBreath ? '🛑 ĐÃ CHẶN HƠI (HOLD)' : 'HƠI THÔNG THUẬN'}
          </span>
        </div>

        {/* Word Display with Visual Stop Symbol */}
        <div className="flex items-center gap-4 my-2">
          <span className="text-4xl sm:text-6xl font-black tracking-wider text-amber-300">
            {question.word}
          </span>
          <span className="text-2xl font-ipa text-cyan-300 bg-slate-800 px-3 py-1.5 rounded-2xl border border-cyan-800">
            {question.ipa}
          </span>
          <span className="text-4xl">{question.emoji}</span>
        </div>

        {/* Breath bar */}
        <div className="w-full max-w-md bg-slate-800 h-4 rounded-full mt-3 overflow-hidden border border-slate-700 p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isHoldingBreath
                ? 'w-full bg-linear-to-r from-red-500 via-orange-500 to-yellow-400'
                : 'w-1/3 bg-cyan-500'
            }`}
          />
        </div>

        <p className="text-slate-300 text-xs mt-3 text-center max-w-md">
          {question.instructionVi}
        </p>

        {/* Try it button */}
        <button
          onClick={handleTestStopSound}
          disabled={isHoldingBreath}
          className="mt-5 px-7 py-3.5 bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-black rounded-2xl shadow-lg shadow-red-500/30 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
        >
          <Volume2 className="w-5 h-5 animate-bounce" />
          Bé thử bấm nghe âm chặn hơi US
        </button>
      </div>

      {/* Rules & Questions Switcher */}
      <div>
        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-3">
          Chọn các từ luyện bí kíp chặn hơi:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STOP_SOUND_QUESTIONS.map((q, idx) => {
            const isCompleted = practicedWordIds.includes(q.id);
            const isActive = activeQuestionIdx === idx;

            return (
              <button
                key={q.id}
                onClick={() => {
                  setActiveQuestionIdx(idx);
                  soundService.speakUS(q.audioText, 0.85);
                }}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-red-50 border-red-500 ring-2 ring-red-200'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">{q.emoji}</span>
                  {isCompleted && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
                </div>
                <span className="font-black text-base text-slate-800">{q.word}</span>
                <span className="text-xs font-ipa text-red-600">{q.ipa}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ninja Mastery Card */}
      <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-0.5">Lời khuyên của Ninja:</span>
          {question.ruleExplanationVi}
        </div>
      </div>
    </div>
  );
};
