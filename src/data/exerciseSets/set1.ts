import { PracticeExamSet } from './types';

export const SET_1: PracticeExamSet = {
  id: 1,
  title: 'Bộ Đề 01: Động Vật & Căn Bản',
  subtitle: 'Luyện nghe & phân biệt các cặp nguyên âm cốt lõi',
  badge: 'Cơ bản',
  topic: 'Animals & Basics',
  icon: '🐾',
  description: 'Bộ đề nền tảng giúp bé nhận diện sự khác biệt rõ nét giữa các cặp âm /i:/ - /ɪ/, /u:/ - /ʊ/, /e/ - /æ/ thông qua các từ vựng thân quen về loài vật và đồ vật xung quanh.',
  exercise1: [
    {
      id: 1,
      wordA: 'sheep',
      ipaA: '/ʃi:p/',
      meaningA: 'con cừu',
      wordB: 'ship',
      ipaB: '/ʃɪp/',
      meaningB: 'tàu thuỷ',
      targetAudioWord: 'sheep',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sheep' có âm /i:/ (i dài: khóe môi mở rộng như đang cười tươi, âm ngân dài). Từ 'ship' có âm /ɪ/ (i ngắn: dứt khoát, thả lỏng hơn)."
    },
    {
      id: 2,
      wordA: 'food',
      ipaA: '/fu:d/',
      meaningA: 'thức ăn',
      wordB: 'foot',
      ipaB: '/fʊt/',
      meaningB: 'bàn chân',
      targetAudioWord: 'food',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'food' có âm /u:/ (u dài: môi chu tròn như huýt sáo, giữ hơi dài). Từ 'foot' có âm /ʊ/ (u ngắn: môi hơi khum nhẹ và ngắt nhanh)."
    },
    {
      id: 3,
      wordA: 'bed',
      ipaA: '/bed/',
      meaningA: 'cái giường',
      wordB: 'bad',
      ipaB: '/bæd/',
      meaningB: 'tồi / xấu',
      targetAudioWord: 'bad',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'bad' có âm /æ/ (a bẹt: hạ cằm sâu, mở to miệng cả chiều dọc và ngang). Từ 'bed' có âm /e/ (e ngắn: mở miệng tự nhiên vừa phải)."
    },
    {
      id: 4,
      wordA: 'sit',
      ipaA: '/sɪt/',
      meaningA: 'ngồi xuống',
      wordB: 'seat',
      ipaB: '/si:t/',
      meaningB: 'chỗ ngồi',
      targetAudioWord: 'sit',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sit' có âm /ɪ/ (i ngắn: âm ngắn dứt khoát). Từ 'seat' có âm /i:/ (i dài: ngân dài hơn rõ rệt)."
    },
    {
      id: 5,
      wordA: 'cup',
      ipaA: '/kʌp/',
      meaningA: 'cái tách/cốc',
      wordB: 'cat',
      ipaB: '/kæt/',
      meaningB: 'con mèo',
      targetAudioWord: 'cup',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cup' mang âm /ʌ/ (á ngắn: miệng mở tự nhiên như chữ 'á' tiếng Việt nhưng dứt khoát). Từ 'cat' mang âm /æ/ (a bẹt)."
    },
    {
      id: 6,
      wordA: 'bird',
      ipaA: '/bɜ:d/',
      meaningA: 'con chim',
      wordB: 'bed',
      ipaB: '/bed/',
      meaningB: 'cái giường',
      targetAudioWord: 'bird',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bird' chứa âm /ɜ:/ (hoặc /ɝː/ trong US: môi hơi mở, cong lưỡi lên tạo âm r ngân dài). Từ 'bed' chứa âm /e/ (e ngắn gọn)."
    },
    {
      id: 7,
      wordA: 'door',
      ipaA: '/dɔ:/',
      meaningA: 'cửa ra vào',
      wordB: 'dog',
      ipaB: '/dɒg/',
      meaningB: 'con chó',
      targetAudioWord: 'door',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'door' chứa âm /ɔ:/ (o dài: chu tròn môi rõ rệt và ngân dài). Từ 'dog' chứa âm /ɒ/ (o ngắn: miệng tròn vừa và dứt nhanh)."
    },
    {
      id: 8,
      wordA: 'tree',
      ipaA: '/tri:/',
      meaningA: 'cái cây',
      wordB: 'pig',
      ipaB: '/pɪg/',
      meaningB: 'con heo',
      targetAudioWord: 'tree',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'tree' chứa âm /i:/ (i dài: kéo khóe miệng sang hai bên và giữ hơi). Từ 'pig' chứa âm /ɪ/ (i ngắn: âm bật nhanh)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'clock', ipa: '/klɒk/', meaning: 'đồng hồ', symbol: '/ɒ/' },
    { id: 'B', word: 'girl', ipa: '/gɜ:l/', meaning: 'cô gái', symbol: '/ɜ:/' },
    { id: 'C', word: 'tree', ipa: '/tri:/', meaning: 'cái cây', symbol: '/i:/' },
    { id: 'D', word: 'bus', ipa: '/bʌs/', meaning: 'xe buýt', symbol: '/ʌ/' },
    { id: 'E', word: 'book', ipa: '/bʊk/', meaning: 'quyển sách', symbol: '/ʊ/' },
    { id: 'F', word: 'horse', ipa: '/hɔ:s/', meaning: 'con ngựa', symbol: '/ɔ:/' },
    { id: 'G', word: 'fish', ipa: '/fɪʃ/', meaning: 'con cá', symbol: '/ɪ/' },
    { id: 'H', word: 'teacher', ipa: "/'ti:tʃə/", meaning: 'giáo viên', symbol: '/ə/' },
    { id: 'I', word: 'moon', ipa: '/mu:n/', meaning: 'mặt trăng', symbol: '/u:/' },
    { id: 'J', word: 'bag', ipa: '/bæg/', meaning: 'cái cặp/túi', symbol: '/æ/' },
    { id: 'K', word: 'pen', ipa: '/pen/', meaning: 'cây bút mực', symbol: '/e/' },
    { id: 'L', word: 'star', ipa: '/stɑ:/', meaning: 'ngôi sao', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'tree', explanation: "Âm /i:/ (i dài) có trong từ 'tree' /tri:/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'fish', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'fish' /fɪʃ/" },
    { symbol: '/e/', targetWordId: 'K', word: 'pen', explanation: "Âm /e/ (e ngắn) có trong từ 'pen' /pen/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'bag', explanation: "Âm /æ/ (a bẹt) có trong từ 'bag' /bæg/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'bus', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'bus' /bʌs/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'star', explanation: "Âm /ɑ:/ (a dài) có trong từ 'star' /stɑ:/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'clock', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'clock' /klɒk/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'horse', explanation: "Âm /ɔ:/ (o dài) có trong từ 'horse' /hɔ:s/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'book', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'book' /bʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'moon', explanation: "Âm /u:/ (u dài) có trong từ 'moon' /mu:n/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'girl', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'girl' /gɜ:l/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'teacher', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'teacher' /'ti:tʃə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ vào 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Mỗi ngôi nhà là một âm. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'sheep', ipa: '/ʃi:p/', targetSymbol: '/i:/', meaning: 'con cừu' },
      { word: 'cat', ipa: '/kæt/', targetSymbol: '/æ/', meaning: 'con mèo' },
      { word: 'ship', ipa: '/ʃɪp/', targetSymbol: '/ɪ/', meaning: 'tàu thuỷ' },
      { word: 'bed', ipa: '/bed/', targetSymbol: '/e/', meaning: 'cái giường' },
      { word: 'tree', ipa: '/tri:/', targetSymbol: '/i:/', meaning: 'cái cây' },
      { word: 'hat', ipa: '/hæt/', targetSymbol: '/æ/', meaning: 'cái mũ' },
      { word: 'sit', ipa: '/sɪt/', targetSymbol: '/ɪ/', meaning: 'ngồi' },
      { word: 'pen', ipa: '/pen/', targetSymbol: '/e/', meaning: 'cây bút' },
      { word: 'green', ipa: '/gri:n/', targetSymbol: '/i:/', meaning: 'màu xanh lá' },
      { word: 'bag', ipa: '/bæg/', targetSymbol: '/æ/', meaning: 'cái cặp' },
      { word: 'pig', ipa: '/pɪg/', targetSymbol: '/ɪ/', meaning: 'con heo' },
      { word: 'red', ipa: '/red/', targetSymbol: '/e/', meaning: 'màu đỏ' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['sheep', 'tree', 'green'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['ship', 'sit', 'pig'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bed', 'pen', 'red'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['cat', 'hat', 'bag'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vào 4 ngôi nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Mỗi ngôi nhà là một âm. Bé đọc từng từ, nghe âm, rồi xếp từ vào đúng nhà (mỗi nhà đúng 3 từ).',
    allWords: [
      { word: 'hot', ipa: '/hɒt/', targetSymbol: '/ɒ/', meaning: 'nóng' },
      { word: 'door', ipa: '/dɔ:/', targetSymbol: '/ɔ:/', meaning: 'cửa ra vào' },
      { word: 'book', ipa: '/bʊk/', targetSymbol: '/ʊ/', meaning: 'quyển sách' },
      { word: 'food', ipa: '/fu:d/', targetSymbol: '/u:/', meaning: 'thức ăn' },
      { word: 'dog', ipa: '/dɒg/', targetSymbol: '/ɒ/', meaning: 'con chó' },
      { word: 'horse', ipa: '/hɔ:s/', targetSymbol: '/ɔ:/', meaning: 'con ngựa' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'bàn chân' },
      { word: 'moon', ipa: '/mu:n/', targetSymbol: '/u:/', meaning: 'mặt trăng' },
      { word: 'box', ipa: '/bɒks/', targetSymbol: '/ɒ/', meaning: 'cái hộp' },
      { word: 'four', ipa: '/fɔ:/', targetSymbol: '/ɔ:/', meaning: 'số bốn' },
      { word: 'good', ipa: '/gʊd/', targetSymbol: '/ʊ/', meaning: 'tốt/ngoan' },
      { word: 'blue', ipa: '/blu:/', targetSymbol: '/u:/', meaning: 'màu xanh dương' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['hot', 'dog', 'box'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['door', 'horse', 'four'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['book', 'foot', 'good'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['food', 'moon', 'blue'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'ship',
      templateIpa: '/ʃ_p/',
      meaning: 'tàu thuỷ',
      choiceA: 'ɪ',
      choiceB: 'i:',
      correctChoice: 'A',
      fullIpa: '/ʃɪp/',
      explanation: "Từ 'ship' có âm /ɪ/ (i ngắn: đọc nhanh dứt khoát), nên ký hiệu còn thiếu là ɪ."
    },
    {
      id: 2,
      word: 'bed',
      templateIpa: '/b_d/',
      meaning: 'cái giường',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'B',
      fullIpa: '/bed/',
      explanation: "Từ 'bed' có âm /e/ (e ngắn: mở miệng tự nhiên vừa phải), nên đáp án đúng là e."
    },
    {
      id: 3,
      word: 'cup',
      templateIpa: '/k_p/',
      meaning: 'cái cốc/tách',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/kʌp/',
      explanation: "Từ 'cup' có âm /ʌ/ (á ngắn: âm phát ra từ cổ họng dứt khoát), nên đáp án đúng là ʌ."
    },
    {
      id: 4,
      word: 'car',
      templateIpa: '/k_/',
      meaning: 'ô tô',
      choiceA: 'ɔ:',
      choiceB: 'ɑ:',
      correctChoice: 'B',
      fullIpa: '/kɑ:/',
      explanation: "Từ 'car' có âm /ɑ:/ (a dài: mở rộng hàm dưới, hạ lưỡi ngân dài), nên đáp án đúng là ɑ:."
    },
    {
      id: 5,
      word: 'book',
      templateIpa: '/b_k/',
      meaning: 'quyển sách',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/bʊk/',
      explanation: "Từ 'book' có âm /ʊ/ (u ngắn: môi hơi tròn, không chu ra như u dài), nên đáp án đúng là ʊ."
    },
    {
      id: 6,
      word: 'bird',
      templateIpa: '/b_d/',
      meaning: 'con chim',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/bɜ:d/',
      explanation: "Từ 'bird' có âm /ɜ:/ (hoặc /ɝː/ ơ dài uốn lưỡi), nên đáp án đúng là ɜ:."
    },
    {
      id: 7,
      word: 'door',
      templateIpa: '/d_/',
      meaning: 'cửa ra vào',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/dɔ:/',
      explanation: "Từ 'door' có âm /ɔ:/ (o dài: môi tròn rõ, ngân hơi dài), nên đáp án đúng là ɔ:."
    },
    {
      id: 8,
      word: 'teacher',
      templateIpa: "/'ti:tʃ_/",
      meaning: 'giáo viên',
      choiceA: 'ə',
      choiceB: 'ɜ:',
      correctChoice: 'A',
      fullIpa: "/'ti:tʃə/",
      explanation: "Từ 'teacher' có âm đuôi không nhấn trọng âm là âm schwa nhẹ /ə/, nên đáp án đúng là ə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'sheep', ipa: '/ʃi:p/', vowelSound: '/i:/', meaning: 'con cừu' },
        { letter: 'B', word: 'ship', ipa: '/ʃɪp/', vowelSound: '/ɪ/', meaning: 'tàu thuỷ' },
        { letter: 'C', word: 'sit', ipa: '/sɪt/', vowelSound: '/ɪ/', meaning: 'ngồi' },
        { letter: 'D', word: 'pig', ipa: '/pɪg/', vowelSound: '/ɪ/', meaning: 'con heo' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'sheep' mang âm /i:/ (i dài kéo dài). Còn ship, sit, pig đều mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'bed', ipa: '/bed/', vowelSound: '/e/', meaning: 'cái giường' },
        { letter: 'B', word: 'hat', ipa: '/hæt/', vowelSound: '/æ/', meaning: 'cái mũ' },
        { letter: 'C', word: 'pen', ipa: '/pen/', vowelSound: '/e/', meaning: 'cây bút' },
        { letter: 'D', word: 'red', ipa: '/red/', vowelSound: '/e/', meaning: 'màu đỏ' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'hat' mang âm /æ/ (a bẹt mở to miệng). Ba từ còn lại bed, pen, red đều mang âm /e/ (e ngắn)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'cat', ipa: '/kæt/', vowelSound: '/æ/', meaning: 'con mèo' },
        { letter: 'B', word: 'bag', ipa: '/bæg/', vowelSound: '/æ/', meaning: 'cái cặp' },
        { letter: 'C', word: 'hat', ipa: '/hæt/', vowelSound: '/æ/', meaning: 'cái mũ' },
        { letter: 'D', word: 'cup', ipa: '/kʌp/', vowelSound: '/ʌ/', meaning: 'cái tách/cốc' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cup' mang âm /ʌ/ (á ngắn dứt khoát). Còn cat, bag, hat đều mang âm /æ/ (a bẹt mở to miệng)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'door', ipa: '/dɔ:/', vowelSound: '/ɔ:/', meaning: 'cửa ra vào' },
        { letter: 'B', word: 'dog', ipa: '/dɒg/', vowelSound: '/ɒ/', meaning: 'con chó' },
        { letter: 'C', word: 'pot', ipa: '/pɒt/', vowelSound: '/ɒ/', meaning: 'cái nồi' },
        { letter: 'D', word: 'box', ipa: '/bɒks/', vowelSound: '/ɒ/', meaning: 'cái hộp' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'door' mang âm /ɔ:/ (o dài ngân dài). Còn dog, pot, box đều mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'moon', ipa: '/mu:n/', vowelSound: '/u:/', meaning: 'mặt trăng' },
        { letter: 'B', word: 'food', ipa: '/fu:d/', vowelSound: '/u:/', meaning: 'thức ăn' },
        { letter: 'C', word: 'book', ipa: '/bʊk/', vowelSound: '/ʊ/', meaning: 'quyển sách' },
        { letter: 'D', word: 'blue', ipa: '/blu:/', vowelSound: '/u:/', meaning: 'màu xanh dương' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'book' mang âm /ʊ/ (u ngắn thả lỏng). Còn moon, food, blue đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'car', ipa: '/kɑ:/', vowelSound: '/ɑ:/', meaning: 'xe hơi' },
        { letter: 'B', word: 'bird', ipa: '/bɜ:d/', vowelSound: '/ɜ:/', meaning: 'con chim' },
        { letter: 'C', word: 'star', ipa: '/stɑ:/', vowelSound: '/ɑ:/', meaning: 'ngôi sao' },
        { letter: 'D', word: 'park', ipa: '/pɑ:k/', vowelSound: '/ɑ:/', meaning: 'công viên' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'bird' mang âm /ɜ:/ (ơ dài uốn lưỡi). Còn car, star, park đều mang âm /ɑ:/ (a dài ngân vang)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'fish',
      wordMeaning: 'con cá',
      fullIpa: '/fɪʃ/',
      targetSymbol: '/ɪ/',
      choiceA: '/ɪ/',
      choiceB: '/i:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'fish' phát âm là /fɪʃ/ có nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      spokenWord: 'car',
      wordMeaning: 'xe ô tô',
      fullIpa: '/kɑ:/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'B',
      explanation: "Từ 'car' phát âm là /kɑ:/ có nguyên âm /ɑ:/ (a dài có dấu hai chấm : ngân vang)."
    },
    {
      id: 3,
      spokenWord: 'door',
      wordMeaning: 'cửa ra vào',
      fullIpa: '/dɔ:/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʊ/',
      correctChoice: 'A',
      explanation: "Từ 'door' phát âm là /dɔ:/ có nguyên âm /ɔ:/ (o dài chu tròn môi, ngân dài)."
    },
    {
      id: 4,
      spokenWord: 'moon',
      wordMeaning: 'mặt trăng',
      fullIpa: '/mu:n/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'moon' phát âm là /mu:n/ có nguyên âm /u:/ (u dài có dấu hai chấm :)."
    },
    {
      id: 5,
      spokenWord: 'teacher',
      wordMeaning: 'giáo viên',
      fullIpa: "/'ti:tʃə/",
      targetSymbol: '/ə/',
      choiceA: '/e/',
      choiceB: '/ə/',
      choiceC: '/ɜ:/',
      correctChoice: 'B',
      explanation: "Ở đuôi của từ 'teacher' là âm schwa nhẹ /ə/ (ơ ngắn, không có dấu hai chấm)."
    },
    {
      id: 6,
      spokenWord: 'cat',
      wordMeaning: 'con mèo',
      fullIpa: '/kæt/',
      targetSymbol: '/æ/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'cat' phát âm là /kæt/ mang nguyên âm /æ/ (a bẹt mở to miệng)."
    },
    {
      id: 7,
      spokenWord: 'clock',
      wordMeaning: 'đồng hồ',
      fullIpa: '/klɒk/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ɑ:/',
      correctChoice: 'B',
      explanation: "Từ 'clock' phát âm là /klɒk/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'book',
      wordMeaning: 'quyển sách',
      fullIpa: '/bʊk/',
      targetSymbol: '/ʊ/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɜ:/',
      correctChoice: 'A',
      explanation: "Từ 'book' phát âm là /bʊk/ mang nguyên âm /ʊ/ (u ngắn thả lỏng, không kéo dài)."
    }
  ]
};
