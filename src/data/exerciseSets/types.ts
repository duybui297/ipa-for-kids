export interface Exercise1Question {
  id: number;
  wordA: string;
  ipaA: string;
  meaningA: string;
  wordB: string;
  ipaB: string;
  meaningB: string;
  targetAudioWord: string;
  correctChoice: 'A' | 'B';
  explanation: string;
}

export interface Exercise2WordItem {
  id: string; // 'A' through 'L'
  word: string;
  ipa: string;
  meaning: string;
  symbol: string;
}

export interface Exercise2SymbolItem {
  symbol: string;
  targetWordId: string; // letter A-L
  word: string;
  explanation: string;
}

export interface Exercise3House {
  symbol: string;
  soundName: string;
  words: string[];
  color: string;
  borderColor: string;
  bgLight: string;
}

export interface Exercise3Set {
  id: string;
  title: string;
  instruction: string;
  allWords: { word: string; ipa: string; targetSymbol: string; meaning: string }[];
  houses: Exercise3House[];
}

export interface Exercise4Question {
  id: number;
  word: string;
  templateIpa: string;
  meaning: string;
  choiceA: string;
  choiceB: string;
  correctChoice: 'A' | 'B';
  fullIpa: string;
  explanation: string;
}

export interface Exercise5Question {
  id: number;
  words: {
    letter: 'A' | 'B' | 'C' | 'D';
    word: string;
    ipa: string;
    vowelSound: string;
    meaning: string;
  }[];
  correctChoice: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface Exercise6Question {
  id: number;
  spokenWord: string;
  wordMeaning: string;
  fullIpa: string;
  targetSymbol: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  correctChoice: 'A' | 'B' | 'C';
  explanation: string;
}

export interface PracticeExamSet {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  topic: string;
  icon: string;
  exercise1: Exercise1Question[];
  exercise2Words: Exercise2WordItem[];
  exercise2Symbols: Exercise2SymbolItem[];
  exercise3a: Exercise3Set;
  exercise3b: Exercise3Set;
  exercise4: Exercise4Question[];
  exercise5: Exercise5Question[];
  exercise6: Exercise6Question[];
}
