import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { MascotId } from '../../types/ipa';
import { MascotAvatar } from '../Mascot/MascotAvatar';
import { Mic, Square, Play, Volume2, Sparkles, Star, Award, RotateCcw } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface VoiceStudioProps {
  mascotId: MascotId;
  /** Ghi nhận một lượt thu âm; trả về số sao được thưởng (chỉ lượt đầu của mỗi từ). */
  onRecordCompleted: (word: string) => number;
}

// Danh sách cố định, đặt ngoài component để không tạo lại mỗi lần render
const PRACTICE_WORDS = [
  { word: 'sheep', ipa: '/ʃiːp/', sound: 'i dài (/iː/)', tip: 'Cười tươi, kéo dài!', emoji: '🐑' },
  { word: 'ship', ipa: '/ʃɪp/', sound: 'i ngắn (/ɪ/)', tip: 'Thả lỏng, đọc nhanh dứt khoát!', emoji: '🚢' },
  { word: 'cat', ipa: '/kæt̚/', sound: 'Âm chặn hơi [t̚]', tip: 'Đầu lưỡi dán chặt nướu trên!', emoji: '🐱' },
  { word: 'bed', ipa: '/bed/', sound: 'Âm cuối /d/', tip: 'Rung nhẹ thanh quản!', emoji: '🛏️' },
  { word: 'fish', ipa: '/fɪʃ/', sound: 'Âm chu môi /ʃ/', tip: 'Chu môi như bảo suỵt khẽ!', emoji: '🐟' },
  { word: 'cup', ipa: '/kʌp̚/', sound: 'Âm chặn môi [p̚]', tip: 'Mím chặt môi lại!', emoji: '🥤' },
  { word: 'teeth', ipa: '/tiːθ/', sound: 'Âm thè lưỡi /θ/', tip: 'Đặt đầu lưỡi giữa 2 răng!', emoji: '🦷' },
];

export const VoiceStudio: React.FC<VoiceStudioProps> = ({
  mascotId,
  onRecordCompleted,
}) => {
  const practiceWords = PRACTICE_WORDS;

  const [selectedWordIdx, setSelectedWordIdx] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlobUrl, setAudioBlobUrl] = useState<string | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [starsAwarded, setStarsAwarded] = useState(0);
  const [micError, setMicError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const currentWord = practiceWords[selectedWordIdx];

  const stopStream = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  // Thu hồi blob URL cũ để không rò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      if (audioBlobUrl) URL.revokeObjectURL(audioBlobUrl);
    };
  }, [audioBlobUrl]);

  // Rời trang khi đang thu: dừng recorder và tắt micro
  useEffect(() => {
    return () => {
      const recorder = mediaRecorderRef.current;
      if (recorder && recorder.state !== 'inactive') {
        recorder.onstop = null;
        recorder.stop();
      }
      stopStream();
    };
  }, []);

  const playUsModel = (slow: boolean = false) => {
    soundService.speakUS(currentWord.word, slow ? 0.6 : 0.95);
  };

  const startRecording = async () => {
    if (isRecording) return;
    setMicError(null);
    setAudioBlobUrl(null);
    setHasEvaluated(false);

    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setMicError('Trình duyệt này chưa hỗ trợ ghi âm. Bé hãy thử Chrome, Edge hoặc Safari mới nhé!');
      return;
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      console.error(err);
      setMicError('Không thể mở micro. Bé nhờ bố mẹ cấp quyền micro cho trình duyệt rồi thử lại nhé!');
      return;
    }

    streamRef.current = stream;
    const recordedWord = currentWord.word;
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      stopStream();
      // Dùng đúng định dạng trình duyệt ghi ra (Safari: audio/mp4, Chrome: audio/webm)
      const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || 'audio/webm' });
      if (audioBlob.size === 0) {
        setMicError('Chưa thu được âm thanh. Bé thử đọc to hơn một chút nhé!');
        return;
      }
      setAudioBlobUrl(URL.createObjectURL(audioBlob));
      setHasEvaluated(true);
      soundService.playChime();
      const awarded = onRecordCompleted(recordedWord);
      setStarsAwarded(awarded);
      if (awarded > 0) {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    };

    mediaRecorder.start();
    setIsRecording(true);
    soundService.playPop();
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playKidAudio = () => {
    if (!audioBlobUrl) return;
    const audio = new Audio(audioBlobUrl);
    audio.play().catch((err) => console.error(err));
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-rose-200 flex flex-col gap-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎙️</span>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Studio Thu Âm Bé Tập Đọc</h2>
            <p className="text-xs text-slate-500">Soi khẩu hình & so sánh giọng đọc của bé với người bản xứ</p>
          </div>
        </div>

        <div className="bg-rose-50 text-rose-700 px-3 py-1.5 rounded-2xl border border-rose-300 text-xs font-bold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          Tự Tin Bắn Tiếng Anh
        </div>
      </div>

      {/* Target Word Practice Card */}
      <div className="bg-linear-to-b from-rose-50/70 via-pink-50/50 to-purple-50/70 rounded-3xl p-6 flex flex-col items-center justify-center border border-rose-100 relative">
        <div className="flex items-center gap-4 mb-2">
          <MascotAvatar
            mascotId={mascotId}
            size="md"
            mood={isRecording ? 'speaking' : hasEvaluated ? 'cheering' : 'idle'}
          />
          <div className="text-6xl animate-bounce">{currentWord.emoji}</div>
        </div>

        <div className="my-2 text-center">
          <h3 className="text-4xl sm:text-5xl font-black text-slate-800">{currentWord.word}</h3>
          <span className="text-sm sm:text-base font-ipa font-bold text-rose-600 px-3 py-1 bg-white rounded-full border border-rose-200 inline-block mt-1">
            {currentWord.ipa}
          </span>
          <p className="text-xs text-slate-500 mt-1 font-semibold">{currentWord.sound}</p>
        </div>

        {/* Tip box */}
        <div className="bg-white/80 backdrop-blur-xs px-4 py-2 rounded-2xl border border-pink-200 text-xs text-pink-700 font-bold mb-4">
          💡 Mẹo khẩu hình: {currentWord.tip}
        </div>

        {/* Listening to Model audio */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => playUsModel(false)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 shadow-xs transition-transform active:scale-95 text-xs sm:text-sm cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-pink-600" />
            1. Nghe mẫu US
          </button>
          <button
            onClick={() => playUsModel(true)}
            className="px-3 py-2 bg-white text-slate-600 text-xs rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer"
          >
            🐢 Chậm
          </button>
        </div>

        {/* Recording Controls */}
        <div className="flex flex-col items-center gap-2">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-black rounded-3xl shadow-lg shadow-rose-300 transition-all hover:scale-105 active:scale-95 text-base sm:text-lg cursor-pointer"
            >
              <Mic className="w-6 h-6 animate-pulse" />
              2. Bấm để Thu Âm Giọng Bé
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-3xl shadow-lg shadow-red-300 animate-pulse transition-all text-base sm:text-lg cursor-pointer"
            >
              <Square className="w-6 h-6 fill-white" />
              Đang thu âm... Bấm xong!
            </button>
          )}

          {isRecording && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
              <span className="text-xs text-red-600 font-bold">Bé đọc to từ "{currentWord.word}" nào!</span>
            </div>
          )}
        </div>

        {micError && (
          <p className="text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 mt-2">
            {micError}
          </p>
        )}
      </div>

      {/* Voice Comparison Result Banner */}
      {hasEvaluated && (
        <div className="bg-emerald-50 rounded-3xl p-5 border-2 border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="text-xs font-bold text-emerald-800 ml-1">
                  {starsAwarded > 0 ? `+${starsAwarded} sao!` : 'Đã nhận sao cho từ này'}
                </span>
              </div>
              <p className="text-sm font-bold text-emerald-900">
                Tuyệt vời! Bé hãy nghe lại giọng mình và so với mẫu US nhé!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={playKidAudio}
              className="px-4 py-2.5 bg-white hover:bg-emerald-100 text-emerald-800 font-bold rounded-2xl border border-emerald-300 text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              Nghe lại giọng bé
            </button>
            <button
              onClick={startRecording}
              className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Thu lại
            </button>
          </div>
        </div>
      )}

      {/* Practice Word Picker */}
      <div>
        <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-2">
          Chọn các từ tiêu biểu để bé thu âm:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {practiceWords.map((item, idx) => {
            const isSelected = selectedWordIdx === idx;
            return (
              <button
                key={item.word}
                disabled={isRecording}
                onClick={() => {
                  setSelectedWordIdx(idx);
                  setHasEvaluated(false);
                  setAudioBlobUrl(null);
                  soundService.speakUS(item.word, 0.95);
                }}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                  isSelected
                    ? 'bg-rose-50 border-rose-500 ring-2 ring-rose-200'
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-black text-slate-800">{item.word}</span>
                <span className="text-[10px] font-ipa text-rose-600">{item.ipa}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
