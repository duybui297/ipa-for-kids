import { PracticeExamSet } from './types';

export const SET_10: PracticeExamSet = {
  id: 10,
  title: 'Bộ Đề 10: Nông Trại & Miệt Vườn',
  subtitle: 'Luyện âm cùng các loài vật nuôi, chuồng trại và cây trái xum xuê',
  badge: 'Cơ bản',
  topic: 'Farm & Garden',
  icon: '🚜',
  description: 'Ghé thăm trang trại đồng quê thanh bình và phân biệt các nguyên âm: barn /ɑ:/ vs bun /ʌ/, bull /ʊ/ vs bowl /əʊ/, hen /e/ vs ham /æ/, sheep /i:/ vs ship /ɪ/, corn /ɔ:/ vs cob /ɒ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'barn',
      ipaA: '/bɑ:n/',
      meaningA: 'nhà kho thóc',
      wordB: 'bun',
      ipaB: '/bʌn/',
      meaningB: 'bánh mì tròn',
      targetAudioWord: 'barn',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'barn' mang âm /ɑ:/ (a dài mở rộng họng). 'bun' mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'bull',
      ipaA: '/bʊl/',
      meaningA: 'chú bò tót đực',
      wordB: 'bowl',
      ipaB: '/bəʊl/',
      meaningB: 'cái tô đựng thức ăn',
      targetAudioWord: 'bull',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bull' mang nguyên âm đơn /ʊ/ (u ngắn dứt khoát). 'bowl' là nguyên âm đôi /əʊ/."
    },
    {
      id: 3,
      wordA: 'hen',
      ipaA: '/hen/',
      meaningA: 'cô gà mái đẻ trứng',
      wordB: 'ham',
      ipaB: '/hæm/',
      meaningB: 'thịt giăm bông',
      targetAudioWord: 'hen',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'hen' mang âm /e/ (e ngắn). 'ham' mang âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 4,
      wordA: 'corn',
      ipaA: '/kɔ:n/',
      meaningA: 'bắp ngô vàng',
      wordB: 'cob',
      ipaB: '/kɒb/',
      meaningB: 'lõi bắp',
      targetAudioWord: 'corn',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'corn' mang âm /ɔ:/ (o dài chu môi tròn). 'cob' mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 5,
      wordA: 'duck',
      ipaA: '/dʌk/',
      meaningA: 'chú vịt bơi ao',
      wordB: 'dock',
      ipaB: '/dɒk/',
      meaningB: 'bến nước nhỏ',
      targetAudioWord: 'duck',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'duck' mang âm /ʌ/ (á ngắn dứt khoát). 'dock' mang âm /ɒ/ (o ngắn tròn miệng)."
    },
    {
      id: 6,
      wordA: 'sheep',
      ipaA: '/ʃi:p/',
      meaningA: 'đàn cừu lông trắng',
      wordB: 'ship',
      ipaB: '/ʃɪp/',
      meaningB: 'con thuyền',
      targetAudioWord: 'sheep',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'sheep' mang âm /i:/ (i dài mỉm cười). 'ship' mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 7,
      wordA: 'pond',
      ipaA: '/pɒnd/',
      meaningA: 'ao nước thả vịt',
      wordB: 'pound',
      ipaB: '/paʊnd/',
      meaningB: 'cân Anh/đập mạnh',
      targetAudioWord: 'pond',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'pond' mang nguyên âm đơn /ɒ/ (o ngắn). 'pound' là nguyên âm đôi /aʊ/."
    },
    {
      id: 8,
      wordA: 'calf',
      ipaA: '/kɑ:f/',
      meaningA: 'chú bê con ngơ ngác',
      wordB: 'cuff',
      ipaB: '/kʌf/',
      meaningB: 'cổ tay áo',
      targetAudioWord: 'calf',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'calf' mang âm /ɑ:/ (a dài mở rộng miệng). 'cuff' mang âm /ʌ/ (á ngắn)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'pond', ipa: '/pɒnd/', meaning: 'ao cá nông trại', symbol: '/ɒ/' },
    { id: 'B', word: 'herd', ipa: '/hɜ:d/', meaning: 'bầy đàn gia súc', symbol: '/ɜ:/' },
    { id: 'C', word: 'feed', ipa: '/fi:d/', meaning: 'cho gia súc ăn', symbol: '/i:/' },
    { id: 'D', word: 'duck', ipa: '/dʌk/', meaning: 'con vịt bơi', symbol: '/ʌ/' },
    { id: 'E', word: 'bull', ipa: '/bʊl/', meaning: 'chú bò đực', symbol: '/ʊ/' },
    { id: 'F', word: 'corn', ipa: '/kɔ:n/', meaning: 'ngô bắp thu hoạch', symbol: '/ɔ:/' },
    { id: 'G', word: 'pig', ipa: '/pɪg/', meaning: 'chú lợn con', symbol: '/ɪ/' },
    { id: 'H', word: 'farmer', ipa: "/'fɑ:mə/", meaning: 'bác nông dân (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'rooster', ipa: "/'ru:stə/", meaning: 'chú gà trống', symbol: '/u:/' },
    { id: 'J', word: 'lamb', ipa: '/læm/', meaning: 'chú cừu non', symbol: '/æ/' },
    { id: 'K', word: 'hen', ipa: '/hen/', meaning: 'cô gà mái', symbol: '/e/' },
    { id: 'L', word: 'barn', ipa: '/bɑ:n/', meaning: 'nhà kho thóc', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'feed', explanation: "Âm /i:/ (i dài) có trong từ 'feed' /fi:d/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'pig', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'pig' /pɪg/" },
    { symbol: '/e/', targetWordId: 'K', word: 'hen', explanation: "Âm /e/ (e ngắn) có trong từ 'hen' /hen/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'lamb', explanation: "Âm /æ/ (a bẹt) có trong từ 'lamb' /læm/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'duck', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'duck' /dʌk/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'barn', explanation: "Âm /ɑ:/ (a dài) có trong từ 'barn' /bɑ:n/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'pond', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'pond' /pɒnd/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'corn', explanation: "Âm /ɔ:/ (o dài) có trong từ 'corn' /kɔ:n/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'bull', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'bull' /bʊl/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'rooster', explanation: "Âm /u:/ (u dài) có ở âm đầu của 'rooster' /'ru:stə/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'herd', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'herd' /hɜ:d/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'farmer', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'farmer' /'fɑ:mə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp loài vật nông trại vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các con vật và đồ dùng nông trại vào đúng 4 gia đình âm /i:/, /ɪ/, /e/, /æ/.',
    allWords: [
      { word: 'sheep', ipa: '/ʃi:p/', targetSymbol: '/i:/', meaning: 'con cừu' },
      { word: 'lamb', ipa: '/læm/', targetSymbol: '/æ/', meaning: 'cừu non' },
      { word: 'pig', ipa: '/pɪg/', targetSymbol: '/ɪ/', meaning: 'chú heo' },
      { word: 'hen', ipa: '/hen/', targetSymbol: '/e/', meaning: 'gà mái' },
      { word: 'feed', ipa: '/fi:d/', targetSymbol: '/i:/', meaning: 'cho ăn' },
      { word: 'cat', ipa: '/kæt/', targetSymbol: '/æ/', meaning: 'mèo bắt chuột' },
      { word: 'chick', ipa: '/tʃɪk/', targetSymbol: '/ɪ/', meaning: 'gà con' },
      { word: 'shed', ipa: '/ʃed/', targetSymbol: '/e/', meaning: 'chuồng trại' },
      { word: 'wheat', ipa: '/wi:t/', targetSymbol: '/i:/', meaning: 'lúa mì' },
      { word: 'track', ipa: '/træk/', targetSymbol: '/æ/', meaning: 'đường cày' },
      { word: 'mill', ipa: '/mɪl/', targetSymbol: '/ɪ/', meaning: 'cối xay gió' },
      { word: 'pen', ipa: '/pen/', targetSymbol: '/e/', meaning: 'rào nhốt gia súc' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['sheep', 'feed', 'wheat'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['pig', 'chick', 'mill'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['hen', 'shed', 'pen'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['lamb', 'cat', 'track'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp mùa màng vườn tược vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ nông sản và kéo thả vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'pond', ipa: '/pɒnd/', targetSymbol: '/ɒ/', meaning: 'ao nước' },
      { word: 'corn', ipa: '/kɔ:n/', targetSymbol: '/ɔ:/', meaning: 'bắp ngô' },
      { word: 'bull', ipa: '/bʊl/', targetSymbol: '/ʊ/', meaning: 'bò tót' },
      { word: 'rooster', ipa: "/'ru:stə/", targetSymbol: '/u:/', meaning: 'gà trống' },
      { word: 'crop', ipa: '/krɒp/', targetSymbol: '/ɒ/', meaning: 'vụ mùa' },
      { word: 'horse', ipa: '/hɔ:s/', targetSymbol: '/ɔ:/', meaning: 'ngựa ô' },
      { word: 'wool', ipa: '/wʊl/', targetSymbol: '/ʊ/', meaning: 'lông cừu' },
      { word: 'coop', ipa: '/ku:p/', targetSymbol: '/u:/', meaning: 'chuồng gà' },
      { word: 'trough', ipa: '/trɒf/', targetSymbol: '/ɒ/', meaning: 'máng ăn' },
      { word: 'stalk', ipa: '/stɔ:k/', targetSymbol: '/ɔ:/', meaning: 'thân cây lúa' },
      { word: 'bush', ipa: '/bʊʃ/', targetSymbol: '/ʊ/', meaning: 'bụi cây rậm' },
      { word: 'pool', ipa: '/pu:l/', targetSymbol: '/u:/', meaning: 'vũng nước tắm' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['pond', 'crop', 'trough'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['corn', 'horse', 'stalk'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['bull', 'wool', 'bush'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['rooster', 'coop', 'pool'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'sheep',
      templateIpa: '/ʃ_p/',
      meaning: 'chú cừu trắng',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/ʃi:p/',
      explanation: "Từ 'sheep' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'hen',
      templateIpa: '/h_n/',
      meaning: 'gà mái mơ',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'B',
      fullIpa: '/hen/',
      explanation: "Từ 'hen' có âm /e/ (e ngắn dứt khoát), nên chọn e."
    },
    {
      id: 3,
      word: 'duck',
      templateIpa: '/d_k/',
      meaning: 'vịt bơi hồ',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/dʌk/',
      explanation: "Từ 'duck' có âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 4,
      word: 'barn',
      templateIpa: '/b_n/',
      meaning: 'kho chứa thóc',
      choiceA: 'ɑ:',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/bɑ:n/',
      explanation: "Từ 'barn' có âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 5,
      word: 'corn',
      templateIpa: '/k_n/',
      meaning: 'bắp ngô non',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/kɔ:n/',
      explanation: "Từ 'corn' mang âm /ɔ:/ (o dài chu môi tròn), nên chọn ɔ:."
    },
    {
      id: 6,
      word: 'bull',
      templateIpa: '/b_l/',
      meaning: 'chú bò đực',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'B',
      fullIpa: '/bʊl/',
      explanation: "Từ 'bull' mang âm /ʊ/ (u ngắn dứt khoát), nên chọn ʊ."
    },
    {
      id: 7,
      word: 'pond',
      templateIpa: '/p_nd/',
      meaning: 'ao cá nước trong',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/pɒnd/',
      explanation: "Từ 'pond' mang âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 8,
      word: 'herd',
      templateIpa: '/h_d/',
      meaning: 'bầy gia súc',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/hɜ:d/',
      explanation: "Từ 'herd' mang âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'sheep', ipa: '/ʃi:p/', vowelSound: '/i:/', meaning: 'con cừu' },
        { letter: 'B', word: 'feed', ipa: '/fi:d/', vowelSound: '/i:/', meaning: 'cho ăn' },
        { letter: 'C', word: 'wheat', ipa: '/wi:t/', vowelSound: '/i:/', meaning: 'lúa mì' },
        { letter: 'D', word: 'pig', ipa: '/pɪg/', vowelSound: '/ɪ/', meaning: 'con lợn' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'pig' mang âm /ɪ/ (i ngắn). Ba từ sheep, feed, wheat đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'hen', ipa: '/hen/', vowelSound: '/e/', meaning: 'gà mái' },
        { letter: 'B', word: 'shed', ipa: '/ʃed/', vowelSound: '/e/', meaning: 'chuồng trại' },
        { letter: 'C', word: 'pen', ipa: '/pen/', vowelSound: '/e/', meaning: 'rào nhốt' },
        { letter: 'D', word: 'lamb', ipa: '/læm/', vowelSound: '/æ/', meaning: 'cừu con' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'lamb' mang âm /æ/ (a bẹt). Ba từ hen, shed, pen đều mang âm /e/ (e ngắn)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'corn', ipa: '/kɔ:n/', vowelSound: '/ɔ:/', meaning: 'bắp ngô' },
        { letter: 'B', word: 'horse', ipa: '/hɔ:s/', vowelSound: '/ɔ:/', meaning: 'con ngựa' },
        { letter: 'C', word: 'stalk', ipa: '/stɔ:k/', vowelSound: '/ɔ:/', meaning: 'thân cây' },
        { letter: 'D', word: 'pond', ipa: '/pɒnd/', vowelSound: '/ɒ/', meaning: 'cái ao' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'pond' mang âm /ɒ/ (o ngắn). Ba từ corn, horse, stalk đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'coop', ipa: '/ku:p/', vowelSound: '/u:/', meaning: 'chuồng gà' },
        { letter: 'B', word: 'rooster', ipa: "/'ru:stə/", vowelSound: '/u:/', meaning: 'gà trống' },
        { letter: 'C', word: 'pool', ipa: '/pu:l/', vowelSound: '/u:/', meaning: 'vũng nước' },
        { letter: 'D', word: 'bull', ipa: '/bʊl/', vowelSound: '/ʊ/', meaning: 'chú bò đực' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bull' mang âm /ʊ/ (u ngắn). Ba từ coop, rooster, pool đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'duck', ipa: '/dʌk/', vowelSound: '/ʌ/', meaning: 'con vịt' },
        { letter: 'B', word: 'bun', ipa: '/bʌn/', vowelSound: '/ʌ/', meaning: 'bánh mì' },
        { letter: 'C', word: 'mud', ipa: '/mʌd/', vowelSound: '/ʌ/', meaning: 'bùn đất' },
        { letter: 'D', word: 'barn', ipa: '/bɑ:n/', vowelSound: '/ɑ:/', meaning: 'nhà kho' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'barn' mang âm /ɑ:/ (a dài). Ba từ duck, bun, mud đều mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'herd', ipa: '/hɜ:d/', vowelSound: '/ɜ:/', meaning: 'đàn bò' },
        { letter: 'B', word: 'bird', ipa: '/bɜ:d/', vowelSound: '/ɜ:/', meaning: 'chim sâu' },
        { letter: 'C', word: 'worm', ipa: '/wɜ:m/', vowelSound: '/ɜ:/', meaning: 'con giun' },
        { letter: 'D', word: 'cat', ipa: '/kæt/', vowelSound: '/æ/', meaning: 'mèo bắt chuột' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'cat' mang âm /æ/ (a bẹt). Ba từ herd, bird, worm đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'sheep',
      wordMeaning: 'chú cừu ngoan hiền',
      fullIpa: '/ʃi:p/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'sheep' phát âm là /ʃi:p/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'hen',
      wordMeaning: 'con gà mái cục tác',
      fullIpa: '/hen/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'hen' phát âm là /hen/ mang nguyên âm /e/ (e ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'duck',
      wordMeaning: 'con vịt lội ao',
      fullIpa: '/dʌk/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'duck' phát âm là /dʌk/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 4,
      spokenWord: 'barn',
      wordMeaning: 'nhà kho thóc nông trang',
      fullIpa: '/bɑ:n/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'barn' phát âm là /bɑ:n/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 5,
      spokenWord: 'corn',
      wordMeaning: 'bắp ngô mùa gặt',
      fullIpa: '/kɔ:n/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'corn' phát âm là /kɔ:n/ mang nguyên âm /ɔ:/ (o dài chu tròn môi)."
    },
    {
      id: 6,
      spokenWord: 'bull',
      wordMeaning: 'chú bò mộng khỏe khoắn',
      fullIpa: '/bʊl/',
      targetSymbol: '/ʊ/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'B',
      explanation: "Từ 'bull' phát âm là /bʊl/ mang nguyên âm /ʊ/ (u ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'pond',
      wordMeaning: 'ao nước mát lành',
      fullIpa: '/pɒnd/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'pond' phát âm là /pɒnd/ mang nguyên âm /ɒ/ (o ngắn miệng mở vừa)."
    },
    {
      id: 8,
      spokenWord: 'herd',
      wordMeaning: 'đàn bò nhai cỏ',
      fullIpa: '/hɜ:d/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/e/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'herd' phát âm là /hɜ:d/ mang nguyên âm /ɜ:/ (ơ dài cong đầu lưỡi)."
    }
  ]
};
