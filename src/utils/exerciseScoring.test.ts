import { describe, it } from 'node:test';
import assert from 'node:assert';
import {
  evaluateExercise1,
  evaluateExercise2,
  evaluateExercise3,
  evaluateExercise4,
  evaluateExercise5,
  evaluateExercise6
} from './exerciseScoring';

describe('Exercise Evaluation & Scoring Rules', () => {
  it('correctly evaluates Exercise 1 (Nghe và khoanh)', () => {
    // Perfect score
    const perfectAnswers: Record<number, 'A' | 'B'> = {
      1: 'A',
      2: 'A',
      3: 'B',
      4: 'A',
      5: 'A',
      6: 'A',
      7: 'A',
      8: 'A'
    };
    const res = evaluateExercise1(perfectAnswers);
    assert.strictEqual(res.correctCount, 8);
    assert.strictEqual(res.totalCount, 8);
    assert.strictEqual(res.scorePercent, 100);
    assert.strictEqual(res.starsEarned, 16);

    // Partial score
    const partialAnswers: Record<number, 'A' | 'B'> = {
      1: 'A',
      2: 'B', // wrong (food is A)
      3: 'B',
      4: 'B' // wrong
    };
    const partial = evaluateExercise1(partialAnswers);
    assert.strictEqual(partial.correctCount, 2);
  });

  it('correctly evaluates Exercise 2 (Nối ký hiệu với từ)', () => {
    const perfectMatches: Record<string, string> = {
      '/i:/': 'C',
      '/ɪ/': 'G',
      '/e/': 'K',
      '/æ/': 'J',
      '/ʌ/': 'D',
      '/ɑ:/': 'L',
      '/ɒ/': 'A',
      '/ɔ:/': 'F',
      '/ʊ/': 'E',
      '/u:/': 'I',
      '/ɜ:/': 'B',
      '/ə/': 'H'
    };
    const res = evaluateExercise2(perfectMatches);
    assert.strictEqual(res.correctCount, 12);
    assert.strictEqual(res.scorePercent, 100);
  });

  it('correctly evaluates Exercise 3a (Xếp từ vào nhà)', () => {
    const perfect3a: Record<string, string> = {
      sheep: '/i:/',
      tree: '/i:/',
      green: '/i:/',
      ship: '/ɪ/',
      sit: '/ɪ/',
      pig: '/ɪ/',
      bed: '/e/',
      pen: '/e/',
      red: '/e/',
      cat: '/æ/',
      hat: '/æ/',
      bag: '/æ/'
    };
    const res = evaluateExercise3('3a', perfect3a);
    assert.strictEqual(res.correctCount, 12);
    assert.strictEqual(res.scorePercent, 100);
  });

  it('correctly evaluates Exercise 4 (Điền ký hiệu)', () => {
    const perfectAnswers: Record<number, 'A' | 'B'> = {
      1: 'A', // ɪ
      2: 'B', // e
      3: 'B', // ʌ
      4: 'B', // ɑ:
      5: 'B', // ʊ
      6: 'A', // ɜ:
      7: 'B', // ɔ:
      8: 'A' // ə
    };
    const res = evaluateExercise4(perfectAnswers);
    assert.strictEqual(res.correctCount, 8);
    assert.strictEqual(res.scorePercent, 100);
  });

  it('correctly evaluates Exercise 5 (Tìm từ khác âm)', () => {
    const perfectAnswers: Record<number, 'A' | 'B' | 'C' | 'D'> = {
      1: 'A', // sheep (/i:/ vs /ɪ/)
      2: 'B', // hat (/æ/ vs /e/)
      3: 'D', // cup (/ʌ/ vs /æ/)
      4: 'A', // door (/ɔ:/ vs /ɒ/)
      5: 'C', // book (/ʊ/ vs /u:/)
      6: 'B' // bird (/ɜ:/ vs /ɑ:/)
    };
    const res = evaluateExercise5(perfectAnswers);
    assert.strictEqual(res.correctCount, 6);
    assert.strictEqual(res.scorePercent, 100);
  });

  it('correctly evaluates Exercise 6 (Nhận diện ký hiệu nguyên âm)', () => {
    const perfectAnswers: Record<number, 'A' | 'B' | 'C'> = {
      1: 'A', // /ɪ/
      2: 'B', // /ɑ:/
      3: 'A', // /ɔ:/
      4: 'A', // /u:/
      5: 'B', // /ə/
      6: 'A', // /æ/
      7: 'B', // /ɒ/
      8: 'A' // /ʊ/
    };
    const res = evaluateExercise6(perfectAnswers);
    assert.strictEqual(res.correctCount, 8);
    assert.strictEqual(res.scorePercent, 100);
  });
});
