import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, Pause, RotateCcw, Volume2, Sparkles, CheckCircle, Search, Gauge } from 'lucide-react';
import { soundService } from '../../services/speechService';

interface VideoLesson {
  id: string;
  title: string;
  teacher: string;
  badge: string;
  category: 'i_vowels' | 'stop_sounds' | 'final_sounds' | 'cambridge';
  desc: string;
  targetPhoneme: string;
  targetWord: string;
  wordIpa: string;
  sourceUrl: string;
  sourceName: string;
  mouthStages: {
    stageName: string;
    description: string;
    lipShape: 'smile' | 'relaxed' | 'stop' | 'pucker';
    tongueHeight: 'high' | 'mid' | 'low';
    isHoldingBreath?: boolean;
  }[];
  keyTips: string[];
  practiceWords: { word: string; ipa: string; meaningVi: string }[];
}

// Dữ liệu tĩnh đặt ngoài component: tham chiếu ổn định giữa các lần render
const VIDEO_LESSONS: VideoLesson[] = [
  {
    id: 'lesson_i_vowels',
    title: 'Khẩu Hình Cận Cảnh: Âm i Dài /iː/ vs i Ngắn /ɪ/',
    teacher: 'Parroto Phonics & Cambridge US',
    badge: 'Cặp âm số 1 cho bé',
    category: 'i_vowels',
    targetPhoneme: '/iː/ & /ɪ/',
    targetWord: 'sheep vs ship',
    wordIpa: '/ʃiːp/ vs /ʃɪp/',
    sourceUrl: 'https://parroto.app/topics',
    sourceName: 'Parroto Topics',
    desc: 'Quay chậm cận cảnh chuyển động của 2 khóe miệng: /iː/ kéo căng dẹp môi tối đa ("Say cheese"), còn /ɪ/ thả lỏng hoàn toàn cơ mặt và dứt khoát.',
    mouthStages: [
      {
        stageName: 'Bước 1: Chuẩn bị',
        description: 'Thả lỏng hai môi, mắt nhìn thẳng vào gương',
        lipShape: 'relaxed',
        tongueHeight: 'mid',
      },
      {
        stageName: 'Bước 2: Phát âm /iː/ (Cười tươi)',
        description: 'Kéo căng 2 mép sang mang tai, nâng thân lưỡi lên cao, ngân dài "eeeeee" trong 1.5 giây',
        lipShape: 'smile',
        tongueHeight: 'high',
      },
      {
        stageName: 'Bước 3: Chuyển sang /ɪ/ (Thả lỏng)',
        description: 'Hạ nhẹ hàm, cơ mặt thả lỏng hoàn toàn, bật âm "ih" cụt lẹ trong 0.4 giây',
        lipShape: 'relaxed',
        tongueHeight: 'mid',
      },
    ],
    keyTips: [
      'Môi: Kéo căng sang 2 bên như đang cười thật tươi khi đọc /iː/',
      'Thời gian: Âm /iː/ ngân dài gấp đôi âm /ɪ/',
      'Cơ mặt: Thả lỏng toàn bộ cơ má và hàm khi phát âm /ɪ/',
    ],
    practiceWords: [
      { word: 'sheep', ipa: '/ʃiːp/', meaningVi: 'Con cừu lông xù' },
      { word: 'ship', ipa: '/ʃɪp/', meaningVi: 'Tàu thủy vượt sóng' },
      { word: 'seat', ipa: '/siːt/', meaningVi: 'Ghế ngồi' },
      { word: 'sit', ipa: '/sɪt/', meaningVi: 'Ngồi xuống' },
      { word: 'eat', ipa: '/iːt/', meaningVi: 'Ăn đồ ăn' },
      { word: 'it', ipa: '/ɪt/', meaningVi: 'Nó / Đồ vật' },
    ],
  },
  {
    id: 'lesson_stop_t',
    title: 'Bí Kíp Ninja: Âm Chặn Hơi [t̚], [p̚], [k̚] Chuẩn Mỹ',
    teacher: 'Cambridge Accent & US Phonics',
    badge: 'Bí kíp nói tự nhiên',
    category: 'stop_sounds',
    targetPhoneme: '[t̚] & [p̚]',
    targetWord: 'cat & stop',
    wordIpa: '/kæt̚/ & /stɑːp̚/',
    sourceUrl: 'https://dictionary.cambridge.org/dictionary/english/teacher',
    sourceName: 'Cambridge Dictionary',
    desc: 'Quay chậm cận cảnh động tác đưa đầu lưỡi chặn đứng nướu trên khi nói "cat", "hot dog", "football" mà không bật tiếng "tờ" to.',
    mouthStages: [
      {
        stageName: 'Bước 1: Phát âm nguyên âm đầu',
        description: 'Mở miệng phát âm "ca-" tự nhiên',
        lipShape: 'relaxed',
        tongueHeight: 'low',
      },
      {
        stageName: 'Bước 2: Đưa đầu lưỡi lên nướu răng',
        description: 'Đầu lưỡi dán chặt lên nướu răng cửa trên (Alveolar Ridge)',
        lipShape: 'relaxed',
        tongueHeight: 'high',
        isHoldingBreath: true,
      },
      {
        stageName: 'Bước 3: Chặn đứng luồng hơi (Hold)',
        description: 'Khóa chặt luồng khí lại ngay trong miệng. Âm thanh ngắt đột ngột!',
        lipShape: 'stop',
        tongueHeight: 'high',
        isHoldingBreath: true,
      },
    ],
    keyTips: [
      'Đưa đầu lưỡi dán chặt lên nướu răng cửa trên (Alveolar ridge)',
      'Khóa luồng khí lại ngay trong miệng (Hold the breath)',
      'Không nhả hơi ra ngoài, ngắt âm thanh dứt khoát',
    ],
    practiceWords: [
      { word: 'cat', ipa: '/kæt̚/', meaningVi: 'Con mèo' },
      { word: 'hot dog', ipa: '/ˈhɑːt̚ dɔːɡ/', meaningVi: 'Bánh mì kẹp xúc xích' },
      { word: 'stop', ipa: '/stɑːp̚/', meaningVi: 'Dừng lại ngay' },
      { word: 'football', ipa: '/ˈfʊt̚bɔːl/', meaningVi: 'Bóng đá' },
    ],
  },
  {
    id: 'lesson_final_sounds',
    title: 'Đừng Nuốt Âm Cuối: /t/, /d/, /k/, /s/, /z/, /ʃ/',
    teacher: 'Oxford & Cambridge English',
    badge: 'Sửa lỗi nuốt âm',
    category: 'final_sounds',
    targetPhoneme: '/s/, /z/, /ʃ/, /d/',
    targetWord: 'fish, bed, bus',
    wordIpa: '/fɪʃ/, /bed/, /bʌs/',
    sourceUrl: 'https://parroto.app/topics',
    sourceName: 'Parroto Topics',
    desc: 'Bài giảng khắc phục thói quen nuốt âm cuối của học sinh Việt Nam. Hướng dẫn bật âm xì /s/, rung /z/, suỵt /ʃ/ và nổ nhẹ /d/.',
    mouthStages: [
      {
        stageName: 'Bước 1: Chu môi phía trước (/ʃ/)',
        description: 'Chu tròn môi như đang thổi sáo, đẩy luồng gió êm "shhhh"',
        lipShape: 'pucker',
        tongueHeight: 'high',
      },
      {
        stageName: 'Bước 2: Khép 2 hàm răng (/s/ & /z/)',
        description: 'Răng khép gần nhau, thổi gió xì xì mát lạnh (/s/) hoặc rung cổ họng (/z/)',
        lipShape: 'smile',
        tongueHeight: 'mid',
      },
    ],
    keyTips: [
      'Âm cuối giúp người nghe phân biệt chính xác nghĩa của từ',
      'Với âm /s/: Thổi gió xì xì mát lạnh qua kẽ răng',
      'Với âm /d/: Cho cổ họng rung nhẹ ở cuối từ',
    ],
    practiceWords: [
      { word: 'bed', ipa: '/bed/', meaningVi: 'Chiếc giường êm' },
      { word: 'fish', ipa: '/fɪʃ/', meaningVi: 'Chú cá bơi' },
      { word: 'bus', ipa: '/bʌs/', meaningVi: 'Xe buýt trường' },
      { word: 'teeth', ipa: '/tiːθ/', meaningVi: 'Hàm răng trắng' },
    ],
  },
  {
    id: 'lesson_cambridge_teacher',
    title: 'Tra Cứu Từ Điển Cambridge: Phân Tích Từ "Teacher"',
    teacher: 'Cambridge Dictionary Official',
    badge: 'Từ điển Quốc Tế',
    category: 'cambridge',
    targetPhoneme: '/ˈtiː.tʃɚ/',
    targetWord: 'teacher',
    wordIpa: '/ˈtiː.tʃɚ/',
    sourceUrl: 'https://dictionary.cambridge.org/dictionary/english/teacher',
    sourceName: 'Cambridge Dictionary: teacher',
    desc: 'Hướng dẫn chuẩn Cambridge cho từ "teacher": âm đầu /t/, âm giữa /iː/ cười dẹt ngân dài, âm cuối /tʃɚ/ bật hơi chu môi.',
    mouthStages: [
      {
        stageName: 'Âm tiết 1: "tea-" (/tiː/)',
        description: 'Bật nhẹ /t/ rồi kéo căng mép cười tươi phát âm /iː/',
        lipShape: 'smile',
        tongueHeight: 'high',
      },
      {
        stageName: 'Âm tiết 2: "-cher" (/tʃɚ/)',
        description: 'Chu môi bật âm /tʃ/ và cuộn nhẹ đầu lưỡi cho âm /ɚ/ giọng Mỹ',
        lipShape: 'pucker',
        tongueHeight: 'mid',
      },
    ],
    keyTips: [
      'Trọng âm rơi vào âm tiết đầu tiên /ˈtiː/',
      'Nhớ kéo dài âm /iː/ để từ nghe vang và chuẩn',
      'Âm cuối /tʃɚ/ cuộn lưỡi nhẹ theo đặc trưng giọng Mỹ (rhotic accent)',
    ],
    practiceWords: [
      { word: 'teacher', ipa: '/ˈtiː.tʃɚ/', meaningVi: 'Thầy cô giáo' },
      { word: 'student', ipa: '/ˈstuː.dənt/', meaningVi: 'Học sinh' },
      { word: 'doctor', ipa: '/ˈdɑːk.tɚ/', meaningVi: 'Bác sĩ' },
      { word: 'water', ipa: '/ˈwɑː.t̬ɚ/', meaningVi: 'Nước uống' },
    ],
  },
];

export const VideoReferenceRoom: React.FC = () => {
  const videoLessons = VIDEO_LESSONS;

  const [activeLessonId, setActiveLessonId] = useState<string>(videoLessons[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [cambridgeWord, setCambridgeWord] = useState<string>('teacher');

  const currentLesson = videoLessons.find((l) => l.id === activeLessonId) || videoLessons[0];
  const activeStage = currentLesson.mouthStages[currentStageIdx] || currentLesson.mouthStages[0];

  // Đọc từ mẫu một lần mỗi khi bắt đầu phát
  useEffect(() => {
    if (!isPlaying) return;
    const speechRate = playbackSpeed === 0.5 ? 0.55 : playbackSpeed === 0.75 ? 0.75 : 0.95;
    soundService.speakUS(currentLesson.targetWord.split(' ')[0], speechRate);
  }, [isPlaying, currentLesson]);

  // Chạy lần lượt từng bước khẩu hình, dừng ở bước cuối
  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = Math.round(1800 / playbackSpeed);
    const timer = setTimeout(() => {
      if (currentStageIdx >= currentLesson.mouthStages.length - 1) {
        setIsPlaying(false);
        setCurrentStageIdx(0);
      } else {
        setCurrentStageIdx(currentStageIdx + 1);
      }
    }, intervalMs);
    return () => clearTimeout(timer);
  }, [isPlaying, playbackSpeed, currentLesson, currentStageIdx]);

  const handleTogglePlay = () => {
    if (!isPlaying) {
      setCurrentStageIdx(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handleSelectLesson = (id: string) => {
    setActiveLessonId(id);
    setCurrentStageIdx(0);
    setIsPlaying(false);
    soundService.playPop();
  };

  const handleCambridgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cambridgeWord.trim()) {
      soundService.speakUS(cambridgeWord.trim(), 0.9);
    }
  };

  // Render animated Mouth Visuals based on stage lipShape
  const renderStageMouth = () => {
    const shape = activeStage.lipShape;
    const isHolding = activeStage.isHoldingBreath;

    return (
      <svg viewBox="0 0 260 200" className="w-full h-56 sm:h-64 mx-auto drop-shadow-lg">
        {/* Face contour */}
        <ellipse cx="130" cy="100" rx="100" ry="80" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="3" />
        {/* Rosy cheeks */}
        <circle cx="58" cy="105" r="15" fill="#FDA4AF" opacity="0.6" />
        <circle cx="202" cy="105" r="15" fill="#FDA4AF" opacity="0.6" />
        {/* Nose */}
        <path d="M 125 55 Q 130 65 135 55" stroke="#FB7185" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {shape === 'smile' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Wide smile opening for /iː/ */}
            <path d="M 65 100 Q 130 75 195 100 Q 130 135 65 100 Z" fill="#881337" />
            {/* Upper teeth */}
            <rect x="80" y="88" width="100" height="10" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="85" y="103" width="90" height="8" rx="2" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            {/* High tongue */}
            <path d="M 90 106 Q 130 96 170 106 Q 130 120 90 106 Z" fill="#FB7185" />
            {/* Outer Lips stretched wide */}
            <path d="M 52 100 Q 130 65 208 100 Q 130 150 52 100 Z" fill="none" stroke="#F43F5E" strokeWidth="10" strokeLinecap="round" />
            {/* Smile stretch arrows */}
            <path d="M 40 100 L 26 100 M 30 95 L 25 100 L 30 105" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 220 100 L 234 100 M 230 95 L 235 100 L 230 105" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
            <text x="130" y="175" textAnchor="middle" fontSize="12" fill="#BE185D" fontWeight="bold">
              KÉO CĂNG MÉP SANG 2 BÊN (CƯỜI TƯƠI)
            </text>
          </g>
        )}

        {shape === 'relaxed' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Relaxed neutral opening for /ɪ/ */}
            <ellipse cx="130" cy="102" rx="42" ry="16" fill="#881337" />
            <rect x="100" y="92" width="60" height="8" rx="2" fill="#FFFFFF" />
            <ellipse cx="130" cy="106" rx="32" ry="8" fill="#FB7185" />
            <path d="M 85 102 Q 130 84 175 102 Q 130 126 85 102 Z" fill="none" stroke="#F43F5E" strokeWidth="9" strokeLinecap="round" />
            <text x="130" y="175" textAnchor="middle" fontSize="12" fill="#0369A1" fontWeight="bold">
              MÔI & CƠ MẶT THẢ LỎNG TỰ NHIÊN
            </text>
          </g>
        )}

        {shape === 'stop' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Stop consonant closed lips or blocked airflow */}
            <line x1="80" y1="102" x2="180" y2="102" stroke="#BE185D" strokeWidth="5" strokeLinecap="round" />
            <path d="M 80 102 Q 130 88 180 102" stroke="#F43F5E" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 80 102 Q 130 116 180 102" stroke="#F43F5E" strokeWidth="9" strokeLinecap="round" fill="none" />
            {/* Big Stop Badge */}
            <rect x="115" y="68" width="30" height="24" rx="6" fill="#EF4444" />
            <text x="130" y="85" textAnchor="middle" fontSize="14" fill="#FFFFFF" fontWeight="black">✕</text>
            <text x="130" y="175" textAnchor="middle" fontSize="12" fill="#B91C1C" fontWeight="bold">
              🛑 CHẶN HƠI LẠI - KHÔNG BẬT KHÍ
            </text>
          </g>
        )}

        {shape === 'pucker' && (
          <g className={isPlaying ? 'animate-pulse' : ''}>
            {/* Round tight puckered lips for /ʃ/, /tʃ/, /uː/ */}
            <circle cx="130" cy="102" r="20" fill="#881337" />
            <circle cx="130" cy="102" r="10" fill="#FB7185" />
            <circle cx="130" cy="102" r="28" fill="none" stroke="#F43F5E" strokeWidth="9" />
            <path d="M 92 102 L 80 102" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
            <path d="M 168 102 L 180 102" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
            <text x="130" y="175" textAnchor="middle" fontSize="12" fill="#7C3AED" fontWeight="bold">
              CHU TRÒN MÔI VỀ PHÍA TRƯỚC
            </text>
          </g>
        )}

        {isHolding && (
          <g>
            <rect x="75" y="15" width="110" height="22" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
            <text x="130" y="30" textAnchor="middle" fontSize="11" fill="#991B1B" fontWeight="bold">
              🛑 GIỮ HƠI Ở VÒM HỌNG
            </text>
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border-2 border-indigo-200 flex flex-col gap-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl p-2.5 bg-indigo-100 rounded-2xl">🎬</span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Phòng Video Khẩu Hình & Từ Điển Cambridge
            </h2>
            <p className="text-xs text-slate-500">
              Mô phỏng video quay chậm cận cảnh chuyển động môi - lưỡi và tra cứu từ điển quốc tế
            </p>
          </div>
        </div>

        {/* Real External Reference Links */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://dictionary.cambridge.org/dictionary/english/teacher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-2xl border border-indigo-300 text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            Từ điển Cambridge (teacher) <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://parroto.app/topics"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold rounded-2xl border border-pink-300 text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            Parroto Phonics Topics <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Select Video Lesson Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
        {videoLessons.map((lesson) => {
          const isSelected = activeLessonId === lesson.id;
          return (
            <button
              key={lesson.id}
              onClick={() => handleSelectLesson(lesson.id)}
              className={`p-3.5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-3 ring-indigo-200'
                  : 'bg-slate-50 hover:bg-indigo-50/50 border-slate-200 hover:border-indigo-300 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-indigo-100' : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  {lesson.badge}
                </span>
                <span
                  className={`text-[11px] font-ipa font-bold ${
                    isSelected ? 'text-indigo-200' : 'text-slate-500'
                  }`}
                >
                  {lesson.targetPhoneme}
                </span>
              </div>
              <span className="font-bold text-xs sm:text-sm line-clamp-2 leading-snug">
                {lesson.title}
              </span>
              <span
                className={`text-[11px] mt-1.5 truncate ${
                  isSelected ? 'text-indigo-200' : 'text-slate-500'
                }`}
              >
                {lesson.teacher}
              </span>
            </button>
          );
        })}
      </div>

      {/* Native Interactive Animated Video Player */}
      <div className="bg-slate-950 rounded-3xl p-4 sm:p-6 border-2 border-slate-800 shadow-2xl flex flex-col gap-4 text-white">
        {/* Video Player Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h3 className="text-sm sm:text-base font-bold text-indigo-200">
              {currentLesson.title}
            </h3>
            <span className="text-xs text-slate-400">({currentLesson.teacher})</span>
          </div>

          <a
            href={currentLesson.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-xl transition-colors text-xs"
          >
            Mở bài giảng gốc ({currentLesson.sourceName}) <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Video Screen Surface */}
        <div className="relative w-full rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden p-6 flex flex-col items-center justify-center min-h-[320px]">
          {/* Animated Mouth SVG Screen */}
          <div className="w-full max-w-md">{renderStageMouth()}</div>

          {/* Current Stage Indicator Tag */}
          <div className="mt-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-center">
            <span className="text-xs font-bold text-amber-300 block">
              {activeStage.stageName}
            </span>
            <span className="text-xs text-slate-200">{activeStage.description}</span>
          </div>

          {/* Live Soundwave when playing */}
          {isPlaying && (
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10 text-xs text-emerald-400 font-mono">
              <span className="w-1.5 h-3 bg-emerald-400 animate-bounce" />
              <span className="w-1.5 h-5 bg-emerald-400 animate-bounce delay-75" />
              <span className="w-1.5 h-4 bg-emerald-400 animate-bounce delay-150" />
              <span className="ml-1 text-[11px] font-bold">Âm thanh chuẩn US</span>
            </div>
          )}
        </div>

        {/* Video Player Control Bar */}
        <div className="bg-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Play/Pause Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-black rounded-2xl shadow-lg shadow-red-500/30 transition-transform active:scale-95 text-sm cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" /> Tạm dừng
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white ml-0.5" /> Bấm Xem Video Khẩu Hình
                </>
              )}
            </button>

            <button
              onClick={() => {
                setCurrentStageIdx(0);
                setIsPlaying(true);
              }}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition-colors cursor-pointer"
              title="Xem lại từ đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => soundService.speakUS(currentLesson.targetWord.split(' ')[0], 0.85)}
              className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-300 font-bold rounded-2xl transition-colors text-xs cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              Nghe âm từ: <span className="text-white font-black">{currentLesson.targetWord}</span>
            </button>
          </div>

          {/* Speed Controls: 0.5x, 0.75x, 1x */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
            <span className="text-[10px] text-slate-400 px-2 font-bold flex items-center gap-1">
              <Gauge className="w-3 h-3" /> Tốc độ:
            </span>
            {[
              { val: 0.5, label: '0.5x (Chậm)' },
              { val: 0.75, label: '0.75x' },
              { val: 1.0, label: '1.0x (Chuẩn)' },
            ].map((spd) => (
              <button
                key={spd.val}
                onClick={() => setPlaybackSpeed(spd.val)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  playbackSpeed === spd.val
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {spd.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step stages navigation buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Các giai đoạn khẩu hình:</span>
          {currentLesson.mouthStages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentStageIdx(idx);
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentStageIdx === idx
                  ? 'bg-indigo-500 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {stage.stageName}
            </button>
          ))}
        </div>
      </div>

      {/* Two columns: Key Tips & Practice Words */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Key Tips Box */}
        <div className="bg-indigo-50/70 p-5 rounded-3xl border border-indigo-200 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h4 className="text-base font-bold text-indigo-950">
              Ghi Chú Trọng Tâm Dành Cho Bé Lớp 3
            </h4>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {currentLesson.keyTips.map((tip, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 bg-white/90 p-3 rounded-2xl border border-indigo-100 shadow-2xs"
              >
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Practice Words */}
        <div className="bg-pink-50/70 p-5 rounded-3xl border border-pink-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-pink-600" />
              <h4 className="text-base font-bold text-pink-950">
                Luyện Đọc Các Từ Mẫu Trong Video
              </h4>
            </div>
            <span className="text-xs text-pink-600 font-bold">Bấm loa để nghe</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {currentLesson.practiceWords.map((item) => (
              <button
                key={item.word}
                onClick={() => soundService.speakUS(item.word, 0.85)}
                className="p-3 bg-white hover:bg-pink-100/60 border border-pink-200 rounded-2xl flex items-center justify-between transition-transform active:scale-95 text-left cursor-pointer group shadow-2xs"
              >
                <div>
                  <span className="text-sm font-black text-slate-800 group-hover:text-pink-600 block">
                    {item.word}
                  </span>
                  <span className="text-xs font-ipa text-pink-600 block">{item.ipa}</span>
                  <span className="text-[11px] text-slate-500 block truncate">
                    {item.meaningVi}
                  </span>
                </div>
                <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-pink-600 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cambridge Dictionary Live Sound Lookup Widget */}
      <div className="bg-linear-to-r from-amber-50 via-orange-50 to-pink-50 p-5 rounded-3xl border-2 border-amber-200 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📖</span>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                Tra Cứu Nhanh Phát Âm Chuẩn Từ Điển Cambridge
              </h4>
              <p className="text-xs text-slate-500">
                Gõ từ vựng tiếng Anh bất kỳ để nghe phát âm giọng Mỹ (General American) và xem trực tiếp trên Cambridge
              </p>
            </div>
          </div>

          <a
            href={`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(
              cambridgeWord.trim().toLowerCase().replace(/\s+/g, '-') || 'teacher'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-orange-700 hover:text-orange-900 bg-white px-3 py-1.5 rounded-xl border border-orange-300 shadow-2xs flex items-center gap-1"
          >
            Mở trang từ điển Cambridge: "{cambridgeWord}" <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <form onSubmit={handleCambridgeSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={cambridgeWord}
              onChange={(e) => setCambridgeWord(e.target.value)}
              placeholder="Nhập từ tiếng Anh (ví dụ: teacher, student, banana, sheep)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-300 text-sm font-bold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-md transition-transform active:scale-95 text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Volume2 className="w-4 h-4" />
            Nghe đọc chuẩn US
          </button>
        </form>

        {/* Quick chip examples */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500">Từ mẫu hay gặp:</span>
          {['teacher', 'student', 'cat', 'sheep', 'ship', 'bed', 'fish', 'stop', 'hot dog', 'banana'].map(
            (w) => (
              <button
                key={w}
                type="button"
                onClick={() => {
                  setCambridgeWord(w);
                  soundService.speakUS(w, 0.9);
                }}
                className="px-2.5 py-1 bg-white hover:bg-orange-100 text-slate-700 hover:text-orange-900 text-xs font-bold rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                {w}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
