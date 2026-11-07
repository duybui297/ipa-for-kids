import { PracticeExamSet } from './types';

export const SET_12: PracticeExamSet = {
  id: 12,
  title: 'Bộ Đề 12: Công Viên & Trò Chơi',
  subtitle: 'Luyện âm cùng xích đu, cầu trượt, búp bê, bóng bay & đồ chơi yêu thích',
  badge: 'Cơ bản',
  topic: 'Park & Toys',
  icon: '🪁',
  description: 'Thỏa sức nô đùa tại sân chơi tuổi thơ và củng cố vững chắc các nguyên âm: slide /aɪ/ vs sled /e/, kite /aɪ/ vs kit /ɪ/, swing /ɪ/ vs sweet /i:/, ball /ɔ:/ vs doll /ɒ/, drum /ʌ/ vs drama /ɑ:/.',
  exercise1: [
    {
      id: 1,
      wordA: 'swing',
      ipaA: '/swɪŋ/',
      meaningA: 'chiếc xích đu đu đưa',
      wordB: 'sweet',
      ipaB: '/swi:t/',
      meaningB: 'kẹo ngọt ngào',
      targetAudioWord: 'swing',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'swing' mang âm /ɪ/ (i ngắn dứt khoát). 'sweet' mang âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      wordA: 'doll',
      ipaA: '/dɒl/',
      meaningA: 'búp bê xinh xắn',
      wordB: 'ball',
      ipaB: '/bɔ:l/',
      meaningB: 'quả bóng chuyền',
      targetAudioWord: 'doll',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'doll' mang âm /ɒ/ (o ngắn). 'ball' mang âm /ɔ:/ (o dài chu môi tròn ngân dài)."
    },
    {
      id: 3,
      wordA: 'slide',
      ipaA: '/slaɪd/',
      meaningA: 'cầu trượt sắc màu',
      wordB: 'sled',
      ipaB: '/sled/',
      meaningB: 'xe trượt tuyết',
      targetAudioWord: 'slide',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'slide' mang nguyên âm đôi /aɪ/. 'sled' mang nguyên âm đơn /e/ (e ngắn)."
    },
    {
      id: 4,
      wordA: 'drum',
      ipaA: '/drʌm/',
      meaningA: 'chiếc trống gõ rộn ràng',
      wordB: 'dam',
      ipaB: '/dæm/',
      meaningB: 'con đập ngăn nước',
      targetAudioWord: 'drum',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'drum' mang âm /ʌ/ (á ngắn dứt khoát). 'dam' mang âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 5,
      wordA: 'kite',
      ipaA: '/kaɪt/',
      meaningA: 'cánh diều bay cao',
      wordB: 'kit',
      ipaB: '/kɪt/',
      meaningB: 'bộ đồ chơi lắp ráp',
      targetAudioWord: 'kit',
      correctChoice: 'B',
      explanation: "Từ được phát âm là 'kit' mang nguyên âm đơn /ɪ/ (i ngắn dứt khoát). 'kite' là nguyên âm đôi /aɪ/."
    },
    {
      id: 6,
      wordA: 'cart',
      ipaA: '/kɑ:t/',
      meaningA: 'xe đẩy đồ chơi',
      wordB: 'cut',
      ipaB: '/kʌt/',
      meaningB: 'cắt dán thủ công',
      targetAudioWord: 'cart',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cart' mang âm /ɑ:/ (a dài mở rộng họng). 'cut' mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 7,
      wordA: 'hoop',
      ipaA: '/hu:p/',
      meaningA: 'vòng lắc eo',
      wordB: 'hop',
      ipaB: '/hɒp/',
      meaningB: 'nhảy lò cò',
      targetAudioWord: 'hoop',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'hoop' mang âm /u:/ (u dài chu tròn môi). 'hop' mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 8,
      wordA: 'bench',
      ipaA: '/bentʃ/',
      meaningA: 'ghế băng công viên',
      wordB: 'bunch',
      ipaB: '/bʌntʃ/',
      meaningB: 'chùm bóng bay',
      targetAudioWord: 'bench',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'bench' mang âm /e/ (e ngắn). 'bunch' mang âm /ʌ/ (á ngắn dứt khoát)."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'doll', ipa: '/dɒl/', meaning: 'búp bê', symbol: '/ɒ/' },
    { id: 'B', word: 'circus', ipa: "/'sɜ:kəs/", meaning: 'rạp xiếc công viên', symbol: '/ɜ:/' },
    { id: 'C', word: 'sweet', ipa: '/swi:t/', meaning: 'kẹo ngọt ngào', symbol: '/i:/' },
    { id: 'D', word: 'drum', ipa: '/drʌm/', meaning: 'trống đồ chơi', symbol: '/ʌ/' },
    { id: 'E', word: 'look', ipa: '/lʊk/', meaning: 'nhìn ngắm', symbol: '/ʊ/' },
    { id: 'F', word: 'ball', ipa: '/bɔ:l/', meaning: 'quả bóng bay', symbol: '/ɔ:/' },
    { id: 'G', word: 'swing', ipa: '/swɪŋ/', meaning: 'chiếc xích đu', symbol: '/ɪ/' },
    { id: 'H', word: 'banner', ipa: "/'bænə/", meaning: 'dải cờ rực rỡ (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'hoop', ipa: '/hu:p/', meaning: 'vòng xoay', symbol: '/u:/' },
    { id: 'J', word: 'tag', ipa: '/tæg/', meaning: 'trò chơi đuổi bắt', symbol: '/æ/' },
    { id: 'K', word: 'bench', ipa: '/bentʃ/', meaning: 'ghế đá nghỉ chân', symbol: '/e/' },
    { id: 'L', word: 'park', ipa: '/pɑ:k/', meaning: 'công viên xanh', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'sweet', explanation: "Âm /i:/ (i dài) có trong từ 'sweet' /swi:t/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'swing', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'swing' /swɪŋ/" },
    { symbol: '/e/', targetWordId: 'K', word: 'bench', explanation: "Âm /e/ (e ngắn) có trong từ 'bench' /bentʃ/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'tag', explanation: "Âm /æ/ (a bẹt) có trong từ 'tag' /tæg/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'drum', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'drum' /drʌm/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'park', explanation: "Âm /ɑ:/ (a dài) có trong từ 'park' /pɑ:k/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'doll', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'doll' /dɒl/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'ball', explanation: "Âm /ɔ:/ (o dài) có trong từ 'ball' /bɔ:l/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'look', explanation: "Âm /ʊ/ (u ngắn) có trong từ 'look' /lʊk/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'hoop', explanation: "Âm /u:/ (u dài) có trong từ 'hoop' /hu:p/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'circus', explanation: "Âm /ɜ:/ (ơ dài) có ở âm đầu từ 'circus' /'sɜ:kəs/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'banner', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'banner' /'bænə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp trò chơi công viên vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các trò chơi và đồ dùng sân chơi vào đúng 4 gia đình âm /i:/, /ɪ/, /e/, /æ/.',
    allWords: [
      { word: 'sweet', ipa: '/swi:t/', targetSymbol: '/i:/', meaning: 'kẹo ngọt' },
      { word: 'tag', ipa: '/tæg/', targetSymbol: '/æ/', meaning: 'trò đuổi bắt' },
      { word: 'swing', ipa: '/swɪŋ/', targetSymbol: '/ɪ/', meaning: 'xích đu' },
      { word: 'bench', ipa: '/bentʃ/', targetSymbol: '/e/', meaning: 'ghế dài' },
      { word: 'green', ipa: '/gri:n/', targetSymbol: '/i:/', meaning: 'bãi cỏ xanh' },
      { word: 'trap', ipa: '/træp/', targetSymbol: '/æ/', meaning: 'bẫy cát' },
      { word: 'spin', ipa: '/spɪn/', targetSymbol: '/ɪ/', meaning: 'quay tròn' },
      { word: 'bell', ipa: '/bel/', targetSymbol: '/e/', meaning: 'chuông xe kem' },
      { word: 'wheel', ipa: '/wi:l/', targetSymbol: '/i:/', meaning: 'bánh xe trượt' },
      { word: 'mat', ipa: '/mæt/', targetSymbol: '/æ/', meaning: 'thảm trải cỏ' },
      { word: 'skip', ipa: '/skɪp/', targetSymbol: '/ɪ/', meaning: 'nhảy dây' },
      { word: 'step', ipa: '/step/', targetSymbol: '/e/', meaning: 'bước nhảy' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['sweet', 'green', 'wheel'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['swing', 'spin', 'skip'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['bench', 'bell', 'step'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['tag', 'trap', 'mat'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp đồ chơi vui nhộn vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ đồ chơi sân công viên và xếp vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'doll', ipa: '/dɒl/', targetSymbol: '/ɒ/', meaning: 'búp bê' },
      { word: 'ball', ipa: '/bɔ:l/', targetSymbol: '/ɔ:/', meaning: 'quả bóng' },
      { word: 'look', ipa: '/lʊk/', targetSymbol: '/ʊ/', meaning: 'ngắm nhìn' },
      { word: 'hoop', ipa: '/hu:p/', targetSymbol: '/u:/', meaning: 'vòng lắc' },
      { word: 'hop', ipa: '/hɒp/', targetSymbol: '/ɒ/', meaning: 'nhảy lò cò' },
      { word: 'chalk', ipa: '/tʃɔ:k/', targetSymbol: '/ɔ:/', meaning: 'vẽ ô gạch' },
      { word: 'good', ipa: '/gʊd/', targetSymbol: '/ʊ/', meaning: 'chơi ngoan' },
      { word: 'scooter', ipa: "/'sku:tə/", targetSymbol: '/u:/', meaning: 'xe trượt scooter' },
      { word: 'box', ipa: '/bɒks/', targetSymbol: '/ɒ/', meaning: 'hộp xếp hình' },
      { word: 'crawl', ipa: '/krɔ:l/', targetSymbol: '/ɔ:/', meaning: 'bò qua ống hầm' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'đá bóng' },
      { word: 'balloon', ipa: "/bə'lu:n/", targetSymbol: '/u:/', meaning: 'bóng bay' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['doll', 'hop', 'box'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['ball', 'chalk', 'crawl'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['look', 'good', 'foot'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['hoop', 'scooter', 'balloon'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'swing',
      templateIpa: '/sw_ŋ/',
      meaning: 'xích đu bay bổng',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'B',
      fullIpa: '/swɪŋ/',
      explanation: "Từ 'swing' có âm /ɪ/ (i ngắn dứt khoát), nên chọn ɪ."
    },
    {
      id: 2,
      word: 'sweet',
      templateIpa: '/sw_t/',
      meaning: 'kẹo ngọt vị trái cây',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/swi:t/',
      explanation: "Từ 'sweet' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 3,
      word: 'doll',
      templateIpa: '/d_l/',
      meaning: 'búp bê mắt biếc',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/dɒl/',
      explanation: "Từ 'doll' có âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 4,
      word: 'ball',
      templateIpa: '/b_l/',
      meaning: 'quả bóng bay đỏ',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/bɔ:l/',
      explanation: "Từ 'ball' có âm /ɔ:/ (o dài chu tròn môi), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'drum',
      templateIpa: '/dr_m/',
      meaning: 'tiếng trống vang xa',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/drʌm/',
      explanation: "Từ 'drum' có âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 6,
      word: 'park',
      templateIpa: '/p_k/',
      meaning: 'khu vui chơi công viên',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/pɑ:k/',
      explanation: "Từ 'park' có âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 7,
      word: 'hoop',
      templateIpa: '/h_p/',
      meaning: 'chiếc vòng tròn',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/hu:p/',
      explanation: "Từ 'hoop' có âm /u:/ (u dài chu môi), nên chọn u:."
    },
    {
      id: 8,
      word: 'bench',
      templateIpa: '/b_ntʃ/',
      meaning: 'ghế băng dài ngồi nghỉ',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'B',
      fullIpa: '/bentʃ/',
      explanation: "Từ 'bench' có âm /e/ (e ngắn dứt khoát), nên chọn e."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'sweet', ipa: '/swi:t/', vowelSound: '/i:/', meaning: 'kẹo ngọt' },
        { letter: 'B', word: 'green', ipa: '/gri:n/', vowelSound: '/i:/', meaning: 'cỏ xanh' },
        { letter: 'C', word: 'wheel', ipa: '/wi:l/', vowelSound: '/i:/', meaning: 'bánh xe' },
        { letter: 'D', word: 'swing', ipa: '/swɪŋ/', vowelSound: '/ɪ/', meaning: 'xích đu' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'swing' mang âm /ɪ/ (i ngắn). Ba từ sweet, green, wheel đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'tag', ipa: '/tæg/', vowelSound: '/æ/', meaning: 'trò đuổi bắt' },
        { letter: 'B', word: 'trap', ipa: '/træp/', vowelSound: '/æ/', meaning: 'bẫy cát' },
        { letter: 'C', word: 'mat', ipa: '/mæt/', vowelSound: '/æ/', meaning: 'chiếu thảm' },
        { letter: 'D', word: 'bench', ipa: '/bentʃ/', vowelSound: '/e/', meaning: 'ghế dài' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bench' mang âm /e/ (e ngắn). Ba từ tag, trap, mat đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'ball', ipa: '/bɔ:l/', vowelSound: '/ɔ:/', meaning: 'quả bóng' },
        { letter: 'B', word: 'chalk', ipa: '/tʃɔ:k/', vowelSound: '/ɔ:/', meaning: 'phấn vẽ' },
        { letter: 'C', word: 'crawl', ipa: '/krɔ:l/', vowelSound: '/ɔ:/', meaning: 'bò trườn' },
        { letter: 'D', word: 'doll', ipa: '/dɒl/', vowelSound: '/ɒ/', meaning: 'búp bê' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'doll' mang âm /ɒ/ (o ngắn). Ba từ ball, chalk, crawl đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'hoop', ipa: '/hu:p/', vowelSound: '/u:/', meaning: 'vòng lắc' },
        { letter: 'B', word: 'scooter', ipa: "/'sku:tə/", vowelSound: '/u:/', meaning: 'xe trượt' },
        { letter: 'C', word: 'balloon', ipa: "/bə'lu:n/", vowelSound: '/u:/', meaning: 'bóng bay' },
        { letter: 'D', word: 'look', ipa: '/lʊk/', vowelSound: '/ʊ/', meaning: 'nhìn ngắm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'look' mang âm /ʊ/ (u ngắn). Ba từ hoop, scooter, balloon đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'drum', ipa: '/drʌm/', vowelSound: '/ʌ/', meaning: 'cái trống' },
        { letter: 'B', word: 'jump', ipa: '/dʒʌmp/', vowelSound: '/ʌ/', meaning: 'nhảy lên' },
        { letter: 'C', word: 'run', ipa: '/rʌn/', vowelSound: '/ʌ/', meaning: 'chạy vui' },
        { letter: 'D', word: 'park', ipa: '/pɑ:k/', vowelSound: '/ɑ:/', meaning: 'công viên' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'park' mang âm /ɑ:/ (a dài). Ba từ drum, jump, run đều mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'circus', ipa: "/'sɜ:kəs/", vowelSound: '/ɜ:/', meaning: 'rạp xiếc' },
        { letter: 'B', word: 'turn', ipa: '/tɜ:n/', vowelSound: '/ɜ:/', meaning: 'lượt chơi' },
        { letter: 'C', word: 'skirt', ipa: '/skɜ:t/', vowelSound: '/ɜ:/', meaning: 'váy xòe' },
        { letter: 'D', word: 'bell', ipa: '/bel/', vowelSound: '/e/', meaning: 'tiếng chuông' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'bell' mang âm /e/ (e ngắn). Ba từ circus, turn, skirt đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'sweet',
      wordMeaning: 'viên kẹo ngọt vị thơm',
      fullIpa: '/swi:t/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'sweet' phát âm là /swi:t/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'swing',
      wordMeaning: 'chiếc xích đu bay cao',
      fullIpa: '/swɪŋ/',
      targetSymbol: '/ɪ/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'B',
      explanation: "Từ 'swing' phát âm là /swɪŋ/ mang nguyên âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 3,
      spokenWord: 'ball',
      wordMeaning: 'quả bóng lăn trên sân',
      fullIpa: '/bɔ:l/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'B',
      explanation: "Từ 'ball' phát âm là /bɔ:l/ mang nguyên âm /ɔ:/ (o dài chu môi ngân dài)."
    },
    {
      id: 4,
      spokenWord: 'doll',
      wordMeaning: 'búp bê xinh xắn của bé',
      fullIpa: '/dɒl/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'doll' phát âm là /dɒl/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 5,
      spokenWord: 'park',
      wordMeaning: 'công viên xanh mát',
      fullIpa: '/pɑ:k/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'park' phát âm là /pɑ:k/ mang nguyên âm /ɑ:/ (a dài mở rộng họng)."
    },
    {
      id: 6,
      spokenWord: 'drum',
      wordMeaning: 'chiếc trống gõ nhịp',
      fullIpa: '/drʌm/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'drum' phát âm là /drʌm/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 7,
      spokenWord: 'hoop',
      wordMeaning: 'vòng lắc eo thể dục',
      fullIpa: '/hu:p/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɒ/',
      correctChoice: 'A',
      explanation: "Từ 'hoop' phát âm là /hu:p/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 8,
      spokenWord: 'bench',
      wordMeaning: 'ghế dài rợp bóng cây',
      fullIpa: '/bentʃ/',
      targetSymbol: '/e/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ɪ/',
      correctChoice: 'B',
      explanation: "Từ 'bench' phát âm là /bentʃ/ mang nguyên âm /e/ (e ngắn miệng tự nhiên)."
    }
  ]
};
