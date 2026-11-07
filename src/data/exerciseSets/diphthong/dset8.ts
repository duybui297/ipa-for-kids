import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 08 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_8: PracticeExamSet = {
  id: 108,
  title: 'Bộ Đề Âm Đôi 08: Thời tiết & Mùa',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Weather & Seasons',
  icon: '🌧️',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề thời tiết & mùa. Phiên âm giọng Anh, theo bộ đề Word số 08.',
  exercise1: [
    {
      id: 1,
      wordA: 'ran',
      ipaA: '/ræn/',
      meaningA: 'đã chạy',
      wordB: 'rain',
      ipaB: '/reɪn/',
      meaningB: 'mưa',
      targetAudioWord: 'rain',
      correctChoice: 'B',
      explanation: "Cô đọc 'rain' /reɪn/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'ran' /ræn/ có âm /æ/."
    },
    {
      id: 2,
      wordA: 'ski',
      ipaA: '/skiː/',
      meaningA: 'trượt tuyết',
      wordB: 'sky',
      ipaB: '/skaɪ/',
      meaningB: 'bầu trời',
      targetAudioWord: 'ski',
      correctChoice: 'A',
      explanation: "Cô đọc 'ski' /skiː/ có âm /iː/ (i dài). Còn 'sky' /skaɪ/ có âm /aɪ/."
    },
    {
      id: 3,
      wordA: 'nose',
      ipaA: '/nəʊz/',
      meaningA: 'cái mũi',
      wordB: 'noise',
      ipaB: '/nɔɪz/',
      meaningB: 'tiếng ồn',
      targetAudioWord: 'nose',
      correctChoice: 'A',
      explanation: "Cô đọc 'nose' /nəʊz/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'noise' /nɔɪz/ có âm /ɔɪ/."
    },
    {
      id: 4,
      wordA: 'cold',
      ipaA: '/kəʊld/',
      meaningA: 'lạnh',
      wordB: 'called',
      ipaB: '/kɔːld/',
      meaningB: 'đã gọi',
      targetAudioWord: 'called',
      correctChoice: 'B',
      explanation: "Cô đọc 'called' /kɔːld/ có âm /ɔː/ (o dài). Còn 'cold' /kəʊld/ có âm /əʊ/."
    },
    {
      id: 5,
      wordA: 'no',
      ipaA: '/nəʊ/',
      meaningA: 'không',
      wordB: 'now',
      ipaB: '/naʊ/',
      meaningB: 'bây giờ',
      targetAudioWord: 'no',
      correctChoice: 'A',
      explanation: "Cô đọc 'no' /nəʊ/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'now' /naʊ/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'clay',
      ipaA: '/kleɪ/',
      meaningA: 'đất sét',
      wordB: 'clear',
      ipaB: '/klɪə/',
      meaningB: 'trong trẻo',
      targetAudioWord: 'clay',
      correctChoice: 'A',
      explanation: "Cô đọc 'clay' /kleɪ/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'clear' /klɪə/ có âm /ɪə/."
    },
    {
      id: 7,
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
      id: 8,
      wordA: 'hail',
      ipaA: '/heɪl/',
      meaningA: 'mưa đá',
      wordB: 'hill',
      ipaB: '/hɪl/',
      meaningB: 'ngọn đồi',
      targetAudioWord: 'hail',
      correctChoice: 'A',
      explanation: "Cô đọc 'hail' /heɪl/ có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/). Còn 'hill' /hɪl/ có âm /ɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'clear', ipa: '/klɪə/', meaning: 'trong trẻo', symbol: '/ɪə/' },
    { id: 'B', word: 'rain', ipa: '/reɪn/', meaning: 'mưa', symbol: '/eɪ/' },
    { id: 'C', word: 'air', ipa: '/eə/', meaning: 'không khí', symbol: '/eə/' },
    { id: 'D', word: 'sky', ipa: '/skaɪ/', meaning: 'bầu trời', symbol: '/aɪ/' },
    { id: 'E', word: 'noise', ipa: '/nɔɪz/', meaning: 'tiếng ồn', symbol: '/ɔɪ/' },
    { id: 'F', word: 'snow', ipa: '/snəʊ/', meaning: 'tuyết', symbol: '/əʊ/' },
    { id: 'G', word: 'cloud', ipa: '/klaʊd/', meaning: 'đám mây', symbol: '/aʊ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'B', word: 'rain', explanation: "Âm /eɪ/ có trong từ 'rain' /reɪn/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'D', word: 'sky', explanation: "Âm /aɪ/ có trong từ 'sky' /skaɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'E', word: 'noise', explanation: "Âm /ɔɪ/ có trong từ 'noise' /nɔɪz/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'F', word: 'snow', explanation: "Âm /əʊ/ có trong từ 'snow' /snəʊ/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'G', word: 'cloud', explanation: "Âm /aʊ/ có trong từ 'cloud' /klaʊd/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'A', word: 'clear', explanation: "Âm /ɪə/ có trong từ 'clear' /klɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'C', word: 'air', explanation: "Âm /eə/ có trong từ 'air' /eə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'sound', ipa: '/saʊnd/', targetSymbol: '/aʊ/', meaning: 'âm thanh' },
      { word: 'shine', ipa: '/ʃaɪn/', targetSymbol: '/aɪ/', meaning: 'chiếu sáng' },
      { word: 'grow', ipa: '/ɡrəʊ/', targetSymbol: '/əʊ/', meaning: 'lớn lên' },
      { word: 'wave', ipa: '/weɪv/', targetSymbol: '/eɪ/', meaning: 'con sóng, vẫy tay' },
      { word: 'now', ipa: '/naʊ/', targetSymbol: '/aʊ/', meaning: 'bây giờ' },
      { word: 'south', ipa: '/saʊθ/', targetSymbol: '/aʊ/', meaning: 'phía nam' },
      { word: 'gray', ipa: '/ɡreɪ/', targetSymbol: '/eɪ/', meaning: 'màu xám' },
      { word: 'blow', ipa: '/bləʊ/', targetSymbol: '/əʊ/', meaning: 'thổi' },
      { word: 'hail', ipa: '/heɪl/', targetSymbol: '/eɪ/', meaning: 'mưa đá' },
      { word: 'bright', ipa: '/braɪt/', targetSymbol: '/aɪ/', meaning: 'sáng chói' },
      { word: 'cold', ipa: '/kəʊld/', targetSymbol: '/əʊ/', meaning: 'lạnh' },
      { word: 'dry', ipa: '/draɪ/', targetSymbol: '/aɪ/', meaning: 'khô' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['gray', 'wave', 'hail'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['bright', 'dry', 'shine'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['cold', 'blow', 'grow'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['south', 'sound', 'now'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'deer', ipa: '/dɪə/', targetSymbol: '/ɪə/', meaning: 'con hươu' },
      { word: 'year', ipa: '/jɪə/', targetSymbol: '/ɪə/', meaning: 'năm' },
      { word: 'fair', ipa: '/feə/', targetSymbol: '/eə/', meaning: 'hội chợ, công bằng' },
      { word: 'wear', ipa: '/weə/', targetSymbol: '/eə/', meaning: 'mặc' },
      { word: 'soil', ipa: '/sɔɪl/', targetSymbol: '/ɔɪ/', meaning: 'đất trồng' },
      { word: 'joy', ipa: '/dʒɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'niềm vui' },
      { word: 'bear', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'con gấu' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'peer', ipa: '/pɪə/', targetSymbol: '/ɪə/', meaning: 'nhìn kỹ' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['joy', 'soil', 'toy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['deer', 'peer', 'year'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['fair', 'wear', 'bear'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'clear',
      templateIpa: '/kl_/',
      meaning: 'trong trẻo',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'B',
      fullIpa: '/klɪə/',
      explanation: "Từ 'clear' đọc là /klɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 2,
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
      id: 3,
      word: 'cold',
      templateIpa: '/k_ld/',
      meaning: 'lạnh',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/kəʊld/',
      explanation: "Từ 'cold' đọc là /kəʊld/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 4,
      word: 'hail',
      templateIpa: '/h_l/',
      meaning: 'mưa đá',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/heɪl/',
      explanation: "Từ 'hail' đọc là /heɪl/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 5,
      word: 'sky',
      templateIpa: '/sk_/',
      meaning: 'bầu trời',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/skaɪ/',
      explanation: "Từ 'sky' đọc là /skaɪ/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 6,
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
      id: 7,
      word: 'fair',
      templateIpa: '/f_/',
      meaning: 'hội chợ, công bằng',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/feə/',
      explanation: "Từ 'fair' đọc là /feə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 8,
      word: 'blow',
      templateIpa: '/bl_/',
      meaning: 'thổi',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/bləʊ/',
      explanation: "Từ 'blow' đọc là /bləʊ/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'bear', ipa: '/beə/', vowelSound: '/eə/', meaning: 'con gấu' },
        { letter: 'B', word: 'year', ipa: '/jɪə/', vowelSound: '/ɪə/', meaning: 'năm' },
        { letter: 'C', word: 'peer', ipa: '/pɪə/', vowelSound: '/ɪə/', meaning: 'nhìn kỹ' },
        { letter: 'D', word: 'deer', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'con hươu' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'bear' mang âm /eə/. Còn year, peer, deer đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'cloud', ipa: '/klaʊd/', vowelSound: '/aʊ/', meaning: 'đám mây' },
        { letter: 'B', word: 'south', ipa: '/saʊθ/', vowelSound: '/aʊ/', meaning: 'phía nam' },
        { letter: 'C', word: 'sound', ipa: '/saʊnd/', vowelSound: '/aʊ/', meaning: 'âm thanh' },
        { letter: 'D', word: 'snow', ipa: '/snəʊ/', vowelSound: '/əʊ/', meaning: 'tuyết' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'snow' mang âm /əʊ/. Còn cloud, south, sound đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'wear', ipa: '/weə/', vowelSound: '/eə/', meaning: 'mặc' },
        { letter: 'B', word: 'deer', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'con hươu' },
        { letter: 'C', word: 'air', ipa: '/eə/', vowelSound: '/eə/', meaning: 'không khí' },
        { letter: 'D', word: 'bear', ipa: '/beə/', vowelSound: '/eə/', meaning: 'con gấu' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'deer' mang âm /ɪə/. Còn wear, air, bear đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'wave', ipa: '/weɪv/', vowelSound: '/eɪ/', meaning: 'con sóng, vẫy tay' },
        { letter: 'B', word: 'shine', ipa: '/ʃaɪn/', vowelSound: '/aɪ/', meaning: 'chiếu sáng' },
        { letter: 'C', word: 'dry', ipa: '/draɪ/', vowelSound: '/aɪ/', meaning: 'khô' },
        { letter: 'D', word: 'sky', ipa: '/skaɪ/', vowelSound: '/aɪ/', meaning: 'bầu trời' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'wave' mang âm /eɪ/. Còn shine, dry, sky đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'B', word: 'grow', ipa: '/ɡrəʊ/', vowelSound: '/əʊ/', meaning: 'lớn lên' },
        { letter: 'C', word: 'soil', ipa: '/sɔɪl/', vowelSound: '/ɔɪ/', meaning: 'đất trồng' },
        { letter: 'D', word: 'joy', ipa: '/dʒɔɪ/', vowelSound: '/ɔɪ/', meaning: 'niềm vui' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'grow' mang âm /əʊ/. Còn toy, soil, joy đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'grow', ipa: '/ɡrəʊ/', vowelSound: '/əʊ/', meaning: 'lớn lên' },
        { letter: 'B', word: 'snow', ipa: '/snəʊ/', vowelSound: '/əʊ/', meaning: 'tuyết' },
        { letter: 'C', word: 'blow', ipa: '/bləʊ/', vowelSound: '/əʊ/', meaning: 'thổi' },
        { letter: 'D', word: 'cloud', ipa: '/klaʊd/', vowelSound: '/aʊ/', meaning: 'đám mây' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cloud' mang âm /aʊ/. Còn grow, snow, blow đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'deer',
      wordMeaning: 'con hươu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/eə/',
      choiceB: '/eɪ/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'deer' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'cloud',
      wordMeaning: 'đám mây',
      fullIpa: '/klaʊd/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/aɪ/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'cloud' phát âm là /klaʊd/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 3,
      spokenWord: 'blow',
      wordMeaning: 'thổi',
      fullIpa: '/bləʊ/',
      targetSymbol: '/əʊ/',
      choiceA: '/əʊ/',
      choiceB: '/ɪə/',
      choiceC: '/aʊ/',
      correctChoice: 'A',
      explanation: "Từ 'blow' phát âm là /bləʊ/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      spokenWord: 'grow',
      wordMeaning: 'lớn lên',
      fullIpa: '/ɡrəʊ/',
      targetSymbol: '/əʊ/',
      choiceA: '/aʊ/',
      choiceB: '/eə/',
      choiceC: '/əʊ/',
      correctChoice: 'C',
      explanation: "Từ 'grow' phát âm là /ɡrəʊ/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      spokenWord: 'soil',
      wordMeaning: 'đất trồng',
      fullIpa: '/sɔɪl/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/əʊ/',
      choiceC: '/ɔɪ/',
      correctChoice: 'C',
      explanation: "Từ 'soil' phát âm là /sɔɪl/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 6,
      spokenWord: 'bright',
      wordMeaning: 'sáng chói',
      fullIpa: '/braɪt/',
      targetSymbol: '/aɪ/',
      choiceA: '/ɪə/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'bright' phát âm là /braɪt/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'rain',
      wordMeaning: 'mưa',
      fullIpa: '/reɪn/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/eə/',
      choiceC: '/aɪ/',
      correctChoice: 'A',
      explanation: "Từ 'rain' phát âm là /reɪn/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 8,
      spokenWord: 'wear',
      wordMeaning: 'mặc',
      fullIpa: '/weə/',
      targetSymbol: '/eə/',
      choiceA: '/əʊ/',
      choiceB: '/ɪə/',
      choiceC: '/eə/',
      correctChoice: 'C',
      explanation: "Từ 'wear' phát âm là /weə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    }
  ]
};
