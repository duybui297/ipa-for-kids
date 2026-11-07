import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 07 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_7: PracticeExamSet = {
  id: 107,
  title: 'Bộ Đề Âm Đôi 07: Quần áo & Mua sắm',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Clothes & Shopping',
  icon: '👗',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề quần áo & mua sắm. Phiên âm giọng Anh, theo bộ đề Word số 07.',
  exercise1: [
    {
      id: 1,
      wordA: 'pea',
      ipaA: '/piː/',
      meaningA: 'hạt đậu Hà Lan',
      wordB: 'pay',
      ipaB: '/peɪ/',
      meaningB: 'trả tiền',
      targetAudioWord: 'pay',
      correctChoice: 'B',
      explanation: "Cô đọc 'pay' /peɪ/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'pea' /piː/ có âm /iː/."
    },
    {
      id: 2,
      wordA: 'tie',
      ipaA: '/taɪ/',
      meaningA: 'cà vạt',
      wordB: 'tea',
      ipaB: '/tiː/',
      meaningB: 'trà',
      targetAudioWord: 'tie',
      correctChoice: 'A',
      explanation: "Cô đọc 'tie' /taɪ/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'tea' /tiː/ có âm /iː/."
    },
    {
      id: 3,
      wordA: 'corn',
      ipaA: '/kɔːn/',
      meaningA: 'bắp ngô',
      wordB: 'coin',
      ipaB: '/kɔɪn/',
      meaningB: 'đồng xu',
      targetAudioWord: 'coin',
      correctChoice: 'B',
      explanation: "Cô đọc 'coin' /kɔɪn/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'corn' /kɔːn/ có âm /ɔː/."
    },
    {
      id: 4,
      wordA: 'cat',
      ipaA: '/kæt/',
      meaningA: 'con mèo',
      wordB: 'coat',
      ipaB: '/kəʊt/',
      meaningB: 'áo khoác',
      targetAudioWord: 'cat',
      correctChoice: 'A',
      explanation: "Cô đọc 'cat' /kæt/ có âm /æ/ (a bẹt). Còn 'coat' /kəʊt/ có âm /əʊ/."
    },
    {
      id: 5,
      wordA: 'gown',
      ipaA: '/ɡaʊn/',
      meaningA: 'váy dạ hội',
      wordB: 'gone',
      ipaB: '/ɡɒn/',
      meaningB: 'đã đi mất',
      targetAudioWord: 'gone',
      correctChoice: 'B',
      explanation: "Cô đọc 'gone' /ɡɒn/ có âm /ɒ/ (o ngắn). Còn 'gown' /ɡaʊn/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'here',
      ipaA: '/hɪə/',
      meaningA: 'ở đây',
      wordB: 'hair',
      ipaB: '/heə/',
      meaningB: 'mái tóc',
      targetAudioWord: 'hair',
      correctChoice: 'B',
      explanation: "Cô đọc 'hair' /heə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'here' /hɪə/ có âm /ɪə/."
    },
    {
      id: 7,
      wordA: 'war',
      ipaA: '/wɔː/',
      meaningA: 'chiến tranh',
      wordB: 'wear',
      ipaB: '/weə/',
      meaningB: 'mặc',
      targetAudioWord: 'war',
      correctChoice: 'A',
      explanation: "Cô đọc 'war' /wɔː/ có âm /ɔː/ (o dài). Còn 'wear' /weə/ có âm /eə/."
    },
    {
      id: 8,
      wordA: 'sell',
      ipaA: '/sel/',
      meaningA: 'bán',
      wordB: 'sale',
      ipaB: '/seɪl/',
      meaningB: 'đợt giảm giá',
      targetAudioWord: 'sell',
      correctChoice: 'A',
      explanation: "Cô đọc 'sell' /sel/ có âm /e/ (e ngắn). Còn 'sale' /seɪl/ có âm /eɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'pay', ipa: '/peɪ/', meaning: 'trả tiền', symbol: '/eɪ/' },
    { id: 'B', word: 'wear', ipa: '/weə/', meaning: 'mặc', symbol: '/eə/' },
    { id: 'C', word: 'coin', ipa: '/kɔɪn/', meaning: 'đồng xu', symbol: '/ɔɪ/' },
    { id: 'D', word: 'tie', ipa: '/taɪ/', meaning: 'cà vạt', symbol: '/aɪ/' },
    { id: 'E', word: 'gear', ipa: '/ɡɪə/', meaning: 'đồ dùng, bánh răng', symbol: '/ɪə/' },
    { id: 'F', word: 'coat', ipa: '/kəʊt/', meaning: 'áo khoác', symbol: '/əʊ/' },
    { id: 'G', word: 'gown', ipa: '/ɡaʊn/', meaning: 'váy dạ hội', symbol: '/aʊ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'A', word: 'pay', explanation: "Âm /eɪ/ có trong từ 'pay' /peɪ/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'D', word: 'tie', explanation: "Âm /aɪ/ có trong từ 'tie' /taɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'C', word: 'coin', explanation: "Âm /ɔɪ/ có trong từ 'coin' /kɔɪn/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'F', word: 'coat', explanation: "Âm /əʊ/ có trong từ 'coat' /kəʊt/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'G', word: 'gown', explanation: "Âm /aʊ/ có trong từ 'gown' /ɡaʊn/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'E', word: 'gear', explanation: "Âm /ɪə/ có trong từ 'gear' /ɡɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'B', word: 'wear', explanation: "Âm /eə/ có trong từ 'wear' /weə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'blouse', ipa: '/blaʊz/', targetSymbol: '/aʊ/', meaning: 'áo sơ mi nữ' },
      { word: 'gold', ipa: '/ɡəʊld/', targetSymbol: '/əʊ/', meaning: 'vàng' },
      { word: 'buy', ipa: '/baɪ/', targetSymbol: '/aɪ/', meaning: 'mua' },
      { word: 'tape', ipa: '/teɪp/', targetSymbol: '/eɪ/', meaning: 'băng dính' },
      { word: 'size', ipa: '/saɪz/', targetSymbol: '/aɪ/', meaning: 'kích cỡ' },
      { word: 'price', ipa: '/praɪs/', targetSymbol: '/aɪ/', meaning: 'giá tiền' },
      { word: 'change', ipa: '/tʃeɪndʒ/', targetSymbol: '/eɪ/', meaning: 'tiền thừa, thay đổi' },
      { word: 'robe', ipa: '/rəʊb/', targetSymbol: '/əʊ/', meaning: 'áo choàng' },
      { word: 'cloak', ipa: '/kləʊk/', targetSymbol: '/əʊ/', meaning: 'áo choàng có mũ' },
      { word: 'crown', ipa: '/kraʊn/', targetSymbol: '/aʊ/', meaning: 'vương miện' },
      { word: 'down', ipa: '/daʊn/', targetSymbol: '/aʊ/', meaning: 'xuống' },
      { word: 'sale', ipa: '/seɪl/', targetSymbol: '/eɪ/', meaning: 'đợt giảm giá' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['sale', 'change', 'tape'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['size', 'buy', 'price'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['robe', 'cloak', 'gold'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['blouse', 'crown', 'down'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'choice', ipa: '/tʃɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'sự lựa chọn' },
      { word: 'fair', ipa: '/feə/', targetSymbol: '/eə/', meaning: 'hội chợ, công bằng' },
      { word: 'year', ipa: '/jɪə/', targetSymbol: '/ɪə/', meaning: 'năm' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' },
      { word: 'boy', ipa: '/bɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'cậu bé' },
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'pair', ipa: '/peə/', targetSymbol: '/eə/', meaning: 'một đôi' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'bare', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'trần, trống trơn' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['toy', 'choice', 'boy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['near', 'here', 'year'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['pair', 'bare', 'fair'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'crown',
      templateIpa: '/kr_n/',
      meaning: 'vương miện',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/kraʊn/',
      explanation: "Từ 'crown' đọc là /kraʊn/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 2,
      word: 'pay',
      templateIpa: '/p_/',
      meaning: 'trả tiền',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'B',
      fullIpa: '/peɪ/',
      explanation: "Từ 'pay' đọc là /peɪ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
      word: 'wear',
      templateIpa: '/w_/',
      meaning: 'mặc',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'B',
      fullIpa: '/weə/',
      explanation: "Từ 'wear' đọc là /weə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 6,
      word: 'change',
      templateIpa: '/tʃ_ndʒ/',
      meaning: 'tiền thừa, thay đổi',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/tʃeɪndʒ/',
      explanation: "Từ 'change' đọc là /tʃeɪndʒ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 7,
      word: 'robe',
      templateIpa: '/r_b/',
      meaning: 'áo choàng',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/rəʊb/',
      explanation: "Từ 'robe' đọc là /rəʊb/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 8,
      word: 'price',
      templateIpa: '/pr_s/',
      meaning: 'giá tiền',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/praɪs/',
      explanation: "Từ 'price' đọc là /praɪs/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'pair', ipa: '/peə/', vowelSound: '/eə/', meaning: 'một đôi' },
        { letter: 'B', word: 'bare', ipa: '/beə/', vowelSound: '/eə/', meaning: 'trần, trống trơn' },
        { letter: 'C', word: 'fair', ipa: '/feə/', vowelSound: '/eə/', meaning: 'hội chợ, công bằng' },
        { letter: 'D', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'here' mang âm /ɪə/. Còn pair, bare, fair đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'gold', ipa: '/ɡəʊld/', vowelSound: '/əʊ/', meaning: 'vàng' },
        { letter: 'B', word: 'crown', ipa: '/kraʊn/', vowelSound: '/aʊ/', meaning: 'vương miện' },
        { letter: 'C', word: 'down', ipa: '/daʊn/', vowelSound: '/aʊ/', meaning: 'xuống' },
        { letter: 'D', word: 'blouse', ipa: '/blaʊz/', vowelSound: '/aʊ/', meaning: 'áo sơ mi nữ' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'gold' mang âm /əʊ/. Còn crown, down, blouse đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'tape', ipa: '/teɪp/', vowelSound: '/eɪ/', meaning: 'băng dính' },
        { letter: 'B', word: 'change', ipa: '/tʃeɪndʒ/', vowelSound: '/eɪ/', meaning: 'tiền thừa, thay đổi' },
        { letter: 'C', word: 'tie', ipa: '/taɪ/', vowelSound: '/aɪ/', meaning: 'cà vạt' },
        { letter: 'D', word: 'pay', ipa: '/peɪ/', vowelSound: '/eɪ/', meaning: 'trả tiền' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'tie' mang âm /aɪ/. Còn tape, change, pay đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'B', word: 'robe', ipa: '/rəʊb/', vowelSound: '/əʊ/', meaning: 'áo choàng' },
        { letter: 'C', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'D', word: 'coin', ipa: '/kɔɪn/', vowelSound: '/ɔɪ/', meaning: 'đồng xu' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'robe' mang âm /əʊ/. Còn boy, toy, coin đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'year', ipa: '/jɪə/', vowelSound: '/ɪə/', meaning: 'năm' },
        { letter: 'B', word: 'bare', ipa: '/beə/', vowelSound: '/eə/', meaning: 'trần, trống trơn' },
        { letter: 'C', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' },
        { letter: 'D', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'bare' mang âm /eə/. Còn year, here, near đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'tie', ipa: '/taɪ/', vowelSound: '/aɪ/', meaning: 'cà vạt' },
        { letter: 'B', word: 'size', ipa: '/saɪz/', vowelSound: '/aɪ/', meaning: 'kích cỡ' },
        { letter: 'C', word: 'buy', ipa: '/baɪ/', vowelSound: '/aɪ/', meaning: 'mua' },
        { letter: 'D', word: 'tape', ipa: '/teɪp/', vowelSound: '/eɪ/', meaning: 'băng dính' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'tape' mang âm /eɪ/. Còn tie, size, buy đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'near',
      wordMeaning: 'gần',
      fullIpa: '/nɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'near' phát âm là /nɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'cloak',
      wordMeaning: 'áo choàng có mũ',
      fullIpa: '/kləʊk/',
      targetSymbol: '/əʊ/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/aʊ/',
      correctChoice: 'B',
      explanation: "Từ 'cloak' phát âm là /kləʊk/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      spokenWord: 'toy',
      wordMeaning: 'đồ chơi',
      fullIpa: '/tɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/aʊ/',
      choiceB: '/ɔː/',
      choiceC: '/ɔɪ/',
      correctChoice: 'C',
      explanation: "Từ 'toy' phát âm là /tɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'pair',
      wordMeaning: 'một đôi',
      fullIpa: '/peə/',
      targetSymbol: '/eə/',
      choiceA: '/ɔɪ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'B',
      explanation: "Từ 'pair' phát âm là /peə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'gear',
      wordMeaning: 'đồ dùng, bánh răng',
      fullIpa: '/ɡɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/ɪə/',
      choiceC: '/əʊ/',
      correctChoice: 'B',
      explanation: "Từ 'gear' phát âm là /ɡɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      spokenWord: 'tape',
      wordMeaning: 'băng dính',
      fullIpa: '/teɪp/',
      targetSymbol: '/eɪ/',
      choiceA: '/aɪ/',
      choiceB: '/eɪ/',
      choiceC: '/eə/',
      correctChoice: 'B',
      explanation: "Từ 'tape' phát âm là /teɪp/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'down',
      wordMeaning: 'xuống',
      fullIpa: '/daʊn/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/əʊ/',
      choiceC: '/ɪə/',
      correctChoice: 'A',
      explanation: "Từ 'down' phát âm là /daʊn/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 8,
      spokenWord: 'tie',
      wordMeaning: 'cà vạt',
      fullIpa: '/taɪ/',
      targetSymbol: '/aɪ/',
      choiceA: '/əʊ/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'tie' phát âm là /taɪ/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    }
  ]
};
