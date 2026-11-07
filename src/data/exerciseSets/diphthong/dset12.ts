import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 12 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_12: PracticeExamSet = {
  id: 112,
  title: 'Bộ Đề Âm Đôi 12: Màu sắc & Con số',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Colors & Numbers',
  icon: '🎨',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề màu sắc & con số. Phiên âm giọng Anh, theo bộ đề Word số 12.',
  exercise1: [
    {
      id: 1,
      wordA: 'at',
      ipaA: '/æt/',
      meaningA: 'ở, tại',
      wordB: 'eight',
      ipaB: '/eɪt/',
      meaningB: 'số tám',
      targetAudioWord: 'at',
      correctChoice: 'A',
      explanation: "Cô đọc 'at' /æt/ có âm /æ/ (a bẹt). Còn 'eight' /eɪt/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'nun',
      ipaA: '/nʌn/',
      meaningA: 'nữ tu',
      wordB: 'nine',
      ipaB: '/naɪn/',
      meaningB: 'số chín',
      targetAudioWord: 'nun',
      correctChoice: 'A',
      explanation: "Cô đọc 'nun' /nʌn/ có âm /ʌ/ (ă ngắn). Còn 'nine' /naɪn/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'point',
      ipaA: '/pɔɪnt/',
      meaningA: 'chỉ tay, điểm',
      wordB: 'paint',
      ipaB: '/peɪnt/',
      meaningB: 'sơn, vẽ',
      targetAudioWord: 'point',
      correctChoice: 'A',
      explanation: "Cô đọc 'point' /pɔɪnt/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'paint' /peɪnt/ có âm /eɪ/."
    },
    {
      id: 4,
      wordA: 'rise',
      ipaA: '/raɪz/',
      meaningA: 'mọc lên',
      wordB: 'rose',
      ipaB: '/rəʊz/',
      meaningB: 'hoa hồng',
      targetAudioWord: 'rise',
      correctChoice: 'A',
      explanation: "Cô đọc 'rise' /raɪz/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'rose' /rəʊz/ có âm /əʊ/."
    },
    {
      id: 5,
      wordA: 'can’t',
      ipaA: '/kɑːnt/',
      meaningA: 'không thể',
      wordB: 'count',
      ipaB: '/kaʊnt/',
      meaningB: 'đếm',
      targetAudioWord: 'count',
      correctChoice: 'B',
      explanation: "Cô đọc 'count' /kaʊnt/ có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/). Còn 'can’t' /kɑːnt/ có âm /ɑː/."
    },
    {
      id: 6,
      wordA: 'yes',
      ipaA: '/jes/',
      meaningA: 'có, vâng',
      wordB: 'year',
      ipaB: '/jɪə/',
      meaningB: 'năm',
      targetAudioWord: 'year',
      correctChoice: 'B',
      explanation: "Cô đọc 'year' /jɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'yes' /jes/ có âm /e/."
    },
    {
      id: 7,
      wordA: 'hair',
      ipaA: '/heə/',
      meaningA: 'mái tóc',
      wordB: 'hut',
      ipaB: '/hʌt/',
      meaningB: 'túp lều',
      targetAudioWord: 'hair',
      correctChoice: 'A',
      explanation: "Cô đọc 'hair' /heə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'hut' /hʌt/ có âm /ʌ/."
    },
    {
      id: 8,
      wordA: 'white',
      ipaA: '/waɪt/',
      meaningA: 'màu trắng',
      wordB: 'wet',
      ipaB: '/wet/',
      meaningB: 'ướt',
      targetAudioWord: 'white',
      correctChoice: 'A',
      explanation: "Cô đọc 'white' /waɪt/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'wet' /wet/ có âm /e/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'five', ipa: '/faɪv/', meaning: 'số năm', symbol: '/aɪ/' },
    { id: 'B', word: 'year', ipa: '/jɪə/', meaning: 'năm', symbol: '/ɪə/' },
    { id: 'C', word: 'pair', ipa: '/peə/', meaning: 'một đôi', symbol: '/eə/' },
    { id: 'D', word: 'rose', ipa: '/rəʊz/', meaning: 'hoa hồng', symbol: '/əʊ/' },
    { id: 'E', word: 'eight', ipa: '/eɪt/', meaning: 'số tám', symbol: '/eɪ/' },
    { id: 'F', word: 'point', ipa: '/pɔɪnt/', meaning: 'chỉ tay, điểm', symbol: '/ɔɪ/' },
    { id: 'G', word: 'count', ipa: '/kaʊnt/', meaning: 'đếm', symbol: '/aʊ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'E', word: 'eight', explanation: "Âm /eɪ/ có trong từ 'eight' /eɪt/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'A', word: 'five', explanation: "Âm /aɪ/ có trong từ 'five' /faɪv/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'F', word: 'point', explanation: "Âm /ɔɪ/ có trong từ 'point' /pɔɪnt/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'D', word: 'rose', explanation: "Âm /əʊ/ có trong từ 'rose' /rəʊz/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'G', word: 'count', explanation: "Âm /aʊ/ có trong từ 'count' /kaʊnt/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'B', word: 'year', explanation: "Âm /ɪə/ có trong từ 'year' /jɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'C', word: 'pair', explanation: "Âm /eə/ có trong từ 'pair' /peə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'stone', ipa: '/stəʊn/', targetSymbol: '/əʊ/', meaning: 'hòn đá' },
      { word: 'age', ipa: '/eɪdʒ/', targetSymbol: '/eɪ/', meaning: 'tuổi' },
      { word: 'pound', ipa: '/paʊnd/', targetSymbol: '/aʊ/', meaning: 'đồng bảng Anh' },
      { word: 'gold', ipa: '/ɡəʊld/', targetSymbol: '/əʊ/', meaning: 'vàng' },
      { word: 'line', ipa: '/laɪn/', targetSymbol: '/aɪ/', meaning: 'đường kẻ, hàng' },
      { word: 'round', ipa: '/raʊnd/', targetSymbol: '/aʊ/', meaning: 'tròn' },
      { word: 'white', ipa: '/waɪt/', targetSymbol: '/aɪ/', meaning: 'màu trắng' },
      { word: 'shade', ipa: '/ʃeɪd/', targetSymbol: '/eɪ/', meaning: 'bóng râm' },
      { word: 'old', ipa: '/əʊld/', targetSymbol: '/əʊ/', meaning: 'cũ, già' },
      { word: 'nine', ipa: '/naɪn/', targetSymbol: '/aɪ/', meaning: 'số chín' },
      { word: 'brown', ipa: '/braʊn/', targetSymbol: '/aʊ/', meaning: 'màu nâu' },
      { word: 'paint', ipa: '/peɪnt/', targetSymbol: '/eɪ/', meaning: 'sơn, vẽ' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['paint', 'shade', 'age'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['nine', 'white', 'line'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['old', 'stone', 'gold'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['brown', 'pound', 'round'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'hair', ipa: '/heə/', targetSymbol: '/eə/', meaning: 'mái tóc' },
      { word: 'dear', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'thân yêu' },
      { word: 'choice', ipa: '/tʃɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'sự lựa chọn' },
      { word: 'square', ipa: '/skweə/', targetSymbol: '/eə/', meaning: 'hình vuông' },
      { word: 'coin', ipa: '/kɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'đồng xu' },
      { word: 'ear', ipa: '/ɪə/', targetSymbol: '/ɪə/', meaning: 'cái tai' },
      { word: 'joy', ipa: '/dʒɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'niềm vui' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'bear', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'con gấu' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['joy', 'coin', 'choice'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['dear', 'near', 'ear'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['square', 'hair', 'bear'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'year',
      templateIpa: '/j_/',
      meaning: 'năm',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/jɪə/',
      explanation: "Từ 'year' đọc là /jɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 2,
      word: 'joy',
      templateIpa: '/dʒ_/',
      meaning: 'niềm vui',
      choiceA: 'ɔː',
      choiceB: 'ɔɪ',
      correctChoice: 'B',
      fullIpa: '/dʒɔɪ/',
      explanation: "Từ 'joy' đọc là /dʒɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 3,
      word: 'square',
      templateIpa: '/skw_/',
      meaning: 'hình vuông',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'B',
      fullIpa: '/skweə/',
      explanation: "Từ 'square' đọc là /skweə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 4,
      word: 'stone',
      templateIpa: '/st_n/',
      meaning: 'hòn đá',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/stəʊn/',
      explanation: "Từ 'stone' đọc là /stəʊn/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'age',
      templateIpa: '/_dʒ/',
      meaning: 'tuổi',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/eɪdʒ/',
      explanation: "Từ 'age' đọc là /eɪdʒ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 6,
      word: 'five',
      templateIpa: '/f_v/',
      meaning: 'số năm',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/faɪv/',
      explanation: "Từ 'five' đọc là /faɪv/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 7,
      word: 'nine',
      templateIpa: '/n_n/',
      meaning: 'số chín',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/naɪn/',
      explanation: "Từ 'nine' đọc là /naɪn/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 8,
      word: 'round',
      templateIpa: '/r_nd/',
      meaning: 'tròn',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/raʊnd/',
      explanation: "Từ 'round' đọc là /raʊnd/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'coin', ipa: '/kɔɪn/', vowelSound: '/ɔɪ/', meaning: 'đồng xu' },
        { letter: 'B', word: 'choice', ipa: '/tʃɔɪs/', vowelSound: '/ɔɪ/', meaning: 'sự lựa chọn' },
        { letter: 'C', word: 'gold', ipa: '/ɡəʊld/', vowelSound: '/əʊ/', meaning: 'vàng' },
        { letter: 'D', word: 'joy', ipa: '/dʒɔɪ/', vowelSound: '/ɔɪ/', meaning: 'niềm vui' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'gold' mang âm /əʊ/. Còn coin, choice, joy đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'stone', ipa: '/stəʊn/', vowelSound: '/əʊ/', meaning: 'hòn đá' },
        { letter: 'B', word: 'old', ipa: '/əʊld/', vowelSound: '/əʊ/', meaning: 'cũ, già' },
        { letter: 'C', word: 'rose', ipa: '/rəʊz/', vowelSound: '/əʊ/', meaning: 'hoa hồng' },
        { letter: 'D', word: 'count', ipa: '/kaʊnt/', vowelSound: '/aʊ/', meaning: 'đếm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'count' mang âm /aʊ/. Còn stone, old, rose đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'year', ipa: '/jɪə/', vowelSound: '/ɪə/', meaning: 'năm' },
        { letter: 'B', word: 'square', ipa: '/skweə/', vowelSound: '/eə/', meaning: 'hình vuông' },
        { letter: 'C', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' },
        { letter: 'D', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'square' mang âm /eə/. Còn year, ear, near đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'white', ipa: '/waɪt/', vowelSound: '/aɪ/', meaning: 'màu trắng' },
        { letter: 'B', word: 'shade', ipa: '/ʃeɪd/', vowelSound: '/eɪ/', meaning: 'bóng râm' },
        { letter: 'C', word: 'eight', ipa: '/eɪt/', vowelSound: '/eɪ/', meaning: 'số tám' },
        { letter: 'D', word: 'paint', ipa: '/peɪnt/', vowelSound: '/eɪ/', meaning: 'sơn, vẽ' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'white' mang âm /aɪ/. Còn shade, eight, paint đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'round', ipa: '/raʊnd/', vowelSound: '/aʊ/', meaning: 'tròn' },
        { letter: 'B', word: 'pound', ipa: '/paʊnd/', vowelSound: '/aʊ/', meaning: 'đồng bảng Anh' },
        { letter: 'C', word: 'gold', ipa: '/ɡəʊld/', vowelSound: '/əʊ/', meaning: 'vàng' },
        { letter: 'D', word: 'count', ipa: '/kaʊnt/', vowelSound: '/aʊ/', meaning: 'đếm' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'gold' mang âm /əʊ/. Còn round, pound, count đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'white', ipa: '/waɪt/', vowelSound: '/aɪ/', meaning: 'màu trắng' },
        { letter: 'B', word: 'line', ipa: '/laɪn/', vowelSound: '/aɪ/', meaning: 'đường kẻ, hàng' },
        { letter: 'C', word: 'five', ipa: '/faɪv/', vowelSound: '/aɪ/', meaning: 'số năm' },
        { letter: 'D', word: 'eight', ipa: '/eɪt/', vowelSound: '/eɪ/', meaning: 'số tám' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'eight' mang âm /eɪ/. Còn white, line, five đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'hair',
      wordMeaning: 'mái tóc',
      fullIpa: '/heə/',
      targetSymbol: '/eə/',
      choiceA: '/eɪ/',
      choiceB: '/ɪə/',
      choiceC: '/eə/',
      correctChoice: 'C',
      explanation: "Từ 'hair' phát âm là /heə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'eight',
      wordMeaning: 'số tám',
      fullIpa: '/eɪt/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/əʊ/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'eight' phát âm là /eɪt/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'count',
      wordMeaning: 'đếm',
      fullIpa: '/kaʊnt/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/ɪə/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'count' phát âm là /kaʊnt/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      spokenWord: 'gold',
      wordMeaning: 'vàng',
      fullIpa: '/ɡəʊld/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/ɪə/',
      correctChoice: 'A',
      explanation: "Từ 'gold' phát âm là /ɡəʊld/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'nine',
      wordMeaning: 'số chín',
      fullIpa: '/naɪn/',
      targetSymbol: '/aɪ/',
      choiceA: '/əʊ/',
      choiceB: '/aɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'B',
      explanation: "Từ 'nine' phát âm là /naɪn/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 6,
      spokenWord: 'dear',
      wordMeaning: 'thân yêu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/eɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'dear' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 7,
      spokenWord: 'choice',
      wordMeaning: 'sự lựa chọn',
      fullIpa: '/tʃɔɪs/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/aʊ/',
      choiceC: '/ɔɪ/',
      correctChoice: 'C',
      explanation: "Từ 'choice' phát âm là /tʃɔɪs/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 8,
      spokenWord: 'coin',
      wordMeaning: 'đồng xu',
      fullIpa: '/kɔɪn/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'coin' phát âm là /kɔɪn/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ]
};
