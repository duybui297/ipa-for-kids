import { PracticeExamSet } from './types';

export const SET_6: PracticeExamSet = {
  id: 6,
  title: 'Bộ Đề 06: Thể Thao & Vận Động',
  subtitle: 'Luyện âm cùng các động tác chạy, nhảy, đá bóng, bơi lội & ghi bàn',
  badge: 'Cơ bản',
  topic: 'Actions & Sports',
  icon: '⚽',
  description: 'Năng động rèn luyện thể chất và ngữ âm qua các động từ chuyển động: leap /i:/ vs lip /ɪ/, shoot /u:/ vs shut /ʌ/, walk /ɔ:/ vs work /ɜ:/, catch /æ/ vs cut /ʌ/, kick /ɪ/ vs keep /i:/.',
  exercise1: [
    {
      id: 1,
      wordA: 'leap',
      ipaA: '/li:p/',
      meaningA: 'nhảy vọt qua rào',
      wordB: 'lip',
      ipaB: '/lɪp/',
      meaningB: 'đôi môi',
      targetAudioWord: 'leap',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'leap' mang âm /i:/ (i dài mỉm cười ngân dài). 'lip' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'shoot',
      ipaA: '/ʃu:t/',
      meaningA: 'sút bóng vào lưới',
      wordB: 'shut',
      ipaB: '/ʃʌt/',
      meaningB: 'đóng cửa sân',
      targetAudioWord: 'shoot',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'shoot' mang âm /u:/ (u dài chu tròn môi). 'shut' mang âm /ʌ/ (á ngắn phát ra dứt khoát)."
    },
    {
      id: 3,
      wordA: 'walk',
      ipaA: '/wɔ:k/',
      meaningA: 'đi bộ khởi động',
      wordB: 'work',
      ipaB: '/wɜ:k/',
      meaningB: 'làm việc chăm chỉ',
      targetAudioWord: 'walk',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'walk' mang âm /ɔ:/ (o dài chu môi tròn). 'work' mang âm /ɜ:/ (ơ dài cong lưỡi)."
    },
    {
      id: 4,
      wordA: 'catch',
      ipaA: '/kætʃ/',
      meaningA: 'bắt dính quả bóng',
      wordB: 'cut',
      ipaB: '/kʌt/',
      meaningB: 'cắt tỉa sân cỏ',
      targetAudioWord: 'catch',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'catch' mang âm /æ/ (a bẹt hạ cằm mở to miệng). 'cut' mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 5,
      wordA: 'kick',
      ipaA: '/kɪk/',
      meaningA: 'sút/đá bóng mạnh',
      wordB: 'keep',
      ipaB: '/ki:p/',
      meaningB: 'giữ gôn bắt bóng',
      targetAudioWord: 'kick',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'kick' mang âm /ɪ/ (i ngắn dứt khoát). 'keep' mang âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 6,
      wordA: 'run',
      ipaA: '/rʌn/',
      meaningA: 'chạy nước rút',
      wordB: 'ran',
      ipaB: '/ræn/',
      meaningB: 'đã chạy',
      targetAudioWord: 'run',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'run' mang âm /ʌ/ (á ngắn). 'ran' mang âm /æ/ (a bẹt hạ cằm sâu hơn rõ rệt)."
    },
    {
      id: 7,
      wordA: 'hit',
      ipaA: '/hɪt/',
      meaningA: 'đánh bóng chày',
      wordB: 'heat',
      ipaB: '/hi:t/',
      meaningB: 'sức nóng trận đấu',
      targetAudioWord: 'hit',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'hit' mang âm /ɪ/ (i ngắn dứt khoát). 'heat' mang âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 8,
      wordA: 'push',
      ipaA: '/pʊʃ/',
      meaningA: 'đẩy về phía trước',
      wordB: 'pool',
      ipaB: '/pu:l/',
      meaningB: 'bể bơi thi đấu',
      targetAudioWord: 'push',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'push' mang âm /ʊ/ (u ngắn dứt khoát). 'pool' mang âm /u:/ (u dài chu môi)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'jog', ipa: '/dʒɒg/', meaning: 'chạy bộ chậm', symbol: '/ɒ/' },
    { id: 'B', word: 'serve', ipa: '/sɜ:v/', meaning: 'phát bóng tennis', symbol: '/ɜ:/' },
    { id: 'C', word: 'team', ipa: '/ti:m/', meaning: 'đội thể thao', symbol: '/i:/' },
    { id: 'D', word: 'jump', ipa: '/dʒʌmp/', meaning: 'nhảy cao', symbol: '/ʌ/' },
    { id: 'E', word: 'pull', ipa: '/pʊl/', meaning: 'kéo co', symbol: '/ʊ/' },
    { id: 'F', word: 'sport', ipa: '/spɔ:t/', meaning: 'thể thao', symbol: '/ɔ:/' },
    { id: 'G', word: 'swim', ipa: '/swɪm/', meaning: 'bơi lội', symbol: '/ɪ/' },
    { id: 'H', word: 'winner', ipa: "/'wɪnə/", meaning: 'người chiến thắng (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'boot', ipa: '/bu:t/', meaning: 'giày đá bóng', symbol: '/u:/' },
    { id: 'J', word: 'catch', ipa: '/kætʃ/', meaning: 'bắt bóng', symbol: '/æ/' },
    { id: 'K', word: 'rest', ipa: '/rest/', meaning: 'nghỉ giải lao', symbol: '/e/' },
    { id: 'L', word: 'pass', ipa: '/pɑ:s/', meaning: 'chuyền bóng', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'team', explanation: "Âm /i:/ (i dài) có trong từ 'team' /ti:m/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'swim', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'swim' /swɪm/" },
    { symbol: '/e/', targetWordId: 'K', word: 'rest', explanation: "Âm /e/ (e ngắn) có trong từ 'rest' /rest/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'catch', explanation: "Âm /æ/ (a bẹt) có trong từ 'catch' /kætʃ/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'jump', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'jump' /dʒʌmp/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'pass', explanation: "Âm /ɑ:/ (a dài) có trong từ 'pass' /pɑ:s/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'jog', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'jog' /dʒɒg/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'sport', explanation: "Âm /ɔ:/ (o dài) có trong từ 'sport' /spɔ:t/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'pull', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'pull' /pʊl/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'boot', explanation: "Âm /u:/ (u dài) có trong từ 'boot' /bu:t/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'serve', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'serve' /sɜ:v/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'winner', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'winner' /'wɪnə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp hành động thể thao vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các hoạt động luyện tập vào đúng ngôi nhà ngữ âm tương ứng nhé.',
    allWords: [
      { word: 'leap', ipa: '/li:p/', targetSymbol: '/i:/', meaning: 'nhảy vọt' },
      { word: 'catch', ipa: '/kætʃ/', targetSymbol: '/æ/', meaning: 'bắt bóng' },
      { word: 'swim', ipa: '/swɪm/', targetSymbol: '/ɪ/', meaning: 'bơi sải' },
      { word: 'rest', ipa: '/rest/', targetSymbol: '/e/', meaning: 'nghỉ ngơi' },
      { word: 'keep', ipa: '/ki:p/', targetSymbol: '/i:/', meaning: 'giữ gôn' },
      { word: 'dash', ipa: '/dæʃ/', targetSymbol: '/æ/', meaning: 'lao nhanh' },
      { word: 'kick', ipa: '/kɪk/', targetSymbol: '/ɪ/', meaning: 'sút bóng' },
      { word: 'stretch', ipa: '/stretʃ/', targetSymbol: '/e/', meaning: 'giãn cơ' },
      { word: 'team', ipa: '/ti:m/', targetSymbol: '/i:/', meaning: 'đồng đội' },
      { word: 'clap', ipa: '/klæp/', targetSymbol: '/æ/', meaning: 'vỗ tay cổ vũ' },
      { word: 'skip', ipa: '/skɪp/', targetSymbol: '/ɪ/', meaning: 'nhảy dây' },
      { word: 'step', ipa: '/step/', targetSymbol: '/e/', meaning: 'bước đi' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['leap', 'keep', 'team'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['swim', 'kick', 'skip'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['rest', 'stretch', 'step'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['catch', 'dash', 'clap'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp từ vận động vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to và phân loại 12 từ vào 4 nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'jog', ipa: '/dʒɒg/', targetSymbol: '/ɒ/', meaning: 'chạy chậm' },
      { word: 'ball', ipa: '/bɔ:l/', targetSymbol: '/ɔ:/', meaning: 'quả bóng' },
      { word: 'pull', ipa: '/pʊl/', targetSymbol: '/ʊ/', meaning: 'kéo co' },
      { word: 'shoot', ipa: '/ʃu:t/', targetSymbol: '/u:/', meaning: 'sút bóng' },
      { word: 'box', ipa: '/bɒks/', targetSymbol: '/ɒ/', meaning: 'đấm bốc' },
      { word: 'score', ipa: '/skɔ:/', targetSymbol: '/ɔ:/', meaning: 'ghi điểm' },
      { word: 'push', ipa: '/pʊʃ/', targetSymbol: '/ʊ/', meaning: 'chống đẩy' },
      { word: 'move', ipa: '/mu:v/', targetSymbol: '/u:/', meaning: 'di chuyển' },
      { word: 'stop', ipa: '/stɒp/', targetSymbol: '/ɒ/', meaning: 'dừng lại' },
      { word: 'court', ipa: '/kɔ:t/', targetSymbol: '/ɔ:/', meaning: 'sân đấu' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'chân sút' },
      { word: 'boot', ipa: '/bu:t/', targetSymbol: '/u:/', meaning: 'giày thể thao' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['jog', 'box', 'stop'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['ball', 'score', 'court'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['pull', 'push', 'foot'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['shoot', 'move', 'boot'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'kick',
      templateIpa: '/k_k/',
      meaning: 'sút quả bóng',
      choiceA: 'ɪ',
      choiceB: 'i:',
      correctChoice: 'A',
      fullIpa: '/kɪk/',
      explanation: "Từ 'kick' có âm /ɪ/ (i ngắn dứt khoát), nên ký hiệu còn thiếu là ɪ."
    },
    {
      id: 2,
      word: 'leap',
      templateIpa: '/l_p/',
      meaning: 'bước nhảy xa',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/li:p/',
      explanation: "Từ 'leap' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 3,
      word: 'catch',
      templateIpa: '/k_tʃ/',
      meaning: 'bắt quả bóng',
      choiceA: 'e',
      choiceB: 'æ',
      correctChoice: 'B',
      fullIpa: '/kætʃ/',
      explanation: "Từ 'catch' mang âm /æ/ (a bẹt hạ cằm sâu), nên chọn æ."
    },
    {
      id: 4,
      word: 'jump',
      templateIpa: '/dʒ_mp/',
      meaning: 'bật nhảy cao',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/dʒʌmp/',
      explanation: "Từ 'jump' mang âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 5,
      word: 'shoot',
      templateIpa: '/ʃ_t/',
      meaning: 'sút vào khung thành',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/ʃu:t/',
      explanation: "Từ 'shoot' mang âm /u:/ (u dài chu tròn môi), nên ký hiệu là u:."
    },
    {
      id: 6,
      word: 'pull',
      templateIpa: '/p_l/',
      meaning: 'kéo căng dây thừng',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/pʊl/',
      explanation: "Từ 'pull' mang âm /ʊ/ (u ngắn dứt khoát), nên ký hiệu là ʊ."
    },
    {
      id: 7,
      word: 'court',
      templateIpa: '/k_t/',
      meaning: 'sân bóng rổ',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/kɔ:t/',
      explanation: "Từ 'court' mang âm /ɔ:/ (o dài chu môi), nên chọn ɔ:."
    },
    {
      id: 8,
      word: 'jog',
      templateIpa: '/dʒ_g/',
      meaning: 'chạy bộ thư giãn',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/dʒɒg/',
      explanation: "Từ 'jog' mang âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'team', ipa: '/ti:m/', vowelSound: '/i:/', meaning: 'đội nhóm' },
        { letter: 'B', word: 'leap', ipa: '/li:p/', vowelSound: '/i:/', meaning: 'nhảy xa' },
        { letter: 'C', word: 'keep', ipa: '/ki:p/', vowelSound: '/i:/', meaning: 'giữ gôn' },
        { letter: 'D', word: 'kick', ipa: '/kɪk/', vowelSound: '/ɪ/', meaning: 'sút bóng' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'kick' mang âm /ɪ/ (i ngắn). Ba từ team, leap, keep đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'catch', ipa: '/kætʃ/', vowelSound: '/æ/', meaning: 'bắt bóng' },
        { letter: 'B', word: 'clap', ipa: '/klæp/', vowelSound: '/æ/', meaning: 'vỗ tay' },
        { letter: 'C', word: 'dash', ipa: '/dæʃ/', vowelSound: '/æ/', meaning: 'lao nhanh' },
        { letter: 'D', word: 'rest', ipa: '/rest/', vowelSound: '/e/', meaning: 'nghỉ ngơi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'rest' mang âm /e/ (e ngắn). Ba từ catch, clap, dash đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'ball', ipa: '/bɔ:l/', vowelSound: '/ɔ:/', meaning: 'quả bóng' },
        { letter: 'B', word: 'score', ipa: '/skɔ:/', vowelSound: '/ɔ:/', meaning: 'ghi bàn' },
        { letter: 'C', word: 'jog', ipa: '/dʒɒg/', vowelSound: '/ɒ/', meaning: 'chạy bộ' },
        { letter: 'D', word: 'court', ipa: '/kɔ:t/', vowelSound: '/ɔ:/', meaning: 'sân đấu' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'jog' mang âm /ɒ/ (o ngắn). Ba từ ball, score, court đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'shoot', ipa: '/ʃu:t/', vowelSound: '/u:/', meaning: 'sút bóng' },
        { letter: 'B', word: 'boot', ipa: '/bu:t/', vowelSound: '/u:/', meaning: 'giày đá' },
        { letter: 'C', word: 'move', ipa: '/mu:v/', vowelSound: '/u:/', meaning: 'di chuyển' },
        { letter: 'D', word: 'pull', ipa: '/pʊl/', vowelSound: '/ʊ/', meaning: 'kéo co' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'pull' mang âm /ʊ/ (u ngắn). Ba từ shoot, boot, move đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'jump', ipa: '/dʒʌmp/', vowelSound: '/ʌ/', meaning: 'nhảy lên' },
        { letter: 'B', word: 'run', ipa: '/rʌn/', vowelSound: '/ʌ/', meaning: 'chạy đua' },
        { letter: 'C', word: 'pass', ipa: '/pɑ:s/', vowelSound: '/ɑ:/', meaning: 'chuyền banh' },
        { letter: 'D', word: 'cup', ipa: '/kʌp/', vowelSound: '/ʌ/', meaning: 'chiếc cúp' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'pass' mang âm /ɑ:/ (a dài). Ba từ jump, run, cup đều mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'serve', ipa: '/sɜ:v/', vowelSound: '/ɜ:/', meaning: 'phát bóng' },
        { letter: 'B', word: 'turn', ipa: '/tɜ:n/', vowelSound: '/ɜ:/', meaning: 'quay người' },
        { letter: 'C', word: 'swim', ipa: '/swɪm/', vowelSound: '/ɪ/', meaning: 'bơi lội' },
        { letter: 'D', word: 'first', ipa: '/fɜ:st/', vowelSound: '/ɜ:/', meaning: 'về nhất' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'swim' mang âm /ɪ/ (i ngắn). Ba từ serve, turn, first đều mang âm /ɜ:/ (ơ dài uốn lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'kick',
      wordMeaning: 'sút cú sút sấm sét',
      fullIpa: '/kɪk/',
      targetSymbol: '/ɪ/',
      choiceA: '/ɪ/',
      choiceB: '/i:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'kick' phát âm là /kɪk/ mang nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      spokenWord: 'shoot',
      wordMeaning: 'sút tung lưới đối phương',
      fullIpa: '/ʃu:t/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'shoot' phát âm là /ʃu:t/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 3,
      spokenWord: 'ball',
      wordMeaning: 'quả bóng thi đấu',
      fullIpa: '/bɔ:l/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'ball' phát âm là /bɔ:l/ mang nguyên âm /ɔ:/ (o dài chu môi tròn)."
    },
    {
      id: 4,
      spokenWord: 'catch',
      wordMeaning: 'chộp bắt trái bóng',
      fullIpa: '/kætʃ/',
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ɑ:/',
      correctChoice: 'B',
      explanation: "Từ 'catch' phát âm là /kætʃ/ mang nguyên âm /æ/ (a bẹt hạ cằm mở rộng)."
    },
    {
      id: 5,
      spokenWord: 'jump',
      wordMeaning: 'bật nhảy cao chạm xà',
      fullIpa: '/dʒʌmp/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'jump' phát âm là /dʒʌmp/ mang nguyên âm /ʌ/ (á ngắn phát ra dứt khoát)."
    },
    {
      id: 6,
      spokenWord: 'pull',
      wordMeaning: 'kéo co thật khỏe',
      fullIpa: '/pʊl/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'pull' phát âm là /pʊl/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'team',
      wordMeaning: 'đội hình chiến thắng',
      fullIpa: '/ti:m/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'team' phát âm là /ti:m/ mang nguyên âm /i:/ (i dài mỉm cười kéo dài)."
    },
    {
      id: 8,
      spokenWord: 'jog',
      wordMeaning: 'chạy bộ buổi sáng',
      fullIpa: '/dʒɒg/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'jog' phát âm là /dʒɒg/ mang nguyên âm /ɒ/ (o ngắn mở miệng vừa phải)."
    }
  ]
};
