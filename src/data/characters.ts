import { Mascot, MascotId } from '../types/ipa';

export const MASCOTS: Record<MascotId, Mascot> = {
  chiikawa: {
    id: 'chiikawa',
    name: 'Chiikawa',
    title: 'Bé Thỏ Bông Dễ Thương',
    catchphrase: 'Wawawa! Cùng tớ phát âm thật tròn vành rõ chữ nhé!',
    themeColor: '#f472b6', // pink
    badgeBg: 'bg-pink-100 text-pink-700 border-pink-300',
    description: 'Bé thỏ trắng tròn trịa siêu đáng yêu với đôi má hồng pastel, luôn cổ vũ bé hết mình!',
    avatarSvg: 'chiikawa',
  },
  doraemon: {
    id: 'doraemon',
    name: 'Doraemon',
    title: 'Mèo Máy Thông Thái',
    catchphrase: 'Bảo bối phát âm chuẩn Mỹ đã sẵn sàng! Cố lên bạn nhỏ!',
    themeColor: '#0ea5e9', // sky blue
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
    description: 'Chú mèo máy thần kỳ mang túi bảo bối chứa các âm IPA siêu chuẩn xác.',
    avatarSvg: 'doraemon',
  },
  minion: {
    id: 'minion',
    name: 'Minion Bob',
    title: 'Vua Âm Thanh Tinh Nghịch',
    catchphrase: 'Bello! Banana! Âm ngắn âm dài tớ đều nuốt chửng!',
    themeColor: '#eab308', // yellow
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'Chú Minion hài hước đeo kính tròn to, luôn tạo ra những tràng cười vui nhộn.',
    avatarSvg: 'minion',
  },
  omnom: {
    id: 'omnom',
    name: 'Om Nom',
    title: 'Quái Vật Mê Kẹo Âm',
    catchphrase: 'Munch munch! Bé phát âm đúng là tớ được ăn kẹo ngon!',
    themeColor: '#22c55e', // green
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: 'Chú quái vật kẹo màu xanh lá háu ăn, thích nghe âm đuôi chuẩn xác để gom kẹo ngọt.',
    avatarSvg: 'omnom',
  },
  kpop_hunter: {
    id: 'kpop_hunter',
    name: 'Idol Hunter Jennie',
    title: 'Thợ Săn Âm Thanh K-Pop',
    catchphrase: 'Bắt trọn từng âm cuối sắc bén như vũ điệu K-Pop!',
    themeColor: '#a855f7', // purple
    badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
    description: 'Nữ chiến binh thần tượng tóc 2 chùm rực rỡ với micro phép thuật tiêu diệt lỗi nuốt âm!',
    avatarSvg: 'kpop_hunter',
  },
};
