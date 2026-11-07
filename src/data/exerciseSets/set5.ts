import { PracticeExamSet } from './types';

export const SET_5: PracticeExamSet = {
  id: 5,
  title: 'Bộ Đề 05: Thiên Nhiên & Thời Tiết',
  subtitle: 'Luyện âm cùng nắng ấm, gió mát, mây trời và đại ngàn xanh',
  badge: 'Cơ bản',
  topic: 'Nature & Weather',
  icon: '⛅',
  description: 'Thưởng ngoạn cảnh sắc thiên nhiên và rèn luyện các nguyên âm tinh tế: heat /i:/ vs hit /ɪ/, wet /e/ vs wait /eɪ/, storm /ɔ:/ vs star /ɑ:/, cool /u:/ vs cook /ʊ/, burn /ɜ:/ vs barn /ɑ:/.',
  exercise1: [
    {
      id: 1,
      wordA: 'heat',
      ipaA: '/hi:t/',
      meaningA: 'hơi nóng mặt trời',
      wordB: 'hit',
      ipaB: '/hɪt/',
      meaningB: 'đánh trúng/va phải',
      targetAudioWord: 'heat',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'heat' mang âm /i:/ (i dài mỉm cười). Từ 'hit' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'cool',
      ipaA: '/ku:l/',
      meaningA: 'mát mẻ dễ chịu',
      wordB: 'cook',
      ipaB: '/kʊk/',
      meaningB: 'nấu nướng',
      targetAudioWord: 'cool',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cool' mang âm /u:/ (u dài chu tròn môi). Từ 'cook' mang âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 3,
      wordA: 'storm',
      ipaA: '/stɔ:m/',
      meaningA: 'cơn bão lớn',
      wordB: 'star',
      ipaB: '/stɑ:/',
      meaningB: 'ngôi sao sáng',
      targetAudioWord: 'storm',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'storm' mang âm /ɔ:/ (o dài chu môi tròn). Từ 'star' mang âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 4,
      wordA: 'burn',
      ipaA: '/bɜ:n/',
      meaningA: 'cháy nắng/đốt cháy',
      wordB: 'barn',
      ipaB: '/bɑ:n/',
      meaningB: 'nhà kho thóc',
      targetAudioWord: 'burn',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'burn' mang âm /ɜ:/ (ơ dài cong lưỡi). Từ 'barn' mang âm /ɑ:/ (a dài ngân dài)."
    },
    {
      id: 5,
      wordA: 'sun',
      ipaA: '/sʌn/',
      meaningA: 'mặt trời rực rỡ',
      wordB: 'sand',
      ipaB: '/sænd/',
      meaningB: 'hạt cát vàng',
      targetAudioWord: 'sun',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sun' mang âm /ʌ/ (á ngắn dứt khoát). Từ 'sand' mang âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 6,
      wordA: 'wet',
      ipaA: '/wet/',
      meaningA: 'ẩm ướt sau mưa',
      wordB: 'wait',
      ipaB: '/weɪt/',
      meaningB: 'chờ đợi',
      targetAudioWord: 'wet',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'wet' mang nguyên âm đơn /e/ (e ngắn). 'wait' là nguyên âm đôi /eɪ/."
    },
    {
      id: 7,
      wordA: 'fog',
      ipaA: '/fɒg/',
      meaningA: 'sương mù dày',
      wordB: 'frog',
      ipaB: '/frɒg/',
      meaningB: 'chú ếch',
      targetAudioWord: 'fog',
      correctChoice: 'A',
      explanation: "Cả hai từ cùng mang âm /ɒ/ (o ngắn), từ được phát âm là 'fog' không có phụ âm /r/."
    },
    {
      id: 8,
      wordA: 'peak',
      ipaA: '/pi:k/',
      meaningA: 'đỉnh núi cao',
      wordB: 'pick',
      ipaB: '/pɪk/',
      meaningB: 'hái hoa/chọn',
      targetAudioWord: 'peak',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'peak' mang âm /i:/ (i dài mỉm cười). 'pick' mang âm /ɪ/ (i ngắn dứt khoát)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'fog', ipa: '/fɒg/', meaning: 'sương mù', symbol: '/ɒ/' },
    { id: 'B', word: 'earth', ipa: '/ɜ:θ/', meaning: 'trái đất', symbol: '/ɜ:/' },
    { id: 'C', word: 'leaf', ipa: '/li:f/', meaning: 'chiếc lá xanh', symbol: '/i:/' },
    { id: 'D', word: 'mud', ipa: '/mʌd/', meaning: 'bùn lầy', symbol: '/ʌ/' },
    { id: 'E', word: 'wood', ipa: '/wʊd/', meaning: 'rừng cây/gỗ', symbol: '/ʊ/' },
    { id: 'F', word: 'storm', ipa: '/stɔ:m/', meaning: 'cơn bão', symbol: '/ɔ:/' },
    { id: 'G', word: 'hill', ipa: '/hɪl/', meaning: 'ngọn đồi', symbol: '/ɪ/' },
    { id: 'H', word: 'river', ipa: "/'rɪvə/", meaning: 'dòng sông (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'moon', ipa: '/mu:n/', meaning: 'vầng trăng', symbol: '/u:/' },
    { id: 'J', word: 'sand', ipa: '/sænd/', meaning: 'bãi cát', symbol: '/æ/' },
    { id: 'K', word: 'wet', ipa: '/wet/', meaning: 'ướt mưa', symbol: '/e/' },
    { id: 'L', word: 'star', ipa: '/stɑ:/', meaning: 'ngôi sao đêm', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'leaf', explanation: "Âm /i:/ (i dài) có trong từ 'leaf' /li:f/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'hill', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'hill' /hɪl/" },
    { symbol: '/e/', targetWordId: 'K', word: 'wet', explanation: "Âm /e/ (e ngắn) có trong từ 'wet' /wet/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'sand', explanation: "Âm /æ/ (a bẹt) có trong từ 'sand' /sænd/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'mud', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'mud' /mʌd/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'star', explanation: "Âm /ɑ:/ (a dài) có trong từ 'star' /stɑ:/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'fog', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'fog' /fɒg/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'storm', explanation: "Âm /ɔ:/ (o dài) có trong từ 'storm' /stɔ:m/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'wood', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'wood' /wʊd/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'moon', explanation: "Âm /u:/ (u dài) có trong từ 'moon' /mu:n/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'earth', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'earth' /ɜ:θ/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'river', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'river' /'rɪvə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp hiện tượng thiên nhiên vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Đọc to các từ thiên nhiên và xếp vào đúng ngôi nhà ngữ âm tương ứng.',
    allWords: [
      { word: 'sea', ipa: '/si:/', targetSymbol: '/i:/', meaning: 'biển xanh' },
      { word: 'sand', ipa: '/sænd/', targetSymbol: '/æ/', meaning: 'bãi cát' },
      { word: 'hill', ipa: '/hɪl/', targetSymbol: '/ɪ/', meaning: 'ngọn đồi' },
      { word: 'wet', ipa: '/wet/', targetSymbol: '/e/', meaning: 'ẩm ướt' },
      { word: 'leaf', ipa: '/li:f/', targetSymbol: '/i:/', meaning: 'chiếc lá' },
      { word: 'land', ipa: '/lænd/', targetSymbol: '/æ/', meaning: 'đất liền' },
      { word: 'wind', ipa: '/wɪnd/', targetSymbol: '/ɪ/', meaning: 'cơn gió' },
      { word: 'cliff', ipa: '/klɪf/', targetSymbol: '/ɪ/', meaning: 'vách đá' },
      { word: 'peak', ipa: '/pi:k/', targetSymbol: '/i:/', meaning: 'đỉnh núi' },
      { word: 'flash', ipa: '/flæʃ/', targetSymbol: '/æ/', meaning: 'tia chớp' },
      { word: 'nest', ipa: '/nest/', targetSymbol: '/e/', meaning: 'tổ chim' },
      { word: 'shell', ipa: '/ʃel/', targetSymbol: '/e/', meaning: 'vỏ ốc' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['sea', 'leaf', 'peak'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['hill', 'wind', 'cliff'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['wet', 'nest', 'shell'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['sand', 'land', 'flash'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp cảnh sắc thời tiết vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Phân loại các từ thời tiết và phong cảnh vào 4 nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'fog', ipa: '/fɒg/', targetSymbol: '/ɒ/', meaning: 'sương mù' },
      { word: 'storm', ipa: '/stɔ:m/', targetSymbol: '/ɔ:/', meaning: 'cơn bão' },
      { word: 'wood', ipa: '/wʊd/', targetSymbol: '/ʊ/', meaning: 'rừng cây' },
      { word: 'moon', ipa: '/mu:n/', targetSymbol: '/u:/', meaning: 'mặt trăng' },
      { word: 'rock', ipa: '/rɒk/', targetSymbol: '/ɒ/', meaning: 'tảng đá' },
      { word: 'dawn', ipa: '/dɔ:n/', targetSymbol: '/ɔ:/', meaning: 'bình minh' },
      { word: 'brook', ipa: '/brʊk/', targetSymbol: '/ʊ/', meaning: 'dòng suối nhỏ' },
      { word: 'bloom', ipa: '/blu:m/', targetSymbol: '/u:/', meaning: 'hoa nở rộ' },
      { word: 'drop', ipa: '/drɒp/', targetSymbol: '/ɒ/', meaning: 'hạt mưa rơi' },
      { word: 'warm', ipa: '/wɔ:m/', targetSymbol: '/ɔ:/', meaning: 'ấm áp' },
      { word: 'bush', ipa: '/bʊʃ/', targetSymbol: '/ʊ/', meaning: 'bụi cây rậm' },
      { word: 'cool', ipa: '/ku:l/', targetSymbol: '/u:/', meaning: 'mát lành' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['fog', 'rock', 'drop'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['storm', 'dawn', 'warm'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['wood', 'brook', 'bush'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['moon', 'bloom', 'cool'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'leaf',
      templateIpa: '/l_f/',
      meaning: 'chiếc lá cây',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/li:f/',
      explanation: "Từ 'leaf' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'hill',
      templateIpa: '/h_l/',
      meaning: 'ngọn đồi cỏ',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'B',
      fullIpa: '/hɪl/',
      explanation: "Từ 'hill' có âm /ɪ/ (i ngắn dứt khoát), nên chọn ɪ."
    },
    {
      id: 3,
      word: 'sand',
      templateIpa: '/s_nd/',
      meaning: 'bãi cát vàng',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/sænd/',
      explanation: "Từ 'sand' có âm /æ/ (a bẹt hạ cằm mở to miệng), nên chọn æ."
    },
    {
      id: 4,
      word: 'storm',
      templateIpa: '/st_m/',
      meaning: 'cơn dông bão',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/stɔ:m/',
      explanation: "Từ 'storm' có âm /ɔ:/ (o dài chu tròn môi), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'moon',
      templateIpa: '/m_n/',
      meaning: 'ánh trăng đêm',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/mu:n/',
      explanation: "Từ 'moon' có âm /u:/ (u dài chu môi), nên chọn u:."
    },
    {
      id: 6,
      word: 'wood',
      templateIpa: '/w_d/',
      meaning: 'khu rừng cây',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/wʊd/',
      explanation: "Từ 'wood' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 7,
      word: 'star',
      templateIpa: '/st_/',
      meaning: 'ngôi sao lấp lánh',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/stɑ:/',
      explanation: "Từ 'star' mang âm /ɑ:/ (a dài mở rộng miệng), nên chọn ɑ:."
    },
    {
      id: 8,
      word: 'mud',
      templateIpa: '/m_d/',
      meaning: 'vũng bùn lầy',
      choiceA: 'æ',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/mʌd/',
      explanation: "Từ 'mud' mang âm /ʌ/ (á ngắn phát ra dứt khoát), nên chọn ʌ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'sea', ipa: '/si:/', vowelSound: '/i:/', meaning: 'biển xanh' },
        { letter: 'B', word: 'leaf', ipa: '/li:f/', vowelSound: '/i:/', meaning: 'chiếc lá' },
        { letter: 'C', word: 'hill', ipa: '/hɪl/', vowelSound: '/ɪ/', meaning: 'ngọn đồi' },
        { letter: 'D', word: 'peak', ipa: '/pi:k/', vowelSound: '/i:/', meaning: 'đỉnh núi' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'hill' mang âm /ɪ/ (i ngắn). Ba từ sea, leaf, peak đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'wet', ipa: '/wet/', vowelSound: '/e/', meaning: 'ướt mưa' },
        { letter: 'B', word: 'sand', ipa: '/sænd/', vowelSound: '/æ/', meaning: 'bãi cát' },
        { letter: 'C', word: 'land', ipa: '/lænd/', vowelSound: '/æ/', meaning: 'đất đai' },
        { letter: 'D', word: 'flash', ipa: '/flæʃ/', vowelSound: '/æ/', meaning: 'tia chớp' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'wet' mang âm /e/ (e ngắn). Ba từ sand, land, flash đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'storm', ipa: '/stɔ:m/', vowelSound: '/ɔ:/', meaning: 'cơn bão' },
        { letter: 'B', word: 'warm', ipa: '/wɔ:m/', vowelSound: '/ɔ:/', meaning: 'ấm áp' },
        { letter: 'C', word: 'dawn', ipa: '/dɔ:n/', vowelSound: '/ɔ:/', meaning: 'bình minh' },
        { letter: 'D', word: 'fog', ipa: '/fɒg/', vowelSound: '/ɒ/', meaning: 'sương mù' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'fog' mang âm /ɒ/ (o ngắn). Ba từ storm, warm, dawn đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'moon', ipa: '/mu:n/', vowelSound: '/u:/', meaning: 'mặt trăng' },
        { letter: 'B', word: 'cool', ipa: '/ku:l/', vowelSound: '/u:/', meaning: 'mát lành' },
        { letter: 'C', word: 'wood', ipa: '/wʊd/', vowelSound: '/ʊ/', meaning: 'rừng cây' },
        { letter: 'D', word: 'bloom', ipa: '/blu:m/', vowelSound: '/u:/', meaning: 'hoa nở' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'wood' mang âm /ʊ/ (u ngắn). Ba từ moon, cool, bloom đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'star', ipa: '/stɑ:/', vowelSound: '/ɑ:/', meaning: 'ngôi sao' },
        { letter: 'B', word: 'dark', ipa: '/dɑ:k/', vowelSound: '/ɑ:/', meaning: 'bóng tối' },
        { letter: 'C', word: 'mud', ipa: '/mʌd/', vowelSound: '/ʌ/', meaning: 'bùn lầy' },
        { letter: 'D', word: 'park', ipa: '/pɑ:k/', vowelSound: '/ɑ:/', meaning: 'vườn hoa' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'mud' mang âm /ʌ/ (á ngắn). Ba từ star, dark, park đều mang âm /ɑ:/ (a dài ngân vang)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'earth', ipa: '/ɜ:θ/', vowelSound: '/ɜ:/', meaning: 'trái đất' },
        { letter: 'B', word: 'bird', ipa: '/bɜ:d/', vowelSound: '/ɜ:/', meaning: 'chú chim' },
        { letter: 'C', word: 'worm', ipa: '/wɜ:m/', vowelSound: '/ɜ:/', meaning: 'con sâu' },
        { letter: 'D', word: 'sun', ipa: '/sʌn/', vowelSound: '/ʌ/', meaning: 'mặt trời' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'sun' mang âm /ʌ/ (á ngắn). Ba từ earth, bird, worm đều mang âm /ɜ:/ (ơ dài uốn lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'leaf',
      wordMeaning: 'chiếc lá cây non',
      fullIpa: '/li:f/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'leaf' phát âm là /li:f/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'storm',
      wordMeaning: 'cơn bão sấm sét',
      fullIpa: '/stɔ:m/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'storm' phát âm là /stɔ:m/ mang nguyên âm /ɔ:/ (o dài chu tròn môi)."
    },
    {
      id: 3,
      spokenWord: 'hill',
      wordMeaning: 'ngọn đồi xanh',
      fullIpa: '/hɪl/',
      targetSymbol: '/ɪ/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'hill' phát âm là /hɪl/ mang nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 4,
      spokenWord: 'sand',
      wordMeaning: 'bãi cát ven biển',
      fullIpa: '/sænd/',
      targetSymbol: '/æ/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'sand' phát âm là /sænd/ mang nguyên âm /æ/ (a bẹt hạ cằm mở to miệng)."
    },
    {
      id: 5,
      spokenWord: 'cool',
      wordMeaning: 'luồng gió mát',
      fullIpa: '/ku:l/',
      targetSymbol: '/u:/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɔ:/',
      correctChoice: 'B',
      explanation: "Từ 'cool' phát âm là /ku:l/ mang nguyên âm /u:/ (u dài chu môi)."
    },
    {
      id: 6,
      spokenWord: 'wood',
      wordMeaning: 'khu rừng đại ngàn',
      fullIpa: '/wʊd/',
      targetSymbol: '/ʊ/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'wood' phát âm là /wʊd/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'star',
      wordMeaning: 'ngôi sao trời đêm',
      fullIpa: '/stɑ:/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'star' phát âm là /stɑ:/ mang nguyên âm /ɑ:/ (a dài ngân vang)."
    },
    {
      id: 8,
      spokenWord: 'mud',
      wordMeaning: 'bùn lầy sau cơn mưa',
      fullIpa: '/mʌd/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'mud' phát âm là /mʌd/ mang nguyên âm /ʌ/ (á ngắn bật nhanh từ vòm họng)."
    }
  ]
};
