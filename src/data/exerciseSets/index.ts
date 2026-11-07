import { PracticeExamSet } from './types';
import { SET_1 } from './set1';
import { SET_2 } from './set2';
import { SET_3 } from './set3';
import { SET_4 } from './set4';
import { SET_5 } from './set5';
import { SET_6 } from './set6';
import { SET_7 } from './set7';
import { SET_8 } from './set8';
import { SET_9 } from './set9';
import { SET_10 } from './set10';
import { SET_11 } from './set11';
import { SET_12 } from './set12';
import { SET_13 } from './set13';
import { SET_14 } from './set14';
import { SET_15 } from './set15';
import { DIPHTHONG_EXAM_SETS } from './diphthong';

export * from './types';

/** 15 bộ đề nguyên âm đơn (id 1–15). */
export const MONOPHTHONG_EXAM_SETS: PracticeExamSet[] = [
  SET_1,
  SET_2,
  SET_3,
  SET_4,
  SET_5,
  SET_6,
  SET_7,
  SET_8,
  SET_9,
  SET_10,
  SET_11,
  SET_12,
  SET_13,
  SET_14,
  SET_15
];

export { DIPHTHONG_EXAM_SETS };

export type ExamSetCategoryId = 'monophthong' | 'diphthong';

export interface ExamSetCategory {
  id: ExamSetCategoryId;
  label: string;
  shortLabel: string;
  description: string;
  sets: PracticeExamSet[];
}

export const EXAM_SET_CATEGORIES: ExamSetCategory[] = [
  {
    id: 'monophthong',
    label: 'Nguyên âm đơn',
    shortLabel: 'Âm đơn',
    description: '12 nguyên âm đơn: /i:/, /ɪ/, /e/, /æ/, /ʌ/, /ɑ:/, /ɒ/, /ɔ:/, /ʊ/, /u:/, /ɜ:/, /ə/',
    sets: MONOPHTHONG_EXAM_SETS
  },
  {
    id: 'diphthong',
    label: 'Nguyên âm đôi',
    shortLabel: 'Âm đôi',
    description: '8 nguyên âm đôi: /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/, /ʊə/ (phiên âm giọng Anh)',
    sets: DIPHTHONG_EXAM_SETS
  }
];

/** Tất cả bộ đề (âm đơn + âm đôi). */
export const PRACTICE_EXAM_SETS: PracticeExamSet[] = [...MONOPHTHONG_EXAM_SETS, ...DIPHTHONG_EXAM_SETS];

export function getPracticeSetById(id: number): PracticeExamSet {
  const found = PRACTICE_EXAM_SETS.find((s) => s.id === id);
  return found || SET_1;
}

export function getCategoryOfSet(id: number): ExamSetCategory {
  return EXAM_SET_CATEGORIES.find((c) => c.sets.some((s) => s.id === id)) ?? EXAM_SET_CATEGORIES[0];
}
