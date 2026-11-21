import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildMixedSets, MIXED_SET_COUNT } from './mixed';
import { MIXED_EXAM_SETS, MONOPHTHONG_EXAM_SETS, DIPHTHONG_EXAM_SETS, PRACTICE_EXAM_SETS } from './index';

const DIPHTHONGS = ['eɪ', 'aɪ', 'ɔɪ', 'əʊ', 'aʊ', 'ɪə', 'eə', 'ʊə'];
const isDiphthong = (ipa: string) => DIPHTHONGS.some((d) => ipa.includes(d));

describe('Đề tổng hợp (trộn âm đơn & âm đôi)', () => {
  it('tạo đủ số đề, id không trùng với các bộ khác', () => {
    assert.equal(MIXED_EXAM_SETS.length, MIXED_SET_COUNT);
    const ids = PRACTICE_EXAM_SETS.map((s) => s.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  it('luôn sinh ra cùng một nội dung (không đổi giữa các lần mở app)', () => {
    const again = buildMixedSets(MONOPHTHONG_EXAM_SETS, DIPHTHONG_EXAM_SETS);
    assert.deepEqual(again, MIXED_EXAM_SETS);
  });

  for (const set of MIXED_EXAM_SETS) {
    it(`${set.title}: mỗi bài đều có cả âm đơn và âm đôi`, () => {
      const kinds = (ipas: string[]) => new Set(ipas.map(isDiphthong));
      assert.equal(kinds(set.exercise1.map((q) => q.targetAudioWord === q.wordA ? q.ipaA : q.ipaB)).size, 2, 'Bài 1');
      assert.equal(kinds(set.exercise2Symbols.map((s) => s.symbol)).size, 2, 'Bài 2');
      assert.equal(kinds(set.exercise3a.houses.map((h) => h.symbol)).size, 2, 'Bài 3a');
      assert.equal(kinds(set.exercise3b.houses.map((h) => h.symbol)).size, 2, 'Bài 3b');
      assert.equal(kinds(set.exercise4.map((q) => q.fullIpa)).size, 2, 'Bài 4');
      assert.equal(kinds(set.exercise5.map((q) => q.words.find((w) => w.letter !== q.correctChoice)!.vowelSound)).size, 2, 'Bài 5');
      assert.equal(kinds(set.exercise6.map((q) => q.targetSymbol)).size, 2, 'Bài 6');
    });

    it(`${set.title}: phiên âm dùng thống nhất ký hiệu dài "ː"`, () => {
      const ipas = [
        ...set.exercise1.flatMap((q) => [q.ipaA, q.ipaB]),
        ...set.exercise2Words.map((w) => w.ipa),
        ...set.exercise2Symbols.map((s) => s.symbol),
        ...[set.exercise3a, set.exercise3b].flatMap((e) => e.allWords.map((w) => w.ipa)),
        ...set.exercise4.flatMap((q) => [q.fullIpa, q.choiceA, q.choiceB]),
        ...set.exercise5.flatMap((q) => q.words.map((w) => w.ipa)),
        ...set.exercise6.flatMap((q) => [q.fullIpa, q.choiceA, q.choiceB, q.choiceC]),
      ];
      assert.deepEqual(ipas.filter((i) => i.includes(':')), []);
    });

    it(`${set.title}: số câu đúng như một bộ đề thường`, () => {
      assert.equal(set.exercise1.length, 8);
      assert.equal(set.exercise2Symbols.length, 12);
      assert.equal(set.exercise3a.houses.length, 4);
      assert.equal(set.exercise3b.houses.length, 4);
      assert.equal(set.exercise4.length, 8);
      assert.equal(set.exercise5.length, 6);
      assert.equal(set.exercise6.length, 8);
    });
  }
});
