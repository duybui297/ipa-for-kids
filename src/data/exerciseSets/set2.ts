import { PracticeExamSet } from './types';

export const SET_2: PracticeExamSet = {
  id: 2,
  title: 'Bộ Đề 02: Lớp Học & Đồ Dùng',
  subtitle: 'Luyện âm qua bảng chữ, bàn học, bút sách & phòng học',
  badge: 'Cơ bản',
  topic: 'School & Classroom',
  icon: '🎒',
  description: 'Bộ đề chủ đề trường lớp giúp bé rèn luyện phản xạ nghe các từ vựng học tập như pen, desk, book, ruler, class, chalk, phân biệt chính xác /e/ - /æ/, /u:/ - /ʊ/ và /i:/ - /ɪ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'read',
      ipaA: '/ri:d/',
      meaningA: 'đọc sách',
      wordB: 'rid',
      ipaB: '/rɪd/',
      meaningB: 'thoát khỏi',
      targetAudioWord: 'read',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'read' mang âm /i:/ (i dài: miệng mỉm cười, ngân dài). Từ 'rid' mang âm /ɪ/ (i ngắn: ngắt nhanh)."
    },
    {
      id: 2,
      wordA: 'pen',
      ipaA: '/pen/',
      meaningA: 'cây bút mực',
      wordB: 'pan',
      ipaB: '/pæn/',
      meaningB: 'cái chảo',
      targetAudioWord: 'pen',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'pen' chứa âm /e/ (e ngắn: mở môi vừa phải). Từ 'pan' chứa âm /æ/ (a bẹt: hạ hàm dưới sâu hơn)."
    },
    {
      id: 3,
      wordA: 'desk',
      ipaA: '/desk/',
      meaningA: 'bàn học',
      wordB: 'disc',
      ipaB: '/dɪsk/',
      meaningB: 'đĩa học/đĩa nhạc',
      targetAudioWord: 'desk',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'desk' chứa âm /e/ (e ngắn). Từ 'disc' chứa âm /ɪ/ (i ngắn)."
    },
    {
      id: 4,
      wordA: 'ruler',
      ipaA: "/'ru:lə/",
      meaningA: 'thước kẻ',
      wordB: 'rubber',
      ipaB: "/'rʌbə/",
      meaningB: 'cục tẩy',
      targetAudioWord: 'ruler',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'ruler' bắt đầu bằng âm /u:/ (u dài: chu môi tròn). Từ 'rubber' bắt đầu bằng âm /ʌ/ (á ngắn)."
    },
    {
      id: 5,
      wordA: 'seat',
      ipaA: '/si:t/',
      meaningA: 'chỗ ngồi trong lớp',
      wordB: 'sit',
      ipaB: '/sɪt/',
      meaningB: 'ngồi xuống',
      targetAudioWord: 'seat',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'seat' có âm /i:/ (ngân dài). Từ 'sit' có âm /ɪ/ (dứt khoát nhanh)."
    },
    {
      id: 6,
      wordA: 'chalk',
      ipaA: '/tʃɔ:k/',
      meaningA: 'viên phấn',
      wordB: 'chuck',
      ipaB: '/tʃʌk/',
      meaningB: 'ném đi',
      targetAudioWord: 'chalk',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'chalk' có âm /ɔ:/ (o dài: môi tròn mở to, ngân dài). Từ 'chuck' có âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 7,
      wordA: 'board',
      ipaA: '/bɔ:d/',
      meaningA: 'bảng lớp học',
      wordB: 'bird',
      ipaB: '/bɜ:d/',
      meaningB: 'con chim',
      targetAudioWord: 'board',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'board' mang âm /ɔ:/ (o dài chu môi). Từ 'bird' mang âm /ɜ:/ (ơ dài cong lưỡi)."
    },
    {
      id: 8,
      wordA: 'class',
      ipaA: '/klɑ:s/',
      meaningA: 'lớp học',
      wordB: 'clash',
      ipaB: '/klæʃ/',
      meaningB: 'va chạm',
      targetAudioWord: 'class',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'class' (chuẩn RP /klɑ:s/ với âm a dài mở to sâu vòm họng; phân biệt với /klæʃ/ âm a bẹt kết thúc đuôi /ʃ/)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'box', ipa: '/bɒks/', meaning: 'hộp bút/hộp phấn', symbol: '/ɒ/' },
    { id: 'B', word: 'learn', ipa: '/lɜ:n/', meaning: 'học tập', symbol: '/ɜ:/' },
    { id: 'C', word: 'read', ipa: '/ri:d/', meaning: 'đọc bài', symbol: '/i:/' },
    { id: 'D', word: 'study', ipa: "/'stʌdi/", meaning: 'học bài', symbol: '/ʌ/' },
    { id: 'E', word: 'look', ipa: '/lʊk/', meaning: 'nhìn lên bảng', symbol: '/ʊ/' },
    { id: 'F', word: 'draw', ipa: '/drɔ:/', meaning: 'vẽ tranh', symbol: '/ɔ:/' },
    { id: 'G', word: 'pin', ipa: '/pɪn/', meaning: 'ghim giấy', symbol: '/ɪ/' },
    { id: 'H', word: 'paper', ipa: "/'peɪpə/", meaning: 'tờ giấy', symbol: '/ə/' },
    { id: 'I', word: 'ruler', ipa: "/'ru:lə/", meaning: 'cây thước kẻ', symbol: '/u:/' },
    { id: 'J', word: 'map', ipa: '/mæp/', meaning: 'bản đồ lớp học', symbol: '/æ/' },
    { id: 'K', word: 'desk', ipa: '/desk/', meaning: 'bàn học sinh', symbol: '/e/' },
    { id: 'L', word: 'art', ipa: '/ɑ:t/', meaning: 'môn mỹ thuật', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'read', explanation: "Âm /i:/ (i dài) có trong từ 'read' /ri:d/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'pin', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'pin' /pɪn/" },
    { symbol: '/e/', targetWordId: 'K', word: 'desk', explanation: "Âm /e/ (e ngắn) có trong từ 'desk' /desk/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'map', explanation: "Âm /æ/ (a bẹt) có trong từ 'map' /mæp/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'study', explanation: "Âm /ʌ/ (á ngắn) ở âm tiết đầu của 'study' /'stʌdi/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'art', explanation: "Âm /ɑ:/ (a dài) có trong từ 'art' /ɑ:t/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'box', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'box' /bɒks/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'draw', explanation: "Âm /ɔ:/ (o dài) có trong từ 'draw' /drɔ:/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'look', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'look' /lʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'ruler', explanation: "Âm /u:/ (u dài) ở âm đầu của 'ruler' /'ru:lə/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'learn', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'learn' /lɜ:n/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'paper', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'paper' /'peɪpə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ trường lớp vào 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Mỗi ngôi nhà là một âm quen thuộc. Bé đọc từ, bấm nghe âm và xếp đúng 3 từ vào mỗi nhà nhé.',
    allWords: [
      { word: 'seat', ipa: '/si:t/', targetSymbol: '/i:/', meaning: 'chỗ ngồi' },
      { word: 'map', ipa: '/mæp/', targetSymbol: '/æ/', meaning: 'bản đồ' },
      { word: 'pin', ipa: '/pɪn/', targetSymbol: '/ɪ/', meaning: 'cái ghim' },
      { word: 'desk', ipa: '/desk/', targetSymbol: '/e/', meaning: 'bàn học' },
      { word: 'teach', ipa: '/ti:tʃ/', targetSymbol: '/i:/', meaning: 'dạy học' },
      { word: 'bag', ipa: '/bæg/', targetSymbol: '/æ/', meaning: 'cặp sách' },
      { word: 'sit', ipa: '/sɪt/', targetSymbol: '/ɪ/', meaning: 'ngồi ngay ngắn' },
      { word: 'pen', ipa: '/pen/', targetSymbol: '/e/', meaning: 'bút viết' },
      { word: 'read', ipa: '/ri:d/', targetSymbol: '/i:/', meaning: 'đọc bài' },
      { word: 'flag', ipa: '/flæg/', targetSymbol: '/æ/', meaning: 'lá cờ trường' },
      { word: 'win', ipa: '/wɪn/', targetSymbol: '/ɪ/', meaning: 'chiến thắng' },
      { word: 'test', ipa: '/test/', targetSymbol: '/e/', meaning: 'bài kiểm tra' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['seat', 'teach', 'read'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['pin', 'sit', 'win'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['desk', 'pen', 'test'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['map', 'bag', 'flag'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ trường lớp vào 4 ngôi nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Bé hãy đọc to từng từ và kéo thả vào đúng gia đình âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'chalk', ipa: '/tʃɔ:k/', targetSymbol: '/ɔ:/', meaning: 'phấn viết' },
      { word: 'book', ipa: '/bʊk/', targetSymbol: '/ʊ/', meaning: 'sách vở' },
      { word: 'dot', ipa: '/dɒt/', targetSymbol: '/ɒ/', meaning: 'dấu chấm' },
      { word: 'school', ipa: '/sku:l/', targetSymbol: '/u:/', meaning: 'trường học' },
      { word: 'spot', ipa: '/spɒt/', targetSymbol: '/ɒ/', meaning: 'điểm số/chỗ' },
      { word: 'board', ipa: '/bɔ:d/', targetSymbol: '/ɔ:/', meaning: 'bảng lớp' },
      { word: 'look', ipa: '/lʊk/', targetSymbol: '/ʊ/', meaning: 'nhìn xem' },
      { word: 'ruler', ipa: "/'ru:lə/", targetSymbol: '/u:/', meaning: 'thước kẻ' },
      { word: 'drop', ipa: '/drɒp/', targetSymbol: '/ɒ/', meaning: 'đánh rơi bút' },
      { word: 'draw', ipa: '/drɔ:/', targetSymbol: '/ɔ:/', meaning: 'vẽ hình' },
      { word: 'took', ipa: '/tʊk/', targetSymbol: '/ʊ/', meaning: 'cầm lấy thước' },
      { word: 'group', ipa: '/gru:p/', targetSymbol: '/u:/', meaning: 'nhóm bạn' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['dot', 'spot', 'drop'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['chalk', 'board', 'draw'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['book', 'look', 'took'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['school', 'ruler', 'group'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'desk',
      templateIpa: '/d_sk/',
      meaning: 'bàn học',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'B',
      fullIpa: '/desk/',
      explanation: "Từ 'desk' mang âm /e/ (e ngắn miệng mở vừa phải), nên ký hiệu còn thiếu là e."
    },
    {
      id: 2,
      word: 'look',
      templateIpa: '/l_k/',
      meaning: 'nhìn lên bảng',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/lʊk/',
      explanation: "Từ 'look' có âm /ʊ/ (u ngắn dứt khoát không kéo dài), nên ký hiệu điền là ʊ."
    },
    {
      id: 3,
      word: 'read',
      templateIpa: '/r_d/',
      meaning: 'đọc sách',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/ri:d/',
      explanation: "Từ 'read' có nguyên âm /i:/ (i dài mỉm cười ngân dài), nên ký hiệu đúng là i:."
    },
    {
      id: 4,
      word: 'map',
      templateIpa: '/m_p/',
      meaning: 'bản đồ treo tường',
      choiceA: 'ʌ',
      choiceB: 'æ',
      correctChoice: 'B',
      fullIpa: '/mæp/',
      explanation: "Từ 'map' mang âm /æ/ (a bẹt hạ cằm mở to miệng), nên ký hiệu đúng là æ."
    },
    {
      id: 5,
      word: 'chalk',
      templateIpa: '/tʃ_k/',
      meaning: 'viên phấn trắng',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/tʃɔ:k/',
      explanation: "Từ 'chalk' phát âm /tʃɔ:k/ có âm /ɔ:/ (o dài chu tròn môi), nên điền ɔ:."
    },
    {
      id: 6,
      word: 'learn',
      templateIpa: '/l_n/',
      meaning: 'học hỏi',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/lɜ:n/',
      explanation: "Từ 'learn' có âm /ɜ:/ (ơ dài cong lưỡi), nên điền ɜ:."
    },
    {
      id: 7,
      word: 'sun',
      templateIpa: '/s_n/',
      meaning: 'mặt trời trên tranh vẽ',
      choiceA: 'ʌ',
      choiceB: 'ɑ:',
      correctChoice: 'A',
      fullIpa: '/sʌn/',
      explanation: "Từ 'sun' có âm /ʌ/ (á ngắn phát ra dứt khoát), nên ký hiệu đúng là ʌ."
    },
    {
      id: 8,
      word: 'paper',
      templateIpa: "/'peɪp_/",
      meaning: 'tờ giấy vẽ',
      choiceA: 'ə',
      choiceB: 'ɜ:',
      correctChoice: 'A',
      fullIpa: "/'peɪpə/",
      explanation: "Âm đuôi từ 'paper' không nhấn trọng âm, là âm schwa nhẹ /ə/, nên chọn ə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'pen', ipa: '/pen/', vowelSound: '/e/', meaning: 'bút mực' },
        { letter: 'B', word: 'desk', ipa: '/desk/', vowelSound: '/e/', meaning: 'bàn học' },
        { letter: 'C', word: 'bag', ipa: '/bæg/', vowelSound: '/æ/', meaning: 'cặp sách' },
        { letter: 'D', word: 'bell', ipa: '/bel/', vowelSound: '/e/', meaning: 'chuông trường' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'bag' mang âm /æ/ (a bẹt). Ba từ còn lại pen, desk, bell đều mang âm /e/ (e ngắn)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'pin', ipa: '/pɪn/', vowelSound: '/ɪ/', meaning: 'cái ghim' },
        { letter: 'B', word: 'sit', ipa: '/sɪt/', vowelSound: '/ɪ/', meaning: 'ngồi học' },
        { letter: 'C', word: 'read', ipa: '/ri:d/', vowelSound: '/i:/', meaning: 'đọc sách' },
        { letter: 'D', word: 'fit', ipa: '/fɪt/', vowelSound: '/ɪ/', meaning: 'vừa vặn' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'read' mang âm /i:/ (i dài). Ba từ pin, sit, fit đều mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'chalk', ipa: '/tʃɔ:k/', vowelSound: '/ɔ:/', meaning: 'viên phấn' },
        { letter: 'B', word: 'board', ipa: '/bɔ:d/', vowelSound: '/ɔ:/', meaning: 'bảng đen' },
        { letter: 'C', word: 'draw', ipa: '/drɔ:/', vowelSound: '/ɔ:/', meaning: 'vẽ tranh' },
        { letter: 'D', word: 'dot', ipa: '/dɒt/', vowelSound: '/ɒ/', meaning: 'dấu chấm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'dot' mang âm /ɒ/ (o ngắn). Ba từ chalk, board, draw đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'look', ipa: '/lʊk/', vowelSound: '/ʊ/', meaning: 'nhìn xem' },
        { letter: 'B', word: 'school', ipa: '/sku:l/', vowelSound: '/u:/', meaning: 'trường học' },
        { letter: 'C', word: 'book', ipa: '/bʊk/', vowelSound: '/ʊ/', meaning: 'sách vở' },
        { letter: 'D', word: 'took', ipa: '/tʊk/', vowelSound: '/ʊ/', meaning: 'cầm lấy' }
      ],
      correctChoice: 'B',
      explanation: "Đáp án đúng là B: 'school' mang âm /u:/ (u dài chu môi). Ba từ look, book, took đều mang âm /ʊ/ (u ngắn)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'art', ipa: '/ɑ:t/', vowelSound: '/ɑ:/', meaning: 'môn mỹ thuật' },
        { letter: 'B', word: 'card', ipa: '/kɑ:d/', vowelSound: '/ɑ:/', meaning: 'thẻ học tập' },
        { letter: 'C', word: 'cup', ipa: '/kʌp/', vowelSound: '/ʌ/', meaning: 'cốc nước' },
        { letter: 'D', word: 'class', ipa: '/klɑ:s/', vowelSound: '/ɑ:/', meaning: 'lớp học' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'cup' mang âm /ʌ/ (á ngắn). Các từ art, card, class đều mang âm /ɑ:/ (a dài mở rộng miệng)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'learn', ipa: '/lɜ:n/', vowelSound: '/ɜ:/', meaning: 'học tập' },
        { letter: 'B', word: 'sir', ipa: '/sɜ:/', vowelSound: '/ɜ:/', meaning: 'thầy giáo' },
        { letter: 'C', word: 'turn', ipa: '/tɜ:n/', vowelSound: '/ɜ:/', meaning: 'lượt phát biểu' },
        { letter: 'D', word: 'pen', ipa: '/pen/', vowelSound: '/e/', meaning: 'cây bút' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'pen' mang âm /e/ (e ngắn). Ba từ learn, sir, turn đều mang âm /ɜ:/ (ơ dài uốn lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'desk',
      wordMeaning: 'bàn học sinh',
      fullIpa: '/desk/',
      targetSymbol: '/e/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/i:/',
      correctChoice: 'A',
      explanation: "Từ 'desk' phát âm là /desk/ mang nguyên âm /e/ (e ngắn)."
    },
    {
      id: 2,
      spokenWord: 'read',
      wordMeaning: 'đọc sách bài học',
      fullIpa: '/ri:d/',
      targetSymbol: '/i:/',
      choiceA: '/ɪ/',
      choiceB: '/i:/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'read' phát âm là /ri:d/ mang nguyên âm /i:/ (i dài có dấu hai chấm :)."
    },
    {
      id: 3,
      spokenWord: 'chalk',
      wordMeaning: 'viên phấn viết',
      fullIpa: '/tʃɔ:k/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'chalk' phát âm là /tʃɔ:k/ mang nguyên âm /ɔ:/ (o dài chu môi)."
    },
    {
      id: 4,
      spokenWord: 'map',
      wordMeaning: 'tấm bản đồ',
      fullIpa: '/mæp/',
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ɑ:/',
      correctChoice: 'B',
      explanation: "Từ 'map' phát âm là /mæp/ mang nguyên âm /æ/ (a bẹt mở rộng hàm)."
    },
    {
      id: 5,
      spokenWord: 'ruler',
      wordMeaning: 'cây thước kẻ',
      fullIpa: "/'ru:lə/",
      targetSymbol: '/u:/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɔ:/',
      correctChoice: 'B',
      explanation: "Âm đầu trong từ 'ruler' mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 6,
      spokenWord: 'paper',
      wordMeaning: 'tờ giấy viết',
      fullIpa: "/'peɪpə/",
      targetSymbol: '/ə/',
      choiceA: '/ə/',
      choiceB: '/ɜ:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Âm cuối không nhấn giọng của 'paper' là âm schwa nhẹ /ə/."
    },
    {
      id: 7,
      spokenWord: 'box',
      wordMeaning: 'hộp đựng bút',
      fullIpa: '/bɒks/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'box' phát âm là /bɒks/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'art',
      wordMeaning: 'môn mỹ thuật',
      fullIpa: '/ɑ:t/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'art' phát âm là /ɑ:t/ mang nguyên âm /ɑ:/ (a dài mở sâu vòm họng)."
    }
  ]
};
