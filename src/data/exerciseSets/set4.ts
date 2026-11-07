import { PracticeExamSet } from './types';

export const SET_4: PracticeExamSet = {
  id: 4,
  title: 'Bộ Đề 04: Ẩm Thực & Bếp Xinh',
  subtitle: 'Luyện âm qua món ngon, hoa quả, đồ uống & dụng cụ bếp',
  badge: 'Cơ bản',
  topic: 'Food & Kitchen',
  icon: '🍎',
  description: 'Thưởng thức bữa tiệc ngữ âm cùng các món ăn quen thuộc: bean /i:/ vs bin /ɪ/, peach /i:/ vs pitch, soup /u:/ vs soap, pork /ɔ:/ vs pot /ɒ/, bread /e/ vs butter /ʌ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'bean',
      ipaA: '/bi:n/',
      meaningA: 'hạt đậu',
      wordB: 'bin',
      ipaB: '/bɪn/',
      meaningB: 'thùng rác',
      targetAudioWord: 'bean',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bean' có âm /i:/ (i dài: khóe môi kéo sang 2 bên như đang mỉm cười). 'bin' có âm /ɪ/ (i ngắn: ngắt nhanh)."
    },
    {
      id: 2,
      wordA: 'tea',
      ipaA: '/ti:/',
      meaningA: 'tách trà nóng',
      wordB: 'tin',
      ipaB: '/tɪn/',
      meaningB: 'hộp thiếc',
      targetAudioWord: 'tea',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'tea' mang âm /i:/ (i dài). Từ 'tin' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 3,
      wordA: 'peach',
      ipaA: '/pi:tʃ/',
      meaningA: 'quả đào mọng nước',
      wordB: 'pitch',
      ipaB: '/pɪtʃ/',
      meaningB: 'sân bóng/độ cao giọng',
      targetAudioWord: 'peach',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'peach' mang âm /i:/ (i dài). 'pitch' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 4,
      wordA: 'soup',
      ipaA: '/su:p/',
      meaningA: 'bát súp ngon',
      wordB: 'soap',
      ipaB: '/səʊp/',
      meaningB: 'bánh xà phòng',
      targetAudioWord: 'soup',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'soup' mang nguyên âm đơn /u:/ (u dài chu tròn môi). 'soap' là nguyên âm đôi /əʊ/."
    },
    {
      id: 5,
      wordA: 'pork',
      ipaA: '/pɔ:k/',
      meaningA: 'thịt heo',
      wordB: 'pot',
      ipaB: '/pɒt/',
      meaningB: 'cái nồi kho',
      targetAudioWord: 'pork',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'pork' mang âm /ɔ:/ (o dài ngân dài). Từ 'pot' mang âm /ɒ/ (o ngắn dứt nhanh)."
    },
    {
      id: 6,
      wordA: 'bread',
      ipaA: '/bred/',
      meaningA: 'bánh mì mềm',
      wordB: 'bad',
      ipaB: '/bæd/',
      meaningB: 'ôi thiu/xấu',
      targetAudioWord: 'bread',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bread' mang âm /e/ (e ngắn). Từ 'bad' mang âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 7,
      wordA: 'fork',
      ipaA: '/fɔ:k/',
      meaningA: 'cái nĩa ăn',
      wordB: 'fox',
      ipaB: '/fɒks/',
      meaningB: 'con cáo',
      targetAudioWord: 'fork',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'fork' mang âm /ɔ:/ (o dài). Từ 'fox' mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 8,
      wordA: 'nut',
      ipaA: '/nʌt/',
      meaningA: 'hạt dẻ/quả hạch',
      wordB: 'net',
      ipaB: '/net/',
      meaningB: 'tấm lưới',
      targetAudioWord: 'nut',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'nut' mang âm /ʌ/ (á ngắn phát ra dứt khoát). 'net' mang âm /e/ (e ngắn)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'pot', ipa: '/pɒt/', meaning: 'cái nồi', symbol: '/ɒ/' },
    { id: 'B', word: 'dessert', ipa: '/dɪˈzɜ:t/', meaning: 'món tráng miệng', symbol: '/ɜ:/' },
    { id: 'C', word: 'meat', ipa: '/mi:t/', meaning: 'thịt tươi', symbol: '/i:/' },
    { id: 'D', word: 'butter', ipa: "/'bʌtə/", meaning: 'bơ vàng', symbol: '/ʌ/' },
    { id: 'E', word: 'cook', ipa: '/kʊk/', meaning: 'nấu bếp', symbol: '/ʊ/' },
    { id: 'F', word: 'sauce', ipa: '/sɔ:s/', meaning: 'nước sốt', symbol: '/ɔ:/' },
    { id: 'G', word: 'milk', ipa: '/mɪlk/', meaning: 'sữa tươi', symbol: '/ɪ/' },
    { id: 'H', word: 'banana', ipa: "/bə'nɑ:nə/", meaning: 'quả chuối (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'soup', ipa: '/su:p/', meaning: 'món súp', symbol: '/u:/' },
    { id: 'J', word: 'apple', ipa: "/'æpl/", meaning: 'quả táo đỏ', symbol: '/æ/' },
    { id: 'K', word: 'bread', ipa: '/bred/', meaning: 'bánh mì', symbol: '/e/' },
    { id: 'L', word: 'bar', ipa: '/bɑ:/', meaning: 'thanh sô cô la', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'meat', explanation: "Âm /i:/ (i dài) có trong từ 'meat' /mi:t/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'milk', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'milk' /mɪlk/" },
    { symbol: '/e/', targetWordId: 'K', word: 'bread', explanation: "Âm /e/ (e ngắn) có trong từ 'bread' /bred/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'apple', explanation: "Âm /æ/ (a bẹt) có ở âm đầu từ 'apple' /'æpl/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'butter', explanation: "Âm /ʌ/ (á ngắn) có ở âm đầu từ 'butter' /'bʌtə/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'bar', explanation: "Âm /ɑ:/ (a dài) có trong từ 'bar' /bɑ:/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'pot', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'pot' /pɒt/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'sauce', explanation: "Âm /ɔ:/ (o dài) có trong từ 'sauce' /sɔ:s/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'cook', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'cook' /kʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'soup', explanation: "Âm /u:/ (u dài) có trong từ 'soup' /su:p/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'dessert', explanation: "Âm /ɜ:/ (ơ dài) có ở âm nhấn của 'dessert' /dɪˈzɜ:t/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'banana', explanation: "Âm /ə/ (ơ ngắn schwa) ở đầu và cuối từ 'banana' /bə'nɑ:nə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp món ăn ngon vào 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Đọc to tên từng món ăn và xếp vào ngôi nhà nguyên âm chính xác nhé bé.',
    allWords: [
      { word: 'bean', ipa: '/bi:n/', targetSymbol: '/i:/', meaning: 'hạt đậu' },
      { word: 'apple', ipa: "/'æpl/", targetSymbol: '/æ/', meaning: 'quả táo' },
      { word: 'milk', ipa: '/mɪlk/', targetSymbol: '/ɪ/', meaning: 'sữa tươi' },
      { word: 'bread', ipa: '/bred/', targetSymbol: '/e/', meaning: 'bánh mì' },
      { word: 'meat', ipa: '/mi:t/', targetSymbol: '/i:/', meaning: 'thịt' },
      { word: 'jam', ipa: '/dʒæm/', targetSymbol: '/æ/', meaning: 'mứt dâu' },
      { word: 'fish', ipa: '/fɪʃ/', targetSymbol: '/ɪ/', meaning: 'món cá' },
      { word: 'egg', ipa: '/eg/', targetSymbol: '/e/', meaning: 'trứng gà' },
      { word: 'cheese', ipa: '/tʃi:z/', targetSymbol: '/i:/', meaning: 'phô mai' },
      { word: 'ham', ipa: '/hæm/', targetSymbol: '/æ/', meaning: 'thịt nguội' },
      { word: 'biscuit', ipa: "/'bɪskɪt/", targetSymbol: '/ɪ/', meaning: 'bánh quy' },
      { word: 'pepper', ipa: "/'pepə/", targetSymbol: '/e/', meaning: 'tiêu cay' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['bean', 'meat', 'cheese'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['milk', 'fish', 'biscuit'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bread', 'egg', 'pepper'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['apple', 'jam', 'ham'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp thực phẩm vào 4 ngôi nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Phân loại các nguyên liệu và món ăn vào 4 nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'sauce', ipa: '/sɔ:s/', targetSymbol: '/ɔ:/', meaning: 'nước sốt' },
      { word: 'sugar', ipa: "/'ʃʊgə/", targetSymbol: '/ʊ/', meaning: 'đường ngọt' },
      { word: 'chop', ipa: '/tʃɒp/', targetSymbol: '/ɒ/', meaning: 'chặt thịt' },
      { word: 'juice', ipa: '/dʒu:s/', targetSymbol: '/u:/', meaning: 'nước ép' },
      { word: 'wok', ipa: '/wɒk/', targetSymbol: '/ɒ/', meaning: 'chảo lòng sâu' },
      { word: 'corn', ipa: '/kɔ:n/', targetSymbol: '/ɔ:/', meaning: 'bắp ngô' },
      { word: 'cookie', ipa: "/'kʊki/", targetSymbol: '/ʊ/', meaning: 'bánh quy' },
      { word: 'soup', ipa: '/su:p/', targetSymbol: '/u:/', meaning: 'món canh súp' },
      { word: 'salt', ipa: '/sɔ:lt/', targetSymbol: '/ɔ:/', meaning: 'muối ăn' },
      { word: 'pudding', ipa: "/'pʊdɪŋ/", targetSymbol: '/ʊ/', meaning: 'bánh pudding' },
      { word: 'spoon', ipa: '/spu:n/', targetSymbol: '/u:/', meaning: 'thìa múc súp' },
      { word: 'pot', ipa: '/pɒt/', targetSymbol: '/ɒ/', meaning: 'nồi nấu ăn' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['chop', 'wok', 'pot'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['sauce', 'corn', 'salt'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['sugar', 'cookie', 'pudding'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['juice', 'soup', 'spoon'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'tea',
      templateIpa: '/t_/',
      meaning: 'tách trà thơm',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/ti:/',
      explanation: "Từ 'tea' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'sugar',
      templateIpa: "/'ʃ_gə/",
      meaning: 'muỗng đường cát',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: "/'ʃʊgə/",
      explanation: "Từ 'sugar' có âm /ʊ/ (u ngắn dứt khoát), nên ký hiệu đúng là ʊ."
    },
    {
      id: 3,
      word: 'corn',
      templateIpa: '/k_n/',
      meaning: 'bắp ngô luộc',
      choiceA: 'ɔ:',
      choiceB: 'ɒ',
      correctChoice: 'A',
      fullIpa: '/kɔ:n/',
      explanation: "Từ 'corn' có âm /ɔ:/ (o dài chu môi), nên ký hiệu đúng là ɔ:."
    },
    {
      id: 4,
      word: 'jam',
      templateIpa: '/dʒ_m/',
      meaning: 'hũ mứt dâu',
      choiceA: 'e',
      choiceB: 'æ',
      correctChoice: 'B',
      fullIpa: '/dʒæm/',
      explanation: "Từ 'jam' mang âm /æ/ (a bẹt mở rộng hàm), nên chọn æ."
    },
    {
      id: 5,
      word: 'soup',
      templateIpa: '/s_p/',
      meaning: 'bát súp cua nóng',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/su:p/',
      explanation: "Từ 'soup' mang âm /u:/ (u dài chu tròn môi), nên ký hiệu là u:."
    },
    {
      id: 6,
      word: 'butter',
      templateIpa: "/'b_tə/",
      meaning: 'bơ lạt béo ngậy',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: "/'bʌtə/",
      explanation: "Từ 'butter' mang âm /ʌ/ (á ngắn phát ra dứt khoát), nên chọn ʌ."
    },
    {
      id: 7,
      word: 'egg',
      templateIpa: '/_g/',
      meaning: 'quả trứng gà',
      choiceA: 'e',
      choiceB: 'æ',
      correctChoice: 'A',
      fullIpa: '/eg/',
      explanation: "Từ 'egg' phát âm /eg/ bắt đầu bằng âm /e/ (e ngắn), nên chọn e."
    },
    {
      id: 8,
      word: 'pork',
      templateIpa: '/p_k/',
      meaning: 'món thịt heo',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/pɔ:k/',
      explanation: "Từ 'pork' mang âm /ɔ:/ (o dài tròn môi), nên chọn ɔ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'bean', ipa: '/bi:n/', vowelSound: '/i:/', meaning: 'hạt đậu' },
        { letter: 'B', word: 'meat', ipa: '/mi:t/', vowelSound: '/i:/', meaning: 'thịt' },
        { letter: 'C', word: 'milk', ipa: '/mɪlk/', vowelSound: '/ɪ/', meaning: 'sữa tươi' },
        { letter: 'D', word: 'cheese', ipa: '/tʃi:z/', vowelSound: '/i:/', meaning: 'phô mai' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'milk' mang âm /ɪ/ (i ngắn). Ba từ bean, meat, cheese đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'bread', ipa: '/bred/', vowelSound: '/e/', meaning: 'bánh mì' },
        { letter: 'B', word: 'egg', ipa: '/eg/', vowelSound: '/e/', meaning: 'quả trứng' },
        { letter: 'C', word: 'pepper', ipa: "/'pepə/", vowelSound: '/e/', meaning: 'tiêu cay' },
        { letter: 'D', word: 'apple', ipa: "/'æpl/", vowelSound: '/æ/', meaning: 'quả táo' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'apple' mang âm /æ/ (a bẹt). Ba từ bread, egg, pepper đều mang âm /e/ (e ngắn)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'corn', ipa: '/kɔ:n/', vowelSound: '/ɔ:/', meaning: 'bắp ngô' },
        { letter: 'B', word: 'fork', ipa: '/fɔ:k/', vowelSound: '/ɔ:/', meaning: 'cái nĩa' },
        { letter: 'C', word: 'sauce', ipa: '/sɔ:s/', vowelSound: '/ɔ:/', meaning: 'nước sốt' },
        { letter: 'D', word: 'pot', ipa: '/pɒt/', vowelSound: '/ɒ/', meaning: 'cái nồi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'pot' mang âm /ɒ/ (o ngắn). Ba từ corn, fork, sauce đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'soup', ipa: '/su:p/', vowelSound: '/u:/', meaning: 'món súp' },
        { letter: 'B', word: 'juice', ipa: '/dʒu:s/', vowelSound: '/u:/', meaning: 'nước ép' },
        { letter: 'C', word: 'sugar', ipa: "/'ʃʊgə/", vowelSound: '/ʊ/', meaning: 'đường' },
        { letter: 'D', word: 'spoon', ipa: '/spu:n/', vowelSound: '/u:/', meaning: 'cái thìa' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'sugar' mang âm /ʊ/ (u ngắn). Ba từ soup, juice, spoon đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'butter', ipa: "/'bʌtə/", vowelSound: '/ʌ/', meaning: 'bơ' },
        { letter: 'B', word: 'nut', ipa: '/nʌt/', vowelSound: '/ʌ/', meaning: 'quả hạch' },
        { letter: 'C', word: 'cup', ipa: '/kʌp/', vowelSound: '/ʌ/', meaning: 'cốc nước' },
        { letter: 'D', word: 'bar', ipa: '/bɑ:/', vowelSound: '/ɑ:/', meaning: 'thanh sô cô la' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bar' mang âm /ɑ:/ (a dài). Ba từ butter, nut, cup đều mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'dessert', ipa: '/dɪˈzɜ:t/', vowelSound: '/ɜ:/', meaning: 'tráng miệng' },
        { letter: 'B', word: 'serve', ipa: '/sɜ:v/', vowelSound: '/ɜ:/', meaning: 'phục vụ món' },
        { letter: 'C', word: 'tea', ipa: '/ti:/', vowelSound: '/i:/', meaning: 'trà thơm' },
        { letter: 'D', word: 'stir', ipa: '/stɜ:/', vowelSound: '/ɜ:/', meaning: 'khuấy đều' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'tea' mang âm /i:/ (i dài). Ba từ dessert, serve, stir đều mang âm /ɜ:/ (ơ dài uốn lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'bean',
      wordMeaning: 'hạt đậu ngọt lành',
      fullIpa: '/bi:n/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'bean' phát âm là /bi:n/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'bread',
      wordMeaning: 'ổ bánh mì thơm phức',
      fullIpa: '/bred/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'bread' phát âm là /bred/ mang nguyên âm /e/ (e ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'soup',
      wordMeaning: 'bát súp gà nóng hổi',
      fullIpa: '/su:p/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'soup' phát âm là /su:p/ mang nguyên âm /u:/ (u dài chu môi tròn)."
    },
    {
      id: 4,
      spokenWord: 'corn',
      wordMeaning: 'bắp ngô vàng óng',
      fullIpa: '/kɔ:n/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'corn' phát âm là /kɔ:n/ mang nguyên âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 5,
      spokenWord: 'apple',
      wordMeaning: 'trái táo giòn ngọt',
      fullIpa: "/'æpl/",
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'apple' phát âm là /'æpl/ bắt đầu bằng nguyên âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 6,
      spokenWord: 'milk',
      wordMeaning: 'ly sữa tươi bổ dưỡng',
      fullIpa: '/mɪlk/',
      targetSymbol: '/ɪ/',
      choiceA: '/ɪ/',
      choiceB: '/i:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'milk' phát âm là /mɪlk/ mang nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'sugar',
      wordMeaning: 'đường ngọt nấu ăn',
      fullIpa: "/'ʃʊgə/",
      targetSymbol: '/ʊ/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Âm đầu trong từ 'sugar' mang nguyên âm /ʊ/ (u ngắn thả lỏng)."
    },
    {
      id: 8,
      spokenWord: 'butter',
      wordMeaning: 'miếng bơ thơm béo',
      fullIpa: "/'bʌtə/",
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Âm đầu trong từ 'butter' mang nguyên âm /ʌ/ (á ngắn phát ra dứt khoát)."
    }
  ]
};
