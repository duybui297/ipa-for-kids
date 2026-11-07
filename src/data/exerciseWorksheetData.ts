import type {
  Exercise1Question,
  Exercise2WordItem,
  Exercise2SymbolItem,
  Exercise3Set,
  Exercise4Question,
  Exercise5Question,
  Exercise6Question,
} from './exerciseSets';
import { SET_1 } from './exerciseSets/set1';

export * from './exerciseSets';

// Backwards-compatible exports pointing to default Set 1
export const EXERCISE_1_DATA: Exercise1Question[] = SET_1.exercise1;
export const EXERCISE_2_WORDS: Exercise2WordItem[] = SET_1.exercise2Words;
export const EXERCISE_2_SYMBOLS: Exercise2SymbolItem[] = SET_1.exercise2Symbols;
export const EXERCISE_3A_DATA: Exercise3Set = SET_1.exercise3a;
export const EXERCISE_3B_DATA: Exercise3Set = SET_1.exercise3b;
export const EXERCISE_4_DATA: Exercise4Question[] = SET_1.exercise4;
export const EXERCISE_5_DATA: Exercise5Question[] = SET_1.exercise5;
export const EXERCISE_6_DATA: Exercise6Question[] = SET_1.exercise6;
