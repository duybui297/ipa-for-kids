import { PracticeExamSet } from './types';

export const SET_14: PracticeExamSet = {
  id: 14,
  title: 'Bộ Đề 14: Sinh Hoạt & Nhịp Sống',
  subtitle: 'Luyện âm cùng thói quen hằng ngày: thức dậy, rửa mặt, ăn sáng, xem đồng hồ & đi ngủ',
  badge: 'Cơ bản',
  topic: 'Daily Routine',
  icon: '⏰',
  description: 'Gắn liền ngữ âm với nhịp sống hằng ngày của bé: eat /i:/ vs it /ɪ/, wash /ɒ/ vs watch, brush /ʌ/ vs bath /ɑ:/, noon /u:/ vs night, wake /eɪ/ vs walk /ɔ:/, early /ɜ:/ vs hour.',
  exercise1: [
    {
      id: 1,
      wordA: 'eat',
      ipaA: '/i:t/',
      meaningA: 'ăn bữa sáng ngon lành',
      wordB: 'it',
      ipaB: '/ɪt/',
      meaningB: 'nó',
      targetAudioWord: 'eat',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'eat' mang âm /i:/ (i dài mỉm cười). 'it' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'wash',
      ipaA: '/wɒʃ/',
      meaningA: 'rửa mặt sạch sẽ',
      wordB: 'wish',
      ipaB: '/wɪʃ/',
      meaningB: 'điều ước',
      targetAudioWord: 'wash',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'wash' mang âm /ɒ/ (o ngắn tròn miệng). 'wish' mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 3,
      wordA: 'brush',
      ipaA: '/brʌʃ/',
      meaningA: 'đánh răng mỗi sớm',
      wordB: 'bush',
      ipaB: '/bʊʃ/',
      meaningB: 'bụi cây',
      targetAudioWord: 'brush',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'brush' mang âm /ʌ/ (á ngắn dứt khoát). 'bush' mang âm /ʊ/ (u ngắn)."
    },
    {
      id: 4,
      wordA: 'noon',
      ipaA: '/nu:n/',
      meaningA: 'buổi trưa đúng 12 giờ',
      wordB: 'nine',
      ipaB: '/naɪn/',
      meaningB: 'số chín',
      targetAudioWord: 'noon',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'noon' mang nguyên âm đơn /u:/ (u dài chu tròn môi). 'nine' là nguyên âm đôi /aɪ/."
    },
    {
      id: 5,
      wordA: 'dawn',
      ipaA: '/dɔ:n/',
      meaningA: 'bình minh ló rạng',
      wordB: 'down',
      ipaB: '/daʊn/',
      meaningB: 'hướng xuống',
      targetAudioWord: 'dawn',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'dawn' mang nguyên âm đơn /ɔ:/ (o dài chu môi). 'down' là nguyên âm đôi /aʊ/."
    },
    {
      id: 6,
      wordA: 'rest',
      ipaA: '/rest/',
      meaningA: 'nghỉ ngơi thư giãn',
      wordB: 'rust',
      ipaB: '/rʌst/',
      meaningB: 'gỉ sét',
      targetAudioWord: 'rest',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'rest' mang âm /e/ (e ngắn dứt khoát). 'rust' mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 7,
      wordA: 'clock',
      ipaA: '/klɒk/',
      meaningA: 'đồng hồ báo thức',
      wordB: 'clerk',
      ipaB: '/klɑ:k/',
      meaningB: 'nhân viên thư ký',
      targetAudioWord: 'clock',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'clock' mang âm /ɒ/ (o ngắn dứt khoát). 'clerk' trong UK mang âm /ɑ:/ (hoặc US /ɜ:/)."
    },
    {
      id: 8,
      wordA: 'fast',
      ipaA: '/fɑ:st/',
      meaningA: 'nhanh nhẹn',
      wordB: 'first',
      ipaB: '/fɜ:st/',
      meaningB: 'đầu tiên',
      targetAudioWord: 'fast',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'fast' mang âm /ɑ:/ (a dài mở rộng họng). 'first' mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'watch', ipa: '/wɒtʃ/', meaning: 'đồng hồ đeo tay', symbol: '/ɒ/' },
    { id: 'B', word: 'early', ipa: "/'ɜ:li/", meaning: 'thức dậy sớm', symbol: '/ɜ:/' },
    { id: 'C', word: 'sleep', ipa: '/sli:p/', meaning: 'giấc ngủ say', symbol: '/i:/' },
    { id: 'D', word: 'brush', ipa: '/brʌʃ/', meaning: 'bàn chải răng', symbol: '/ʌ/' },
    { id: 'E', word: 'goodnight', ipa: "/ˌgʊd'naɪt/", meaning: 'chúc ngủ ngon', symbol: '/ʊ/' },
    { id: 'F', word: 'dawn', ipa: '/dɔ:n/', meaning: 'bình minh ngày mới', symbol: '/ɔ:/' },
    { id: 'G', word: 'drink', ipa: '/drɪŋk/', meaning: 'uống nước lọc', symbol: '/ɪ/' },
    { id: 'H', word: 'dinner', ipa: "/'dɪnə/", meaning: 'bữa tối gia đình (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'noon', ipa: '/nu:n/', meaning: 'buổi trưa', symbol: '/u:/' },
    { id: 'J', word: 'snack', ipa: '/snæk/', meaning: 'bữa ăn nhẹ', symbol: '/æ/' },
    { id: 'K', word: 'bed', ipa: '/bed/', meaning: 'giường ngủ', symbol: '/e/' },
    { id: 'L', word: 'bath', ipa: '/bɑ:θ/', meaning: 'tắm rửa sạch sẽ', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'sleep', explanation: "Âm /i:/ (i dài) có trong từ 'sleep' /sli:p/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'drink', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'drink' /drɪŋk/" },
    { symbol: '/e/', targetWordId: 'K', word: 'bed', explanation: "Âm /e/ (e ngắn) có trong từ 'bed' /bed/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'snack', explanation: "Âm /æ/ (a bẹt) có trong từ 'snack' /snæk/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'brush', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'brush' /brʌʃ/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'bath', explanation: "Âm /ɑ:/ (a dài) có trong từ 'bath' /bɑ:θ/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'watch', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'watch' /wɒtʃ/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'dawn', explanation: "Âm /ɔ:/ (o dài) có trong từ 'dawn' /dɔ:n/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'goodnight', explanation: "Âm /ʊ/ (u ngắn) có ở âm đầu từ 'goodnight' /ˌgʊd'naɪt/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'noon', explanation: "Âm /u:/ (u dài) có trong từ 'noon' /nu:n/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'early', explanation: "Âm /ɜ:/ (ơ dài) có ở âm đầu từ 'early' /'ɜ:li/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'dinner', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'dinner' /'dɪnə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp thói quen hằng ngày vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các hoạt động sinh hoạt vào đúng 4 gia đình âm /i:/, /ɪ/, /e/, /æ/.',
    allWords: [
      { word: 'eat', ipa: '/i:t/', targetSymbol: '/i:/', meaning: 'ăn sáng' },
      { word: 'snack', ipa: '/snæk/', targetSymbol: '/æ/', meaning: 'ăn phụ' },
      { word: 'drink', ipa: '/drɪŋk/', targetSymbol: '/ɪ/', meaning: 'uống nước' },
      { word: 'bed', ipa: '/bed/', targetSymbol: '/e/', meaning: 'lên giường ngủ' },
      { word: 'clean', ipa: '/kli:n/', targetSymbol: '/i:/', meaning: 'dọn dẹp' },
      { word: 'nap', ipa: '/næp/', targetSymbol: '/æ/', meaning: 'ngủ trưa' },
      { word: 'rinse', ipa: '/rɪns/', targetSymbol: '/ɪ/', meaning: 'súc miệng' },
      { word: 'rest', ipa: '/rest/', targetSymbol: '/e/', meaning: 'nghỉ ngơi' },
      { word: 'read', ipa: '/ri:d/', targetSymbol: '/i:/', meaning: 'đọc sách tối' },
      { word: 'chat', ipa: '/tʃæt/', targetSymbol: '/æ/', meaning: 'trò chuyện cùng bố mẹ' },
      { word: 'sit', ipa: '/sɪt/', targetSymbol: '/ɪ/', meaning: 'ngồi vào bàn ăn' },
      { word: 'step', ipa: '/step/', targetSymbol: '/e/', meaning: 'bước ra khỏi giường' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['eat', 'clean', 'read'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['drink', 'rinse', 'sit'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bed', 'rest', 'step'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['snack', 'nap', 'chat'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp thời gian biểu vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ thời gian và kéo thả vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'watch', ipa: '/wɒtʃ/', targetSymbol: '/ɒ/', meaning: 'đồng hồ' },
      { word: 'dawn', ipa: '/dɔ:n/', targetSymbol: '/ɔ:/', meaning: 'bình minh' },
      { word: 'good', ipa: '/gʊd/', targetSymbol: '/ʊ/', meaning: 'buổi sáng tốt lành' },
      { word: 'noon', ipa: '/nu:n/', targetSymbol: '/u:/', meaning: 'buổi trưa' },
      { word: 'clock', ipa: '/klɒk/', targetSymbol: '/ɒ/', meaning: 'đồng hồ treo tường' },
      { word: 'morning', ipa: "/'mɔ:nɪŋ/", targetSymbol: '/ɔ:/', meaning: 'buổi sáng' },
      { word: 'look', ipa: '/lʊk/', targetSymbol: '/ʊ/', meaning: 'nhìn giờ' },
      { word: 'spoon', ipa: '/spu:n/', targetSymbol: '/u:/', meaning: 'thìa ăn cơm' },
      { word: 'wash', ipa: '/wɒʃ/', targetSymbol: '/ɒ/', meaning: 'rửa tay trước ăn' },
      { word: 'call', ipa: '/kɔ:l/', targetSymbol: '/ɔ:/', meaning: 'gọi thức dậy' },
      { word: 'cook', ipa: '/kʊk/', targetSymbol: '/ʊ/', meaning: 'nấu bữa tối' },
      { word: 'room', ipa: '/ru:m/', targetSymbol: '/u:/', meaning: 'vào phòng ngủ' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['watch', 'clock', 'wash'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['dawn', 'morning', 'call'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['good', 'look', 'cook'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['noon', 'spoon', 'room'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'eat',
      templateIpa: '/_t/',
      meaning: 'ăn cơm ngon',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/i:t/',
      explanation: "Từ 'eat' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'drink',
      templateIpa: '/dr_ŋk/',
      meaning: 'uống nước đầy đủ',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'B',
      fullIpa: '/drɪŋk/',
      explanation: "Từ 'drink' có âm /ɪ/ (i ngắn dứt khoát), nên chọn ɪ."
    },
    {
      id: 3,
      word: 'watch',
      templateIpa: '/w_tʃ/',
      meaning: 'xem đồng hồ',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/wɒtʃ/',
      explanation: "Từ 'watch' có âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 4,
      word: 'dawn',
      templateIpa: '/d_n/',
      meaning: 'bình minh sáng sớm',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/dɔ:n/',
      explanation: "Từ 'dawn' có âm /ɔ:/ (o dài chu môi), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'noon',
      templateIpa: '/n_n/',
      meaning: 'buổi trưa hè',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/nu:n/',
      explanation: "Từ 'noon' có âm /u:/ (u dài chu tròn môi), nên chọn u:."
    },
    {
      id: 6,
      word: 'cook',
      templateIpa: '/k_k/',
      meaning: 'nấu bữa cơm chiều',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/kʊk/',
      explanation: "Từ 'cook' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 7,
      word: 'brush',
      templateIpa: '/br_ʃ/',
      meaning: 'chải răng thơm tho',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/brʌʃ/',
      explanation: "Từ 'brush' mang âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 8,
      word: 'bath',
      templateIpa: '/b_θ/',
      meaning: 'tắm rửa sạch sẽ',
      choiceA: 'ɑ:',
      choiceB: 'æ',
      correctChoice: 'A',
      fullIpa: '/bɑ:θ/',
      explanation: "Từ 'bath' mang âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'eat', ipa: '/i:t/', vowelSound: '/i:/', meaning: 'ăn' },
        { letter: 'B', word: 'clean', ipa: '/kli:n/', vowelSound: '/i:/', meaning: 'dọn' },
        { letter: 'C', word: 'read', ipa: '/ri:d/', vowelSound: '/i:/', meaning: 'đọc sách' },
        { letter: 'D', word: 'drink', ipa: '/drɪŋk/', vowelSound: '/ɪ/', meaning: 'uống' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'drink' mang âm /ɪ/ (i ngắn). Ba từ eat, clean, read đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'snack', ipa: '/snæk/', vowelSound: '/æ/', meaning: 'bữa phụ' },
        { letter: 'B', word: 'nap', ipa: '/næp/', vowelSound: '/æ/', meaning: 'ngủ trưa' },
        { letter: 'C', word: 'chat', ipa: '/tʃæt/', vowelSound: '/æ/', meaning: 'nói chuyện' },
        { letter: 'D', word: 'bed', ipa: '/bed/', vowelSound: '/e/', meaning: 'giường' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bed' mang âm /e/ (e ngắn). Ba từ snack, nap, chat đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'dawn', ipa: '/dɔ:n/', vowelSound: '/ɔ:/', meaning: 'bình minh' },
        { letter: 'B', word: 'morning', ipa: "/'mɔ:nɪŋ/", vowelSound: '/ɔ:/', meaning: 'buổi sáng' },
        { letter: 'C', word: 'call', ipa: '/kɔ:l/', vowelSound: '/ɔ:/', meaning: 'gọi' },
        { letter: 'D', word: 'watch', ipa: '/wɒtʃ/', vowelSound: '/ɒ/', meaning: 'đồng hồ' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'watch' mang âm /ɒ/ (o ngắn). Ba từ dawn, morning, call đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'noon', ipa: '/nu:n/', vowelSound: '/u:/', meaning: 'buổi trưa' },
        { letter: 'B', word: 'spoon', ipa: '/spu:n/', vowelSound: '/u:/', meaning: 'cái thìa' },
        { letter: 'C', word: 'room', ipa: '/ru:m/', vowelSound: '/u:/', meaning: 'phòng' },
        { letter: 'D', word: 'cook', ipa: '/kʊk/', vowelSound: '/ʊ/', meaning: 'nấu ăn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cook' mang âm /ʊ/ (u ngắn). Ba từ noon, spoon, room đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'bath', ipa: '/bɑ:θ/', vowelSound: '/ɑ:/', meaning: 'tắm' },
        { letter: 'B', word: 'fast', ipa: '/fɑ:st/', vowelSound: '/ɑ:/', meaning: 'nhanh' },
        { letter: 'C', word: 'alarm', ipa: "/ə'lɑ:m/", vowelSound: '/ɑ:/', meaning: 'chuông báo' },
        { letter: 'D', word: 'brush', ipa: '/brʌʃ/', vowelSound: '/ʌ/', meaning: 'đánh răng' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'brush' mang âm /ʌ/ (á ngắn). Ba từ bath, fast, alarm đều mang âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'early', ipa: "/'ɜ:li/", vowelSound: '/ɜ:/', meaning: 'thức sớm' },
        { letter: 'B', word: 'work', ipa: '/wɜ:k/', vowelSound: '/ɜ:/', meaning: 'làm việc' },
        { letter: 'C', word: 'learn', ipa: '/lɜ:n/', vowelSound: '/ɜ:/', meaning: 'học bài' },
        { letter: 'D', word: 'rest', ipa: '/rest/', vowelSound: '/e/', meaning: 'nghỉ ngơi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'rest' mang âm /e/ (e ngắn). Ba từ early, work, learn đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'eat',
      wordMeaning: 'thưởng thức bữa ăn ngon',
      fullIpa: '/i:t/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'eat' phát âm là /i:t/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'drink',
      wordMeaning: 'uống ly nước mát',
      fullIpa: '/drɪŋk/',
      targetSymbol: '/ɪ/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'drink' phát âm là /drɪŋk/ mang nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'bed',
      wordMeaning: 'chiếc giường ngủ êm ái',
      fullIpa: '/bed/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'bed' phát âm là /bed/ mang nguyên âm /e/ (e ngắn miệng tự nhiên)."
    },
    {
      id: 4,
      spokenWord: 'snack',
      wordMeaning: 'bữa xế nhẹ nhàng',
      fullIpa: '/snæk/',
      targetSymbol: '/æ/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'snack' phát âm là /snæk/ mang nguyên âm /æ/ (a bẹt mở rộng hàm)."
    },
    {
      id: 5,
      spokenWord: 'noon',
      wordMeaning: 'giờ nghỉ trưa tròn 12h',
      fullIpa: '/nu:n/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'noon' phát âm là /nu:n/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 6,
      spokenWord: 'cook',
      wordMeaning: 'nấu bữa cơm gia đình',
      fullIpa: '/kʊk/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'cook' phát âm là /kʊk/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'brush',
      wordMeaning: 'đánh răng sạch bóng',
      fullIpa: '/brʌʃ/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'brush' phát âm là /brʌʃ/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'dawn',
      wordMeaning: 'ánh bình minh rạng rỡ',
      fullIpa: '/dɔ:n/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'dawn' phát âm là /dɔ:n/ mang nguyên âm /ɔ:/ (o dài chu môi ngân dài)."
    }
  ]
};
