import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { PRACTICE_EXAM_SETS } from './index';

// Kiểm tra tính nhất quán của 15 bộ đề: đáp án phải khớp với dữ liệu,
// nếu không bé sẽ gặp câu "không thể làm đúng".
describe('Practice exam sets data integrity', () => {
  it('has unique set ids', () => {
    const ids = PRACTICE_EXAM_SETS.map((s) => s.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  for (const set of PRACTICE_EXAM_SETS) {
    describe(`Set ${set.id}`, () => {
      it('Bài 1: the spoken word is the correct choice', () => {
        for (const q of set.exercise1) {
          const correctWord = q.correctChoice === 'A' ? q.wordA : q.wordB;
          assert.equal(q.targetAudioWord, correctWord, `câu ${q.id}`);
        }
      });

      it('Bài 2: every symbol points to a distinct word with that symbol', () => {
        const wordsById = new Map(set.exercise2Words.map((w) => [w.id, w]));
        const targets = set.exercise2Symbols.map((s) => s.targetWordId);
        assert.equal(new Set(targets).size, targets.length, 'mỗi từ chỉ được nối với 1 ký hiệu');
        for (const item of set.exercise2Symbols) {
          const word = wordsById.get(item.targetWordId);
          assert.ok(word, `${item.symbol}: không tìm thấy từ ${item.targetWordId}`);
          assert.equal(word.symbol, item.symbol, `${item.symbol} -> ${word.word}`);
        }
      });

      for (const ex of [set.exercise3a, set.exercise3b]) {
        it(`Bài ${ex.id}: houses and word list agree`, () => {
          const words = ex.allWords.map((w) => w.word);
          assert.equal(new Set(words).size, words.length, 'trùng từ');
          for (const house of ex.houses) {
            const expected = ex.allWords.filter((w) => w.targetSymbol === house.symbol).map((w) => w.word).sort();
            assert.deepEqual([...house.words].sort(), expected, `nhà ${house.symbol}`);
          }
          const houseSymbols = new Set(ex.houses.map((h) => h.symbol));
          for (const w of ex.allWords) assert.ok(houseSymbols.has(w.targetSymbol), `${w.word} -> ${w.targetSymbol}`);
        });
      }

      it('Bài 4: filling the blank with the correct choice gives the full IPA', () => {
        for (const q of set.exercise4) {
          const choice = q.correctChoice === 'A' ? q.choiceA : q.choiceB;
          assert.equal(q.templateIpa.replace(/_+|\.\.\.|…/, choice), q.fullIpa, `câu ${q.id} (${q.word})`);
        }
      });

      it('Bài 5: exactly one word has a different vowel and it is the answer', () => {
        for (const q of set.exercise5) {
          const counts = new Map<string, number>();
          q.words.forEach((w) => counts.set(w.vowelSound, (counts.get(w.vowelSound) ?? 0) + 1));
          const odd = q.words.filter((w) => counts.get(w.vowelSound) === 1);
          assert.equal(odd.length, 1, `câu ${q.id}: có ${odd.length} từ khác âm`);
          assert.equal(odd[0].letter, q.correctChoice, `câu ${q.id}`);
        }
      });

      it('Bài 6: the correct choice is the target symbol found in the word', () => {
        for (const q of set.exercise6) {
          const choice = { A: q.choiceA, B: q.choiceB, C: q.choiceC }[q.correctChoice];
          assert.equal(choice, q.targetSymbol, `câu ${q.id}`);
          assert.ok(q.fullIpa.includes(q.targetSymbol.replace(/\//g, '')), `câu ${q.id} (${q.spokenWord})`);
        }
      });
    });
  }
});
