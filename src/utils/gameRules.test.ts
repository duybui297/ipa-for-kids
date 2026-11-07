import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateGameScore,
  cleanIpaSymbol,
  evaluateFinalSound,
  evaluateMinimalPairChoice,
  checkUnlockedBadges,
  BADGE_RULES,
  EMPTY_PROGRESS,
} from './gameRules';
import { STICKER_BADGES } from '../data/ipaData';

test('calculateGameScore: awards 10 stars for normal correct answer', () => {
  const result = calculateGameScore(true, 0, 0);
  assert.equal(result.starsEarned, 10);
  assert.equal(result.newStreak, 1);
  assert.equal(result.totalStars, 10);
});

test('calculateGameScore: awards 15 bonus stars for streak >= 3', () => {
  const result = calculateGameScore(true, 2, 20); // next streak is 3
  assert.equal(result.starsEarned, 15);
  assert.equal(result.newStreak, 3);
  assert.equal(result.totalStars, 35);
});

test('calculateGameScore: resets streak on wrong answer without deducting stars', () => {
  const result = calculateGameScore(false, 5, 50);
  assert.equal(result.starsEarned, 0);
  assert.equal(result.newStreak, 0);
  assert.equal(result.totalStars, 50);
});

test('cleanIpaSymbol: strips brackets and length marks', () => {
  assert.equal(cleanIpaSymbol('/iː/'), 'i');
  assert.equal(cleanIpaSymbol('/ʃiːp/'), 'ʃip');
  assert.equal(cleanIpaSymbol('[t̚]'), 't');
});

test('evaluateFinalSound: case-insensitive matching', () => {
  assert.equal(evaluateFinalSound('T', 't'), true);
  assert.equal(evaluateFinalSound('sh', 'SH'), true);
  assert.equal(evaluateFinalSound('k', 't'), false);
});

test('evaluateMinimalPairChoice: verifies selection', () => {
  assert.equal(evaluateMinimalPairChoice('A', 'A'), true);
  assert.equal(evaluateMinimalPairChoice('B', 'A'), false);
});

test('checkUnlockedBadges: grants badges according to thresholds', () => {
  assert.deepEqual(checkUnlockedBadges({ ...EMPTY_PROGRESS, stars: 10 }), []);

  const earned = checkUnlockedBadges({
    stars: 60,
    solvedPairs: 10,
    solvedFinalSounds: 4,
    stopSoundsPracticed: 4,
    voiceRecordCount: 5,
  });
  assert.deepEqual(earned.sort(), [
    'badge_final_detective',
    'badge_i_master',
    'badge_kpop_mic',
    'badge_ninja_stop',
    'badge_omnom_candy',
    'badge_star',
  ]);
});

test('checkUnlockedBadges: every rule maps to a badge shown in the collection', () => {
  const shownIds = STICKER_BADGES.map((b) => b.id).sort();
  const ruleIds = BADGE_RULES.map((r) => r.id).sort();
  assert.deepEqual(ruleIds, shownIds);
});
