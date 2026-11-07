import { PracticeExamSet } from './types';

export const SET_15: PracticeExamSet = {
  id: 15,
  title: 'Bộ Đề 15: Thử Thách IPA Tổng Hợp Master',
  subtitle: 'Đề thi tổng hợp đỉnh cao bao trùm các cặp âm dễ nhầm lẫn nhất trong bảng 44 âm IPA',
  badge: 'Nâng cao',
  topic: 'Master All-Round Review',
  icon: '👑',
  description: 'Đề thi chinh phục huy hiệu Master IPA Galaxy! Thử thách bé với các cặp đối lập vi tế nhất: beat /i:/ vs bit /ɪ/, full /ʊ/ vs fool /u:/, pen /e/ vs pan /æ/, heart /ɑ:/ vs hut /ʌ/, bird /ɜ:/ vs board /ɔ:/.',
  exercise1: [
    {
      id: 1,
      wordA: 'beat',
      ipaA: '/bi:t/',
      meaningA: 'nhịp đập rộn ràng',
      wordB: 'bit',
      ipaB: '/bɪt/',
      meaningB: 'một chút xíu',
      targetAudioWord: 'beat',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'beat' mang âm /i:/ (i dài mỉm cười). 'bit' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'full',
      ipaA: '/fʊl/',
      meaningA: 'đầy ắp tràn trề',
      wordB: 'fool',
      ipaB: '/fu:l/',
      meaningB: 'ngốc nghếch',
      targetAudioWord: 'full',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'full' mang âm /ʊ/ (u ngắn dứt khoát). 'fool' mang âm /u:/ (u dài chu tròn môi ngân dài)."
    },
    {
      id: 3,
      wordA: 'pen',
      ipaA: '/pen/',
      meaningA: 'cây bút máy',
      wordB: 'pan',
      ipaB: '/pæn/',
      meaningB: 'cái chảo rán',
      targetAudioWord: 'pan',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'pan' mang âm /æ/ (a bẹt hạ cằm sâu mở to miệng). 'pen' mang âm /e/ (e ngắn)."
    },
    {
      id: 4,
      wordA: 'heart',
      ipaA: '/hɑ:t/',
      meaningA: 'trái tim dũng cảm',
      wordB: 'hut',
      ipaB: '/hʌt/',
      meaningB: 'túp lều nhỏ',
      targetAudioWord: 'heart',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'heart' mang âm /ɑ:/ (a dài mở rộng họng). 'hut' mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 5,
      wordA: 'bird',
      ipaA: '/bɜ:d/',
      meaningA: 'chú chim sải cánh',
      wordB: 'board',
      ipaB: '/bɔ:d/',
      meaningB: 'tấm bảng lớp',
      targetAudioWord: 'bird',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bird' mang âm /ɜ:/ (ơ dài uốn lưỡi). 'board' mang âm /ɔ:/ (o dài chu môi)."
    },
    {
      id: 6,
      wordA: 'cot',
      ipaA: '/kɒt/',
      meaningA: 'cũi em bé',
      wordB: 'caught',
      ipaB: '/kɔ:t/',
      meaningB: 'đã tóm lấy',
      targetAudioWord: 'caught',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'caught' mang âm /ɔ:/ (o dài chu tròn môi ngân dài). 'cot' mang âm /ɒ/ (o ngắn dứt nhanh)."
    },
    {
      id: 7,
      wordA: 'match',
      ipaA: '/mætʃ/',
      meaningA: 'trận đấu gay cấn',
      wordB: 'much',
      ipaB: '/mʌtʃ/',
      meaningB: 'rất nhiều',
      targetAudioWord: 'match',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'match' mang âm /æ/ (a bẹt mở rộng miệng). 'much' mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 8,
      wordA: 'pull',
      ipaA: '/pʊl/',
      meaningA: 'kéo lại gần',
      wordB: 'pool',
      ipaB: '/pu:l/',
      meaningB: 'hồ nước trong',
      targetAudioWord: 'pull',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'pull' mang âm /ʊ/ (u ngắn dứt khoát). 'pool' mang âm /u:/ (u dài chu tròn môi)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'cot', ipa: '/kɒt/', meaning: 'cái cũi em bé', symbol: '/ɒ/' },
    { id: 'B', word: 'first', ipa: '/fɜ:st/', meaning: 'vị trí quán quân', symbol: '/ɜ:/' },
    { id: 'C', word: 'peak', ipa: '/pi:k/', meaning: 'đỉnh vinh quang', symbol: '/i:/' },
    { id: 'D', word: 'luck', ipa: '/lʌk/', meaning: 'sự may mắn', symbol: '/ʌ/' },
    { id: 'E', word: 'pull', ipa: '/pʊl/', meaning: 'kéo co', symbol: '/ʊ/' },
    { id: 'F', word: 'hawk', ipa: '/hɔ:k/', meaning: 'chim ưng dũng mãnh', symbol: '/ɔ:/' },
    { id: 'G', word: 'hill', ipa: '/hɪl/', meaning: 'ngọn đồi thoai thoải', symbol: '/ɪ/' },
    { id: 'H', word: 'master', ipa: "/'mɑ:stə/", meaning: 'bậc thầy phát âm (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'clue', ipa: '/klu:/', meaning: 'manh mối bí ẩn', symbol: '/u:/' },
    { id: 'J', word: 'track', ipa: '/træk/', meaning: 'đường đua chiến thắng', symbol: '/æ/' },
    { id: 'K', word: 'bell', ipa: '/bel/', meaning: 'chuông mừng', symbol: '/e/' },
    { id: 'L', word: 'smart', ipa: '/smɑ:t/', meaning: 'thông minh xuất sắc', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'peak', explanation: "Âm /i:/ (i dài) có trong từ 'peak' /pi:k/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'hill', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'hill' /hɪl/" },
    { symbol: '/e/', targetWordId: 'K', word: 'bell', explanation: "Âm /e/ (e ngắn) có trong từ 'bell' /bel/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'track', explanation: "Âm /æ/ (a bẹt) có trong từ 'track' /træk/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'luck', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'luck' /lʌk/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'smart', explanation: "Âm /ɑ:/ (a dài) có trong từ 'smart' /smɑ:t/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'cot', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'cot' /kɒt/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'hawk', explanation: "Âm /ɔ:/ (o dài) có trong từ 'hawk' /hɔ:k/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'pull', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'pull' /pʊl/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'clue', explanation: "Âm /u:/ (u dài) có trong từ 'clue' /klu:/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'first', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'first' /fɜ:st/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'master', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'master' /'mɑ:stə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Thử thách xếp từ Master vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại 12 từ vựng tinh tế vào đúng 4 gia đình âm /i:/, /ɪ/, /e/, /æ/.',
    allWords: [
      { word: 'beat', ipa: '/bi:t/', targetSymbol: '/i:/', meaning: 'nhịp đập' },
      { word: 'track', ipa: '/træk/', targetSymbol: '/æ/', meaning: 'đường đua' },
      { word: 'bit', ipa: '/bɪt/', targetSymbol: '/ɪ/', meaning: 'chút ít' },
      { word: 'bell', ipa: '/bel/', targetSymbol: '/e/', meaning: 'tiếng chuông' },
      { word: 'seal', ipa: '/si:l/', targetSymbol: '/i:/', meaning: 'hải cẩu' },
      { word: 'match', ipa: '/mætʃ/', targetSymbol: '/æ/', meaning: 'trận đấu' },
      { word: 'tin', ipa: '/tɪn/', targetSymbol: '/ɪ/', meaning: 'hộp kim loại' },
      { word: 'mesh', ipa: '/meʃ/', targetSymbol: '/e/', meaning: 'tấm lưới' },
      { word: 'peak', ipa: '/pi:k/', targetSymbol: '/i:/', meaning: 'đỉnh cao' },
      { word: 'lamp', ipa: '/læmp/', targetSymbol: '/æ/', meaning: 'ngọn đèn' },
      { word: 'grid', ipa: '/grɪd/', targetSymbol: '/ɪ/', meaning: 'lưới ô vuông' },
      { word: 'quest', ipa: '/kwest/', targetSymbol: '/e/', meaning: 'nhiệm vụ lớn' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['beat', 'seal', 'peak'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['bit', 'tin', 'grid'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bell', 'mesh', 'quest'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['track', 'match', 'lamp'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Thử thách xếp từ Master vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to 12 từ Master và kéo thả vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'cot', ipa: '/kɒt/', targetSymbol: '/ɒ/', meaning: 'chiếc cũi' },
      { word: 'hawk', ipa: '/hɔ:k/', targetSymbol: '/ɔ:/', meaning: 'chim ưng' },
      { word: 'full', ipa: '/fʊl/', targetSymbol: '/ʊ/', meaning: 'đầy tràn' },
      { word: 'fool', ipa: '/fu:l/', targetSymbol: '/u:/', meaning: 'ngốc nghếch' },
      { word: 'plot', ipa: '/plɒt/', targetSymbol: '/ɒ/', meaning: 'cốt truyện' },
      { word: 'dawn', ipa: '/dɔ:n/', targetSymbol: '/ɔ:/', meaning: 'bình minh' },
      { word: 'pull', ipa: '/pʊl/', targetSymbol: '/ʊ/', meaning: 'kéo co' },
      { word: 'clue', ipa: '/klu:/', targetSymbol: '/u:/', meaning: 'manh mối' },
      { word: 'spot', ipa: '/spɒt/', targetSymbol: '/ɒ/', meaning: 'điểm sáng' },
      { word: 'board', ipa: '/bɔ:d/', targetSymbol: '/ɔ:/', meaning: 'bảng vàng' },
      { word: 'wool', ipa: '/wʊl/', targetSymbol: '/ʊ/', meaning: 'sợi len' },
      { word: 'proof', ipa: '/pru:f/', targetSymbol: '/u:/', meaning: 'bằng chứng' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['cot', 'plot', 'spot'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['hawk', 'dawn', 'board'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['full', 'pull', 'wool'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['fool', 'clue', 'proof'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'beat',
      templateIpa: '/b_t/',
      meaning: 'nhịp điệu bài hát',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/bi:t/',
      explanation: "Từ 'beat' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'full',
      templateIpa: '/f_l/',
      meaning: 'đầy đủ điểm số',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/fʊl/',
      explanation: "Từ 'full' có âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 3,
      word: 'smart',
      templateIpa: '/sm_t/',
      meaning: 'bé thông minh',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/smɑ:t/',
      explanation: "Từ 'smart' có âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 4,
      word: 'hawk',
      templateIpa: '/h_k/',
      meaning: 'chim ưng bay lượn',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/hɔ:k/',
      explanation: "Từ 'hawk' mang âm /ɔ:/ (o dài chu môi tròn), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'clue',
      templateIpa: '/kl_/',
      meaning: 'manh mối giải đố',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/klu:/',
      explanation: "Từ 'clue' mang âm /u:/ (u dài chu tròn môi), nên chọn u:."
    },
    {
      id: 6,
      word: 'first',
      templateIpa: '/f_st/',
      meaning: 'người đứng đầu bảng',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/fɜ:st/',
      explanation: "Từ 'first' mang âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    },
    {
      id: 7,
      word: 'cot',
      templateIpa: '/k_t/',
      meaning: 'cũi em bé ngủ',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/kɒt/',
      explanation: "Từ 'cot' mang âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 8,
      word: 'master',
      templateIpa: "/'mɑ:st_/",
      meaning: 'bậc thầy IPA nhí',
      choiceA: 'ə',
      choiceB: 'ɜ:',
      correctChoice: 'A',
      fullIpa: "/'mɑ:stə/",
      explanation: "Âm cuối không nhấn của từ 'master' là âm schwa nhẹ /ə/, nên chọn ə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'beat', ipa: '/bi:t/', vowelSound: '/i:/', meaning: 'nhịp đập' },
        { letter: 'B', word: 'seal', ipa: '/si:l/', vowelSound: '/i:/', meaning: 'hải cẩu' },
        { letter: 'C', word: 'peak', ipa: '/pi:k/', vowelSound: '/i:/', meaning: 'đỉnh cao' },
        { letter: 'D', word: 'bit', ipa: '/bɪt/', vowelSound: '/ɪ/', meaning: 'chút ít' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bit' mang âm /ɪ/ (i ngắn). Ba từ beat, seal, peak đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'track', ipa: '/træk/', vowelSound: '/æ/', meaning: 'đường đua' },
        { letter: 'B', word: 'match', ipa: '/mætʃ/', vowelSound: '/æ/', meaning: 'trận đấu' },
        { letter: 'C', word: 'lamp', ipa: '/læmp/', vowelSound: '/æ/', meaning: 'đèn' },
        { letter: 'D', word: 'bell', ipa: '/bel/', vowelSound: '/e/', meaning: 'tiếng chuông' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bell' mang âm /e/ (e ngắn). Ba từ track, match, lamp đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'hawk', ipa: '/hɔ:k/', vowelSound: '/ɔ:/', meaning: 'chim ưng' },
        { letter: 'B', word: 'dawn', ipa: '/dɔ:n/', vowelSound: '/ɔ:/', meaning: 'bình minh' },
        { letter: 'C', word: 'board', ipa: '/bɔ:d/', vowelSound: '/ɔ:/', meaning: 'tấm bảng' },
        { letter: 'D', word: 'cot', ipa: '/kɒt/', vowelSound: '/ɒ/', meaning: 'chiếc cũi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cot' mang âm /ɒ/ (o ngắn). Ba từ hawk, dawn, board đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'fool', ipa: '/fu:l/', vowelSound: '/u:/', meaning: 'ngốc nghếch' },
        { letter: 'B', word: 'clue', ipa: '/klu:/', vowelSound: '/u:/', meaning: 'manh mối' },
        { letter: 'C', word: 'proof', ipa: '/pru:f/', vowelSound: '/u:/', meaning: 'bằng chứng' },
        { letter: 'D', word: 'full', ipa: '/fʊl/', vowelSound: '/ʊ/', meaning: 'đầy tràn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'full' mang âm /ʊ/ (u ngắn). Ba từ fool, clue, proof đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'smart', ipa: '/smɑ:t/', vowelSound: '/ɑ:/', meaning: 'thông minh' },
        { letter: 'B', word: 'heart', ipa: '/hɑ:t/', vowelSound: '/ɑ:/', meaning: 'trái tim' },
        { letter: 'C', word: 'calm', ipa: '/kɑ:m/', vowelSound: '/ɑ:/', meaning: 'bình tĩnh' },
        { letter: 'D', word: 'luck', ipa: '/lʌk/', vowelSound: '/ʌ/', meaning: 'may mắn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'luck' mang âm /ʌ/ (á ngắn). Ba từ smart, heart, calm đều mang âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'first', ipa: '/fɜ:st/', vowelSound: '/ɜ:/', meaning: 'thứ nhất' },
        { letter: 'B', word: 'bird', ipa: '/bɜ:d/', vowelSound: '/ɜ:/', meaning: 'chú chim' },
        { letter: 'C', word: 'turn', ipa: '/tɜ:n/', vowelSound: '/ɜ:/', meaning: 'lượt chơi' },
        { letter: 'D', word: 'quest', ipa: '/kwest/', vowelSound: '/e/', meaning: 'thử thách' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'quest' mang âm /e/ (e ngắn). Ba từ first, bird, turn đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'beat',
      wordMeaning: 'giai điệu nhịp trống sôi động',
      fullIpa: '/bi:t/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'beat' phát âm là /bi:t/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'full',
      wordMeaning: 'chiếc cốc đầy ắp nước mát',
      fullIpa: '/fʊl/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'full' phát âm là /fʊl/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'smart',
      wordMeaning: 'nhanh trí thông thái',
      fullIpa: '/smɑ:t/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'smart' phát âm là /smɑ:t/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 4,
      spokenWord: 'hawk',
      wordMeaning: 'chim ưng bay lượn trên cao',
      fullIpa: '/hɔ:k/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'hawk' phát âm là /hɔ:k/ mang nguyên âm /ɔ:/ (o dài chu môi tròn)."
    },
    {
      id: 5,
      spokenWord: 'first',
      wordMeaning: 'người dẫn đầu cuộc đua',
      fullIpa: '/fɜ:st/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/e/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'first' phát âm là /fɜ:st/ mang nguyên âm /ɜ:/ (ơ dài cong lưỡi)."
    },
    {
      id: 6,
      spokenWord: 'clue',
      wordMeaning: 'manh mối tìm kho báu',
      fullIpa: '/klu:/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'clue' phát âm là /klu:/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 7,
      spokenWord: 'cot',
      wordMeaning: 'chiếc cũi xinh cho bé ngủ',
      fullIpa: '/kɒt/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'cot' phát âm là /kɒt/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'luck',
      wordMeaning: 'vận may mỉm cười',
      fullIpa: '/lʌk/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'luck' phát âm là /lʌk/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    }
  ]
};
