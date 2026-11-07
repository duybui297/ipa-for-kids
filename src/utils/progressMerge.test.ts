import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeSnapshots, mergeBestStars } from './progressMerge';
import type { ProgressSnapshot } from '../types/progress';

const base: ProgressSnapshot = {
  progress: { stars: 30, solvedPairs: 0, solvedFinalSounds: 0, voiceRecordCount: 0, practicedStopWordIds: [], recordedWords: [] },
  exerciseBestStars: {},
  mascot: 'chiikawa',
};

test('mergeSnapshots never loses achievements from either side', () => {
  const local: ProgressSnapshot = {
    ...base,
    progress: { ...base.progress, stars: 120, solvedPairs: 2, practicedStopWordIds: ['ss_1'], recordedWords: ['cat'] },
    exerciseBestStars: { 'set1:b1': 16, 'set2:b3-3a': 8 },
  };
  const remote: ProgressSnapshot = {
    ...base,
    progress: { ...base.progress, stars: 90, solvedPairs: 7, voiceRecordCount: 3, practicedStopWordIds: ['ss_2', 'ss_1'], recordedWords: ['ship'] },
    exerciseBestStars: { 'set1:b1': 12, 'set5:b6': 16 },
    mascot: 'doraemon',
  };

  const merged = mergeSnapshots(local, remote);
  assert.equal(merged.progress.stars, 120);
  assert.equal(merged.progress.solvedPairs, 7);
  assert.equal(merged.progress.voiceRecordCount, 3);
  assert.deepEqual(merged.progress.practicedStopWordIds.sort(), ['ss_1', 'ss_2']);
  assert.deepEqual(merged.progress.recordedWords.sort(), ['cat', 'ship']);
  assert.deepEqual(merged.exerciseBestStars, { 'set1:b1': 16, 'set2:b3-3a': 8, 'set5:b6': 16 });
  assert.equal(merged.mascot, 'doraemon');
});

test('mergeBestStars keeps the highest score per exercise', () => {
  assert.deepEqual(mergeBestStars({ a: 4 }, { a: 10, b: 2 }), { a: 10, b: 2 });
});
