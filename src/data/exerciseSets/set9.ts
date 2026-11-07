import { PracticeExamSet } from './types';

export const SET_9: PracticeExamSet = {
  id: 9,
  title: 'Bộ Đề 09: Phố Phường & Xe Cộ',
  subtitle: 'Luyện âm cùng các phương tiện giao thông trên đường phố nhộn nhịp',
  badge: 'Cơ bản',
  topic: 'City & Transport',
  icon: '🚗',
  description: 'Dạo quanh phố xá hiện đại và lắng nghe tiếng còi xe: wheel /i:/ vs will /ɪ/, track /æ/ vs truck /ʌ/, port /ɔ:/ vs pot /ɒ/, turn /ɜ:/ vs tin /ɪ/, street /i:/ vs stop /ɒ/.',
  exercise1: [
    {
      id: 1,
      wordA: 'wheel',
      ipaA: '/wi:l/',
      meaningA: 'bánh xe lăn tròn',
      wordB: 'will',
      ipaB: '/wɪl/',
      meaningB: 'ý chí/sẽ',
      targetAudioWord: 'wheel',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'wheel' mang âm /i:/ (i dài mỉm cười). 'will' mang âm /ɪ/ (i ngắn dứt khoát)."
    },
    {
      id: 2,
      wordA: 'track',
      ipaA: '/træk/',
      meaningA: 'đường ray tàu hỏa',
      wordB: 'truck',
      ipaB: '/trʌk/',
      meaningB: 'xe tải chở hàng',
      targetAudioWord: 'track',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'track' mang âm /æ/ (a bẹt hạ cằm sâu). 'truck' mang âm /ʌ/ (á ngắn)."
    },
    {
      id: 3,
      wordA: 'port',
      ipaA: '/pɔ:t/',
      meaningA: 'bến cảng tàu thuyền',
      wordB: 'pot',
      ipaB: '/pɒt/',
      meaningB: 'cái nồi',
      targetAudioWord: 'port',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'port' mang âm /ɔ:/ (o dài chu môi tròn). 'pot' mang âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 4,
      wordA: 'van',
      ipaA: '/væn/',
      meaningA: 'xe van chở khách',
      wordB: 'fan',
      ipaB: '/fæn/',
      meaningB: 'cái quạt',
      targetAudioWord: 'van',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'van' bắt đầu bằng phụ âm hữu thanh /v/ rung cổ họng, phân biệt với phụ âm vô thanh /f/."
    },
    {
      id: 5,
      wordA: 'cart',
      ipaA: '/kɑ:t/',
      meaningA: 'xe đẩy hàng siêu thị',
      wordB: 'cat',
      ipaB: '/kæt/',
      meaningB: 'con mèo',
      targetAudioWord: 'cart',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'cart' mang âm /ɑ:/ (a dài mở rộng họng). 'cat' mang âm /æ/ (a bẹt hạ cằm)."
    },
    {
      id: 6,
      wordA: 'turn',
      ipaA: '/tɜ:n/',
      meaningA: 'rẽ hướng đường đi',
      wordB: 'tin',
      ipaB: '/tɪn/',
      meaningB: 'hộp thiếc',
      targetAudioWord: 'turn',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'turn' mang âm /ɜ:/ (ơ dài cong lưỡi). 'tin' mang âm /ɪ/ (i ngắn)."
    },
    {
      id: 7,
      wordA: 'stop',
      ipaA: '/stɒp/',
      meaningA: 'biển dừng đèn đỏ',
      wordB: 'step',
      ipaB: '/step/',
      meaningB: 'bước qua vạch',
      targetAudioWord: 'stop',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'stop' mang âm /ɒ/ (o ngắn). 'step' mang âm /e/ (e ngắn)."
    },
    {
      id: 8,
      wordA: 'street',
      ipaA: '/stri:t/',
      meaningA: 'con đường phố xá',
      wordB: 'straight',
      ipaB: '/streɪt/',
      meaningB: 'thẳng tắp',
      targetAudioWord: 'street',
      correctChoice: 'A',
      explanation: "Từ được phát âm là 'street' mang nguyên âm đơn /i:/ (i dài mỉm cười). 'straight' mang nguyên âm đôi /eɪ/."
    }
  ],
  exercise2Words: [
    { id: 'A', word: 'stop', ipa: '/stɒp/', meaning: 'điểm dừng xe', symbol: '/ɒ/' },
    { id: 'B', word: 'turn', ipa: '/tɜ:n/', meaning: 'rẽ khúc quanh', symbol: '/ɜ:/' },
    { id: 'C', word: 'street', ipa: '/stri:t/', meaning: 'con đường phố', symbol: '/i:/' },
    { id: 'D', word: 'bus', ipa: '/bʌs/', meaning: 'xe buýt hai tầng', symbol: '/ʌ/' },
    { id: 'E', word: 'footpath', ipa: "/'fʊtpɑ:θ/", meaning: 'đường đi bộ', symbol: '/ʊ/' },
    { id: 'F', word: 'port', ipa: '/pɔ:t/', meaning: 'bến cảng', symbol: '/ɔ:/' },
    { id: 'G', word: 'trip', ipa: '/trɪp/', meaning: 'chuyến hành trình', symbol: '/ɪ/' },
    { id: 'H', word: 'motor', ipa: "/'məʊtə/", meaning: 'động cơ xe (đuôi schwa)', symbol: '/ə/' },
    { id: 'I', word: 'route', ipa: '/ru:t/', meaning: 'tuyến đường xe chạy', symbol: '/u:/' },
    { id: 'J', word: 'traffic', ipa: "/'træfɪk/", meaning: 'giao thông xe cộ', symbol: '/æ/' },
    { id: 'K', word: 'metro', ipa: "/'metrəʊ/", meaning: 'tàu điện ngầm', symbol: '/e/' },
    { id: 'L', word: 'park', ipa: '/pɑ:k/', meaning: 'bãi đỗ xe', symbol: '/ɑ:/' }
  ],
  exercise2Symbols: [
    { symbol: '/i:/', targetWordId: 'C', word: 'street', explanation: "Âm /i:/ (i dài) có trong từ 'street' /stri:t/" },
    { symbol: '/ɪ/', targetWordId: 'G', word: 'trip', explanation: "Âm /ɪ/ (i ngắn) có trong từ 'trip' /trɪp/" },
    { symbol: '/e/', targetWordId: 'K', word: 'metro', explanation: "Âm /e/ (e ngắn) có ở âm đầu từ 'metro' /'metrəʊ/" },
    { symbol: '/æ/', targetWordId: 'J', word: 'traffic', explanation: "Âm /æ/ (a bẹt) có ở âm đầu từ 'traffic' /'træfɪk/" },
    { symbol: '/ʌ/', targetWordId: 'D', word: 'bus', explanation: "Âm /ʌ/ (á ngắn) có trong từ 'bus' /bʌs/" },
    { symbol: '/ɑ:/', targetWordId: 'L', word: 'park', explanation: "Âm /ɑ:/ (a dài) có trong từ 'park' /pɑ:k/" },
    { symbol: '/ɒ/', targetWordId: 'A', word: 'stop', explanation: "Âm /ɒ/ (o ngắn) có trong từ 'stop' /stɒp/" },
    { symbol: '/ɔ:/', targetWordId: 'F', word: 'port', explanation: "Âm /ɔ:/ (o dài) có trong từ 'port' /pɔ:t/" },
    { symbol: '/ʊ/', targetWordId: 'E', word: 'footpath', explanation: "Âm /ʊ/ (u ngắn) có ở âm đầu từ 'footpath' /'fʊtpɑ:θ/" },
    { symbol: '/u:/', targetWordId: 'I', word: 'route', explanation: "Âm /u:/ (u dài) có trong từ 'route' /ru:t/" },
    { symbol: '/ɜ:/', targetWordId: 'B', word: 'turn', explanation: "Âm /ɜ:/ (ơ dài) có trong từ 'turn' /tɜ:n/" },
    { symbol: '/ə/', targetWordId: 'H', word: 'motor', explanation: "Âm /ə/ (ơ ngắn schwa) ở âm cuối từ 'motor' /'məʊtə/" }
  ],
  exercise3a: {
    id: '3a',
    title: 'Bài 3a: Xếp từ phố phường vào 4 nhà /i:/, /ɪ/, /e/, /æ/',
    instruction: 'Phân loại các phương tiện và biển báo phố xá vào đúng ngôi nhà ngữ âm tương ứng.',
    allWords: [
      { word: 'street', ipa: '/stri:t/', targetSymbol: '/i:/', meaning: 'đường phố' },
      { word: 'traffic', ipa: "/'træfɪk/", targetSymbol: '/æ/', meaning: 'giao thông' },
      { word: 'trip', ipa: '/trɪp/', targetSymbol: '/ɪ/', meaning: 'chuyến đi' },
      { word: 'metro', ipa: "/'metrəʊ/", targetSymbol: '/e/', meaning: 'tàu ngầm' },
      { word: 'wheel', ipa: '/wi:l/', targetSymbol: '/i:/', meaning: 'bánh xe' },
      { word: 'van', ipa: '/væn/', targetSymbol: '/æ/', meaning: 'xe chở khách' },
      { word: 'ship', ipa: '/ʃɪp/', targetSymbol: '/ɪ/', meaning: 'tàu thủy' },
      { word: 'petrol', ipa: "/'petrəl/", targetSymbol: '/e/', meaning: 'xăng xe' },
      { word: 'speed', ipa: '/spi:d/', targetSymbol: '/i:/', meaning: 'tốc độ' },
      { word: 'cab', ipa: '/kæb/', targetSymbol: '/æ/', meaning: 'xe taxi' },
      { word: 'ticket', ipa: "/'tɪkɪt/", targetSymbol: '/ɪ/', meaning: 'vé xe buýt' },
      { word: 'bell', ipa: '/bel/', targetSymbol: '/e/', meaning: 'chuông xe đạp' }
    ],
    houses: [
      {
        symbol: '/i:/',
        soundName: 'Nhà i dài',
        words: ['street', 'wheel', 'speed'],
        color: 'text-emerald-700',
        borderColor: 'border-emerald-300',
        bgLight: 'bg-emerald-50'
      },
      {
        symbol: '/ɪ/',
        soundName: 'Nhà i ngắn',
        words: ['trip', 'ship', 'ticket'],
        color: 'text-sky-700',
        borderColor: 'border-sky-300',
        bgLight: 'bg-sky-50'
      },
      {
        symbol: '/e/',
        soundName: 'Nhà e ngắn',
        words: ['metro', 'petrol', 'bell'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/æ/',
        soundName: 'Nhà a bẹt',
        words: ['traffic', 'van', 'cab'],
        color: 'text-rose-700',
        borderColor: 'border-rose-300',
        bgLight: 'bg-rose-50'
      }
    ]
  },
  exercise3b: {
    id: '3b',
    title: 'Bài 3b: Xếp biển chỉ dẫn giao thông vào 4 nhà /ɒ/, /ɔ:/, /ʊ/, /u:/',
    instruction: 'Đọc to các từ phương tiện và đường xá, kéo thả vào đúng nhóm âm /ɒ/, /ɔ:/, /ʊ/, /u:/.',
    allWords: [
      { word: 'stop', ipa: '/stɒp/', targetSymbol: '/ɒ/', meaning: 'dừng xe' },
      { word: 'port', ipa: '/pɔ:t/', targetSymbol: '/ɔ:/', meaning: 'bến cảng' },
      { word: 'foot', ipa: '/fʊt/', targetSymbol: '/ʊ/', meaning: 'đi bộ' },
      { word: 'route', ipa: '/ru:t/', targetSymbol: '/u:/', meaning: 'tuyến đường' },
      { word: 'block', ipa: '/blɒk/', targetSymbol: '/ɒ/', meaning: 'khu phố' },
      { word: 'corner', ipa: "/'kɔ:nə/", targetSymbol: '/ɔ:/', meaning: 'góc ngã tư' },
      { word: 'lookout', ipa: "/'lʊkaʊt/", targetSymbol: '/ʊ/', meaning: 'quan sát' },
      { word: 'move', ipa: '/mu:v/', targetSymbol: '/u:/', meaning: 'chuyển động' },
      { word: 'dock', ipa: '/dɒk/', targetSymbol: '/ɒ/', meaning: 'bến tàu' },
      { word: 'hood', ipa: '/hʊd/', targetSymbol: '/ʊ/', meaning: 'nắp capô ô tô' },
      { word: 'hall', ipa: '/hɔ:l/', targetSymbol: '/ɔ:/', meaning: 'nhà ga chính' },
      { word: 'scooter', ipa: "/'sku:tə/", targetSymbol: '/u:/', meaning: 'xe tay ga' }
    ],
    houses: [
      {
        symbol: '/ɒ/',
        soundName: 'Nhà o ngắn',
        words: ['stop', 'block', 'dock'],
        color: 'text-amber-700',
        borderColor: 'border-amber-300',
        bgLight: 'bg-amber-50'
      },
      {
        symbol: '/ɔ:/',
        soundName: 'Nhà o dài',
        words: ['port', 'corner', 'hall'],
        color: 'text-purple-700',
        borderColor: 'border-purple-300',
        bgLight: 'bg-purple-50'
      },
      {
        symbol: '/ʊ/',
        soundName: 'Nhà u ngắn',
        words: ['foot', 'lookout', 'hood'],
        color: 'text-teal-700',
        borderColor: 'border-teal-300',
        bgLight: 'bg-teal-50'
      },
      {
        symbol: '/u:/',
        soundName: 'Nhà u dài',
        words: ['route', 'move', 'scooter'],
        color: 'text-indigo-700',
        borderColor: 'border-indigo-300',
        bgLight: 'bg-indigo-50'
      }
    ]
  },
  exercise4: [
    {
      id: 1,
      word: 'street',
      templateIpa: '/str_t/',
      meaning: 'con đường phố',
      choiceA: 'i:',
      choiceB: 'ɪ',
      correctChoice: 'A',
      fullIpa: '/stri:t/',
      explanation: "Từ 'street' có âm /i:/ (i dài mỉm cười), nên ký hiệu đúng là i:."
    },
    {
      id: 2,
      word: 'van',
      templateIpa: '/v_n/',
      meaning: 'xe chở đồ',
      choiceA: 'æ',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/væn/',
      explanation: "Từ 'van' có âm /æ/ (a bẹt mở to miệng), nên chọn æ."
    },
    {
      id: 3,
      word: 'bus',
      templateIpa: '/b_s/',
      meaning: 'xe buýt công cộng',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'B',
      fullIpa: '/bʌs/',
      explanation: "Từ 'bus' có âm /ʌ/ (á ngắn dứt khoát), nên chọn ʌ."
    },
    {
      id: 4,
      word: 'port',
      templateIpa: '/p_t/',
      meaning: 'cảng tàu biển',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'B',
      fullIpa: '/pɔ:t/',
      explanation: "Từ 'port' có âm /ɔ:/ (o dài chu môi), nên chọn ɔ:."
    },
    {
      id: 5,
      word: 'stop',
      templateIpa: '/st_p/',
      meaning: 'dừng xe trước vạch',
      choiceA: 'ɒ',
      choiceB: 'ɔ:',
      correctChoice: 'A',
      fullIpa: '/stɒp/',
      explanation: "Từ 'stop' có âm /ɒ/ (o ngắn dứt khoát), nên chọn ɒ."
    },
    {
      id: 6,
      word: 'park',
      templateIpa: '/p_k/',
      meaning: 'bãi đỗ ô tô',
      choiceA: 'ɑ:',
      choiceB: 'ʌ',
      correctChoice: 'A',
      fullIpa: '/pɑ:k/',
      explanation: "Từ 'park' có âm /ɑ:/ (a dài mở rộng họng), nên chọn ɑ:."
    },
    {
      id: 7,
      word: 'route',
      templateIpa: '/r_t/',
      meaning: 'hành trình di chuyển',
      choiceA: 'u:',
      choiceB: 'ʊ',
      correctChoice: 'A',
      fullIpa: '/ru:t/',
      explanation: "Từ 'route' mang âm /u:/ (u dài chu tròn môi), nên chọn u:."
    },
    {
      id: 8,
      word: 'turn',
      templateIpa: '/t_n/',
      meaning: 'khúc rẽ sang trái',
      choiceA: 'ɜ:',
      choiceB: 'e',
      correctChoice: 'A',
      fullIpa: '/tɜ:n/',
      explanation: "Từ 'turn' mang âm /ɜ:/ (ơ dài cong lưỡi), nên chọn ɜ:."
    }
  ],
  exercise5: [
    {
      id: 1,
      words: [
        { letter: 'A', word: 'street', ipa: '/stri:t/', vowelSound: '/i:/', meaning: 'đường phố' },
        { letter: 'B', word: 'wheel', ipa: '/wi:l/', vowelSound: '/i:/', meaning: 'bánh xe' },
        { letter: 'C', word: 'speed', ipa: '/spi:d/', vowelSound: '/i:/', meaning: 'tốc độ' },
        { letter: 'D', word: 'trip', ipa: '/trɪp/', vowelSound: '/ɪ/', meaning: 'chuyến đi' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'trip' mang âm /ɪ/ (i ngắn). Ba từ street, wheel, speed đều mang âm /i:/ (i dài)."
    },
    {
      id: 2,
      words: [
        { letter: 'A', word: 'van', ipa: '/væn/', vowelSound: '/æ/', meaning: 'xe van' },
        { letter: 'B', word: 'cab', ipa: '/kæb/', vowelSound: '/æ/', meaning: 'taxi' },
        { letter: 'C', word: 'track', ipa: '/træk/', vowelSound: '/æ/', meaning: 'đường ray' },
        { letter: 'D', word: 'metro', ipa: "/'metrəʊ/", vowelSound: '/e/', meaning: 'tàu điện ngầm' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'metro' mang âm /e/ (e ngắn). Ba từ van, cab, track đều mang âm /æ/ (a bẹt)."
    },
    {
      id: 3,
      words: [
        { letter: 'A', word: 'port', ipa: '/pɔ:t/', vowelSound: '/ɔ:/', meaning: 'bến cảng' },
        { letter: 'B', word: 'corner', ipa: "/'kɔ:nə/", vowelSound: '/ɔ:/', meaning: 'góc phố' },
        { letter: 'C', word: 'hall', ipa: '/hɔ:l/', vowelSound: '/ɔ:/', meaning: 'nhà ga' },
        { letter: 'D', word: 'stop', ipa: '/stɒp/', vowelSound: '/ɒ/', meaning: 'dừng lại' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'stop' mang âm /ɒ/ (o ngắn). Ba từ port, corner, hall đều mang âm /ɔ:/ (o dài ngân dài)."
    },
    {
      id: 4,
      words: [
        { letter: 'A', word: 'route', ipa: '/ru:t/', vowelSound: '/u:/', meaning: 'tuyến đường' },
        { letter: 'B', word: 'scooter', ipa: "/'sku:tə/", vowelSound: '/u:/', meaning: 'xe máy' },
        { letter: 'C', word: 'move', ipa: '/mu:v/', vowelSound: '/u:/', meaning: 'chuyển động' },
        { letter: 'D', word: 'foot', ipa: '/fʊt/', vowelSound: '/ʊ/', meaning: 'bộ hành' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'foot' mang âm /ʊ/ (u ngắn). Ba từ route, scooter, move đều mang âm /u:/ (u dài chu môi)."
    },
    {
      id: 5,
      words: [
        { letter: 'A', word: 'bus', ipa: '/bʌs/', vowelSound: '/ʌ/', meaning: 'xe buýt' },
        { letter: 'B', word: 'truck', ipa: '/trʌk/', vowelSound: '/ʌ/', meaning: 'xe tải' },
        { letter: 'C', word: 'subway', ipa: "/'sʌbweɪ/", vowelSound: '/ʌ/', meaning: 'tàu điện ngầm' },
        { letter: 'D', word: 'park', ipa: '/pɑ:k/', vowelSound: '/ɑ:/', meaning: 'bãi đỗ xe' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'park' mang âm /ɑ:/ (a dài). Ba từ bus, truck, subway đều mang âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 6,
      words: [
        { letter: 'A', word: 'turn', ipa: '/tɜ:n/', vowelSound: '/ɜ:/', meaning: 'rẽ hướng' },
        { letter: 'B', word: 'circle', ipa: "/'sɜ:kl/", vowelSound: '/ɜ:/', meaning: 'vòng xuyến' },
        { letter: 'C', word: 'curve', ipa: '/kɜ:v/', vowelSound: '/ɜ:/', meaning: 'đoạn cua' },
        { letter: 'D', word: 'block', ipa: '/blɒk/', vowelSound: '/ɒ/', meaning: 'dãy nhà' }
      ],
      correctChoice: 'D',
      explanation: "Đáp án đúng là D: 'block' mang âm /ɒ/ (o ngắn). Ba từ turn, circle, curve đều mang âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ],
  exercise6: [
    {
      id: 1,
      spokenWord: 'street',
      wordMeaning: 'con đường phố tấp nập',
      fullIpa: '/stri:t/',
      targetSymbol: '/i:/',
      choiceA: '/i:/',
      choiceB: '/ɪ/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'street' phát âm là /stri:t/ mang nguyên âm /i:/ (i dài mỉm cười)."
    },
    {
      id: 2,
      spokenWord: 'van',
      wordMeaning: 'chiếc xe van chở gia đình',
      fullIpa: '/væn/',
      targetSymbol: '/æ/',
      choiceA: '/æ/',
      choiceB: '/e/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'van' phát âm là /væn/ mang nguyên âm /æ/ (a bẹt mở rộng hàm)."
    },
    {
      id: 3,
      spokenWord: 'bus',
      wordMeaning: 'xe buýt đón học sinh',
      fullIpa: '/bʌs/',
      targetSymbol: '/ʌ/',
      choiceA: '/ʌ/',
      choiceB: '/ɑ:/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'bus' phát âm là /bʌs/ mang nguyên âm /ʌ/ (á ngắn dứt khoát)."
    },
    {
      id: 4,
      spokenWord: 'port',
      wordMeaning: 'bến cảng sầm uất',
      fullIpa: '/pɔ:t/',
      targetSymbol: '/ɔ:/',
      choiceA: '/ɔ:/',
      choiceB: '/ɒ/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'port' phát âm là /pɔ:t/ mang nguyên âm /ɔ:/ (o dài chu môi ngân dài)."
    },
    {
      id: 5,
      spokenWord: 'stop',
      wordMeaning: 'biển báo hiệu lệnh dừng',
      fullIpa: '/stɒp/',
      targetSymbol: '/ɒ/',
      choiceA: '/ɒ/',
      choiceB: '/ɔ:/',
      choiceC: '/ʌ/',
      correctChoice: 'A',
      explanation: "Từ 'stop' phát âm là /stɒp/ mang nguyên âm /ɒ/ (o ngắn dứt khoát)."
    },
    {
      id: 6,
      spokenWord: 'park',
      wordMeaning: 'đỗ xe an toàn vào ô',
      fullIpa: '/pɑ:k/',
      targetSymbol: '/ɑ:/',
      choiceA: '/ɑ:/',
      choiceB: '/ʌ/',
      choiceC: '/æ/',
      correctChoice: 'A',
      explanation: "Từ 'park' phát âm là /pɑ:k/ mang nguyên âm /ɑ:/ (a dài mở sâu vòm họng)."
    },
    {
      id: 7,
      spokenWord: 'route',
      wordMeaning: 'lộ trình tuyến xe chạy',
      fullIpa: '/ru:t/',
      targetSymbol: '/u:/',
      choiceA: '/u:/',
      choiceB: '/ʊ/',
      choiceC: '/ɔ:/',
      correctChoice: 'A',
      explanation: "Từ 'route' phát âm là /ru:t/ mang nguyên âm /u:/ (u dài chu tròn môi)."
    },
    {
      id: 8,
      spokenWord: 'turn',
      wordMeaning: 'chuyển hướng lái xe',
      fullIpa: '/tɜ:n/',
      targetSymbol: '/ɜ:/',
      choiceA: '/ɜ:/',
      choiceB: '/ɔ:/',
      choiceC: '/e/',
      correctChoice: 'A',
      explanation: "Từ 'turn' phát âm là /tɜ:n/ mang nguyên âm /ɜ:/ (ơ dài cong lưỡi)."
    }
  ]
};
