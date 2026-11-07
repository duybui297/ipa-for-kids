import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 04 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_4: PracticeExamSet = {
  id: 104,
  title: 'Bộ Đề Âm Đôi 04: Trường lớp & Vui chơi',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'School & Play',
  icon: '🪁',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề trường lớp & vui chơi. Phiên âm giọng Anh, theo bộ đề Word số 04.',
  exercise1: [
    {
      id: 1,
      wordA: 'late',
      ipaA: '/leɪt/',
      meaningA: 'muộn',
      wordB: 'let',
      ipaB: '/let/',
      meaningB: 'để cho',
      targetAudioWord: 'let',
      correctChoice: 'B',
      explanation: "Cô đọc 'let' /let/ có âm /e/ (e ngắn). Còn 'late' /leɪt/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'write',
      ipaA: '/raɪt/',
      meaningA: 'viết',
      wordB: 'rat',
      ipaB: '/ræt/',
      meaningB: 'con chuột cống',
      targetAudioWord: 'write',
      correctChoice: 'A',
      explanation: "Cô đọc 'write' /raɪt/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'rat' /ræt/ có âm /æ/."
    },
    {
      id: 3,
      wordA: 'note',
      ipaA: '/nəʊt/',
      meaningA: 'ghi chú',
      wordB: 'not',
      ipaB: '/nɒt/',
      meaningB: 'không',
      targetAudioWord: 'not',
      correctChoice: 'B',
      explanation: "Cô đọc 'not' /nɒt/ có âm /ɒ/ (o ngắn). Còn 'note' /nəʊt/ có âm /əʊ/."
    },
    {
      id: 4,
      wordA: 'ton',
      ipaA: '/tʌn/',
      meaningA: 'tấn',
      wordB: 'town',
      ipaB: '/taʊn/',
      meaningB: 'thị trấn',
      targetAudioWord: 'town',
      correctChoice: 'B',
      explanation: "Cô đọc 'town' /taʊn/ có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/). Còn 'ton' /tʌn/ có âm /ʌ/."
    },
    {
      id: 5,
      wordA: 'coin',
      ipaA: '/kɔɪn/',
      meaningA: 'đồng xu',
      wordB: 'corn',
      ipaB: '/kɔːn/',
      meaningB: 'bắp ngô',
      targetAudioWord: 'coin',
      correctChoice: 'A',
      explanation: "Cô đọc 'coin' /kɔɪn/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'corn' /kɔːn/ có âm /ɔː/."
    },
    {
      id: 6,
      wordA: 'chair',
      ipaA: '/tʃeə/',
      meaningA: 'cái ghế',
      wordB: 'check',
      ipaB: '/tʃek/',
      meaningB: 'kiểm tra',
      targetAudioWord: 'check',
      correctChoice: 'B',
      explanation: "Cô đọc 'check' /tʃek/ có âm /e/ (e ngắn). Còn 'chair' /tʃeə/ có âm /eə/."
    },
    {
      id: 7,
      wordA: 'ride',
      ipaA: '/raɪd/',
      meaningA: 'cưỡi, đạp xe',
      wordB: 'rid',
      ipaB: '/rɪd/',
      meaningB: 'bỏ đi',
      targetAudioWord: 'rid',
      correctChoice: 'B',
      explanation: "Cô đọc 'rid' /rɪd/ có âm /ɪ/ (i ngắn). Còn 'ride' /raɪd/ có âm /aɪ/."
    },
    {
      id: 8,
      wordA: 'bought',
      ipaA: '/bɔːt/',
      meaningA: 'đã mua',
      wordB: 'boat',
      ipaB: '/bəʊt/',
      meaningB: 'con thuyền',
      targetAudioWord: 'boat',
      correctChoice: 'B',
      explanation: "Cô đọc 'boat' /bəʊt/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'bought' /bɔːt/ có âm /ɔː/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'clown', ipa: '/klaʊn/', meaning: 'chú hề', symbol: '/aʊ/' },
    { id: 'B', word: 'square', ipa: '/skweə/', meaning: 'hình vuông', symbol: '/eə/' },
    { id: 'C', word: 'train', ipa: '/treɪn/', meaning: 'tàu hỏa', symbol: '/eɪ/' },
    { id: 'D', word: 'boat', ipa: '/bəʊt/', meaning: 'con thuyền', symbol: '/əʊ/' },
    { id: 'E', word: 'cheer', ipa: '/tʃɪə/', meaning: 'cổ vũ', symbol: '/ɪə/' },
    { id: 'F', word: 'line', ipa: '/laɪn/', meaning: 'đường kẻ, hàng', symbol: '/aɪ/' },
    { id: 'G', word: 'toy', ipa: '/tɔɪ/', meaning: 'đồ chơi', symbol: '/ɔɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'C', word: 'train', explanation: "Âm /eɪ/ có trong từ 'train' /treɪn/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'F', word: 'line', explanation: "Âm /aɪ/ có trong từ 'line' /laɪn/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'G', word: 'toy', explanation: "Âm /ɔɪ/ có trong từ 'toy' /tɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'D', word: 'boat', explanation: "Âm /əʊ/ có trong từ 'boat' /bəʊt/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'A', word: 'clown', explanation: "Âm /aʊ/ có trong từ 'clown' /klaʊn/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'E', word: 'cheer', explanation: "Âm /ɪə/ có trong từ 'cheer' /tʃɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'B', word: 'square', explanation: "Âm /eə/ có trong từ 'square' /skweə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'note', ipa: '/nəʊt/', targetSymbol: '/əʊ/', meaning: 'ghi chú' },
      { word: 'page', ipa: '/peɪdʒ/', targetSymbol: '/eɪ/', meaning: 'trang sách' },
      { word: 'town', ipa: '/taʊn/', targetSymbol: '/aʊ/', meaning: 'thị trấn' },
      { word: 'write', ipa: '/raɪt/', targetSymbol: '/aɪ/', meaning: 'viết' },
      { word: 'boat', ipa: '/bəʊt/', targetSymbol: '/əʊ/', meaning: 'con thuyền' },
      { word: 'game', ipa: '/ɡeɪm/', targetSymbol: '/eɪ/', meaning: 'trò chơi' },
      { word: 'loud', ipa: '/laʊd/', targetSymbol: '/aʊ/', meaning: 'to, ồn' },
      { word: 'line', ipa: '/laɪn/', targetSymbol: '/aɪ/', meaning: 'đường kẻ, hàng' },
      { word: 'road', ipa: '/rəʊd/', targetSymbol: '/əʊ/', meaning: 'con đường' },
      { word: 'train', ipa: '/treɪn/', targetSymbol: '/eɪ/', meaning: 'tàu hỏa' },
      { word: 'count', ipa: '/kaʊnt/', targetSymbol: '/aʊ/', meaning: 'đếm' },
      { word: 'ride', ipa: '/raɪd/', targetSymbol: '/aɪ/', meaning: 'cưỡi, đạp xe' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['page', 'game', 'train'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['write', 'line', 'ride'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['note', 'boat', 'road'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['town', 'loud', 'count'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'share', ipa: '/ʃeə/', targetSymbol: '/eə/', meaning: 'chia sẻ' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'cheer', ipa: '/tʃɪə/', targetSymbol: '/ɪə/', meaning: 'cổ vũ' },
      { word: 'square', ipa: '/skweə/', targetSymbol: '/eə/', meaning: 'hình vuông' },
      { word: 'boy', ipa: '/bɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'cậu bé' },
      { word: 'clear', ipa: '/klɪə/', targetSymbol: '/ɪə/', meaning: 'trong trẻo' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' },
      { word: 'coin', ipa: '/kɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'đồng xu' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['toy', 'boy', 'coin'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['cheer', 'clear', 'near'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['share', 'square', 'chair'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'game',
      templateIpa: '/ɡ_m/',
      meaning: 'trò chơi',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/ɡeɪm/',
      explanation: "Từ 'game' đọc là /ɡeɪm/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 2,
      word: 'nine',
      templateIpa: '/n_n/',
      meaning: 'số chín',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/naɪn/',
      explanation: "Từ 'nine' đọc là /naɪn/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
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
      id: 4,
      word: 'coat',
      templateIpa: '/k_t/',
      meaning: 'áo khoác',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/kəʊt/',
      explanation: "Từ 'coat' đọc là /kəʊt/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'count',
      templateIpa: '/k_nt/',
      meaning: 'đếm',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/kaʊnt/',
      explanation: "Từ 'count' đọc là /kaʊnt/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'clear',
      templateIpa: '/kl_/',
      meaning: 'trong trẻo',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/klɪə/',
      explanation: "Từ 'clear' đọc là /klɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 7,
      word: 'share',
      templateIpa: '/ʃ_/',
      meaning: 'chia sẻ',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/ʃeə/',
      explanation: "Từ 'share' đọc là /ʃeə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 8,
      word: 'loud',
      templateIpa: '/l_d/',
      meaning: 'to, ồn',
      choiceA: 'aʊ',
      choiceB: 'ɔɪ',
      correctChoice: 'A',
      fullIpa: '/laʊd/',
      explanation: "Từ 'loud' đọc là /laʊd/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'page', ipa: '/peɪdʒ/', vowelSound: '/eɪ/', meaning: 'trang sách' },
        { letter: 'B', word: 'game', ipa: '/ɡeɪm/', vowelSound: '/eɪ/', meaning: 'trò chơi' },
        { letter: 'C', word: 'train', ipa: '/treɪn/', vowelSound: '/eɪ/', meaning: 'tàu hỏa' },
        { letter: 'D', word: 'ride', ipa: '/raɪd/', vowelSound: '/aɪ/', meaning: 'cưỡi, đạp xe' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'ride' mang âm /aɪ/. Còn page, game, train đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'note', ipa: '/nəʊt/', vowelSound: '/əʊ/', meaning: 'ghi chú' },
        { letter: 'B', word: 'boat', ipa: '/bəʊt/', vowelSound: '/əʊ/', meaning: 'con thuyền' },
        { letter: 'C', word: 'road', ipa: '/rəʊd/', vowelSound: '/əʊ/', meaning: 'con đường' },
        { letter: 'D', word: 'town', ipa: '/taʊn/', vowelSound: '/aʊ/', meaning: 'thị trấn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'town' mang âm /aʊ/. Còn note, boat, road đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'town', ipa: '/taʊn/', vowelSound: '/aʊ/', meaning: 'thị trấn' },
        { letter: 'B', word: 'loud', ipa: '/laʊd/', vowelSound: '/aʊ/', meaning: 'to, ồn' },
        { letter: 'C', word: 'boat', ipa: '/bəʊt/', vowelSound: '/əʊ/', meaning: 'con thuyền' },
        { letter: 'D', word: 'clown', ipa: '/klaʊn/', vowelSound: '/aʊ/', meaning: 'chú hề' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'boat' mang âm /əʊ/. Còn town, loud, clown đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'cheer', ipa: '/tʃɪə/', vowelSound: '/ɪə/', meaning: 'cổ vũ' },
        { letter: 'B', word: 'clear', ipa: '/klɪə/', vowelSound: '/ɪə/', meaning: 'trong trẻo' },
        { letter: 'C', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' },
        { letter: 'D', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'share' mang âm /eə/. Còn cheer, clear, near đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' },
        { letter: 'B', word: 'square', ipa: '/skweə/', vowelSound: '/eə/', meaning: 'hình vuông' },
        { letter: 'C', word: 'chair', ipa: '/tʃeə/', vowelSound: '/eə/', meaning: 'cái ghế' },
        { letter: 'D', word: 'year', ipa: '/jɪə/', vowelSound: '/ɪə/', meaning: 'năm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'year' mang âm /ɪə/. Còn share, square, chair đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'B', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'C', word: 'coin', ipa: '/kɔɪn/', vowelSound: '/ɔɪ/', meaning: 'đồng xu' },
        { letter: 'D', word: 'nine', ipa: '/naɪn/', vowelSound: '/aɪ/', meaning: 'số chín' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'nine' mang âm /aɪ/. Còn toy, boy, coin đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'page',
      wordMeaning: 'trang sách',
      fullIpa: '/peɪdʒ/',
      targetSymbol: '/eɪ/',
      choiceA: '/e/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'page' phát âm là /peɪdʒ/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      spokenWord: 'write',
      wordMeaning: 'viết',
      fullIpa: '/raɪt/',
      targetSymbol: '/aɪ/',
      choiceA: '/aɪ/',
      choiceB: '/ɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'A',
      explanation: "Từ 'write' phát âm là /raɪt/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'toy',
      wordMeaning: 'đồ chơi',
      fullIpa: '/tɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/ɔɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'toy' phát âm là /tɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'road',
      wordMeaning: 'con đường',
      fullIpa: '/rəʊd/',
      targetSymbol: '/əʊ/',
      choiceA: '/ɒ/',
      choiceB: '/əʊ/',
      choiceC: '/aʊ/',
      correctChoice: 'B',
      explanation: "Từ 'road' phát âm là /rəʊd/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'loud',
      wordMeaning: 'to, ồn',
      fullIpa: '/laʊd/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/ɔɪ/',
      correctChoice: 'B',
      explanation: "Từ 'loud' phát âm là /laʊd/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
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
      spokenWord: 'square',
      wordMeaning: 'hình vuông',
      fullIpa: '/skweə/',
      targetSymbol: '/eə/',
      choiceA: '/ɪə/',
      choiceB: '/eə/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'square' phát âm là /skweə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 8,
      spokenWord: 'coin',
      wordMeaning: 'đồng xu',
      fullIpa: '/kɔɪn/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'coin' phát âm là /kɔɪn/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ]
};
