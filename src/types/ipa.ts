export type MascotId = 'chiikawa' | 'doraemon' | 'minion' | 'omnom' | 'kpop_hunter';

export interface Mascot {
  id: MascotId;
  name: string;
  title: string;
  catchphrase: string;
  themeColor: string;
  badgeBg: string;
  avatarSvg: string;
  description: string;
}

export type SoundCategory = 
  | 'short_vs_long_vowel'  // i ngắn vs i dài
  | 'monophthong'          // nguyên âm đơn
  | 'diphthong'            // nguyên âm đôi
  | 'stop_consonants'      // âm chặn hơi (p, t, k, b, d, g)
  | 'final_consonants'     // âm cuối dễ quên
  | 'fricatives'           // âm xì, âm thổi (s, z, sh, th)
  | 'all';

export type LipShape = 
  | 'wide-smile'           // cười bè ngang (/iː/)
  | 'relaxed-neutral'      // hơi mở, thư giãn (/ɪ/)
  | 'round-tight'          // chu tròn chặt (/uː/)
  | 'round-relaxed'        // chu tròn vừa (/ʊ/)
  | 'open-wide'            // mở to hết cỡ (/ɑː/, /æ/)
  | 'jaw-drop'             // hạ cằm nhẹ (/e/, /ʌ/)
  | 'teeth-on-lip'         // răng trên chạm môi dưới (/f/, /v/)
  | 'tongue-between-teeth' // lưỡi đặt giữa 2 hàm răng (/θ/, /ð/)
  | 'lips-closed-stop';    // mím chặt môi chặn hơi (/p/, /b/, /m/)

export interface ExampleWord {
  word: string;
  ipa: string;
  meaningVi: string;
  emoji: string;
  audioPrompt?: string;
  highlightPart?: string;
  isStopSound?: boolean;
}

export type VowelLengthTag = 'long' | 'short' | 'neutral' | 'diphthong';
export type IpaChartGroup = 'monophthong' | 'diphthong' | 'consonant';

export interface Phoneme {
  id: string;
  symbol: string;
  displayName: string;
  type: 'vowel' | 'consonant';
  category: SoundCategory;
  chartGroup: IpaChartGroup;
  vowelLength?: VowelLengthTag;
  chartExample: {
    word: string;
    meaningVi: string;
    emoji: string;
  };
  usDescriptionVi: string;
  vietnameseCommonMistake: string;
  mouthGuide: {
    lips: LipShape;
    lipsTextVi: string;
    tonguePositionVi: string;
    airFlowVi: string;
    isVoiced: boolean; // có rung thanh quản không
    isStopSound: boolean; // âm chặn hơi
    stepByStep: string[];
  };
  examples: ExampleWord[];
  pairComparisonId?: string; // id của âm đối ứng, ví dụ i ngắn so sánh với i dài
  pairNote?: string;
  videoReferenceUrl?: string;
}

export interface MinimalPairQuestion {
  id: string;
  category: string;
  promptTextVi: string;
  targetSound: string;
  optionA: {
    word: string;
    ipa: string;
    meaningVi: string;
    emoji: string;
    phoneme: string;
  };
  optionB: {
    word: string;
    ipa: string;
    meaningVi: string;
    emoji: string;
    phoneme: string;
  };
  correctOption: 'A' | 'B';
  explanationVi: string;
}

export interface FinalSoundQuestion {
  id: string;
  wordFull: string;
  wordIncomplete: string; // e.g. "ca_"
  targetFinalSound: string; // e.g. "/t/"
  meaningVi: string;
  emoji: string;
  options: string[]; // e.g. ["t", "d", "k", "p"]
  correctOption: string;
  explanationVi: string;
}

export interface StopSoundQuestion {
  id: string;
  word: string;
  ipa: string;
  soundType: 'unreleased_stop' | 'released_burst';
  meaningVi: string;
  emoji: string;
  instructionVi: string;
  audioText: string;
  ruleExplanationVi: string;
}

export interface UserStats {
  stars: number;
  completedLessons: string[];
  solvedPairsCount: number;
  solvedFinalSoundsCount: number;
  streakDays: number;
  unlockedStickers: string[];
  activeMascot: MascotId;
}
