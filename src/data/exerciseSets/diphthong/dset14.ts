import { PracticeExamSet } from '../types';

// Bộ đề nguyên âm đôi 14 (sinh tự động từ tài liệu 'Bộ đề nguyên âm đôi 14 bộ').
export const DIPHTHONG_SET_14: PracticeExamSet = {
  id: 114,
  title: 'Bộ Đề Âm Đôi 14: Cảm xúc & Bạn bè',
  subtitle: 'Nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/',
  badge: 'Âm đôi',
  topic: 'Feelings & Friends',
  icon: '😊',
  description: 'Luyện 7 nguyên âm đôi /eɪ/, /aɪ/, /ɔɪ/, /əʊ/, /aʊ/, /ɪə/, /eə/ qua chủ đề cảm xúc & bạn bè. Phiên âm giọng Anh, theo bộ đề Word số 14.',
  exercise1: [
    {
      id: 1,
      wordA: 'same',
      ipaA: '/seɪm/',
      meaningA: 'giống nhau',
      wordB: 'some',
      ipaB: '/sʌm/',
      meaningB: 'một vài',
      targetAudioWord: 'some',
      correctChoice: 'B',
      explanation: "Cô đọc 'some' /sʌm/ có âm /ʌ/ (ă ngắn). Còn 'same' /seɪm/ có âm /eɪ/."
    },
    {
      id: 2,
      wordA: 'shy',
      ipaA: '/ʃaɪ/',
      meaningA: 'nhút nhát',
      wordB: 'she',
      ipaB: '/ʃiː/',
      meaningB: 'cô ấy',
      targetAudioWord: 'shy',
      correctChoice: 'A',
      explanation: "Cô đọc 'shy' /ʃaɪ/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'she' /ʃiː/ có âm /iː/."
    },
    {
      id: 3,
      wordA: 'joy',
      ipaA: '/dʒɔɪ/',
      meaningA: 'niềm vui',
      wordB: 'jaw',
      ipaB: '/dʒɔː/',
      meaningB: 'quai hàm',
      targetAudioWord: 'joy',
      correctChoice: 'A',
      explanation: "Cô đọc 'joy' /dʒɔɪ/ có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/). Còn 'jaw' /dʒɔː/ có âm /ɔː/."
    },
    {
      id: 4,
      wordA: 'hop',
      ipaA: '/hɒp/',
      meaningA: 'nhảy lò cò',
      wordB: 'hope',
      ipaB: '/həʊp/',
      meaningB: 'hy vọng',
      targetAudioWord: 'hope',
      correctChoice: 'B',
      explanation: "Cô đọc 'hope' /həʊp/ có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/). Còn 'hop' /hɒp/ có âm /ɒ/."
    },
    {
      id: 5,
      wordA: 'pride',
      ipaA: '/praɪd/',
      meaningA: 'niềm tự hào',
      wordB: 'proud',
      ipaB: '/praʊd/',
      meaningB: 'tự hào',
      targetAudioWord: 'pride',
      correctChoice: 'A',
      explanation: "Cô đọc 'pride' /praɪd/ có âm /aɪ/ (há to rồi khép dần về /ɪ/). Còn 'proud' /praʊd/ có âm /aʊ/."
    },
    {
      id: 6,
      wordA: 'cheer',
      ipaA: '/tʃɪə/',
      meaningA: 'cổ vũ',
      wordB: 'church',
      ipaB: '/tʃɜːtʃ/',
      meaningB: 'nhà thờ',
      targetAudioWord: 'church',
      correctChoice: 'B',
      explanation: "Cô đọc 'church' /tʃɜːtʃ/ có âm /ɜː/ (ơ dài). Còn 'cheer' /tʃɪə/ có âm /ɪə/."
    },
    {
      id: 7,
      wordA: 'share',
      ipaA: '/ʃeə/',
      meaningA: 'chia sẻ',
      wordB: 'shore',
      ipaB: '/ʃɔː/',
      meaningB: 'bờ biển',
      targetAudioWord: 'share',
      correctChoice: 'A',
      explanation: "Cô đọc 'share' /ʃeə/ có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/). Còn 'shore' /ʃɔː/ có âm /ɔː/."
    },
    {
      id: 8,
      wordA: 'jack',
      ipaA: '/dʒæk/',
      meaningA: 'cái kích xe',
      wordB: 'joke',
      ipaB: '/dʒəʊk/',
      meaningB: 'câu đùa',
      targetAudioWord: 'jack',
      correctChoice: 'A',
      explanation: "Cô đọc 'jack' /dʒæk/ có âm /æ/ (a bẹt). Còn 'joke' /dʒəʊk/ có âm /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'great', ipa: '/ɡreɪt/', meaning: 'tuyệt vời', symbol: '/eɪ/' },
    { id: 'B', word: 'care', ipa: '/keə/', meaning: 'chăm sóc', symbol: '/eə/' },
    { id: 'C', word: 'shy', ipa: '/ʃaɪ/', meaning: 'nhút nhát', symbol: '/aɪ/' },
    { id: 'D', word: 'dear', ipa: '/dɪə/', meaning: 'thân yêu', symbol: '/ɪə/' },
    { id: 'E', word: 'joy', ipa: '/dʒɔɪ/', meaning: 'niềm vui', symbol: '/ɔɪ/' },
    { id: 'F', word: 'joke', ipa: '/dʒəʊk/', meaning: 'câu đùa', symbol: '/əʊ/' },
    { id: 'G', word: 'proud', ipa: '/praʊd/', meaning: 'tự hào', symbol: '/aʊ/' }
  ],
  exercise2Symbols: [
    { symbol: '/eɪ/', targetWordId: 'A', word: 'great', explanation: "Âm /eɪ/ có trong từ 'great' /ɡreɪt/: bắt đầu như /e/ rồi dẹt dần về /ɪ/." },
    { symbol: '/aɪ/', targetWordId: 'C', word: 'shy', explanation: "Âm /aɪ/ có trong từ 'shy' /ʃaɪ/: há to rồi khép dần về /ɪ/." },
    { symbol: '/ɔɪ/', targetWordId: 'E', word: 'joy', explanation: "Âm /ɔɪ/ có trong từ 'joy' /dʒɔɪ/: môi tròn rồi dẹt dần về /ɪ/." },
    { symbol: '/əʊ/', targetWordId: 'F', word: 'joke', explanation: "Âm /əʊ/ có trong từ 'joke' /dʒəʊk/: thả lỏng rồi tròn môi dần về /ʊ/." },
    { symbol: '/aʊ/', targetWordId: 'G', word: 'proud', explanation: "Âm /aʊ/ có trong từ 'proud' /praʊd/: há to rồi tròn môi dần về /ʊ/." },
    { symbol: '/ɪə/', targetWordId: 'D', word: 'dear', explanation: "Âm /ɪə/ có trong từ 'dear' /dɪə/: dẹt nhẹ rồi thả lỏng về /ə/." },
    { symbol: '/eə/', targetWordId: 'B', word: 'care', explanation: "Âm /eə/ có trong từ 'care' /keə/: bắt đầu như /e/ rồi thả lỏng về /ə/." }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /eɪ/, /aɪ/, /əʊ/, /aʊ/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'note', ipa: '/nəʊt/', targetSymbol: '/əʊ/', meaning: 'ghi chú' },
      { word: 'fine', ipa: '/faɪn/', targetSymbol: '/aɪ/', meaning: 'khỏe, ổn' },
      { word: 'own', ipa: '/əʊn/', targetSymbol: '/əʊ/', meaning: 'của riêng' },
      { word: 'kind', ipa: '/kaɪnd/', targetSymbol: '/aɪ/', meaning: 'tốt bụng' },
      { word: 'cry', ipa: '/kraɪ/', targetSymbol: '/aɪ/', meaning: 'khóc' },
      { word: 'shout', ipa: '/ʃaʊt/', targetSymbol: '/aʊ/', meaning: 'hét to' },
      { word: 'hope', ipa: '/həʊp/', targetSymbol: '/əʊ/', meaning: 'hy vọng' },
      { word: 'brave', ipa: '/breɪv/', targetSymbol: '/eɪ/', meaning: 'dũng cảm' },
      { word: 'frown', ipa: '/fraʊn/', targetSymbol: '/aʊ/', meaning: 'cau mày' },
      { word: 'wait', ipa: '/weɪt/', targetSymbol: '/eɪ/', meaning: 'chờ đợi' },
      { word: 'loud', ipa: '/laʊd/', targetSymbol: '/aʊ/', meaning: 'to, ồn' },
      { word: 'same', ipa: '/seɪm/', targetSymbol: '/eɪ/', meaning: 'giống nhau' }
    ],
    houses: [
      { symbol: '/eɪ/', soundName: 'Nhà ây', words: ['brave', 'same', 'wait'], color: 'text-emerald-700', borderColor: 'border-emerald-300', bgLight: 'bg-emerald-50' },
      { symbol: '/aɪ/', soundName: 'Nhà ai', words: ['cry', 'kind', 'fine'], color: 'text-sky-700', borderColor: 'border-sky-300', bgLight: 'bg-sky-50' },
      { symbol: '/əʊ/', soundName: 'Nhà âu', words: ['hope', 'own', 'note'], color: 'text-amber-700', borderColor: 'border-amber-300', bgLight: 'bg-amber-50' },
      { symbol: '/aʊ/', soundName: 'Nhà ao', words: ['frown', 'shout', 'loud'], color: 'text-rose-700', borderColor: 'border-rose-300', bgLight: 'bg-rose-50' }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 3 ngôi nhà /ɔɪ/, /ɪə/, /eə/',
    instruction: 'Mỗi ngôi nhà là một nguyên âm đôi. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'cheer', ipa: '/tʃɪə/', targetSymbol: '/ɪə/', meaning: 'cổ vũ' },
      { word: 'bear', ipa: '/beə/', targetSymbol: '/eə/', meaning: 'con gấu' },
      { word: 'voice', ipa: '/vɔɪs/', targetSymbol: '/ɔɪ/', meaning: 'giọng nói' },
      { word: 'share', ipa: '/ʃeə/', targetSymbol: '/eə/', meaning: 'chia sẻ' },
      { word: 'hear', ipa: '/hɪə/', targetSymbol: '/ɪə/', meaning: 'nghe' },
      { word: 'join', ipa: '/dʒɔɪn/', targetSymbol: '/ɔɪ/', meaning: 'tham gia' },
      { word: 'toy', ipa: '/tɔɪ/', targetSymbol: '/ɔɪ/', meaning: 'đồ chơi' },
      { word: 'fear', ipa: '/fɪə/', targetSymbol: '/ɪə/', meaning: 'nỗi sợ' },
      { word: 'stare', ipa: '/steə/', targetSymbol: '/eə/', meaning: 'nhìn chằm chằm' }
    ],
    houses: [
      { symbol: '/ɔɪ/', soundName: 'Nhà oi', words: ['voice', 'join', 'toy'], color: 'text-purple-700', borderColor: 'border-purple-300', bgLight: 'bg-purple-50' },
      { symbol: '/ɪə/', soundName: 'Nhà ia', words: ['cheer', 'fear', 'hear'], color: 'text-teal-700', borderColor: 'border-teal-300', bgLight: 'bg-teal-50' },
      { symbol: '/eə/', soundName: 'Nhà ea', words: ['share', 'stare', 'bear'], color: 'text-indigo-700', borderColor: 'border-indigo-300', bgLight: 'bg-indigo-50' }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'kind',
      templateIpa: '/k_nd/',
      meaning: 'tốt bụng',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'B',
      fullIpa: '/kaɪnd/',
      explanation: "Từ 'kind' đọc là /kaɪnd/, có âm /aɪ/ (há to rồi khép dần về /ɪ/), nên chọn aɪ."
    },
    {
      id: 2,
      word: 'toy',
      templateIpa: '/t_/',
      meaning: 'đồ chơi',
      choiceA: 'ɔɪ',
      choiceB: 'ɔː',
      correctChoice: 'A',
      fullIpa: '/tɔɪ/',
      explanation: "Từ 'toy' đọc là /tɔɪ/, có âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/), nên chọn ɔɪ."
    },
    {
      id: 3,
      word: 'brave',
      templateIpa: '/br_v/',
      meaning: 'dũng cảm',
      choiceA: 'eɪ',
      choiceB: 'aɪ',
      correctChoice: 'A',
      fullIpa: '/breɪv/',
      explanation: "Từ 'brave' đọc là /breɪv/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 4,
      word: 'joke',
      templateIpa: '/dʒ_k/',
      meaning: 'câu đùa',
      choiceA: 'aʊ',
      choiceB: 'əʊ',
      correctChoice: 'B',
      fullIpa: '/dʒəʊk/',
      explanation: "Từ 'joke' đọc là /dʒəʊk/, có âm /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/), nên chọn əʊ."
    },
    {
      id: 5,
      word: 'frown',
      templateIpa: '/fr_n/',
      meaning: 'cau mày',
      choiceA: 'əʊ',
      choiceB: 'aʊ',
      correctChoice: 'B',
      fullIpa: '/fraʊn/',
      explanation: "Từ 'frown' đọc là /fraʊn/, có âm /aʊ/ (há to rồi tròn môi dần về /ʊ/), nên chọn aʊ."
    },
    {
      id: 6,
      word: 'fear',
      templateIpa: '/f_/',
      meaning: 'nỗi sợ',
      choiceA: 'ɪə',
      choiceB: 'eə',
      correctChoice: 'A',
      fullIpa: '/fɪə/',
      explanation: "Từ 'fear' đọc là /fɪə/, có âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/), nên chọn ɪə."
    },
    {
      id: 7,
      word: 'wait',
      templateIpa: '/w_t/',
      meaning: 'chờ đợi',
      choiceA: 'aɪ',
      choiceB: 'eɪ',
      correctChoice: 'B',
      fullIpa: '/weɪt/',
      explanation: "Từ 'wait' đọc là /weɪt/, có âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/), nên chọn eɪ."
    },
    {
      id: 8,
      word: 'bear',
      templateIpa: '/b_/',
      meaning: 'con gấu',
      choiceA: 'eə',
      choiceB: 'ɪə',
      correctChoice: 'A',
      fullIpa: '/beə/',
      explanation: "Từ 'bear' đọc là /beə/, có âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/), nên chọn eə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'cheer', ipa: '/tʃɪə/', vowelSound: '/ɪə/', meaning: 'cổ vũ' },
        { letter: 'B', word: 'dear', ipa: '/dɪə/', vowelSound: '/ɪə/', meaning: 'thân yêu' },
        { letter: 'C', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' },
        { letter: 'D', word: 'hear', ipa: '/hɪə/', vowelSound: '/ɪə/', meaning: 'nghe' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'share' mang âm /eə/. Còn cheer, dear, hear đều mang âm /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'join', ipa: '/dʒɔɪn/', vowelSound: '/ɔɪ/', meaning: 'tham gia' },
        { letter: 'B', word: 'joy', ipa: '/dʒɔɪ/', vowelSound: '/ɔɪ/', meaning: 'niềm vui' },
        { letter: 'C', word: 'toy', ipa: '/tɔɪ/', vowelSound: '/ɔɪ/', meaning: 'đồ chơi' },
        { letter: 'D', word: 'own', ipa: '/əʊn/', vowelSound: '/əʊ/', meaning: 'của riêng' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'own' mang âm /əʊ/. Còn join, joy, toy đều mang âm /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'proud', ipa: '/praʊd/', vowelSound: '/aʊ/', meaning: 'tự hào' },
        { letter: 'B', word: 'shout', ipa: '/ʃaʊt/', vowelSound: '/aʊ/', meaning: 'hét to' },
        { letter: 'C', word: 'loud', ipa: '/laʊd/', vowelSound: '/aʊ/', meaning: 'to, ồn' },
        { letter: 'D', word: 'note', ipa: '/nəʊt/', vowelSound: '/əʊ/', meaning: 'ghi chú' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'note' mang âm /əʊ/. Còn proud, shout, loud đều mang âm /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'same', ipa: '/seɪm/', vowelSound: '/eɪ/', meaning: 'giống nhau' },
        { letter: 'B', word: 'wait', ipa: '/weɪt/', vowelSound: '/eɪ/', meaning: 'chờ đợi' },
        { letter: 'C', word: 'great', ipa: '/ɡreɪt/', vowelSound: '/eɪ/', meaning: 'tuyệt vời' },
        { letter: 'D', word: 'shy', ipa: '/ʃaɪ/', vowelSound: '/aɪ/', meaning: 'nhút nhát' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'shy' mang âm /aɪ/. Còn same, wait, great đều mang âm /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'fine', ipa: '/faɪn/', vowelSound: '/aɪ/', meaning: 'khỏe, ổn' },
        { letter: 'B', word: 'brave', ipa: '/breɪv/', vowelSound: '/eɪ/', meaning: 'dũng cảm' },
        { letter: 'C', word: 'kind', ipa: '/kaɪnd/', vowelSound: '/aɪ/', meaning: 'tốt bụng' },
        { letter: 'D', word: 'shy', ipa: '/ʃaɪ/', vowelSound: '/aɪ/', meaning: 'nhút nhát' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'brave' mang âm /eɪ/. Còn fine, kind, shy đều mang âm /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'share', ipa: '/ʃeə/', vowelSound: '/eə/', meaning: 'chia sẻ' },
        { letter: 'B', word: 'stare', ipa: '/steə/', vowelSound: '/eə/', meaning: 'nhìn chằm chằm' },
        { letter: 'C', word: 'fear', ipa: '/fɪə/', vowelSound: '/ɪə/', meaning: 'nỗi sợ' },
        { letter: 'D', word: 'care', ipa: '/keə/', vowelSound: '/eə/', meaning: 'chăm sóc' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'fear' mang âm /ɪə/. Còn share, stare, care đều mang âm /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'hear',
      wordMeaning: 'nghe',
      fullIpa: '/hɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/ɔɪ/',
      choiceB: '/eə/',
      choiceC: '/ɪə/',
      correctChoice: 'C',
      explanation: "Từ 'hear' phát âm là /hɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    },
    {
      id: 2,
      spokenWord: 'joy',
      wordMeaning: 'niềm vui',
      fullIpa: '/dʒɔɪ/',
      targetSymbol: '/ɔɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/aɪ/',
      choiceC: '/ɔː/',
      correctChoice: 'A',
      explanation: "Từ 'joy' phát âm là /dʒɔɪ/, có nguyên âm đôi /ɔɪ/ (môi tròn rồi dẹt dần về /ɪ/)."
    },
    {
      id: 3,
      spokenWord: 'shout',
      wordMeaning: 'hét to',
      fullIpa: '/ʃaʊt/',
      targetSymbol: '/aʊ/',
      choiceA: '/ɪə/',
      choiceB: '/aʊ/',
      choiceC: '/əʊ/',
      correctChoice: 'B',
      explanation: "Từ 'shout' phát âm là /ʃaʊt/, có nguyên âm đôi /aʊ/ (há to rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 4,
      spokenWord: 'care',
      wordMeaning: 'chăm sóc',
      fullIpa: '/keə/',
      targetSymbol: '/eə/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/ɪə/',
      correctChoice: 'A',
      explanation: "Từ 'care' phát âm là /keə/, có nguyên âm đôi /eə/ (bắt đầu như /e/ rồi thả lỏng về /ə/)."
    },
    {
      id: 5,
      spokenWord: 'hope',
      wordMeaning: 'hy vọng',
      fullIpa: '/həʊp/',
      targetSymbol: '/əʊ/',
      choiceA: '/eə/',
      choiceB: '/əʊ/',
      choiceC: '/aʊ/',
      correctChoice: 'B',
      explanation: "Từ 'hope' phát âm là /həʊp/, có nguyên âm đôi /əʊ/ (thả lỏng rồi tròn môi dần về /ʊ/)."
    },
    {
      id: 6,
      spokenWord: 'fine',
      wordMeaning: 'khỏe, ổn',
      fullIpa: '/faɪn/',
      targetSymbol: '/aɪ/',
      choiceA: '/aɪ/',
      choiceB: '/ɔɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'A',
      explanation: "Từ 'fine' phát âm là /faɪn/, có nguyên âm đôi /aɪ/ (há to rồi khép dần về /ɪ/)."
    },
    {
      id: 7,
      spokenWord: 'same',
      wordMeaning: 'giống nhau',
      fullIpa: '/seɪm/',
      targetSymbol: '/eɪ/',
      choiceA: '/ɔɪ/',
      choiceB: '/aɪ/',
      choiceC: '/eɪ/',
      correctChoice: 'C',
      explanation: "Từ 'same' phát âm là /seɪm/, có nguyên âm đôi /eɪ/ (bắt đầu như /e/ rồi dẹt dần về /ɪ/)."
    },
    {
      id: 8,
      spokenWord: 'dear',
      wordMeaning: 'thân yêu',
      fullIpa: '/dɪə/',
      targetSymbol: '/ɪə/',
      choiceA: '/aʊ/',
      choiceB: '/ɪə/',
      choiceC: '/eə/',
      correctChoice: 'B',
      explanation: "Từ 'dear' phát âm là /dɪə/, có nguyên âm đôi /ɪə/ (dẹt nhẹ rồi thả lỏng về /ə/)."
    }
  ]
};
