import { PracticeExamSet } from './types';

export const SET_8: PracticeExamSet = {
  id: 8,
  title: 'Bộ Đề 08: Cơ Thể & Cảm Xúc',
  subtitle: 'Luyện âm qua các bộ phận cơ thể và biểu cảm vui, buồn, khoẻ khoắn',
  badge: 'Cơ bản',
  topic: 'Body & Feelings',
  icon: '🫀',
  description: 'Khám phá cơ thể bé yêu và các cung bậc cảm xúc với các âm: cheek /i:/ vs chick /ɪ/, arm /ɑ:/ vs aim /eɪ/, lip /ɪ/ vs lap /æ/, foot /ʊ/ vs fit /ɪ/, heart /ɑ:/ vs hurt /ɜ:/.',
  exercise1: [
    {
      id: 1,
      wordA: 'cheek',
      ipaA: '/tʃi:k/',
      meaningA: 'gò má hồng hào',
      wordB: 'chick',
      ipaB: '/tʃɪk/',
      meaningB: 'chú gà con',
      targetAudioWord: 'cheek',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cheek' mang âm /i:/ (i dài mỉm cười). 'chick' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'lip',
      ipaA: '/lɪp/',
      meaningA: 'bờ môi xinh',
      wordB: 'lap',
      ipaB: '/læp/',
      meaningB: 'vạt áo/vòng đua',
      targetAudioWord: 'lip',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'lip' mang âm /ɪ/ (i ngắn). 'lap' mang âm /æ/ (a bẹt hạ cằm sâu)."
    },
    {
      id: 3,
      wordA: 'heart',
      ipaA: '/hɑ:t/',
      meaningA: 'trái tim yêu thương',
      wordB: 'hurt',
      ipaB: '/hɜ:t/',
      meaningB: 'đau nhức',
      targetAudioWord: 'heart',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'heart' mang âm /ɑ:/ (a dài mở rộng họng). 'hurt' mang âm /ɜ:/ (ơ dài uốn lưỡi)."
    },
    {
      id: 4,
      wordA: 'foot',
      ipaA: '/fʊt/',
      meaningA: 'bàn chân bước đi',
      wordB: 'fit',
      ipaB: '/fɪt/',
      meaningB: 'vừa vặn/khỏe khoắn',
      targetAudioWord: 'foot',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'foot' mang âm /ʊ/ (u ngắn dứt khoát). 'fit' mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 5,
      wordA: 'arm',
      ipaA: '/ɑ:m/',
      meaningA: 'cánh tay khỏe mạnh',
      wordB: 'aim',
      ipaB: '/eɪm/',
      meaningB: 'mục tiêu hướng tới',
      targetAudioWord: 'arm',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'arm' mang nguyên âm đơn /ɑ:/ (a dài ngân dài). 'aim' là nguyên âm đôi /eɪ/."
    },
    {
      id: 6,
      wordA: 'sad',
      ipaA: '/sæd/',
      meaningA: 'buồn bã',
      wordB: 'said',
      ipaB: '/sed/',
      meaningB: 'đã nói',
      targetAudioWord: 'sad',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sad' mang âm /æ/ (a bẹt mở to miệng). 'said' mang âm /e/ (e ngắn)."
    },
    {
      id: 7,
      wordA: 'glad',
      ipaA: '/glæd/',
      meaningA: 'vui mừng hân hoan',
      wordB: 'gold',
      ipaB: '/gəʊld/',
      meaningB: 'vàng óng',
      targetAudioWord: 'glad',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'glad' mang nguyên âm /æ/ (a bẹt). 'gold' mang nguyên âm đôi /əʊ/."
    },
    {
      id: 8,
      wordA: 'tooth',
      ipaA: '/tu:θ/',
      meaningA: 'chiếc răng trắng',
      wordB: 'teeth',
      ipaB: '/ti:θ/',
      meaningB: 'những chiếc răng',
      targetAudioWord: 'tooth',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'tooth' mang âm /u:/ (u dài chu tròn môi). 'teeth' mang âm /i:/ (i dài mỉm cười)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'cough', ipa: '/kɒf/', meaning: 'tiếng ho nhẹ', symbol: '/ɒ/' },
    { id: 'B', word: 'hurt', ipa: '/hɜ:t/', meaning: 'cảm thấy đau', symbol: '/ɜ:/' },
    { id: 'C', word: 'knee', ipa: '/ni:/', meaning: 'đầu gối', symbol: '/i:/' },
    { id: 'D', word: 'blood', ipa: '/blʌd/', meaning: 'dòng máu đỏ', symbol: '/ʌ/' },
    { id: 'E', word: 'foot', ipa: '/fʊt/', meaning: 'bàn chân', symbol: '/ʊ/' },
    { id: 'F', word: 'jaw', ipa: '/dʒɔ:/', meaning: 'quai hàm', symbol: '/ɔ:/' },
    { id: 'G', word: 'chin', ipa: '/tʃɪn/', meaning: 'cằm dưới', symbol: '/ɪ/' },
    { id: 'H', word: 'shoulder', ipa: "/'ʃəʊldə/", meaning: 'bờ vai (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'tooth', ipa: '/tu:θ/', meaning: 'chiếc răng', symbol: '/u:/' },
    { id: 'J', word: 'hand', ipa: '/hænd/', meaning: 'bàn tay khéo léo', symbol: '/æ/' },
    { id: 'K', word: 'neck', ipa: '/nek/', meaning: 'cổ họng/cổ', symbol: '/e/' },
    { id: 'L', word: 'arm', ipa: '/ɑ:m/', meaning: 'cánh tay', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'knee', explanation: "Âm /i:/ (i dài) có trong từ 'knee' /ni:/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'chin', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'chin' /tʃɪn/" },
    { symbol: '/e/', targetWordId: 'K', word: 'neck', explanation: "Âm /e/ (e ngắn) có trong từ 'neck' /nek/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'hand', explanation: "Âm /æ/ (a bẹt) có trong từ 'hand' /hænd/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'blood', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'blood' /blʌd/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'arm', explanation: "Âm /ɑ:/ (a dài) có trong từ 'arm' /ɑ:m/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'cough', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'cough' /kɒf/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'jaw', explanation: "Âm /ɔ:/ (o dài) có trong từ 'jaw' /dʒɔ:/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'foot', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'foot' /fʊt/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'tooth', explanation: "Âm /u:/ (u dài) có trong từ 'tooth' /tu:θ/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'hurt', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'hurt' /hɜ:t/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'shoulder', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'shoulder' /'ʃəʊldə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp bộ phận cơ thể vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các từ chỉ cơ thể và nét mặt vào đúng ngôi nhà ngữ âm tương ứng.',
    allWords: [
      { word: 'knee', ipa: '/ni:/', targetSymbol: '/i:/', meaning: 'đầu gối' },
      { word: 'hand', ipa: '/hænd/', targetSymbol: '/æ/', meaning: 'bàn tay' },
      { word: 'chin', ipa: '/tʃɪn/', targetSymbol: '/ɪ/', meaning: 'cái cằm' },
      { word: 'neck', ipa: '/nek/', targetSymbol: '/e/', meaning: 'cái cổ' },
      { word: 'heel', ipa: '/hi:l/', targetSymbol: '/i:/', meaning: 'gót chân' },
      { word: 'back', ipa: '/bæk/', targetSymbol: '/æ/', meaning: 'cái lưng' },
      { word: 'lip', ipa: '/lɪp/', targetSymbol: '/ɪ/', meaning: 'bờ môi' },
      { word: 'leg', ipa: '/leg/', targetSymbol: '/e/', meaning: 'cẳng chân' },
      { word: 'teeth', ipa: '/ti:θ/', targetSymbol: '/i:/', meaning: 'hàm răng' },
      { word: 'fat', ipa: '/fæt/', targetSymbol: '/æ/', meaning: 'mập mạp' },
      { word: 'rib', ipa: '/rɪb/', targetSymbol: '/ɪ/', meaning: 'xương sườn' },
      { word: 'chest', ipa: '/tʃest/', targetSymbol: '/e/', meaning: 'lồng ngực' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['knee', 'heel', 'teeth'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['chin', 'lip', 'rib'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['neck', 'leg', 'chest'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['hand', 'back', 'fat'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp cảm giác cơ thể vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ cảm giác và bộ phận, kéo thả vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'cough', ipa: '/kɒf/', targetSymbol: '/ɒ/', meaning: 'tiếng ho' },
      { word: 'jaw', ipa: '/dʒɔ:/', targetSymbol: '/ɔ:/', meaning: 'quai hàm' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'bàn chân' },
      { word: 'tooth', ipa: '/tu:θ/', targetSymbol: '/u:/', meaning: 'chiếc răng' },
      { word: 'body', ipa: "/'bɒdi/", targetSymbol: '/ɒ/', meaning: 'thân thể' },
      { word: 'yawn', ipa: '/jɔ:n/', targetSymbol: '/ɔ:/', meaning: 'ngáp ngủ' },
      { word: 'good', ipa: '/gʊd/', targetSymbol: '/ʊ/', meaning: 'khỏe khoắn' },
      { word: 'cool', ipa: '/ku:l/', targetSymbol: '/u:/', meaning: 'mát da' },
      { word: 'shock', ipa: '/ʃɒk/', targetSymbol: '/ɒ/', meaning: 'bất ngờ' },
      { word: 'call', ipa: '/kɔ:l/', targetSymbol: '/ɔ:/', meaning: 'tiếng gọi' },
      { word: 'shook', ipa: '/ʃʊk/', targetSymbol: '/ʊ/', meaning: 'run rẩy' },
      { word: 'mood', ipa: '/mu:d/', targetSymbol: '/u:/', meaning: 'tâm trạng' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['cough', 'body', 'shock'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['jaw', 'yawn', 'call'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['foot', 'good', 'shook'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['tooth', 'cool', 'mood'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'knee',
      templateIpa: '/n_/',
      meaning: 'đầu gối khỏe',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/ni:/',
      explanation: "Từ 'knee' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'lip',
      templateIpa: '/l_p/',
      meaning: 'đôi môi xinh',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'B',
      fullIpa: '/lɪp/',
      explanation: "Từ 'lip' có âm /ɪ/ (i ngắn dứt khoát), nên chọn ɪ."
    },
    {
      id: 3,
      word: 'hand',
      templateIpa: '/h_nd/',
      meaning: 'bàn tay khéo',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/hænd/',
      explanation: "Từ 'hand' có âm /æ/ (a bẹt mở rộng miệng), nên chọn æ."
    },
    {
      id: 4,
      word: 'neck',
      templateIpa: '/n_k/',
      meaning: 'chiếc cổ cao',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'B',
      fullIpa: '/nek/',
      explanation: "Từ 'neck' có âm /e/ (e ngắn dứt khoát), nên chọn e."
    },
    {
      id: 5,
      word: 'tooth',
      templateIpa: '/t_θ/',
      meaning: 'chiếc răng chắc',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/tu:θ/',
      explanation: "Từ 'tooth' mang âm /u:/ (u dài chu tròn môi), nên chọn u:."
    },
    {
      id: 6,
      word: 'foot',
      templateIpa: '/f_t/',
      meaning: 'bàn chân nhỏ',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/fʊt/',
      explanation: "Từ 'foot' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 7,
      word: 'heart',
      templateIpa: '/h_t/',
      meaning: 'trái tim đập',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/hɑ:t/',
      explanation: "Từ 'heart' mang âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 8,
      word: 'hurt',
      templateIpa: '/h_t/',
      meaning: 'cảm thấy đau',
      choiceA: 'ɜ:',
      choiceB: 'ɑ:',
      correctChoice: 'A',
      fullIpa: '/hɜ:t/',
      explanation: "Từ 'hurt' mang âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'knee', ipa: '/ni:/', vowelSound: '/i:/', meaning: 'đầu gối' },
        { letter: 'B', word: 'heel', ipa: '/hi:l/', vowelSound: '/i:/', meaning: 'gót chân' },
        { letter: 'C', word: 'teeth', ipa: '/ti:θ/', vowelSound: '/i:/', meaning: 'hàm răng' },
        { letter: 'D', word: 'chin', ipa: '/tʃɪn/', vowelSound: '/ɪ/', meaning: 'cái cằm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'chin' mang âm /ɪ/ (i ngắn). Ba từ knee, heel, teeth đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'hand', ipa: '/hænd/', vowelSound: '/æ/', meaning: 'bàn tay' },
        { letter: 'B', word: 'back', ipa: '/bæk/', vowelSound: '/æ/', meaning: 'cái lưng' },
        { letter: 'C', word: 'neck', ipa: '/nek/', vowelSound: '/e/', meaning: 'cái cổ' },
        { letter: 'D', word: 'fat', ipa: '/fæt/', vowelSound: '/æ/', meaning: 'mập' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'neck' mang âm /e/ (e ngắn). Ba từ hand, back, fat đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'jaw', ipa: '/dʒɔ:/', vowelSound: '/ɔ:/', meaning: 'quai hàm' },
        { letter: 'B', word: 'yawn', ipa: '/jɔ:n/', vowelSound: '/ɔ:/', meaning: 'ngáp' },
        { letter: 'C', word: 'cough', ipa: '/kɒf/', vowelSound: '/ɒ/', meaning: 'tiếng ho' },
        { letter: 'D', word: 'call', ipa: '/kɔ:l/', vowelSound: '/ɔ:/', meaning: 'gọi' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'cough' mang âm /ɒ/ (o ngắn). Ba từ jaw, yawn, call đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'tooth', ipa: '/tu:θ/', vowelSound: '/u:/', meaning: 'chiếc răng' },
        { letter: 'B', word: 'mood', ipa: '/mu:d/', vowelSound: '/u:/', meaning: 'tâm trạng' },
        { letter: 'C', word: 'cool', ipa: '/ku:l/', vowelSound: '/u:/', meaning: 'mát mẻ' },
        { letter: 'D', word: 'foot', ipa: '/fʊt/', vowelSound: '/ʊ/', meaning: 'bàn chân' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'foot' mang âm /ʊ/ (u ngắn). Ba từ tooth, mood, cool đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'arm', ipa: '/ɑ:m/', vowelSound: '/ɑ:/', meaning: 'cánh tay' },
        { letter: 'B', word: 'heart', ipa: '/hɑ:t/', vowelSound: '/ɑ:/', meaning: 'trái tim' },
        { letter: 'C', word: 'calm', ipa: '/kɑ:m/', vowelSound: '/ɑ:/', meaning: 'bình tĩnh' },
        { letter: 'D', word: 'blood', ipa: '/blʌd/', vowelSound: '/ʌ/', meaning: 'máu' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'blood' mang âm /ʌ/ (á ngắn). Ba từ arm, heart, calm đều mang âm /ɑ:/ (a dài ngân vang)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'hurt', ipa: '/hɜ:t/', vowelSound: '/ɜ:/', meaning: 'bị đau' },
        { letter: 'B', word: 'burn', ipa: '/bɜ:n/', vowelSound: '/ɜ:/', meaning: 'bỏng rát' },
        { letter: 'C', word: 'leg', ipa: '/leg/', vowelSound: '/e/', meaning: 'cẳng chân' },
        { letter: 'D', word: 'nurse', ipa: '/nɜ:s/', vowelSound: '/ɜ:/', meaning: 'y tá chăm sóc' }
      ],
      correctChoice: 'C',
      explanation: "Đáp án đúng là C: 'leg' mang âm /e/ (e ngắn). Ba từ hurt, burn, nurse đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'knee',
      wordMeaning: 'đầu gối khỏe khoắn',
      fullIpa: '/ni:/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'knee' phát âm là /ni:/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'neck',
      wordMeaning: 'chiếc cổ thon gọn',
      fullIpa: '/nek/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'neck' phát âm là /nek/ mang nguyên âm /e/ (e ngắn miệng tự nhiên)."
    },
    {
      id: 3,
      spokenWord: 'hand',
      wordMeaning: 'bàn tay năm ngón xinh',
      fullIpa: '/hænd/',
      targetSymbol: '/æ/',
      choiceA: '/e/',
      choiceB: '/æ/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'hand' phát âm là /hænd/ mang nguyên âm /æ/ (a bẹt mở rộng hàm)."
    },
    {
      id: 4,
      spokenWord: 'tooth',
      wordMeaning: 'chiếc răng sữa trắng tinh',
      fullIpa: '/tu:θ/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'tooth' phát âm là /tu:θ/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 5,
      spokenWord: 'foot',
      wordMeaning: 'bàn chân nhỏ chạy nhanh',
      fullIpa: '/fʊt/',
      targetSymbol: '/ʊ/',
      choiceA: '/ʊ/',
      choiceB: '/u:/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'foot' phát âm là /fʊt/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 6,
      spokenWord: 'heart',
      wordMeaning: 'trái tim nhân hậu',
      fullIpa: '/hɑ:t/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'heart' phát âm là /hɑ:t/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 7,
      spokenWord: 'hurt',
      wordMeaning: 'cảm giác bị đau',
      fullIpa: '/hɜ:t/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/ɔ:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'hurt' phát âm là /hɜ:t/ mang nguyên âm /ɜ:/ (ơ dài uốn cong đầu lưỡi)."
    },
    {
      id: 8,
      spokenWord: 'blood',
      wordMeaning: 'máu lưu thông nuôi cơ thể',
      fullIpa: '/blʌd/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'blood' phát âm là /blʌd/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    }
  ]
};
