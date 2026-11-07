import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 03 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_3: PracticeExamSet = {
  id: 103,
  title: 'Bộ Đề Âm Đôi 03: Nhà & Gia đình',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Home & Family',
  icon: '🏠',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề nhà & gia đình. Phiên âm giọng Anh, theo bộ đề Word số 03.',
  exercise1: [
    {
      id: 1,
      wordA: 'gate',
      ipaA: '/ɡeɪt/',
      meaningA: 'cái cổng',
      wordB: 'get',
      ipaB: '/ɡet/',
      meaningB: 'lấy, nhận',
      targetAudioWord: 'gate',
      correctChoice: 'A',
      explanation: "Cô đọc 'gate' /ɡeɪt/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'get' /ɡet/ có âm /e/."
    },
    {
      id: 2,
      wordA: 'light',
      ipaA: '/laɪt/',
      meaningA: 'đèn, ánh sáng',
      wordB: 'lit',
      ipaB: '/lɪt/',
      meaningB: 'đã thắp sáng',
      targetAudioWord: 'lit',
      correctChoice: 'B',
      explanation: "Cô đọc 'lit' /lɪt/ có âm /ɪ/ (i ngắn). Còn 'light' /laɪt/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'hum',
      ipaA: '/hʌm/',
      meaningA: 'ngân nga',
      wordB: 'home',
      ipaB: '/həʊm/',
      meaningB: 'nhà',
      targetAudioWord: 'home',
      correctChoice: 'B',
      explanation: "Cô đọc 'home' /həʊm/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'hum' /hʌm/ có âm /ʌ/."
    },
    {
      id: 4,
      wordA: 'couch',
      ipaA: '/kaʊtʃ/',
      meaningA: 'ghế sofa',
      wordB: 'catch',
      ipaB: '/kætʃ/',
      meaningB: 'bắt, chụp',
      targetAudioWord: 'catch',
      correctChoice: 'B',
      explanation: "Cô đọc 'catch' /kætʃ/ có âm /æ/ (a bẹt). Còn 'couch' /kaʊtʃ/ có âm /aʊ/."
    },
    {
      id: 5,
      wordA: 'toy',
      ipaA: '/tɔɪ/',
      meaningA: 'đồ chơi',
      wordB: 'two',
      ipaB: '/tuː/',
      meaningB: 'số hai',
      targetAudioWord: 'two',
      correctChoice: 'B',
      explanation: "Cô đọc 'two' /tuː/ có âm /uː/ (u dài). Còn 'toy' /tɔɪ/ có âm /ɔɪ/."
    },
    {
      id: 6,
      wordA: 'chair',
      ipaA: '/tʃeə/',
      meaningA: 'cái ghế',
      wordB: 'cheer',
      ipaB: '/tʃɪə/',
      meaningB: 'cổ vũ',
      targetAudioWord: 'cheer',
      correctChoice: 'B',
      explanation: "Cô đọc 'cheer' /tʃɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'chair' /tʃeə/ có âm /eə/."
    },
    {
      id: 7,
      wordA: 'day',
      ipaA: '/deɪ/',
      meaningA: 'ngày',
      wordB: 'dear',
      ipaB: '/dɪə/',
      meaningB: 'thân yêu',
      targetAudioWord: 'dear',
      correctChoice: 'B',
      explanation: "Cô đọc 'dear' /dɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'day' /deɪ/ có âm /eɪ/."
    },
    {
      id: 8,
      wordA: 'phone',
      ipaA: '/fəʊn/',
      meaningA: 'điện thoại',
      wordB: 'fun',
      ipaB: '/fʌn/',
      meaningB: 'vui',
      targetAudioWord: 'phone',
      correctChoice: 'A',
      explanation: "Cô đọc 'phone' /fəʊn/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'fun' /fʌn/ có âm /ʌ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'house', ipa: '/haʊs/', meaning: 'ngôi nhà', symbol: '/aʊ/' },
    { id: 'B', word: 'dear', ipa: '/dɪə/', meaning: 'thân yêu', symbol: '/ɪə/' },
    { id: 'C', word: 'plate', ipa: '/pleɪt/', meaning: 'cái đĩa', symbol: '/eɪ/' },
    { id: 'D', word: 'bowl', ipa: '/bəʊl/', meaning: 'cái bát', symbol: '/əʊ/' },
    { id: 'E', word: 'stairs', ipa: '/steəz/', meaning: 'cầu thang', symbol: '/eə/' },
    { id: 'F', word: 'boy', ipa: '/bɔɪ/', meaning: 'cậu bé', symbol: '/ɔɪ/' },
    { id: 'G', word: 'white', ipa: '/waɪt/', meaning: 'màu trắng', symbol: '/aɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'C', word: 'plate', explanation: "Âm /eɪ/ có trong từ 'plate' /pleɪt/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'G', word: 'white', explanation: "Âm /aɪ/ có trong từ 'white' /waɪt/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'F', word: 'boy', explanation: "Âm /ɔɪ/ có trong từ 'boy' /bɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'D', word: 'bowl', explanation: "Âm /əʊ/ có trong từ 'bowl' /bəʊl/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'A', word: 'house', explanation: "Âm /aʊ/ có trong từ 'house' /haʊs/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'B', word: 'dear', explanation: "Âm /ɪə/ có trong từ 'dear' /dɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'E', word: 'stairs', explanation: "Âm /eə/ có trong từ 'stairs' /steəz/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'phone', ipa: '/fəʊn/', targetSymbol: '/əʊ/', meaning: 'điện thoại' },
      { word: 'name', ipa: '/neɪm/', targetSymbol: '/eɪ/', meaning: 'tên' },
      { word: 'couch', ipa: '/kaʊtʃ/', targetSymbol: '/aʊ/', meaning: 'ghế sofa' },
      { word: 'light', ipa: '/laɪt/', targetSymbol: '/aɪ/', meaning: 'đèn, ánh sáng' },
      { word: 'play', ipa: '/pleɪ/', targetSymbol: '/eɪ/', meaning: 'chơi' },
      { word: 'house', ipa: '/haʊs/', targetSymbol: '/aʊ/', meaning: 'ngôi nhà' },
      { word: 'bowl', ipa: '/bəʊl/', targetSymbol: '/əʊ/', meaning: 'cái bát' },
      { word: 'plate', ipa: '/pleɪt/', targetSymbol: '/eɪ/', meaning: 'cái đĩa' },
      { word: 'nice', ipa: '/naɪs/', targetSymbol: '/aɪ/', meaning: 'đẹp, tốt' },
      { word: 'round', ipa: '/raʊnd/', targetSymbol: '/aʊ/', meaning: 'tròn' },
      { word: 'white', ipa: '/waɪt/', targetSymbol: '/aɪ/', meaning: 'màu trắng' },
      { word: 'home', ipa: '/həʊm/', targetSymbol: '/əʊ/', meaning: 'nhà' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['name', 'play', 'plate'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['light', 'nice', 'white'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['phone', 'bowl', 'home'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['couch', 'house', 'round'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'hair', ipa: '/heə/', targetSymbol: '/eə/', meaning: 'mái tóc' },
      { word: 'boy', ipa: '/bɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'cậu bé' },
      { word: 'dear', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'thân yêu' },
      { word: 'chair', ipa: '/tʃeə/', targetSymbol: '/eə/', meaning: 'cái ghế' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'hear', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'nghe' },
      { word: 'share', ipa: '/ʃeə/', targetSymbol: '/eə/', meaning: 'chia sẻ' },
      { word: 'join', ipa: '/dʒɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'tham gia' },
      { word: 'ear', ipa: '/ɪə/', targetSymbol: '/ɪə/', meaning: 'cái tai' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['boy', 'toy', 'join'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['dear', 'hear', 'ear'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['hair', 'chair', 'share'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'play',
      templateIpa: '/pl_/',
      meaning: 'chơi',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/pleɪ/',
      explanation: "Từ 'play' đọc là /pleɪ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 2,
      word: 'nice',
      templateIpa: '/n_s/',
      meaning: 'đẹp, tốt',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'A',
      fullIpa: '/naɪs/',
      explanation: "Từ 'nice' đọc là /naɪs/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
      word: 'toy',
      templateIpa: '/t_/',
      meaning: 'đồ chơi',
      choiceA: 'ɔɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/tɔɪ/',
      explanation: "Từ 'toy' đọc là /tɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 4,
      word: 'phone',
      templateIpa: '/f_n/',
      meaning: 'điện thoại',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'A',
      fullIpa: '/fəʊn/',
      explanation: "Từ 'phone' đọc là /fəʊn/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'house',
      templateIpa: '/h_s/',
      meaning: 'ngôi nhà',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/haʊs/',
      explanation: "Từ 'house' đọc là /haʊs/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'hear',
      templateIpa: '/h_/',
      meaning: 'nghe',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/hɪə/',
      explanation: "Từ 'hear' đọc là /hɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
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
      word: 'join',
      templateIpa: '/dʒ_n/',
      meaning: 'tham gia',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/dʒɔɪn/',
      explanation: "Từ 'join' đọc là /dʒɔɪn/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'name', ipa: '/neɪm/', vowelSound: '/eɪ/', meaning: 'tên' },
        { letter: 'B', word: 'plate', ipa: '/pleɪt/', vowelSound: '/eɪ/', meaning: 'cái đĩa' },
        { letter: 'C', word: 'light', ipa: '/laɪt/', vowelSound: '/aɪ/', meaning: 'đèn, ánh sáng' },
        { letter: 'D', word: 'play', ipa: '/pleɪ/', vowelSound: '/eɪ/', meaning: 'chơi' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'light' mang âm /aɪ/. Còn name, plate, play đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'home', ipa: '/həʊm/', vowelSound: '/əʊ/', meaning: 'nhà' },
        { letter: 'B', word: 'phone', ipa: '/fəʊn/', vowelSound: '/əʊ/', meaning: 'điện thoại' },
        { letter: 'C', word: 'house', ipa: '/haʊs/', vowelSound: '/aʊ/', meaning: 'ngôi nhà' },
        { letter: 'D', word: 'bowl', ipa: '/bəʊl/', vowelSound: '/əʊ/', meaning: 'cái bát' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'house' mang âm /aʊ/. Còn home, phone, bowl đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'B', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'C', word: 'join', ipa: '/dʒɔɪn/', vowelSound: '/ɔɪ/', meaning: 'tham gia' },
        { letter: 'D', word: 'white', ipa: '/waɪt/', vowelSound: '/aɪ/', meaning: 'màu trắng' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'white' mang âm /aɪ/. Còn boy, toy, join đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' },
        { letter: 'B', word: 'dear', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'thân yêu' },
        { letter: 'C', word: 'chair', ipa: '/tʃeə/', vowelSound: '/eə/', meaning: 'cái ghế' },
        { letter: 'D', word: 'hear', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'nghe' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'chair' mang âm /eə/. Còn ear, dear, hear đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'hair', ipa: '/heə/', vowelSound: '/eə/', meaning: 'mái tóc' },
        { letter: 'B', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' },
        { letter: 'C', word: 'stairs', ipa: '/steəz/', vowelSound: '/eə/', meaning: 'cầu thang' },
        { letter: 'D', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'here' mang âm /ɪə/. Còn hair, share, stairs đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'couch', ipa: '/kaʊtʃ/', vowelSound: '/aʊ/', meaning: 'ghế sofa' },
        { letter: 'B', word: 'round', ipa: '/raʊnd/', vowelSound: '/aʊ/', meaning: 'tròn' },
        { letter: 'C', word: 'mouth', ipa: '/maʊθ/', vowelSound: '/aʊ/', meaning: 'cái miệng' },
        { letter: 'D', word: 'nose', ipa: '/nəʊz/', vowelSound: '/əʊ/', meaning: 'cái mũi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'nose' mang âm /əʊ/. Còn couch, round, mouth đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'name',
      wordMeaning: 'tên',
      fullIpa: '/neɪm/',
      targetSymbol: '/eɪ/',
      choiceA: '/e/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'name' phát âm là /neɪm/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 2,
      spokenWord: 'white',
      wordMeaning: 'màu trắng',
      fullIpa: '/waɪt/',
      targetSymbol: '/aɪ/',
      choiceA: '/aɪ/',
      choiceB: '/ɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'A',
      explanation: "Từ 'white' phát âm là /waɪt/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
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
      spokenWord: 'bowl',
      wordMeaning: 'cái bát',
      fullIpa: '/bəʊl/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɒ/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'bowl' phát âm là /bəʊl/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'couch',
      wordMeaning: 'ghế sofa',
      fullIpa: '/kaʊtʃ/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/ɑː/',
      correctChoice: 'B',
      explanation: "Từ 'couch' phát âm là /kaʊtʃ/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      spokenWord: 'dear',
      wordMeaning: 'thân yêu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/ɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'dear' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
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
      spokenWord: 'join',
      wordMeaning: 'tham gia',
      fullIpa: '/dʒɔɪn/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/ɔː/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'join' phát âm là /dʒɔɪn/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ]
};
