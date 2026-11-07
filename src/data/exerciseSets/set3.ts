import { PracticeExamSet } from './types';

export const SET_3: PracticeExamSet = {
  id: 3,
  title: 'Bộ Đề 03: Gia Đình & Tổ Ấm',
  subtitle: 'Luyện âm qua thành viên gia đình, phòng ốc và đồ dùng trong nhà',
  badge: 'Cơ bản',
  topic: 'Home & Family',
  icon: '🏡',
  description: 'Khám phá ngôi nhà ấm cúng cùng bé với các âm /ʌ/ (mum, son), /i:/ - /ɪ/ (sleep, sit), /ɑ:/ (bath, father), /u:/ - /ʊ/ (room, cook). Củng cố khả năng lắng nghe và nhận diện phiên âm chuẩn xác.',
  exercise1: [
    {
      id: 1,
      wordA: 'sleep',
      ipaA: '/sli:p/',
      meaningA: 'ngủ say',
      wordB: 'slip',
      ipaB: '/slɪp/',
      meaningB: 'trượt chân',
      targetAudioWord: 'sleep',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sleep' mang âm /i:/ (i dài mỉm cười ngân dài). Từ 'slip' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'bath',
      ipaA: '/bɑ:θ/',
      meaningA: 'bồn tắm',
      wordB: 'bat',
      ipaB: '/bæt/',
      meaningB: 'con dơi/gậy',
      targetAudioWord: 'bath',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bath' có nguyên âm /ɑ:/ (a dài mở rộng họng) và âm kết thúc /θ/. Từ 'bat' mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      wordA: 'pool',
      ipaA: '/pu:l/',
      meaningA: 'hồ bơi sân sau',
      wordB: 'pull',
      ipaB: '/pʊl/',
      meaningB: 'kéo cửa',
      targetAudioWord: 'pool',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'pool' có âm /u:/ (u dài chu tròn môi, ngân dài). Từ 'pull' có âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 4,
      wordA: 'dad',
      ipaA: '/dæd/',
      meaningA: 'bố',
      wordB: 'dead',
      ipaB: '/ded/',
      meaningB: 'chết/hỏng hóc',
      targetAudioWord: 'dad',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'dad' có âm /æ/ (a bẹt hạ cằm mở to miệng). Từ 'dead' có âm /e/ (e ngắn miệng tự nhiên)."
    },
    {
      id: 5,
      wordA: 'son',
      ipaA: '/sʌn/',
      meaningA: 'con trai',
      wordB: 'sun',
      ipaB: '/sʌn/',
      meaningB: 'mặt trời',
      targetAudioWord: 'son',
      correctChoice: 'A',
      explanation: "Cả hai từ 'son' và 'sun' là từ đồng âm (homophones), đều phát âm chuẩn xác là /sʌn/ với nguyên âm /ʌ/ (á ngắn)!"
    },
    {
      id: 6,
      wordA: 'hall',
      ipaA: '/hɔ:l/',
      meaningA: 'hành lang/đại sảnh',
      wordB: 'hole',
      ipaB: '/həʊl/',
      meaningB: 'cái hố',
      targetAudioWord: 'hall',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'hall' có nguyên âm đơn /ɔ:/ (o dài tròn miệng). 'hole' là nguyên âm đôi /əʊ/."
    },
    {
      id: 7,
      wordA: 'rug',
      ipaA: '/rʌg/',
      meaningA: 'tấm thảm sàn',
      wordB: 'rag',
      ipaB: '/ræg/',
      meaningB: 'giẻ lau',
      targetAudioWord: 'rug',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'rug' chứa âm /ʌ/ (á ngắn dứt khoát). Từ 'rag' chứa âm /æ/ (a bẹt mở rộng miệng)."
    },
    {
      id: 8,
      wordA: 'clean',
      ipaA: '/kli:n/',
      meaningA: 'lau dọn nhà sạch sẽ',
      wordB: 'clown',
      ipaB: '/klaʊn/',
      meaningB: 'chú hề',
      targetAudioWord: 'clean',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'clean' chứa nguyên âm /i:/ (i dài mỉm cười). Từ 'clown' chứa nguyên âm đôi /aʊ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'lock', ipa: '/lɒk/', meaning: 'ổ khóa cửa', symbol: '/ɒ/' },
    { id: 'B', word: 'curtain', ipa: "/'kɜ:tn/", meaning: 'rèm cửa', symbol: '/ɜ:/' },
    { id: 'C', word: 'key', ipa: '/ki:/', meaning: 'chìa khóa nhà', symbol: '/i:/' },
    { id: 'D', word: 'brother', ipa: "/'brʌðə/", meaning: 'anh em trai', symbol: '/ʌ/' },
    { id: 'E', word: 'cook', ipa: '/kʊk/', meaning: 'nấu nướng', symbol: '/ʊ/' },
    { id: 'F', word: 'lawn', ipa: '/lɔ:n/', meaning: 'bãi cỏ trước nhà', symbol: '/ɔ:/' },
    { id: 'G', word: 'sister', ipa: "/'sɪstə/", meaning: 'chị em gái', symbol: '/ɪ/' },
    { id: 'H', word: 'sofa', ipa: "/'səʊfə/", meaning: 'ghế sofa (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'room', ipa: '/ru:m/', meaning: 'căn phòng', symbol: '/u:/' },
    { id: 'J', word: 'lamp', ipa: '/læmp/', meaning: 'đèn để bàn', symbol: '/æ/' },
    { id: 'K', word: 'bed', ipa: '/bed/', meaning: 'chiếc giường êm', symbol: '/e/' },
    { id: 'L', word: 'father', ipa: "/'fɑ:ðə/", meaning: 'người cha', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'key', explanation: "Âm /i:/ (i dài) có trong từ 'key' /ki:/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'sister', explanation: "Âm /ɪ/ (i ngắn) có trong âm đầu của 'sister' /'sɪstə/" },
    { symbol: '/e/', targetWordId: 'K', word: 'bed', explanation: "Âm /e/ (e ngắn) có trong từ 'bed' /bed/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'lamp', explanation: "Âm /æ/ (a bẹt) có trong từ 'lamp' /læmp/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'brother', explanation: "Âm /ʌ/ (á ngắn) có trong âm đầu của 'brother' /'brʌðə/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'father', explanation: "Âm /ɑ:/ (a dài) có trong âm đầu của 'father' /'fɑ:ðə/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'lock', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'lock' /lɒk/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'lawn', explanation: "Âm /ɔ:/ (o dài) có trong từ 'lawn' /lɔ:n/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'cook', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'cook' /kʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'room', explanation: "Âm /u:/ (u dài) có trong từ 'room' /ru:m/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'curtain', explanation: "Âm /ɜ:/ (ơ dài) có trong âm đầu của 'curtain' /'kɜ:tn/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'sofa', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'sofa' /'səʊfə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ tổ ấm vào 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các từ về đồ dùng và hoạt động trong nhà vào đúng ngôi nhà ngữ âm tương ứng.',
    allWords: [
      { word: 'sleep', ipa: '/sli:p/', targetSymbol: '/i:/', meaning: 'ngủ say' },
      { word: 'lamp', ipa: '/læmp/', targetSymbol: '/æ/', meaning: 'đèn bàn' },
      { word: 'dish', ipa: '/dɪʃ/', targetSymbol: '/ɪ/', meaning: 'cái đĩa' },
      { word: 'bed', ipa: '/bed/', targetSymbol: '/e/', meaning: 'cái giường' },
      { word: 'clean', ipa: '/kli:n/', targetSymbol: '/i:/', meaning: 'lau sạch' },
      { word: 'mat', ipa: '/mæt/', targetSymbol: '/æ/', meaning: 'thảm chân' },
      { word: 'sink', ipa: '/sɪŋk/', targetSymbol: '/ɪ/', meaning: 'bồn rửa' },
      { word: 'shelf', ipa: '/ʃelf/', targetSymbol: '/e/', meaning: 'kệ sách' },
      { word: 'sheet', ipa: '/ʃi:t/', targetSymbol: '/i:/', meaning: 'ga trải giường' },
      { word: 'dad', ipa: '/dæd/', targetSymbol: '/æ/', meaning: 'người bố' },
      { word: 'lid', ipa: '/lɪd/', targetSymbol: '/ɪ/', meaning: 'nắp nồi' },
      { word: 'step', ipa: '/step/', targetSymbol: '/e/', meaning: 'bậc cầu thang' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['sleep', 'clean', 'sheet'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['dish', 'sink', 'lid'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bed', 'shelf', 'step'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['lamp', 'mat', 'dad'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ gia đình vào 4 ngôi nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Kéo thả 12 từ vào 4 ngôi nhà âm thanh /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'pot', ipa: '/pɒt/', targetSymbol: '/ɒ/', meaning: 'cái nồi' },
      { word: 'door', ipa: '/dɔ:/', targetSymbol: '/ɔ:/', meaning: 'cửa nhà' },
      { word: 'wood', ipa: '/wʊd/', targetSymbol: '/ʊ/', meaning: 'bàn gỗ' },
      { word: 'room', ipa: '/ru:m/', targetSymbol: '/u:/', meaning: 'phòng ngủ' },
      { word: 'lock', ipa: '/lɒk/', targetSymbol: '/ɒ/', meaning: 'ổ khóa' },
      { word: 'wall', ipa: '/wɔ:l/', targetSymbol: '/ɔ:/', meaning: 'bức tường' },
      { word: 'cook', ipa: '/kʊk/', targetSymbol: '/ʊ/', meaning: 'nấu ăn' },
      { word: 'roof', ipa: '/ru:f/', targetSymbol: '/u:/', meaning: 'mái nhà' },
      { word: 'mop', ipa: '/mɒp/', targetSymbol: '/ɒ/', meaning: 'cây lau nhà' },
      { word: 'floor', ipa: '/flɔ:/', targetSymbol: '/ɔ:/', meaning: 'sàn nhà' },
      { word: 'wool', ipa: '/wʊl/', targetSymbol: '/ʊ/', meaning: 'áo len ấm' },
      { word: 'spoon', ipa: '/spu:n/', targetSymbol: '/u:/', meaning: 'chiếc muỗng' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['pot', 'lock', 'mop'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['door', 'wall', 'floor'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['wood', 'cook', 'wool'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['room', 'roof', 'spoon'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'sleep',
      templateIpa: '/sl_p/',
      meaning: 'giấc ngủ say',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/sli:p/',
      explanation: "Từ 'sleep' có âm /i:/ (i dài ngân dài cười tươi), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'cook',
      templateIpa: '/k_k/',
      meaning: 'nấu bữa tối',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/kʊk/',
      explanation: "Từ 'cook' có âm /ʊ/ (u ngắn dứt khoát), nên ký hiệu đúng là ʊ."
    },
    {
      id: 3,
      word: 'lamp',
      templateIpa: '/l_mp/',
      meaning: 'đèn đầu giường',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/læmp/',
      explanation: "Từ 'lamp' mang âm /æ/ (a bẹt mở rộng hàm), nên chọn æ."
    },
    {
      id: 4,
      word: 'wall',
      templateIpa: '/w_l/',
      meaning: 'bức tường phòng',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/wɔ:l/',
      explanation: "Từ 'wall' mang âm /ɔ:/ (o dài chu tròn môi), nên ký hiệu đúng là ɔ:."
    },
    {
      id: 5,
      word: 'room',
      templateIpa: '/r_m/',
      meaning: 'phòng khách',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/ru:m/',
      explanation: "Từ 'room' mang âm /u:/ (u dài có dấu hai chấm), nên chọn u:."
    },
    {
      id: 6,
      word: 'bath',
      templateIpa: '/b_θ/',
      meaning: 'bồn tắm nước nóng',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/bɑ:θ/',
      explanation: "Từ 'bath' có âm /ɑ:/ (a dài mở sâu vòm họng), nên điền ɑ:."
    },
    {
      id: 7,
      word: 'dish',
      templateIpa: '/d_ʃ/',
      meaning: 'cái đĩa ăn cơm',
      choiceA: 'ɪ',
      choiceB: 'i:',
      correctChoice: 'A',
      fullIpa: '/dɪʃ/',
      explanation: "Từ 'dish' có âm /ɪ/ (i ngắn dứt khoát), nên điền ɪ."
    },
    {
      id: 8,
      word: 'sofa',
      templateIpa: "/'səʊf_/",
      meaning: 'ghế sofa êm ái',
      choiceA: 'ə',
      choiceB: 'ɜ:',
      correctChoice: 'A',
      fullIpa: "/'səʊfə/",
      explanation: "Âm cuối từ 'sofa' là âm schwa nhẹ /ə/, nên chọn ə."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'sleep', ipa: '/sli:p/', vowelSound: '/i:/', meaning: 'ngủ say' },
        { letter: 'B', word: 'dish', ipa: '/dɪʃ/', vowelSound: '/ɪ/', meaning: 'cái đĩa' },
        { letter: 'C', word: 'sink', ipa: '/sɪŋk/', vowelSound: '/ɪ/', meaning: 'bồn rửa' },
        { letter: 'D', word: 'lid', ipa: '/lɪd/', vowelSound: '/ɪ/', meaning: 'nắp vung' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'sleep' mang âm /i:/ (i dài). Ba từ còn lại dish, sink, lid đều mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'room', ipa: '/ru:m/', vowelSound: '/u:/', meaning: 'căn phòng' },
        { letter: 'B', word: 'roof', ipa: '/ru:f/', vowelSound: '/u:/', meaning: 'mái nhà' },
        { letter: 'C', word: 'spoon', ipa: '/spu:n/', vowelSound: '/u:/', meaning: 'cái thìa' },
        { letter: 'D', word: 'cook', ipa: '/kʊk/', vowelSound: '/ʊ/', meaning: 'nấu ăn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cook' mang âm /ʊ/ (u ngắn). Ba từ room, roof, spoon đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'bath', ipa: '/bɑ:θ/', vowelSound: '/ɑ:/', meaning: 'bồn tắm' },
        { letter: 'B', word: 'yard', ipa: '/jɑ:d/', vowelSound: '/ɑ:/', meaning: 'sân nhà' },
        { letter: 'C', word: 'lamp', ipa: '/læmp/', vowelSound: '/æ/', meaning: 'đèn bàn' },
        { letter: 'D', word: 'father', ipa: "/'fɑ:ðə/", vowelSound: '/ɑ:/', meaning: 'người cha' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'lamp' mang âm /æ/ (a bẹt). Ba từ bath, yard, father đều mang âm /ɑ:/ (a dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'pot', ipa: '/pɒt/', vowelSound: '/ɒ/', meaning: 'cái nồi' },
        { letter: 'B', word: 'door', ipa: '/dɔ:/', vowelSound: '/ɔ:/', meaning: 'cửa ra vào' },
        { letter: 'C', word: 'wall', ipa: '/wɔ:l/', vowelSound: '/ɔ:/', meaning: 'bức tường' },
        { letter: 'D', word: 'floor', ipa: '/flɔ:/', vowelSound: '/ɔ:/', meaning: 'sàn nhà' }
      ],
      correctChoice: 'A',
      explanation: "Đáp án đúng là A: 'pot' mang âm /ɒ/ (o ngắn). Ba từ door, wall, floor đều mang âm /ɔ:/ (o dài tròn miệng)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'son', ipa: '/sʌn/', vowelSound: '/ʌ/', meaning: 'con trai' },
        { letter: 'B', word: 'mum', ipa: '/mʌm/', vowelSound: '/ʌ/', meaning: 'mẹ' },
        { letter: 'C', word: 'dad', ipa: '/dæd/', vowelSound: '/æ/', meaning: 'bố' },
        { letter: 'D', word: 'rug', ipa: '/rʌg/', vowelSound: '/ʌ/', meaning: 'tấm thảm' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'dad' mang âm /æ/ (a bẹt). Các từ son, mum, rug đều mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'bed', ipa: '/bed/', vowelSound: '/e/', meaning: 'cái giường' },
        { letter: 'B', word: 'shelf', ipa: '/ʃelf/', vowelSound: '/e/', meaning: 'kệ sách' },
        { letter: 'C', word: 'step', ipa: '/step/', vowelSound: '/e/', meaning: 'bậc thang' },
        { letter: 'D', word: 'curtain', ipa: "/'kɜ:tn/", vowelSound: '/ɜ:/', meaning: 'rèm cửa' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'curtain' mang âm /ɜ:/ (ơ dài). Ba từ bed, shelf, step đều mang âm /e/ (e ngắn)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'sleep',
      wordMeaning: 'ngủ một giấc say',
      fullIpa: '/sli:p/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'sleep' phát âm là /sli:p/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'cook',
      wordMeaning: 'nấu nướng trong bếp',
      fullIpa: '/kʊk/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'cook' phát âm là /kʊk/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'lamp',
      wordMeaning: 'đèn học để bàn',
      fullIpa: '/læmp/',
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'lamp' phát âm là /læmp/ mang nguyên âm /æ/ (a bẹt mở rộng cằm)."
    },
    {
      id: 4,
      spokenWord: 'wall',
      wordMeaning: 'bức tường vững chãi',
      fullIpa: '/wɔ:l/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ɑ:/',
      correctChoice: 'A',
      explanation: "Từ 'wall' phát âm là /wɔ:l/ mang nguyên âm /ɔ:/ (o dài chu môi rõ rệt)."
    },
    {
      id: 5,
      spokenWord: 'room',
      wordMeaning: 'căn phòng sinh hoạt',
      fullIpa: '/ru:m/',
      targetSymbol: '/u:/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɜ:/',
      correctChoice: 'B',
      explanation: "Từ 'room' phát âm là /ru:m/ mang nguyên âm /u:/ (u dài có dấu hai chấm :)."
    },
    {
      id: 6,
      spokenWord: 'pot',
      wordMeaning: 'cái nồi nấu canh',
      fullIpa: '/pɒt/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'pot' phát âm là /pɒt/ mang nguyên âm /ɒ/ (o ngắn tròn miệng nhẹ)."
    },
    {
      id: 7,
      spokenWord: 'son',
      wordMeaning: 'cậu con trai',
      fullIpa: '/sʌn/',
      targetSymbol: '/ʌ/',
      choiceA: '/æ/',
      choiceB: '/ʌ/',
      choiceC: '/ɑ:/',
      correctChoice: 'B',
      explanation: "Từ 'son' phát âm là /sʌn/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'bath',
      wordMeaning: 'tắm bồn thư giãn',
      fullIpa: '/bɑ:θ/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/æ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'bath' phát âm là /bɑ:θ/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    }
  ]
};
