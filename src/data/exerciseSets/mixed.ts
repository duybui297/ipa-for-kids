import {
  Exercise1Question,
  Exercise2SymbolItem,
  Exercise2WordItem,
  Exercise3House,
  Exercise3Set,
  Exercise4Question,
  Exercise5Question,
  Exercise6Question,
  PracticeExamSet,
} from './types';

/**
 * Đề tổng hợp: lấy lại câu hỏi của bộ âm đơn và bộ âm đôi rồi trộn lẫn.
 *
 * Đề được sinh bằng bộ số ngẫu nhiên có hạt giống cố định nên luôn giống nhau giữa các lần
 * mở app (điểm cao nhất và trang lời giải không bị lệch). Câu hỏi được lấy không lặp lại
 * giữa các đề cho tới khi dùng hết kho câu, rồi mới quay vòng.
 *
 * Bộ âm đơn viết dấu dài bằng dấu hai chấm ":" còn bộ âm đôi dùng "ː". Trong đề tổng hợp,
 * phiên âm được chuẩn hoá về "ː" để hai loại hiển thị giống nhau.
 */

export const MIXED_SET_COUNT = 10;
export const MIXED_SET_ID_BASE = 200; // id 201, 202, …
const SEED = 20261121;

// ---------------------------------------------------------------------------
// Ngẫu nhiên có hạt giống (mulberry32)
// ---------------------------------------------------------------------------
function createRandom(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Lấy lần lượt từ một kho đã xáo trộn; hết kho thì xáo lại và quay vòng. */
function createDrawer<T>(pool: readonly T[], random: () => number) {
  let queue: T[] = [];
  return (accept: (item: T) => boolean = () => true): T => {
    for (let attempt = 0; attempt < 2; attempt++) {
      if (queue.length === 0) queue = shuffle(pool, random);
      const index = queue.findIndex(accept);
      if (index >= 0) return queue.splice(index, 1)[0];
      queue = []; // không còn câu phù hợp trong lượt này: xáo lại toàn bộ kho
    }
    throw new Error('Không đủ câu hỏi phù hợp để tạo đề tổng hợp');
  };
}

// ---------------------------------------------------------------------------
// Chuẩn hoá phiên âm ":" -> "ː" (chỉ trong phần phiên âm, không đụng văn bản thường)
// ---------------------------------------------------------------------------
const normIpa = (s: string) => s.replace(/:/g, 'ː');
const normText = (s: string) => s.replace(/\/[^/\s]+\//g, normIpa);

// ---------------------------------------------------------------------------
// Kho câu hỏi
// ---------------------------------------------------------------------------
interface HouseSource {
  house: Exercise3House;
  words: Exercise3Set['allWords'];
}

interface Pools {
  ex1: Exercise1Question[];
  ex2: { symbol: Exercise2SymbolItem; word: Exercise2WordItem }[];
  ex3: HouseSource[];
  ex4: Exercise4Question[];
  ex5: Exercise5Question[];
  ex6: Exercise6Question[];
}

function collectPools(sets: PracticeExamSet[]): Pools {
  const pools: Pools = { ex1: [], ex2: [], ex3: [], ex4: [], ex5: [], ex6: [] };
  for (const set of sets) {
    pools.ex1.push(...set.exercise1);
    for (const symbol of set.exercise2Symbols) {
      const word = set.exercise2Words.find((w) => w.id === symbol.targetWordId);
      if (word) pools.ex2.push({ symbol, word });
    }
    for (const ex3 of [set.exercise3a, set.exercise3b]) {
      for (const house of ex3.houses) {
        pools.ex3.push({ house, words: ex3.allWords.filter((w) => w.targetSymbol === house.symbol) });
      }
    }
    pools.ex4.push(...set.exercise4);
    pools.ex5.push(...set.exercise5);
    pools.ex6.push(...set.exercise6);
  }
  return pools;
}

const HOUSE_COLORS = ['emerald', 'sky', 'amber', 'rose', 'purple', 'teal', 'indigo', 'orange'];

// ---------------------------------------------------------------------------
// Sinh đề
// ---------------------------------------------------------------------------
export function buildMixedSets(
  monophthongSets: PracticeExamSet[],
  diphthongSets: PracticeExamSet[],
  count: number = MIXED_SET_COUNT,
  seed: number = SEED
): PracticeExamSet[] {
  const random = createRandom(seed);
  const mono = collectPools(monophthongSets);
  const diph = collectPools(diphthongSets);

  const draw = {
    ex1: [createDrawer(mono.ex1, random), createDrawer(diph.ex1, random)],
    ex2: [createDrawer(mono.ex2, random), createDrawer(diph.ex2, random)],
    ex3: [createDrawer(mono.ex3, random), createDrawer(diph.ex3, random)],
    ex4: [createDrawer(mono.ex4, random), createDrawer(diph.ex4, random)],
    ex5: [createDrawer(mono.ex5, random), createDrawer(diph.ex5, random)],
    ex6: [createDrawer(mono.ex6, random), createDrawer(diph.ex6, random)],
  };

  /** Lấy n câu, xen kẽ âm đơn / âm đôi, rồi xáo trộn thứ tự. */
  const takeMixed = <T>(drawers: ((accept?: (item: T) => boolean) => T)[], n: number, accept?: (item: T, picked: T[]) => boolean) => {
    const picked: T[] = [];
    for (let i = 0; i < n; i++) {
      const drawer = drawers[i % 2];
      picked.push(drawer(accept ? (item) => accept(item, picked) : undefined));
    }
    return shuffle(picked, random);
  };

  const sets: PracticeExamSet[] = [];
  for (let index = 1; index <= count; index++) {
    const number = String(index).padStart(2, '0');

    // Bài 1: 8 câu
    const exercise1 = takeMixed(draw.ex1, 8, (q, picked) =>
      !picked.some((p) => p.targetAudioWord === q.targetAudioWord)
    ).map((q, i) => ({
      ...q,
      id: i + 1,
      ipaA: normIpa(q.ipaA),
      ipaB: normIpa(q.ipaB),
      explanation: normText(q.explanation),
    }));

    // Bài 2: 12 cặp ký hiệu – từ (6 âm đơn + 6 âm đôi), ký hiệu và từ không trùng nhau
    const pairs = takeMixed(draw.ex2, 12, (p, picked) =>
      !picked.some((x) => normIpa(x.symbol.symbol) === normIpa(p.symbol.symbol) || x.word.word === p.word.word)
    );
    const letters = 'ABCDEFGHIJKL'.split('');
    const wordOrder = shuffle(pairs, random);
    const letterOf = new Map(wordOrder.map((p, i) => [p, letters[i]]));
    const exercise2Words: Exercise2WordItem[] = wordOrder.map((p) => ({
      ...p.word,
      id: letterOf.get(p)!,
      ipa: normIpa(p.word.ipa),
      symbol: normIpa(p.word.symbol),
    }));
    const exercise2Symbols: Exercise2SymbolItem[] = pairs.map((p) => ({
      ...p.symbol,
      symbol: normIpa(p.symbol.symbol),
      targetWordId: letterOf.get(p)!,
      explanation: normText(p.symbol.explanation),
    }));

    // Bài 3a / 3b: mỗi phần 4 nhà (2 âm đơn + 2 âm đôi), mỗi nhà 3 từ
    const usedSymbols = new Set<string>();
    const usedWords = new Set<string>();
    const buildEx3 = (id: '3a' | '3b'): Exercise3Set => {
      const sources = takeMixed(draw.ex3, 4, (s, picked) => {
        const sym = normIpa(s.house.symbol);
        if (usedSymbols.has(sym) || picked.some((p) => normIpa(p.house.symbol) === sym)) return false;
        const pickedWords = picked.flatMap((p) => p.words.map((w) => w.word));
        return s.words.every((w) => !usedWords.has(w.word) && !pickedWords.includes(w.word));
      });
      sources.forEach((s) => {
        usedSymbols.add(normIpa(s.house.symbol));
        s.words.forEach((w) => usedWords.add(w.word));
      });
      const houses: Exercise3House[] = sources.map((s, i) => {
        const color = HOUSE_COLORS[(id === '3a' ? 0 : 4) + i];
        return {
          ...s.house,
          symbol: normIpa(s.house.symbol),
          color: `text-${color}-700`,
          borderColor: `border-${color}-300`,
          bgLight: `bg-${color}-50`,
        };
      });
      const allWords = shuffle(
        sources.flatMap((s) => s.words.map((w) => ({ ...w, ipa: normIpa(w.ipa), targetSymbol: normIpa(w.targetSymbol) }))),
        random
      );
      return {
        id,
        title: `Bài ${id}: Xếp từ vào ${houses.length} ngôi nhà ${houses.map((h) => h.symbol).join(', ')}`,
        instruction:
          'Có cả nguyên âm đơn và nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
        allWords,
        houses,
      };
    };
    const exercise3a = buildEx3('3a');
    const exercise3b = buildEx3('3b');

    // Bài 4: 8 câu
    const exercise4 = takeMixed(draw.ex4, 8, (q, picked) => !picked.some((p) => p.word === q.word)).map((q, i) => ({
      ...q,
      id: i + 1,
      templateIpa: normIpa(q.templateIpa),
      choiceA: normIpa(q.choiceA),
      choiceB: normIpa(q.choiceB),
      fullIpa: normIpa(q.fullIpa),
      explanation: normText(q.explanation),
    }));

    // Bài 5: 6 câu
    const exercise5 = takeMixed(draw.ex5, 6).map((q, i) => ({
      ...q,
      id: i + 1,
      words: q.words.map((w) => ({ ...w, ipa: normIpa(w.ipa), vowelSound: normIpa(w.vowelSound) })),
      explanation: normText(q.explanation),
    }));

    // Bài 6: 8 câu
    const exercise6 = takeMixed(draw.ex6, 8, (q, picked) => !picked.some((p) => p.spokenWord === q.spokenWord)).map(
      (q, i) => ({
        ...q,
        id: i + 1,
        fullIpa: normIpa(q.fullIpa),
        targetSymbol: normIpa(q.targetSymbol),
        choiceA: normIpa(q.choiceA),
        choiceB: normIpa(q.choiceB),
        choiceC: normIpa(q.choiceC),
        explanation: normText(q.explanation),
      })
    );

    sets.push({
      id: MIXED_SET_ID_BASE + index,
      title: `Đề Tổng Hợp ${number}: Âm đơn & Âm đôi`,
      subtitle: 'Trộn câu hỏi từ bộ âm đơn và bộ âm đôi',
      badge: 'Tổng hợp',
      topic: `Mixed Review ${number}`,
      icon: '🎲',
      description:
        'Đề ôn tập trộn lẫn nguyên âm đơn và nguyên âm đôi, lấy từ các bộ đề đã học. Bé cần phân biệt cả hai loại âm trong cùng một bài.',
      exercise1,
      exercise2Words,
      exercise2Symbols,
      exercise3a,
      exercise3b,
      exercise4,
      exercise5,
      exercise6,
    });
  }
  return sets;
}
