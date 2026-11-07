import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 01 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_1: PracticeExamSet = {
  id: 101,
  title: 'Bộ Đề Âm Đôi 01: Cơ bản',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/, /ʊə/',
  badge: 'Âm đôi',
  topic: 'Diphthongs Basics',
  icon: '🔤',
  description: 'Luyện 8 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/, /ʊə/ qua chủ đề cơ bản. Phiên âm giọng Anh, theo bộ đề Word số 01.',
  exercise1: [
    {
      id: 1,
      wordA: 'now',
      ipaA: '/naʊ/',
      meaningA: 'bây giờ',
      wordB: 'no',
      ipaB: '/nəʊ/',
      meaningB: 'không',
      targetAudioWord: 'no',
      correctChoice: 'B',
      explanation: "Cô đọc 'no' /nəʊ/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'now' /naʊ/ có âm /aʊ/."
    },
    {
      id: 2,
      wordA: 'here',
      ipaA: '/hɪə/',
      meaningA: 'ở đây',
      wordB: 'hair',
      ipaB: '/heə/',
      meaningB: 'mái tóc',
      targetAudioWord: 'here',
      correctChoice: 'A',
      explanation: "Cô đọc 'here' /hɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'hair' /heə/ có âm /eə/."
    },
    {
      id: 3,
      wordA: 'my',
      ipaA: '/maɪ/',
      meaningA: 'của tôi',
      wordB: 'day',
      ipaB: '/deɪ/',
      meaningB: 'ngày',
      targetAudioWord: 'day',
      correctChoice: 'B',
      explanation: "Cô đọc 'day' /deɪ/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'my' /maɪ/ có âm /aɪ/."
    },
    {
      id: 4,
      wordA: 'cake',
      ipaA: '/keɪk/',
      meaningA: 'bánh ngọt',
      wordB: 'kite',
      ipaB: '/kaɪt/',
      meaningB: 'con diều',
      targetAudioWord: 'kite',
      correctChoice: 'B',
      explanation: "Cô đọc 'kite' /kaɪt/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'cake' /keɪk/ có âm /eɪ/."
    },
    {
      id: 5,
      wordA: 'go',
      ipaA: '/ɡəʊ/',
      meaningA: 'đi',
      wordB: 'cow',
      ipaB: '/kaʊ/',
      meaningB: 'con bò sữa',
      targetAudioWord: 'go',
      correctChoice: 'A',
      explanation: "Cô đọc 'go' /ɡəʊ/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'cow' /kaʊ/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'pen',
      ipaA: '/pen/',
      meaningA: 'cây bút',
      wordB: 'plane',
      ipaB: '/pleɪn/',
      meaningB: 'máy bay',
      targetAudioWord: 'plane',
      correctChoice: 'B',
      explanation: "Cô đọc 'plane' /pleɪn/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'pen' /pen/ có âm /e/."
    },
    {
      id: 7,
      wordA: 'hot',
      ipaA: '/hɒt/',
      meaningA: 'nóng',
      wordB: 'home',
      ipaB: '/həʊm/',
      meaningB: 'nhà',
      targetAudioWord: 'hot',
      correctChoice: 'A',
      explanation: "Cô đọc 'hot' /hɒt/ có âm /ɒ/ (o ngắn). Còn 'home' /həʊm/ có âm /əʊ/."
    },
    {
      id: 8,
      wordA: 'toy',
      ipaA: '/tɔɪ/',
      meaningA: 'đồ chơi',
      wordB: 'tour',
      ipaB: '/tʊə/',
      meaningB: 'chuyến tham quan',
      targetAudioWord: 'tour',
      correctChoice: 'B',
      explanation: "Cô đọc 'tour' /tʊə/ có âm /ʊə/ (môi tròn lỏng rồi thả lỏng về /ə/ (âm hiếm)). Còn 'toy' /tɔɪ/ có âm /ɔɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'bike', ipa: '/baɪk/', meaning: 'xe đạp', symbol: '/aɪ/' },
    { id: 'B', word: 'nose', ipa: '/nəʊz/', meaning: 'cái mũi', symbol: '/əʊ/' },
    { id: 'C', word: 'toy', ipa: '/tɔɪ/', meaning: 'đồ chơi', symbol: '/ɔɪ/' },
    { id: 'D', word: 'house', ipa: '/haʊs/', meaning: 'ngôi nhà', symbol: '/aʊ/' },
    { id: 'E', word: 'chair', ipa: '/tʃeə/', meaning: 'cái ghế', symbol: '/eə/' },
    { id: 'F', word: 'deer', ipa: '/dɪə/', meaning: 'con hươu', symbol: '/ɪə/' },
    { id: 'G', word: 'rain', ipa: '/reɪn/', meaning: 'mưa', symbol: '/eɪ/' },
    { id: 'H', word: 'tour', ipa: '/tʊə/', meaning: 'chuyến tham quan', symbol: '/ʊə/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'G', word: 'rain', explanation: "Âm /eɪ/ có trong từ 'rain' /reɪn/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'A', word: 'bike', explanation: "Âm /aɪ/ có trong từ 'bike' /baɪk/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'C', word: 'toy', explanation: "Âm /ɔɪ/ có trong từ 'toy' /tɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'B', word: 'nose', explanation: "Âm /əʊ/ có trong từ 'nose' /nəʊz/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'D', word: 'house', explanation: "Âm /aʊ/ có trong từ 'house' /haʊs/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'F', word: 'deer', explanation: "Âm /ɪə/ có trong từ 'deer' /dɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'E', word: 'chair', explanation: "Âm /eə/ có trong từ 'chair' /tʃeə/: bắt đầu như /e/ rồi thả lỏng về /ə/." },
    { symbol: '/ʊə/', targetWordId: 'H', word: 'tour', explanation: "Âm /ʊə/ có trong từ 'tour' /tʊə/: môi tròn lỏng rồi thả lỏng về /ə/ (âm hiếm)." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'rain', ipa: '/reɪn/', targetSymbol: '/eɪ/', meaning: 'mưa' },
      { word: 'go', ipa: '/ɡəʊ/', targetSymbol: '/əʊ/', meaning: 'đi' },
      { word: 'my', ipa: '/maɪ/', targetSymbol: '/aɪ/', meaning: 'của tôi' },
      { word: 'now', ipa: '/naʊ/', targetSymbol: '/aʊ/', meaning: 'bây giờ' },
      { word: 'cake', ipa: '/keɪk/', targetSymbol: '/eɪ/', meaning: 'bánh ngọt' },
      { word: 'house', ipa: '/haʊs/', targetSymbol: '/aʊ/', meaning: 'ngôi nhà' },
      { word: 'bike', ipa: '/baɪk/', targetSymbol: '/aɪ/', meaning: 'xe đạp' },
      { word: 'nose', ipa: '/nəʊz/', targetSymbol: '/əʊ/', meaning: 'cái mũi' },
      { word: 'cow', ipa: '/kaʊ/', targetSymbol: '/aʊ/', meaning: 'con bò sữa' },
      { word: 'day', ipa: '/deɪ/', targetSymbol: '/eɪ/', meaning: 'ngày' },
      { word: 'five', ipa: '/faɪv/', targetSymbol: '/aɪ/', meaning: 'số năm' },
      { word: 'home', ipa: '/həʊm/', targetSymbol: '/əʊ/', meaning: 'nhà' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['rain', 'cake', 'day'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['my', 'bike', 'five'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['go', 'nose', 'home'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['now', 'house', 'cow'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 4 ngôi nhà /ɔɪ/, /ɪə/, /eə/, /ʊə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'ear', ipa: '/ɪə/', targetSymbol: '/ɪə/', meaning: 'cái tai' },
      { word: 'tour', ipa: '/tʊə/', targetSymbol: '/ʊə/', meaning: 'chuyến tham quan' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'hair', ipa: '/heə/', targetSymbol: '/eə/', meaning: 'mái tóc' },
      { word: 'coin', ipa: '/kɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'đồng xu' },
      { word: 'pure', ipa: '/pjʊə/', targetSymbol: '/ʊə/', meaning: 'tinh khiết' },
      { word: 'bear', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'con gấu' },
      { word: 'boy', ipa: '/bɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'cậu bé' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'poor', ipa: '/pʊə/', targetSymbol: '/ʊə/', meaning: 'nghèo' },
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['toy', 'coin', 'boy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['ear', 'near', 'here'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['hair', 'bear', 'chair'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' },
      { symbol: '/ʊə/', soundName: 'Nhà ua', words: ['tour', 'pure', 'poor'], color: 'text-orange-700', borderColor: 'border-orange-300', bgLight: 'bg-orange-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'day',
      templateIpa: '/d_/',
      meaning: 'ngày',
      choiceA: 'eɪ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/deɪ/',
      explanation: "Từ 'day' đọc là /deɪ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 2,
      word: 'bike',
      templateIpa: '/b_k/',
      meaning: 'xe đạp',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/baɪk/',
      explanation: "Từ 'bike' đọc là /baɪk/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
      word: 'toy',
      templateIpa: '/t_/',
      meaning: 'đồ chơi',
      choiceA: 'aɪ',
      choiceB: 'ɔɪ',
      correctChoice: 'B',
      fullIpa: '/tɔɪ/',
      explanation: "Từ 'toy' đọc là /tɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 4,
      word: 'nose',
      templateIpa: '/n_z/',
      meaning: 'cái mũi',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/nəʊz/',
      explanation: "Từ 'nose' đọc là /nəʊz/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'cow',
      templateIpa: '/k_/',
      meaning: 'con bò sữa',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/kaʊ/',
      explanation: "Từ 'cow' đọc là /kaʊ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'ear',
      templateIpa: '/_/',
      meaning: 'cái tai',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/ɪə/',
      explanation: "Từ 'ear' đọc là /ɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 7,
      word: 'hair',
      templateIpa: '/h_/',
      meaning: 'mái tóc',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/heə/',
      explanation: "Từ 'hair' đọc là /heə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 8,
      word: 'tour',
      templateIpa: '/t_/',
      meaning: 'chuyến tham quan',
      choiceA: 'ɔː',
      choiceB: 'ʊə',
      correctChoice: 'B',
      fullIpa: '/tʊə/',
      explanation: "Từ 'tour' đọc là /tʊə/, có âm /ʊə/ (môi tròn lỏng rồi thả lỏng về /ə/ (âm hiếm)), nên chọn ʊə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'day', ipa: '/deɪ/', vowelSound: '/eɪ/', meaning: 'ngày' },
        { letter: 'B', word: 'cake', ipa: '/keɪk/', vowelSound: '/eɪ/', meaning: 'bánh ngọt' },
        { letter: 'C', word: 'my', ipa: '/maɪ/', vowelSound: '/aɪ/', meaning: 'của tôi' },
        { letter: 'D', word: 'rain', ipa: '/reɪn/', vowelSound: '/eɪ/', meaning: 'mưa' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'my' mang âm /aɪ/. Còn day, cake, rain đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'go', ipa: '/ɡəʊ/', vowelSound: '/əʊ/', meaning: 'đi' },
        { letter: 'B', word: 'now', ipa: '/naʊ/', vowelSound: '/aʊ/', meaning: 'bây giờ' },
        { letter: 'C', word: 'home', ipa: '/həʊm/', vowelSound: '/əʊ/', meaning: 'nhà' },
        { letter: 'D', word: 'nose', ipa: '/nəʊz/', vowelSound: '/əʊ/', meaning: 'cái mũi' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'now' mang âm /aʊ/. Còn go, home, nose đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'bike', ipa: '/baɪk/', vowelSound: '/aɪ/', meaning: 'xe đạp' },
        { letter: 'B', word: 'five', ipa: '/faɪv/', vowelSound: '/aɪ/', meaning: 'số năm' },
        { letter: 'C', word: 'kite', ipa: '/kaɪt/', vowelSound: '/aɪ/', meaning: 'con diều' },
        { letter: 'D', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'toy' mang âm /ɔɪ/. Còn bike, five, kite đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' },
        { letter: 'B', word: 'hair', ipa: '/heə/', vowelSound: '/eə/', meaning: 'mái tóc' },
        { letter: 'C', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' },
        { letter: 'D', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'hair' mang âm /eə/. Còn ear, here, near đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'house', ipa: '/haʊs/', vowelSound: '/aʊ/', meaning: 'ngôi nhà' },
        { letter: 'B', word: 'cow', ipa: '/kaʊ/', vowelSound: '/aʊ/', meaning: 'con bò sữa' },
        { letter: 'C', word: 'down', ipa: '/daʊn/', vowelSound: '/aʊ/', meaning: 'xuống' },
        { letter: 'D', word: 'no', ipa: '/nəʊ/', vowelSound: '/əʊ/', meaning: 'không' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'no' mang âm /əʊ/. Còn house, cow, down đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'poor', ipa: '/pʊə/', vowelSound: '/ʊə/', meaning: 'nghèo' },
        { letter: 'B', word: 'chair', ipa: '/tʃeə/', vowelSound: '/eə/', meaning: 'cái ghế' },
        { letter: 'C', word: 'bear', ipa: '/beə/', vowelSound: '/eə/', meaning: 'con gấu' },
        { letter: 'D', word: 'hair', ipa: '/heə/', vowelSound: '/eə/', meaning: 'mái tóc' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'poor' mang âm /ʊə/. Còn chair, bear, hair đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'day',
      wordMeaning: 'ngày',
      fullIpa: '/deɪ/',
      targetSymbol: '/eɪ/',
      choiceA: '/e/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'day' phát âm là /deɪ/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      spokenWord: 'bike',
      wordMeaning: 'xe đạp',
      fullIpa: '/baɪk/',
      targetSymbol: '/aɪ/',
      choiceA: '/aɪ/',
      choiceB: '/eɪ/',
      choiceC: '/ɪ/',
      correctChoice: 'A',
      explanation: "Từ 'bike' phát âm là /baɪk/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'boy',
      wordMeaning: 'cậu bé',
      fullIpa: '/bɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/ɔɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'boy' phát âm là /bɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'go',
      wordMeaning: 'đi',
      fullIpa: '/ɡəʊ/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɒ/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'go' phát âm là /ɡəʊ/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'house',
      wordMeaning: 'ngôi nhà',
      fullIpa: '/haʊs/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɑː/',
      choiceC: '/aʊ/',
      correctChoice: 'C',
      explanation: "Từ 'house' phát âm là /haʊs/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      spokenWord: 'near',
      wordMeaning: 'gần',
      fullIpa: '/nɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/ɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'near' phát âm là /nɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 7,
      spokenWord: 'chair',
      wordMeaning: 'cái ghế',
      fullIpa: '/tʃeə/',
      targetSymbol: '/eə/',
      choiceA: '/ɪə/',
      choiceB: '/eə/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'chair' phát âm là /tʃeə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 8,
      spokenWord: 'pure',
      wordMeaning: 'tinh khiết',
      fullIpa: '/pjʊə/',
      targetSymbol: '/ʊə/',
      choiceA: '/ʊə/',
      choiceB: '/uː/',
      choiceC: '/ɔː/',
      correctChoice: 'A',
      explanation: "Từ 'pure' phát âm là /pjʊə/, có nguyên âm đôi /ʊə/ (môi tròn lỏng rồi thả lỏng về /ə/ (âm hiếm))."
    }
  ]
};
