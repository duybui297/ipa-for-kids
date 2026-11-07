import { PracticeExamSet } from './types';

export const SET_7: PracticeExamSet = {
  id: 7,
  title: 'Bộ Đề 07: Trang Phục & Mua Sắm',
  subtitle: 'Luyện âm qua áo quần, mũ nón, giày dép & phụ kiện thời trang',
  badge: 'Cơ bản',
  topic: 'Clothes & Shopping',
  icon: '👗',
  description: 'Thế giới thời trang rực rỡ sắc màu giúp bé làm quen các cặp âm: heel /i:/ vs hill /ɪ/, cap /æ/ vs cup /ʌ/, boot /u:/ vs boat /əʊ/, shirt /ɜ:/ vs short /ɔ:/, belt /e/ vs bat /æ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'heel',
      ipaA: '/hi:l/',
      meaningA: 'gót giày/gót chân',
      wordB: 'hill',
      ipaB: '/hɪl/',
      meaningB: 'ngọn đồi cỏ',
      targetAudioWord: 'heel',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'heel' mang âm /i:/ (i dài mỉm cười). 'hill' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'cap',
      ipaA: '/kæp/',
      meaningA: 'mũ lưỡi trai',
      wordB: 'cup',
      ipaB: '/kʌp/',
      meaningB: 'cái cốc uống nước',
      targetAudioWord: 'cap',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cap' mang âm /æ/ (a bẹt hạ cằm mở to miệng). 'cup' mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 3,
      wordA: 'shirt',
      ipaA: '/ʃɜ:t/',
      meaningA: 'áo sơ mi',
      wordB: 'short',
      ipaB: '/ʃɔ:t/',
      meaningB: 'quần soóc ngắn',
      targetAudioWord: 'shirt',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'shirt' mang âm /ɜ:/ (ơ dài cong lưỡi). 'short' mang âm /ɔ:/ (o dài chu môi tròn)."
    },
    {
      id: 4,
      wordA: 'boot',
      ipaA: '/bu:t/',
      meaningA: 'đôi ủng da',
      wordB: 'boat',
      ipaB: '/bəʊt/',
      meaningB: 'con thuyền',
      targetAudioWord: 'boot',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'boot' mang nguyên âm đơn /u:/ (u dài chu tròn môi). 'boat' là nguyên âm đôi /əʊ/."
    },
    {
      id: 5,
      wordA: 'belt',
      ipaA: '/belt/',
      meaningA: 'thắt lưng da',
      wordB: 'bat',
      ipaB: '/bæt/',
      meaningB: 'con dơi/gậy',
      targetAudioWord: 'belt',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'belt' mang âm /e/ (e ngắn). 'bat' mang âm /æ/ (a bẹt mở rộng miệng)."
    },
    {
      id: 6,
      wordA: 'sock',
      ipaA: '/sɒk/',
      meaningA: 'chiếc tất len',
      wordB: 'sack',
      ipaB: '/sæk/',
      meaningB: 'bao tải',
      targetAudioWord: 'sock',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sock' mang âm /ɒ/ (o ngắn tròn miệng nhẹ). 'sack' mang âm /æ/ (a bẹt)."
    },
    {
      id: 7,
      wordA: 'suit',
      ipaA: '/su:t/',
      meaningA: 'bộ vest lịch sự',
      wordB: 'sit',
      ipaB: '/sɪt/',
      meaningB: 'ngồi',
      targetAudioWord: 'suit',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'suit' mang âm /u:/ (u dài). 'sit' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 8,
      wordA: 'coat',
      ipaA: '/kəʊt/',
      meaningA: 'áo khoác ấm',
      wordB: 'caught',
      ipaB: '/kɔ:t/',
      meaningB: 'đã bắt lấy',
      targetAudioWord: 'caught',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'caught' mang nguyên âm đơn /ɔ:/ (o dài). 'coat' mang nguyên âm đôi /əʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'sock', ipa: '/sɒk/', meaning: 'chiếc tất', symbol: '/ɒ/' },
    { id: 'B', word: 'shirt', ipa: '/ʃɜ:t/', meaning: 'áo sơ mi', symbol: '/ɜ:/' },
    { id: 'C', word: 'jeans', ipa: '/dʒi:nz/', meaning: 'quần bò/bông', symbol: '/i:/' },
    { id: 'D', word: 'glove', ipa: '/glʌv/', meaning: 'găng tay ấm', symbol: '/ʌ/' },
    { id: 'E', word: 'hood', ipa: '/hʊd/', meaning: 'mũ trùm đầu áo khoác', symbol: '/ʊ/' },
    { id: 'F', word: 'shawl', ipa: '/ʃɔ:l/', meaning: 'khăn quàng vai', symbol: '/ɔ:/' },
    { id: 'G', word: 'pin', ipa: '/pɪn/', meaning: 'kim gài áo', symbol: '/ɪ/' },
    { id: 'H', word: 'collar', ipa: "/'kɒlə/", meaning: 'cổ áo (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'shoe', ipa: '/ʃu:/', meaning: 'đôi giày', symbol: '/u:/' },
    { id: 'J', word: 'hat', ipa: '/hæt/', meaning: 'chiếc mũ vải', symbol: '/æ/' },
    { id: 'K', word: 'dress', ipa: '/dres/', meaning: 'váy đầm bé gái', symbol: '/e/' },
    { id: 'L', word: 'scarf', ipa: '/skɑ:f/', meaning: 'khăn quàng cổ', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'jeans', explanation: "Âm /i:/ (i dài) có trong từ 'jeans' /dʒi:nz/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'pin', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'pin' /pɪn/" },
    { symbol: '/e/', targetWordId: 'K', word: 'dress', explanation: "Âm /e/ (e ngắn) có trong từ 'dress' /dres/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'hat', explanation: "Âm /æ/ (a bẹt) có trong từ 'hat' /hæt/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'glove', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'glove' /glʌv/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'scarf', explanation: "Âm /ɑ:/ (a dài) có trong từ 'scarf' /skɑ:f/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'sock', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'sock' /sɒk/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'shawl', explanation: "Âm /ɔ:/ (o dài) có trong từ 'shawl' /ʃɔ:l/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'hood', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'hood' /hʊd/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'shoe', explanation: "Âm /u:/ (u dài) có trong từ 'shoe' /ʃu:/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'shirt', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'shirt' /ʃɜ:t/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'collar', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'collar' /'kɒlə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp trang phục vào 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các trang phục thường ngày vào đúng ngôi nhà ngữ âm tương ứng.',
    allWords: [
      { word: 'jeans', ipa: '/dʒi:nz/', targetSymbol: '/i:/', meaning: 'quần jean' },
      { word: 'hat', ipa: '/hæt/', targetSymbol: '/æ/', meaning: 'chiếc mũ' },
      { word: 'zip', ipa: '/zɪp/', targetSymbol: '/ɪ/', meaning: 'khóa kéo áo' },
      { word: 'dress', ipa: '/dres/', targetSymbol: '/e/', meaning: 'váy đầm' },
      { word: 'sleeve', ipa: '/sli:v/', targetSymbol: '/i:/', meaning: 'tay áo' },
      { word: 'cap', ipa: '/kæp/', targetSymbol: '/æ/', meaning: 'mũ lưỡi trai' },
      { word: 'knit', ipa: '/nɪt/', targetSymbol: '/ɪ/', meaning: 'đan len' },
      { word: 'vest', ipa: '/vest/', targetSymbol: '/e/', meaning: 'áo gi-lê' },
      { word: 'fleece', ipa: '/fli:s/', targetSymbol: '/i:/', meaning: 'áo lông cừu' },
      { word: 'badge', ipa: '/bædʒ/', targetSymbol: '/æ/', meaning: 'huy hiệu áo' },
      { word: 'ribbon', ipa: "/'rɪbən/", targetSymbol: '/ɪ/', meaning: 'dải ruy băng' },
      { word: 'belt', ipa: '/belt/', targetSymbol: '/e/', meaning: 'thắt lưng' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['jeans', 'sleeve', 'fleece'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['zip', 'knit', 'ribbon'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['dress', 'vest', 'belt'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['hat', 'cap', 'badge'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp đồ thời trang vào 4 ngôi nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc tên đồ dùng thời trang và xếp vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'sock', ipa: '/sɒk/', targetSymbol: '/ɒ/', meaning: 'chiếc tất' },
      { word: 'short', ipa: '/ʃɔ:t/', targetSymbol: '/ɔ:/', meaning: 'quần soóc' },
      { word: 'hood', ipa: '/hʊd/', targetSymbol: '/ʊ/', meaning: 'mũ trùm đầu' },
      { word: 'boot', ipa: '/bu:t/', targetSymbol: '/u:/', meaning: 'đôi bốt da' },
      { word: 'top', ipa: '/tɒp/', targetSymbol: '/ɒ/', meaning: 'áo cộc trên' },
      { word: 'shawl', ipa: '/ʃɔ:l/', targetSymbol: '/ɔ:/', meaning: 'khăn choàng' },
      { word: 'wool', ipa: '/wʊl/', targetSymbol: '/ʊ/', meaning: 'len đan' },
      { word: 'suit', ipa: '/su:t/', targetSymbol: '/u:/', meaning: 'bộ com-lê' },
      { word: 'dot', ipa: '/dɒt/', targetSymbol: '/ɒ/', meaning: 'chấm bi trên áo' },
      { word: 'cord', ipa: '/kɔ:d/', targetSymbol: '/ɔ:/', meaning: 'dây buộc giày' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'bàn chân đi giày' },
      { word: 'shoe', ipa: '/ʃu:/', targetSymbol: '/u:/', meaning: 'đôi giày xinh' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['sock', 'top', 'dot'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['short', 'shawl', 'cord'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['hood', 'wool', 'foot'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['boot', 'suit', 'shoe'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'jeans',
      templateIpa: '/dʒ_nz/',
      meaning: 'quần jean xanh',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/dʒi:nz/',
      explanation: "Từ 'jeans' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'hat',
      templateIpa: '/h_t/',
      meaning: 'mũ đội đầu',
      choiceA: 'e',
      choiceB: 'æ',
      correctChoice: 'B',
      fullIpa: '/hæt/',
      explanation: "Từ 'hat' mang âm /æ/ (a bẹt hạ cằm sâu), nên chọn æ."
    },
    {
      id: 3,
      word: 'shirt',
      templateIpa: '/ʃ_t/',
      meaning: 'áo sơ mi cộc',
      choiceA: 'ɜ:',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/ʃɜ:t/',
      explanation: "Từ 'shirt' có âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    },
    {
      id: 4,
      word: 'short',
      templateIpa: '/ʃ_t/',
      meaning: 'quần đùi thể thao',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/ʃɔ:t/',
      explanation: "Từ 'short' có âm /ɔ:/ (o dài chu môi), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'boot',
      templateIpa: '/b_t/',
      meaning: 'đôi bốt đi mưa',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/bu:t/',
      explanation: "Từ 'boot' có âm /u:/ (u dài chu tròn môi), nên chọn u:."
    },
    {
      id: 6,
      word: 'sock',
      templateIpa: '/s_k/',
      meaning: 'đôi vớ ấm',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/sɒk/',
      explanation: "Từ 'sock' có âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 7,
      word: 'glove',
      templateIpa: '/gl_v/',
      meaning: 'đôi găng giữ ấm',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/glʌv/',
      explanation: "Từ 'glove' có âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 8,
      word: 'hood',
      templateIpa: '/h_d/',
      meaning: 'mũ trùm áo gió',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/hʊd/',
      explanation: "Từ 'hood' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'jeans', ipa: '/dʒi:nz/', vowelSound: '/i:/', meaning: 'quần jean' },
        { letter: 'B', word: 'sleeve', ipa: '/sli:v/', vowelSound: '/i:/', meaning: 'tay áo' },
        { letter: 'C', word: 'heel', ipa: '/hi:l/', vowelSound: '/i:/', meaning: 'gót giày' },
        { letter: 'D', word: 'zip', ipa: '/zɪp/', vowelSound: '/ɪ/', meaning: 'dây khóa' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'zip' mang âm /ɪ/ (i ngắn). Ba từ jeans, sleeve, heel đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'hat', ipa: '/hæt/', vowelSound: '/æ/', meaning: 'mũ rộng vành' },
        { letter: 'B', word: 'cap', ipa: '/kæp/', vowelSound: '/æ/', meaning: 'mũ lưỡi trai' },
        { letter: 'C', word: 'badge', ipa: '/bædʒ/', vowelSound: '/æ/', meaning: 'huy hiệu' },
        { letter: 'D', word: 'dress', ipa: '/dres/', vowelSound: '/e/', meaning: 'váy đầm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'dress' mang âm /e/ (e ngắn). Ba từ hat, cap, badge đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'short', ipa: '/ʃɔ:t/', vowelSound: '/ɔ:/', meaning: 'quần soóc' },
        { letter: 'B', word: 'shawl', ipa: '/ʃɔ:l/', vowelSound: '/ɔ:/', meaning: 'khăn quàng' },
        { letter: 'C', word: 'cord', ipa: '/kɔ:d/', vowelSound: '/ɔ:/', meaning: 'dây buộc' },
        { letter: 'D', word: 'sock', ipa: '/sɒk/', vowelSound: '/ɒ/', meaning: 'chiếc tất' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'sock' mang âm /ɒ/ (o ngắn). Ba từ short, shawl, cord đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'boot', ipa: '/bu:t/', vowelSound: '/u:/', meaning: 'đôi bốt' },
        { letter: 'B', word: 'shoe', ipa: '/ʃu:/', vowelSound: '/u:/', meaning: 'giày' },
        { letter: 'C', word: 'suit', ipa: '/su:t/', vowelSound: '/u:/', meaning: 'bộ vest' },
        { letter: 'D', word: 'hood', ipa: '/hʊd/', vowelSound: '/ʊ/', meaning: 'mũ trùm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'hood' mang âm /ʊ/ (u ngắn). Ba từ boot, shoe, suit đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'scarf', ipa: '/skɑ:f/', vowelSound: '/ɑ:/', meaning: 'khăn quàng' },
        { letter: 'B', word: 'glove', ipa: '/glʌv/', vowelSound: '/ʌ/', meaning: 'găng tay' },
        { letter: 'C', word: 'button', ipa: "/'bʌtn/", vowelSound: '/ʌ/', meaning: 'cúc áo' },
        { letter: 'D', word: 'cuff', ipa: '/kʌf/', vowelSound: '/ʌ/', meaning: 'cổ tay áo' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'scarf' mang âm /ɑ:/ (a dài mở rộng họng). 'glove', 'button' và 'cuff' đều mang âm /ʌ/ (ă ngắn)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'shirt', ipa: '/ʃɜ:t/', vowelSound: '/ɜ:/', meaning: 'áo sơ mi' },
        { letter: 'B', word: 'skirt', ipa: '/skɜ:t/', vowelSound: '/ɜ:/', meaning: 'chân váy' },
        { letter: 'C', word: 'fur', ipa: '/fɜ:/', vowelSound: '/ɜ:/', meaning: 'áo lông' },
        { letter: 'D', word: 'cap', ipa: '/kæp/', vowelSound: '/æ/', meaning: 'mũ lưỡi trai' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cap' mang âm /æ/ (a bẹt). Ba từ shirt, skirt, fur đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'jeans',
      wordMeaning: 'chiếc quần jean thời trang',
      fullIpa: '/dʒi:nz/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'jeans' phát âm là /dʒi:nz/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'dress',
      wordMeaning: 'chiếc váy đầm công chúa',
      fullIpa: '/dres/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'dress' phát âm là /dres/ mang nguyên âm /e/ (e ngắn miệng tự nhiên)."
    },
    {
      id: 3,
      spokenWord: 'hat',
      wordMeaning: 'chiếc mũ vải che nắng',
      fullIpa: '/hæt/',
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'hat' phát âm là /hæt/ mang nguyên âm /æ/ (a bẹt mở rộng hàm)."
    },
    {
      id: 4,
      spokenWord: 'sock',
      wordMeaning: 'đôi tất len ấm cúng',
      fullIpa: '/sɒk/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'sock' phát âm là /sɒk/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 5,
      spokenWord: 'boot',
      wordMeaning: 'đôi bốt da cao cổ',
      fullIpa: '/bu:t/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'boot' phát âm là /bu:t/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 6,
      spokenWord: 'hood',
      wordMeaning: 'mũ trùm ấm áp',
      fullIpa: '/hʊd/',
      targetSymbol: '/ʊ/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɜ:/',
      correctChoice: 'A',
      explanation: "Từ 'hood' phát âm là /hʊd/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'shirt',
      wordMeaning: 'chiếc áo sơ mi trắng',
      fullIpa: '/ʃɜ:t/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/ɔ:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'shirt' phát âm là /ʃɜ:t/ mang nguyên âm /ɜ:/ (ơ dài uốn cong đầu lưỡi)."
    },
    {
      id: 8,
      spokenWord: 'scarf',
      wordMeaning: 'khăn quàng mùa đông',
      fullIpa: '/skɑ:f/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'scarf' phát âm là /skɑ:f/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    }
  ]
};
