import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 05 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_5: PracticeExamSet = {
  id: 105,
  title: 'Bộ Đề Âm Đôi 05: Đồ ăn & Nhà bếp',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Food & Kitchen',
  icon: '🍰',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề đồ ăn & nhà bếp. Phiên âm giọng Anh, theo bộ đề Word số 05.',
  exercise1: [
    {
      id: 1,
      wordA: 'kick',
      ipaA: '/kɪk/',
      meaningA: 'đá',
      wordB: 'cake',
      ipaB: '/keɪk/',
      meaningB: 'bánh ngọt',
      targetAudioWord: 'kick',
      correctChoice: 'A',
      explanation: "Cô đọc 'kick' /kɪk/ có âm /ɪ/ (i ngắn). Còn 'cake' /keɪk/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'race',
      ipaA: '/reɪs/',
      meaningA: 'cuộc đua',
      wordB: 'rice',
      ipaB: '/raɪs/',
      meaningB: 'cơm, gạo',
      targetAudioWord: 'race',
      correctChoice: 'A',
      explanation: "Cô đọc 'race' /reɪs/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'rice' /raɪs/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'oil',
      ipaA: '/ɔɪl/',
      meaningA: 'dầu',
      wordB: 'owl',
      ipaB: '/aʊl/',
      meaningB: 'con cú',
      targetAudioWord: 'oil',
      correctChoice: 'A',
      explanation: "Cô đọc 'oil' /ɔɪl/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'owl' /aʊl/ có âm /aʊ/."
    },
    {
      id: 4,
      wordA: 'toast',
      ipaA: '/təʊst/',
      meaningA: 'bánh mì nướng',
      wordB: 'taste',
      ipaB: '/teɪst/',
      meaningB: 'nếm, vị',
      targetAudioWord: 'toast',
      correctChoice: 'A',
      explanation: "Cô đọc 'toast' /təʊst/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'taste' /teɪst/ có âm /eɪ/."
    },
    {
      id: 5,
      wordA: 'car',
      ipaA: '/kɑː/',
      meaningA: 'ô tô',
      wordB: 'cow',
      ipaB: '/kaʊ/',
      meaningB: 'con bò sữa',
      targetAudioWord: 'car',
      correctChoice: 'A',
      explanation: "Cô đọc 'car' /kɑː/ có âm /ɑː/ (a dài). Còn 'cow' /kaʊ/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'ear',
      ipaA: '/ɪə/',
      meaningA: 'cái tai',
      wordB: 'air',
      ipaB: '/eə/',
      meaningB: 'không khí',
      targetAudioWord: 'air',
      correctChoice: 'B',
      explanation: "Cô đọc 'air' /eə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'ear' /ɪə/ có âm /ɪə/."
    },
    {
      id: 7,
      wordA: 'pier',
      ipaA: '/pɪə/',
      meaningA: 'cầu tàu',
      wordB: 'pear',
      ipaB: '/peə/',
      meaningB: 'quả lê',
      targetAudioWord: 'pier',
      correctChoice: 'A',
      explanation: "Cô đọc 'pier' /pɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'pear' /peə/ có âm /eə/."
    },
    {
      id: 8,
      wordA: 'bowl',
      ipaA: '/bəʊl/',
      meaningA: 'cái bát',
      wordB: 'ball',
      ipaB: '/bɔːl/',
      meaningB: 'quả bóng',
      targetAudioWord: 'ball',
      correctChoice: 'B',
      explanation: "Cô đọc 'ball' /bɔːl/ có âm /ɔː/ (o dài). Còn 'bowl' /bəʊl/ có âm /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'ear', ipa: '/ɪə/', meaning: 'cái tai', symbol: '/ɪə/' },
    { id: 'B', word: 'cow', ipa: '/kaʊ/', meaning: 'con bò sữa', symbol: '/aʊ/' },
    { id: 'C', word: 'cake', ipa: '/keɪk/', meaning: 'bánh ngọt', symbol: '/eɪ/' },
    { id: 'D', word: 'toast', ipa: '/təʊst/', meaning: 'bánh mì nướng', symbol: '/əʊ/' },
    { id: 'E', word: 'oil', ipa: '/ɔɪl/', meaning: 'dầu', symbol: '/ɔɪ/' },
    { id: 'F', word: 'pear', ipa: '/peə/', meaning: 'quả lê', symbol: '/eə/' },
    { id: 'G', word: 'pie', ipa: '/paɪ/', meaning: 'bánh nướng nhân', symbol: '/aɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'C', word: 'cake', explanation: "Âm /eɪ/ có trong từ 'cake' /keɪk/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'G', word: 'pie', explanation: "Âm /aɪ/ có trong từ 'pie' /paɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'E', word: 'oil', explanation: "Âm /ɔɪ/ có trong từ 'oil' /ɔɪl/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'D', word: 'toast', explanation: "Âm /əʊ/ có trong từ 'toast' /təʊst/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'B', word: 'cow', explanation: "Âm /aʊ/ có trong từ 'cow' /kaʊ/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'A', word: 'ear', explanation: "Âm /ɪə/ có trong từ 'ear' /ɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'F', word: 'pear', explanation: "Âm /eə/ có trong từ 'pear' /peə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'knife', ipa: '/naɪf/', targetSymbol: '/aɪ/', meaning: 'con dao' },
      { word: 'plate', ipa: '/pleɪt/', targetSymbol: '/eɪ/', meaning: 'cái đĩa' },
      { word: 'tray', ipa: '/treɪ/', targetSymbol: '/eɪ/', meaning: 'cái khay' },
      { word: 'roast', ipa: '/rəʊst/', targetSymbol: '/əʊ/', meaning: 'nướng' },
      { word: 'mouth', ipa: '/maʊθ/', targetSymbol: '/aʊ/', meaning: 'cái miệng' },
      { word: 'bowl', ipa: '/bəʊl/', targetSymbol: '/əʊ/', meaning: 'cái bát' },
      { word: 'ice', ipa: '/aɪs/', targetSymbol: '/aɪ/', meaning: 'nước đá' },
      { word: 'cone', ipa: '/kəʊn/', targetSymbol: '/əʊ/', meaning: 'ốc quế' },
      { word: 'round', ipa: '/raʊnd/', targetSymbol: '/aʊ/', meaning: 'tròn' },
      { word: 'grape', ipa: '/ɡreɪp/', targetSymbol: '/eɪ/', meaning: 'quả nho' },
      { word: 'rice', ipa: '/raɪs/', targetSymbol: '/aɪ/', meaning: 'cơm, gạo' },
      { word: 'brown', ipa: '/braʊn/', targetSymbol: '/aʊ/', meaning: 'màu nâu' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['plate', 'grape', 'tray'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['rice', 'knife', 'ice'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['bowl', 'roast', 'cone'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['brown', 'mouth', 'round'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'share', ipa: '/ʃeə/', targetSymbol: '/eə/', meaning: 'chia sẻ' },
      { word: 'soy', ipa: '/sɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đậu nành' },
      { word: 'pair', ipa: '/peə/', targetSymbol: '/eə/', meaning: 'một đôi' },
      { word: 'foil', ipa: '/fɔɪl/', targetSymbol: '/ɔɪ/', meaning: 'giấy bạc' },
      { word: 'boil', ipa: '/bɔɪl/', targetSymbol: '/ɔɪ/', meaning: 'luộc, đun sôi' },
      { word: 'clear', ipa: '/klɪə/', targetSymbol: '/ɪə/', meaning: 'trong trẻo' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['boil', 'soy', 'foil'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['here', 'near', 'clear'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['share', 'pair', 'chair'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'cone',
      templateIpa: '/k_n/',
      meaning: 'ốc quế',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/kəʊn/',
      explanation: "Từ 'cone' đọc là /kəʊn/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 2,
      word: 'rice',
      templateIpa: '/r_s/',
      meaning: 'cơm, gạo',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/raɪs/',
      explanation: "Từ 'rice' đọc là /raɪs/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
      word: 'knife',
      templateIpa: '/n_f/',
      meaning: 'con dao',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/naɪf/',
      explanation: "Từ 'knife' đọc là /naɪf/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 4,
      word: 'soy',
      templateIpa: '/s_/',
      meaning: 'đậu nành',
      choiceA: 'ɔː',
      choiceB: 'ɔɪ',
      correctChoice: 'B',
      fullIpa: '/sɔɪ/',
      explanation: "Từ 'soy' đọc là /sɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 5,
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
      id: 6,
      word: 'pair',
      templateIpa: '/p_/',
      meaning: 'một đôi',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'B',
      fullIpa: '/peə/',
      explanation: "Từ 'pair' đọc là /peə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 7,
      word: 'cow',
      templateIpa: '/k_/',
      meaning: 'con bò sữa',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/kaʊ/',
      explanation: "Từ 'cow' đọc là /kaʊ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 8,
      word: 'cake',
      templateIpa: '/k_k/',
      meaning: 'bánh ngọt',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'B',
      fullIpa: '/keɪk/',
      explanation: "Từ 'cake' đọc là /keɪk/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'clear', ipa: '/klɪə/', vowelSound: '/ɪə/', meaning: 'trong trẻo' },
        { letter: 'B', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' },
        { letter: 'C', word: 'pear', ipa: '/peə/', vowelSound: '/eə/', meaning: 'quả lê' },
        { letter: 'D', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'pear' mang âm /eə/. Còn clear, near, ear đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'pear', ipa: '/peə/', vowelSound: '/eə/', meaning: 'quả lê' },
        { letter: 'B', word: 'chair', ipa: '/tʃeə/', vowelSound: '/eə/', meaning: 'cái ghế' },
        { letter: 'C', word: 'pair', ipa: '/peə/', vowelSound: '/eə/', meaning: 'một đôi' },
        { letter: 'D', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'here' mang âm /ɪə/. Còn pear, chair, pair đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'cake', ipa: '/keɪk/', vowelSound: '/eɪ/', meaning: 'bánh ngọt' },
        { letter: 'B', word: 'knife', ipa: '/naɪf/', vowelSound: '/aɪ/', meaning: 'con dao' },
        { letter: 'C', word: 'tray', ipa: '/treɪ/', vowelSound: '/eɪ/', meaning: 'cái khay' },
        { letter: 'D', word: 'grape', ipa: '/ɡreɪp/', vowelSound: '/eɪ/', meaning: 'quả nho' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'knife' mang âm /aɪ/. Còn cake, tray, grape đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'boil', ipa: '/bɔɪl/', vowelSound: '/ɔɪ/', meaning: 'luộc, đun sôi' },
        { letter: 'B', word: 'cone', ipa: '/kəʊn/', vowelSound: '/əʊ/', meaning: 'ốc quế' },
        { letter: 'C', word: 'soy', ipa: '/sɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đậu nành' },
        { letter: 'D', word: 'oil', ipa: '/ɔɪl/', vowelSound: '/ɔɪ/', meaning: 'dầu' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'cone' mang âm /əʊ/. Còn boil, soy, oil đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'cow', ipa: '/kaʊ/', vowelSound: '/aʊ/', meaning: 'con bò sữa' },
        { letter: 'B', word: 'toast', ipa: '/təʊst/', vowelSound: '/əʊ/', meaning: 'bánh mì nướng' },
        { letter: 'C', word: 'cone', ipa: '/kəʊn/', vowelSound: '/əʊ/', meaning: 'ốc quế' },
        { letter: 'D', word: 'roast', ipa: '/rəʊst/', vowelSound: '/əʊ/', meaning: 'nướng' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'cow' mang âm /aʊ/. Còn toast, cone, roast đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'brown', ipa: '/braʊn/', vowelSound: '/aʊ/', meaning: 'màu nâu' },
        { letter: 'B', word: 'mouth', ipa: '/maʊθ/', vowelSound: '/aʊ/', meaning: 'cái miệng' },
        { letter: 'C', word: 'round', ipa: '/raʊnd/', vowelSound: '/aʊ/', meaning: 'tròn' },
        { letter: 'D', word: 'bowl', ipa: '/bəʊl/', vowelSound: '/əʊ/', meaning: 'cái bát' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bowl' mang âm /əʊ/. Còn brown, mouth, round đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'chair',
      wordMeaning: 'cái ghế',
      fullIpa: '/tʃeə/',
      targetSymbol: '/eə/',
      choiceA: '/aɪ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'B',
      explanation: "Từ 'chair' phát âm là /tʃeə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'toast',
      wordMeaning: 'bánh mì nướng',
      fullIpa: '/təʊst/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/eə/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'toast' phát âm là /təʊst/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      spokenWord: 'knife',
      wordMeaning: 'con dao',
      fullIpa: '/naɪf/',
      targetSymbol: '/aɪ/',
      choiceA: '/eɪ/',
      choiceB: '/eə/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'knife' phát âm là /naɪf/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'near',
      wordMeaning: 'gần',
      fullIpa: '/nɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/ɪə/',
      choiceB: '/aʊ/',
      choiceC: '/eə/',
      correctChoice: 'A',
      explanation: "Từ 'near' phát âm là /nɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'plate',
      wordMeaning: 'cái đĩa',
      fullIpa: '/pleɪt/',
      targetSymbol: '/eɪ/',
      choiceA: '/aɪ/',
      choiceB: '/aʊ/',
      choiceC: '/eɪ/',
      correctChoice: 'C',
      explanation: "Từ 'plate' phát âm là /pleɪt/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 6,
      spokenWord: 'foil',
      wordMeaning: 'giấy bạc',
      fullIpa: '/fɔɪl/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/eə/',
      correctChoice: 'A',
      explanation: "Từ 'foil' phát âm là /fɔɪl/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'brown',
      wordMeaning: 'màu nâu',
      fullIpa: '/braʊn/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/ɔɪ/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'brown' phát âm là /braʊn/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 8,
      spokenWord: 'oil',
      wordMeaning: 'dầu',
      fullIpa: '/ɔɪl/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'oil' phát âm là /ɔɪl/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ]
};
