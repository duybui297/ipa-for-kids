import { PracticeExamSet } from './types';

export const SET_11: PracticeExamSet = {
  id: 11,
  title: 'Bộ Đề 11: Đại Dương & Biển Xanh',
  subtitle: 'Luyện âm cùng sóng biển vỗ, đàn cá bơi, vỏ sò và bãi cát',
  badge: 'Cơ bản',
  topic: 'Ocean & Marine',
  icon: '🐬',
  description: 'Thám hiểm đáy đại dương kỳ thú và bãi biển mùa hè với các âm: seal /i:/ vs sill /ɪ/, shark /ɑ:/ vs shock /ɒ/, crab /æ/ vs crib /ɪ/, surf /ɜ:/ vs safe /eɪ/, dock /ɒ/ vs duck /ʌ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'seal',
      ipaA: '/si:l/',
      meaningA: 'chú hải cẩu dễ thương',
      wordB: 'sill',
      ipaB: '/sɪl/',
      meaningB: 'bệ cửa sổ',
      targetAudioWord: 'seal',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'seal' mang âm /i:/ (i dài mỉm cười). 'sill' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'shark',
      ipaA: '/ʃɑ:k/',
      meaningA: 'cá mập đại dương',
      wordB: 'shock',
      ipaB: '/ʃɒk/',
      meaningB: 'ngỡ ngàng/choáng',
      targetAudioWord: 'shark',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'shark' mang âm /ɑ:/ (a dài mở rộng họng). 'shock' mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 3,
      wordA: 'crab',
      ipaA: '/kræb/',
      meaningA: 'chú cua biển bò ngang',
      wordB: 'crib',
      ipaB: '/krɪb/',
      meaningB: 'chiếc nôi em bé',
      targetAudioWord: 'crab',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'crab' mang âm /æ/ (a bẹt hạ cằm sâu). 'crib' mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 4,
      wordA: 'dock',
      ipaA: '/dɒk/',
      meaningA: 'bến tàu cập cảng',
      wordB: 'duck',
      ipaB: '/dʌk/',
      meaningB: 'con vịt biển',
      targetAudioWord: 'dock',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'dock' mang âm /ɒ/ (o ngắn). 'duck' mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 5,
      wordA: 'surf',
      ipaA: '/sɜ:f/',
      meaningA: 'lướt ván đầu sóng',
      wordB: 'safe',
      ipaB: '/seɪf/',
      meaningB: 'an toàn',
      targetAudioWord: 'surf',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'surf' mang nguyên âm đơn /ɜ:/ (ơ dài cong lưỡi). 'safe' là nguyên âm đôi /eɪ/."
    },
    {
      id: 6,
      wordA: 'deep',
      ipaA: '/di:p/',
      meaningA: 'vực biển sâu thẳm',
      wordB: 'dip',
      ipaB: '/dɪp/',
      meaningB: 'nhúng chân vào nước',
      targetAudioWord: 'deep',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'deep' mang âm /i:/ (i dài mỉm cười). 'dip' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 7,
      wordA: 'shore',
      ipaA: '/ʃɔ:/',
      meaningA: 'bờ biển cát vàng',
      wordB: 'show',
      ipaB: '/ʃəʊ/',
      meaningB: 'buổi biểu diễn',
      targetAudioWord: 'shore',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'shore' mang nguyên âm đơn /ɔ:/ (o dài chu môi). 'show' là nguyên âm đôi /əʊ/."
    },
    {
      id: 8,
      wordA: 'wave',
      ipaA: '/weɪv/',
      meaningA: 'con sóng biển',
      wordB: 'wet',
      ipaB: '/wet/',
      meaningB: 'ướt sũng nước',
      targetAudioWord: 'wet',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'wet' mang nguyên âm đơn /e/ (e ngắn dứt khoát). 'wave' mang nguyên âm đôi /eɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'dock', ipa: '/dɒk/', meaning: 'bến tàu đón sóng', symbol: '/ɒ/' },
    { id: 'B', word: 'surf', ipa: '/sɜ:f/', meaning: 'lướt sóng biển', symbol: '/ɜ:/' },
    { id: 'C', word: 'beach', ipa: '/bi:tʃ/', meaning: 'bãi biển đẹp', symbol: '/i:/' },
    { id: 'D', word: 'sun', ipa: '/sʌn/', meaning: 'mặt trời trên biển', symbol: '/ʌ/' },
    { id: 'E', word: 'brook', ipa: '/brʊk/', meaning: 'lạch nước biển', symbol: '/ʊ/' },
    { id: 'F', word: 'storm', ipa: '/stɔ:m/', meaning: 'cơn bão biển', symbol: '/ɔ:/' },
    { id: 'G', word: 'fish', ipa: '/fɪʃ/', meaning: 'đàn cá bơi lội', symbol: '/ɪ/' },
    { id: 'H', word: 'otter', ipa: "/'ɒtə/", meaning: 'rái cá biển (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'pool', ipa: '/pu:l/', meaning: 'vũng nước thủy triều', symbol: '/u:/' },
    { id: 'J', word: 'crab', ipa: '/kræb/', meaning: 'chú cua nhỏ', symbol: '/æ/' },
    { id: 'K', word: 'shell', ipa: '/ʃel/', meaning: 'vỏ sò óng ánh', symbol: '/e/' },
    { id: 'L', word: 'shark', ipa: '/ʃɑ:k/', meaning: 'cá mập', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'beach', explanation: "Âm /i:/ (i dài) có trong từ 'beach' /bi:tʃ/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'fish', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'fish' /fɪʃ/" },
    { symbol: '/e/', targetWordId: 'K', word: 'shell', explanation: "Âm /e/ (e ngắn) có trong từ 'shell' /ʃel/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'crab', explanation: "Âm /æ/ (a bẹt) có trong từ 'crab' /kræb/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'sun', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'sun' /sʌn/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'shark', explanation: "Âm /ɑ:/ (a dài) có trong từ 'shark' /ʃɑ:k/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'dock', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'dock' /dɒk/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'storm', explanation: "Âm /ɔ:/ (o dài) có trong từ 'storm' /stɔ:m/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'brook', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'brook' /brʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'pool', explanation: "Âm /u:/ (u dài) có trong từ 'pool' /pu:l/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'surf', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'surf' /sɜ:f/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'otter', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'otter' /'ɒtə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp sinh vật biển vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các loài vật biển và phong cảnh vào đúng 4 ngôi nhà /i:/, /ɪ/, /e/, /æ/.',
    allWords: [
      { word: 'beach', ipa: '/bi:tʃ/', targetSymbol: '/i:/', meaning: 'bãi biển' },
      { word: 'crab', ipa: '/kræb/', targetSymbol: '/æ/', meaning: 'con cua' },
      { word: 'fish', ipa: '/fɪʃ/', targetSymbol: '/ɪ/', meaning: 'con cá' },
      { word: 'shell', ipa: '/ʃel/', targetSymbol: '/e/', meaning: 'vỏ sò' },
      { word: 'seal', ipa: '/si:l/', targetSymbol: '/i:/', meaning: 'hải cẩu' },
      { word: 'sand', ipa: '/sænd/', targetSymbol: '/æ/', meaning: 'bãi cát' },
      { word: 'ship', ipa: '/ʃɪp/', targetSymbol: '/ɪ/', meaning: 'tàu biển' },
      { word: 'net', ipa: '/net/', targetSymbol: '/e/', meaning: 'lưới đánh cá' },
      { word: 'reef', ipa: '/ri:f/', targetSymbol: '/i:/', meaning: 'rạn san hô' },
      { word: 'clam', ipa: '/klæm/', targetSymbol: '/æ/', meaning: 'con nghêu' },
      { word: 'fin', ipa: '/fɪn/', targetSymbol: '/ɪ/', meaning: 'vây cá' },
      { word: 'kelp', ipa: '/kelp/', targetSymbol: '/e/', meaning: 'tảo bẹ' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['beach', 'seal', 'reef'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['fish', 'ship', 'fin'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['shell', 'net', 'kelp'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['crab', 'sand', 'clam'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp cảnh sắc biển khơi vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ đại dương và xếp vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'dock', ipa: '/dɒk/', targetSymbol: '/ɒ/', meaning: 'bến cảng' },
      { word: 'shore', ipa: '/ʃɔ:/', targetSymbol: '/ɔ:/', meaning: 'bờ biển' },
      { word: 'brook', ipa: '/brʊk/', targetSymbol: '/ʊ/', meaning: 'dòng lạch' },
      { word: 'pool', ipa: '/pu:l/', targetSymbol: '/u:/', meaning: 'vũng nước' },
      { word: 'fog', ipa: '/fɒg/', targetSymbol: '/ɒ/', meaning: 'sương mù biển' },
      { word: 'storm', ipa: '/stɔ:m/', targetSymbol: '/ɔ:/', meaning: 'dông bão' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'dấu chân cát' },
      { word: 'blue', ipa: '/blu:/', targetSymbol: '/u:/', meaning: 'nước biển xanh' },
      { word: 'rock', ipa: '/rɒk/', targetSymbol: '/ɒ/', meaning: 'tảng đá ngầm' },
      { word: 'port', ipa: '/pɔ:t/', targetSymbol: '/ɔ:/', meaning: 'cửa biển' },
      { word: 'hook', ipa: '/hʊk/', targetSymbol: '/ʊ/', meaning: 'lưỡi câu cá' },
      { word: 'crew', ipa: '/kru:/', targetSymbol: '/u:/', meaning: 'thủy thủ đoàn' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['dock', 'fog', 'rock'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['shore', 'storm', 'port'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['brook', 'foot', 'hook'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['pool', 'blue', 'crew'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'beach',
      templateIpa: '/b_tʃ/',
      meaning: 'bãi biển trải dài',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/bi:tʃ/',
      explanation: "Từ 'beach' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'fish',
      templateIpa: '/f_ʃ/',
      meaning: 'chú cá bơi nhanh',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'B',
      fullIpa: '/fɪʃ/',
      explanation: "Từ 'fish' có âm /ɪ/ (i ngắn dứt khoát), nên chọn ɪ."
    },
    {
      id: 3,
      word: 'crab',
      templateIpa: '/kr_b/',
      meaning: 'con cua hai càng',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/kræb/',
      explanation: "Từ 'crab' có âm /æ/ (a bẹt hạ cằm sâu), nên chọn æ."
    },
    {
      id: 4,
      word: 'shark',
      templateIpa: '/ʃ_k/',
      meaning: 'chúa tể cá mập',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/ʃɑ:k/',
      explanation: "Từ 'shark' mang âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 5,
      word: 'shore',
      templateIpa: '/ʃ_/',
      meaning: 'bờ biển đón sóng',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/ʃɔ:/',
      explanation: "Từ 'shore' mang âm /ɔ:/ (o dài chu tròn môi), nên chọn ɔ:."
    },
    {
      id: 6,
      word: 'dock',
      templateIpa: '/d_k/',
      meaning: 'bến thuyền neo đậu',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/dɒk/',
      explanation: "Từ 'dock' mang âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 7,
      word: 'hook',
      templateIpa: '/h_k/',
      meaning: 'lưỡi câu kim loại',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/hʊk/',
      explanation: "Từ 'hook' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 8,
      word: 'surf',
      templateIpa: '/s_f/',
      meaning: 'lướt sóng biển',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/sɜ:f/',
      explanation: "Từ 'surf' mang âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'beach', ipa: '/bi:tʃ/', vowelSound: '/i:/', meaning: 'bãi biển' },
        { letter: 'B', word: 'seal', ipa: '/si:l/', vowelSound: '/i:/', meaning: 'hải cẩu' },
        { letter: 'C', word: 'reef', ipa: '/ri:f/', vowelSound: '/i:/', meaning: 'san hô' },
        { letter: 'D', word: 'fish', ipa: '/fɪʃ/', vowelSound: '/ɪ/', meaning: 'con cá' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'fish' mang âm /ɪ/ (i ngắn). Ba từ beach, seal, reef đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'crab', ipa: '/kræb/', vowelSound: '/æ/', meaning: 'con cua' },
        { letter: 'B', word: 'sand', ipa: '/sænd/', vowelSound: '/æ/', meaning: 'bãi cát' },
        { letter: 'C', word: 'clam', ipa: '/klæm/', vowelSound: '/æ/', meaning: 'con nghêu' },
        { letter: 'D', word: 'shell', ipa: '/ʃel/', vowelSound: '/e/', meaning: 'vỏ sò' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'shell' mang âm /e/ (e ngắn). Ba từ crab, sand, clam đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'shore', ipa: '/ʃɔ:/', vowelSound: '/ɔ:/', meaning: 'bờ biển' },
        { letter: 'B', word: 'storm', ipa: '/stɔ:m/', vowelSound: '/ɔ:/', meaning: 'dông bão' },
        { letter: 'C', word: 'port', ipa: '/pɔ:t/', vowelSound: '/ɔ:/', meaning: 'cảng biển' },
        { letter: 'D', word: 'dock', ipa: '/dɒk/', vowelSound: '/ɒ/', meaning: 'bến tàu' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'dock' mang âm /ɒ/ (o ngắn). Ba từ shore, storm, port đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'pool', ipa: '/pu:l/', vowelSound: '/u:/', meaning: 'vũng nước' },
        { letter: 'B', word: 'blue', ipa: '/blu:/', vowelSound: '/u:/', meaning: 'màu xanh' },
        { letter: 'C', word: 'crew', ipa: '/kru:/', vowelSound: '/u:/', meaning: 'thủy thủ' },
        { letter: 'D', word: 'hook', ipa: '/hʊk/', vowelSound: '/ʊ/', meaning: 'lưỡi câu' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'hook' mang âm /ʊ/ (u ngắn). Ba từ pool, blue, crew đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'shark', ipa: '/ʃɑ:k/', vowelSound: '/ɑ:/', meaning: 'cá mập' },
        { letter: 'B', word: 'calm', ipa: '/kɑ:m/', vowelSound: '/ɑ:/', meaning: 'biển lặng' },
        { letter: 'C', word: 'starfish', ipa: "/'stɑ:fɪʃ/", vowelSound: '/ɑ:/', meaning: 'sao biển' },
        { letter: 'D', word: 'gull', ipa: '/gʌl/', vowelSound: '/ʌ/', meaning: 'hải âu' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'gull' mang âm /ʌ/ (á ngắn). Ba từ shark, calm, starfish đều mang âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'surf', ipa: '/sɜ:f/', vowelSound: '/ɜ:/', meaning: 'lướt sóng' },
        { letter: 'B', word: 'turtle', ipa: "/'tɜ:tl/", vowelSound: '/ɜ:/', meaning: 'rùa biển' },
        { letter: 'C', word: 'fern', ipa: '/fɜ:n/', vowelSound: '/ɜ:/', meaning: 'dương xỉ' },
        { letter: 'D', word: 'crab', ipa: '/kræb/', vowelSound: '/æ/', meaning: 'con cua' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'crab' mang âm /æ/ (a bẹt). Ba từ surf, turtle, fern đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'beach',
      wordMeaning: 'bãi cát vàng tuyệt đẹp',
      fullIpa: '/bi:tʃ/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'beach' phát âm là /bi:tʃ/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'crab',
      wordMeaning: 'con cua biển nhanh nhẹn',
      fullIpa: '/kræb/',
      targetSymbol: '/æ/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'crab' phát âm là /kræb/ mang nguyên âm /æ/ (a bẹt hạ cằm sâu)."
    },
    {
      id: 3,
      spokenWord: 'shark',
      wordMeaning: 'chú cá mập dũng mãnh',
      fullIpa: '/ʃɑ:k/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'shark' phát âm là /ʃɑ:k/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 4,
      spokenWord: 'shore',
      wordMeaning: 'bờ biển nơi sóng vỗ',
      fullIpa: '/ʃɔ:/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'shore' phát âm là /ʃɔ:/ mang nguyên âm /ɔ:/ (o dài chu môi tròn)."
    },
    {
      id: 5,
      spokenWord: 'dock',
      wordMeaning: 'bến tàu đón khách',
      fullIpa: '/dɒk/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'dock' phát âm là /dɒk/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 6,
      spokenWord: 'surf',
      wordMeaning: 'lướt ván trên mặt biển',
      fullIpa: '/sɜ:f/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/e/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'surf' phát âm là /sɜ:f/ mang nguyên âm /ɜ:/ (ơ dài uốn cong đầu lưỡi)."
    },
    {
      id: 7,
      spokenWord: 'hook',
      wordMeaning: 'lưỡi câu cá biển',
      fullIpa: '/hʊk/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'hook' phát âm là /hʊk/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 8,
      spokenWord: 'pool',
      wordMeaning: 'vũng nước giữa rạn đá',
      fullIpa: '/pu:l/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'pool' phát âm là /pu:l/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    }
  ]
};
