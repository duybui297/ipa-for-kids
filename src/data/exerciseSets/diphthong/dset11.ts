import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 11 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_11: PracticeExamSet = {
  id: 111,
  title: 'Bộ Đề Âm Đôi 11: Thị trấn & Địa điểm',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Town & Places',
  icon: '🏙️',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề thị trấn & địa điểm. Phiên âm giọng Anh, theo bộ đề Word số 11.',
  exercise1: [
    {
      id: 1,
      wordA: 'mill',
      ipaA: '/mɪl/',
      meaningA: 'cối xay',
      wordB: 'mail',
      ipaB: '/meɪl/',
      meaningB: 'thư từ',
      targetAudioWord: 'mail',
      correctChoice: 'B',
      explanation: "Cô đọc 'mail' /meɪl/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'mill' /mɪl/ có âm /ɪ/."
    },
    {
      id: 2,
      wordA: 'sign',
      ipaA: '/saɪn/',
      meaningA: 'biển báo',
      wordB: 'seen',
      ipaB: '/siːn/',
      meaningB: 'đã nhìn thấy',
      targetAudioWord: 'sign',
      correctChoice: 'A',
      explanation: "Cô đọc 'sign' /saɪn/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'seen' /siːn/ có âm /iː/."
    },
    {
      id: 3,
      wordA: 'can',
      ipaA: '/kæn/',
      meaningA: 'có thể',
      wordB: 'coin',
      ipaB: '/kɔɪn/',
      meaningB: 'đồng xu',
      targetAudioWord: 'coin',
      correctChoice: 'B',
      explanation: "Cô đọc 'coin' /kɔɪn/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'can' /kæn/ có âm /æ/."
    },
    {
      id: 4,
      wordA: 'post',
      ipaA: '/pəʊst/',
      meaningA: 'bưu điện, gửi thư',
      wordB: 'past',
      ipaB: '/pɑːst/',
      meaningB: 'đi qua',
      targetAudioWord: 'post',
      correctChoice: 'A',
      explanation: "Cô đọc 'post' /pəʊst/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'past' /pɑːst/ có âm /ɑː/."
    },
    {
      id: 5,
      wordA: 'horse',
      ipaA: '/hɔːs/',
      meaningA: 'con ngựa',
      wordB: 'house',
      ipaB: '/haʊs/',
      meaningB: 'ngôi nhà',
      targetAudioWord: 'house',
      correctChoice: 'B',
      explanation: "Cô đọc 'house' /haʊs/ có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/). Còn 'horse' /hɔːs/ có âm /ɔː/."
    },
    {
      id: 6,
      wordA: 'dare',
      ipaA: '/deə/',
      meaningA: 'dám',
      wordB: 'dear',
      ipaB: '/dɪə/',
      meaningB: 'thân yêu',
      targetAudioWord: 'dear',
      correctChoice: 'B',
      explanation: "Cô đọc 'dear' /dɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'dare' /deə/ có âm /eə/."
    },
    {
      id: 7,
      wordA: 'fair',
      ipaA: '/feə/',
      meaningA: 'hội chợ, công bằng',
      wordB: 'fur',
      ipaB: '/fɜː/',
      meaningB: 'bộ lông thú',
      targetAudioWord: 'fur',
      correctChoice: 'B',
      explanation: "Cô đọc 'fur' /fɜː/ có âm /ɜː/ (ơ dài). Còn 'fair' /feə/ có âm /eə/."
    },
    {
      id: 8,
      wordA: 'gate',
      ipaA: '/ɡeɪt/',
      meaningA: 'cái cổng',
      wordB: 'get',
      ipaB: '/ɡet/',
      meaningB: 'lấy, nhận',
      targetAudioWord: 'get',
      correctChoice: 'B',
      explanation: "Cô đọc 'get' /ɡet/ có âm /e/ (e ngắn). Còn 'gate' /ɡeɪt/ có âm /eɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'sign', ipa: '/saɪn/', meaning: 'biển báo', symbol: '/aɪ/' },
    { id: 'B', word: 'house', ipa: '/haʊs/', meaning: 'ngôi nhà', symbol: '/aʊ/' },
    { id: 'C', word: 'post', ipa: '/pəʊst/', meaning: 'bưu điện, gửi thư', symbol: '/əʊ/' },
    { id: 'D', word: 'lake', ipa: '/leɪk/', meaning: 'hồ nước', symbol: '/eɪ/' },
    { id: 'E', word: 'coin', ipa: '/kɔɪn/', meaning: 'đồng xu', symbol: '/ɔɪ/' },
    { id: 'F', word: 'near', ipa: '/nɪə/', meaning: 'gần', symbol: '/ɪə/' },
    { id: 'G', word: 'square', ipa: '/skweə/', meaning: 'hình vuông', symbol: '/eə/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'D', word: 'lake', explanation: "Âm /eɪ/ có trong từ 'lake' /leɪk/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'A', word: 'sign', explanation: "Âm /aɪ/ có trong từ 'sign' /saɪn/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'E', word: 'coin', explanation: "Âm /ɔɪ/ có trong từ 'coin' /kɔɪn/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'C', word: 'post', explanation: "Âm /əʊ/ có trong từ 'post' /pəʊst/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'B', word: 'house', explanation: "Âm /aʊ/ có trong từ 'house' /haʊs/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'F', word: 'near', explanation: "Âm /ɪə/ có trong từ 'near' /nɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'G', word: 'square', explanation: "Âm /eə/ có trong từ 'square' /skweə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'stage', ipa: '/steɪdʒ/', targetSymbol: '/eɪ/', meaning: 'sân khấu' },
      { word: 'mile', ipa: '/maɪl/', targetSymbol: '/aɪ/', meaning: 'dặm' },
      { word: 'mail', ipa: '/meɪl/', targetSymbol: '/eɪ/', meaning: 'thư từ' },
      { word: 'couch', ipa: '/kaʊtʃ/', targetSymbol: '/aʊ/', meaning: 'ghế sofa' },
      { word: 'phone', ipa: '/fəʊn/', targetSymbol: '/əʊ/', meaning: 'điện thoại' },
      { word: 'hole', ipa: '/həʊl/', targetSymbol: '/əʊ/', meaning: 'cái lỗ' },
      { word: 'light', ipa: '/laɪt/', targetSymbol: '/aɪ/', meaning: 'đèn, ánh sáng' },
      { word: 'clown', ipa: '/klaʊn/', targetSymbol: '/aʊ/', meaning: 'chú hề' },
      { word: 'gate', ipa: '/ɡeɪt/', targetSymbol: '/eɪ/', meaning: 'cái cổng' },
      { word: 'home', ipa: '/həʊm/', targetSymbol: '/əʊ/', meaning: 'nhà' },
      { word: 'mouse', ipa: '/maʊs/', targetSymbol: '/aʊ/', meaning: 'con chuột' },
      { word: 'site', ipa: '/saɪt/', targetSymbol: '/aɪ/', meaning: 'địa điểm' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['gate', 'stage', 'mail'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['light', 'site', 'mile'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['phone', 'hole', 'home'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['mouse', 'couch', 'clown'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'voice', ipa: '/vɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'giọng nói' },
      { word: 'fair', ipa: '/feə/', targetSymbol: '/eə/', meaning: 'hội chợ, công bằng' },
      { word: 'stairs', ipa: '/steəz/', targetSymbol: '/eə/', meaning: 'cầu thang' },
      { word: 'where', ipa: '/weə/', targetSymbol: '/eə/', meaning: 'ở đâu' },
      { word: 'point', ipa: '/pɔɪnt/', targetSymbol: '/ɔɪ/', meaning: 'chỉ tay, điểm' },
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'pier', ipa: '/pɪə/', targetSymbol: '/ɪə/', meaning: 'cầu tàu' },
      { word: 'dear', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'thân yêu' },
      { word: 'noise', ipa: '/nɔɪz/', targetSymbol: '/ɔɪ/', meaning: 'tiếng ồn' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['point', 'noise', 'voice'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['pier', 'dear', 'here'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['fair', 'stairs', 'where'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'mile',
      templateIpa: '/m_l/',
      meaning: 'dặm',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/maɪl/',
      explanation: "Từ 'mile' đọc là /maɪl/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 2,
      word: 'phone',
      templateIpa: '/f_n/',
      meaning: 'điện thoại',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/fəʊn/',
      explanation: "Từ 'phone' đọc là /fəʊn/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 3,
      word: 'square',
      templateIpa: '/skw_/',
      meaning: 'hình vuông',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/skweə/',
      explanation: "Từ 'square' đọc là /skweə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 4,
      word: 'near',
      templateIpa: '/n_/',
      meaning: 'gần',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/nɪə/',
      explanation: "Từ 'near' đọc là /nɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 5,
      word: 'coin',
      templateIpa: '/k_n/',
      meaning: 'đồng xu',
      choiceA: 'ɔː',
      choiceB: 'ɔɪ',
      correctChoice: 'B',
      fullIpa: '/kɔɪn/',
      explanation: "Từ 'coin' đọc là /kɔɪn/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 6,
      word: 'stage',
      templateIpa: '/st_dʒ/',
      meaning: 'sân khấu',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'B',
      fullIpa: '/steɪdʒ/',
      explanation: "Từ 'stage' đọc là /steɪdʒ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 7,
      word: 'couch',
      templateIpa: '/k_tʃ/',
      meaning: 'ghế sofa',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/kaʊtʃ/',
      explanation: "Từ 'couch' đọc là /kaʊtʃ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 8,
      word: 'here',
      templateIpa: '/h_/',
      meaning: 'ở đây',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'B',
      fullIpa: '/hɪə/',
      explanation: "Từ 'here' đọc là /hɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' },
        { letter: 'B', word: 'dear', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'thân yêu' },
        { letter: 'C', word: 'stairs', ipa: '/steəz/', vowelSound: '/eə/', meaning: 'cầu thang' },
        { letter: 'D', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'stairs' mang âm /eə/. Còn near, dear, here đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'hole', ipa: '/həʊl/', vowelSound: '/əʊ/', meaning: 'cái lỗ' },
        { letter: 'B', word: 'clown', ipa: '/klaʊn/', vowelSound: '/aʊ/', meaning: 'chú hề' },
        { letter: 'C', word: 'post', ipa: '/pəʊst/', vowelSound: '/əʊ/', meaning: 'bưu điện, gửi thư' },
        { letter: 'D', word: 'home', ipa: '/həʊm/', vowelSound: '/əʊ/', meaning: 'nhà' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'clown' mang âm /aʊ/. Còn hole, post, home đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'house', ipa: '/haʊs/', vowelSound: '/aʊ/', meaning: 'ngôi nhà' },
        { letter: 'B', word: 'mouse', ipa: '/maʊs/', vowelSound: '/aʊ/', meaning: 'con chuột' },
        { letter: 'C', word: 'post', ipa: '/pəʊst/', vowelSound: '/əʊ/', meaning: 'bưu điện, gửi thư' },
        { letter: 'D', word: 'couch', ipa: '/kaʊtʃ/', vowelSound: '/aʊ/', meaning: 'ghế sofa' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'post' mang âm /əʊ/. Còn house, mouse, couch đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'noise', ipa: '/nɔɪz/', vowelSound: '/ɔɪ/', meaning: 'tiếng ồn' },
        { letter: 'B', word: 'phone', ipa: '/fəʊn/', vowelSound: '/əʊ/', meaning: 'điện thoại' },
        { letter: 'C', word: 'point', ipa: '/pɔɪnt/', vowelSound: '/ɔɪ/', meaning: 'chỉ tay, điểm' },
        { letter: 'D', word: 'voice', ipa: '/vɔɪs/', vowelSound: '/ɔɪ/', meaning: 'giọng nói' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'phone' mang âm /əʊ/. Còn noise, point, voice đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'fair', ipa: '/feə/', vowelSound: '/eə/', meaning: 'hội chợ, công bằng' },
        { letter: 'B', word: 'square', ipa: '/skweə/', vowelSound: '/eə/', meaning: 'hình vuông' },
        { letter: 'C', word: 'dear', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'thân yêu' },
        { letter: 'D', word: 'stairs', ipa: '/steəz/', vowelSound: '/eə/', meaning: 'cầu thang' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'dear' mang âm /ɪə/. Còn fair, square, stairs đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'mile', ipa: '/maɪl/', vowelSound: '/aɪ/', meaning: 'dặm' },
        { letter: 'B', word: 'gate', ipa: '/ɡeɪt/', vowelSound: '/eɪ/', meaning: 'cái cổng' },
        { letter: 'C', word: 'mail', ipa: '/meɪl/', vowelSound: '/eɪ/', meaning: 'thư từ' },
        { letter: 'D', word: 'stage', ipa: '/steɪdʒ/', vowelSound: '/eɪ/', meaning: 'sân khấu' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'mile' mang âm /aɪ/. Còn gate, mail, stage đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'near',
      wordMeaning: 'gần',
      fullIpa: '/nɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/əʊ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'near' phát âm là /nɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'clown',
      wordMeaning: 'chú hề',
      fullIpa: '/klaʊn/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/əʊ/',
      choiceC: '/eɪ/',
      correctChoice: 'A',
      explanation: "Từ 'clown' phát âm là /klaʊn/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      spokenWord: 'fair',
      wordMeaning: 'hội chợ, công bằng',
      fullIpa: '/feə/',
      targetSymbol: '/eə/',
      choiceA: '/eɪ/',
      choiceB: '/ɪə/',
      choiceC: '/eə/',
      correctChoice: 'C',
      explanation: "Từ 'fair' phát âm là /feə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 4,
      spokenWord: 'point',
      wordMeaning: 'chỉ tay, điểm',
      fullIpa: '/pɔɪnt/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/eə/',
      correctChoice: 'A',
      explanation: "Từ 'point' phát âm là /pɔɪnt/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      spokenWord: 'mouse',
      wordMeaning: 'con chuột',
      fullIpa: '/maʊs/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/eɪ/',
      choiceC: '/aʊ/',
      correctChoice: 'C',
      explanation: "Từ 'mouse' phát âm là /maʊs/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      spokenWord: 'hole',
      wordMeaning: 'cái lỗ',
      fullIpa: '/həʊl/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɔɪ/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'hole' phát âm là /həʊl/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 7,
      spokenWord: 'mail',
      wordMeaning: 'thư từ',
      fullIpa: '/meɪl/',
      targetSymbol: '/eɪ/',
      choiceA: '/aɪ/',
      choiceB: '/ɪə/',
      choiceC: '/eɪ/',
      correctChoice: 'C',
      explanation: "Từ 'mail' phát âm là /meɪl/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 8,
      spokenWord: 'sign',
      wordMeaning: 'biển báo',
      fullIpa: '/saɪn/',
      targetSymbol: '/aɪ/',
      choiceA: '/eə/',
      choiceB: '/aɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'B',
      explanation: "Từ 'sign' phát âm là /saɪn/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    }
  ]
};
