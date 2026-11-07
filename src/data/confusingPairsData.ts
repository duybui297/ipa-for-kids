export interface MinimalPairItem {
  wordA: string;
  ipaA: string;
  meaningA: string;
  emojiA: string;
  wordB: string;
  ipaB: string;
  meaningB: string;
  emojiB: string;
}

export interface ConfusingPair {
  id: string;
  title: string;
  group: 'vowels' | 'voiced_voiceless' | 'fricatives_affricates';
  groupNameVi: string;
  phonemeA: {
    symbol: string;
    name: string;
    tag: string;
    tagColor: string; // e.g. amber, teal, purple, red
    mouthSummary: string;
    tongueSummary: string;
    vocalVibration: string;
    soundLength: string;
  };
  phonemeB: {
    symbol: string;
    name: string;
    tag: string;
    tagColor: string;
    mouthSummary: string;
    tongueSummary: string;
    vocalVibration: string;
    soundLength: string;
  };
  contrastRuleVi: string;
  vietnameseLearnerTrap: string;
  pairs: MinimalPairItem[];
}

export const CONFUSING_PAIRS_DATA: ConfusingPair[] = [
  // ==========================================
  // NHÓM 1: CÁC CẶP NGUYÊN ÂM DỄ NHẦM (VOWELS)
  // ==========================================
  {
    id: 'pair_i_long_short',
    title: 'Cặp 1: /iː/ vs /ɪ/ (i dài cười tươi vs i ngắn thả lỏng)',
    group: 'vowels',
    groupNameVi: 'Cặp Nguyên Âm',
    phonemeA: {
      symbol: 'iː',
      name: 'Âm I Dài',
      tag: 'DÀI (1.5s)',
      tagColor: 'amber',
      mouthSummary: 'Căng khóe môi sang hai bên tối đa như đang cười thật tươi ("Say cheese").',
      tongueSummary: 'Thân lưỡi nâng rất cao sát vòm miệng trên.',
      vocalVibration: 'Cổ họng rung êm, âm ngân dài trong trẻo.',
      soundLength: 'Kéo dài ~1.5 giây.',
    },
    phonemeB: {
      symbol: 'ɪ',
      name: 'Âm I Ngắn',
      tag: 'NGẮN (<0.5s)',
      tagColor: 'teal',
      mouthSummary: 'Hai môi hơi hé nhẹ, cơ mặt và môi thả lỏng hoàn toàn (không cười dẹt).',
      tongueSummary: 'Lưỡi hạ thấp hơn /iː/ một chút, thư giãn.',
      vocalVibration: 'Cổ họng rung nhẹ và ngắt âm ngay lập tức.',
      soundLength: 'Cụt lẹ dưới 0.5 giây.',
    },
    contrastRuleVi: 'Quy tắc vàng: Khi gặp /iː/, bé phải "cười toe toét" và ngân dài; còn với /ɪ/, hãy "thả lỏng mặt" và phát âm nhanh như búng tay!',
    vietnameseLearnerTrap: 'Bé hay đọc /ɪ/ giống hệt chữ "i" tiếng Việt hoặc kéo dài âm làm người nước ngoài nghe nhầm ship thành sheep.',
    pairs: [
      { wordA: 'sheep', ipaA: '/ʃiːp/', meaningA: 'Con cừu lông xù', emojiA: '🐑', wordB: 'ship', ipaB: '/ʃɪp/', meaningB: 'Tàu thủy vượt sóng', emojiB: '🚢' },
      { wordA: 'seat', ipaA: '/siːt/', meaningA: 'Ghế ngồi êm ái', emojiA: '💺', wordB: 'sit', ipaB: '/sɪt/', meaningB: 'Ngồi xuống sàn', emojiB: '🪑' },
      { wordA: 'sleep', ipaA: '/sliːp/', meaningA: 'Ngủ say giấc', emojiA: '😴', wordB: 'slip', ipaB: '/slɪp/', meaningB: 'Trượt té vỏ chuối', emojiB: '🍌' },
      { wordA: 'eat', ipaA: '/iːt/', meaningA: 'Ăn đồ ăn ngon', emojiA: '🍎', wordB: 'it', ipaB: '/ɪt/', meaningB: 'Nó / Cái đó', emojiB: '📦' },
      { wordA: 'feet', ipaA: '/fiːt/', meaningA: 'Đôi bàn chân', emojiA: '👣', wordB: 'fit', ipaB: '/fɪt/', meaningB: 'Vừa vặn cỡ áo', emojiB: '👕' },
      { wordA: 'peach', ipaA: '/piːtʃ/', meaningA: 'Quả đào mọng nước', emojiA: '🍑', wordB: 'pitch', ipaB: '/pɪtʃ/', meaningB: 'Sân bóng đá', emojiB: '⚽' },
      { wordA: 'leave', ipaA: '/liːv/', meaningA: 'Rời đi / Lá cây', emojiA: '🍃', wordB: 'live', ipaB: '/lɪv/', meaningB: 'Sống vui vẻ', emojiB: '🏡' },
    ],
  },
  {
    id: 'pair_u_long_short',
    title: 'Cặp 2: /uː/ vs /ʊ/ (u dài chu tròn chặt vs u ngắn thả lỏng)',
    group: 'vowels',
    groupNameVi: 'Cặp Nguyên Âm',
    phonemeA: {
      symbol: 'uː',
      name: 'Âm U Dài',
      tag: 'DÀI (1.5s)',
      tagColor: 'amber',
      mouthSummary: 'Môi chu tròn thật nhỏ và nhô hẳn ra trước như đang hút trà sữa bằng ống hút.',
      tongueSummary: 'Cuống lưỡi nâng cao về phía sau vòm họng.',
      vocalVibration: 'Dây thanh rung âm trầm "oooo" ngân vang.',
      soundLength: 'Kéo dài ~1.5 giây.',
    },
    phonemeB: {
      symbol: 'ʊ',
      name: 'Âm U Ngắn',
      tag: 'NGẮN (<0.5s)',
      tagColor: 'teal',
      mouthSummary: 'Môi chỉ hơi tròn nhẹ, cơ mặt và môi thả lỏng tự nhiên (không gồng chu chặt).',
      tongueSummary: 'Lưỡi lùi nhẹ về sau nhưng thư giãn.',
      vocalVibration: 'Bật nhẹ từ cổ họng trong chớp mắt.',
      soundLength: 'Rất ngắn, ngắt gọn.',
    },
    contrastRuleVi: 'Quy tắc vàng: /uː/ chu môi nhỏ như huýt sáo ngân dài; /ʊ/ chỉ tròn môi hờ và ngắt hơi dứt khoát!',
    vietnameseLearnerTrap: 'Bé hay đọc /ʊ/ thành âm "u" tiếng Việt kéo dài, khiến từ "foot" (bàn chân) nghe nhầm thành "food" (thức ăn).',
    pairs: [
      { wordA: 'food', ipaA: '/fuːd/', meaningA: 'Đồ ăn thơm ngon', emojiA: '🍕', wordB: 'foot', ipaB: '/fʊt/', meaningB: 'Bàn chân nhỏ', emojiB: '🦶' },
      { wordA: 'pool', ipaA: '/puːl/', meaningA: 'Hồ bơi trong xanh', emojiA: '🏊', wordB: 'pull', ipaB: '/pʊl/', meaningB: 'Kéo cửa vào', emojiB: '🚪' },
      { wordA: 'fool', ipaA: '/fuːl/', meaningA: 'Ngốc nghếch', emojiA: '🤪', wordB: 'full', ipaB: '/fʊl/', meaningB: 'Ăn no căng bụng', emojiB: '🥣' },
      { wordA: 'suit', ipaA: '/suːt/', meaningA: 'Bộ quần áo vest', emojiA: '👔', wordB: 'soot', ipaB: '/sʊt/', meaningB: 'Bồ hóng than', emojiB: '🪵' },
      { wordA: 'Luke', ipaA: '/luːk/', meaningA: 'Tên bạn Luke', emojiA: '👦', wordB: 'look', ipaB: '/lʊk/', meaningB: 'Nhìn ngắm tranh', emojiB: '👀' },
    ],
  },
  {
    id: 'pair_ae_vs_e',
    title: 'Cặp 3: /æ/ vs /e/ (a bẹt mở to hạ cằm vs e ngắn vừa phải)',
    group: 'vowels',
    groupNameVi: 'Cặp Nguyên Âm',
    phonemeA: {
      symbol: 'æ',
      name: 'Âm A Bẹt (Mỹ)',
      tag: 'MỞ TO HẾT CỠ',
      tagColor: 'teal',
      mouthSummary: 'Cằm hạ thấp sâu, miệng mở to tối đa cả chiều dọc lẫn chiều ngang, cười toe toét.',
      tongueSummary: 'Đầu lưỡi đè sát xuống sàn miệng sau răng cửa dưới.',
      vocalVibration: 'Âm vang dội, có độ chói bẹt đặc trưng của giọng Mỹ.',
      soundLength: 'Ngân vừa phải ~0.8s.',
    },
    phonemeB: {
      symbol: 'e',
      name: 'Âm E Ngắn',
      tag: 'MỞ VỪA PHẢI',
      tagColor: 'teal',
      mouthSummary: 'Miệng mở vừa phải, hai khóe môi hơi hé nhẹ nhàng.',
      tongueSummary: 'Thân lưỡi nằm ở giữa miệng, không đè quá sâu.',
      vocalVibration: 'Âm phát ra êm ái, nhẹ nhàng.',
      soundLength: 'Ngắn gọn ~0.5s.',
    },
    contrastRuleVi: 'Quy tắc vàng: Để đọc chuẩn /æ/, bé phải hạ hàm như đang ngáp kết hợp cười; còn /e/ chỉ cần mở hé miệng tự nhiên!',
    vietnameseLearnerTrap: 'Bé hay đọc "man" (người đàn ông) và "men" (những người đàn ông) giống hệt nhau vì không hạ cằm khi đọc /æ/.',
    pairs: [
      { wordA: 'man', ipaA: '/mæn/', meaningA: 'Một người đàn ông', emojiA: '👨', wordB: 'men', ipaB: '/men/', meaningB: 'Nhiều người đàn ông', emojiB: '👥' },
      { wordA: 'bad', ipaA: '/bæd/', meaningA: 'Xấu / Không tốt', emojiA: '👎', wordB: 'bed', ipaB: '/bed/', meaningB: 'Chiếc giường êm', emojiB: '🛏️' },
      { wordA: 'pan', ipaA: '/pæn/', meaningA: 'Chiếc chảo rán', emojiA: '🍳', wordB: 'pen', ipaB: '/pen/', meaningB: 'Chiếc bút viết', emojiB: '🖊️' },
      { wordA: 'bat', ipaA: '/bæt/', meaningA: 'Con dơi đêm', emojiA: '🦇', wordB: 'bet', ipaB: '/bet/', meaningB: 'Cá cược vui', emojiB: '🎲' },
      { wordA: 'cat', ipaA: '/kæt/', meaningA: 'Con mèo xinh', emojiA: '🐱', wordB: 'ketch', ipaB: '/ketʃ/', meaningB: 'Thuyền nhỏ', emojiB: '⛵' },
    ],
  },
  {
    id: 'pair_a_long_wedge',
    title: 'Cặp 4: /ɑː/ vs /ʌ/ (a dài mở rộng họng vs á ngắn giật cổ)',
    group: 'vowels',
    groupNameVi: 'Cặp Nguyên Âm',
    phonemeA: {
      symbol: 'ɑː',
      name: 'Âm A Dài',
      tag: 'DÀI (1.5s)',
      tagColor: 'amber',
      mouthSummary: 'Miệng mở to hình bầu dục, cuống họng mở rộng như khi bác sĩ bảo "Aaaa".',
      tongueSummary: 'Lưỡi hạ thấp tối đa về phía sau đáy miệng.',
      vocalVibration: 'Âm thanh trầm ấm ngân dài từ sâu trong họng.',
      soundLength: 'Dài ~1.5 giây.',
    },
    phonemeB: {
      symbol: 'ʌ',
      name: 'Âm Á Ngắn (Cúp)',
      tag: 'NGẮN BẬT HỌNG',
      tagColor: 'teal',
      mouthSummary: 'Miệng mở vừa, không tròn môi, cơ mặt thư giãn.',
      tongueSummary: 'Lưỡi ở vị trí trung tâm miệng, hơi nâng nhẹ.',
      vocalVibration: 'Âm thanh bật nhanh từ thanh quản như tiếng "á" nhẹ.',
      soundLength: 'Ngắn giật <0.4s.',
    },
    contrastRuleVi: 'Quy tắc vàng: /ɑː/ mở sâu trong cuống họng ngân dài "aaaa"; /ʌ/ bật nhanh từ cổ họng như bị ai véo nhẹ "á"!',
    vietnameseLearnerTrap: 'Nhầm lẫn giữa "heart" (trái tim) và "hut" (túp lều), hoặc "dark" (tối tăm) và "duck" (con vịt).',
    pairs: [
      { wordA: 'heart', ipaA: '/hɑːrt/', meaningA: 'Trái tim yêu thương', emojiA: '❤️', wordB: 'hut', ipaB: '/hʌt/', meaningB: 'Túp lều nhỏ', emojiB: '🛖' },
      { wordA: 'dark', ipaA: '/dɑːrk/', meaningA: 'Bóng tối', emojiA: '🌑', wordB: 'duck', ipaB: '/dʌk/', meaningB: 'Chú vịt vàng', emojiB: '🦆' },
      { wordA: 'barn', ipaA: '/bɑːrn/', meaningA: 'Nhà kho thóc', emojiA: '🌾', wordB: 'bun', ipaB: '/bʌn/', meaningB: 'Bánh bao tròn', emojiB: '🥟' },
      { wordA: 'calm', ipaA: '/kɑːm/', meaningA: 'Bình tĩnh', emojiA: '🧘', wordB: 'come', ipaB: '/kʌm/', meaningB: 'Đến đây nào', emojiB: '👋' },
      { wordA: 'cart', ipaA: '/kɑːrt/', meaningA: 'Xe đẩy siêu thị', emojiA: '🛒', wordB: 'cut', ipaB: '/kʌt/', meaningB: 'Cắt tỉa kéo', emojiB: '✂️' },
    ],
  },

  // ==========================================
  // NHÓM 2: VÔ THANH VS HỮU THANH (VOICED VS VOICELESS)
  // ==========================================
  {
    id: 'pair_p_vs_b',
    title: 'Cặp 5: /p/ vs /b/ (Mím môi bật gió vs Mím môi rung họng)',
    group: 'voiced_voiceless',
    groupNameVi: 'Cặp Vô Thanh & Hữu Thanh',
    phonemeA: {
      symbol: 'p',
      name: 'Âm /p/ (Vô thanh)',
      tag: 'BẬT HƠI GIÓ',
      tagColor: 'slate',
      mouthSummary: 'Mím chặt hai môi lại chặn hơi rồi bật mở mạnh, tạo luồng gió mát trước miệng.',
      tongueSummary: 'Lưỡi nằm nghỉ tự nhiên.',
      vocalVibration: 'Cổ họng KHÔNG rung (đặt tay lên họng chỉ thấy mát ở lòng bàn tay).',
      soundLength: 'Bật dứt khoát / Chặn hơi [p̚].',
    },
    phonemeB: {
      symbol: 'b',
      name: 'Âm /b/ (Hữu thanh)',
      tag: 'RUNG THANH QUẢN',
      tagColor: 'blue',
      mouthSummary: 'Mím hai môi lại rồi mở nhẹ, cổ họng rung lên tạo âm trầm.',
      tongueSummary: 'Lưỡi thư giãn.',
      vocalVibration: 'Cổ họng RUNG RÕ RỆT (cảm giác cổ họng rung tê tê).',
      soundLength: 'Âm trầm hữu thanh.',
    },
    contrastRuleVi: 'Quy tắc vàng: Để tờ giấy trước miệng, đọc /p/ tờ giấy sẽ bay phấp phới; đọc /b/ tờ giấy đứng yên và cổ họng rung!',
    vietnameseLearnerTrap: 'Đọc /p/ quá yếu thành /b/, khiến người nghe nhầm "pig" (con heo) thành "big" (to lớn) hay "cap" thành "cab".',
    pairs: [
      { wordA: 'pig', ipaA: '/pɪɡ/', meaningA: 'Chú heo hồng', emojiA: '🐷', wordB: 'big', ipaB: '/bɪɡ/', meaningB: 'To lớn khổng lồ', emojiB: '🐘' },
      { wordA: 'pen', ipaA: '/pen/', meaningA: 'Cây bút viết', emojiA: '🖊️', wordB: 'Ben', ipaB: '/ben/', meaningB: 'Bạn Ben', emojiB: '👦' },
      { wordA: 'pat', ipaA: '/pæt/', meaningA: 'Vỗ về nhẹ', emojiA: '👋', wordB: 'bat', ipaB: '/bæt/', meaningB: 'Con dơi bay', emojiB: '🦇' },
      { wordA: 'cap', ipaA: '/kæp/', meaningA: 'Mũ lưỡi trai', emojiA: '🧢', wordB: 'cab', ipaB: '/kæb/', meaningB: 'Xe taxi', emojiB: '🚕' },
      { wordA: 'rope', ipaA: '/roʊp/', meaningA: 'Dây thừng kéo', emojiA: '🪢', wordB: 'robe', ipaB: '/roʊb/', meaningB: 'Áo choàng ngủ', emojiB: '👘' },
    ],
  },
  {
    id: 'pair_t_vs_d',
    title: 'Cặp 6: /t/ vs /d/ (Đầu lưỡi nướu bật gió vs Đầu lưỡi rung giọng)',
    group: 'voiced_voiceless',
    groupNameVi: 'Cặp Vô Thanh & Hữu Thanh',
    phonemeA: {
      symbol: 't',
      name: 'Âm /t/ (Vô thanh)',
      tag: 'BẬT GIÓ / CHẶN HƠI',
      tagColor: 'slate',
      mouthSummary: 'Đầu lưỡi dán chặt nướu răng trên rồi bật luồng gió mát xì nhẹ. Ở cuối từ thường chặn hơi [t̚]!',
      tongueSummary: 'Đầu lưỡi tiếp xúc nướu răng cửa trên (Alveolar ridge).',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Bật gió sắc bén / Ngắt hơi.',
    },
    phonemeB: {
      symbol: 'd',
      name: 'Âm /d/ (Hữu thanh)',
      tag: 'RUNG THANH QUẢN',
      tagColor: 'blue',
      mouthSummary: 'Đầu lưỡi chạm nướu trên rồi hạ xuống nhẹ, cổ họng rung lên tiếng trầm.',
      tongueSummary: 'Đầu lưỡi nảy nhẹ khỏi nướu răng trên.',
      vocalVibration: 'Cổ họng RUNG RÕ RỆT.',
      soundLength: 'Âm trầm có tiếng vang.',
    },
    contrastRuleVi: 'Quy tắc vàng: Khi ở cuối từ, /t/ chặn hơi hoặc xì gió không rung (cat); còn /d/ luôn rung cổ họng nhẹ (bed)!',
    vietnameseLearnerTrap: 'Bé hay đọc /d/ cuối từ thành /t/ (đọc "red" thành "ret"), làm biến đổi nghĩa của câu.',
    pairs: [
      { wordA: 'tie', ipaA: '/taɪ/', meaningA: 'Cà vạt chỉn chu', emojiA: '👔', wordB: 'die', ipaB: '/daɪ/', meaningB: 'Xúc xắc / Mất', emojiB: '🎲' },
      { wordA: 'ten', ipaA: '/ten/', meaningA: 'Số mười', emojiA: '🔟', wordB: 'den', ipaB: '/den/', meaningB: 'Hang thú', emojiB: '🕳️' },
      { wordA: 'cat', ipaA: '/kæt/', meaningA: 'Bé mèo xinh', emojiA: '🐱', wordB: 'cad', ipaB: '/kæd/', meaningB: 'Người thô lỗ', emojiB: '😠' },
      { wordA: 'bat', ipaA: '/bæt/', meaningA: 'Gậy bóng chày', emojiA: '🏏', wordB: 'bad', ipaB: '/bæd/', meaningB: 'Không ngoan', emojiB: '👎' },
      { wordA: 'write', ipaA: '/raɪt/', meaningA: 'Viết bài vở', emojiA: '✍️', wordB: 'ride', ipaB: '/raɪd/', meaningB: 'Cưỡi xe đạp', emojiB: '🚴' },
    ],
  },
  {
    id: 'pair_k_vs_g',
    title: 'Cặp 7: /k/ vs /g/ (Cuống lưỡi bật gió vs Cuống họng rung)',
    group: 'voiced_voiceless',
    groupNameVi: 'Cặp Vô Thanh & Hữu Thanh',
    phonemeA: {
      symbol: 'k',
      name: 'Âm /k/ (Vô thanh)',
      tag: 'BẬT HỌNG GIÓ',
      tagColor: 'slate',
      mouthSummary: 'Gốc lưỡi nâng cao chạm vòm họng mềm chặn hơi rồi bật dứt khoát luồng gió ra.',
      tongueSummary: 'Cuống lưỡi phía trong họng nâng chạm vòm mềm.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Bật hơi dứt khoát / Chặn hơi [k̚].',
    },
    phonemeB: {
      symbol: 'g',
      name: 'Âm /g/ (Hữu thanh)',
      tag: 'RUNG THANH QUẢN',
      tagColor: 'blue',
      mouthSummary: 'Gốc lưỡi chạm vòm mềm rồi hạ, cổ họng rung lên tạo âm "g".',
      tongueSummary: 'Cuống lưỡi hạ nhanh sau khi rung.',
      vocalVibration: 'Cổ họng RUNG MẠNH.',
      soundLength: 'Âm trầm vang họng.',
    },
    contrastRuleVi: 'Quy tắc vàng: Đặt tay lên cổ họng: phát âm /k/ họng im lìm chỉ có gió; phát âm /g/ họng rung mạnh!',
    vietnameseLearnerTrap: 'Bé hay đọc "back" (lưng) thành "bag" (chiếc cặp) hoặc ngược lại do không kiểm soát độ rung cổ họng.',
    pairs: [
      { wordA: 'came', ipaA: '/keɪm/', meaningA: 'Đã đến', emojiA: '🏃', wordB: 'game', ipaB: '/ɡeɪm/', meaningB: 'Trò chơi vui', emojiB: '🎮' },
      { wordA: 'coat', ipaA: '/koʊt/', meaningA: 'Áo khoác ấm', emojiA: '🧥', wordB: 'goat', ipaB: '/ɡoʊt/', meaningB: 'Chú dê núi', emojiB: '🐐' },
      { wordA: 'curl', ipaA: '/kɝːl/', meaningA: 'Tóc xoăn', emojiA: '👩‍🦱', wordB: 'girl', ipaB: '/ɡɝːl/', meaningB: 'Bé gái xinh', emojiB: '👧' },
      { wordA: 'back', ipaA: '/bæk/', meaningA: 'Phía sau lưng', emojiA: '🔙', wordB: 'bag', ipaB: '/bæɡ/', meaningB: 'Chiếc cặp sách', emojiB: '🎒' },
      { wordA: 'lock', ipaA: '/lɑːk/', meaningA: 'Ổ khóa cửa', emojiA: '🔒', wordB: 'log', ipaB: '/lɑːɡ/', meaningB: 'Khúc gỗ rừng', emojiB: '🪵' },
    ],
  },
  {
    id: 'pair_s_vs_z',
    title: 'Cặp 8: /s/ vs /z/ (Xì gió vô thanh vs Xì rung tiếng con ong)',
    group: 'voiced_voiceless',
    groupNameVi: 'Cặp Vô Thanh & Hữu Thanh',
    phonemeA: {
      symbol: 's',
      name: 'Âm /s/ (Vô thanh)',
      tag: 'XÌ GIÓ MÁT',
      tagColor: 'slate',
      mouthSummary: 'Hai hàm răng khép sát, đầu lưỡi sát nướu trên, thổi luồng gió mát xì xì sắc bén.',
      tongueSummary: 'Đầu lưỡi để ngay sau chân răng cửa trên.',
      vocalVibration: 'Cổ họng KHÔNG rung (chỉ có tiếng xì gió).',
      soundLength: 'Xì gió liên tục.',
    },
    phonemeB: {
      symbol: 'z',
      name: 'Âm /z/ (Hữu thanh)',
      tag: 'RUNG TIẾNG ONG',
      tagColor: 'blue',
      mouthSummary: 'Vị trí răng và môi giống hệt /s/ nhưng cổ họng RUNG lên vo ve "zzzzz".',
      tongueSummary: 'Đầu lưỡi sau chân răng trên, cảm giác rung.',
      vocalVibration: 'Cổ họng RUNG MẠNH RÕ RỆT.',
      soundLength: 'Rung liên tục như chú ong.',
    },
    contrastRuleVi: 'Quy tắc vàng: Cực kỳ quan trọng khi chia số nhiều & thì hiện tại! Âm /s/ chỉ có gió mát xì xì; âm /z/ rung vo ve như chú ong chăm chỉ!',
    vietnameseLearnerTrap: 'Bé hay đọc tất cả các âm cuối "s" thành gió /s/ mà quên rằng 80% từ thực tế trong tiếng Anh kết thúc bằng âm rung /z/ (như eyes, nose, bees).',
    pairs: [
      { wordA: 'bus', ipaA: '/bʌs/', meaningA: 'Xe buýt trường', emojiA: '🚌', wordB: 'buzz', ipaB: '/bʌz/', meaningB: 'Tiếng ong kêu', emojiB: '🐝' },
      { wordA: 'sip', ipaA: '/sɪp/', meaningA: 'Nhấp ngụm nước', emojiA: '🥤', wordB: 'zip', ipaB: '/zɪp/', meaningB: 'Kéo khóa áo', emojiB: '🤐' },
      { wordA: 'sue', ipaA: '/suː/', meaningA: 'Kiện tụng', emojiA: '⚖️', wordB: 'zoo', ipaB: '/zuː/', meaningB: 'Sở thú vui', emojiB: '🦁' },
      { wordA: 'ice', ipaA: '/aɪs/', meaningA: 'Viên đá lạnh', emojiA: '🧊', wordB: 'eyes', ipaB: '/aɪz/', meaningB: 'Đôi mắt sáng', emojiB: '👀' },
      { wordA: 'price', ipaA: '/praɪs/', meaningA: 'Giá tiền', emojiA: '🏷️', wordB: 'prize', ipaB: '/praɪz/', meaningB: 'Giải thưởng cúp', emojiB: '🏆' },
    ],
  },

  // ==========================================
  // NHÓM 3: ÂM CHU MÔI & ÂM THÈ LƯỠI (SPECIAL MOUTH SHAPES)
  // ==========================================
  {
    id: 'pair_sh_vs_ch',
    title: 'Cặp 9: /ʃ/ vs /tʃ/ (Chu môi suỵt gió êm vs Chu môi bật hơi tàu hỏa)',
    group: 'fricatives_affricates',
    groupNameVi: 'Cặp Chu Môi & Bật Hơi',
    phonemeA: {
      symbol: 'ʃ',
      name: 'Âm /ʃ/ (Suỵt khẽ)',
      tag: 'GIÓ ÊM LIÊN TỤC',
      tagColor: 'purple',
      mouthSummary: 'Chu tròn môi về phía trước, thổi luồng gió êm ru như cử chỉ "Suỵt! Trật tự nào!".',
      tongueSummary: 'Thân lưỡi nâng cao về phía vòm họng.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Thổi gió dài liên tục "shhhhh".',
    },
    phonemeB: {
      symbol: 'tʃ',
      name: 'Âm /tʃ/ (Bật hơi)',
      tag: 'BẬT NỔ DỨT KHOÁT',
      tagColor: 'rose',
      mouthSummary: 'Chu tròn môi, đầu lưỡi chạm nướu trên chặn hơi rồi BẬT MẠNH tiếng "ch" dứt khoát.',
      tongueSummary: 'Đầu lưỡi chạm nướu rồi nảy nhanh.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Âm nổ bật dứt khoát như tiếng tàu hỏa "xình xịch"!',
    },
    contrastRuleVi: 'Quy tắc vàng: /ʃ/ là luồng gió trôi êm liên tục không ngắt quãng; còn /tʃ/ có giai đoạn chặn đầu lưỡi rồi nổ bật ra!',
    vietnameseLearnerTrap: 'Bé hay đọc "wash" (rửa) và "watch" (đồng hồ) giống hệt nhau, hoặc đọc "ship" và "chip" không phân biệt được.',
    pairs: [
      { wordA: 'ship', ipaA: '/ʃɪp/', meaningA: 'Tàu thủy to', emojiA: '🚢', wordB: 'chip', ipaB: '/tʃɪp/', meaningB: 'Miếng khoai tây chiên', emojiB: '🍟' },
      { wordA: 'shoe', ipaA: '/ʃuː/', meaningA: 'Chiếc giày', emojiA: '👟', wordB: 'chew', ipaB: '/tʃuː/', meaningB: 'Nhai kẹo ngon', emojiB: '🍬' },
      { wordA: 'share', ipaA: '/ʃer/', meaningA: 'Chia sẻ quà', emojiA: '🤝', wordB: 'chair', ipaB: '/tʃer/', meaningB: 'Chiếc ghế ngồi', emojiB: '🪑' },
      { wordA: 'wash', ipaA: '/wɑːʃ/', meaningA: 'Rửa tay sạch', emojiA: '🧼', wordB: 'watch', ipaB: '/wɑːtʃ/', meaningB: 'Đồng hồ đeo tay', emojiB: '⌚' },
      { wordA: 'wish', ipaA: '/wɪʃ/', meaningA: 'Điều ước sao', emojiA: '🌠', wordB: 'witch', ipaB: '/wɪtʃ/', meaningB: 'Phù thủy bay', emojiB: '🧙‍♀️' },
    ],
  },
  {
    id: 'pair_th_vs_s',
    title: 'Cặp 10: /θ/ vs /s/ (Thè lưỡi kẹp răng vs Khép răng xì gió)',
    group: 'fricatives_affricates',
    groupNameVi: 'Cặp Thè Lưỡi & Xì Gió',
    phonemeA: {
      symbol: 'θ',
      name: 'Âm /θ/ (Thè lưỡi)',
      tag: 'KẸP LƯỠI GIỮA RĂNG',
      tagColor: 'purple',
      mouthSummary: 'Đầu lưỡi thò nhẹ ra ngoài kẹp giữa hai hàm răng cửa, thổi luồng hơi qua kẽ lưỡi.',
      tongueSummary: 'Răng trên và dưới chạm nhẹ bề mặt đầu lưỡi.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Thổi hơi êm dịu.',
    },
    phonemeB: {
      symbol: 's',
      name: 'Âm /s/ (Xì gió)',
      tag: 'RĂNG KHÉP KÍN',
      tagColor: 'teal',
      mouthSummary: 'Hai hàm răng khép kín gần nhau, lưỡi thụt hoàn toàn vào trong miệng.',
      tongueSummary: 'Đầu lưỡi để sau chân răng cửa trên.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Tiếng xì gió sắc bén.',
    },
    contrastRuleVi: 'Quy tắc vàng: Nhìn vào gương: /θ/ phải thấy đầu lưỡi thò ra giữa 2 hàm răng; /s/ lưỡi phải giấu kín trong khoang miệng!',
    vietnameseLearnerTrap: 'Bé hay đọc "thank" (cảm ơn) thành "sank" (chìm tàu) hay "think" (suy nghĩ) thành "sink" (bồn rửa) vì không chịu thè lưỡi.',
    pairs: [
      { wordA: 'thank', ipaA: '/θæŋk/', meaningA: 'Cảm ơn bạn', emojiA: '🙏', wordB: 'sank', ipaB: '/sæŋk/', meaningB: 'Tàu bị chìm', emojiB: '⚓' },
      { wordA: 'think', ipaA: '/θɪŋk/', meaningA: 'Suy nghĩ thông minh', emojiA: '🤔', wordB: 'sink', ipaB: '/sɪŋk/', meaningB: 'Bồn rửa tay', emojiB: '🚰' },
      { wordA: 'teeth', ipaA: '/tiːθ/', meaningA: 'Hàm răng trắng', emojiA: '🦷', wordB: 'tease', ipaB: '/tiːz/', meaningB: 'Trêu chọc đùa', emojiB: '😜' },
      { wordA: 'mouth', ipaA: '/maʊθ/', meaningA: 'Chiếc miệng xinh', emojiA: '👄', wordB: 'mouse', ipaB: '/maʊs/', meaningB: 'Chú chuột nhắt', emojiB: '🐭' },
      { wordA: 'thick', ipaA: '/θɪk/', meaningA: 'Quyển sách dày', emojiA: '📖', wordB: 'sick', ipaB: '/sɪk/', meaningB: 'Bị ốm sốt', emojiB: '🤒' },
    ],
  },
  {
    id: 'pair_f_vs_v',
    title: 'Cặp 11: /f/ vs /v/ (Răng cắn môi thổi gió vs Răng cắn môi rung)',
    group: 'fricatives_affricates',
    groupNameVi: 'Cặp Răng Cắn Môi',
    phonemeA: {
      symbol: 'f',
      name: 'Âm /f/ (Vô thanh)',
      tag: 'THỔI GIÓ MÁT',
      tagColor: 'slate',
      mouthSummary: 'Răng cửa trên chạm nhẹ lòng môi dưới, thổi luồng gió mát xì xì.',
      tongueSummary: 'Lưỡi thư giãn.',
      vocalVibration: 'Cổ họng KHÔNG rung.',
      soundLength: 'Thổi gió đều đặn.',
    },
    phonemeB: {
      symbol: 'v',
      name: 'Âm /v/ (Hữu thanh)',
      tag: 'RUNG MÔI DƯỚI',
      tagColor: 'blue',
      mouthSummary: 'Răng trên chạm môi dưới giống /f/, nhưng cổ họng RUNG lên làm môi dưới tê tê.',
      tongueSummary: 'Lưỡi thư giãn.',
      vocalVibration: 'Cổ họng RUNG MẠNH.',
      soundLength: 'Rung liên tục êm ái.',
    },
    contrastRuleVi: 'Quy tắc vàng: Cả hai âm đều đặt răng cửa trên lên môi dưới; /f/ chỉ xì gió mát; /v/ phải cảm thấy môi dưới rung tê tê!',
    vietnameseLearnerTrap: 'Đọc /f/ và /v/ như "ph" và "v" tiếng Việt bằng cách mím 2 môi lại, không dùng răng cửa cắn môi.',
    pairs: [
      { wordA: 'fan', ipaA: '/fæn/', meaningA: 'Chiếc quạt mát', emojiA: '🪭', wordB: 'van', ipaB: '/væn/', meaningB: 'Xe tải chở đồ', emojiB: '🚐' },
      { wordA: 'fat', ipaA: '/fæt/', meaningA: 'Béo tròn đáng yêu', emojiA: '🐼', wordB: 'vat', ipaB: '/væt/', meaningB: 'Thùng chứa lớn', emojiB: '🛢️' },
      { wordA: 'leaf', ipaA: '/liːf/', meaningA: 'Chiếc lá xanh', emojiA: '🍃', wordB: 'leave', ipaB: '/liːv/', meaningB: 'Rời đi / Tạm biệt', emojiB: '👋' },
      { wordA: 'safe', ipaA: '/seɪf/', meaningA: 'An toàn bình yên', emojiA: '🛡️', wordB: 'save', ipaB: '/seɪv/', meaningB: 'Cứu giúp bạn bè', emojiB: '🛟' },
    ],
  },
];
