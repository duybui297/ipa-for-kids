import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 10 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_10: PracticeExamSet = {
  id: 110,
  title: 'Bộ Đề Âm Đôi 10: Giao thông & Du lịch',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Transport & Travel',
  icon: '🚆',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề giao thông & du lịch. Phiên âm giọng Anh, theo bộ đề Word số 10.',
  exercise1: [
    {
      id: 1,
      wordA: 'tin',
      ipaA: '/tɪn/',
      meaningA: 'hộp thiếc',
      wordB: 'train',
      ipaB: '/treɪn/',
      meaningB: 'tàu hỏa',
      targetAudioWord: 'train',
      correctChoice: 'B',
      explanation: "Cô đọc 'train' /treɪn/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'tin' /tɪn/ có âm /ɪ/."
    },
    {
      id: 2,
      wordA: 'fly',
      ipaA: '/flaɪ/',
      meaningA: 'bay',
      wordB: 'flea',
      ipaB: '/fliː/',
      meaningB: 'con bọ chét',
      targetAudioWord: 'flea',
      correctChoice: 'B',
      explanation: "Cô đọc 'flea' /fliː/ có âm /iː/ (i dài). Còn 'fly' /flaɪ/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'boot',
      ipaA: '/buːt/',
      meaningA: 'đôi bốt',
      wordB: 'boat',
      ipaB: '/bəʊt/',
      meaningB: 'con thuyền',
      targetAudioWord: 'boat',
      correctChoice: 'B',
      explanation: "Cô đọc 'boat' /bəʊt/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'boot' /buːt/ có âm /uː/."
    },
    {
      id: 4,
      wordA: 'lad',
      ipaA: '/læd/',
      meaningA: 'cậu bé',
      wordB: 'loud',
      ipaB: '/laʊd/',
      meaningB: 'to, ồn',
      targetAudioWord: 'loud',
      correctChoice: 'B',
      explanation: "Cô đọc 'loud' /laʊd/ có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/). Còn 'lad' /læd/ có âm /æ/."
    },
    {
      id: 5,
      wordA: 'pair',
      ipaA: '/peə/',
      meaningA: 'một đôi',
      wordB: 'pier',
      ipaB: '/pɪə/',
      meaningB: 'cầu tàu',
      targetAudioWord: 'pier',
      correctChoice: 'B',
      explanation: "Cô đọc 'pier' /pɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'pair' /peə/ có âm /eə/."
    },
    {
      id: 6,
      wordA: 'stars',
      ipaA: '/stɑːz/',
      meaningA: 'những ngôi sao',
      wordB: 'stairs',
      ipaB: '/steəz/',
      meaningB: 'cầu thang',
      targetAudioWord: 'stairs',
      correctChoice: 'B',
      explanation: "Cô đọc 'stairs' /steəz/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'stars' /stɑːz/ có âm /ɑː/."
    },
    {
      id: 7,
      wordA: 'plane',
      ipaA: '/pleɪn/',
      meaningA: 'máy bay',
      wordB: 'plan',
      ipaB: '/plæn/',
      meaningB: 'kế hoạch',
      targetAudioWord: 'plan',
      correctChoice: 'B',
      explanation: "Cô đọc 'plan' /plæn/ có âm /æ/ (a bẹt). Còn 'plane' /pleɪn/ có âm /eɪ/."
    },
    {
      id: 8,
      wordA: 'red',
      ipaA: '/red/',
      meaningA: 'màu đỏ',
      wordB: 'road',
      ipaB: '/rəʊd/',
      meaningB: 'con đường',
      targetAudioWord: 'red',
      correctChoice: 'A',
      explanation: "Cô đọc 'red' /red/ có âm /e/ (e ngắn). Còn 'road' /rəʊd/ có âm /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'toy', ipa: '/tɔɪ/', meaning: 'đồ chơi', symbol: '/ɔɪ/' },
    { id: 'B', word: 'loud', ipa: '/laʊd/', meaning: 'to, ồn', symbol: '/aʊ/' },
    { id: 'C', word: 'pier', ipa: '/pɪə/', meaning: 'cầu tàu', symbol: '/ɪə/' },
    { id: 'D', word: 'stairs', ipa: '/steəz/', meaning: 'cầu thang', symbol: '/eə/' },
    { id: 'E', word: 'drive', ipa: '/draɪv/', meaning: 'lái xe', symbol: '/aɪ/' },
    { id: 'F', word: 'boat', ipa: '/bəʊt/', meaning: 'con thuyền', symbol: '/əʊ/' },
    { id: 'G', word: 'train', ipa: '/treɪn/', meaning: 'tàu hỏa', symbol: '/eɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'G', word: 'train', explanation: "Âm /eɪ/ có trong từ 'train' /treɪn/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'E', word: 'drive', explanation: "Âm /aɪ/ có trong từ 'drive' /draɪv/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'A', word: 'toy', explanation: "Âm /ɔɪ/ có trong từ 'toy' /tɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'F', word: 'boat', explanation: "Âm /əʊ/ có trong từ 'boat' /bəʊt/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'B', word: 'loud', explanation: "Âm /aʊ/ có trong từ 'loud' /laʊd/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'C', word: 'pier', explanation: "Âm /ɪə/ có trong từ 'pier' /pɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'D', word: 'stairs', explanation: "Âm /eə/ có trong từ 'stairs' /steəz/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'road', ipa: '/rəʊd/', targetSymbol: '/əʊ/', meaning: 'con đường' },
      { word: 'way', ipa: '/weɪ/', targetSymbol: '/eɪ/', meaning: 'con đường, lối đi' },
      { word: 'slow', ipa: '/sləʊ/', targetSymbol: '/əʊ/', meaning: 'chậm' },
      { word: 'fly', ipa: '/flaɪ/', targetSymbol: '/aɪ/', meaning: 'bay' },
      { word: 'town', ipa: '/taʊn/', targetSymbol: '/aʊ/', meaning: 'thị trấn' },
      { word: 'go', ipa: '/ɡəʊ/', targetSymbol: '/əʊ/', meaning: 'đi' },
      { word: 'wide', ipa: '/waɪd/', targetSymbol: '/aɪ/', meaning: 'rộng' },
      { word: 'bye', ipa: '/baɪ/', targetSymbol: '/aɪ/', meaning: 'tạm biệt' },
      { word: 'found', ipa: '/faʊnd/', targetSymbol: '/aʊ/', meaning: 'đã tìm thấy' },
      { word: 'round', ipa: '/raʊnd/', targetSymbol: '/aʊ/', meaning: 'tròn' },
      { word: 'lane', ipa: '/leɪn/', targetSymbol: '/eɪ/', meaning: 'làn đường' },
      { word: 'plane', ipa: '/pleɪn/', targetSymbol: '/eɪ/', meaning: 'máy bay' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['plane', 'way', 'lane'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['fly', 'bye', 'wide'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['road', 'slow', 'go'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['town', 'found', 'round'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'steer', ipa: '/stɪə/', targetSymbol: '/ɪə/', meaning: 'cầm lái' },
      { word: 'care', ipa: '/keə/', targetSymbol: '/eə/', meaning: 'chăm sóc' },
      { word: 'air', ipa: '/eə/', targetSymbol: '/eə/', meaning: 'không khí' },
      { word: 'noise', ipa: '/nɔɪz/', targetSymbol: '/ɔɪ/', meaning: 'tiếng ồn' },
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' },
      { word: 'oil', ipa: '/ɔɪl/', targetSymbol: '/ɔɪ/', meaning: 'dầu' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'point', ipa: '/pɔɪnt/', targetSymbol: '/ɔɪ/', meaning: 'chỉ tay, điểm' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['noise', 'oil', 'point'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['steer', 'here', 'near'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['chair', 'air', 'care'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'here',
      templateIpa: '/h_/',
      meaning: 'ở đây',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'B',
      fullIpa: '/hɪə/',
      explanation: "Từ 'here' đọc là /hɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 2,
      word: 'care',
      templateIpa: '/k_/',
      meaning: 'chăm sóc',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'B',
      fullIpa: '/keə/',
      explanation: "Từ 'care' đọc là /keə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 3,
      word: 'toy',
      templateIpa: '/t_/',
      meaning: 'đồ chơi',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/tɔɪ/',
      explanation: "Từ 'toy' đọc là /tɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 4,
      word: 'point',
      templateIpa: '/p_nt/',
      meaning: 'chỉ tay, điểm',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/pɔɪnt/',
      explanation: "Từ 'point' đọc là /pɔɪnt/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 5,
      word: 'bye',
      templateIpa: '/b_/',
      meaning: 'tạm biệt',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/baɪ/',
      explanation: "Từ 'bye' đọc là /baɪ/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 6,
      word: 'plane',
      templateIpa: '/pl_n/',
      meaning: 'máy bay',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/pleɪn/',
      explanation: "Từ 'plane' đọc là /pleɪn/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 7,
      word: 'boat',
      templateIpa: '/b_t/',
      meaning: 'con thuyền',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/bəʊt/',
      explanation: "Từ 'boat' đọc là /bəʊt/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 8,
      word: 'town',
      templateIpa: '/t_n/',
      meaning: 'thị trấn',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/taʊn/',
      explanation: "Từ 'town' đọc là /taʊn/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'stairs', ipa: '/steəz/', vowelSound: '/eə/', meaning: 'cầu thang' },
        { letter: 'B', word: 'air', ipa: '/eə/', vowelSound: '/eə/', meaning: 'không khí' },
        { letter: 'C', word: 'care', ipa: '/keə/', vowelSound: '/eə/', meaning: 'chăm sóc' },
        { letter: 'D', word: 'steer', ipa: '/stɪə/', vowelSound: '/ɪə/', meaning: 'cầm lái' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'steer' mang âm /ɪə/. Còn stairs, air, care đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'drive', ipa: '/draɪv/', vowelSound: '/aɪ/', meaning: 'lái xe' },
        { letter: 'B', word: 'fly', ipa: '/flaɪ/', vowelSound: '/aɪ/', meaning: 'bay' },
        { letter: 'C', word: 'wide', ipa: '/waɪd/', vowelSound: '/aɪ/', meaning: 'rộng' },
        { letter: 'D', word: 'way', ipa: '/weɪ/', vowelSound: '/eɪ/', meaning: 'con đường, lối đi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'way' mang âm /eɪ/. Còn drive, fly, wide đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'plane', ipa: '/pleɪn/', vowelSound: '/eɪ/', meaning: 'máy bay' },
        { letter: 'B', word: 'train', ipa: '/treɪn/', vowelSound: '/eɪ/', meaning: 'tàu hỏa' },
        { letter: 'C', word: 'wide', ipa: '/waɪd/', vowelSound: '/aɪ/', meaning: 'rộng' },
        { letter: 'D', word: 'way', ipa: '/weɪ/', vowelSound: '/eɪ/', meaning: 'con đường, lối đi' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'wide' mang âm /aɪ/. Còn plane, train, way đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' },
        { letter: 'B', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' },
        { letter: 'C', word: 'pier', ipa: '/pɪə/', vowelSound: '/ɪə/', meaning: 'cầu tàu' },
        { letter: 'D', word: 'stairs', ipa: '/steəz/', vowelSound: '/eə/', meaning: 'cầu thang' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'stairs' mang âm /eə/. Còn here, near, pier đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'boat', ipa: '/bəʊt/', vowelSound: '/əʊ/', meaning: 'con thuyền' },
        { letter: 'B', word: 'go', ipa: '/ɡəʊ/', vowelSound: '/əʊ/', meaning: 'đi' },
        { letter: 'C', word: 'slow', ipa: '/sləʊ/', vowelSound: '/əʊ/', meaning: 'chậm' },
        { letter: 'D', word: 'town', ipa: '/taʊn/', vowelSound: '/aʊ/', meaning: 'thị trấn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'town' mang âm /aʊ/. Còn boat, go, slow đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'B', word: 'noise', ipa: '/nɔɪz/', vowelSound: '/ɔɪ/', meaning: 'tiếng ồn' },
        { letter: 'C', word: 'oil', ipa: '/ɔɪl/', vowelSound: '/ɔɪ/', meaning: 'dầu' },
        { letter: 'D', word: 'slow', ipa: '/sləʊ/', vowelSound: '/əʊ/', meaning: 'chậm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'slow' mang âm /əʊ/. Còn toy, noise, oil đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'found',
      wordMeaning: 'đã tìm thấy',
      fullIpa: '/faʊnd/',
      targetSymbol: '/aʊ/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/aʊ/',
      correctChoice: 'C',
      explanation: "Từ 'found' phát âm là /faʊnd/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 2,
      spokenWord: 'chair',
      wordMeaning: 'cái ghế',
      fullIpa: '/tʃeə/',
      targetSymbol: '/eə/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/ɪə/',
      correctChoice: 'A',
      explanation: "Từ 'chair' phát âm là /tʃeə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 3,
      spokenWord: 'wide',
      wordMeaning: 'rộng',
      fullIpa: '/waɪd/',
      targetSymbol: '/aɪ/',
      choiceA: '/eə/',
      choiceB: '/aɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'B',
      explanation: "Từ 'wide' phát âm là /waɪd/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'stairs',
      wordMeaning: 'cầu thang',
      fullIpa: '/steəz/',
      targetSymbol: '/eə/',
      choiceA: '/aɪ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'B',
      explanation: "Từ 'stairs' phát âm là /steəz/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'toy',
      wordMeaning: 'đồ chơi',
      fullIpa: '/tɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/əʊ/',
      choiceB: '/ɔː/',
      choiceC: '/ɔɪ/',
      correctChoice: 'C',
      explanation: "Từ 'toy' phát âm là /tɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 6,
      spokenWord: 'way',
      wordMeaning: 'con đường, lối đi',
      fullIpa: '/weɪ/',
      targetSymbol: '/eɪ/',
      choiceA: '/aɪ/',
      choiceB: '/aʊ/',
      choiceC: '/eɪ/',
      correctChoice: 'C',
      explanation: "Từ 'way' phát âm là /weɪ/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'road',
      wordMeaning: 'con đường',
      fullIpa: '/rəʊd/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɪə/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'road' phát âm là /rəʊd/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 8,
      spokenWord: 'near',
      wordMeaning: 'gần',
      fullIpa: '/nɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eɪ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'near' phát âm là /nɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    }
  ]
};
