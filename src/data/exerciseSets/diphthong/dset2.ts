import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 02 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_2: PracticeExamSet = {
  id: 102,
  title: 'Bộ Đề Âm Đôi 02: Động vật & Thiên nhiên',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Animals & Nature',
  icon: '🦉',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề động vật & thiên nhiên. Phiên âm giọng Anh, theo bộ đề Word số 02.',
  exercise1: [
    {
      id: 1,
      wordA: 'tail',
      ipaA: '/teɪl/',
      meaningA: 'cái đuôi',
      wordB: 'tell',
      ipaB: '/tel/',
      meaningB: 'kể, nói',
      targetAudioWord: 'tell',
      correctChoice: 'B',
      explanation: "Cô đọc 'tell' /tel/ có âm /e/ (e ngắn). Còn 'tail' /teɪl/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'mice',
      ipaA: '/maɪs/',
      meaningA: 'những con chuột',
      wordB: 'miss',
      ipaB: '/mɪs/',
      meaningB: 'nhớ, trượt',
      targetAudioWord: 'mice',
      correctChoice: 'A',
      explanation: "Cô đọc 'mice' /maɪs/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'miss' /mɪs/ có âm /ɪ/."
    },
    {
      id: 3,
      wordA: 'got',
      ipaA: '/ɡɒt/',
      meaningA: 'đã có',
      wordB: 'goat',
      ipaB: '/ɡəʊt/',
      meaningB: 'con dê',
      targetAudioWord: 'goat',
      correctChoice: 'B',
      explanation: "Cô đọc 'goat' /ɡəʊt/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'got' /ɡɒt/ có âm /ɒ/."
    },
    {
      id: 4,
      wordA: 'cow',
      ipaA: '/kaʊ/',
      meaningA: 'con bò sữa',
      wordB: 'car',
      ipaB: '/kɑː/',
      meaningB: 'ô tô',
      targetAudioWord: 'cow',
      correctChoice: 'A',
      explanation: "Cô đọc 'cow' /kaʊ/ có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/). Còn 'car' /kɑː/ có âm /ɑː/."
    },
    {
      id: 5,
      wordA: 'hare',
      ipaA: '/heə/',
      meaningA: 'con thỏ rừng',
      wordB: 'here',
      ipaB: '/hɪə/',
      meaningB: 'ở đây',
      targetAudioWord: 'here',
      correctChoice: 'B',
      explanation: "Cô đọc 'here' /hɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'hare' /heə/ có âm /eə/."
    },
    {
      id: 6,
      wordA: 'owl',
      ipaA: '/aʊl/',
      meaningA: 'con cú',
      wordB: 'oil',
      ipaB: '/ɔɪl/',
      meaningB: 'dầu',
      targetAudioWord: 'oil',
      correctChoice: 'B',
      explanation: "Cô đọc 'oil' /ɔɪl/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'owl' /aʊl/ có âm /aʊ/."
    },
    {
      id: 7,
      wordA: 'snake',
      ipaA: '/sneɪk/',
      meaningA: 'con rắn',
      wordB: 'snack',
      ipaB: '/snæk/',
      meaningB: 'đồ ăn vặt',
      targetAudioWord: 'snake',
      correctChoice: 'A',
      explanation: "Cô đọc 'snake' /sneɪk/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'snack' /snæk/ có âm /æ/."
    },
    {
      id: 8,
      wordA: 'ear',
      ipaA: '/ɪə/',
      meaningA: 'cái tai',
      wordB: 'air',
      ipaB: '/eə/',
      meaningB: 'không khí',
      targetAudioWord: 'air',
      correctChoice: 'B',
      explanation: "Cô đọc 'air' /eə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'ear' /ɪə/ có âm /ɪə/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'cloud', ipa: '/klaʊd/', meaning: 'đám mây', symbol: '/aʊ/' },
    { id: 'B', word: 'bear', ipa: '/beə/', meaning: 'con gấu', symbol: '/eə/' },
    { id: 'C', word: 'sky', ipa: '/skaɪ/', meaning: 'bầu trời', symbol: '/aɪ/' },
    { id: 'D', word: 'snake', ipa: '/sneɪk/', meaning: 'con rắn', symbol: '/eɪ/' },
    { id: 'E', word: 'deer', ipa: '/dɪə/', meaning: 'con hươu', symbol: '/ɪə/' },
    { id: 'F', word: 'snow', ipa: '/snəʊ/', meaning: 'tuyết', symbol: '/əʊ/' },
    { id: 'G', word: 'soil', ipa: '/sɔɪl/', meaning: 'đất trồng', symbol: '/ɔɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'D', word: 'snake', explanation: "Âm /eɪ/ có trong từ 'snake' /sneɪk/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'C', word: 'sky', explanation: "Âm /aɪ/ có trong từ 'sky' /skaɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'G', word: 'soil', explanation: "Âm /ɔɪ/ có trong từ 'soil' /sɔɪl/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'F', word: 'snow', explanation: "Âm /əʊ/ có trong từ 'snow' /snəʊ/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'A', word: 'cloud', explanation: "Âm /aʊ/ có trong từ 'cloud' /klaʊd/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'E', word: 'deer', explanation: "Âm /ɪə/ có trong từ 'deer' /dɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'B', word: 'bear', explanation: "Âm /eə/ có trong từ 'bear' /beə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'goat', ipa: '/ɡəʊt/', targetSymbol: '/əʊ/', meaning: 'con dê' },
      { word: 'snake', ipa: '/sneɪk/', targetSymbol: '/eɪ/', meaning: 'con rắn' },
      { word: 'fly', ipa: '/flaɪ/', targetSymbol: '/aɪ/', meaning: 'bay' },
      { word: 'owl', ipa: '/aʊl/', targetSymbol: '/aʊ/', meaning: 'con cú' },
      { word: 'whale', ipa: '/weɪl/', targetSymbol: '/eɪ/', meaning: 'cá voi' },
      { word: 'snow', ipa: '/snəʊ/', targetSymbol: '/əʊ/', meaning: 'tuyết' },
      { word: 'mice', ipa: '/maɪs/', targetSymbol: '/aɪ/', meaning: 'những con chuột' },
      { word: 'cow', ipa: '/kaʊ/', targetSymbol: '/aʊ/', meaning: 'con bò sữa' },
      { word: 'tail', ipa: '/teɪl/', targetSymbol: '/eɪ/', meaning: 'cái đuôi' },
      { word: 'toad', ipa: '/təʊd/', targetSymbol: '/əʊ/', meaning: 'con cóc' },
      { word: 'sky', ipa: '/skaɪ/', targetSymbol: '/aɪ/', meaning: 'bầu trời' },
      { word: 'mouse', ipa: '/maʊs/', targetSymbol: '/aʊ/', meaning: 'con chuột' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['snake', 'whale', 'tail'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['fly', 'mice', 'sky'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['goat', 'snow', 'toad'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['owl', 'cow', 'mouse'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'bear', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'con gấu' },
      { word: 'soil', ipa: '/sɔɪl/', targetSymbol: '/ɔɪ/', meaning: 'đất trồng' },
      { word: 'ear', ipa: '/ɪə/', targetSymbol: '/ɪə/', meaning: 'cái tai' },
      { word: 'hare', ipa: '/heə/', targetSymbol: '/eə/', meaning: 'con thỏ rừng' },
      { word: 'noise', ipa: '/nɔɪz/', targetSymbol: '/ɔɪ/', meaning: 'tiếng ồn' },
      { word: 'deer', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'con hươu' },
      { word: 'pear', ipa: '/peə/', targetSymbol: '/eə/', meaning: 'quả lê' },
      { word: 'oyster', ipa: '/ˈɔɪstə/', targetSymbol: '/ɔɪ/', meaning: 'con hàu' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['soil', 'noise', 'oyster'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['ear', 'deer', 'near'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['bear', 'hare', 'pear'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'tail',
      templateIpa: '/t_l/',
      meaning: 'cái đuôi',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/teɪl/',
      explanation: "Từ 'tail' đọc là /teɪl/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 2,
      word: 'fly',
      templateIpa: '/fl_/',
      meaning: 'bay',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/flaɪ/',
      explanation: "Từ 'fly' đọc là /flaɪ/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
      word: 'noise',
      templateIpa: '/n_z/',
      meaning: 'tiếng ồn',
      choiceA: 'ɔɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/nɔɪz/',
      explanation: "Từ 'noise' đọc là /nɔɪz/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 4,
      word: 'snow',
      templateIpa: '/sn_/',
      meaning: 'tuyết',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/snəʊ/',
      explanation: "Từ 'snow' đọc là /snəʊ/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'owl',
      templateIpa: '/_l/',
      meaning: 'con cú',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/aʊl/',
      explanation: "Từ 'owl' đọc là /aʊl/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'deer',
      templateIpa: '/d_/',
      meaning: 'con hươu',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/dɪə/',
      explanation: "Từ 'deer' đọc là /dɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 7,
      word: 'bear',
      templateIpa: '/b_/',
      meaning: 'con gấu',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/beə/',
      explanation: "Từ 'bear' đọc là /beə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 8,
      word: 'cloud',
      templateIpa: '/kl_d/',
      meaning: 'đám mây',
      choiceA: 'aʊ',
      choiceB: 'ɔɪ',
      correctChoice: 'A',
      fullIpa: '/klaʊd/',
      explanation: "Từ 'cloud' đọc là /klaʊd/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'snake', ipa: '/sneɪk/', vowelSound: '/eɪ/', meaning: 'con rắn' },
        { letter: 'B', word: 'whale', ipa: '/weɪl/', vowelSound: '/eɪ/', meaning: 'cá voi' },
        { letter: 'C', word: 'tail', ipa: '/teɪl/', vowelSound: '/eɪ/', meaning: 'cái đuôi' },
        { letter: 'D', word: 'fly', ipa: '/flaɪ/', vowelSound: '/aɪ/', meaning: 'bay' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'fly' mang âm /aɪ/. Còn snake, whale, tail đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'goat', ipa: '/ɡəʊt/', vowelSound: '/əʊ/', meaning: 'con dê' },
        { letter: 'B', word: 'snow', ipa: '/snəʊ/', vowelSound: '/əʊ/', meaning: 'tuyết' },
        { letter: 'C', word: 'cow', ipa: '/kaʊ/', vowelSound: '/aʊ/', meaning: 'con bò sữa' },
        { letter: 'D', word: 'toad', ipa: '/təʊd/', vowelSound: '/əʊ/', meaning: 'con cóc' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'cow' mang âm /aʊ/. Còn goat, snow, toad đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'mouse', ipa: '/maʊs/', vowelSound: '/aʊ/', meaning: 'con chuột' },
        { letter: 'B', word: 'owl', ipa: '/aʊl/', vowelSound: '/aʊ/', meaning: 'con cú' },
        { letter: 'C', word: 'rose', ipa: '/rəʊz/', vowelSound: '/əʊ/', meaning: 'hoa hồng' },
        { letter: 'D', word: 'cloud', ipa: '/klaʊd/', vowelSound: '/aʊ/', meaning: 'đám mây' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'rose' mang âm /əʊ/. Còn mouse, owl, cloud đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'deer', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'con hươu' },
        { letter: 'B', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' },
        { letter: 'C', word: 'bear', ipa: '/beə/', vowelSound: '/eə/', meaning: 'con gấu' },
        { letter: 'D', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'bear' mang âm /eə/. Còn deer, ear, near đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'hare', ipa: '/heə/', vowelSound: '/eə/', meaning: 'con thỏ rừng' },
        { letter: 'B', word: 'pear', ipa: '/peə/', vowelSound: '/eə/', meaning: 'quả lê' },
        { letter: 'C', word: 'clear', ipa: '/klɪə/', vowelSound: '/ɪə/', meaning: 'trong trẻo' },
        { letter: 'D', word: 'air', ipa: '/eə/', vowelSound: '/eə/', meaning: 'không khí' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'clear' mang âm /ɪə/. Còn hare, pear, air đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'soil', ipa: '/sɔɪl/', vowelSound: '/ɔɪ/', meaning: 'đất trồng' },
        { letter: 'B', word: 'fly', ipa: '/flaɪ/', vowelSound: '/aɪ/', meaning: 'bay' },
        { letter: 'C', word: 'mice', ipa: '/maɪs/', vowelSound: '/aɪ/', meaning: 'những con chuột' },
        { letter: 'D', word: 'sky', ipa: '/skaɪ/', vowelSound: '/aɪ/', meaning: 'bầu trời' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'soil' mang âm /ɔɪ/. Còn fly, mice, sky đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'whale',
      wordMeaning: 'cá voi',
      fullIpa: '/weɪl/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/e/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'whale' phát âm là /weɪl/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      spokenWord: 'fly',
      wordMeaning: 'bay',
      fullIpa: '/flaɪ/',
      targetSymbol: '/aɪ/',
      choiceA: '/aɪ/',
      choiceB: '/eɪ/',
      choiceC: '/ɔɪ/',
      correctChoice: 'A',
      explanation: "Từ 'fly' phát âm là /flaɪ/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'noise',
      wordMeaning: 'tiếng ồn',
      fullIpa: '/nɔɪz/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'noise' phát âm là /nɔɪz/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'goat',
      wordMeaning: 'con dê',
      fullIpa: '/ɡəʊt/',
      targetSymbol: '/əʊ/',
      choiceA: '/ɒ/',
      choiceB: '/əʊ/',
      choiceC: '/aʊ/',
      correctChoice: 'B',
      explanation: "Từ 'goat' phát âm là /ɡəʊt/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'owl',
      wordMeaning: 'con cú',
      fullIpa: '/aʊl/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/ɑː/',
      correctChoice: 'B',
      explanation: "Từ 'owl' phát âm là /aʊl/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      spokenWord: 'deer',
      wordMeaning: 'con hươu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/ɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'deer' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 7,
      spokenWord: 'pear',
      wordMeaning: 'quả lê',
      fullIpa: '/peə/',
      targetSymbol: '/eə/',
      choiceA: '/ɪə/',
      choiceB: '/eə/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'pear' phát âm là /peə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 8,
      spokenWord: 'cloud',
      wordMeaning: 'đám mây',
      fullIpa: '/klaʊd/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/əʊ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'cloud' phát âm là /klaʊd/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    }
  ]
};
