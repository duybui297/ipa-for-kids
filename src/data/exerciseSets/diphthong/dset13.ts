import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 13 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_13: PracticeExamSet = {
  id: 113,
  title: 'Bộ Đề Âm Đôi 13: Thời gian & Sinh hoạt',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Time & Daily Routine',
  icon: '⏰',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề thời gian & sinh hoạt. Phiên âm giọng Anh, theo bộ đề Word số 13.',
  exercise1: [
    {
      id: 1,
      wordA: 'dad',
      ipaA: '/dæd/',
      meaningA: 'bố',
      wordB: 'day',
      ipaB: '/deɪ/',
      meaningB: 'ngày',
      targetAudioWord: 'day',
      correctChoice: 'B',
      explanation: "Cô đọc 'day' /deɪ/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'dad' /dæd/ có âm /æ/."
    },
    {
      id: 2,
      wordA: 'net',
      ipaA: '/net/',
      meaningA: 'cái lưới',
      wordB: 'night',
      ipaB: '/naɪt/',
      meaningB: 'ban đêm',
      targetAudioWord: 'net',
      correctChoice: 'A',
      explanation: "Cô đọc 'net' /net/ có âm /e/ (e ngắn). Còn 'night' /naɪt/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'soap',
      ipaA: '/səʊp/',
      meaningA: 'xà phòng',
      wordB: 'soup',
      ipaB: '/suːp/',
      meaningB: 'súp',
      targetAudioWord: 'soap',
      correctChoice: 'A',
      explanation: "Cô đọc 'soap' /səʊp/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'soup' /suːp/ có âm /uː/."
    },
    {
      id: 4,
      wordA: 'done',
      ipaA: '/dʌn/',
      meaningA: 'đã xong',
      wordB: 'down',
      ipaB: '/daʊn/',
      meaningB: 'xuống',
      targetAudioWord: 'done',
      correctChoice: 'A',
      explanation: "Cô đọc 'done' /dʌn/ có âm /ʌ/ (ă ngắn). Còn 'down' /daʊn/ có âm /aʊ/."
    },
    {
      id: 5,
      wordA: 'wake',
      ipaA: '/weɪk/',
      meaningA: 'thức dậy',
      wordB: 'week',
      ipaB: '/wiːk/',
      meaningB: 'tuần',
      targetAudioWord: 'week',
      correctChoice: 'B',
      explanation: "Cô đọc 'week' /wiːk/ có âm /iː/ (i dài). Còn 'wake' /weɪk/ có âm /eɪ/."
    },
    {
      id: 6,
      wordA: 'year',
      ipaA: '/jɪə/',
      meaningA: 'năm',
      wordB: 'your',
      ipaB: '/jɔː/',
      meaningB: 'của bạn',
      targetAudioWord: 'your',
      correctChoice: 'B',
      explanation: "Cô đọc 'your' /jɔː/ có âm /ɔː/ (o dài). Còn 'year' /jɪə/ có âm /ɪə/."
    },
    {
      id: 7,
      wordA: 'care',
      ipaA: '/keə/',
      meaningA: 'chăm sóc',
      wordB: 'car',
      ipaB: '/kɑː/',
      meaningB: 'ô tô',
      targetAudioWord: 'car',
      correctChoice: 'B',
      explanation: "Cô đọc 'car' /kɑː/ có âm /ɑː/ (a dài). Còn 'care' /keə/ có âm /eə/."
    },
    {
      id: 8,
      wordA: 'hi',
      ipaA: '/haɪ/',
      meaningA: 'xin chào',
      wordB: 'he',
      ipaB: '/hiː/',
      meaningB: 'anh ấy',
      targetAudioWord: 'hi',
      correctChoice: 'A',
      explanation: "Cô đọc 'hi' /haɪ/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'he' /hiː/ có âm /iː/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'year', ipa: '/jɪə/', meaning: 'năm', symbol: '/ɪə/' },
    { id: 'B', word: 'time', ipa: '/taɪm/', meaning: 'thời gian', symbol: '/aɪ/' },
    { id: 'C', word: 'now', ipa: '/naʊ/', meaning: 'bây giờ', symbol: '/aʊ/' },
    { id: 'D', word: 'care', ipa: '/keə/', meaning: 'chăm sóc', symbol: '/eə/' },
    { id: 'E', word: 'soap', ipa: '/səʊp/', meaning: 'xà phòng', symbol: '/əʊ/' },
    { id: 'F', word: 'day', ipa: '/deɪ/', meaning: 'ngày', symbol: '/eɪ/' },
    { id: 'G', word: 'boy', ipa: '/bɔɪ/', meaning: 'cậu bé', symbol: '/ɔɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'F', word: 'day', explanation: "Âm /eɪ/ có trong từ 'day' /deɪ/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'B', word: 'time', explanation: "Âm /aɪ/ có trong từ 'time' /taɪm/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'G', word: 'boy', explanation: "Âm /ɔɪ/ có trong từ 'boy' /bɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'E', word: 'soap', explanation: "Âm /əʊ/ có trong từ 'soap' /səʊp/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'C', word: 'now', explanation: "Âm /aʊ/ có trong từ 'now' /naʊ/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'A', word: 'year', explanation: "Âm /ɪə/ có trong từ 'year' /jɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'D', word: 'care', explanation: "Âm /eə/ có trong từ 'care' /keə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'show', ipa: '/ʃəʊ/', targetSymbol: '/əʊ/', meaning: 'cho xem, buổi diễn' },
      { word: 'wipe', ipa: '/waɪp/', targetSymbol: '/aɪ/', meaning: 'lau chùi' },
      { word: 'down', ipa: '/daʊn/', targetSymbol: '/aʊ/', meaning: 'xuống' },
      { word: 'out', ipa: '/aʊt/', targetSymbol: '/aʊ/', meaning: 'ra ngoài' },
      { word: 'wake', ipa: '/weɪk/', targetSymbol: '/eɪ/', meaning: 'thức dậy' },
      { word: 'night', ipa: '/naɪt/', targetSymbol: '/aɪ/', meaning: 'ban đêm' },
      { word: 'break', ipa: '/breɪk/', targetSymbol: '/eɪ/', meaning: 'giờ ra chơi, làm vỡ' },
      { word: 'hi', ipa: '/haɪ/', targetSymbol: '/aɪ/', meaning: 'xin chào' },
      { word: 'house', ipa: '/haʊs/', targetSymbol: '/aʊ/', meaning: 'ngôi nhà' },
      { word: 'go', ipa: '/ɡəʊ/', targetSymbol: '/əʊ/', meaning: 'đi' },
      { word: 'no', ipa: '/nəʊ/', targetSymbol: '/əʊ/', meaning: 'không' },
      { word: 'date', ipa: '/deɪt/', targetSymbol: '/eɪ/', meaning: 'ngày tháng' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['date', 'wake', 'break'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['night', 'wipe', 'hi'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['go', 'show', 'no'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['out', 'down', 'house'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'noise', ipa: '/nɔɪz/', targetSymbol: '/ɔɪ/', meaning: 'tiếng ồn' },
      { word: 'share', ipa: '/ʃeə/', targetSymbol: '/eə/', meaning: 'chia sẻ' },
      { word: 'stare', ipa: '/steə/', targetSymbol: '/eə/', meaning: 'nhìn chằm chằm' },
      { word: 'voice', ipa: '/vɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'giọng nói' },
      { word: 'dear', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'thân yêu' },
      { word: 'hair', ipa: '/heə/', targetSymbol: '/eə/', meaning: 'mái tóc' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'here', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'ở đây' },
      { word: 'near', ipa: '/nɪə/', targetSymbol: '/ɪə/', meaning: 'gần' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['toy', 'noise', 'voice'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['here', 'dear', 'near'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['share', 'hair', 'stare'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'day',
      templateIpa: '/d_/',
      meaning: 'ngày',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/deɪ/',
      explanation: "Từ 'day' đọc là /deɪ/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 2,
      word: 'no',
      templateIpa: '/n_/',
      meaning: 'không',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/nəʊ/',
      explanation: "Từ 'no' đọc là /nəʊ/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 3,
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
      id: 4,
      word: 'night',
      templateIpa: '/n_t/',
      meaning: 'ban đêm',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/naɪt/',
      explanation: "Từ 'night' đọc là /naɪt/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 5,
      word: 'noise',
      templateIpa: '/n_z/',
      meaning: 'tiếng ồn',
      choiceA: 'ɔː',
      choiceB: 'ɔɪ',
      correctChoice: 'B',
      fullIpa: '/nɔɪz/',
      explanation: "Từ 'noise' đọc là /nɔɪz/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 6,
      word: 'now',
      templateIpa: '/n_/',
      meaning: 'bây giờ',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/naʊ/',
      explanation: "Từ 'now' đọc là /naʊ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 7,
      word: 'down',
      templateIpa: '/d_n/',
      meaning: 'xuống',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/daʊn/',
      explanation: "Từ 'down' đọc là /daʊn/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 8,
      word: 'hair',
      templateIpa: '/h_/',
      meaning: 'mái tóc',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/heə/',
      explanation: "Từ 'hair' đọc là /heə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'soap', ipa: '/səʊp/', vowelSound: '/əʊ/', meaning: 'xà phòng' },
        { letter: 'B', word: 'now', ipa: '/naʊ/', vowelSound: '/aʊ/', meaning: 'bây giờ' },
        { letter: 'C', word: 'out', ipa: '/aʊt/', vowelSound: '/aʊ/', meaning: 'ra ngoài' },
        { letter: 'D', word: 'down', ipa: '/daʊn/', vowelSound: '/aʊ/', meaning: 'xuống' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'soap' mang âm /əʊ/. Còn now, out, down đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'date', ipa: '/deɪt/', vowelSound: '/eɪ/', meaning: 'ngày tháng' },
        { letter: 'B', word: 'break', ipa: '/breɪk/', vowelSound: '/eɪ/', meaning: 'giờ ra chơi, làm vỡ' },
        { letter: 'C', word: 'night', ipa: '/naɪt/', vowelSound: '/aɪ/', meaning: 'ban đêm' },
        { letter: 'D', word: 'wake', ipa: '/weɪk/', vowelSound: '/eɪ/', meaning: 'thức dậy' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'night' mang âm /aɪ/. Còn date, break, wake đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'B', word: 'voice', ipa: '/vɔɪs/', vowelSound: '/ɔɪ/', meaning: 'giọng nói' },
        { letter: 'C', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'D', word: 'show', ipa: '/ʃəʊ/', vowelSound: '/əʊ/', meaning: 'cho xem, buổi diễn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'show' mang âm /əʊ/. Còn boy, voice, toy đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'wipe', ipa: '/waɪp/', vowelSound: '/aɪ/', meaning: 'lau chùi' },
        { letter: 'B', word: 'night', ipa: '/naɪt/', vowelSound: '/aɪ/', meaning: 'ban đêm' },
        { letter: 'C', word: 'time', ipa: '/taɪm/', vowelSound: '/aɪ/', meaning: 'thời gian' },
        { letter: 'D', word: 'break', ipa: '/breɪk/', vowelSound: '/eɪ/', meaning: 'giờ ra chơi, làm vỡ' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'break' mang âm /eɪ/. Còn wipe, night, time đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'hair', ipa: '/heə/', vowelSound: '/eə/', meaning: 'mái tóc' },
        { letter: 'B', word: 'care', ipa: '/keə/', vowelSound: '/eə/', meaning: 'chăm sóc' },
        { letter: 'C', word: 'year', ipa: '/jɪə/', vowelSound: '/ɪə/', meaning: 'năm' },
        { letter: 'D', word: 'stare', ipa: '/steə/', vowelSound: '/eə/', meaning: 'nhìn chằm chằm' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'year' mang âm /ɪə/. Còn hair, care, stare đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'dear', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'thân yêu' },
        { letter: 'B', word: 'near', ipa: '/nɪə/', vowelSound: '/ɪə/', meaning: 'gần' },
        { letter: 'C', word: 'here', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'ở đây' },
        { letter: 'D', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'share' mang âm /eə/. Còn dear, near, here đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'wipe',
      wordMeaning: 'lau chùi',
      fullIpa: '/waɪp/',
      targetSymbol: '/aɪ/',
      choiceA: '/eɪ/',
      choiceB: '/aʊ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'wipe' phát âm là /waɪp/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 2,
      spokenWord: 'stare',
      wordMeaning: 'nhìn chằm chằm',
      fullIpa: '/steə/',
      targetSymbol: '/eə/',
      choiceA: '/ɪə/',
      choiceB: '/əʊ/',
      choiceC: '/eə/',
      correctChoice: 'C',
      explanation: "Từ 'stare' phát âm là /steə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 3,
      spokenWord: 'out',
      wordMeaning: 'ra ngoài',
      fullIpa: '/aʊt/',
      targetSymbol: '/aʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/eɪ/',
      correctChoice: 'B',
      explanation: "Từ 'out' phát âm là /aʊt/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      spokenWord: 'voice',
      wordMeaning: 'giọng nói',
      fullIpa: '/vɔɪs/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/əʊ/',
      choiceB: '/ɔɪ/',
      choiceC: '/ɔː/',
      correctChoice: 'B',
      explanation: "Từ 'voice' phát âm là /vɔɪs/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      spokenWord: 'dear',
      wordMeaning: 'thân yêu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/ɪə/',
      choiceB: '/eə/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'dear' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      spokenWord: 'date',
      wordMeaning: 'ngày tháng',
      fullIpa: '/deɪt/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/ɪə/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'date' phát âm là /deɪt/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'soap',
      wordMeaning: 'xà phòng',
      fullIpa: '/səʊp/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/aʊ/',
      choiceC: '/ɔɪ/',
      correctChoice: 'A',
      explanation: "Từ 'soap' phát âm là /səʊp/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 8,
      spokenWord: 'break',
      wordMeaning: 'giờ ra chơi, làm vỡ',
      fullIpa: '/breɪk/',
      targetSymbol: '/eɪ/',
      choiceA: '/eə/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'B',
      explanation: "Từ 'break' phát âm là /breɪk/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    }
  ]
};
