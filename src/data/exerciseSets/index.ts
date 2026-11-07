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

export * from './types';

export const PRACTICE_EXAM_SETS: PracticeExamSet[] = [
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

export function getPracticeSetById(id: number): PracticeExamSet {
  const found = PRACTICE_EXAM_SETS.find((s) => s.id === id);
  return found || SET_1;
}
