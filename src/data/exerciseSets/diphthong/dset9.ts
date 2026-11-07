import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 09 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_9: PracticeExamSet = {
  id: 109,
  title: 'Bộ Đề Âm Đôi 09: Thể thao & Hành động',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Sports & Actions',
  icon: '⚽',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề thể thao & hành động. Phiên âm giọng Anh, theo bộ đề Word số 09.',
  exercise1: [
    {
      id: 1,
      wordA: 'rice',
      ipaA: '/raɪs/',
      meaningA: 'cơm, gạo',
      wordB: 'race',
      ipaB: '/reɪs/',
      meaningB: 'cuộc đua',
      targetAudioWord: 'race',
      correctChoice: 'B',
      explanation: "Cô đọc 'race' /reɪs/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'rice' /raɪs/ có âm /aɪ/."
    },
    {
      id: 2,
      wordA: 'back',
      ipaA: '/bæk/',
      meaningA: 'phía sau',
      wordB: 'bike',
      ipaB: '/baɪk/',
      meaningB: 'xe đạp',
      targetAudioWord: 'back',
      correctChoice: 'A',
      explanation: "Cô đọc 'back' /bæk/ có âm /æ/ (a bẹt). Còn 'bike' /baɪk/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'paint',
      ipaA: '/peɪnt/',
      meaningA: 'sơn, vẽ',
      wordB: 'point',
      ipaB: '/pɔɪnt/',
      meaningB: 'chỉ tay, điểm',
      targetAudioWord: 'paint',
      correctChoice: 'A',
      explanation: "Cô đọc 'paint' /peɪnt/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'point' /pɔɪnt/ có âm /ɔɪ/."
    },
    {
      id: 4,
      wordA: 'gull',
      ipaA: '/ɡʌl/',
      meaningA: 'chim mòng biển',
      wordB: 'goal',
      ipaB: '/ɡəʊl/',
      meaningB: 'bàn thắng',
      targetAudioWord: 'gull',
      correctChoice: 'A',
      explanation: "Cô đọc 'gull' /ɡʌl/ có âm /ʌ/ (ă ngắn). Còn 'goal' /ɡəʊl/ có âm /əʊ/."
    },
    {
      id: 5,
      wordA: 'ground',
      ipaA: '/ɡraʊnd/',
      meaningA: 'mặt đất',
      wordB: 'grand',
      ipaB: '/ɡrænd/',
      meaningB: 'to lớn',
      targetAudioWord: 'grand',
      correctChoice: 'B',
      explanation: "Cô đọc 'grand' /ɡrænd/ có âm /æ/ (a bẹt). Còn 'ground' /ɡraʊnd/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'chair',
      ipaA: '/tʃeə/',
      meaningA: 'cái ghế',
      wordB: 'cheer',
      ipaB: '/tʃɪə/',
      meaningB: 'cổ vũ',
      targetAudioWord: 'chair',
      correctChoice: 'A',
      explanation: "Cô đọc 'chair' /tʃeə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'cheer' /tʃɪə/ có âm /ɪə/."
    },
    {
      id: 7,
      wordA: 'fear',
      ipaA: '/fɪə/',
      meaningA: 'nỗi sợ',
      wordB: 'fair',
      ipaB: '/feə/',
      meaningB: 'hội chợ, công bằng',
      targetAudioWord: 'fair',
      correctChoice: 'B',
      explanation: "Cô đọc 'fair' /feə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'fear' /fɪə/ có âm /ɪə/."
    },
    {
      id: 8,
      wordA: 'throw',
      ipaA: '/θrəʊ/',
      meaningA: 'ném',
      wordB: 'three',
      ipaB: '/θriː/',
      meaningB: 'số ba',
      targetAudioWord: 'three',
      correctChoice: 'B',
      explanation: "Cô đọc 'three' /θriː/ có âm /iː/ (i dài). Còn 'throw' /θrəʊ/ có âm /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'fair', ipa: '/feə/', meaning: 'hội chợ, công bằng', symbol: '/eə/' },
    { id: 'B', word: 'ride', ipa: '/raɪd/', meaning: 'cưỡi, đạp xe', symbol: '/aɪ/' },
    { id: 'C', word: 'skate', ipa: '/skeɪt/', meaning: 'trượt patin', symbol: '/eɪ/' },
    { id: 'D', word: 'join', ipa: '/dʒɔɪn/', meaning: 'tham gia', symbol: '/ɔɪ/' },
    { id: 'E', word: 'goal', ipa: '/ɡəʊl/', meaning: 'bàn thắng', symbol: '/əʊ/' },
    { id: 'F', word: 'ground', ipa: '/ɡraʊnd/', meaning: 'mặt đất', symbol: '/aʊ/' },
    { id: 'G', word: 'cheer', ipa: '/tʃɪə/', meaning: 'cổ vũ', symbol: '/ɪə/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'C', word: 'skate', explanation: "Âm /eɪ/ có trong từ 'skate' /skeɪt/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'B', word: 'ride', explanation: "Âm /aɪ/ có trong từ 'ride' /raɪd/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'D', word: 'join', explanation: "Âm /ɔɪ/ có trong từ 'join' /dʒɔɪn/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'E', word: 'goal', explanation: "Âm /əʊ/ có trong từ 'goal' /ɡəʊl/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'F', word: 'ground', explanation: "Âm /aʊ/ có trong từ 'ground' /ɡraʊnd/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'G', word: 'cheer', explanation: "Âm /ɪə/ có trong từ 'cheer' /tʃɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'A', word: 'fair', explanation: "Âm /eə/ có trong từ 'fair' /feə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'game', ipa: '/ɡeɪm/', targetSymbol: '/eɪ/', meaning: 'trò chơi' },
      { word: 'pole', ipa: '/pəʊl/', targetSymbol: '/əʊ/', meaning: 'cây cột' },
      { word: 'out', ipa: '/aʊt/', targetSymbol: '/aʊ/', meaning: 'ra ngoài' },
      { word: 'crowd', ipa: '/kraʊd/', targetSymbol: '/aʊ/', meaning: 'đám đông' },
      { word: 'race', ipa: '/reɪs/', targetSymbol: '/eɪ/', meaning: 'cuộc đua' },
      { word: 'throw', ipa: '/θrəʊ/', targetSymbol: '/əʊ/', meaning: 'ném' },
      { word: 'coach', ipa: '/kəʊtʃ/', targetSymbol: '/əʊ/', meaning: 'huấn luyện viên' },
      { word: 'kite', ipa: '/kaɪt/', targetSymbol: '/aɪ/', meaning: 'con diều' },
      { word: 'bounce', ipa: '/baʊns/', targetSymbol: '/aʊ/', meaning: 'nảy lên' },
      { word: 'chase', ipa: '/tʃeɪs/', targetSymbol: '/eɪ/', meaning: 'đuổi bắt' },
      { word: 'bike', ipa: '/baɪk/', targetSymbol: '/aɪ/', meaning: 'xe đạp' },
      { word: 'dive', ipa: '/daɪv/', targetSymbol: '/aɪ/', meaning: 'lặn, nhảy cắm đầu' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['race', 'game', 'chase'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['bike', 'kite', 'dive'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['throw', 'coach', 'pole'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['crowd', 'bounce', 'out'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'point', ipa: '/pɔɪnt/', targetSymbol: '/ɔɪ/', meaning: 'chỉ tay, điểm' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'pair', ipa: '/peə/', targetSymbol: '/eə/', meaning: 'một đôi' },
      { word: 'boy', ipa: '/bɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'cậu bé' },
      { word: 'gear', ipa: '/ɡɪə/', targetSymbol: '/ɪə/', meaning: 'đồ dùng, bánh răng' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' },
      { word: 'steer', ipa: '/stɪə/', targetSymbol: '/ɪə/', meaning: 'cầm lái' },
      { word: 'coin', ipa: '/kɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'đồng xu' },
      { word: 'square', ipa: '/skweə/', targetSymbol: '/eə/', meaning: 'hình vuông' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['point', 'coin', 'boy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['gear', 'steer', 'near'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['square', 'pair', 'chair'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'gear',
      templateIpa: '/ɡ_/',
      meaning: 'đồ dùng, bánh răng',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/ɡɪə/',
      explanation: "Từ 'gear' đọc là /ɡɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 2,
      word: 'coin',
      templateIpa: '/k_n/',
      meaning: 'đồng xu',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/kɔɪn/',
      explanation: "Từ 'coin' đọc là /kɔɪn/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 3,
      word: 'chair',
      templateIpa: '/tʃ_/',
      meaning: 'cái ghế',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'B',
      fullIpa: '/tʃeə/',
      explanation: "Từ 'chair' đọc là /tʃeə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 4,
      word: 'pole',
      templateIpa: '/p_l/',
      meaning: 'cây cột',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/pəʊl/',
      explanation: "Từ 'pole' đọc là /pəʊl/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'ground',
      templateIpa: '/ɡr_nd/',
      meaning: 'mặt đất',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/ɡraʊnd/',
      explanation: "Từ 'ground' đọc là /ɡraʊnd/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'skate',
      templateIpa: '/sk_t/',
      meaning: 'trượt patin',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/skeɪt/',
      explanation: "Từ 'skate' đọc là /skeɪt/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 7,
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
      id: 8,
      word: 'pair',
      templateIpa: '/p_/',
      meaning: 'một đôi',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/peə/',
      explanation: "Từ 'pair' đọc là /peə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'ride', ipa: '/raɪd/', vowelSound: '/aɪ/', meaning: 'cưỡi, đạp xe' },
        { letter: 'B', word: 'kite', ipa: '/kaɪt/', vowelSound: '/aɪ/', meaning: 'con diều' },
        { letter: 'C', word: 'dive', ipa: '/daɪv/', vowelSound: '/aɪ/', meaning: 'lặn, nhảy cắm đầu' },
        { letter: 'D', word: 'skate', ipa: '/skeɪt/', vowelSound: '/eɪ/', meaning: 'trượt patin' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'skate' mang âm /eɪ/. Còn ride, kite, dive đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'cheer', ipa: '/tʃɪə/', vowelSound: '/ɪə/', meaning: 'cổ vũ' },
        { letter: 'B', word: 'gear', ipa: '/ɡɪə/', vowelSound: '/ɪə/', meaning: 'đồ dùng, bánh răng' },
        { letter: 'C', word: 'square', ipa: '/skweə/', vowelSound: '/eə/', meaning: 'hình vuông' },
        { letter: 'D', word: 'steer', ipa: '/stɪə/', vowelSound: '/ɪə/', meaning: 'cầm lái' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'square' mang âm /eə/. Còn cheer, gear, steer đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'coach', ipa: '/kəʊtʃ/', vowelSound: '/əʊ/', meaning: 'huấn luyện viên' },
        { letter: 'B', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'C', word: 'coin', ipa: '/kɔɪn/', vowelSound: '/ɔɪ/', meaning: 'đồng xu' },
        { letter: 'D', word: 'point', ipa: '/pɔɪnt/', vowelSound: '/ɔɪ/', meaning: 'chỉ tay, điểm' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'coach' mang âm /əʊ/. Còn boy, coin, point đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'pole', ipa: '/pəʊl/', vowelSound: '/əʊ/', meaning: 'cây cột' },
        { letter: 'B', word: 'goal', ipa: '/ɡəʊl/', vowelSound: '/əʊ/', meaning: 'bàn thắng' },
        { letter: 'C', word: 'throw', ipa: '/θrəʊ/', vowelSound: '/əʊ/', meaning: 'ném' },
        { letter: 'D', word: 'out', ipa: '/aʊt/', vowelSound: '/aʊ/', meaning: 'ra ngoài' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'out' mang âm /aʊ/. Còn pole, goal, throw đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'bounce', ipa: '/baʊns/', vowelSound: '/aʊ/', meaning: 'nảy lên' },
        { letter: 'B', word: 'out', ipa: '/aʊt/', vowelSound: '/aʊ/', meaning: 'ra ngoài' },
        { letter: 'C', word: 'goal', ipa: '/ɡəʊl/', vowelSound: '/əʊ/', meaning: 'bàn thắng' },
        { letter: 'D', word: 'crowd', ipa: '/kraʊd/', vowelSound: '/aʊ/', meaning: 'đám đông' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'goal' mang âm /əʊ/. Còn bounce, out, crowd đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'race', ipa: '/reɪs/', vowelSound: '/eɪ/', meaning: 'cuộc đua' },
        { letter: 'B', word: 'skate', ipa: '/skeɪt/', vowelSound: '/eɪ/', meaning: 'trượt patin' },
        { letter: 'C', word: 'chase', ipa: '/tʃeɪs/', vowelSound: '/eɪ/', meaning: 'đuổi bắt' },
        { letter: 'D', word: 'bike', ipa: '/baɪk/', vowelSound: '/aɪ/', meaning: 'xe đạp' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bike' mang âm /aɪ/. Còn race, skate, chase đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'goal',
      wordMeaning: 'bàn thắng',
      fullIpa: '/ɡəʊl/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɪə/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'goal' phát âm là /ɡəʊl/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 2,
      spokenWord: 'crowd',
      wordMeaning: 'đám đông',
      fullIpa: '/kraʊd/',
      targetSymbol: '/aʊ/',
      choiceA: '/ɔɪ/',
      choiceB: '/aʊ/',
      choiceC: '/əʊ/',
      correctChoice: 'B',
      explanation: "Từ 'crowd' phát âm là /kraʊd/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      spokenWord: 'race',
      wordMeaning: 'cuộc đua',
      fullIpa: '/reɪs/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/aɪ/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'race' phát âm là /reɪs/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'steer',
      wordMeaning: 'cầm lái',
      fullIpa: '/stɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/ɪə/',
      choiceB: '/eə/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'steer' phát âm là /stɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'kite',
      wordMeaning: 'con diều',
      fullIpa: '/kaɪt/',
      targetSymbol: '/aɪ/',
      choiceA: '/ɪə/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'kite' phát âm là /kaɪt/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 6,
      spokenWord: 'dive',
      wordMeaning: 'lặn, nhảy cắm đầu',
      fullIpa: '/daɪv/',
      targetSymbol: '/aɪ/',
      choiceA: '/eɪ/',
      choiceB: '/əʊ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'dive' phát âm là /daɪv/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'chair',
      wordMeaning: 'cái ghế',
      fullIpa: '/tʃeə/',
      targetSymbol: '/eə/',
      choiceA: '/eə/',
      choiceB: '/ɔɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'A',
      explanation: "Từ 'chair' phát âm là /tʃeə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 8,
      spokenWord: 'boy',
      wordMeaning: 'cậu bé',
      fullIpa: '/bɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/ɪə/',
      choiceC: '/ɔɪ/',
      correctChoice: 'C',
      explanation: "Từ 'boy' phát âm là /bɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ]
};
