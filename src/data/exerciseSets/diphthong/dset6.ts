import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 06 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_6: PracticeExamSet = {
  id: 106,
  title: 'Bộ Đề Âm Đôi 06: Cơ thể & Sức khỏe',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Body & Health',
  icon: '👃',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề cơ thể & sức khỏe. Phiên âm giọng Anh, theo bộ đề Word số 06.',
  exercise1: [
    {
      id: 1,
      wordA: 'pen',
      ipaA: '/pen/',
      meaningA: 'cây bút',
      wordB: 'pain',
      ipaB: '/peɪn/',
      meaningB: 'cơn đau',
      targetAudioWord: 'pen',
      correctChoice: 'A',
      explanation: "Cô đọc 'pen' /pen/ có âm /e/ (e ngắn). Còn 'pain' /peɪn/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'side',
      ipaA: '/saɪd/',
      meaningA: 'bên cạnh',
      wordB: 'said',
      ipaB: '/sed/',
      meaningB: 'đã nói',
      targetAudioWord: 'side',
      correctChoice: 'A',
      explanation: "Cô đọc 'side' /saɪd/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'said' /sed/ có âm /e/."
    },
    {
      id: 3,
      wordA: 'boy',
      ipaA: '/bɔɪ/',
      meaningA: 'cậu bé',
      wordB: 'bee',
      ipaB: '/biː/',
      meaningB: 'con ong',
      targetAudioWord: 'bee',
      correctChoice: 'B',
      explanation: "Cô đọc 'bee' /biː/ có âm /iː/ (i dài). Còn 'boy' /bɔɪ/ có âm /ɔɪ/."
    },
    {
      id: 4,
      wordA: 'knees',
      ipaA: '/niːz/',
      meaningA: 'đầu gối',
      wordB: 'nose',
      ipaB: '/nəʊz/',
      meaningB: 'cái mũi',
      targetAudioWord: 'nose',
      correctChoice: 'B',
      explanation: "Cô đọc 'nose' /nəʊz/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'knees' /niːz/ có âm /iː/."
    },
    {
      id: 5,
      wordA: 'math',
      ipaA: '/mæθ/',
      meaningA: 'môn toán',
      wordB: 'mouth',
      ipaB: '/maʊθ/',
      meaningB: 'cái miệng',
      targetAudioWord: 'math',
      correctChoice: 'A',
      explanation: "Cô đọc 'math' /mæθ/ có âm /æ/ (a bẹt). Còn 'mouth' /maʊθ/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'hair',
      ipaA: '/heə/',
      meaningA: 'mái tóc',
      wordB: 'hear',
      ipaB: '/hɪə/',
      meaningB: 'nghe',
      targetAudioWord: 'hear',
      correctChoice: 'B',
      explanation: "Cô đọc 'hear' /hɪə/ có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/). Còn 'hair' /heə/ có âm /eə/."
    },
    {
      id: 7,
      wordA: 'heart',
      ipaA: '/hɑːt/',
      meaningA: 'trái tim',
      wordB: 'hair',
      ipaB: '/heə/',
      meaningB: 'mái tóc',
      targetAudioWord: 'hair',
      correctChoice: 'B',
      explanation: "Cô đọc 'hair' /heə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'heart' /hɑːt/ có âm /ɑː/."
    },
    {
      id: 8,
      wordA: 'bone',
      ipaA: '/bəʊn/',
      meaningA: 'xương',
      wordB: 'bun',
      ipaB: '/bʌn/',
      meaningB: 'bánh bao, bánh mì tròn',
      targetAudioWord: 'bun',
      correctChoice: 'B',
      explanation: "Cô đọc 'bun' /bʌn/ có âm /ʌ/ (ă ngắn). Còn 'bone' /bəʊn/ có âm /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'ear', ipa: '/ɪə/', meaning: 'cái tai', symbol: '/ɪə/' },
    { id: 'B', word: 'ouch', ipa: '/aʊtʃ/', meaning: 'á, đau quá', symbol: '/aʊ/' },
    { id: 'C', word: 'eye', ipa: '/aɪ/', meaning: 'con mắt', symbol: '/aɪ/' },
    { id: 'D', word: 'nose', ipa: '/nəʊz/', meaning: 'cái mũi', symbol: '/əʊ/' },
    { id: 'E', word: 'boy', ipa: '/bɔɪ/', meaning: 'cậu bé', symbol: '/ɔɪ/' },
    { id: 'F', word: 'hair', ipa: '/heə/', meaning: 'mái tóc', symbol: '/eə/' },
    { id: 'G', word: 'face', ipa: '/feɪs/', meaning: 'khuôn mặt', symbol: '/eɪ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'G', word: 'face', explanation: "Âm /eɪ/ có trong từ 'face' /feɪs/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'C', word: 'eye', explanation: "Âm /aɪ/ có trong từ 'eye' /aɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'E', word: 'boy', explanation: "Âm /ɔɪ/ có trong từ 'boy' /bɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'D', word: 'nose', explanation: "Âm /əʊ/ có trong từ 'nose' /nəʊz/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'B', word: 'ouch', explanation: "Âm /aʊ/ có trong từ 'ouch' /aʊtʃ/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'A', word: 'ear', explanation: "Âm /ɪə/ có trong từ 'ear' /ɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'F', word: 'hair', explanation: "Âm /eə/ có trong từ 'hair' /heə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'side', ipa: '/saɪd/', targetSymbol: '/aɪ/', meaning: 'bên cạnh' },
      { word: 'how', ipa: '/haʊ/', targetSymbol: '/aʊ/', meaning: 'như thế nào' },
      { word: 'nail', ipa: '/neɪl/', targetSymbol: '/eɪ/', meaning: 'móng tay' },
      { word: 'brain', ipa: '/breɪn/', targetSymbol: '/eɪ/', meaning: 'bộ não' },
      { word: 'toe', ipa: '/təʊ/', targetSymbol: '/əʊ/', meaning: 'ngón chân' },
      { word: 'brow', ipa: '/braʊ/', targetSymbol: '/aʊ/', meaning: 'lông mày' },
      { word: 'shout', ipa: '/ʃaʊt/', targetSymbol: '/aʊ/', meaning: 'hét to' },
      { word: 'high', ipa: '/haɪ/', targetSymbol: '/aɪ/', meaning: 'cao' },
      { word: 'bone', ipa: '/bəʊn/', targetSymbol: '/əʊ/', meaning: 'xương' },
      { word: 'pain', ipa: '/peɪn/', targetSymbol: '/eɪ/', meaning: 'cơn đau' },
      { word: 'throat', ipa: '/θrəʊt/', targetSymbol: '/əʊ/', meaning: 'cổ họng' },
      { word: 'smile', ipa: '/smaɪl/', targetSymbol: '/aɪ/', meaning: 'mỉm cười' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['nail', 'brain', 'pain'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['smile', 'side', 'high'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['toe', 'bone', 'throat'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['brow', 'shout', 'how'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'point', ipa: '/pɔɪnt/', targetSymbol: '/ɔɪ/', meaning: 'chỉ tay, điểm' },
      { word: 'beard', ipa: '/bɪəd/', targetSymbol: '/ɪə/', meaning: 'bộ râu' },
      { word: 'fear', ipa: '/fɪə/', targetSymbol: '/ɪə/', meaning: 'nỗi sợ' },
      { word: 'care', ipa: '/keə/', targetSymbol: '/eə/', meaning: 'chăm sóc' },
      { word: 'stare', ipa: '/steə/', targetSymbol: '/eə/', meaning: 'nhìn chằm chằm' },
      { word: 'air', ipa: '/eə/', targetSymbol: '/eə/', meaning: 'không khí' },
      { word: 'joy', ipa: '/dʒɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'niềm vui' },
      { word: 'voice', ipa: '/vɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'giọng nói' },
      { word: 'hear', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'nghe' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['voice', 'point', 'joy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['beard', 'hear', 'fear'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['stare', 'air', 'care'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'joy',
      templateIpa: '/dʒ_/',
      meaning: 'niềm vui',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/dʒɔɪ/',
      explanation: "Từ 'joy' đọc là /dʒɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 2,
      word: 'side',
      templateIpa: '/s_d/',
      meaning: 'bên cạnh',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/saɪd/',
      explanation: "Từ 'side' đọc là /saɪd/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 3,
      word: 'care',
      templateIpa: '/k_/',
      meaning: 'chăm sóc',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/keə/',
      explanation: "Từ 'care' đọc là /keə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    },
    {
      id: 4,
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
      id: 5,
      word: 'brow',
      templateIpa: '/br_/',
      meaning: 'lông mày',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'A',
      fullIpa: '/braʊ/',
      explanation: "Từ 'brow' đọc là /braʊ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'nail',
      templateIpa: '/n_l/',
      meaning: 'móng tay',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'B',
      fullIpa: '/neɪl/',
      explanation: "Từ 'nail' đọc là /neɪl/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 7,
      word: 'how',
      templateIpa: '/h_/',
      meaning: 'như thế nào',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/haʊ/',
      explanation: "Từ 'how' đọc là /haʊ/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 8,
      word: 'nose',
      templateIpa: '/n_z/',
      meaning: 'cái mũi',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/nəʊz/',
      explanation: "Từ 'nose' đọc là /nəʊz/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'ouch', ipa: '/aʊtʃ/', vowelSound: '/aʊ/', meaning: 'á, đau quá' },
        { letter: 'B', word: 'brow', ipa: '/braʊ/', vowelSound: '/aʊ/', meaning: 'lông mày' },
        { letter: 'C', word: 'toe', ipa: '/təʊ/', vowelSound: '/əʊ/', meaning: 'ngón chân' },
        { letter: 'D', word: 'shout', ipa: '/ʃaʊt/', vowelSound: '/aʊ/', meaning: 'hét to' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'toe' mang âm /əʊ/. Còn ouch, brow, shout đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'nail', ipa: '/neɪl/', vowelSound: '/eɪ/', meaning: 'móng tay' },
        { letter: 'B', word: 'side', ipa: '/saɪd/', vowelSound: '/aɪ/', meaning: 'bên cạnh' },
        { letter: 'C', word: 'pain', ipa: '/peɪn/', vowelSound: '/eɪ/', meaning: 'cơn đau' },
        { letter: 'D', word: 'brain', ipa: '/breɪn/', vowelSound: '/eɪ/', meaning: 'bộ não' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'side' mang âm /aɪ/. Còn nail, pain, brain đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'fear', ipa: '/fɪə/', vowelSound: '/ɪə/', meaning: 'nỗi sợ' },
        { letter: 'B', word: 'care', ipa: '/keə/', vowelSound: '/eə/', meaning: 'chăm sóc' },
        { letter: 'C', word: 'stare', ipa: '/steə/', vowelSound: '/eə/', meaning: 'nhìn chằm chằm' },
        { letter: 'D', word: 'hair', ipa: '/heə/', vowelSound: '/eə/', meaning: 'mái tóc' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'fear' mang âm /ɪə/. Còn care, stare, hair đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'bone', ipa: '/bəʊn/', vowelSound: '/əʊ/', meaning: 'xương' },
        { letter: 'B', word: 'nose', ipa: '/nəʊz/', vowelSound: '/əʊ/', meaning: 'cái mũi' },
        { letter: 'C', word: 'ouch', ipa: '/aʊtʃ/', vowelSound: '/aʊ/', meaning: 'á, đau quá' },
        { letter: 'D', word: 'throat', ipa: '/θrəʊt/', vowelSound: '/əʊ/', meaning: 'cổ họng' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'ouch' mang âm /aʊ/. Còn bone, nose, throat đều mang âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'ear', ipa: '/ɪə/', vowelSound: '/ɪə/', meaning: 'cái tai' },
        { letter: 'B', word: 'stare', ipa: '/steə/', vowelSound: '/eə/', meaning: 'nhìn chằm chằm' },
        { letter: 'C', word: 'beard', ipa: '/bɪəd/', vowelSound: '/ɪə/', meaning: 'bộ râu' },
        { letter: 'D', word: 'hear', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'nghe' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'stare' mang âm /eə/. Còn ear, beard, hear đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'point', ipa: '/pɔɪnt/', vowelSound: '/ɔɪ/', meaning: 'chỉ tay, điểm' },
        { letter: 'B', word: 'boy', ipa: '/bɔɪ/', vowelSound: '/ɔɪ/', meaning: 'cậu bé' },
        { letter: 'C', word: 'bone', ipa: '/bəʊn/', vowelSound: '/əʊ/', meaning: 'xương' },
        { letter: 'D', word: 'joy', ipa: '/dʒɔɪ/', vowelSound: '/ɔɪ/', meaning: 'niềm vui' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'bone' mang âm /əʊ/. Còn point, boy, joy đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'shout',
      wordMeaning: 'hét to',
      fullIpa: '/ʃaʊt/',
      targetSymbol: '/aʊ/',
      choiceA: '/aʊ/',
      choiceB: '/eɪ/',
      choiceC: '/əʊ/',
      correctChoice: 'A',
      explanation: "Từ 'shout' phát âm là /ʃaʊt/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 2,
      spokenWord: 'high',
      wordMeaning: 'cao',
      fullIpa: '/haɪ/',
      targetSymbol: '/aɪ/',
      choiceA: '/eə/',
      choiceB: '/eɪ/',
      choiceC: '/aɪ/',
      correctChoice: 'C',
      explanation: "Từ 'high' phát âm là /haɪ/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'face',
      wordMeaning: 'khuôn mặt',
      fullIpa: '/feɪs/',
      targetSymbol: '/eɪ/',
      choiceA: '/eɪ/',
      choiceB: '/aɪ/',
      choiceC: '/eə/',
      correctChoice: 'A',
      explanation: "Từ 'face' phát âm là /feɪs/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 4,
      spokenWord: 'fear',
      wordMeaning: 'nỗi sợ',
      fullIpa: '/fɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/ɪə/',
      choiceB: '/eɪ/',
      choiceC: '/eə/',
      correctChoice: 'A',
      explanation: "Từ 'fear' phát âm là /fɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'hair',
      wordMeaning: 'mái tóc',
      fullIpa: '/heə/',
      targetSymbol: '/eə/',
      choiceA: '/ɪə/',
      choiceB: '/əʊ/',
      choiceC: '/eə/',
      correctChoice: 'C',
      explanation: "Từ 'hair' phát âm là /heə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 6,
      spokenWord: 'brain',
      wordMeaning: 'bộ não',
      fullIpa: '/breɪn/',
      targetSymbol: '/eɪ/',
      choiceA: '/aɪ/',
      choiceB: '/əʊ/',
      choiceC: '/eɪ/',
      correctChoice: 'C',
      explanation: "Từ 'brain' phát âm là /breɪn/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'boy',
      wordMeaning: 'cậu bé',
      fullIpa: '/bɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔː/',
      choiceB: '/ɔɪ/',
      choiceC: '/əʊ/',
      correctChoice: 'B',
      explanation: "Từ 'boy' phát âm là /bɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 8,
      spokenWord: 'toe',
      wordMeaning: 'ngón chân',
      fullIpa: '/təʊ/',
      targetSymbol: '/əʊ/',
      choiceA: '/aʊ/',
      choiceB: '/əʊ/',
      choiceC: '/eə/',
      correctChoice: 'B',
      explanation: "Từ 'toe' phát âm là /təʊ/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    }
  ]
};
