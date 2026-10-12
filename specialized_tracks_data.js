// ============================================================================
// HSK 3.0 — MODULE CHUYÊN NGÀNH TIÊU CHUẨN (SPECIALIZED TRACKS & CURRICULUM)
// Phân tách 5 khóa học chuyên ngành với 1.000+ thuật ngữ chuyên sâu:
// 1. 🩺 Y Dược & Đông Y (Medical & TCM - 医学与中医)
// 2. 💼 Kinh Doanh & Thương Mại Quốc Tế (Business & Trade - 商务与外贸)
// 3. 💻 Công Nghệ Thông Tin & AI (IT & Artificial Intelligence - 科技与人工智能)
// 4. ⚖️ Pháp Luật & Hợp Đồng Thương Mại (Law & Legal Contracts - 法律与合同)
// 5. ✈️ Du Lịch & Dịch Vụ Khách Sạn (Tourism & Hospitality - 旅游与酒店)
// ============================================================================

(function() {
  'use strict';

  const SPECIALIZED_COURSES = {
  "tcm": {
    "id": "tcm",
    "icon": "🩺",
    "title": "Y Dược & Đông Y (医学与中医)",
    "subtitle": "Thuật ngữ y khoa, biện chứng luận trị, huyệt đạo & dược liệu",
    "level": "HSK 4–9 / MCT (Medical Chinese)",
    "vocab": [
      {
        "zh": "辨证论治",
        "py": "biàn zhèng lùn zhì",
        "hv": "BIỆN CHỨNG LUẬN TRỊ",
        "mean": "Phương pháp chẩn đoán dựa trên chứng bệnh để đưa ra phác đồ điều trị thích hợp",
        "ex_zh": "辨证论治是中医认识疾病和治疗疾病的基本原则。",
        "ex_vi": "Biện chứng luận trị là nguyên tắc cơ bản của Đông y trong việc nhận biết và chữa trị bệnh tật."
      },
      {
        "zh": "望闻问切",
        "py": "wàng wén wèn qiè",
        "hv": "VỌNG VĂN VẤN THIẾT",
        "mean": "Tứ chẩn: quan sát, lắng nghe/ngửi mùi, hỏi han và bắt mạch",
        "ex_zh": "老中医通过望闻问切综合判断患者的病情。",
        "ex_vi": "Lão danh y thông qua vọng văn vấn thiết để phán đoán tổng thể tình trạng của bệnh nhân."
      },
      {
        "zh": "阴阳五行",
        "py": "yīn yáng wǔ xíng",
        "hv": "ÂM DƯƠNG NGŨ HÀNH",
        "mean": "Học thuyết âm dương và kim mộc thủy hỏa thổ trong triết học y học",
        "ex_zh": "人体健康依赖于阴阳平衡与五行相生相克。",
        "ex_vi": "Sức khỏe con người dựa vào sự cân bằng âm dương và tương sinh tương khắc của ngũ hành."
      },
      {
        "zh": "气血亏虚",
        "py": "qì xuè kuī xū",
        "hv": "KHÍ HUYẾT KHUY HƯ",
        "mean": "Tình trạng thiếu hụt cả khí và huyết trong cơ thể",
        "ex_zh": "面色苍白往往是气血亏虚的明显体征。",
        "ex_vi": "Sắc mặt nhợt nhạt thường là biểu hiện rõ ràng của tình trạng khí huyết khuy hư."
      },
      {
        "zh": "足三里",
        "py": "Zúsānlǐ",
        "hv": "TÚC TAM LÝ",
        "mean": "Huyệt Túc Tam Lý (ST36) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 胃痛、呕吐、呃逆、腹胀、肠鸣、泄泻。",
        "ex_zh": "常灸足三里，能健脾胃、增强机体免疫力。",
        "ex_vi": "Thường xuyên cứu huyệt Túc Tam Lý có thể kiện tỳ vị, tăng cường miễn dịch cơ thể."
      },
      {
        "zh": "黄帝内经",
        "py": "huáng dì nèi jīng",
        "hv": "HOÀNG ĐẾ NỘI KINH",
        "mean": "Bộ kinh điển lý luận nền tảng lâu đời nhất của y học phương Đông",
        "ex_zh": "《黄帝内经》奠定了中医学的理论基石。",
        "ex_vi": "Hoàng Đế Nội Kinh đã đặt nền móng lý luận cho nền y học cổ truyền phương Đông."
      },
      {
        "zh": "疏肝理气",
        "py": "shū gān lǐ qì",
        "hv": "SƠ CAN LÝ KHÍ",
        "mean": "Phương pháp điều trị giải tỏa ứ trệ tại tạng Can",
        "ex_zh": "柴胡疏肝散是疏肝理气的经典代表方剂。",
        "ex_vi": "Sài Hồ Sơ Can Tán là bài thuốc kinh điển đại diện cho phép sơ can lý khí."
      },
      {
        "zh": "针灸推拿",
        "py": "zhēn jiǔ tuī ná",
        "hv": "CHÂM CỨU THÔI NÃ",
        "mean": "Phương pháp chữa bệnh không dùng thuốc: châm kim, cứu ngải và xoa bóp",
        "ex_zh": "针灸推拿对缓解颈椎病和腰痛有显著疗效。",
        "ex_vi": "Châm cứu thôi nã có hiệu quả rõ rệt trong việc thuyên giảm thoái hóa đốt sống cổ và đau thắt lưng."
      },
      {
        "zh": "脏腑学说",
        "py": "zàng fǔ xué shuō",
        "hv": "TẠNG PHỦ HỌC THUYẾT",
        "mean": "Học thuyết tạng phủ nghiên cứu chức năng sinh lý của ngũ tạng lục phủ"
      },
      {
        "zh": "经络腧穴",
        "py": "jīng luò shù xué",
        "hv": "KINH LẠC THÂU HUYỆT",
        "mean": "Hệ thống kinh lạc và các điểm huyệt đạo trên cơ thể con người"
      },
      {
        "zh": "气滞血瘀",
        "py": "qì zhì xuè yū",
        "hv": "KHÍ TRỆ HUYẾT Ứ",
        "mean": "Khí huyết ứ trệ, tắc nghẽn kinh mạch gây đau nhức và hình thành huyết khối"
      },
      {
        "zh": "脾胃虚弱",
        "py": "pí wèi xū ruò",
        "hv": "TỲ VỊ HƯ NHƯỢC",
        "mean": "Chức năng tiêu hóa vận hóa của tỳ vị suy giảm, ăn uống khó tiêu"
      },
      {
        "zh": "肾阳不足",
        "py": "shèn yáng bù zú",
        "hv": "THẬN DƯƠNG BẤT TÚC",
        "mean": "Hỏa mệnh môn suy vi, sợ lạnh, tay chân lạnh, đau lưng mỏi gối"
      },
      {
        "zh": "肝阳上亢",
        "py": "gān yáng shàng kàng",
        "hv": "CAN DƯƠNG THƯỢNG KHÁNG",
        "mean": "Hỏa can bốc lên gây đau đầu, hoa mắt, chóng mặt, tính tình nóng nảy"
      },
      {
        "zh": "活血化瘀",
        "py": "huó xuè huà yū",
        "hv": "HOẠT HUYẾT HÓA Ứ",
        "mean": "Phương pháp thúc đẩy lưu thông máu và làm tan huyết khối ứ trệ"
      },
      {
        "zh": "清热解毒",
        "py": "qīng rè jiě dú",
        "hv": "THANH NHIỆT GIẢI ĐỘC",
        "mean": "Phép trị hạ nhiệt độc, tiêu sưng viêm và nhiễm khuẩn trong cơ thể"
      },
      {
        "zh": "益气养阴",
        "py": "yì qì yǎng yīn",
        "hv": "ÍCH KHÍ DƯỠNG ÂM",
        "mean": "Phương pháp bồi bổ chính khí và nuôi dưỡng phần tân dịch âm dịch"
      },
      {
        "zh": "舌苔脉象",
        "py": "shé tāi mài xiàng",
        "hv": "THIỆT THAI MẠCH TƯỢNG",
        "mean": "Hình thái sắc lưỡi rêu lưỡi và mạch đập cổ tay trong vọng chẩn thiết chẩn"
      },
      {
        "zh": "四气五味",
        "py": "sì qì wǔ wèi",
        "hv": "TỨ KHÍ NGŨ VỊ",
        "mean": "Tính hàn nhiệt ôn lương và 5 vị chua đắng ngọt cay mặn của dược liệu"
      },
      {
        "zh": "君臣佐使",
        "py": "jūn chén zuǒ shǐ",
        "hv": "QUÂN THẦN TÁ SỨ",
        "mean": "Quy tắc phối ngũ vai trò các vị thuốc trong một bài thuốc cổ truyền"
      },
      {
        "zh": "合谷穴",
        "py": "hé gǔ xué",
        "hv": "HỢP CỐC HUYỆT",
        "mean": "Huyệt nguyên kinh Đại trường, chủ trị đau vùng đầu mặt, răng miệng"
      },
      {
        "zh": "内关穴",
        "py": "nèi guān xué",
        "hv": "NỘI QUAN HUYỆT",
        "mean": "Huyệt kinh Tâm bào, chủ trị đau tức ngực, buồn nôn, mất ngủ, hồi hộp"
      },
      {
        "zh": "太冲穴",
        "py": "tài chōng xué",
        "hv": "THÁI XUNG HUYỆT",
        "mean": "Huyệt nguyên kinh Can, hạ huyết áp, bình can giải uất, thanh nhiệt"
      },
      {
        "zh": "涌泉穴",
        "py": "yǒng quán xué",
        "hv": "DŨNG TUYỀN HUYỆT",
        "mean": "Huyệt tỉnh kinh Thận ở lòng bàn chân, giáng hỏa an thần, định tâm"
      },
      {
        "zh": "百会穴",
        "py": "bǎi huì xué",
        "hv": "BÁCH HỘI HUYỆT",
        "mean": "Huyệt đỉnh đầu thuộc mạch Đốc, hội tụ dương khí toàn thân"
      },
      {
        "zh": "风池穴",
        "py": "fēng chí xué",
        "hv": "PHONG TRÌ HUYỆT",
        "mean": "Huyệt kinh Đởm vùng gáy, sơ phong giải biểu, trị cảm mạo đau đầu"
      },
      {
        "zh": "临床诊断",
        "py": "lín chuáng zhěn duàn",
        "hv": "LÂM SÀNG CHẨN ĐOÁN",
        "mean": "Chẩn đoán bệnh lý dựa trên triệu chứng thực tế trên người bệnh"
      },
      {
        "zh": "病理机制",
        "py": "bìng lǐ jī zhì",
        "hv": "BỆNH LÝ CƠ CHẾ",
        "mean": "Cơ chế phát sinh, phát triển và biến hóa của bệnh tật trong y học"
      },
      {
        "zh": "中医",
        "py": "zhōngyī",
        "hv": "TRUNG Y",
        "mean": "Đông y / y học cổ truyền Trung Hoa"
      },
      {
        "zh": "中药",
        "py": "zhōngyào",
        "hv": "TRUNG DƯỢC",
        "mean": "thuốc Đông y"
      },
      {
        "zh": "中药学",
        "py": "zhōngyàoxué",
        "hv": "TRUNG DƯỢC HỌC",
        "mean": "dược học Đông y"
      },
      {
        "zh": "方剂",
        "py": "fāngjì",
        "hv": "PHƯƠNG TỄ",
        "mean": "bài thuốc / phương tễ"
      },
      {
        "zh": "方剂学",
        "py": "fāngjìxué",
        "hv": "PHƯƠNG TỄ HỌC",
        "mean": "phương tễ học"
      },
      {
        "zh": "阴阳",
        "py": "yīnyáng",
        "hv": "ÂM DƯƠNG",
        "mean": "âm dương"
      },
      {
        "zh": "五行",
        "py": "wǔxíng",
        "hv": "NGŨ HÀNH",
        "mean": "ngũ hành (5 yếu tố)"
      },
      {
        "zh": "气血",
        "py": "qìxuè",
        "hv": "KHÍ HUYẾT",
        "mean": "khí huyết"
      },
      {
        "zh": "经络",
        "py": "jīngluò",
        "hv": "KINH LẠC",
        "mean": "kinh lạc (meridian)"
      },
      {
        "zh": "穴位",
        "py": "xuéwèi",
        "hv": "HUYỆT VỊ",
        "mean": "huyệt vị (acupoint)"
      },
      {
        "zh": "针刺",
        "py": "zhēncì",
        "hv": "CHÂM THÍCH",
        "mean": "châm cứu (acupuncture)"
      },
      {
        "zh": "针灸",
        "py": "zhēnjiǔ",
        "hv": "CHÂM CỨU",
        "mean": "châm cứu"
      },
      {
        "zh": "艾灸",
        "py": "àijiǔ",
        "hv": "NGẢI CỨU",
        "mean": "cứu (moxibustion)"
      },
      {
        "zh": "推拿",
        "py": "tuīná",
        "hv": "THÔI NÃ",
        "mean": "xoa bóp bấm huyệt (tuina)"
      },
      {
        "zh": "脉诊",
        "py": "màizhěn",
        "hv": "MẠCH CHẨN",
        "mean": "chẩn mạch"
      },
      {
        "zh": "舌诊",
        "py": "shézhěn",
        "hv": "THIỆT CHẨN",
        "mean": "khám lưỡi (tongue diagnosis)"
      },
      {
        "zh": "四诊合参",
        "py": "sìzhěn hécān",
        "hv": "TỨ CHẨN HỢP THAM",
        "mean": "kết hợp tứ chẩn"
      },
      {
        "zh": "药物",
        "py": "yàowù",
        "hv": "DƯỢC VẬT",
        "mean": "thuốc (drug/medicine)"
      },
      {
        "zh": "方药",
        "py": "fāngyào",
        "hv": "PHƯƠNG DƯỢC",
        "mean": "thuốc thang / đơn thuốc"
      },
      {
        "zh": "疗效",
        "py": "liáoxiào",
        "hv": "LIỆU HIỆU",
        "mean": "hiệu quả điều trị"
      },
      {
        "zh": "治法",
        "py": "zhìfǎ",
        "hv": "TRỊ PHÁP",
        "mean": "phép trị / phương pháp điều trị"
      },
      {
        "zh": "审证求因",
        "py": "shěnzhèng qiúyīn",
        "hv": "THẨM CHỨNG CẦU NHÂN",
        "mean": "thẩm chứng tìm nguyên nhân"
      },
      {
        "zh": "标本",
        "py": "biāoběn",
        "hv": "TIÊU BỔN",
        "mean": "tiêu-bản (bệnh gốc và ngọn)"
      },
      {
        "zh": "八纲辨证",
        "py": "bāgāng biànzhèng",
        "hv": "BÁT CƯƠNG BIỆN CHỨNG",
        "mean": "bát cương biện chứng"
      },
      {
        "zh": "寒热",
        "py": "hánrè",
        "hv": "HÀN NHIỆT",
        "mean": "hàn-nhiệt (lạnh-nóng)"
      },
      {
        "zh": "虚实",
        "py": "xūshí",
        "hv": "HƯ THỰC",
        "mean": "hư thực (hư-thực)"
      },
      {
        "zh": "表里",
        "py": "biǎolǐ",
        "hv": "BIỂU LÝ",
        "mean": "biểu lý (nông-sâu)"
      },
      {
        "zh": "气血辨证",
        "py": "qìxuè biànzhèng",
        "hv": "KHÍ HUYẾT BIỆN CHỨNG",
        "mean": "biện chứng khí huyết"
      },
      {
        "zh": "脏腑辨证",
        "py": "zàngfù biànzhèng",
        "hv": "TẠNG PHỦ BIỆN CHỨNG",
        "mean": "biện chứng tạng phủ"
      },
      {
        "zh": "卫气营血",
        "py": "wèiqìyíngxuè",
        "hv": "VỆ KHÍ DINH HUYẾT",
        "mean": "vệ-khí-dinh-huyết"
      },
      {
        "zh": "六经辨证",
        "py": "liùjīng biànzhèng",
        "hv": "LỤC KINH BIỆN CHỨNG",
        "mean": "biện chứng lục kinh"
      },
      {
        "zh": "药性",
        "py": "yàoxìng",
        "hv": "DƯỢC TÍNH",
        "mean": "tính thuốc"
      },
      {
        "zh": "归经",
        "py": "guījīng",
        "hv": "QUY KINH",
        "mean": "quy kinh (kinh mạch thuộc về)"
      },
      {
        "zh": "升降浮沉",
        "py": "shēngjiàng fúchén",
        "hv": "THĂNG GIÁNG PHÙ TRẦM",
        "mean": "thăng giáng phù trầm"
      },
      {
        "zh": "配伍",
        "py": "pèiwǔ",
        "hv": "PHỐI NGŨ",
        "mean": "phối hợp (thuốc)"
      },
      {
        "zh": "煎煮",
        "py": "jiānzhǔ",
        "hv": "TIÊN CHỬ",
        "mean": "sắc thuốc (decoction)"
      },
      {
        "zh": "汤剂",
        "py": "tāngjì",
        "hv": "THANG TỄ",
        "mean": "thuốc sắc (decoction)"
      },
      {
        "zh": "丸剂",
        "py": "wánjì",
        "hv": "HOÀN TỄ",
        "mean": "thuốc hoàn (pill)"
      },
      {
        "zh": "散剂",
        "py": "sǎnjì",
        "hv": "TÁN TỄ",
        "mean": "thuốc tán (powder)"
      },
      {
        "zh": "膏剂",
        "py": "gāojì",
        "hv": "CAO TỄ",
        "mean": "thuốc cao (ointment)"
      },
      {
        "zh": "配伍禁忌",
        "py": "pèiwǔ jìnjì",
        "hv": "PHỐI NGŨ CẤM KỴ",
        "mean": "tương kỵ khi phối thuốc"
      },
      {
        "zh": "十八反",
        "py": "shíbāfǎn",
        "hv": "THẬP BÁT PHẢN",
        "mean": "thập bát phản (tương phản thuốc)"
      },
      {
        "zh": "十九畏",
        "py": "shíjiǔwèi",
        "hv": "THẬP CỬU ÚY",
        "mean": "thập cửu úy (tương úy thuốc)"
      },
      {
        "zh": "孕妇禁忌",
        "py": "yùnfù jìnjì",
        "hv": "DỰ PHỤ CẤM KỴ",
        "mean": "cấm kỵ cho phụ nữ mang thai"
      },
      {
        "zh": "四诊",
        "py": "sìzhěn",
        "hv": "TỨ CHẨN",
        "mean": "tứ chẩn (bốn phương pháp khám)"
      },
      {
        "zh": "证候",
        "py": "zhènghòu",
        "hv": "CHỨNG HẦU",
        "mean": "chứng hầu (hội chứng)"
      },
      {
        "zh": "治则",
        "py": "zhìzé",
        "hv": "TRỊ TẮC",
        "mean": "nguyên tắc điều trị"
      },
      {
        "zh": "扶正祛邪",
        "py": "fúzhèng qūxié",
        "hv": "PHÙ CHÍNH KHƯ TÀ",
        "mean": "phù chính khu tà (bổ chính trừ tà)"
      },
      {
        "zh": "调和阴阳",
        "py": "tiáohé yīnyáng",
        "hv": "ĐIỀU HÒA ÂM DƯƠNG",
        "mean": "điều hòa âm dương"
      },
      {
        "zh": "益气养血",
        "py": "yìqì yǎngxuè",
        "hv": "ÍCH KHÍ DƯỠNG HUYẾT",
        "mean": "bổ khí dưỡng huyết"
      },
      {
        "zh": "健脾益气",
        "py": "jiànpí yìqì",
        "hv": "KIỆN TỲ ÍCH KHÍ",
        "mean": "kiện tỳ bổ khí"
      },
      {
        "zh": "滋阴降火",
        "py": "zīyīn jiànghuǒ",
        "hv": "TƯ ÂM GIÁNG HỎA",
        "mean": "tư âm giáng hỏa"
      },
      {
        "zh": "温经散寒",
        "py": "wēnjīng sànhán",
        "hv": "ÔN KINH TÁN HÀN",
        "mean": "ôn kinh tán hàn"
      },
      {
        "zh": "补阳",
        "py": "bǔyáng",
        "hv": "BỔ DƯƠNG",
        "mean": "bổ dương"
      },
      {
        "zh": "滋阴",
        "py": "zīyīn",
        "hv": "TƯ ÂM",
        "mean": "tư âm (bổ âm)"
      },
      {
        "zh": "药膳",
        "py": "yàoshàn",
        "hv": "DƯỢC THIỆN",
        "mean": "thuốc và món ăn (dược thiện)"
      },
      {
        "zh": "体质",
        "py": "tǐzhì",
        "hv": "THỂ CHẤT",
        "mean": "thể chất (constitution)"
      },
      {
        "zh": "养生",
        "py": "yǎngshēng",
        "hv": "DƯỠNG SINH",
        "mean": "dưỡng sinh (health preservation)"
      },
      {
        "zh": "治未病",
        "py": "zhìwèibìng",
        "hv": "TRỊ VỊ BỆNH",
        "mean": "trị bệnh chưa phát (phòng bệnh)"
      },
      {
        "zh": "不良反应",
        "py": "bùliáng fǎnyìng",
        "hv": "BẤT LƯƠNG PHẢN ỨNG",
        "mean": "phản ứng có hại (ADR)"
      },
      {
        "zh": "药物不良反应",
        "py": "yàowù bùliáng fǎnyìng",
        "hv": "DƯỢC VẬT BẤT LƯƠNG PHẢN ỨNG",
        "mean": "phản ứng có hại của thuốc"
      },
      {
        "zh": "精气神",
        "py": "jīng qì shén",
        "hv": "TINH KHÍ THẦN",
        "mean": "tinh-khí-thần (ba loại chất cơ bản của cơ thể)"
      },
      {
        "zh": "先天之精",
        "py": "xiān tiān zhī jīng",
        "hv": "TIÊN THIÊN CHI TINH",
        "mean": "tinh tiên thiên (bẩm sinh)"
      },
      {
        "zh": "后天之精",
        "py": "hòu tiān zhī jīng",
        "hv": "HẬU THIÊN CHI TINH",
        "mean": "tinh hậu thiên (từ thức ăn hóa sinh)"
      },
      {
        "zh": "元阴元阳",
        "py": "yuán yīn yuán yáng",
        "hv": "NGUYÊN ÂM NGUYÊN DƯƠNG",
        "mean": "nguyên âm / nguyên dương (gốc âm dương của thận)"
      },
      {
        "zh": "命门",
        "py": "Mìngmén",
        "hv": "MỆNH MÔN",
        "mean": "Huyệt Mệnh Môn (GV4) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 拘急强直、阳痿、遗精、月经不调、泄泻、消化不良。"
      },
      {
        "zh": "命门之火",
        "py": "mìng mén zhī huǒ",
        "hv": "MỆNH MÔN CHI HỎA",
        "mean": "hỏa mệnh môn (dương khí gốc của cơ thể)"
      },
      {
        "zh": "君火",
        "py": "jūn huǒ",
        "hv": "QUÂN HỎA",
        "mean": "quân hỏa (hỏa của tâm)"
      },
      {
        "zh": "相火",
        "py": "xiāng huǒ",
        "hv": "TƯỚNG HỎA",
        "mean": "tướng hỏa (hỏa của can thận)"
      },
      {
        "zh": "中气",
        "py": "zhōng qì",
        "hv": "TRUNG KHÍ",
        "mean": "trung khí (khí của trung tiêu)"
      },
      {
        "zh": "营气",
        "py": "yíng qì",
        "hv": "DOANH KHÍ",
        "mean": "doanh khí (khí dinh dưỡng chạy trong mạch)"
      },
      {
        "zh": "卫气",
        "py": "wèi qì",
        "hv": "VỆ KHÍ",
        "mean": "vệ khí (khí phòng vệ ngoài mạch)"
      },
      {
        "zh": "宗气",
        "py": "zōng qì",
        "hv": "TÔNG KHÍ",
        "mean": "tông khí (khí tụ ở ngực)"
      },
      {
        "zh": "元气",
        "py": "yuán qì",
        "hv": "NGUYÊN KHÍ",
        "mean": "nguyên khí (khí gốc của cơ thể)"
      },
      {
        "zh": "津液",
        "py": "jīn yè",
        "hv": "TÂN DỊCH",
        "mean": "tân dịch (dịch thể trong cơ thể)"
      },
      {
        "zh": "水谷精微",
        "py": "shuǐ gǔ jīng wēi",
        "hv": "THỦY CỐC TINH VI",
        "mean": "tinh chất từ thủy cốc (thức ăn)"
      },
      {
        "zh": "上焦",
        "py": "shàng jiāo",
        "hv": "THƯỢNG TIÊU",
        "mean": "thượng tiêu (vùng trên cơ hoành)"
      },
      {
        "zh": "中焦",
        "py": "zhōng jiāo",
        "hv": "TRUNG TIÊU",
        "mean": "trung tiêu (vùng giữa, tỳ vị)"
      },
      {
        "zh": "下焦",
        "py": "xià jiāo",
        "hv": "HẠ TIÊU",
        "mean": "hạ tiêu (vùng dưới, thận bàng quang)"
      },
      {
        "zh": "六淫",
        "py": "liù yín",
        "hv": "LỤC DÂM",
        "mean": "lục dâm (sáu tà khí: phong hàn thử thấp táo hỏa)"
      },
      {
        "zh": "风邪",
        "py": "fēng xié",
        "hv": "PHONG TÀ",
        "mean": "phong tà (tà khí phong)"
      },
      {
        "zh": "寒邪",
        "py": "hán xié",
        "hv": "HÀN TÀ",
        "mean": "hàn tà (tà khí hàn)"
      },
      {
        "zh": "暑邪",
        "py": "shǔ xié",
        "hv": "THỬ TÀ",
        "mean": "thử tà (tà khí thử/nóng hè)"
      },
      {
        "zh": "湿邪",
        "py": "shī xié",
        "hv": "THẤP TÀ",
        "mean": "thấp tà (tà khí thấp)"
      },
      {
        "zh": "燥邪",
        "py": "zào xié",
        "hv": "TÁO TÀ",
        "mean": "táo tà (tà khí táo/khô)"
      },
      {
        "zh": "火邪",
        "py": "huǒ xié",
        "hv": "HỎA TÀ",
        "mean": "hỏa tà (tà khí hỏa)"
      },
      {
        "zh": "疫疠",
        "py": "yì lì",
        "hv": "DỊCH LỆ",
        "mean": "dịch lệ (bệnh dịch truyền nhiễm)"
      },
      {
        "zh": "七情",
        "py": "qī qíng",
        "hv": "THẤT TÌNH",
        "mean": "thất tình (bảy cảm xúc: hỷ nộ ưu tư bi khủng kinh)"
      },
      {
        "zh": "瘀血",
        "py": "yū xuè",
        "hv": "Ứ HUYẾT",
        "mean": "ứ huyết (máu ứ trệ)"
      },
      {
        "zh": "痰",
        "py": "tán",
        "hv": "ĐÀM",
        "mean": "đàm (đờm - sản phẩm bệnh lý)"
      },
      {
        "zh": "五运六气",
        "py": "wǔ yùn liù qì",
        "hv": "NGŨ VẬN LỤC KHÍ",
        "mean": "ngũ vận lục khí (học thuyết vận khí)"
      },
      {
        "zh": "藏象",
        "py": "cáng xiàng",
        "hv": "TẠNG TƯỢNG",
        "mean": "tạng tượng (nghiên cứu nội tạng qua biểu hiện ngoài)"
      },
      {
        "zh": "奇恒之腑",
        "py": "qí héng zhī fǔ",
        "hv": "KỲ HÀNH CHI PHỦ",
        "mean": "kỳ hành chi phủ (não tủy xương mạch đảm nữ tử bào)"
      },
      {
        "zh": "血脉",
        "py": "xuè mài",
        "hv": "HUYẾT MẠCH",
        "mean": "huyết mạch (hệ mạch máu)"
      },
      {
        "zh": "肾阳",
        "py": "shèn yáng",
        "hv": "THẬN DƯƠNG",
        "mean": "thận dương (dương khí của thận)"
      },
      {
        "zh": "肾阴",
        "py": "shèn yīn",
        "hv": "THẬN ÂM",
        "mean": "thận âm (âm dịch của thận)"
      },
      {
        "zh": "脾阳",
        "py": "pí yáng",
        "hv": "TỲ DƯƠNG",
        "mean": "tỳ dương (dương khí của tỳ)"
      },
      {
        "zh": "肝气",
        "py": "gān qì",
        "hv": "CAN KHÍ",
        "mean": "can khí (khí của can)"
      },
      {
        "zh": "肝阳",
        "py": "gān yáng",
        "hv": "CAN DƯƠNG",
        "mean": "can dương (dương của can)"
      },
      {
        "zh": "肺气",
        "py": "fèi qì",
        "hv": "PHẾ KHÍ",
        "mean": "phế khí (khí của phế)"
      },
      {
        "zh": "心血",
        "py": "xīn xuè",
        "hv": "TÂM HUYẾT",
        "mean": "tâm huyết (huyết của tâm)"
      },
      {
        "zh": "心气",
        "py": "xīn qì",
        "hv": "TÂM KHÍ",
        "mean": "tâm khí (khí của tâm)"
      },
      {
        "zh": "胃气",
        "py": "wèi qì",
        "hv": "VỊ KHÍ",
        "mean": "vị khí (khí của vị - quan trọng tiên thiên)"
      },
      {
        "zh": "心主血脉",
        "py": "xīn zhǔ xuè mài",
        "hv": "TÂM CHỦ HUYẾT MẠCH",
        "mean": "tâm làm chủ huyết mạch"
      },
      {
        "zh": "心主神明",
        "py": "xīn zhǔ shén míng",
        "hv": "TÂM CHỦ THẦN MINH",
        "mean": "tâm làm chủ tinh thần (thần minh)"
      },
      {
        "zh": "肝主疏泄",
        "py": "gān zhǔ shū xiè",
        "hv": "CAN CHỦ SƠ TIẾT",
        "mean": "can làm chủ sự điều đạt (sơ tiết)"
      },
      {
        "zh": "肝藏血",
        "py": "gān cáng xuè",
        "hv": "CAN TÀNG HUYẾT",
        "mean": "can chứa/trữ huyết"
      },
      {
        "zh": "脾主运化",
        "py": "pí zhǔ yùn huà",
        "hv": "TỲ CHỦ VẬN HÓA",
        "mean": "tỳ làm chủ vận chuyển tiêu hóa"
      },
      {
        "zh": "脾统血",
        "py": "pí tǒng xuè",
        "hv": "TỲ THỐNG HUYẾT",
        "mean": "tỳ nhiếp/thống huyết (giữ máu trong mạch)"
      },
      {
        "zh": "肺主宣发",
        "py": "fèi zhǔ xuān fā",
        "hv": "PHẾ CHỦ TUYÊN PHÁT",
        "mean": "phế làm chủ sự tuyên phát (tán khí ra ngoài)"
      },
      {
        "zh": "肺主肃降",
        "py": "fèi zhǔ sù jiàng",
        "hv": "PHẾ CHỦ TÚC GIÁNG",
        "mean": "phế làm chủ sự túc giáng (thanh giáng)"
      },
      {
        "zh": "肺朝百脉",
        "py": "fèi cháo bǎi mài",
        "hv": "PHẾ TRIỀU BÁCH MẠCH",
        "mean": "phế hội tụ trăm mạch"
      },
      {
        "zh": "肾藏精",
        "py": "shèn cáng jīng",
        "hv": "THẬN TÀNG TINH",
        "mean": "thận chứa tinh"
      },
      {
        "zh": "肾主纳气",
        "py": "shèn zhǔ nà qì",
        "hv": "THẬN CHỦ NẠP KHÍ",
        "mean": "thận làm chủ sự thu nạp khí"
      },
      {
        "zh": "肾主水",
        "py": "shèn zhǔ shuǐ",
        "hv": "THẬN CHỦ THỦY",
        "mean": "thận làm chủ sự thủy (nước)"
      },
      {
        "zh": "心包络",
        "py": "xīn bāo luò",
        "hv": "TÂM BÀO LẠC",
        "mean": "tâm bào lạc (mạng bọc tim)"
      },
      {
        "zh": "女子胞",
        "py": "nǚ zǐ bāo",
        "hv": "NỮ TỬ BÀO",
        "mean": "nữ tử bào (tử cung)"
      },
      {
        "zh": "后天之本",
        "py": "hòu tiān zhī běn",
        "hv": "HẬU THIÊN CHI BẢN",
        "mean": "gốc hậu thiên (chỉ tỳ)"
      },
      {
        "zh": "先天之本",
        "py": "xiān tiān zhī běn",
        "hv": "TIÊN THIÊN CHI BẢN",
        "mean": "gốc tiên thiên (chỉ thận)"
      },
      {
        "zh": "相傅之官",
        "py": "xiāng fù zhī guān",
        "hv": "TƯƠNG PHÓ CHI QUAN",
        "mean": "chức quan phụ tá (chỉ phế)"
      },
      {
        "zh": "将军之官",
        "py": "jiāng jūn zhī guān",
        "hv": "TƯƠNG QUÂN CHI QUAN",
        "mean": "chức quan tướng quân (chỉ can)"
      },
      {
        "zh": "仓廪之官",
        "py": "cāng lǐn zhī guān",
        "hv": "THƯƠNG LẪM CHI QUAN",
        "mean": "chức quan kho lẫm (chỉ tỳ)"
      },
      {
        "zh": "膀胱",
        "py": "páng guāng",
        "hv": "BÀNG QUANG",
        "mean": "bàng quang"
      },
      {
        "zh": "三焦气化",
        "py": "sān jiāo qì huà",
        "hv": "TAM TIÊU KHÍ HÓA",
        "mean": "khí hóa của tam tiêu"
      },
      {
        "zh": "经脉",
        "py": "jīng mài",
        "hv": "KINH MẠCH",
        "mean": "kinh mạch (trục chính)"
      },
      {
        "zh": "络脉",
        "py": "luò mài",
        "hv": "LẠC MẠCH",
        "mean": "lạc mạch (nhánh phụ)"
      },
      {
        "zh": "十二经脉",
        "py": "shí èr jīng mài",
        "hv": "THẬP NHỊ KINH MẠCH",
        "mean": "mười hai kinh mạch chính"
      },
      {
        "zh": "奇经八脉",
        "py": "qí jīng bā mài",
        "hv": "KỲ KINH BÁT MẠCH",
        "mean": "tám mạch đặc biệt"
      },
      {
        "zh": "任脉",
        "py": "rèn mài",
        "hv": "NHÂM MẠCH",
        "mean": "kinh Nhâm (âm, chạy trước bụng)"
      },
      {
        "zh": "督脉",
        "py": "dū mài",
        "hv": "ĐỐC MẠCH",
        "mean": "kinh Đốc (dương, chạy sau lưng)"
      },
      {
        "zh": "冲脉",
        "py": "chōng mài",
        "hv": "XUNG MẠCH",
        "mean": "kinh Xung (hải của mạch)"
      },
      {
        "zh": "带脉",
        "py": "Dàimài",
        "hv": "ĐỚI MẠCH",
        "mean": "Huyệt Đới Mạch (GB26) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 月经不调、闭经、带下病、腹痛、疝气、腰痛。"
      },
      {
        "zh": "阴阳跷脉",
        "py": "yīn yáng qiāo mài",
        "hv": "ÂM DƯƠNG KIỀU MẠCH",
        "mean": "âm kiều và dương kiều mạch"
      },
      {
        "zh": "阴阳维脉",
        "py": "yīn yáng wéi mài",
        "hv": "ÂM DƯƠNG DUY MẠCH",
        "mean": "âm duy và dương duy mạch"
      },
      {
        "zh": "手太阴肺经",
        "py": "shǒu tài yīn fèi jīng",
        "hv": "THỦ THÁI ÂM PHẾ KINH",
        "mean": "kinh Phế (thủ thái âm)"
      },
      {
        "zh": "手阳明大肠经",
        "py": "shǒu yáng míng dà cháng jīng",
        "hv": "THỦ DƯƠNG MINH ĐẠI TRƯỜNG KINH",
        "mean": "kinh Đại trường (thủ dương minh)"
      },
      {
        "zh": "足阳明胃经",
        "py": "zú yáng míng wèi jīng",
        "hv": "TÚC DƯƠNG MINH VỊ KINH",
        "mean": "kinh Vị (túc dương minh)"
      },
      {
        "zh": "足太阴脾经",
        "py": "zú tài yīn pí jīng",
        "hv": "TÚC THÁI ÂM TỲ KINH",
        "mean": "kinh Tỳ (túc thái âm)"
      },
      {
        "zh": "手少阴心经",
        "py": "shǒu shǎo yīn xīn jīng",
        "hv": "THỦ THIẾU ÂM TÂM KINH",
        "mean": "kinh Tâm (thủ thiếu âm)"
      },
      {
        "zh": "手太阳小肠经",
        "py": "shǒu tài yáng xiǎo cháng jīng",
        "hv": "THỦ THÁI DƯƠNG TIỂU TRƯỜNG KINH",
        "mean": "kinh Tiểu trường (thủ thái dương)"
      },
      {
        "zh": "足太阳膀胱经",
        "py": "zú tài yáng páng guāng jīng",
        "hv": "TÚC THÁI DƯƠNG BÀNG QUANG KINH",
        "mean": "kinh Bàng quang (túc thái dương)"
      },
      {
        "zh": "足少阴肾经",
        "py": "zú shǎo yīn shèn jīng",
        "hv": "TÚC THIẾU ÂM THẬN KINH",
        "mean": "kinh Thận (túc thiếu âm)"
      },
      {
        "zh": "手厥阴心包经",
        "py": "shǒu jué yīn xīn bāo jīng",
        "hv": "THỦ QUYẾT ÂM TÂM BÀO KINH",
        "mean": "kinh Tâm bào (thủ quyết âm)"
      },
      {
        "zh": "手少阳三焦经",
        "py": "shǒu shǎo yáng sān jiāo jīng",
        "hv": "THỦ THIẾU DƯƠNG TAM TIÊU KINH",
        "mean": "kinh Tam tiêu (thủ thiếu dương)"
      },
      {
        "zh": "足少阳胆经",
        "py": "zú shǎo yáng dǎn jīng",
        "hv": "TÚC THIẾU DƯƠNG ĐẢM KINH",
        "mean": "kinh Đảm (túc thiếu dương)"
      },
      {
        "zh": "足厥阴肝经",
        "py": "zú jué yīn gān jīng",
        "hv": "TÚC QUYẾT ÂM CAN KINH",
        "mean": "kinh Can (túc quyết âm)"
      },
      {
        "zh": "腧穴",
        "py": "shù xué",
        "hv": "DU HUYỆT",
        "mean": "du huyệt (huyệt đạo)"
      },
      {
        "zh": "经穴",
        "py": "jīng xué",
        "hv": "KINH HUYỆT",
        "mean": "huyệt thuộc đường kinh"
      },
      {
        "zh": "阿是穴",
        "py": "ā shì xué",
        "hv": "A THỊ HUYỆT",
        "mean": "a thị huyệt (huyệt đau chỗ, không cố định)"
      },
      {
        "zh": "井荥输经合",
        "py": "jǐng xíng shū jīng hé",
        "hv": "TỈNH HUỲNH DU KINH HỢP",
        "mean": "năm loại huyệt ngũ du (tỉnh huỳnh du kinh hợp)"
      },
      {
        "zh": "原穴",
        "py": "yuán xué",
        "hv": "NGUYÊN HUYỆT",
        "mean": "nguyên huyệt (huyệt nguồn)"
      },
      {
        "zh": "络穴",
        "py": "luò xué",
        "hv": "LẠC HUYỆT",
        "mean": "lạc huyệt (huyệt nối)"
      },
      {
        "zh": "郄穴",
        "py": "qiè xué",
        "hv": "KHÍCH HUYỆT",
        "mean": "khích huyệt (huyệt kẽ)"
      },
      {
        "zh": "浮脉",
        "py": "fú mài",
        "hv": "PHÙ MẠCH",
        "mean": "mạch phù (nông)"
      },
      {
        "zh": "沉脉",
        "py": "chén mài",
        "hv": "TRẦM MẠCH",
        "mean": "mạch trầm (sâu)"
      },
      {
        "zh": "迟脉",
        "py": "chí mài",
        "hv": "TRÌ MẠCH",
        "mean": "mạch trì (chậm)"
      },
      {
        "zh": "数脉",
        "py": "shù mài",
        "hv": "SÁC MẠCH",
        "mean": "mạch sác (nhanh)"
      },
      {
        "zh": "弦脉",
        "py": "xián mài",
        "hv": "HUYỀN MẠCH",
        "mean": "mạch huyền (căng như dây đàn)"
      },
      {
        "zh": "滑脉",
        "py": "huá mài",
        "hv": "HOẠT MẠCH",
        "mean": "mạch hoạt (trơn)"
      },
      {
        "zh": "涩脉",
        "py": "sè mài",
        "hv": "SÁP MẠCH",
        "mean": "mạch sáp (trắc trở)/sáp"
      },
      {
        "zh": "细脉",
        "py": "xì mài",
        "hv": "TẾ MẠCH",
        "mean": "mạch tế (nhỏ)"
      },
      {
        "zh": "洪脉",
        "py": "hóng mài",
        "hv": "HỒNG MẠCH",
        "mean": "mạch hồng (lớn, tràn đầy)"
      },
      {
        "zh": "紧脉",
        "py": "jǐn mài",
        "hv": "KHẨN MẠCH",
        "mean": "mạch khẩn (căng căng)"
      },
      {
        "zh": "濡脉",
        "py": "rú mài",
        "hv": "NHU MẠCH",
        "mean": "mạch nhu (mềm, nhuyễn)"
      },
      {
        "zh": "芤脉",
        "py": "kōu mài",
        "hv": "KHẤU MẠCH",
        "mean": "mạch khấu (rỗng như hành)"
      },
      {
        "zh": "代脉",
        "py": "dài mài",
        "hv": "ĐẠI MẠCH",
        "mean": "mạch đại (ngắt quãng đều)"
      },
      {
        "zh": "结脉",
        "py": "jié mài",
        "hv": "KẾT MẠCH",
        "mean": "mạch kết (ngắt quãng không đều chậm)"
      },
      {
        "zh": "促脉",
        "py": "cù mài",
        "hv": "XÚC MẠCH",
        "mean": "mạch xúc (ngắt quãng nhanh)"
      },
      {
        "zh": "寸关尺",
        "py": "cùn guān chǐ",
        "hv": "THỐN QUAN XÍCH",
        "mean": "thốn-quan-xích (ba vị trí bắt mạch ở cổ tay)"
      },
      {
        "zh": "脉象",
        "py": "mài xiàng",
        "hv": "MẠCH TƯỢNG",
        "mean": "mạch tượng (hình tượng của mạch)"
      },
      {
        "zh": "舌质",
        "py": "shé zhì",
        "hv": "THIỆT CHẤT",
        "mean": "chất lưỡi (thân lưỡi)"
      },
      {
        "zh": "舌苔",
        "py": "shé tāi",
        "hv": "THIỆT ĐÀI",
        "mean": "rêu lưỡi (đài lưỡi)"
      },
      {
        "zh": "淡红舌",
        "py": "dàn hóng shé",
        "hv": "ĐẠM HỒNG THIỆT",
        "mean": "lưỡi hồng nhạt (bình thường)"
      },
      {
        "zh": "红舌",
        "py": "hóng shé",
        "hv": "HỒNG THIỆT",
        "mean": "lưỡi đỏ (nhiệt)"
      },
      {
        "zh": "绛舌",
        "py": "jiàng shé",
        "hv": "GIÁNG THIỆT",
        "mean": "lưỡi giáng/tím đỏ (nhiệt nặng)"
      },
      {
        "zh": "紫舌",
        "py": "zǐ shé",
        "hv": "TỬ THIỆT",
        "mean": "lưỡi tím (ứ huyết)"
      },
      {
        "zh": "胖大舌",
        "py": "pàng dà shé",
        "hv": "BẠNG ĐẠI THIỆT",
        "mean": "lưỡi to bè (thấp, khí hư)"
      },
      {
        "zh": "齿痕",
        "py": "chǐ hén",
        "hv": "XỈ NGÂN",
        "mean": "dấu răng (trên lưỡi)"
      },
      {
        "zh": "裂纹舌",
        "py": "liè wén shé",
        "hv": "LIỆT VĂN THIỆT",
        "mean": "lưỡi nứt (tân dịch hao)"
      },
      {
        "zh": "白苔",
        "py": "bái tái",
        "hv": "BẠCH ĐÀI",
        "mean": "rêu trắng"
      },
      {
        "zh": "黄苔",
        "py": "huáng tái",
        "hv": "HOÀNG ĐÀI",
        "mean": "rêu vàng (nhiệt)"
      },
      {
        "zh": "腻苔",
        "py": "nì tái",
        "hv": "NỊ ĐÀI",
        "mean": "rêu nị/nhớt (thấp trọc)"
      },
      {
        "zh": "阴阳辨证",
        "py": "yīn yáng biàn zhèng",
        "hv": "ÂM DƯƠNG BIỆN CHỨNG",
        "mean": "biện chứng âm dương"
      },
      {
        "zh": "表里辨证",
        "py": "biǎo lǐ biàn zhèng",
        "hv": "BIỂU LÝ BIỆN CHỨNG",
        "mean": "biện chứng biểu lý (nông sâu)"
      },
      {
        "zh": "寒热辨证",
        "py": "hán rè biàn zhèng",
        "hv": "HÀN NHIỆT BIỆN CHỨNG",
        "mean": "biện chứng hàn nhiệt (lạnh nóng)"
      },
      {
        "zh": "虚实辨证",
        "py": "xū shí biàn zhèng",
        "hv": "HƯ THỰC BIỆN CHỨNG",
        "mean": "biện chứng hư thực (thiếu thừa)"
      },
      {
        "zh": "气血津液辨证",
        "py": "qì xuè jīn yè biàn zhèng",
        "hv": "KHÍ HUYẾT TÂN DỊCH BIỆN CHỨNG",
        "mean": "biện chứng khí huyết tân dịch"
      },
      {
        "zh": "卫气营血辨证",
        "py": "wèi qì yíng xuè biàn zhèng",
        "hv": "VỆ KHÍ DOANH HUYẾT BIỆN CHỨNG",
        "mean": "biện chứng vệ-khí-doanh-huyết (ông bệnh)"
      },
      {
        "zh": "三焦辨证",
        "py": "sān jiāo biàn zhèng",
        "hv": "TAM TIÊU BIỆN CHỨNG",
        "mean": "biện chứng tam tiêu (bệnh ôn)"
      },
      {
        "zh": "辨证求因",
        "py": "biàn zhèng qiú yīn",
        "hv": "BIỆN CHỨNG CẦU NHÂN",
        "mean": "biện chứng tìm nguyên nhân"
      },
      {
        "zh": "审因论治",
        "py": "shěn yīn lùn zhì",
        "hv": "THẨM NHÂN LUẬN TRỊ",
        "mean": "thẩm nhân luận trị (xét nhân rồi trị)"
      },
      {
        "zh": "病机",
        "py": "bìng jī",
        "hv": "BỆNH CƠ",
        "mean": "bệnh cơ (cơ chế bệnh)"
      },
      {
        "zh": "正邪",
        "py": "zhèng xié",
        "hv": "CHÍNH TÀ",
        "mean": "chính tà (chính khí và tà khí)"
      },
      {
        "zh": "正虚",
        "py": "zhèng xū",
        "hv": "CHÍNH HƯ",
        "mean": "chính hư (chính khí suy)"
      },
      {
        "zh": "邪实",
        "py": "xié shí",
        "hv": "TÀ THỰC",
        "mean": "tà thực (tà khí thịnh)"
      },
      {
        "zh": "标本兼治",
        "py": "biāo běn jiān zhì",
        "hv": "TIÊU BẢN KIÊM TRỊ",
        "mean": "trị cả tiêu lẫn bản"
      },
      {
        "zh": "急则治标",
        "py": "jí zé zhì biāo",
        "hv": "CẤP TẮC TRỊ TIÊU",
        "mean": "cấp thì trị tiêu (trị ngọn trước)"
      },
      {
        "zh": "缓则治本",
        "py": "huǎn zé zhì běn",
        "hv": "HOÃN TẮC TRỊ BẢN",
        "mean": "hoãn thì trị bản (trị gốc)"
      },
      {
        "zh": "君药",
        "py": "jūn yào",
        "hv": "QUÂN DƯỢC",
        "mean": "quân dược (vị thuốc chủ)"
      },
      {
        "zh": "臣药",
        "py": "chén yào",
        "hv": "THẦN DƯỢC",
        "mean": "thần dược (vị thuốc phụ trợ)"
      },
      {
        "zh": "佐药",
        "py": "zuǒ yào",
        "hv": "TÁ DƯỢC",
        "mean": "tá dược (vị thuốc hỗ trợ)"
      },
      {
        "zh": "使药",
        "py": "shǐ yào",
        "hv": "SỨ DƯỢC",
        "mean": "sứ dược (vị thuốc dẫn)"
      },
      {
        "zh": "功效",
        "py": "gōng xiào",
        "hv": "CÔNG HIỆU",
        "mean": "công hiệu (hiệu quả của thuốc)"
      },
      {
        "zh": "主治",
        "py": "zhǔ zhì",
        "hv": "CHỦ TRỊ",
        "mean": "chủ trị (bệnh chính điều trị)"
      },
      {
        "zh": "炮制",
        "py": "páo zhì",
        "hv": "BÀO CHẾ",
        "mean": "bào chế (chế biến thuốc)"
      },
      {
        "zh": "性味",
        "py": "xìng wèi",
        "hv": "TÍNH VỊ",
        "mean": "tính vị (tính và vị thuốc)"
      },
      {
        "zh": "道地药材",
        "py": "dào dì yào cái",
        "hv": "ĐẠO ĐỊA DƯỢC TÀI",
        "mean": "dược liệu đạo địa (vùng sản xuất chuẩn)"
      },
      {
        "zh": "煎药",
        "py": "jiān yào",
        "hv": "TIỄN DƯỢC",
        "mean": "sắc thuốc"
      },
      {
        "zh": "服法",
        "py": "fú fǎ",
        "hv": "PHỤC PHÁP",
        "mean": "cách dùng thuốc"
      },
      {
        "zh": "禁忌",
        "py": "jìn jì",
        "hv": "CẤM KỴ",
        "mean": "cấm kỵ (chống chỉ định)"
      },
      {
        "zh": "剂量",
        "py": "jì liàng",
        "hv": "TẾ LƯỢNG",
        "mean": "liều lượng (thuốc)"
      },
      {
        "zh": "复方",
        "py": "fù fāng",
        "hv": "PHỨC PHƯƠNG",
        "mean": "phức phương (bài thuốc nhiều vị)"
      },
      {
        "zh": "单方",
        "py": "dān fāng",
        "hv": "ĐƠN PHƯƠNG",
        "mean": "đơn phương (bài thuốc một vị)"
      },
      {
        "zh": "难经",
        "py": "nán jīng",
        "hv": "NẠN KINH",
        "mean": "Nạn Kinh (vấn đáp kinh điển)"
      },
      {
        "zh": "伤寒论",
        "py": "shāng hán lùn",
        "hv": "THƯƠNG HÀN LUẬN",
        "mean": "Thương Hàn Luận (Trương Trọng Cảnh)"
      },
      {
        "zh": "金匮要略",
        "py": "jīn kuì yào lüè",
        "hv": "KIM QUỸ YẾU LƯỢC",
        "mean": "Kim Quỹ Yếu Lược (Trương Trọng Cảnh)"
      },
      {
        "zh": "神农本草经",
        "py": "shén nóng běn cǎo jīng",
        "hv": "THẦN NÔNG BẢN THẢO KINH",
        "mean": "Thần Nông Bản Thảo Kinh"
      },
      {
        "zh": "本草纲目",
        "py": "běn cǎo gāng mù",
        "hv": "BẢN THẢO CƯƠNG MỤC",
        "mean": "Bản Thảo Cương Mục (Lý Thời Trân)"
      },
      {
        "zh": "温病条辨",
        "py": "wēn bìng tiáo biàn",
        "hv": "ÔN BỆNH ĐIỀU BIỆN",
        "mean": "Ôn Bệnh Điều Biện (Ngô Cúc Thông)"
      },
      {
        "zh": "温热论",
        "py": "wēn rè lùn",
        "hv": "ÔN NHIỆT LUẬN",
        "mean": "Ôn Nhiệt Luận (Diệp Thiên Sĩ)"
      },
      {
        "zh": "针灸甲乙经",
        "py": "zhēn jiǔ jiǎ yǐ jīng",
        "hv": "CHÂM CỨU GIÁP ẤT KINH",
        "mean": "Châm Cứu Giáp Ất Kinh"
      },
      {
        "zh": "脉经",
        "py": "mài jīng",
        "hv": "MẠCH KINH",
        "mean": "Mạch Kinh (Vương Thúc Hòa)"
      },
      {
        "zh": "肘后方",
        "py": "zhǒu hòu fāng",
        "hv": "CHẨU HẬU PHƯƠNG",
        "mean": "Chẩu Hậu Phương (Cát Hồng)"
      },
      {
        "zh": "千金要方",
        "py": "qiān jīn yào fāng",
        "hv": "THIÊN KIM YẾU PHƯƠNG",
        "mean": "Thiên Kim Yếu Phương (Tôn Tư Mạc)"
      },
      {
        "zh": "诸病源候论",
        "py": "zhū bìng yuán hòu lùn",
        "hv": "CHƯ BỆNH NGUYÊN HẦU LUẬN",
        "mean": "Chư Bệnh Nguyên Hầu Luận (đàm luận bệnh nguyên)"
      },
      {
        "zh": "汤头歌诀",
        "py": "tāng tóu gē jué",
        "hv": "THANG ĐẦU CA QUYẾT",
        "mean": "Thang Đầu Ca Quyết (bài ca về phương thuốc)"
      },
      {
        "zh": "方书之祖",
        "py": "fāng shū zhī zǔ",
        "hv": "PHƯƠNG THƯ CHI TỔ",
        "mean": "tổ của các sách phương (chỉ Thương Hàn Tạp Bệnh Luận)"
      },
      {
        "zh": "医案",
        "py": "yī àn",
        "hv": "Y ÁN",
        "mean": "y án (bệnh án y học)"
      },
      {
        "zh": "各家学说",
        "py": "gè jiā xué shuō",
        "hv": "CÁC GIA HỌC THUYẾT",
        "mean": "các gia học thuyết (các trường phái)"
      },
      {
        "zh": "金元四大家",
        "py": "jīn yuán sì dà jiā",
        "hv": "KIM NGUYÊN TỨ ĐẠI GIA",
        "mean": "tứ đại gia đời Kim-Nguyên (Lưu Tố Nghị, Trương Tùng Chính, Lý Cao, Chu Đan Khê)"
      },
      {
        "zh": "丹溪学派",
        "py": "dān xī xué pài",
        "hv": "ĐAN KHÊ HỌC PHÁI",
        "mean": "phái Đan Khê (chu trấn hanh, trọng tư âm)"
      },
      {
        "zh": "温补学派",
        "py": "wēn bǔ xué pài",
        "hv": "ÔN BỔ HỌC PHÁI",
        "mean": "phái ôn bổ (ôn bổ thận dương)"
      },
      {
        "zh": "滋阴派",
        "py": "zī yīn pài",
        "hv": "TƯ ÂM PHÁI",
        "mean": "phái tư âm (bồi âm)"
      },
      {
        "zh": "攻邪派",
        "py": "gōng xié pài",
        "hv": "CÔNG TÀ PHÁI",
        "mean": "phái công tà (trục tà)"
      },
      {
        "zh": "补土派",
        "py": "bǔ tǔ pài",
        "hv": "BỔ THỔ PHÁI",
        "mean": "phái bổ thổ (bồi tỳ)"
      },
      {
        "zh": "寒凉派",
        "py": "hán liáng pài",
        "hv": "HÀN LƯƠNG PHÁI",
        "mean": "phái hàn lương (dùng thuốc mát)"
      },
      {
        "zh": "导引",
        "py": "dǎo yǐn",
        "hv": "ĐẠO DẪN",
        "mean": "đạo dẫn (bài tập dẫn khí)"
      },
      {
        "zh": "气功",
        "py": "qì gōng",
        "hv": "KHÍ CÔNG",
        "mean": "khí công"
      },
      {
        "zh": "刮痧",
        "py": "guā shā",
        "hv": "QUÁT SA",
        "mean": "cạo gió (quát sa)"
      },
      {
        "zh": "拔罐",
        "py": "bá guàn",
        "hv": "BẠT QUÁN",
        "mean": "giác hơi (bạt quán)"
      },
      {
        "zh": "刺血",
        "py": "cì xuè",
        "hv": "THÍCH HUYẾT",
        "mean": "chích máu (thả huyết)"
      },
      {
        "zh": "耳穴",
        "py": "ěr xué",
        "hv": "NHĨ HUYỆT",
        "mean": "huyệt tai (nhĩ huyệt liệu pháp)"
      },
      {
        "zh": "灸法",
        "py": "jiǔ fǎ",
        "hv": "CỨU PHÁP",
        "mean": "phép cứu (cứu pháp)"
      },
      {
        "zh": "温针灸",
        "py": "wēn zhēn jiǔ",
        "hv": "ÔN CHÂM CỨU",
        "mean": "ôn châm cứu (châm kết hợp cứu)"
      },
      {
        "zh": "电针",
        "py": "diàn zhēn",
        "hv": "ĐIỆN CHÂM",
        "mean": "điện châm (châm có kích thích điện)"
      },
      {
        "zh": "火罐",
        "py": "huǒ guàn",
        "hv": "HỎA QUÁN",
        "mean": "giác hơi lửa (hỏa quán)"
      },
      {
        "zh": "补泻",
        "py": "bǔ xiè",
        "hv": "BỔ TẢ",
        "mean": "bổ tả (bổ và tả trong châm cứu)"
      },
      {
        "zh": "迎随补泻",
        "py": "yíng suí bǔ xiè",
        "hv": "NGHÊNH TÙY BỔ TẢ",
        "mean": "nghênh tùy bổ tả (bổ tả theo chiều kinh)"
      },
      {
        "zh": "循证医学",
        "py": "xún zhèng yī xué",
        "hv": "TUẦN CHỨNG Y HỌC",
        "mean": "y học dựa trên bằng chứng (EBM)"
      },
      {
        "zh": "随机对照试验",
        "py": "suí jī duì zhào shì yàn",
        "hv": "TÙY CƠ ĐỐI CHIẾU THÍ NGHIỆM",
        "mean": "thử nghiệm ngẫu nhiên có đối chứng (RCT)"
      },
      {
        "zh": "临床研究",
        "py": "lín chuáng yán jiū",
        "hv": "LÂM SÀNG NGHIÊN CỨU",
        "mean": "nghiên cứu lâm sàng"
      },
      {
        "zh": "中医现代化",
        "py": "zhōng yī xiàn dài huà",
        "hv": "TRUNG Y HIỆN ĐẠI HÓA",
        "mean": "hiện đại hóa Trung y"
      },
      {
        "zh": "中药药理学",
        "py": "zhōng yào yào lǐ xué",
        "hv": "TRUNG DƯỢC DƯỢC LÝ HỌC",
        "mean": "dược lý học Trung dược"
      },
      {
        "zh": "药效学",
        "py": "yào xiào xué",
        "hv": "DƯỢC HIỆU HỌC",
        "mean": "dược hiệu học (nghiên cứu tác dụng thuốc)"
      },
      {
        "zh": "毒理学",
        "py": "dú lǐ xué",
        "hv": "ĐỘC LÝ HỌC",
        "mean": "độc lý học (nghiên cứu độc tính)"
      },
      {
        "zh": "质量标准",
        "py": "zhì liàng biāo zhǔn",
        "hv": "CHẤT LƯỢNG TIÊU CHUẨN",
        "mean": "tiêu chuẩn chất lượng (dược liệu)"
      },
      {
        "zh": "统计",
        "py": "tǒngjì",
        "hv": "THỐNG KÊ",
        "mean": "thống kê (statistics)"
      },
      {
        "zh": "统计学",
        "py": "tǒngjìxué",
        "hv": "THỐNG KÊ HỌC",
        "mean": "môn thống kê"
      },
      {
        "zh": "医学统计学",
        "py": "yīxué tǒngjìxué",
        "hv": "Y HỌC THỐNG KÊ HỌC",
        "mean": "thống kê y học (medical statistics)"
      },
      {
        "zh": "参数",
        "py": "cānshù",
        "hv": "THAM SỐ",
        "mean": "tham số (parameter)"
      },
      {
        "zh": "参数估计",
        "py": "cānshù gūjì",
        "hv": "THAM SỐ ƯỚC KẾ",
        "mean": "ước lượng tham số"
      },
      {
        "zh": "总体",
        "py": "zǒngtǐ",
        "hv": "TỔNG THỂ",
        "mean": "tổng thể (population)"
      },
      {
        "zh": "样本",
        "py": "yàngběn",
        "hv": "MẪU BẢN",
        "mean": "mẫu (sample)"
      },
      {
        "zh": "抽样",
        "py": "chōuyàng",
        "hv": "TRỪU DẠNG",
        "mean": "lấy mẫu (sampling)"
      },
      {
        "zh": "抽样误差",
        "py": "chōuyàng wùchā",
        "hv": "TRỪU DẠNG SAI SAI",
        "mean": "sai số lấy mẫu"
      },
      {
        "zh": "均数",
        "py": "jūnshù",
        "hv": "QUÂN SỐ",
        "mean": "số trung bình (mean)"
      },
      {
        "zh": "标准差",
        "py": "biāozhǔnchā",
        "hv": "TIÊU CHUẨN SAI",
        "mean": "độ lệch chuẩn (SD)"
      },
      {
        "zh": "标准误",
        "py": "biāozhǔnwù",
        "hv": "TIÊU CHUẨN NGỖ",
        "mean": "sai số chuẩn (SE)"
      },
      {
        "zh": "方差",
        "py": "fāngchā",
        "hv": "PHƯƠNG SAI",
        "mean": "phương sai (variance)"
      },
      {
        "zh": "方差分析",
        "py": "fāngchā fēnxī",
        "hv": "PHƯƠNG SAI PHÂN TÍCH",
        "mean": "phân tích phương sai (ANOVA)"
      },
      {
        "zh": "变异",
        "py": "biànyì",
        "hv": "BIẾN DỊ",
        "mean": "biến thiên (variation)"
      },
      {
        "zh": "变异系数",
        "py": "biànyì xìshù",
        "hv": "BIẾN DỊ HỆ SỐ",
        "mean": "hệ số biến thiên (CV)"
      },
      {
        "zh": "置信区间",
        "py": "zhìxìn qūjiān",
        "hv": "TRÍ TÍN KHU GIAN",
        "mean": "khoảng tin cậy (CI)"
      },
      {
        "zh": "置信度",
        "py": "zhìxìndù",
        "hv": "TRÍ TÍN ĐỘ",
        "mean": "độ tin cậy (confidence level)"
      },
      {
        "zh": "假设检验",
        "py": "jiǎshè jiǎnyàn",
        "hv": "GIẢ THIẾT KIỂM NGHIỆM",
        "mean": "kiểm định giả thuyết (hypothesis testing)"
      },
      {
        "zh": "假设",
        "py": "jiǎshè",
        "hv": "GIẢ THIẾT",
        "mean": "giả thuyết"
      },
      {
        "zh": "检验",
        "py": "jiǎnyàn",
        "hv": "KIỂM NGHIỆM",
        "mean": "kiểm định (test)"
      },
      {
        "zh": "检验效能",
        "py": "jiǎnyàn xiàonéng",
        "hv": "KIỂM NGHIỆM HIỆU NĂNG",
        "mean": "năng lực kiểm định (power)"
      },
      {
        "zh": "检验水准",
        "py": "jiǎnyàn shuǐzhǔn",
        "hv": "KIỂM NGHIỆM THỦY CHUẨN",
        "mean": "mức ý nghĩa (α)"
      },
      {
        "zh": "显著性",
        "py": "xiǎnzhùxìng",
        "hv": "HIỂN TRỨ TÍNH",
        "mean": "ý nghĩa (significance)"
      },
      {
        "zh": "显著性检验",
        "py": "xiǎnzhùxìng jiǎnyàn",
        "hv": "HIỂN TRỨ TÍNH KIỂM NGHIỆM",
        "mean": "kiểm định ý nghĩa thống kê"
      },
      {
        "zh": "概率",
        "py": "gàilǜ",
        "hv": "KHÁI SUẤT",
        "mean": "xác suất (probability)"
      },
      {
        "zh": "正态分布",
        "py": "zhèngtài fēnbù",
        "hv": "CHÍNH THÁI PHÂN BỐ",
        "mean": "phân bố chuẩn (normal)"
      },
      {
        "zh": "二项分布",
        "py": "èrxiàng fēnbù",
        "hv": "NHỊ HẠNG PHÂN BỐ",
        "mean": "phân bố nhị thức (binomial)"
      },
      {
        "zh": "分布",
        "py": "fēnbù",
        "hv": "PHÂN BỐ",
        "mean": "phân bố / phân phối (distribution)"
      },
      {
        "zh": "卡方检验",
        "py": "kǎfāng jiǎnyàn",
        "hv": "KHẢ PHƯƠNG KIỂM NGHIỆM",
        "mean": "kiểm định chi bình phương (X²)"
      },
      {
        "zh": "卡方分布",
        "py": "kǎfāng fēnbù",
        "hv": "KHẢ PHƯƠNG PHÂN BỐ",
        "mean": "phân bố chi bình phương"
      },
      {
        "zh": "t检验",
        "py": "t jiǎnyàn",
        "hv": "T KIỂM NGHIỆM",
        "mean": "kiểm định t"
      },
      {
        "zh": "F检验",
        "py": "F jiǎnyàn",
        "hv": "F KIỂM NGHIỆM",
        "mean": "kiểm định F"
      },
      {
        "zh": "非参数检验",
        "py": "fēicānshù jiǎnyàn",
        "hv": "PHI THAM SỐ KIỂM NGHIỆM",
        "mean": "kiểm định phi tham số"
      },
      {
        "zh": "秩和检验",
        "py": "zhìhé jiǎnyàn",
        "hv": "CHẤT HÒA KIỂM NGHIỆM",
        "mean": "kiểm định tổng hạng (rank-sum)"
      },
      {
        "zh": "秩和",
        "py": "zhìhé",
        "hv": "CHẤT HÒA",
        "mean": "tổng hạng (rank sum)"
      },
      {
        "zh": "配对",
        "py": "pèiduì",
        "hv": "PHỐI ĐỐI",
        "mean": "bắt cặp (paired)"
      },
      {
        "zh": "配对设计",
        "py": "pèiduì shèjì",
        "hv": "PHỐI ĐỐI THIẾT KẾ",
        "mean": "thiết kế bắt cặp"
      },
      {
        "zh": "完全随机设计",
        "py": "wánquán suíjī shèjì",
        "hv": "HOÀN TOÀN TÙY CƠ THIẾT KẾ",
        "mean": "thiết kế hoàn toàn ngẫu nhiên"
      },
      {
        "zh": "随机",
        "py": "suíjī",
        "hv": "TÙY CƠ",
        "mean": "ngẫu nhiên (random)"
      },
      {
        "zh": "四格表",
        "py": "sìgébiao",
        "hv": "TỨ CÁCH BIỂU",
        "mean": "bảng 2x2 (fourfold table)"
      },
      {
        "zh": "行×列表",
        "py": "háng lièbiǎo",
        "hv": "HÀNH LIỆT BIỂU",
        "mean": "bảng hàng×cột (RxC)"
      },
      {
        "zh": "自由度",
        "py": "zìyóudù",
        "hv": "TỰ DO ĐỘ",
        "mean": "bậc tự do (df)"
      },
      {
        "zh": "回归分析",
        "py": "huíguī fēnxī",
        "hv": "HỒI QUY PHÂN TÍCH",
        "mean": "phân tích hồi quy"
      },
      {
        "zh": "回归系数",
        "py": "huíguī xìshù",
        "hv": "HỒI QUY HỆ SỐ",
        "mean": "hệ số hồi quy (regression coefficient)"
      },
      {
        "zh": "相关系数",
        "py": "xiāngguān xìshù",
        "hv": "TƯƠNG QUAN HỆ SỐ",
        "mean": "hệ số tương quan (correlation)"
      },
      {
        "zh": "相关分析",
        "py": "xiāngguān fēnxī",
        "hv": "TƯƠNG QUAN PHÂN TÍCH",
        "mean": "phân tích tương quan"
      },
      {
        "zh": "变量",
        "py": "biànliàng",
        "hv": "BIẾN LƯỢNG",
        "mean": "biến số (variable)"
      },
      {
        "zh": "自变量",
        "py": "zìbiànliàng",
        "hv": "TỰ BIẾN LƯỢNG",
        "mean": "biến độc lập"
      },
      {
        "zh": "因变量",
        "py": "yīnbiànliàng",
        "hv": "NHÂN BIẾN LƯỢNG",
        "mean": "biến phụ thuộc"
      },
      {
        "zh": "分类变量",
        "py": "fēnlèi biànliàng",
        "hv": "PHÂN LOẠI BIẾN LƯỢNG",
        "mean": "biến phân loại (categorical)"
      },
      {
        "zh": "数值变量",
        "py": "shùzhí biànliàng",
        "hv": "SỐ TRỊ BIẾN LƯỢNG",
        "mean": "biến định lượng (numeric)"
      },
      {
        "zh": "计量资料",
        "py": "jìliàng zīliào",
        "hv": "KẾ LƯỢNG TƯ LIỆU",
        "mean": "dữ liệu định lượng"
      },
      {
        "zh": "计数资料",
        "py": "jìshù zīliào",
        "hv": "KẾ SỐ TƯ LIỆU",
        "mean": "dữ liệu đếm (count data)"
      },
      {
        "zh": "等级资料",
        "py": "děngjí zīliào",
        "hv": "ĐẲNG CẤP TƯ LIỆU",
        "mean": "dữ liệu thứ bậc (ordinal)"
      },
      {
        "zh": "频数",
        "py": "pínshù",
        "hv": "TẦN SỐ",
        "mean": "tần số (frequency)"
      },
      {
        "zh": "频数分布",
        "py": "pínshù fēnbù",
        "hv": "TẦN SỐ PHÂN BỐ",
        "mean": "phân bố tần số"
      },
      {
        "zh": "构成比",
        "py": "gòuchéngbǐ",
        "hv": "CẤU THÀNH TỈ",
        "mean": "tỉ trọng thành phần (proportion)"
      },
      {
        "zh": "相对数",
        "py": "xiāngduìshù",
        "hv": "TƯƠNG ĐỐI SỐ",
        "mean": "số tương đối"
      },
      {
        "zh": "百分比",
        "py": "bǎifēnbǐ",
        "hv": "BÁCH PHÂN BỈ",
        "mean": "phần trăm"
      },
      {
        "zh": "中位数",
        "py": "zhōngwèishù",
        "hv": "TRUNG VỊ SỐ",
        "mean": "trung vị (median)"
      },
      {
        "zh": "众数",
        "py": "zhòngshù",
        "hv": "CHÚNG SỐ",
        "mean": "yếu vị / mốt (mode)"
      },
      {
        "zh": "几何均数",
        "py": "jǐhé jūnshù",
        "hv": "KỈ HÀ QUÂN SỐ",
        "mean": "trung bình nhân (geometric mean)"
      },
      {
        "zh": "极差",
        "py": "jíchā",
        "hv": "CỰC SAI",
        "mean": "khoảng biến thiên (range)"
      },
      {
        "zh": "四分位数",
        "py": "sìfēnwèishù",
        "hv": "TỨ PHÂN VỊ SỐ",
        "mean": "tứ phân vị (quartile)"
      },
      {
        "zh": "百分位数",
        "py": "bǎifēnwèishù",
        "hv": "BÁCH PHÂN VỊ SỐ",
        "mean": "bách phân vị (percentile)"
      },
      {
        "zh": "拟合优度",
        "py": "nǐhé yōudù",
        "hv": "NGHĨ HỢP ƯU ĐỘ",
        "mean": "độ phù hợp (goodness of fit)"
      },
      {
        "zh": "正态性检验",
        "py": "zhèngtàixìng jiǎnyàn",
        "hv": "CHÍNH THÁI TÍNH KIỂM NGHIỆM",
        "mean": "kiểm định tính chuẩn"
      },
      {
        "zh": "方差齐性检验",
        "py": "fāngchā qíxìng jiǎnyàn",
        "hv": "PHƯƠNG SAI TỀ TÍNH KIỂM NGHIỆM",
        "mean": "kiểm định tính đồng nhất phương sai"
      },
      {
        "zh": "交互作用",
        "py": "jiāohù zuòyòng",
        "hv": "GIAO HỖ TÁC DỤNG",
        "mean": "tương tác (interaction)"
      },
      {
        "zh": "主效应",
        "py": "zhǔ xiàoyìng",
        "hv": "CHỦ HIỆU ỨNG",
        "mean": "hiệu ứng chính (main effect)"
      },
      {
        "zh": "析因设计",
        "py": "xīyīn shèjì",
        "hv": "TÍCH NHÂN THIẾT KẾ",
        "mean": "thiết kế giai thừa (factorial)"
      },
      {
        "zh": "正交设计",
        "py": "zhèngjiāo shèjì",
        "hv": "CHÍNH GIAO THIẾT KẾ",
        "mean": "thiết kế trực giao (orthogonal)"
      },
      {
        "zh": "嵌套设计",
        "py": "qiàntào shèjì",
        "hv": "KHIÊN SÁO THIẾT KẾ",
        "mean": "thiết kế lồng (nested)"
      },
      {
        "zh": "多中心",
        "py": "duōzhōngxīn",
        "hv": "ĐA TRUNG TÂM",
        "mean": "đa trung tâm (multicenter)"
      },
      {
        "zh": "有效率",
        "py": "yǒuxiàolǜ",
        "hv": "HỮU HIỆU SUẤT",
        "mean": "tỉ lệ hiệu quả"
      },
      {
        "zh": "治愈",
        "py": "zhìyù",
        "hv": "TRỊ DŨ",
        "mean": "khỏi bệnh / chữa khỏi (cure)"
      },
      {
        "zh": "对照",
        "py": "duìzhào",
        "hv": "ĐỐI CHIẾU",
        "mean": "đối chứng (control)"
      },
      {
        "zh": "对照组",
        "py": "duìzhàozǔ",
        "hv": "ĐỐI CHIẾU TỔ",
        "mean": "nhóm đối chứng"
      },
      {
        "zh": "实验组",
        "py": "shíyànzǔ",
        "hv": "THỰC NGHIỆM TỔ",
        "mean": "nhóm thực nghiệm"
      },
      {
        "zh": "试验",
        "py": "shìyàn",
        "hv": "THÍ NGHIỆM",
        "mean": "thử nghiệm (trial)"
      },
      {
        "zh": "样本量",
        "py": "yàngběnliàng",
        "hv": "MẪU BẢN LƯỢNG",
        "mean": "cỡ mẫu (sample size)"
      },
      {
        "zh": "观察",
        "py": "guānchá",
        "hv": "QUAN SÁT",
        "mean": "quan sát (observation)"
      },
      {
        "zh": "随访",
        "py": "suífǎng",
        "hv": "TÙY PHỎNG",
        "mean": "theo dõi (follow-up)"
      },
      {
        "zh": "两独立样本",
        "py": "liǎng dúlì yàngběn",
        "hv": "LƯỠNG ĐỘC LẬP MẪU BẢN",
        "mean": "hai mẫu độc lập"
      },
      {
        "zh": "单样本",
        "py": "dān yàngběn",
        "hv": "ĐƠN MẪU BẢN",
        "mean": "mẫu đơn (one sample)"
      },
      {
        "zh": "校正",
        "py": "jiàozhèng",
        "hv": "HIỆU CHÍNH",
        "mean": "hiệu chỉnh (correction)"
      },
      {
        "zh": "率或构成比",
        "py": "lǜ huò gòuchéngbǐ",
        "hv": "SUẤT HOẶC CẤU THÀNH TỈ",
        "mean": "tỉ lệ hoặc tỉ trọng"
      },
      {
        "zh": "多重比较",
        "py": "duōchóng bǐjiào",
        "hv": "ĐA TRÙNG BỈ GIẢO",
        "mean": "so sánh bội (multiple comparison)"
      },
      {
        "zh": "两两比较",
        "py": "liǎngliǎng bǐjiào",
        "hv": "LƯỠNG LƯỠNG BỈ GIẢO",
        "mean": "so sánh từng cặp (pairwise)"
      },
      {
        "zh": "线性趋势",
        "py": "xiànxìng qūshì",
        "hv": "TUYẾN TÍNH XU THẾ",
        "mean": "xu hướng tuyến tính (linear trend)"
      },
      {
        "zh": "秩相关",
        "py": "zhì xiāngguān",
        "hv": "CHẤT TƯƠNG QUAN",
        "mean": "tương quan hạng (rank correlation)"
      },
      {
        "zh": "等级相关",
        "py": "děngjí xiāngguān",
        "hv": "ĐẲNG CẤP TƯƠNG QUAN",
        "mean": "tương quan thứ bậc"
      },
      {
        "zh": "两类错误",
        "py": "liǎnglèi cuòwù",
        "hv": "LƯỠNG LOẠI THÁC NGỘ",
        "mean": "hai loại sai lầm (Type I & II error)"
      },
      {
        "zh": "第一类错误",
        "py": "dìyīlèi cuòwù",
        "hv": "ĐỆ NHẤT LOẠI THÁC NGỘ",
        "mean": "sai lầm loại I (α)"
      },
      {
        "zh": "第二类错误",
        "py": "dìèrlèi cuòwù",
        "hv": "ĐỆ NHỊ LOẠI THÁC NGỘ",
        "mean": "sai lầm loại II (β)"
      },
      {
        "zh": "参考值范围",
        "py": "cānkǎozhí fànwéi",
        "hv": "THAM KHẢO TRỊ PHẠM VI",
        "mean": "khoảng giá trị tham chiếu"
      },
      {
        "zh": "可信区间",
        "py": "kěxìn qūjiān",
        "hv": "KHẢ TÍN KHU GIAN",
        "mean": "khoảng tin cậy (CI)"
      },
      {
        "zh": "估计值",
        "py": "gūjìzhí",
        "hv": "ƯỚC KẾ TRỊ",
        "mean": "giá trị ước lượng"
      },
      {
        "zh": "可信度",
        "py": "kěxìndù",
        "hv": "KHẢ TÍN ĐỘ",
        "mean": "độ tin cậy"
      },
      {
        "zh": "主成分分析",
        "py": "zhǔ chéng fèn fēn xī",
        "hv": "CHỦ THÀNH PHẦN PHÂN TÍCH",
        "mean": "phân tích thành phần chính (PCA)"
      },
      {
        "zh": "因子分析",
        "py": "yīn zi fēn xī",
        "hv": "NHÂN TỬ PHÂN TÍCH",
        "mean": "phân tích nhân tố (factor analysis)"
      },
      {
        "zh": "聚类分析",
        "py": "jù lèi fēn xī",
        "hv": "TỤ LOẠI PHÂN TÍCH",
        "mean": "phân tích cụm (cluster analysis)"
      },
      {
        "zh": "判别分析",
        "py": "pàn bié fēn xī",
        "hv": "PHÁN BIỆT PHÂN TÍCH",
        "mean": "phân tích phân biệt (discriminant analysis)"
      },
      {
        "zh": "载荷",
        "py": "zài hè",
        "hv": "TẢI",
        "mean": "hệ số tải (loading)"
      },
      {
        "zh": "因子载荷",
        "py": "yīn zi zài hè",
        "hv": "NHÂN TỬ TẢI",
        "mean": "hệ số tải nhân tố (factor loading)"
      },
      {
        "zh": "旋转",
        "py": "xuán zhuǎn",
        "hv": "XOAY CHUYỂN",
        "mean": "xoay trục (rotation)"
      },
      {
        "zh": "方差最大化旋转",
        "py": "fāng chà zuì dà huà xuán zhuǎn",
        "hv": "PHƯƠNG SAI TỐI ĐẠI HÓA XOAY CHUYỂN",
        "mean": "xoay varimax (phương sai tối đa)"
      },
      {
        "zh": "特征值",
        "py": "tè zhēng zhí",
        "hv": "ĐẶC TRƯNG TRỊ",
        "mean": "giá trị riêng (eigenvalue)"
      },
      {
        "zh": "贡献率",
        "py": "gòng xiàn lǜ",
        "hv": "CỐNG HIẾN SUẤT",
        "mean": "tỉ lệ đóng góp (proportion of variance)"
      },
      {
        "zh": "偏相关",
        "py": "piān xiāng guān",
        "hv": "THIÊN TƯƠNG QUAN",
        "mean": "tương quan riêng phần (partial correlation)"
      },
      {
        "zh": "复相关",
        "py": "fù xiāng guān",
        "hv": "PHỤC TƯƠNG QUAN",
        "mean": "tương quan bội (multiple correlation)"
      },
      {
        "zh": "典型相关",
        "py": "diǎn xíng xiāng guān",
        "hv": "ĐIỂN HÌNH TƯƠNG QUAN",
        "mean": "tương quan chính tắc (canonical correlation)"
      },
      {
        "zh": "典型相关系数",
        "py": "diǎn xíng xiāng guān xì shù",
        "hv": "ĐIỂN HÌNH TƯƠNG QUAN HỆ SỐ",
        "mean": "hệ số tương quan chính tắc"
      },
      {
        "zh": "多重线性回归",
        "py": "duō zhòng xiàn xìng huí guī",
        "hv": "ĐA TRÙNG TUYẾN TÍNH HỒI QUY",
        "mean": "hồi quy tuyến tính bội (multiple linear regression)"
      },
      {
        "zh": "复相关系数",
        "py": "fù xiāng guān xì shù",
        "hv": "PHỤC TƯƠNG QUAN HỆ SỐ",
        "mean": "hệ số tương quan bội (multiple R)"
      },
      {
        "zh": "决定系数",
        "py": "jué dìng xì shù",
        "hv": "QUYẾT ĐỊNH HỆ SỐ",
        "mean": "hệ số xác định (R²)"
      },
      {
        "zh": "校正决定系数",
        "py": "jiào zhèng jué dìng xì shù",
        "hv": "HIỆU CHÍNH QUYẾT ĐỊNH HỆ SỐ",
        "mean": "hệ số xác định hiệu chỉnh (adjusted R²)"
      },
      {
        "zh": "标准化偏回归系数",
        "py": "biāo zhǔn huà piān huí guī xì shù",
        "hv": "TIÊU CHUẨN HÓA THIÊN HỒI QUY HỆ SỐ",
        "mean": "hệ số hồi quy riêng phần chuẩn hóa"
      },
      {
        "zh": "Logistic回归",
        "py": "Logistic huí guī",
        "hv": "LOGISTIC HỒI QUY",
        "mean": "hồi quy Logistic"
      },
      {
        "zh": "比值比",
        "py": "bǐ zhí bǐ",
        "hv": "TỈ TRỊ BỈ",
        "mean": "tỉ số chênh (OR)"
      },
      {
        "zh": "相对危险度",
        "py": "xiāng duì wēi xiǎn dù",
        "hv": "TƯƠNG ĐỐI NGUY HIỂM ĐỘ",
        "mean": "nguy cơ tương đối (RR)"
      },
      {
        "zh": "生存分析",
        "py": "shēng cún fēn xī",
        "hv": "SINH TỒN PHÂN TÍCH",
        "mean": "phân tích sống còn (survival analysis)"
      },
      {
        "zh": "生存时间",
        "py": "shēng cún shí jiān",
        "hv": "SINH TỒN THỜI GIAN",
        "mean": "thời gian sống còn (survival time)"
      },
      {
        "zh": "删失",
        "py": "shān shī",
        "hv": "SAN THẤT",
        "mean": "kiểm duyệt (censoring)"
      },
      {
        "zh": "生存曲线",
        "py": "shēng cún qū xiàn",
        "hv": "SINH TỒN KHÚC TUYẾN",
        "mean": "đường cong sống còn"
      },
      {
        "zh": "风险函数",
        "py": "fēng xiǎn hán shù",
        "hv": "PHONG HIỂM HÀM SỐ",
        "mean": "hàm nguy cơ (hazard function)"
      },
      {
        "zh": "风险比",
        "py": "fēng xiǎn bǐ",
        "hv": "PHONG HIỂM TỈ",
        "mean": "tỉ số nguy cơ (HR)"
      },
      {
        "zh": "协方差分析",
        "py": "xié fāng chà fēn xī",
        "hv": "HIỆP PHƯƠNG SAI PHÂN TÍCH",
        "mean": "phân tích hiệp phương sai (ANCOVA)"
      },
      {
        "zh": "协变量",
        "py": "xié biàn liàng",
        "hv": "HIỆP BIẾN LƯỢNG",
        "mean": "biến đồng hành (covariate)"
      },
      {
        "zh": "重复测量",
        "py": "chóng fù cè liáng",
        "hv": "TRÙNG PHỤC ĐO LƯỢNG",
        "mean": "đo lường lặp lại (repeated measures)"
      },
      {
        "zh": "贝叶斯",
        "py": "bèi yè sī",
        "hv": "BỐI DIỆP TƯ",
        "mean": "Bayes (xác suất Bayes)"
      },
      {
        "zh": "先验概率",
        "py": "xiān yàn gài lǜ",
        "hv": "TIÊN NGHIỆM XÁC SUẤT",
        "mean": "xác suất tiên nghiệm (prior)"
      },
      {
        "zh": "后验概率",
        "py": "hòu yàn gài lǜ",
        "hv": "HẬU NGHIỆM XÁC SUẤT",
        "mean": "xác suất hậu nghiệm (posterior)"
      },
      {
        "zh": "似然",
        "py": "shì rán",
        "hv": "TỰ NHIÊN",
        "mean": "hợp lý (likelihood)"
      },
      {
        "zh": "似然函数",
        "py": "shì rán hán shù",
        "hv": "TỰ NHIÊN HÀM SỐ",
        "mean": "hàm hợp lý (likelihood function)"
      },
      {
        "zh": "中介效应",
        "py": "zhōng jiè xiào yìng",
        "hv": "TRUNG GIỚI HIỆU ỨNG",
        "mean": "hiệu ứng trung gian (mediation effect)"
      },
      {
        "zh": "调节效应",
        "py": "tiáo jié xiào yìng",
        "hv": "ĐIỀU TIẾT HIỆU ỨNG",
        "mean": "hiệu ứng điều tiết (moderation effect)"
      },
      {
        "zh": "中介变量",
        "py": "zhōng jiè biàn liàng",
        "hv": "TRUNG GIỚI BIẾN LƯỢNG",
        "mean": "biến trung gian (mediator)"
      },
      {
        "zh": "调节变量",
        "py": "tiáo jié biàn liàng",
        "hv": "ĐIỀU TIẾT BIẾN LƯỢNG",
        "mean": "biến điều tiết (moderator)"
      },
      {
        "zh": "一致性",
        "py": "yí zhì xìng",
        "hv": "NHẤT TRÍ TÍNH",
        "mean": "tính nhất quán (agreement)"
      },
      {
        "zh": "一致性检验",
        "py": "yí zhì xìng jiǎn yàn",
        "hv": "NHẤT TRÍ TÍNH KIỂM NGHIỆM",
        "mean": "kiểm định tính nhất quán"
      },
      {
        "zh": "Kappa系数",
        "py": "Kappa xì shù",
        "hv": "KAPPA HỆ SỐ",
        "mean": "hệ số Kappa"
      },
      {
        "zh": "组内相关系数",
        "py": "zǔ nèi xiāng guān xì shù",
        "hv": "TỔ NỘI TƯƠNG QUAN HỆ SỐ",
        "mean": "hệ số tương quan nội lớp (ICC)"
      },
      {
        "zh": "量表",
        "py": "liàng biǎo",
        "hv": "LƯỢNG BIỂU",
        "mean": "thang đo (scale)"
      },
      {
        "zh": "信度",
        "py": "xìn dù",
        "hv": "TÍN ĐỘ",
        "mean": "độ tin cậy (reliability)"
      },
      {
        "zh": "效度",
        "py": "xiào dù",
        "hv": "HIỆU ĐỘ",
        "mean": "độ giá trị (validity)"
      },
      {
        "zh": "信度检验",
        "py": "xìn dù jiǎn yàn",
        "hv": "TÍN ĐỘ KIỂM NGHIỆM",
        "mean": "kiểm định độ tin cậy"
      },
      {
        "zh": "优效性",
        "py": "yōu xiào xìng",
        "hv": "ƯU HIỆU TÍNH",
        "mean": "tính ưu việt (superiority)"
      },
      {
        "zh": "非劣效性",
        "py": "fēi liè xiào xìng",
        "hv": "PHI LIỆT HIỆU TÍNH",
        "mean": "tính không kém hơn (non-inferiority)"
      },
      {
        "zh": "等效性",
        "py": "děng xiào xìng",
        "hv": "ĐẲNG HIỆU TÍNH",
        "mean": "tính tương đương (equivalence)"
      },
      {
        "zh": "系统评价",
        "py": "xì tǒng píng jià",
        "hv": "HỆ THỐNG BÌNH GIÁ",
        "mean": "đánh giá hệ thống (systematic review)"
      },
      {
        "zh": "Meta分析",
        "py": "Meta fēn xī",
        "hv": "META PHÂN TÍCH",
        "mean": "phân tích gộp (Meta-analysis)"
      },
      {
        "zh": "异质性",
        "py": "yì zhì xìng",
        "hv": "DỊ CHẤT TÍNH",
        "mean": "tính không đồng nhất (heterogeneity)"
      },
      {
        "zh": "发表偏倚",
        "py": "fā biǎo piān yǐ",
        "hv": "PHÁT BIỂU THIÊN Ỷ",
        "mean": "thiên lệch công bố (publication bias)"
      },
      {
        "zh": "临床预测模型",
        "py": "lín chuáng yù cè mó xíng",
        "hv": "LÂM SÀNG DỰ TRẮC MÔ HÌNH",
        "mean": "mô hình dự đoán lâm sàng"
      },
      {
        "zh": "列线图",
        "py": "liè xiàn tú",
        "hv": "LIỆT TUYẾN ĐỒ",
        "mean": "biểu đồ nomogram"
      },
      {
        "zh": "校准",
        "py": "jiào zhǔn",
        "hv": "HIỆU CHUẨN",
        "mean": "hiệu chuẩn (calibration)"
      },
      {
        "zh": "区分度",
        "py": "qū fēn dù",
        "hv": "KHU PHÂN ĐỘ",
        "mean": "độ phân biệt (discrimination)"
      },
      {
        "zh": "受试者工作特征曲线",
        "py": "shòu shì zhě gōng zuò tè zhēng qū xiàn",
        "hv": "THỤ THÍ GIẢ CÔNG TÁC ĐẶC TRƯNG KHÚC TUYẾN",
        "mean": "đường cong ROC"
      },
      {
        "zh": "真实世界研究",
        "py": "zhēn shí shì jiè yán jiū",
        "hv": "CHÂN THỰC THẾ GIỚI NGHIÊN CỨU",
        "mean": "nghiên cứu thực tế (real-world study)"
      },
      {
        "zh": "大数据",
        "py": "dà shù jù",
        "hv": "ĐẠI SỔ CƯ",
        "mean": "dữ liệu lớn (big data)"
      },
      {
        "zh": "倾向评分",
        "py": "qīng xiàng píng fēn",
        "hv": "KHUYNH HƯỚNG BÌNH PHÂN",
        "mean": "điểm xu hướng (propensity score)"
      },
      {
        "zh": "统计推断",
        "py": "tǒng jì tuī duàn",
        "hv": "THỐNG KÊ SUY ĐOÁN",
        "mean": "suy luận thống kê (statistical inference)"
      },
      {
        "zh": "样本含量",
        "py": "yàng běn hán liàng",
        "hv": "DẠNG BẢN HÀM LƯỢNG",
        "mean": "cỡ mẫu (sample size)"
      },
      {
        "zh": "对照试验",
        "py": "duì zhào shì yàn",
        "hv": "ĐỐI CHIẾU THÍ NGHIỆM",
        "mean": "thử nghiệm đối chứng (controlled trial)"
      },
      {
        "zh": "评价指标",
        "py": "píng jià zhǐ biāo",
        "hv": "BÌNH GIÁ CHỈ TIÊU",
        "mean": "chỉ số đánh giá (evaluation index)"
      },
      {
        "zh": "合谷",
        "py": "Hégǔ",
        "hv": "HỢP CỐC",
        "mean": "Huyệt Hợp Cốc (LI4) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手部. Chủ trị: 头痛、颈痛、目肿痛、眼痛、鼻衄、鼻塞。"
      },
      {
        "zh": "内关",
        "py": "Nèiguān",
        "hv": "NỘI QUAN",
        "mean": "Huyệt Nội Quan (PC6) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、胁痛、胃痛、恶心、呕吐。"
      },
      {
        "zh": "太冲",
        "py": "Tàichōng",
        "hv": "THÁI XUNG",
        "mean": "Huyệt Thái Xung (LR3) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足部. Chủ trị: 头痛、头晕、眩晕、失眠、目肿痛、眼痛。"
      },
      {
        "zh": "三阴交",
        "py": "Sānyīnjiāo",
        "hv": "TAM ÂM GIAO",
        "mean": "Huyệt Tam Âm Giao (SP6) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、肠鸣、腹胀、泄泻、痛经、月经不调。"
      },
      {
        "zh": "百会",
        "py": "Bǎihuì",
        "hv": "BÁCH HỘI",
        "mean": "Huyệt Bách Hội (GV20) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眩晕、耳鸣、鼻塞、失语、中风。"
      },
      {
        "zh": "涌泉",
        "py": "Yǒngquán",
        "hv": "DŨNG TUYỀN",
        "mean": "Huyệt Dũng Tuyền (KI1) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足底. Chủ trị: 头痛、视物模糊、头晕、咽喉痛、干燥相关症状、失音。"
      },
      {
        "zh": "神阙",
        "py": "Shénquè",
        "hv": "THẦN KHUYẾT",
        "mean": "Huyệt Thần Khuyết (CV8) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、中风、脱肛、泄泻。"
      },
      {
        "zh": "关元",
        "py": "Guānyuán",
        "hv": "QUAN NGUYÊN",
        "mean": "Huyệt Quan Nguyên (CV4) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、尿潴留、疝气、月经不调、带下病。"
      },
      {
        "zh": "气海",
        "py": "Qìhǎi",
        "hv": "KHÍ HẢI",
        "mean": "Huyệt Khí Hải (CV6) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、遗尿、遗精、阳痿、疝气、水肿。"
      },
      {
        "zh": "风池",
        "py": "Fēngchí",
        "hv": "PHONG TRÌ",
        "mean": "Huyệt Phong Trì (GB20) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 头痛、眩晕、失眠、拘急强直、视物模糊、耳鸣。"
      },
      {
        "zh": "大椎",
        "py": "Dàzhuī",
        "hv": "ĐẠI CHÙY",
        "mean": "Huyệt Đại Chùy (GV14) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 疟疾、热病、癫痫、发热、咳嗽、哮喘。"
      },
      {
        "zh": "符号秩和检验",
        "py": "",
        "hv": "",
        "mean": "kiểm định tổng hạng có dấu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "聚类分析与判别分析",
        "py": "",
        "hv": "",
        "mean": "phân tích cụm và phân tích phân biệt (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "主成分分析与因子分析",
        "py": "",
        "hv": "",
        "mean": "phân tích thành phần chính và phân tích nhân tố (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "一致性分析",
        "py": "",
        "hv": "",
        "mean": "phân tích độ nhất quán (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "等级资料分析",
        "py": "",
        "hv": "",
        "mean": "phân tích số liệu xếp hạng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "真实世界研究统计方法",
        "py": "",
        "hv": "",
        "mean": "phương pháp thống kê trong nghiên cứu thế giới thực (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "定量系统评价的统计方法",
        "py": "",
        "hv": "",
        "mean": "phương pháp thống kê tổng quan hệ thống định lượng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "大数据的统计分析",
        "py": "",
        "hv": "",
        "mean": "phân tích thống kê dữ liệu lớn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "贝叶斯统计概述",
        "py": "",
        "hv": "",
        "mean": "tổng quan thống kê Bayes (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "参数估计与假设检验",
        "py": "",
        "hv": "",
        "mean": "ước lượng tham số và kiểm định giả thuyết (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "医学研究统计设计概述",
        "py": "",
        "hv": "",
        "mean": "tổng quan thiết kế thống kê trong nghiên cứu y học (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "资料收集与整理概述",
        "py": "",
        "hv": "",
        "mean": "tổng quan thu thập và xử lý số liệu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "统计描述",
        "py": "",
        "hv": "",
        "mean": "thống kê mô tả (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "概率分布",
        "py": "",
        "hv": "",
        "mean": "phân phối xác suất (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "医学统计学专论",
        "py": "",
        "hv": "",
        "mean": "Chuyên luận Thống kê Y học (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "统计医学",
        "py": "",
        "hv": "",
        "mean": "Thống kê Y học (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "绪论",
        "py": "xu4 lun4",
        "hv": "",
        "mean": "Tổng quan (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "检验适用于多个实验组与一个对照组均数的两两比较",
        "py": "",
        "hv": "",
        "mean": "kiểm định áp dụng so sánh từng cặp giá trị trung bình giữa nhiều nhóm thực nghiệm với một nhóm đối chứng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "各实验组与对照组比较需比较",
        "py": "",
        "hv": "",
        "mean": "khi so sánh từng nhóm thực nghiệm với nhóm đối chứng cần so sánh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "也称",
        "py": "",
        "hv": "",
        "mean": "còn gọi là (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "为处理组数",
        "py": "",
        "hv": "",
        "mean": "là số nhóm xử lý (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "计算公式为",
        "py": "",
        "hv": "",
        "mean": "công thức tính toán là (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "檢驗",
        "py": "",
        "hv": "",
        "mean": "kiểm định (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "组别",
        "py": "",
        "hv": "",
        "mean": "Nhóm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "组内",
        "py": "",
        "hv": "",
        "mean": "Trong nhóm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "组间",
        "py": "",
        "hv": "",
        "mean": "Giữa các nhóm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "组段",
        "py": "",
        "hv": "",
        "mean": "Khối nhóm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "分组",
        "py": "fēn zǔ",
        "hv": "PHÂN TỔ",
        "mean": "Phân nhóm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "样本组频数",
        "py": "",
        "hv": "",
        "mean": "Tần số nhóm mẫu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "大样本组频数",
        "py": "",
        "hv": "",
        "mean": "Tần số nhóm mẫu lớn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "例数",
        "py": "",
        "hv": "",
        "mean": "Số ca (n) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "基线指标",
        "py": "",
        "hv": "",
        "mean": "Chỉ số nền (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "疗效指标",
        "py": "",
        "hv": "",
        "mean": "Chỉ số hiệu quả (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "疗效人数",
        "py": "",
        "hv": "",
        "mean": "Số người có hiệu quả (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "结局",
        "py": "jié jú",
        "hv": "KẾT CỤC",
        "mean": "Kết cục (Outcome) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "有效成分",
        "py": "",
        "hv": "",
        "mean": "Thành phần hoạt tính (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "非劣效性与等效性试验评价",
        "py": "",
        "hv": "",
        "mean": "Đánh giá thử nghiệm không thua kém và tương đương (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "临床有效率",
        "py": "",
        "hv": "",
        "mean": "Tỷ lệ hiệu quả lâm sàng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "发病率",
        "py": "fa1 bing4 lu:4",
        "hv": "",
        "mean": "Tỷ lệ mắc bệnh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "死亡率",
        "py": "si3 wang2 lu:4",
        "hv": "",
        "mean": "Tỷ lệ tử vong (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "死因",
        "py": "si3 yin1",
        "hv": "",
        "mean": "Nguyên nhân tử vong (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "发病",
        "py": "fā bìng",
        "hv": "PHÁT BỆNH",
        "mean": "Phát bệnh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "死亡",
        "py": "sǐ wáng",
        "hv": "TỬ VONG",
        "mean": "Tử vong (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "存活天数",
        "py": "",
        "hv": "",
        "mean": "Số ngày sống sót (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "存活",
        "py": "cun2 huo2",
        "hv": "",
        "mean": "Sống sót (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "生存年数",
        "py": "",
        "hv": "",
        "mean": "Số năm sống còn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "截尾",
        "py": "jie2 wei3",
        "hv": "",
        "mean": "Kiểm duyệt (censor) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "出血症状",
        "py": "",
        "hv": "",
        "mean": "Triệu chứng xuất huyết (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "血小板数",
        "py": "",
        "hv": "",
        "mean": "Số lượng tiểu cầu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "舒张压",
        "py": "shu1 zhang1 ya1",
        "hv": "",
        "mean": "Huyết áp tâm trương (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "收缩压",
        "py": "shou1 suo1 ya1",
        "hv": "",
        "mean": "Huyết áp tâm thu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "血压",
        "py": "xuè yā",
        "hv": "HUYẾT ÁP",
        "mean": "Huyết áp (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "血糖",
        "py": "xue4 tang2",
        "hv": "",
        "mean": "Đường huyết (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "心率",
        "py": "xin1 lu:4",
        "hv": "",
        "mean": "Nhịp tim (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "显效",
        "py": "xian3 xiao4",
        "hv": "",
        "mean": "Hiệu quả rõ rệt (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "有效",
        "py": "yǒu xiào",
        "hv": "HỮU HIỆU",
        "mean": "Có hiệu quả (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "无效",
        "py": "wú xiào",
        "hv": "VÔ HIỆU",
        "mean": "Không hiệu quả (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "加重",
        "py": "jiā zhòng",
        "hv": "GIA TRỌNG",
        "mean": "Nặng thêm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "复发",
        "py": "fù fā",
        "hv": "PHỤC PHÁT",
        "mean": "Tái phát (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "试验组",
        "py": "",
        "hv": "",
        "mean": "Nhóm thử nghiệm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "阳性对照组",
        "py": "",
        "hv": "",
        "mean": "Nhóm đối chứng dương (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "阴性对照组",
        "py": "",
        "hv": "",
        "mean": "Nhóm đối chứng âm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "空白对照组",
        "py": "",
        "hv": "",
        "mean": "Nhóm đối chứng trắng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "标准对照组",
        "py": "",
        "hv": "",
        "mean": "Nhóm đối chứng chuẩn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "安慰剂对照组",
        "py": "",
        "hv": "",
        "mean": "Nhóm đối chứng giả dược (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "安慰剂",
        "py": "an1 wei4 ji4",
        "hv": "",
        "mean": "Giả dược (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "治疗前",
        "py": "",
        "hv": "",
        "mean": "Trước điều trị (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "治疗后",
        "py": "",
        "hv": "",
        "mean": "Sau điều trị (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "合计",
        "py": "hé jì",
        "hv": "HỢP KẾ",
        "mean": "Tổng cộng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "总计",
        "py": "zǒng jì",
        "hv": "TỔNG KẾ",
        "mean": "Tổng số (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "四分位数间距",
        "py": "",
        "hv": "",
        "mean": "Khoảng tứ phân vị (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "统计量",
        "py": "",
        "hv": "",
        "mean": "Thống kê lượng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "界值",
        "py": "",
        "hv": "",
        "mean": "Giá trị ngưỡng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "临界值",
        "py": "",
        "hv": "",
        "mean": "Giá trị tới hạn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "原假设",
        "py": "",
        "hv": "",
        "mean": "Giả thuyết vô hiệu ($H_0$) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "备择假设",
        "py": "",
        "hv": "",
        "mean": "Giả thuyết đối ($H_1$) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "双侧检验",
        "py": "",
        "hv": "",
        "mean": "Kiểm định 2 phía (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "单侧检验",
        "py": "",
        "hv": "",
        "mean": "Kiểm định 1 phía (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "第I类错误",
        "py": "",
        "hv": "",
        "mean": "Sai lầm loại I (α) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "第II类错误",
        "py": "",
        "hv": "",
        "mean": "Sai lầm loại II (β) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "率",
        "py": "lǜ",
        "hv": "SUẤT",
        "mean": "Tỷ lệ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "相对比",
        "py": "",
        "hv": "",
        "mean": "Tỷ số tương đối (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "截距",
        "py": "jie2 ju4",
        "hv": "",
        "mean": "Hệ số tự do (Intercept) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "斜率",
        "py": "xie2 lu:4",
        "hv": "",
        "mean": "Độ dốc (Slope) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "残差",
        "py": "",
        "hv": "",
        "mean": "Phần dư (Residual) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "天麻钩藤饮",
        "py": "",
        "hv": "",
        "mean": "Thiên Ma Câu Đằng Ẩm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "清心莲子饮",
        "py": "",
        "hv": "",
        "mean": "Thanh Tâm Liên Tử Ẩm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "杞菊地黄丸",
        "py": "",
        "hv": "",
        "mean": "Kỷ Cúc Địa Hoàng Hoàn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "清开灵",
        "py": "",
        "hv": "",
        "mean": "Thanh Khai Linh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "生理盐水",
        "py": "sheng1 li3 yan2 shui3",
        "hv": "",
        "mean": "Nước muối sinh lý (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "柴胡",
        "py": "chai2 hu2",
        "hv": "",
        "mean": "Sài hồ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "黄芩",
        "py": "",
        "hv": "",
        "mean": "Hoàng cầm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "当归",
        "py": "dang1 gui1",
        "hv": "",
        "mean": "Đương quy (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "黄芪",
        "py": "huang2 qi2",
        "hv": "",
        "mean": "Hoàng kỳ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "白术",
        "py": "bai2 zhu2",
        "hv": "",
        "mean": "Bạch truật (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "党参",
        "py": "dang3 shen1",
        "hv": "",
        "mean": "Đảng sâm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "甲",
        "py": "jiǎ",
        "hv": "GIÁP",
        "mean": "A (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "乙",
        "py": "yǐ",
        "hv": "ẤT",
        "mean": "B (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "丙",
        "py": "bǐng",
        "hv": "BÍNH",
        "mean": "C (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "丁",
        "py": "Dīng",
        "hv": "ĐINH",
        "mean": "D (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "外国留学人员来华确认表",
        "py": "",
        "hv": "",
        "mean": "PHIẾU XÁC NHẬN LƯU HỌC SINH ĐẾN TRUNG QUỐC (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "中华人民共和国教育部印制",
        "py": "",
        "hv": "",
        "mean": "Bộ Giáo dục Nước CHND Trung Hoa in (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "由接受院校填写",
        "py": "",
        "hv": "",
        "mean": "Do cơ sở tiếp nhận điền (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "由接受留学人员院校填写",
        "py": "",
        "hv": "",
        "mean": "Do cơ sở tiếp nhận lưu học sinh điền (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "接受院校",
        "py": "",
        "hv": "",
        "mean": "Cơ sở đào tạo tiếp nhận (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "甘肃中医药大学",
        "py": "",
        "hv": "",
        "mean": "Đại học Y Dược Cổ truyền Cam Túc (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "姓名",
        "py": "xìng míng",
        "hv": "TÍNH DANH",
        "mean": "Họ và tên (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "姓/Family Name",
        "py": "",
        "hv": "",
        "mean": "Họ / Family Name (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "名/Given Name",
        "py": "",
        "hv": "",
        "mean": "Tên / Given Name (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "国籍/Nationality",
        "py": "",
        "hv": "",
        "mean": "Quốc tịch / Nationality (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "护照号码/Passport No.",
        "py": "",
        "hv": "",
        "mean": "Số hộ chiếu / Passport No. (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "护照号码",
        "py": "",
        "hv": "",
        "mean": "Số hộ chiếu (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "国籍",
        "py": "guó jí",
        "hv": "QUỐC TỊCH",
        "mean": "Quốc tịch (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "性别/Gender",
        "py": "",
        "hv": "",
        "mean": "Giới tính / Gender (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "性别",
        "py": "xìng bié",
        "hv": "TÍNH BIỆT",
        "mean": "Giới tính (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "婚否/Marital Status",
        "py": "",
        "hv": "",
        "mean": "Tình trạng hôn nhân (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "婚否",
        "py": "",
        "hv": "",
        "mean": "Hôn nhân (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "越南",
        "py": "Yue4 nan2",
        "hv": "",
        "mean": "VIỆT NAM (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "已婚",
        "py": "yi3 hun1",
        "hv": "",
        "mean": "Đã kết hôn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "未婚",
        "py": "wei4 hun1",
        "hv": "",
        "mean": "Chưa kết hôn (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "男",
        "py": "nán",
        "hv": "NAM",
        "mean": "Nam (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "女",
        "py": "nǚ",
        "hv": "NỮ",
        "mean": "Nữ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "出生日期",
        "py": "chu1 sheng1 ri4 qi1",
        "hv": "",
        "mean": "Ngày sinh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "出生地点",
        "py": "chu1 sheng1 di4 dian3",
        "hv": "",
        "mean": "Nơi sinh (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "家庭地址",
        "py": "jia1 ting2 di4 zhi3",
        "hv": "",
        "mean": "Địa chỉ thường trú (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "家庭电话",
        "py": "",
        "hv": "",
        "mean": "Điện thoại liên hệ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "最后学历",
        "py": "",
        "hv": "",
        "mean": "Trình độ học vấn cao nhất (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "职业",
        "py": "zhí yè",
        "hv": "CHỨC NGHIỆP",
        "mean": "Nghề nghiệp (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "大学本科教育",
        "py": "",
        "hv": "",
        "mean": "Đại học chính quy (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "大学本科",
        "py": "da4 xue2 ben3 ke1",
        "hv": "",
        "mean": "Đại học chính quy (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "中医师",
        "py": "",
        "hv": "",
        "mean": "Bác sĩ Trung y (Y học Cổ truyền) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "主治医师",
        "py": "zhu3 zhi4 yi1 shi1",
        "hv": "",
        "mean": "Bác sĩ Điều trị chính (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "工作或学习单位",
        "py": "",
        "hv": "",
        "mean": "Đơn vị công tác hoặc học tập (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "越南康复治疗中心",
        "py": "",
        "hv": "",
        "mean": "Trung tâm Điều trị Phục hồi Chức năng Việt Nam (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "来华学习专业",
        "py": "",
        "hv": "",
        "mean": "Chuyên ngành học tập tại Trung Quốc (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "学习专业期限",
        "py": "",
        "hv": "",
        "mean": "Thời hạn học chuyên ngành (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "中医学",
        "py": "Zhong1 yi1 xue2",
        "hv": "",
        "mean": "Trung y học (Y học Cổ truyền) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "中西医结合",
        "py": "Zhong1 Xi1 yi1 jie2 he2",
        "hv": "",
        "mean": "Kết hợp Đông - Tây y (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "补习汉语院校",
        "py": "",
        "hv": "",
        "mean": "Cơ sở bổ túc Hán ngữ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "补习汉语期限",
        "py": "",
        "hv": "",
        "mean": "Thời hạn bổ túc Hán ngữ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "学生类别",
        "py": "",
        "hv": "",
        "mean": "Loại hình sinh viên (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "硕士研究生",
        "py": "",
        "hv": "",
        "mean": "Nghiên cứu sinh Thạc sĩ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "博士研究生",
        "py": "",
        "hv": "",
        "mean": "Nghiên cứu sinh Tiến sĩ (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "普通进修生",
        "py": "",
        "hv": "",
        "mean": "Học viên bồi dưỡng thông thường (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "高级进修生",
        "py": "",
        "hv": "",
        "mean": "Học viên bồi dưỡng cao cấp (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "CSC 登记号",
        "py": "",
        "hv": "",
        "mean": "Số đăng ký CSC (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "CSC登记号",
        "py": "",
        "hv": "",
        "mean": "Số đăng ký CSC (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "注册截止日期",
        "py": "",
        "hv": "",
        "mean": "Hạn chót đăng ký (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "全额奖学金",
        "py": "",
        "hv": "",
        "mean": "Học bổng toàn phần (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "部分奖学金",
        "py": "",
        "hv": "",
        "mean": "Học bổng bán phần (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "学费",
        "py": "xué fèi",
        "hv": "HỌC PHÍ",
        "mean": "Học phí (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "住宿费",
        "py": "",
        "hv": "",
        "mean": "Chỗ ở (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "生活费",
        "py": "shēng huó fèi",
        "hv": "SINH HOẠT PHÍ",
        "mean": "Sinh hoạt phí (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "综合医疗保险",
        "py": "",
        "hv": "",
        "mean": "Bảo hiểm y tế toàn diện (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "其他",
        "py": "qí tā",
        "hv": "KÌ THA",
        "mean": "Khác (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "自费",
        "py": "zì fèi",
        "hv": "TỰ PHÍ",
        "mean": "Tự túc (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "备注",
        "py": "bei4 zhu4",
        "hv": "",
        "mean": "Ghi chú (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "自",
        "py": "zì",
        "hv": "TỰ",
        "mean": "Từ  (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "月至",
        "py": "",
        "hv": "",
        "mean": " tháng đến  (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "至",
        "py": "zhì",
        "hv": "CHÍ",
        "mean": " đến  (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "年",
        "py": "Nián",
        "hv": "NIÊN",
        "mean": "Năm (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "月",
        "py": "yuè",
        "hv": "NGUYỆT",
        "mean": "Tháng (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "日",
        "py": "Rì",
        "hv": "NHẬT",
        "mean": "Ngày (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "留学中国",
        "py": "",
        "hv": "",
        "mean": "Du học Trung Quốc (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "由接受留学院校填写",
        "py": "",
        "hv": "",
        "mean": "Do cơ sở tiếp nhận điền (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "请持本表前往中国使(领)馆申请来华学习签证",
        "py": "",
        "hv": "",
        "mean": "Vui lòng mang biểu mẫu này đến Đại sứ quán / Lãnh sự quán Trung Quốc để xin thị thực du học. (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "请持本表前往中国使（领）馆申请来华学习签证",
        "py": "",
        "hv": "",
        "mean": "Vui lòng mang biểu mẫu này đến Đại sứ quán / Lãnh sự quán Trung Quốc để xin thị thực du học. (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "请持本表到校注册",
        "py": "",
        "hv": "",
        "mean": "Vui lòng mang biểu mẫu này đến trường để làm thủ tục nhập học. (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖章",
        "py": "gài zhāng",
        "hv": "CÁI CHƯƠNG",
        "mean": "(Ký tên & đóng dấu) (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖@章",
        "py": "",
        "hv": "",
        "mean": " (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖@1章",
        "py": "",
        "hv": "",
        "mean": " (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖@2章",
        "py": "",
        "hv": "",
        "mean": " (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖@3章",
        "py": "",
        "hv": "",
        "mean": " (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "盖@4章",
        "py": "",
        "hv": "",
        "mean": " (Thuật ngữ Thống kê Y học Lâm sàng)"
      },
      {
        "zh": "中府",
        "py": "Zhōngfǔ",
        "hv": "TRUNG PHỦ",
        "mean": "Huyệt Trung Phủ (LU1) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛、胸满。"
      },
      {
        "zh": "云门",
        "py": "Yúnmén",
        "hv": "VÂN MÔN",
        "mean": "Huyệt Vân Môn (LU2) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛、胸满。"
      },
      {
        "zh": "天府",
        "py": "Tiānfǔ",
        "hv": "THIÊN PHỦ",
        "mean": "Huyệt Thiên Phủ (LU3) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 上臂. Chủ trị: 哮喘、鼻衄、上臂内侧痛。"
      },
      {
        "zh": "侠白",
        "py": "Xiábái",
        "hv": "HIỆP BẠCH",
        "mean": "Huyệt Hiệp Bạch (LU4) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 上臂. Chủ trị: 咳嗽、胸满、上臂内侧痛。"
      },
      {
        "zh": "尺泽",
        "py": "Chǐzé",
        "hv": "XÍCH TRẠCH",
        "mean": "Huyệt Xích Trạch (LU5) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 肘部. Chủ trị: 咳嗽、咯血、发热、哮喘、咽喉痛、胸满。"
      },
      {
        "zh": "孔最",
        "py": "Kǒngzuì",
        "hv": "KHỔNG TỐI",
        "mean": "Huyệt Khổng Tối (LU6) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 咳嗽、胸痛、哮喘、咯血、咽喉痛、肘臂挛痛。"
      },
      {
        "zh": "列缺",
        "py": "Lièquē",
        "hv": "LIỆT KHUYẾT",
        "mean": "Huyệt Liệt Khuyết (LU7) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 头痛、偏头痛、项强、咳嗽、哮喘、咽喉痛。"
      },
      {
        "zh": "经渠",
        "py": "Jīngqú",
        "hv": "KINH CỪ",
        "mean": "Huyệt Kinh Cừ (LU8) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 咳嗽、哮喘、发热、胸痛、咽喉痛、腕痛。"
      },
      {
        "zh": "太渊",
        "py": "Tàiyuān",
        "hv": "THÁI UYÊN",
        "mean": "Huyệt Thái Uyên (LU9) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 腕部. Chủ trị: 咳嗽、哮喘、咯血、咽喉痛、心悸、胸痛。"
      },
      {
        "zh": "鱼际",
        "py": "Yújì",
        "hv": "NGƯ TẾ",
        "mean": "Huyệt Ngư Tế (LU10) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 手掌. Chủ trị: 咳嗽、咯血、咽喉痛、失音、发热、掌心热。"
      },
      {
        "zh": "少商",
        "py": "Shàoshāng",
        "hv": "THIẾU THƯƠNG",
        "mean": "Huyệt Thiếu Thương (LU11) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 拇指. Chủ trị: 咽喉痛、咳嗽、哮喘、鼻衄、发热、昏厥。"
      },
      {
        "zh": "商阳",
        "py": "Shāngyáng",
        "hv": "THƯƠNG DƯƠNG",
        "mean": "Huyệt Thương Dương (LI1) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手指. Chủ trị: 牙痛、咽喉痛、麻木、热病、昏厥。"
      },
      {
        "zh": "二间",
        "py": "Èrjiān",
        "hv": "NHỊ GIAN",
        "mean": "Huyệt Nhị Gian (LI2) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手指. Chủ trị: 视物模糊、鼻衄、牙痛、咽喉痛、热病。"
      },
      {
        "zh": "三间",
        "py": "Sānjiān",
        "hv": "TAM GIAN",
        "mean": "Huyệt Tam Gian (LI3) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手部. Chủ trị: 牙痛、眼痛、咽喉痛。"
      },
      {
        "zh": "阳溪",
        "py": "Yángxī",
        "hv": "DƯƠNG KHÊ",
        "mean": "Huyệt Dương Khê (LI5) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 腕部. Chủ trị: 头痛、目肿痛、牙痛、咽喉痛、腕痛。"
      },
      {
        "zh": "偏历",
        "py": "Piānlì",
        "hv": "THIÊN LỊCH",
        "mean": "Huyệt Thiên Lịch (LI6) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 目赤、耳鸣、耳聋、鼻衄、咽喉痛、水肿。"
      },
      {
        "zh": "温溜",
        "py": "Wēnliū",
        "hv": "ÔN LƯU",
        "mean": "Huyệt Ôn Lưu (LI7) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 头痛、咽喉痛、肠鸣、腹痛。"
      },
      {
        "zh": "下廉",
        "py": "Xiàlián",
        "hv": "HẠ LIÊM",
        "mean": "Huyệt Hạ Liêm (LI8) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 腹痛、肠鸣、肘痛、活动不利。"
      },
      {
        "zh": "上廉",
        "py": "Shànglián",
        "hv": "THƯỢNG LIÊM",
        "mean": "Huyệt Thượng Liêm (LI9) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 活动不利、麻木、肠鸣、腹痛。"
      },
      {
        "zh": "手三里",
        "py": "Shǒusānlǐ",
        "hv": "THỦ TAM LÝ",
        "mean": "Huyệt Thủ Tam Lý (LI10) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 腹痛、泄泻、牙痛、颊肿、活动不利、肩痛。"
      },
      {
        "zh": "曲池",
        "py": "Qūchí",
        "hv": "KHÚC TRÌ",
        "mean": "Huyệt Khúc Trì (LI11) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肘部. Chủ trị: 咽喉痛、牙痛、眼痛、瘰疬、荨麻疹、活动不利。"
      },
      {
        "zh": "肘髎",
        "py": "Zhǒuliáo",
        "hv": "TRỤ LIÊU",
        "mean": "Huyệt Trụ Liêu (LI12) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肘部. Chủ trị: 麻木。"
      },
      {
        "zh": "手五里",
        "py": "Shǒuwǔlǐ",
        "hv": "THỦ NGŨ LÝ",
        "mean": "Huyệt Thủ Ngũ Lý (LI13) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 上臂. Chủ trị: 瘰疬。"
      },
      {
        "zh": "臂臑",
        "py": "Bìnào",
        "hv": "TÝ NHU",
        "mean": "Huyệt Tý Nhu (LI14) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 上臂. Chủ trị: 肩痛、瘰疬。"
      },
      {
        "zh": "肩髃",
        "py": "Jiānyú",
        "hv": "KIÊN NGUNG",
        "mean": "Huyệt Kiên Ngung (LI15) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肩部. Chủ trị: 肩痛、活动不利、瘰疬。"
      },
      {
        "zh": "巨骨",
        "py": "Jùgǔ",
        "hv": "CỰ CỐT",
        "mean": "Huyệt Cự Cốt (LI16) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肩部. Chủ trị: 活动不利、肩痛。"
      },
      {
        "zh": "天鼎",
        "py": "Tiāndǐng",
        "hv": "THIÊN ĐỈNH",
        "mean": "Huyệt Thiên Đỉnh (LI17) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 颈部. Chủ trị: 暴喑、失音、咽喉痛、瘰疬、瘿气。"
      },
      {
        "zh": "扶突",
        "py": "Fútū",
        "hv": "PHÙ ĐỘT",
        "mean": "Huyệt Phù Đột (LI18) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 颈部. Chủ trị: 咳嗽、哮喘、咽喉痛、暴喑、失音、瘰疬。"
      },
      {
        "zh": "口禾髎",
        "py": "Kǒuhéliáo",
        "hv": "KHẨU HÒA LIÊU",
        "mean": "Huyệt Khẩu Hòa Liêu (LI19) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 面部. Chủ trị: 鼻塞、鼻衄、口歪。"
      },
      {
        "zh": "迎香",
        "py": "Yíngxiāng",
        "hv": "NGHINH HƯƠNG",
        "mean": "Huyệt Nghinh Hương (LI20) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 面部. Chủ trị: 鼻塞、鼻衄、流涕、口歪。"
      },
      {
        "zh": "承泣",
        "py": "Chéngqì",
        "hv": "THỪA KHẤP",
        "mean": "Huyệt Thừa Khấp (ST1) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 目肿痛、眼痛、流泪、眼睑瞤动、面瘫。"
      },
      {
        "zh": "四白",
        "py": "Sìbái",
        "hv": "TỨ BẠCH",
        "mean": "Huyệt Tứ Bạch (ST2) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动。"
      },
      {
        "zh": "巨髎",
        "py": "Jùliáo",
        "hv": "CỰ LIÊU",
        "mean": "Huyệt Cự Liêu (ST3) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动、鼻衄、牙痛。"
      },
      {
        "zh": "地仓",
        "py": "Dìcāng",
        "hv": "ĐỊA THƯƠNG",
        "mean": "Huyệt Địa Thương (ST4) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 口歪、眼睑瞤动。"
      },
      {
        "zh": "大迎",
        "py": "Dàyíng",
        "hv": "ĐẠI NGHINH",
        "mean": "Huyệt Đại Nghinh (ST5) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、牙关紧闭、颊肿、面痛、牙痛。"
      },
      {
        "zh": "颊车",
        "py": "Jiáchē",
        "hv": "GIÁP XA",
        "mean": "Huyệt Giáp Xa (ST6) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、牙痛、颊肿、牙关紧闭。"
      },
      {
        "zh": "下关",
        "py": "Xiàguān",
        "hv": "HẠ QUAN",
        "mean": "Huyệt Hạ Quan (ST7) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、牙痛、面瘫、活动不利。"
      },
      {
        "zh": "头维",
        "py": "Tóuwéi",
        "hv": "ĐẦU DUY",
        "mean": "Huyệt Đầu Duy (ST8) thuộc Túc Dương Minh Vị Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、眼痛、流泪。"
      },
      {
        "zh": "人迎",
        "py": "Rényíng",
        "hv": "NHÂN NGHINH",
        "mean": "Huyệt Nhân Nghinh (ST9) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、瘿气、头晕。"
      },
      {
        "zh": "水突",
        "py": "Shuǐtū",
        "hv": "THỦY ĐỘT",
        "mean": "Huyệt Thủy Đột (ST10) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、咳嗽。"
      },
      {
        "zh": "气舍",
        "py": "Qìshè",
        "hv": "KHÍ XÁ",
        "mean": "Huyệt Khí Xá (ST11) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、呃逆、瘿气。"
      },
      {
        "zh": "缺盆",
        "py": "Quēpén",
        "hv": "KHUYẾT BỒN",
        "mean": "Huyệt Khuyết Bồn (ST12) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咳嗽、哮喘、咽喉痛。"
      },
      {
        "zh": "气户",
        "py": "Qìhù",
        "hv": "KHÍ HỘ",
        "mean": "Huyệt Khí Hộ (ST13) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸满、哮喘、咳嗽、呃逆、胸痛。"
      },
      {
        "zh": "库房",
        "py": "Kùfáng",
        "hv": "KHỐ PHÒNG",
        "mean": "Huyệt Khố Phòng (ST14) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸满、胸痛、咳嗽。"
      },
      {
        "zh": "屋翳",
        "py": "Wūyì",
        "hv": "ỐC Ế",
        "mean": "Huyệt Ốc Ế (ST15) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈。"
      },
      {
        "zh": "膺窗",
        "py": "Yīngchuāng",
        "hv": "ƯNG SONG",
        "mean": "Huyệt Ưng Song (ST16) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈。"
      },
      {
        "zh": "乳中",
        "py": "Rǔzhōng",
        "hv": "NHŨ TRUNG",
        "mean": "Huyệt Nhũ Trung (ST17) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 乳中用作定位标志；现代针灸标准通常禁针禁灸，不作为操作穴。"
      },
      {
        "zh": "乳根",
        "py": "Rǔgēn",
        "hv": "NHŨ CĂN",
        "mean": "Huyệt Nhũ Căn (ST18) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈、乳少。"
      },
      {
        "zh": "不容",
        "py": "Bùróng",
        "hv": "BẤT DUNG",
        "mean": "Huyệt Bất Dung (ST19) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、呕吐、胃痛、食欲不振。"
      },
      {
        "zh": "承满",
        "py": "Chéngmǎn",
        "hv": "THỪA MÃN",
        "mean": "Huyệt Thừa Mãn (ST20) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、呕吐、食欲不振。"
      },
      {
        "zh": "梁门",
        "py": "Liángmén",
        "hv": "LƯƠNG MÔN",
        "mean": "Huyệt Lương Môn (ST21) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、食欲不振、腹胀、泄泻。"
      },
      {
        "zh": "关门",
        "py": "Guānmén",
        "hv": "QUAN MÔN",
        "mean": "Huyệt Quan Môn (ST22) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、食欲不振、肠鸣、泄泻、水肿。"
      },
      {
        "zh": "太乙",
        "py": "Tàiyǐ",
        "hv": "THÁI ẤT",
        "mean": "Huyệt Thái Ất (ST23) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、烦躁、癫狂、消化不良。"
      },
      {
        "zh": "滑肉门",
        "py": "Huáròumén",
        "hv": "HOẠT NHỤC MÔN",
        "mean": "Huyệt Hoạt Nhục Môn (ST24) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、癫狂。"
      },
      {
        "zh": "天枢",
        "py": "Tiānshū",
        "hv": "THIÊN XU",
        "mean": "Huyệt Thiên Xu (ST25) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、便秘、泄泻、痢疾、月经不调。"
      },
      {
        "zh": "外陵",
        "py": "Wàilíng",
        "hv": "NGOẠI LĂNG",
        "mean": "Huyệt Ngoại Lăng (ST26) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、疝气、痛经。"
      },
      {
        "zh": "大巨",
        "py": "Dàjù",
        "hv": "ĐẠI CỰ",
        "mean": "Huyệt Đại Cự (ST27) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、小便不利、疝气。"
      },
      {
        "zh": "水道",
        "py": "Shuǐdào",
        "hv": "THỦY ĐẠO",
        "mean": "Huyệt Thủy Đạo (ST28) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、尿潴留、水肿、疝气、痛经。"
      },
      {
        "zh": "归来",
        "py": "Guīlái",
        "hv": "QUY LAI",
        "mean": "Huyệt Quy Lai (ST29) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、疝气、痛经、月经不调、闭经、带下病。"
      },
      {
        "zh": "气冲",
        "py": "Qìchōng",
        "hv": "KHÍ XUNG",
        "mean": "Huyệt Khí Xung (ST30) thuộc Túc Dương Minh Vị Kinh. Vị trí: 体表相关区域. Chủ trị: 腹痛、肠鸣、疝气、阳痿、痛经、月经不调。"
      },
      {
        "zh": "髀关",
        "py": "Bìguān",
        "hv": "BỄ QUAN",
        "mean": "Huyệt Bễ Quan (ST31) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 肌肉萎缩、活动不利、麻木。"
      },
      {
        "zh": "伏兔",
        "py": "Fútù",
        "hv": "PHỤC THỐ",
        "mean": "Huyệt Phục Thố (ST32) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 腰痛、活动不利、脚气。"
      },
      {
        "zh": "阴市",
        "py": "Yīnshì",
        "hv": "ÂM THỊ",
        "mean": "Huyệt Âm Thị (ST33) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 麻木、活动不利。"
      },
      {
        "zh": "梁丘",
        "py": "Liángqiū",
        "hv": "LƯƠNG KHÂU",
        "mean": "Huyệt Lương Khâu (ST34) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 麻木、胃痛、乳痈、活动不利。"
      },
      {
        "zh": "犊鼻",
        "py": "Dúbí",
        "hv": "ĐỘC TỴ",
        "mean": "Huyệt Độc Tỵ (ST35) thuộc Túc Dương Minh Vị Kinh. Vị trí: 膝部. Chủ trị: 麻木、活动不利、脚气。"
      },
      {
        "zh": "上巨虚",
        "py": "Shàngjùxū",
        "hv": "THƯỢNG CỰ HƯ",
        "mean": "Huyệt Thượng Cự Hư (ST37) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 腹痛、肠鸣、泄泻、痢疾、便秘、脚气。"
      },
      {
        "zh": "条口",
        "py": "Tiáokǒu",
        "hv": "ĐIỀU KHẨU",
        "mean": "Huyệt Điều Khẩu (ST38) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 麻木、活动不利、腹痛。"
      },
      {
        "zh": "下巨虚",
        "py": "Xiàjùxū",
        "hv": "HẠ CỰ HƯ",
        "mean": "Huyệt Hạ Cự Hư (ST39) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 小腹痛、腹痛、背痛、乳痈、麻木。"
      },
      {
        "zh": "丰隆",
        "py": "Fēnglóng",
        "hv": "PHONG LONG",
        "mean": "Huyệt Phong Long (ST40) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 头痛、头晕、眩晕、咳嗽、哮喘、胸痛。"
      },
      {
        "zh": "解溪",
        "py": "Jiěxī",
        "hv": "GIẢI KHÊ",
        "mean": "Huyệt Giải Khê (ST41) thuộc Túc Dương Minh Vị Kinh. Vị trí: 踝部. Chủ trị: 踝部症状、肌肉萎缩、活动不利、癫痫、头痛、头晕。"
      },
      {
        "zh": "冲阳",
        "py": "Chōngyáng",
        "hv": "XUNG DƯƠNG",
        "mean": "Huyệt Xung Dương (ST42) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 面瘫、肌肉萎缩、活动不利。"
      },
      {
        "zh": "陷谷",
        "py": "Xiàngǔ",
        "hv": "HÃM CỐC",
        "mean": "Huyệt Hãm Cốc (ST43) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 水肿、腹痛、肠鸣。"
      },
      {
        "zh": "内庭",
        "py": "Nèitíng",
        "hv": "NỘI ĐÌNH",
        "mean": "Huyệt Nội Đình (ST44) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 牙痛、口歪、咽喉痛、鼻衄、胃痛、反酸。"
      },
      {
        "zh": "厉兑",
        "py": "Lìduì",
        "hv": "LỆ ĐOÁI",
        "mean": "Huyệt Lệ Đoái (ST45) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足趾. Chủ trị: 面肿、口歪、鼻衄、牙痛、咽喉痛、腹胀。"
      },
      {
        "zh": "隐白",
        "py": "Yǐnbái",
        "hv": "ẨN BẠCH",
        "mean": "Huyệt Ẩn Bạch (SP1) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足趾. Chủ trị: 腹胀、崩漏、神志病、抽搐。"
      },
      {
        "zh": "大都",
        "py": "Dàdū",
        "hv": "ĐẠI ĐÔ",
        "mean": "Huyệt Đại Đô (SP2) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足趾. Chủ trị: 腹胀、胃痛、便秘、热病。"
      },
      {
        "zh": "太白",
        "py": "Tàibái",
        "hv": "THÁI BẠCH",
        "mean": "Huyệt Thái Bạch (SP3) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 胃痛、腹胀、便秘、痢疾、呕吐、泄泻。"
      },
      {
        "zh": "公孙",
        "py": "Gōngsūn",
        "hv": "CÔNG TÔN",
        "mean": "Huyệt Công Tôn (SP4) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 胃痛、呕吐、腹痛、泄泻、痢疾、肠鸣。"
      },
      {
        "zh": "商丘",
        "py": "Shāngqiū",
        "hv": "THƯƠNG KHÂU",
        "mean": "Huyệt Thương Khâu (SP5) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 腹胀、便秘、泄泻、肠鸣、踝部症状、痔疮。"
      },
      {
        "zh": "漏谷",
        "py": "Lòugǔ",
        "hv": "LẬU CỐC",
        "mean": "Huyệt Lậu Cốc (SP7) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹胀、肠鸣、麻木。"
      },
      {
        "zh": "地机",
        "py": "Dìjī",
        "hv": "ĐỊA 机",
        "mean": "Huyệt Địa 机 (SP8) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、水肿、小便不利、遗精、月经不调。"
      },
      {
        "zh": "阴陵泉",
        "py": "Yīnlíngquán",
        "hv": "ÂM LĂNG TUYỀN",
        "mean": "Huyệt Âm Lăng Tuyền (SP9) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、痢疾、水肿、黄疸、小便不利。"
      },
      {
        "zh": "血海",
        "py": "Xuèhǎi",
        "hv": "HUYẾT HẢI",
        "mean": "Huyệt Huyết Hải (SP10) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 大腿. Chủ trị: 月经不调、痛经、崩漏、闭经、荨麻疹、湿疹。"
      },
      {
        "zh": "箕门",
        "py": "Jīmén",
        "hv": "CƠ MÔN",
        "mean": "Huyệt Cơ Môn (SP11) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 大腿. Chủ trị: 小便不利、遗尿、肌肉萎缩、活动不利。"
      },
      {
        "zh": "冲门",
        "py": "Chōngmén",
        "hv": "XUNG MÔN",
        "mean": "Huyệt Xung Môn (SP12) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 体表相关区域. Chủ trị: 腹痛、疝气、小便不利。"
      },
      {
        "zh": "府舍",
        "py": "Fǔshè",
        "hv": "PHỦ XÁ",
        "mean": "Huyệt Phủ Xá (SP13) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 小腹痛、腹痛、疝气。"
      },
      {
        "zh": "腹结",
        "py": "Fùjié",
        "hv": "腹 KẾT",
        "mean": "Huyệt 腹 Kết (SP14) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹胀、疝气、泄泻、便秘。"
      },
      {
        "zh": "大横",
        "py": "Dàhéng",
        "hv": "ĐẠI HOÀNH",
        "mean": "Huyệt Đại Hoành (SP15) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、痢疾、便秘。"
      },
      {
        "zh": "腹哀",
        "py": "Fù’āi",
        "hv": "腹 AI",
        "mean": "Huyệt 腹 Ai (SP16) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹痛、消化不良、便秘、痢疾。"
      },
      {
        "zh": "食窦",
        "py": "Shídòu",
        "hv": "THỰC ĐẬU",
        "mean": "Huyệt Thực Đậu (SP17) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛。"
      },
      {
        "zh": "天溪",
        "py": "Tiānxī",
        "hv": "THIÊN KHÊ",
        "mean": "Huyệt Thiên Khê (SP18) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、呃逆、乳痈、乳少。"
      },
      {
        "zh": "胸乡",
        "py": "Xiōngxiāng",
        "hv": "HUNG HƯƠNG",
        "mean": "Huyệt Hung Hương (SP19) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛。"
      },
      {
        "zh": "周荣",
        "py": "Zhōuróng",
        "hv": "CHU 荣",
        "mean": "Huyệt Chu 荣 (SP20) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸满、咳嗽、呃逆。"
      },
      {
        "zh": "大包",
        "py": "Dàbāo",
        "hv": "ĐẠI BAO",
        "mean": "Huyệt Đại Bao (SP21) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸侧部. Chủ trị: 胸痛、哮喘。"
      },
      {
        "zh": "极泉",
        "py": "Jíquán",
        "hv": "CỰC TUYỀN",
        "mean": "Huyệt Cực Tuyền (HT1) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 腋部. Chủ trị: 瘰疬、干燥相关症状。"
      },
      {
        "zh": "青灵",
        "py": "Qīnglíng",
        "hv": "THANH LINH",
        "mean": "Huyệt Thanh Linh (HT2) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 上臂. Chủ trị: 心痛、胁痛、肩臂痛。"
      },
      {
        "zh": "少海",
        "py": "Shàohǎi",
        "hv": "THIẾU HẢI",
        "mean": "Huyệt Thiếu Hải (HT3) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 肘部. Chủ trị: 心痛、麻木、瘰疬。"
      },
      {
        "zh": "灵道",
        "py": "Língdào",
        "hv": "LINH ĐẠO",
        "mean": "Huyệt Linh Đạo (HT4) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心痛、肘臂挛痛、暴喑、失音。"
      },
      {
        "zh": "通里",
        "py": "Tōnglǐ",
        "hv": "THÔNG LÝ",
        "mean": "Huyệt Thông Lý (HT5) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心悸、头晕、视物模糊、咽喉痛、暴喑、失音。"
      },
      {
        "zh": "阴郄",
        "py": "Yīnxì",
        "hv": "ÂM 郄",
        "mean": "Huyệt Âm 郄 (HT6) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心痛、盗汗、咯血、鼻衄、暴喑、失音。"
      },
      {
        "zh": "神门",
        "py": "Shénmén",
        "hv": "THẦN MÔN",
        "mean": "Huyệt Thần Môn (HT7) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 腕部. Chủ trị: 心痛、烦躁、心悸、失眠、癫狂、癫痫。"
      },
      {
        "zh": "少府",
        "py": "Shàofǔ",
        "hv": "THIẾU PHỦ",
        "mean": "Huyệt Thiếu Phủ (HT8) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 手掌. Chủ trị: 心悸、胸痛、掌心热、遗尿、小便不利、瘙痒。"
      },
      {
        "zh": "少冲",
        "py": "Shàochōng",
        "hv": "THIẾU XUNG",
        "mean": "Huyệt Thiếu Xung (HT9) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 手指. Chủ trị: 心悸、心痛、胸痛、癫狂、热病、昏厥。"
      },
      {
        "zh": "少泽",
        "py": "Shàozé",
        "hv": "THIẾU TRẠCH",
        "mean": "Huyệt Thiếu Trạch (SI1) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 头痛、热病、昏厥、乳少、咽喉痛、目赤。"
      },
      {
        "zh": "前谷",
        "py": "Qiángǔ",
        "hv": "TIỀN CỐC",
        "mean": "Huyệt Tiền Cốc (SI2) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 麻木、热病、耳鸣、头痛。"
      },
      {
        "zh": "后溪",
        "py": "Hòuxī",
        "hv": "HẬU KHÊ",
        "mean": "Huyệt Hậu Khê (SI3) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 耳鸣、耳聋、咽喉痛、癫狂、疟疾、盗汗。"
      },
      {
        "zh": "腕骨",
        "py": "Wàngǔ",
        "hv": "UYỂN CỐT",
        "mean": "Huyệt Uyển Cốt (SI4) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 腕部. Chủ trị: 热病、头痛、腕痛、黄疸。"
      },
      {
        "zh": "阳谷",
        "py": "Yánggǔ",
        "hv": "DƯƠNG CỐC",
        "mean": "Huyệt Dương Cốc (SI5) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 腕部. Chủ trị: 热病。"
      },
      {
        "zh": "养老",
        "py": "Yǎnglǎo",
        "hv": "DƯỠNG LÃO",
        "mean": "Huyệt Dưỡng Lão (SI6) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 前臂. Chủ trị: 视物模糊、肩痛。"
      },
      {
        "zh": "支正",
        "py": "Zhīzhèng",
        "hv": "CHI CHÁNH",
        "mean": "Huyệt Chi Chánh (SI7) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 前臂. Chủ trị: 项强、头痛、头晕、肘痛、热病、癫狂。"
      },
      {
        "zh": "小海",
        "py": "Xiǎohǎi",
        "hv": "TIỂU HẢI",
        "mean": "Huyệt Tiểu Hải (SI8) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肘部. Chủ trị: 头痛、颊肿、癫痫。"
      },
      {
        "zh": "肩贞",
        "py": "Jiānzhēn",
        "hv": "KIÊN TRINH",
        "mean": "Huyệt Kiên Trinh (SI9) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肩部. Chủ trị: 活动不利。"
      },
      {
        "zh": "臑俞",
        "py": "Nàoshū",
        "hv": "NHU DU",
        "mean": "Huyệt Nhu Du (SI10) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肩部. Chủ trị: 肩部肿痛、肩臂酸痛无力。"
      },
      {
        "zh": "天宗",
        "py": "Tiānzōng",
        "hv": "THIÊN TÔNG",
        "mean": "Huyệt Thiên Tông (SI11) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 哮喘。"
      },
      {
        "zh": "秉风",
        "py": "Bǐngfēng",
        "hv": "BỈNH PHONG",
        "mean": "Huyệt Bỉnh Phong (SI12) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 麻木、活动不利。"
      },
      {
        "zh": "曲垣",
        "py": "Qūyuán",
        "hv": "KHÚC 垣",
        "mean": "Huyệt Khúc 垣 (SI13) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 拘急强直。"
      },
      {
        "zh": "肩外俞",
        "py": "Jiānwàishū",
        "hv": "KIÊN NGOẠI DU",
        "mean": "Huyệt Kiên Ngoại Du (SI14) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 背部. Chủ trị: 肩背酸痛、颈项拘急疼痛。"
      },
      {
        "zh": "肩中俞",
        "py": "Jiānzhōngshū",
        "hv": "KIÊN TRUNG DU",
        "mean": "Huyệt Kiên Trung Du (SI15) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 背部. Chủ trị: 咳嗽、气喘、肩背痛。"
      },
      {
        "zh": "天窗",
        "py": "Tiānchuāng",
        "hv": "THIÊN SONG",
        "mean": "Huyệt Thiên Song (SI16) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、暴喑、失音、耳聋、耳鸣、拘急强直。"
      },
      {
        "zh": "天容",
        "py": "Tiānróng",
        "hv": "THIÊN DUNG",
        "mean": "Huyệt Thiên Dung (SI17) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 颈部. Chủ trị: 耳聋、耳鸣、咽喉痛、颊肿、瘿气。"
      },
      {
        "zh": "颧髎",
        "py": "Quánliáo",
        "hv": "颧 LIÊU",
        "mean": "Huyệt 颧 Liêu (SI18) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动、牙痛、颊肿。"
      },
      {
        "zh": "听宫",
        "py": "Tīnggōng",
        "hv": "THÍNH CUNG",
        "mean": "Huyệt Thính Cung (SI19) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、活动不利、牙痛。"
      },
      {
        "zh": "睛明",
        "py": "Jīngmíng",
        "hv": "TÌNH MINH",
        "mean": "Huyệt Tình Minh (BL1) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 面部. Chủ trị: 目肿痛、眼痛、流泪、视物模糊。"
      },
      {
        "zh": "攒竹",
        "py": "Cuánzhú",
        "hv": "TOẢN TRÚC",
        "mean": "Huyệt Toản Trúc (BL2) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、流泪、目肿痛、眼痛、眼睑瞤动。"
      },
      {
        "zh": "眉冲",
        "py": "Méichōng",
        "hv": "MI XUNG",
        "mean": "Huyệt Mi Xung (BL3) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、癫痫、鼻塞。"
      },
      {
        "zh": "曲差",
        "py": "Qūchā",
        "hv": "KHÚC SAI",
        "mean": "Huyệt Khúc Sai (BL4) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、鼻塞、鼻衄。"
      },
      {
        "zh": "五处",
        "py": "Wǔchù",
        "hv": "NGŨ XỬ",
        "mean": "Huyệt Ngũ Xử (BL5) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、癫痫、抽搐。"
      },
      {
        "zh": "承光",
        "py": "Chéngguāng",
        "hv": "THỪA QUANG",
        "mean": "Huyệt Thừa Quang (BL6) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、鼻塞。"
      },
      {
        "zh": "通天",
        "py": "Tōngtiān",
        "hv": "THÔNG THIÊN",
        "mean": "Huyệt Thông Thiên (BL7) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、鼻塞、鼻衄、流涕。"
      },
      {
        "zh": "络却",
        "py": "Luòquè",
        "hv": "LẠC KHƯỚC",
        "mean": "Huyệt Lạc Khước (BL8) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头晕、视物模糊、耳鸣、癫狂。"
      },
      {
        "zh": "玉枕",
        "py": "Yùzhěn",
        "hv": "NGỌC CHẨM",
        "mean": "Huyệt Ngọc Chẩm (BL9) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、头晕、眼痛、鼻塞。"
      },
      {
        "zh": "天柱",
        "py": "Tiānzhù",
        "hv": "THIÊN TRỤ",
        "mean": "Huyệt Thiên Trụ (BL10) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 颈部. Chủ trị: 头痛、鼻塞、咽喉痛、项强、肩痛。"
      },
      {
        "zh": "大杼",
        "py": "Dàzhù",
        "hv": "ĐẠI TRỮ",
        "mean": "Huyệt Đại Trữ (BL11) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 头痛、颈痛、咳嗽、发热、项强。"
      },
      {
        "zh": "风门",
        "py": "Fēngmén",
        "hv": "PHONG MÔN",
        "mean": "Huyệt Phong Môn (BL12) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、发热、头痛、项强、背痛。"
      },
      {
        "zh": "肺俞",
        "py": "Fèishū",
        "hv": "PHẾ DU",
        "mean": "Huyệt Phế Du (BL13) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、胸痛、唾血、发热、盗汗。"
      },
      {
        "zh": "厥阴俞",
        "py": "Juéyīnshū",
        "hv": "厥 ÂM DU",
        "mean": "Huyệt 厥 Âm Du (BL14) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、心痛、心悸、呕吐。"
      },
      {
        "zh": "心俞",
        "py": "Xīnshū",
        "hv": "TÂM DU",
        "mean": "Huyệt Tâm Du (BL15) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 心痛、心悸、咳嗽、唾血、遗精、盗汗。"
      },
      {
        "zh": "督俞",
        "py": "Dūshū",
        "hv": "ĐỐC DU",
        "mean": "Huyệt Đốc Du (BL16) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 心痛、胸腹痛、寒热。"
      },
      {
        "zh": "膈俞",
        "py": "Géshū",
        "hv": "CÁCH DU",
        "mean": "Huyệt Cách Du (BL17) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 呕吐、呃逆、吞咽困难、哮喘、咳嗽、唾血。"
      },
      {
        "zh": "肝俞",
        "py": "Gānshū",
        "hv": "CAN DU",
        "mean": "Huyệt Can Du (BL18) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 黄疸、胁痛、目赤、视物模糊、神志病、癫痫。"
      },
      {
        "zh": "胆俞",
        "py": "Dǎnshū",
        "hv": "ĐỞM DU",
        "mean": "Huyệt Đởm Du (BL19) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 黄疸、胸痛、发热。"
      },
      {
        "zh": "脾俞",
        "py": "Píshū",
        "hv": "TỲ DU",
        "mean": "Huyệt Tỳ Du (BL20) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、黄疸、呕吐、泄泻、痢疾、水肿。"
      },
      {
        "zh": "胃俞",
        "py": "Wèishū",
        "hv": "VỊ DU",
        "mean": "Huyệt Vị Du (BL21) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 胸痛、食欲不振、腹胀、肠鸣、泄泻、恶心。"
      },
      {
        "zh": "三焦俞",
        "py": "Sānjiāoshū",
        "hv": "TAM TIÊU DU",
        "mean": "Huyệt Tam Tiêu Du (BL22) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 肠鸣、腹胀、消化不良、呕吐、泄泻、痢疾。"
      },
      {
        "zh": "肾俞",
        "py": "Shènshū",
        "hv": "THẬN DU",
        "mean": "Huyệt Thận Du (BL23) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 遗精、阳痿、遗尿、月经不调、带下病、腰痛。"
      },
      {
        "zh": "气海俞",
        "py": "Qìhǎishū",
        "hv": "KHÍ HẢI DU",
        "mean": "Huyệt Khí Hải Du (BL24) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰痛、月经不调、痛经、哮喘。"
      },
      {
        "zh": "大肠俞",
        "py": "Dàchángshū",
        "hv": "ĐẠI TRƯỜNG DU",
        "mean": "Huyệt Đại Trường Du (BL25) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰痛、肠鸣、腹胀、泄泻、便秘、肌肉萎缩。"
      },
      {
        "zh": "关元俞",
        "py": "Guānyuánshū",
        "hv": "QUAN NGUYÊN DU",
        "mean": "Huyệt Quan Nguyên Du (BL26) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰骶痛、腹胀、泄泻。"
      },
      {
        "zh": "小肠俞",
        "py": "Xiǎochángshū",
        "hv": "TIỂU TRƯỜNG DU",
        "mean": "Huyệt Tiểu Trường Du (BL27) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 小腹胀痛、遗精、遗尿、腰骶痛。"
      },
      {
        "zh": "膀胱俞",
        "py": "Pángguāngshū",
        "hv": "BÀNG QUANG DU",
        "mean": "Huyệt Bàng Quang Du (BL28) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 小便不利、遗尿、腰骶痛。"
      },
      {
        "zh": "中膂俞",
        "py": "Zhōnglǚshū",
        "hv": "TRUNG 膂 DU",
        "mean": "Huyệt Trung 膂 Du (BL29) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 痢疾、疝气、拘急强直。"
      },
      {
        "zh": "白环俞",
        "py": "Báihuánshū",
        "hv": "BẠCH HOÀN DU",
        "mean": "Huyệt Bạch Hoàn Du (BL30) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 遗尿、疝气、带下病、月经不调、小便不利、便秘。"
      },
      {
        "zh": "上髎",
        "py": "Shàngliáo",
        "hv": "THƯỢNG LIÊU",
        "mean": "Huyệt Thượng Liêu (BL31) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、小便不利、便秘、月经不调、带下病、子宫脱垂。"
      },
      {
        "zh": "次髎",
        "py": "Cìliáo",
        "hv": "THỨ LIÊU",
        "mean": "Huyệt Thứ Liêu (BL32) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、疝气、月经不调、带下病、痛经、遗精。"
      },
      {
        "zh": "中髎",
        "py": "Zhōngliáo",
        "hv": "TRUNG LIÊU",
        "mean": "Huyệt Trung Liêu (BL33) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、便秘、泄泻、小便不利、月经不调、带下病。"
      },
      {
        "zh": "下髎",
        "py": "Xiàliáo",
        "hv": "HẠ LIÊU",
        "mean": "Huyệt Hạ Liêu (BL34) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、小腹痛、腹痛、小便不利、便秘、带下病。"
      },
      {
        "zh": "会阳",
        "py": "Huìyáng",
        "hv": "HỘI DƯƠNG",
        "mean": "Huyệt Hội Dương (BL35) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 痢疾、泄泻、痔疮、阳痿、带下病。"
      },
      {
        "zh": "承扶",
        "py": "Chéngfú",
        "hv": "THỪA PHÙ",
        "mean": "Huyệt Thừa Phù (BL36) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 便秘、肌肉萎缩、麻木、活动不利。"
      },
      {
        "zh": "殷门",
        "py": "Yīnmén",
        "hv": "殷 MÔN",
        "mean": "Huyệt 殷 Môn (BL37) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 大腿. Chủ trị: 肌肉萎缩、麻木、活动不利、半身不遂。"
      },
      {
        "zh": "浮郄",
        "py": "Fúxì",
        "hv": "PHÙ 郄",
        "mean": "Huyệt Phù 郄 (BL38) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 麻木。"
      },
      {
        "zh": "委阳",
        "py": "Wěiyáng",
        "hv": "委 DƯƠNG",
        "mean": "Huyệt 委 Dương (BL39) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 拘急强直、水肿、小便不利。"
      },
      {
        "zh": "委中",
        "py": "Wěizhōng",
        "hv": "委 TRUNG",
        "mean": "Huyệt 委 Trung (BL40) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 腰痛、活动不利、髋部症状、肌肉萎缩、麻木、半身不遂。"
      },
      {
        "zh": "附分",
        "py": "Fùfēn",
        "hv": "PHỤ PHÂN",
        "mean": "Huyệt Phụ Phân (BL41) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 拘急强直、肩痛、麻木。"
      },
      {
        "zh": "魄户",
        "py": "Pòhù",
        "hv": "魄 HỘ",
        "mean": "Huyệt 魄 Hộ (BL42) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咯血、咳嗽、哮喘、项强、肩痛。"
      },
      {
        "zh": "膏肓",
        "py": "Gāohuāng",
        "hv": "膏 肓",
        "mean": "Huyệt 膏 肓 (BL43) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、唾血、盗汗、遗精。"
      },
      {
        "zh": "神堂",
        "py": "Shéntáng",
        "hv": "THẦN ĐƯỜNG",
        "mean": "Huyệt Thần Đường (BL44) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 哮喘、心痛、心悸、咳嗽、拘急强直。"
      },
      {
        "zh": "譩譆",
        "py": "Yìxǐ",
        "hv": "譩 譆",
        "mean": "Huyệt 譩 譆 (BL45) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、肩痛。"
      },
      {
        "zh": "膈关",
        "py": "Géguān",
        "hv": "CÁCH QUAN",
        "mean": "Huyệt Cách Quan (BL46) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 吞咽困难、呃逆、呕吐、拘急强直。"
      },
      {
        "zh": "魂门",
        "py": "Húnmén",
        "hv": "HỒN MÔN",
        "mean": "Huyệt Hồn Môn (BL47) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 胸痛、呕吐、泄泻。"
      },
      {
        "zh": "阳纲",
        "py": "Yánggāng",
        "hv": "DƯƠNG 纲",
        "mean": "Huyệt Dương 纲 (BL48) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 肠鸣、腹痛、泄泻、胁痛、黄疸。"
      },
      {
        "zh": "意舍",
        "py": "Yìshè",
        "hv": "意 XÁ",
        "mean": "Huyệt 意 Xá (BL49) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、肠鸣、呕吐、泄泻、吞咽困难。"
      },
      {
        "zh": "胃仓",
        "py": "Wèicāng",
        "hv": "VỊ THƯƠNG",
        "mean": "Huyệt Vị Thương (BL50) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、消化不良。"
      },
      {
        "zh": "肓门",
        "py": "Huāngmén",
        "hv": "肓 MÔN",
        "mean": "Huyệt 肓 Môn (BL51) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腹痛、便秘。"
      },
      {
        "zh": "志室",
        "py": "Zhìshì",
        "hv": "CHÍ THẤT",
        "mean": "Huyệt Chí Thất (BL52) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 遗精、阳痿、遗尿、小便不利、月经不调、水肿。"
      },
      {
        "zh": "胞肓",
        "py": "Bāohuāng",
        "hv": "BÀO 肓",
        "mean": "Huyệt Bào 肓 (BL53) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 肠鸣、腹胀。"
      },
      {
        "zh": "秩边",
        "py": "Zhìbiān",
        "hv": "TRẬT BIÊN",
        "mean": "Huyệt Trật Biên (BL54) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 肌肉萎缩、活动不利、小便不利、痔疮、便秘。"
      },
      {
        "zh": "合阳",
        "py": "Héyáng",
        "hv": "HỢP DƯƠNG",
        "mean": "Huyệt Hợp Dương (BL55) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 腰痛。"
      },
      {
        "zh": "承筋",
        "py": "Chéngjīn",
        "hv": "THỪA CÂN",
        "mean": "Huyệt Thừa Cân (BL56) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 痔疮。"
      },
      {
        "zh": "承山",
        "py": "Chéngshān",
        "hv": "THỪA SƠN",
        "mean": "Huyệt Thừa Sơn (BL57) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 腰痛、痔疮、便秘、脚气。"
      },
      {
        "zh": "飞扬",
        "py": "Fēiyáng",
        "hv": "PHI DƯƠNG",
        "mean": "Huyệt Phi Dương (BL58) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 头痛、视物模糊、鼻塞、鼻衄、痔疮。"
      },
      {
        "zh": "跗阳",
        "py": "Fūyáng",
        "hv": "跗 DƯƠNG",
        "mean": "Huyệt 跗 Dương (BL59) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 头痛、腰痛。"
      },
      {
        "zh": "昆仑",
        "py": "Kūnlún",
        "hv": "CÔN LÔN",
        "mean": "Huyệt Côn Lôn (BL60) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 踝部. Chủ trị: 头痛、视物模糊、项强、鼻衄、肩痛、癫痫。"
      },
      {
        "zh": "仆参",
        "py": "Púcān",
        "hv": "BỘC THAM",
        "mean": "Huyệt Bộc Tham (BL61) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 肌肉萎缩、足跟痛。"
      },
      {
        "zh": "申脉",
        "py": "Shēnmài",
        "hv": "THÂN MẠCH",
        "mean": "Huyệt Thân Mạch (BL62) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫痫、癫狂、头痛、头晕、失眠、背痛。"
      },
      {
        "zh": "金门",
        "py": "Jīnmén",
        "hv": "KIM MÔN",
        "mean": "Huyệt Kim Môn (BL63) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫狂、癫痫、小儿惊风、抽搐、背痛、活动不利。"
      },
      {
        "zh": "京骨",
        "py": "Jīnggǔ",
        "hv": "京 CỐT",
        "mean": "Huyệt 京 Cốt (BL64) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 头痛、项强、癫痫。"
      },
      {
        "zh": "束骨",
        "py": "Shùgǔ",
        "hv": "THÚC CỐT",
        "mean": "Huyệt Thúc Cốt (BL65) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫狂、头痛、项强、视物模糊、背痛。"
      },
      {
        "zh": "足通谷",
        "py": "Zútōnggǔ",
        "hv": "TÚC THÔNG CỐC",
        "mean": "Huyệt Túc Thông Cốc (BL66) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足趾. Chủ trị: 头痛、项强、视物模糊、鼻衄、癫狂。"
      },
      {
        "zh": "至阴",
        "py": "Zhìyīn",
        "hv": "CHÍ ÂM",
        "mean": "Huyệt Chí Âm (BL67) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足趾. Chủ trị: 头痛、鼻塞、鼻衄、眼痛。"
      },
      {
        "zh": "然谷",
        "py": "Rángǔ",
        "hv": "NHIÊN CỐC",
        "mean": "Huyệt Nhiên Cốc (KI2) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 瘙痒、子宫脱垂、月经不调、遗精、咯血、口渴。"
      },
      {
        "zh": "太溪",
        "py": "Tàixī",
        "hv": "THÁI KHÊ",
        "mean": "Huyệt Thái Khê (KI3) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 踝部. Chủ trị: 咽喉痛、牙痛、耳聋、耳鸣、头晕、唾血。"
      },
      {
        "zh": "大钟",
        "py": "Dàzhōng",
        "hv": "ĐẠI CHUNG",
        "mean": "Huyệt Đại Chung (KI4) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 唾血、哮喘、拘急强直、小便不利、便秘、足跟痛。"
      },
      {
        "zh": "水泉",
        "py": "Shuǐquán",
        "hv": "THỦY TUYỀN",
        "mean": "Huyệt Thủy Tuyền (KI5) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 闭经、月经不调、痛经、子宫脱垂、小便不利、视物模糊。"
      },
      {
        "zh": "照海",
        "py": "Zhàohǎi",
        "hv": "CHIẾU HẢI",
        "mean": "Huyệt Chiếu Hải (KI6) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 月经不调、带下病、子宫脱垂、瘙痒、尿潴留、便秘。"
      },
      {
        "zh": "复溜",
        "py": "Fùliū",
        "hv": "PHỤC LƯU",
        "mean": "Huyệt Phục Lưu (KI7) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 水肿、腹胀、泄泻、肠鸣、肌肉萎缩、盗汗。"
      },
      {
        "zh": "交信",
        "py": "Jiāoxìn",
        "hv": "GIAO TÍN",
        "mean": "Huyệt Giao Tín (KI8) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 月经不调、痛经、崩漏、子宫脱垂、泄泻、便秘。"
      },
      {
        "zh": "筑宾",
        "py": "Zhùbīn",
        "hv": "TRÚC TÂN",
        "mean": "Huyệt Trúc Tân (KI9) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 神志病、疝气。"
      },
      {
        "zh": "阴谷",
        "py": "Yīngǔ",
        "hv": "ÂM CỐC",
        "mean": "Huyệt Âm Cốc (KI10) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 膝部. Chủ trị: 阳痿、疝气、崩漏、小便不利、膝痛、神志病。"
      },
      {
        "zh": "横骨",
        "py": "Hénggǔ",
        "hv": "HOÀNH CỐT",
        "mean": "Huyệt Hoành Cốt (KI11) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 小便不利、遗尿、遗精、阳痿。"
      },
      {
        "zh": "大赫",
        "py": "Dàhè",
        "hv": "ĐẠI 赫",
        "mean": "Huyệt Đại 赫 (KI12) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 遗精、阳痿、带下病、外阴痛、子宫脱垂。"
      },
      {
        "zh": "气穴",
        "py": "Qìxué",
        "hv": "KHÍ 穴",
        "mean": "Huyệt Khí 穴 (KI13) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 月经不调、痛经、小便不利、腹痛、泄泻。"
      },
      {
        "zh": "四满",
        "py": "Sìmǎn",
        "hv": "TỨ MÃN",
        "mean": "Huyệt Tứ Mãn (KI14) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、遗精、月经不调、痛经。"
      },
      {
        "zh": "中注",
        "py": "Zhōngzhù",
        "hv": "TRUNG CHÚ",
        "mean": "Huyệt Trung Chú (KI15) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 月经不调、腹痛、便秘。"
      },
      {
        "zh": "肓俞",
        "py": "Huāngshū",
        "hv": "肓 DU",
        "mean": "Huyệt 肓 Du (KI16) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、呕吐、便秘、泄泻。"
      },
      {
        "zh": "商曲",
        "py": "Shāngqū",
        "hv": "THƯƠNG KHÚC",
        "mean": "Huyệt Thương Khúc (KI17) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、便秘。"
      },
      {
        "zh": "石关",
        "py": "Shíguān",
        "hv": "石 QUAN",
        "mean": "Huyệt 石 Quan (KI18) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 呕吐、腹痛、便秘。"
      },
      {
        "zh": "阴都",
        "py": "Yīndū",
        "hv": "ÂM ĐÔ",
        "mean": "Huyệt Âm Đô (KI19) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 肠鸣、腹痛、便秘、呕吐。"
      },
      {
        "zh": "腹通谷",
        "py": "Fùtōnggǔ",
        "hv": "腹 THÔNG CỐC",
        "mean": "Huyệt 腹 Thông Cốc (KI20) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、呕吐、消化不良。"
      },
      {
        "zh": "幽门",
        "py": "Yōumén",
        "hv": "幽 MÔN",
        "mean": "Huyệt 幽 Môn (KI21) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、消化不良、呕吐、泄泻、恶心。"
      },
      {
        "zh": "步廊",
        "py": "Bùláng",
        "hv": "BỘ 廊",
        "mean": "Huyệt Bộ 廊 (KI22) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、呕吐、食欲不振。"
      },
      {
        "zh": "神封",
        "py": "Shénfēng",
        "hv": "THẦN PHONG",
        "mean": "Huyệt Thần Phong (KI23) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、乳痈。"
      },
      {
        "zh": "灵墟",
        "py": "Língxū",
        "hv": "LINH 墟",
        "mean": "Huyệt Linh 墟 (KI24) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、乳痈。"
      },
      {
        "zh": "神藏",
        "py": "Shéncáng",
        "hv": "THẦN TÀNG",
        "mean": "Huyệt Thần Tàng (KI25) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛。"
      },
      {
        "zh": "彧中",
        "py": "Yùzhōng",
        "hv": "彧 TRUNG",
        "mean": "Huyệt 彧 Trung (KI26) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满。"
      },
      {
        "zh": "俞府",
        "py": "Shūfǔ",
        "hv": "DU PHỦ",
        "mean": "Huyệt Du Phủ (KI27) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛。"
      },
      {
        "zh": "天池",
        "py": "Tiānchí",
        "hv": "THIÊN TRÌ",
        "mean": "Huyệt Thiên Trì (PC1) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 胸前部. Chủ trị: 胁痛。"
      },
      {
        "zh": "天泉",
        "py": "Tiānquán",
        "hv": "THIÊN TUYỀN",
        "mean": "Huyệt Thiên Tuyền (PC2) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 上臂. Chủ trị: 心痛、咳嗽、胸痛。"
      },
      {
        "zh": "曲泽",
        "py": "Qūzé",
        "hv": "KHÚC TRẠCH",
        "mean": "Huyệt Khúc Trạch (PC3) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 肘部. Chủ trị: 心痛、心悸、热病、烦躁、胃痛、呕吐。"
      },
      {
        "zh": "郄门",
        "py": "Xìmén",
        "hv": "郄 MÔN",
        "mean": "Huyệt 郄 Môn (PC4) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、鼻衄、咯血、胸痛、癫痫。"
      },
      {
        "zh": "间使",
        "py": "Jiānshǐ",
        "hv": "GIAN SỬ",
        "mean": "Huyệt Gian Sử (PC5) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、胃痛、呕吐、热病、烦躁。"
      },
      {
        "zh": "大陵",
        "py": "Dàlíng",
        "hv": "ĐẠI LĂNG",
        "mean": "Huyệt Đại Lăng (PC7) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 腕部. Chủ trị: 心痛、心悸、胃痛、呕吐、神志病、癫痫。"
      },
      {
        "zh": "劳宫",
        "py": "Láogōng",
        "hv": "LAO CUNG",
        "mean": "Huyệt Lao Cung (PC8) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 手掌. Chủ trị: 心痛、神志病、癫痫、呕吐、恶心。"
      },
      {
        "zh": "中冲",
        "py": "Zhōngchōng",
        "hv": "TRUNG XUNG",
        "mean": "Huyệt Trung Xung (PC9) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 手指. Chủ trị: 心痛、心悸、昏厥、失语、拘急强直、热病。"
      },
      {
        "zh": "关冲",
        "py": "Guānchōng",
        "hv": "QUAN XUNG",
        "mean": "Huyệt Quan Xung (TE1) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手指. Chủ trị: 头痛、目赤、咽喉痛、拘急强直、热病、烦躁。"
      },
      {
        "zh": "液门",
        "py": "Yèmén",
        "hv": "DỊCH MÔN",
        "mean": "Huyệt Dịch Môn (TE2) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手部. Chủ trị: 头痛、目赤、耳聋、咽喉痛、疟疾、臂痛。"
      },
      {
        "zh": "中渚",
        "py": "Zhōngzhǔ",
        "hv": "TRUNG CHỮ",
        "mean": "Huyệt Trung Chữ (TE3) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手部. Chủ trị: 头痛、目赤、耳聋、耳鸣、咽喉痛、热病。"
      },
      {
        "zh": "阳池",
        "py": "Yángchí",
        "hv": "DƯƠNG TRÌ",
        "mean": "Huyệt Dương Trì (TE4) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 腕部. Chủ trị: 臂痛、疟疾、耳聋、口渴。"
      },
      {
        "zh": "外关",
        "py": "Wàiguān",
        "hv": "NGOẠI QUAN",
        "mean": "Huyệt Ngoại Quan (TE5) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 热病、头痛、耳聋、耳鸣、胁痛、活动不利。"
      },
      {
        "zh": "支沟",
        "py": "Zhīgōu",
        "hv": "CHI CÂU",
        "mean": "Huyệt Chi Câu (TE6) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳鸣、耳聋、胁痛、呕吐、便秘、热病。"
      },
      {
        "zh": "会宗",
        "py": "Huìzōng",
        "hv": "HỘI TÔNG",
        "mean": "Huyệt Hội Tông (TE7) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、癫痫。"
      },
      {
        "zh": "三阳络",
        "py": "Sānyángluò",
        "hv": "TAM DƯƠNG LẠC",
        "mean": "Huyệt Tam Dương Lạc (TE8) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、声音嘶哑、胸痛、牙痛。"
      },
      {
        "zh": "四渎",
        "py": "Sìdú",
        "hv": "TỨ 渎",
        "mean": "Huyệt Tứ 渎 (TE9) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、牙痛、偏头痛、声音嘶哑。"
      },
      {
        "zh": "天井",
        "py": "Tiānjǐng",
        "hv": "THIÊN TỈNH",
        "mean": "Huyệt Thiên Tỉnh (TE10) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 肘部. Chủ trị: 偏头痛、颈痛、癫痫、瘰疬、瘿气。"
      },
      {
        "zh": "清泠渊",
        "py": "Qīnglíngyuān",
        "hv": "THANH 泠 UYÊN",
        "mean": "Huyệt Thanh 泠 Uyên (TE11) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 头痛、目痛、肩臂痛。"
      },
      {
        "zh": "消泺",
        "py": "Xiāoluò",
        "hv": "TIÊU 泺",
        "mean": "Huyệt Tiêu 泺 (TE12) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 头痛、项强、活动不利。"
      },
      {
        "zh": "臑会",
        "py": "Nàohuì",
        "hv": "NHU HỘI",
        "mean": "Huyệt Nhu Hội (TE13) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 瘿气、肩痛。"
      },
      {
        "zh": "肩髎",
        "py": "Jiānliáo",
        "hv": "KIÊN LIÊU",
        "mean": "Huyệt Kiên Liêu (TE14) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 肩部. Chủ trị: 活动不利。"
      },
      {
        "zh": "天髎",
        "py": "Tiānliáo",
        "hv": "THIÊN LIÊU",
        "mean": "Huyệt Thiên Liêu (TE15) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 体表相关区域. Chủ trị: 肩痛、拘急强直。"
      },
      {
        "zh": "天牖",
        "py": "Tiānyǒu",
        "hv": "THIÊN 牖",
        "mean": "Huyệt Thiên 牖 (TE16) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 颈部. Chủ trị: 头痛、项强、面肿、视物模糊、耳聋。"
      },
      {
        "zh": "翳风",
        "py": "Yìfēng",
        "hv": "Ế PHONG",
        "mean": "Huyệt Ế Phong (TE17) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 颈部. Chủ trị: 耳鸣、耳聋、面瘫、牙痛、颊肿、瘰疬。"
      },
      {
        "zh": "瘈脉",
        "py": "Chìmài",
        "hv": "瘈 MẠCH",
        "mean": "Huyệt 瘈 Mạch (TE18) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋、小儿惊风、抽搐。"
      },
      {
        "zh": "颅息",
        "py": "Lúxī",
        "hv": "颅 TỨC",
        "mean": "Huyệt 颅 Tức (TE19) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋、小儿惊风、抽搐。"
      },
      {
        "zh": "角孙",
        "py": "Jiǎosūn",
        "hv": "GIÁC TÔN",
        "mean": "Huyệt Giác Tôn (TE20) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 耳鸣、目肿痛、牙痛。"
      },
      {
        "zh": "耳门",
        "py": "Ěrmén",
        "hv": "耳 MÔN",
        "mean": "Huyệt 耳 Môn (TE21) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 面部. Chủ trị: 耳鸣、耳聋、牙痛、拘急强直。"
      },
      {
        "zh": "耳和髎",
        "py": "Ěrhéliáo",
        "hv": "耳 HÒA LIÊU",
        "mean": "Huyệt 耳 Hòa Liêu (TE22) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 偏头痛、耳鸣。"
      },
      {
        "zh": "丝竹空",
        "py": "Sīzhúkōng",
        "hv": "TY TRÚC KHÔNG",
        "mean": "Huyệt Ty Trúc Không (TE23) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、眼痛、视物模糊、眼睑瞤动、牙痛、面瘫。"
      },
      {
        "zh": "瞳子髎",
        "py": "Tóngzǐliáo",
        "hv": "瞳 TỬ LIÊU",
        "mean": "Huyệt 瞳 Tử Liêu (GB1) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眼痛、流泪。"
      },
      {
        "zh": "听会",
        "py": "Tīnghuì",
        "hv": "THÍNH HỘI",
        "mean": "Huyệt Thính Hội (GB2) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、牙痛、活动不利。"
      },
      {
        "zh": "上关",
        "py": "Shàngguān",
        "hv": "THƯỢNG QUAN",
        "mean": "Huyệt Thượng Quan (GB3) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、耳聋、耳鸣、牙痛。"
      },
      {
        "zh": "颔厌",
        "py": "Hànyàn",
        "hv": "颔 厌",
        "mean": "Huyệt 颔 厌 (GB4) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕、耳鸣、牙痛、抽搐、癫痫。"
      },
      {
        "zh": "悬颅",
        "py": "Xuánlú",
        "hv": "HUYỀN 颅",
        "mean": "Huyệt Huyền 颅 (GB5) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、面肿。"
      },
      {
        "zh": "悬厘",
        "py": "Xuánlí",
        "hv": "HUYỀN LY",
        "mean": "Huyệt Huyền Ly (GB6) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、耳鸣。"
      },
      {
        "zh": "曲鬓",
        "py": "Qūbìn",
        "hv": "KHÚC 鬓",
        "mean": "Huyệt Khúc 鬓 (GB7) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、颊肿、牙关紧闭、小儿惊风、抽搐。"
      },
      {
        "zh": "率谷",
        "py": "Shuàigǔ",
        "hv": "SUẤT CỐC",
        "mean": "Huyệt Suất Cốc (GB8) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕、呕吐、小儿惊风、抽搐。"
      },
      {
        "zh": "天冲",
        "py": "Tiānchōng",
        "hv": "THIÊN XUNG",
        "mean": "Huyệt Thiên Xung (GB9) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、癫痫、抽搐。"
      },
      {
        "zh": "浮白",
        "py": "Fúbái",
        "hv": "PHÙ BẠCH",
        "mean": "Huyệt Phù Bạch (GB10) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋。"
      },
      {
        "zh": "头窍阴",
        "py": "Tóuqiàoyīn",
        "hv": "ĐẦU KHIẾU ÂM",
        "mean": "Huyệt Đầu Khiếu Âm (GB11) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 耳鸣、耳聋。"
      },
      {
        "zh": "完骨",
        "py": "Wángǔ",
        "hv": "HOÀN CỐT",
        "mean": "Huyệt Hoàn Cốt (GB12) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 头痛、失眠、颊肿、牙痛。"
      },
      {
        "zh": "本神",
        "py": "Běnshén",
        "hv": "BẢN THẦN",
        "mean": "Huyệt Bản Thần (GB13) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、失眠、眩晕、癫痫。"
      },
      {
        "zh": "阳白",
        "py": "Yángbái",
        "hv": "DƯƠNG BẠCH",
        "mean": "Huyệt Dương Bạch (GB14) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、眼睑瞤动、流泪。"
      },
      {
        "zh": "头临泣",
        "py": "Tóulínqì",
        "hv": "ĐẦU LÂM KHẤP",
        "mean": "Huyệt Đầu Lâm Khấp (GB15) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、流泪、流涕、鼻塞。"
      },
      {
        "zh": "目窗",
        "py": "Mùchuāng",
        "hv": "目 SONG",
        "mean": "Huyệt 目 Song (GB16) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、鼻塞。"
      },
      {
        "zh": "正营",
        "py": "Zhèngyíng",
        "hv": "CHÁNH 营",
        "mean": "Huyệt Chánh 营 (GB17) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕。"
      },
      {
        "zh": "承灵",
        "py": "Chénglíng",
        "hv": "THỪA LINH",
        "mean": "Huyệt Thừa Linh (GB18) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、鼻塞。"
      },
      {
        "zh": "脑空",
        "py": "Nǎokōng",
        "hv": "脑 KHÔNG",
        "mean": "Huyệt 脑 Không (GB19) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、拘急强直、眩晕、耳鸣、癫痫。"
      },
      {
        "zh": "肩井",
        "py": "Jiānjǐng",
        "hv": "KIÊN TỈNH",
        "mean": "Huyệt Kiên Tỉnh (GB21) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 肩痛、活动不利、乳少、乳痈、瘰疬、中风。"
      },
      {
        "zh": "渊腋",
        "py": "Yuānyè",
        "hv": "UYÊN 腋",
        "mean": "Huyệt Uyên 腋 (GB22) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸侧部. Chủ trị: 胸满、胁痛、活动不利。"
      },
      {
        "zh": "辄筋",
        "py": "Zhéjīn",
        "hv": "辄 CÂN",
        "mean": "Huyệt 辄 Cân (GB23) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸侧部. Chủ trị: 胸满、胁痛、哮喘。"
      },
      {
        "zh": "日月",
        "py": "Rìyuè",
        "hv": "NHẬT NGUYỆT",
        "mean": "Huyệt Nhật Nguyệt (GB24) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸前部. Chủ trị: 胁痛、呕吐、反酸、呃逆、黄疸、乳痈。"
      },
      {
        "zh": "京门",
        "py": "Jīngmén",
        "hv": "京 MÔN",
        "mean": "Huyệt 京 Môn (GB25) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 腹胀、肠鸣、泄泻、腰痛。"
      },
      {
        "zh": "五枢",
        "py": "Wǔshū",
        "hv": "NGŨ XU",
        "mean": "Huyệt Ngũ Xu (GB27) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 带下病、小腹痛、腹痛、疝气、便秘。"
      },
      {
        "zh": "维道",
        "py": "Wéidào",
        "hv": "DUY ĐẠO",
        "mean": "Huyệt Duy Đạo (GB28) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 带下病、小腹痛、腹痛、疝气、子宫脱垂。"
      },
      {
        "zh": "居髎",
        "py": "Jūliáo",
        "hv": "居 LIÊU",
        "mean": "Huyệt 居 Liêu (GB29) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 臀部. Chủ trị: 麻木、肌肉萎缩。"
      },
      {
        "zh": "环跳",
        "py": "Huántiào",
        "hv": "HOÀN KHIÊU",
        "mean": "Huyệt Hoàn Khiêu (GB30) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 臀部. Chủ trị: 肌肉萎缩、半身不遂。"
      },
      {
        "zh": "风市",
        "py": "Fēngshì",
        "hv": "PHONG THỊ",
        "mean": "Huyệt Phong Thị (GB31) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 大腿. Chủ trị: 脚气、瘙痒。"
      },
      {
        "zh": "中渎",
        "py": "Zhōngdú",
        "hv": "TRUNG 渎",
        "mean": "Huyệt Trung 渎 (GB32) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 大腿. Chủ trị: 麻木、半身不遂。"
      },
      {
        "zh": "膝阳关",
        "py": "Xīyángguān",
        "hv": "膝 DƯƠNG QUAN",
        "mean": "Huyệt 膝 Dương Quan (GB33) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 膝部. Chủ trị: 麻木。"
      },
      {
        "zh": "阳陵泉",
        "py": "Yánglíngquán",
        "hv": "DƯƠNG LĂNG TUYỀN",
        "mean": "Huyệt Dương Lăng Tuyền (GB34) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 胁痛、黄疸、膝痛、下肢痿痹。"
      },
      {
        "zh": "阳交",
        "py": "Yángjiāo",
        "hv": "DƯƠNG GIAO",
        "mean": "Huyệt Dương Giao (GB35) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 胸满、肌肉萎缩。"
      },
      {
        "zh": "外丘",
        "py": "Wàiqiū",
        "hv": "NGOẠI KHÂU",
        "mean": "Huyệt Ngoại Khâu (GB36) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 颈痛。"
      },
      {
        "zh": "光明",
        "py": "Guāngmíng",
        "hv": "QUANG MINH",
        "mean": "Huyệt Quang Minh (GB37) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 膝痛、肌肉萎缩、活动不利、视物模糊、眼痛。"
      },
      {
        "zh": "阳辅",
        "py": "Yángfǔ",
        "hv": "DƯƠNG 辅",
        "mean": "Huyệt Dương 辅 (GB38) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 偏头痛、瘰疬、胸痛、疟疾。"
      },
      {
        "zh": "悬钟",
        "py": "Xuánzhōng",
        "hv": "HUYỀN CHUNG",
        "mean": "Huyệt Huyền Chung (GB39) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 中风、半身不遂、腹胀、胁痛、肌肉萎缩、脚气。"
      },
      {
        "zh": "丘墟",
        "py": "Qiūxū",
        "hv": "KHÂU 墟",
        "mean": "Huyệt Khâu 墟 (GB40) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 踝部. Chủ trị: 颈痛、胁痛、呕吐、反酸、肌肉萎缩、疟疾。"
      },
      {
        "zh": "足临泣",
        "py": "Zúlínqì",
        "hv": "TÚC LÂM KHẤP",
        "mean": "Huyệt Túc Lâm Khấp (GB41) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 头痛、眩晕、瘰疬、胁痛、月经不调。"
      },
      {
        "zh": "地五会",
        "py": "Dìwǔhuì",
        "hv": "ĐỊA NGŨ HỘI",
        "mean": "Huyệt Địa Ngũ Hội (GB42) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 耳鸣。"
      },
      {
        "zh": "侠溪",
        "py": "Xiáxī",
        "hv": "HIỆP KHÊ",
        "mean": "Huyệt Hiệp Khê (GB43) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 头痛、头晕、眩晕、耳鸣、耳聋、颊肿。"
      },
      {
        "zh": "足窍阴",
        "py": "Zúqiàoyīn",
        "hv": "TÚC KHIẾU ÂM",
        "mean": "Huyệt Túc Khiếu Âm (GB44) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足趾. Chủ trị: 偏头痛、耳聋、耳鸣、眼痛、热病。"
      },
      {
        "zh": "大敦",
        "py": "Dàdūn",
        "hv": "ĐẠI 敦",
        "mean": "Huyệt Đại 敦 (LR1) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足趾. Chủ trị: 疝气、遗尿、崩漏、子宫脱垂、癫痫。"
      },
      {
        "zh": "行间",
        "py": "Xíngjiān",
        "hv": "HÀNH GIAN",
        "mean": "Huyệt Hành Gian (LR2) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足部. Chủ trị: 胁痛、腹胀、头痛、头晕、眩晕、目肿痛。"
      },
      {
        "zh": "中封",
        "py": "Zhōngfēng",
        "hv": "TRUNG PHONG",
        "mean": "Huyệt Trung Phong (LR4) thuộc Túc Quyết Âm Can Kinh. Vị trí: 踝部. Chủ trị: 疝气、外阴痛、遗精、尿潴留、胁痛。"
      },
      {
        "zh": "蠡沟",
        "py": "Lígōu",
        "hv": "LÃI CÂU",
        "mean": "Huyệt Lãi Câu (LR5) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 尿潴留、遗尿、疝气、月经不调、带下病、瘙痒。"
      },
      {
        "zh": "中都",
        "py": "Zhōngdū",
        "hv": "TRUNG ĐÔ",
        "mean": "Huyệt Trung Đô (LR6) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、疝气、崩漏。"
      },
      {
        "zh": "膝关",
        "py": "Xīguān",
        "hv": "膝 QUAN",
        "mean": "Huyệt 膝 Quan (LR7) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 膝部肿痛、下肢内侧疼痛。"
      },
      {
        "zh": "曲泉",
        "py": "Qūquán",
        "hv": "KHÚC TUYỀN",
        "mean": "Huyệt Khúc Tuyền (LR8) thuộc Túc Quyết Âm Can Kinh. Vị trí: 膝部. Chủ trị: 子宫脱垂、小腹痛、腹痛、尿潴留、遗精、外阴痛。"
      },
      {
        "zh": "阴包",
        "py": "Yīnbāo",
        "hv": "ÂM BAO",
        "mean": "Huyệt Âm Bao (LR9) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 小腹痛、腹痛、遗尿、尿潴留、月经不调。"
      },
      {
        "zh": "足五里",
        "py": "Zúwǔlǐ",
        "hv": "TÚC NGŨ LÝ",
        "mean": "Huyệt Túc Ngũ Lý (LR10) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 腹胀、尿潴留。"
      },
      {
        "zh": "阴廉",
        "py": "Yīnlián",
        "hv": "ÂM LIÊM",
        "mean": "Huyệt Âm Liêm (LR11) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 月经不调、带下病、小腹痛、腹痛。"
      },
      {
        "zh": "急脉",
        "py": "Jímài",
        "hv": "CẤP MẠCH",
        "mean": "Huyệt Cấp Mạch (LR12) thuộc Túc Quyết Âm Can Kinh. Vị trí: 体表相关区域. Chủ trị: 小腹痛、腹痛、疝气、外阴痛。"
      },
      {
        "zh": "章门",
        "py": "Zhāngmén",
        "hv": "CHƯƠNG MÔN",
        "mean": "Huyệt Chương Môn (LR13) thuộc Túc Quyết Âm Can Kinh. Vị trí: 腹部. Chủ trị: 腹胀、肠鸣、胁痛、呕吐、泄泻、消化不良。"
      },
      {
        "zh": "期门",
        "py": "Qīmén",
        "hv": "KỲ MÔN",
        "mean": "Huyệt Kỳ Môn (LR14) thuộc Túc Quyết Âm Can Kinh. Vị trí: 胸前部. Chủ trị: 腹胀、呃逆、反酸、乳痈、情志抑郁、热病。"
      },
      {
        "zh": "长强",
        "py": "Chángqiáng",
        "hv": "TRƯỜNG CƯỜNG",
        "mean": "Huyệt Trường Cường (GV1) thuộc Đốc Mạch. Vị trí: 会阴部. Chủ trị: 泄泻、痔疮、脱肛、便秘、癫痫。"
      },
      {
        "zh": "腰俞",
        "py": "Yāoshū",
        "hv": "YÊU DU",
        "mean": "Huyệt Yêu Du (GV2) thuộc Đốc Mạch. Vị trí: 骶部. Chủ trị: 月经不调、拘急强直、痔疮、肌肉萎缩、癫痫。"
      },
      {
        "zh": "腰阳关",
        "py": "Yāoyángguān",
        "hv": "YÊU DƯƠNG QUAN",
        "mean": "Huyệt Yêu Dương Quan (GV3) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 腰骶痛、下肢痿痹、月经不调。"
      },
      {
        "zh": "悬枢",
        "py": "Xuánshū",
        "hv": "HUYỀN XU",
        "mean": "Huyệt Huyền Xu (GV5) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 拘急强直、泄泻、消化不良。"
      },
      {
        "zh": "脊中",
        "py": "Jǐzhōng",
        "hv": "TÍCH TRUNG",
        "mean": "Huyệt Tích Trung (GV6) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 泄泻、黄疸、癫痫、拘急强直。"
      },
      {
        "zh": "中枢",
        "py": "Zhōngshū",
        "hv": "TRUNG XU",
        "mean": "Huyệt Trung Xu (GV7) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 腰痛、拘急强直。"
      },
      {
        "zh": "筋缩",
        "py": "Jīnsuō",
        "hv": "CÂN SÚC",
        "mean": "Huyệt Cân Súc (GV8) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 癫痫、拘急强直、胃痛。"
      },
      {
        "zh": "至阳",
        "py": "Zhìyáng",
        "hv": "CHÍ DƯƠNG",
        "mean": "Huyệt Chí Dương (GV9) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 黄疸、咳嗽、哮喘、拘急强直、胸痛。"
      },
      {
        "zh": "灵台",
        "py": "Língtái",
        "hv": "LINH THAI",
        "mean": "Huyệt Linh Thai (GV10) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、项强。"
      },
      {
        "zh": "神道",
        "py": "Shéndào",
        "hv": "THẦN ĐẠO",
        "mean": "Huyệt Thần Đạo (GV11) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 心悸、拘急强直、咳嗽、心痛。"
      },
      {
        "zh": "身柱",
        "py": "Shēnzhù",
        "hv": "身 TRỤ",
        "mean": "Huyệt 身 Trụ (GV12) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、癫痫、拘急强直。"
      },
      {
        "zh": "陶道",
        "py": "Táodào",
        "hv": "陶 ĐẠO",
        "mean": "Huyệt 陶 Đạo (GV13) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 拘急强直、头痛、疟疾、热病。"
      },
      {
        "zh": "哑门",
        "py": "Yǎmén",
        "hv": "Á MÔN",
        "mean": "Huyệt Á Môn (GV15) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 神志病、癫痫、耳聋、声音嘶哑、中风、拘急强直。"
      },
      {
        "zh": "风府",
        "py": "Fēngfǔ",
        "hv": "PHONG PHỦ",
        "mean": "Huyệt Phong Phủ (GV16) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 头痛、项强、视物模糊、鼻衄、咽喉痛、中风。"
      },
      {
        "zh": "脑户",
        "py": "Nǎohù",
        "hv": "脑 HỘ",
        "mean": "Huyệt 脑 Hộ (GV17) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、头晕、拘急强直。"
      },
      {
        "zh": "强间",
        "py": "Qiángjiān",
        "hv": "CƯỜNG GIAN",
        "mean": "Huyệt Cường Gian (GV18) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、项强、视物模糊、癫狂。"
      },
      {
        "zh": "后顶",
        "py": "Hòudǐng",
        "hv": "HẬU ĐÍNH",
        "mean": "Huyệt Hậu Đính (GV19) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眩晕、癫狂、癫痫。"
      },
      {
        "zh": "前顶",
        "py": "Qiándǐng",
        "hv": "TIỀN ĐÍNH",
        "mean": "Huyệt Tiền Đính (GV21) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、头晕、视物模糊、头痛、流涕。"
      },
      {
        "zh": "囟会",
        "py": "Xìnhuì",
        "hv": "囟 HỘI",
        "mean": "Huyệt 囟 Hội (GV22) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、视物模糊、流涕、小儿惊风、抽搐。"
      },
      {
        "zh": "上星",
        "py": "Shàngxīng",
        "hv": "THƯỢNG 星",
        "mean": "Huyệt Thượng 星 (GV23) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眼痛、鼻衄、流涕、神志病。"
      },
      {
        "zh": "神庭",
        "py": "Shéntíng",
        "hv": "THẦN ĐÌNH",
        "mean": "Huyệt Thần Đình (GV24) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、心悸、失眠、头痛、眩晕、流涕。"
      },
      {
        "zh": "印堂",
        "py": "Yìntáng",
        "hv": "ẤN ĐƯỜNG",
        "mean": "Huyệt Ấn Đường (GV24+) thuộc Đốc Mạch. Vùng: 头部."
      },
      {
        "zh": "素髎",
        "py": "Sùliáo",
        "hv": "TỐ LIÊU",
        "mean": "Huyệt Tố Liêu (GV25) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 昏厥、鼻塞、鼻衄、流涕。"
      },
      {
        "zh": "水沟",
        "py": "Shuǐgōu",
        "hv": "THỦY CÂU",
        "mean": "Huyệt Thủy Câu (GV26) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 昏厥、口眼歪斜、腰脊痛。"
      },
      {
        "zh": "兑端",
        "py": "Duìduān",
        "hv": "ĐOÁI ĐOAN",
        "mean": "Huyệt Đoái Đoan (GV27) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 神志病、拘急强直。"
      },
      {
        "zh": "龈交",
        "py": "Yínjiāo",
        "hv": "NGÂN GIAO",
        "mean": "Huyệt Ngân Giao (GV28) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 神志病、流涕。"
      },
      {
        "zh": "会阴",
        "py": "Huìyīn",
        "hv": "HỘI ÂM",
        "mean": "Huyệt Hội Âm (CV1) thuộc Nhâm Mạch. Vị trí: 会阴部. Chủ trị: 尿潴留、痔疮、遗精、遗尿、月经不调、神志病。"
      },
      {
        "zh": "曲骨",
        "py": "Qūgǔ",
        "hv": "KHÚC CỐT",
        "mean": "Huyệt Khúc Cốt (CV2) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、阳痿、带下病、月经不调、痛经。"
      },
      {
        "zh": "中极",
        "py": "Zhōngjí",
        "hv": "TRUNG CỰC",
        "mean": "Huyệt Trung Cực (CV3) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、阳痿、疝气、崩漏、月经不调。"
      },
      {
        "zh": "石门",
        "py": "Shímén",
        "hv": "石 MÔN",
        "mean": "Huyệt 石 Môn (CV5) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、水肿、疝气、遗尿、闭经。"
      },
      {
        "zh": "阴交",
        "py": "Yīnjiāo",
        "hv": "ÂM GIAO",
        "mean": "Huyệt Âm Giao (CV7) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹胀、水肿、疝气、月经不调。"
      },
      {
        "zh": "水分",
        "py": "Shuǐfēn",
        "hv": "THỦY PHÂN",
        "mean": "Huyệt Thủy Phân (CV9) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、水肿、尿潴留、泄泻。"
      },
      {
        "zh": "下脘",
        "py": "Xiàwǎn",
        "hv": "HẠ 脘",
        "mean": "Huyệt Hạ 脘 (CV10) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、消化不良、呕吐、泄泻。"
      },
      {
        "zh": "建里",
        "py": "Jiànlǐ",
        "hv": "KIẾN LÝ",
        "mean": "Huyệt Kiến Lý (CV11) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、腹胀、肠鸣、水肿、食欲不振。"
      },
      {
        "zh": "中脘",
        "py": "Zhōngwǎn",
        "hv": "TRUNG 脘",
        "mean": "Huyệt Trung 脘 (CV12) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、肠鸣、恶心、呕吐、反酸。"
      },
      {
        "zh": "上脘",
        "py": "Shàngwǎn",
        "hv": "THƯỢNG 脘",
        "mean": "Huyệt Thượng 脘 (CV13) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、恶心、呕吐、癫痫、失眠。"
      },
      {
        "zh": "巨阙",
        "py": "Jùquè",
        "hv": "CỰ 阙",
        "mean": "Huyệt Cự 阙 (CV14) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 恶心、反酸、吞咽困难、呕吐、神志病、癫痫。"
      },
      {
        "zh": "鸠尾",
        "py": "Jiūwěi",
        "hv": "鸠 尾",
        "mean": "Huyệt 鸠 尾 (CV15) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 恶心、神志病、癫痫。"
      },
      {
        "zh": "中庭",
        "py": "Zhōngtíng",
        "hv": "TRUNG ĐÌNH",
        "mean": "Huyệt Trung Đình (CV16) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸满、呃逆、恶心、食欲不振。"
      },
      {
        "zh": "膻中",
        "py": "Dànzhōng",
        "hv": "膻 TRUNG",
        "mean": "Huyệt 膻 Trung (CV17) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 哮喘、胸痛、胸满、心悸、乳少、呃逆。"
      },
      {
        "zh": "玉堂",
        "py": "Yùtáng",
        "hv": "NGỌC ĐƯỜNG",
        "mean": "Huyệt Ngọc Đường (CV18) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、呕吐。"
      },
      {
        "zh": "紫宫",
        "py": "Zǐgōng",
        "hv": "TỬ CUNG",
        "mean": "Huyệt Tử Cung (CV19) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、哮喘、咳嗽。"
      },
      {
        "zh": "华盖",
        "py": "Huágài",
        "hv": "华 CÁI",
        "mean": "Huyệt 华 Cái (CV20) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸满、哮喘、咳嗽。"
      },
      {
        "zh": "璇玑",
        "py": "Xuánjī",
        "hv": "璇 玑",
        "mean": "Huyệt 璇 玑 (CV21) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘。"
      },
      {
        "zh": "天突",
        "py": "Tiāntū",
        "hv": "THIÊN ĐỘT",
        "mean": "Huyệt Thiên Đột (CV22) thuộc Nhâm Mạch. Vị trí: 颈部. Chủ trị: 哮喘、咳嗽、咽喉痛、呃逆、声音嘶哑、吞咽困难。"
      },
      {
        "zh": "廉泉",
        "py": "Liánquán",
        "hv": "LIÊM TUYỀN",
        "mean": "Huyệt Liêm Tuyền (CV23) thuộc Nhâm Mạch. Vị trí: 颈部. Chủ trị: 失语、拘急强直、中风、声音嘶哑、吞咽困难。"
      },
      {
        "zh": "承浆",
        "py": "Chéngjiāng",
        "hv": "THỪA 浆",
        "mean": "Huyệt Thừa 浆 (CV24) thuộc Nhâm Mạch. Vị trí: 面部. Chủ trị: 牙痛、神志病。"
      },
      {
        "zh": "四神聪",
        "py": "Sìshéncōng",
        "hv": "TỨ THẦN 聪",
        "mean": "Huyệt Tứ Thần 聪 (EX-HN1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "当阳",
        "py": "Dāngyáng",
        "hv": "ĐƯƠNG DƯƠNG",
        "mean": "Huyệt Đương Dương (EX-HN2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "鱼腰",
        "py": "Yúyāo",
        "hv": "NGƯ YÊU",
        "mean": "Huyệt Ngư Yêu (EX-HN4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "太阳",
        "py": "Tàiyáng",
        "hv": "THÁI DƯƠNG",
        "mean": "Huyệt Thái Dương (EX-HN5) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "耳尖",
        "py": "Ěrjiān",
        "hv": "耳 TIÊM",
        "mean": "Huyệt 耳 Tiêm (EX-HN6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "球后",
        "py": "Qiúhòu",
        "hv": "CẦU HẬU",
        "mean": "Huyệt Cầu Hậu (EX-HN7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "上迎香",
        "py": "Shàngyíngxiāng",
        "hv": "THƯỢNG NGHINH HƯƠNG",
        "mean": "Huyệt Thượng Nghinh Hương (EX-HN8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "内迎香",
        "py": "Nèiyíngxiāng",
        "hv": "NỘI NGHINH HƯƠNG",
        "mean": "Huyệt Nội Nghinh Hương (EX-HN9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "聚泉",
        "py": "Jùquán",
        "hv": "TỤ TUYỀN",
        "mean": "Huyệt Tụ Tuyền (EX-HN10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "海泉",
        "py": "Hǎiquán",
        "hv": "HẢI TUYỀN",
        "mean": "Huyệt Hải Tuyền (EX-HN11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "金津玉液",
        "py": "JīnjīnYùyè",
        "hv": "KIM 津 NGỌC DỊCH",
        "mean": "Huyệt Kim 津 Ngọc Dịch (EX-HN12) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "翳明",
        "py": "Yìmíng",
        "hv": "Ế MINH",
        "mean": "Huyệt Ế Minh (EX-HN14) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "安眠",
        "py": "Ānmián",
        "hv": "AN 眠",
        "mean": "Huyệt An 眠 (N-HN54) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "牵正",
        "py": "Qiānzhènɡ",
        "hv": "KHIÊN CHÁNH",
        "mean": "Huyệt Khiên Chánh (N-HN20) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "新设",
        "py": "Xīnshè",
        "hv": "TÂN THIẾT",
        "mean": "Huyệt Tân Thiết (EXTRA-XINSHE) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "颈百劳",
        "py": "Jìngbǎiláo",
        "hv": "颈 BÁCH LAO",
        "mean": "Huyệt 颈 Bách Lao (EX-HN15) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "血压点",
        "py": "Xuèyādiǎn",
        "hv": "HUYẾT ÁP ĐIỂM",
        "mean": "Huyệt Huyết Áp Điểm (EXTRA-XUEYADIAN) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "提托",
        "py": "Títuō",
        "hv": "ĐỀ THÁC",
        "mean": "Huyệt Đề Thác (EXTRA-TITUO) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "子宫",
        "py": "Zǐgōng",
        "hv": "TỬ CUNG",
        "mean": "Huyệt Tử Cung (EX-CA1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "定喘",
        "py": "Dìngchuǎn",
        "hv": "ĐỊNH SUYỄN",
        "mean": "Huyệt Định Suyễn (EX-B1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "夹脊",
        "py": "Jiájǐ",
        "hv": "GIÁP TÍCH",
        "mean": "Huyệt Giáp Tích (EX-B2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "胃脘下俞",
        "py": "Wèiwǎnxiàshū",
        "hv": "VỊ 脘 HẠ DU",
        "mean": "Huyệt Vị 脘 Hạ Du (EX-B3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "接脊",
        "py": "Jiējǐ",
        "hv": "TIẾP TÍCH",
        "mean": "Huyệt Tiếp Tích (EXTRA-JIEJI) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "痞根",
        "py": "Pǐgēn",
        "hv": "痞 CĂN",
        "mean": "Huyệt 痞 Căn (EX-B4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "腰宜",
        "py": "Yāoyí",
        "hv": "YÊU 宜",
        "mean": "Huyệt Yêu 宜 (EX-B6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "腰眼",
        "py": "Yāoyǎn",
        "hv": "YÊU NHÃN",
        "mean": "Huyệt Yêu Nhãn (EX-B7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "十七椎",
        "py": "Shíqīzhuī",
        "hv": "THẬP THẤT CHÙY",
        "mean": "Huyệt Thập Thất Chùy (EX-B8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "肩前",
        "py": "Jiānqián",
        "hv": "KIÊN TIỀN",
        "mean": "Huyệt Kiên Tiền (M-UE48) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "肘尖",
        "py": "Zhǒujiān",
        "hv": "TRỤ TIÊM",
        "mean": "Huyệt Trụ Tiêm (EX-UE1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "二白",
        "py": "Èrbái",
        "hv": "NHỊ BẠCH",
        "mean": "Huyệt Nhị Bạch (EX-UE2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "中泉",
        "py": "Zhōngquán",
        "hv": "TRUNG TUYỀN",
        "mean": "Huyệt Trung Tuyền (EX-UE3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "中魁",
        "py": "Zhōngkuí",
        "hv": "TRUNG 魁",
        "mean": "Huyệt Trung 魁 (EX-UE4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "大骨空",
        "py": "Dàgǔkōng",
        "hv": "ĐẠI CỐT KHÔNG",
        "mean": "Huyệt Đại Cốt Không (EX-UE5) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "小骨空",
        "py": "Xiǎogǔkōng",
        "hv": "TIỂU CỐT KHÔNG",
        "mean": "Huyệt Tiểu Cốt Không (EX-UE6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "腰痛点",
        "py": "Yāotòngdiǎn",
        "hv": "YÊU THỐNG ĐIỂM",
        "mean": "Huyệt Yêu Thống Điểm (EX-UE7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "外劳宫",
        "py": "Wàiláogōng",
        "hv": "NGOẠI LAO CUNG",
        "mean": "Huyệt Ngoại Lao Cung (EX-UE8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "八邪",
        "py": "Bāxié",
        "hv": "BÁT TÀ",
        "mean": "Huyệt Bát Tà (EX-UE9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "四缝",
        "py": "Sìfèng",
        "hv": "TỨ PHÙNG",
        "mean": "Huyệt Tứ Phùng (EX-UE10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "十宣",
        "py": "Shíxuān",
        "hv": "THẬP 宣",
        "mean": "Huyệt Thập 宣 (EX-UE11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "髋骨",
        "py": "Kuāngǔ",
        "hv": "髋 CỐT",
        "mean": "Huyệt 髋 Cốt (EX-LE1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "鹤顶",
        "py": "Hèdǐng",
        "hv": "鹤 ĐÍNH",
        "mean": "Huyệt 鹤 Đính (EX-LE2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "百虫窝",
        "py": "Bǎichóngwō",
        "hv": "BÁCH 虫 OA",
        "mean": "Huyệt Bách 虫 Oa (EX-LE3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "内膝眼",
        "py": "Nèixīyǎn",
        "hv": "NỘI 膝 NHÃN",
        "mean": "Huyệt Nội 膝 Nhãn (EX-LE4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "胆囊",
        "py": "Dǎnnáng",
        "hv": "ĐỞM 囊",
        "mean": "Huyệt Đởm 囊 (EX-LE6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "阑尾",
        "py": "Lánwěi",
        "hv": "阑 尾",
        "mean": "Huyệt 阑 尾 (EX-LE7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "内踝尖",
        "py": "Nèihuáijiān",
        "hv": "NỘI 踝 TIÊM",
        "mean": "Huyệt Nội 踝 Tiêm (EX-LE8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "外踝尖",
        "py": "Wàihuáijiān",
        "hv": "NGOẠI 踝 TIÊM",
        "mean": "Huyệt Ngoại 踝 Tiêm (EX-LE9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "八风",
        "py": "Bāfēng",
        "hv": "BÁT PHONG",
        "mean": "Huyệt Bát Phong (EX-LE10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "里内庭",
        "py": "Lǐnèitínɡ",
        "hv": "LÝ NỘI ĐÌNH",
        "mean": "Huyệt Lý Nội Đình (EXTRA-LINEITING) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "独阴",
        "py": "Dúyīn",
        "hv": "ĐỘC ÂM",
        "mean": "Huyệt Độc Âm (EX-LE11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      },
      {
        "zh": "气端",
        "py": "Qìduān",
        "hv": "KHÍ ĐOAN",
        "mean": "Huyệt Khí Đoan (EX-LE12) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
      }
    ],
    "sentences": [
      {
        "zh": "根据舌苔薄白、脉象浮紧，初步诊断为风寒感冒。",
        "py": "gēn jù shé tāi bó bái 、 mài xiàng fú jǐn ， chū bù zhěn duàn wéi fēng hán gǎn mào 。",
        "vi": "Căn cứ vào rêu lưỡi mỏng trắng, mạch tượng phù khẩn, sơ bộ chẩn đoán là cảm mạo phong hàn."
      },
      {
        "zh": "本方剂以补中益气、升阳举陷为主要功效。",
        "py": "běn fāng jì yǐ bǔ zhōng yì qì 、 shēng yáng jǔ xiàn wéi zhǔ yào gōng xiào 。",
        "vi": "Bài thuốc này lấy công năng bổ trung ích khí, thăng dương cử hãm làm tác dụng chính."
      }
    ],
    "case_study": {
      "title": "Bệnh án biện chứng Can khí uất kết (肝气郁结病案)",
      "zh": "患者女，三十五岁。自述近两月情绪抑郁，胸胁胀痛，善太息，食欲减退。舌淡红苔薄白，脉弦。辨证为肝气郁结，气机不畅。治法宜疏肝解郁，理气和胃。方选柴胡疏肝散加减，配合针灸太冲、期门穴，调畅气机。",
      "vi": "Bệnh nhân nữ, 35 tuổi. Tự khai 2 tháng nay tâm trạng u uất, đau tức ngực sườn, hay thở dài, ăn uống kém. Lưỡi nhạt rêu mỏng trắng, mạch huyền. Biện chứng: Can khí uất kết, khí cơ không thông. Phép trị: Sơ can giải uất, lý khí hòa vị. Phương thuốc: Sài hồ sơ can tán gia giảm, phối hợp châm huyệt Thái Xung, Kỳ Môn để điều hòa khí cơ."
    }
  },
  "business": {
    "id": "business",
    "icon": "💼",
    "title": "Kinh Doanh & Thương Mại (商务与外贸)",
    "subtitle": "Đàm phán hợp đồng, xuất nhập khẩu, thanh toán quốc tế & chào giá",
    "level": "HSK 4–6 / BCT (Business Chinese)",
    "vocab": [
      {
        "zh": "信用证",
        "py": "xìn yòng zhèng",
        "hv": "TÍN DỤNG CHỨNG",
        "mean": "Thư tín dụng ngân hàng (L/C - Letter of Credit)",
        "ex_zh": "我们通常要求买方通过不可撤销即期信用证付款。",
        "ex_vi": "Chúng tôi thường yêu cầu bên mua thanh toán bằng thư tín dụng không thể hủy ngang trả ngay."
      },
      {
        "zh": "不可抗力",
        "py": "bù kě kàng lì",
        "hv": "BẤT KHẢ KHÁNG LỰC",
        "mean": "Điều khoản sự kiện bất khả kháng (Force Majeure)",
        "ex_zh": "若因不可抗力导致交货延迟，双方均免于违约赔偿。",
        "ex_vi": "Nếu chậm trễ giao hàng do sự kiện bất khả kháng, đôi bên đều được miễn trừ bồi thường vi phạm hợp đồng."
      },
      {
        "zh": "报关清关",
        "py": "bào guān qīng guān",
        "hv": "BÁO QUAN THANH QUAN",
        "mean": "Thủ tục khai báo hải quan và thông quan hàng hóa",
        "ex_zh": "货代公司将负责本批集装箱在目的港的报关清关手续。",
        "ex_vi": "Công ty logistics sẽ chịu trách nhiệm thủ tục khai báo và thông quan cho lô container này tại cảng đến."
      },
      {
        "zh": "离岸价格",
        "py": "lí àn jià gé",
        "hv": "LY NGẠN GIÁ CÁCH",
        "mean": "Giá FOB (Free on Board - giao hàng lên tàu)",
        "ex_zh": "我方报价以青岛港离岸价格为基准计算。",
        "ex_vi": "Báo giá của bên tôi được tính toán dựa trên giá FOB tại cảng Thanh Đảo."
      },
      {
        "zh": "到岸价格",
        "py": "dào àn jià gé",
        "hv": "ĐÁO NGẠN GIÁ CÁCH",
        "mean": "Giá CIF (Cost, Insurance and Freight)",
        "ex_zh": "如果按到岸价格成交，海运保险费将由卖方承担。",
        "ex_vi": "Nếu ký kết theo giá CIF, phí bảo hiểm hàng hải sẽ do bên bán chi trả."
      },
      {
        "zh": "违约责任",
        "py": "wéi yuē zé rèn",
        "hv": "VI ƯỚC TRÁCH NHIỆM",
        "mean": "Trách nhiệm vi phạm hợp đồng và nghĩa vụ bồi thường",
        "ex_zh": "合同第六条明确规定了单方违约时的赔偿金比例。",
        "ex_vi": "Điều 6 của hợp đồng quy định rõ ràng tỷ lệ bồi thường khi một bên đơn phương vi phạm hợp đồng."
      },
      {
        "zh": "询价还盘",
        "py": "xún jià huán pán",
        "hv": "TUẦN GIÁ HOÀN BÀN",
        "mean": "Hỏi giá và trả giá ngược lại (Inquiry and Counter-offer)",
        "ex_zh": "经过三轮询价与还盘，双方终于就单价达成了一致。",
        "ex_vi": "Sau 3 vòng hỏi giá và trả giá qua lại, hai bên cuối cùng đã thống nhất được đơn giá."
      },
      {
        "zh": "装船提单",
        "py": "zhuāng chuán tí dān",
        "hv": "TRANG THUYỀN ĐỀ ĐƠN",
        "mean": "Vận đơn đường biển (Bill of Lading - B/L)",
        "ex_zh": "买方只有在向银行结清全款后方可换取正本装船提单。",
        "ex_vi": "Bên mua chỉ sau khi thanh toán toàn bộ tiền cho ngân hàng mới có thể nhận vận đơn gốc."
      },
      {
        "zh": "国际贸易",
        "py": "guó jì mào yì",
        "hv": "QUỐC TẾ MẬU DỊCH",
        "mean": "Hoạt động giao thương mua bán hàng hóa và dịch vụ giữa các quốc gia"
      },
      {
        "zh": "货物索赔",
        "py": "huò wù suǒ péi",
        "hv": "HÓA VẬT SÁCH BỒI",
        "mean": "Yêu cầu bồi thường bảo hiểm hoặc bồi thường thiệt hại hàng hóa hư hỏng"
      },
      {
        "zh": "汇率波动",
        "py": "huì lǜ bō dòng",
        "hv": "HỐI SUẤT BA ĐỘNG",
        "mean": "Sự dao động tăng giảm giá trị tỷ giá tiền tệ trên thị trường ngoại hối"
      },
      {
        "zh": "信用担保",
        "py": "xìn yòng dān bǎo",
        "hv": "TÍN DỤNG ĐAM BẢO",
        "mean": "Bảo lãnh tài chính hoặc bảo lãnh thanh toán tín dụng ngân hàng"
      },
      {
        "zh": "财务报表",
        "py": "cái wù bào biǎo",
        "hv": "TÀI VỤ BÁO BIỂU",
        "mean": "Báo cáo tổng kết tình hình tài chính của doanh nghiệp"
      },
      {
        "zh": "资产负债",
        "py": "zī chǎn fù zhài",
        "hv": "TƯ NGUYÊN PHỤ TRÁI",
        "mean": "Bảng cân đối kế toán giữa tài sản hiện có và các khoản nợ phải trả"
      },
      {
        "zh": "抵押贷款",
        "py": "dǐ yā dài kuǎn",
        "hv": "ĐỂ ÁP ĐẢI KHOẢN",
        "mean": "Khoản vay ngân hàng có tài sản thế chấp bảo đảm"
      },
      {
        "zh": "关税税率",
        "py": "guān shuì shuì lǜ",
        "hv": "QUAN THUẾ THUẾ SUẤT",
        "mean": "Mức thuế suất nhập khẩu đánh vào hàng hóa qua biên giới"
      },
      {
        "zh": "保税仓库",
        "py": "bǎo shuì cāng kù",
        "hv": "BẢO THUẾ THƯƠNG KHỐ",
        "mean": "Kho ngoại quan lưu giữ hàng hóa chưa phải nộp thuế nhập khẩu"
      },
      {
        "zh": "原产地证",
        "py": "yuán chǎn dì zhèng",
        "hv": "NGUYÊN SẢN ĐỊA CHỨNG",
        "mean": "Chứng nhận xuất xứ hàng hóa (C/O - Certificate of Origin)"
      },
      {
        "zh": "商业发票",
        "py": "shāng yè fā piào",
        "hv": "THƯƠNG NGHIỆP PHÁT PHIẾU",
        "mean": "Hóa đơn thương mại quốc tế (Commercial Invoice)"
      },
      {
        "zh": "装箱单据",
        "py": "zhuāng xiāng dān jù",
        "hv": "TRANG TƯƠNG ĐƠN CỨ",
        "mean": "Bảng kê chi tiết quy cách đóng gói hàng hóa (Packing List)"
      },
      {
        "zh": "滞期罚款",
        "py": "zhì qī fá kuǎn",
        "hv": "TRỆ KỲ PHẠT KHOẢN",
        "mean": "Phí phạt lưu container hoặc phạt dỡ hàng quá hạn (Demurrage)"
      },
      {
        "zh": "承兑汇票",
        "py": "chéng duì huì piào",
        "hv": "THỪA ĐOÁI HỐI PHIẾU",
        "mean": "Hối phiếu đã được ngân hàng hoặc người thụ hưởng ký chấp nhận"
      },
      {
        "zh": "投资回报",
        "py": "tóu zī huí bào",
        "hv": "ĐẦU TƯ HỒI BÁO",
        "mean": "Tỷ suất hoàn vốn đầu tư (ROI - Return on Investment)"
      },
      {
        "zh": "Human Resource Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Nguồn Nhân lực (HRM) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "human resource management",
        "py": "",
        "hv": "",
        "mean": "quản trị nguồn nhân lực (HRM) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "HRM",
        "py": "",
        "hv": "",
        "mean": "Quản trị nguồn nhân lực (HRM) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Strategic Human Resource Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Nguồn Nhân lực Chiến lược (SHRM) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "strategic human resource management",
        "py": "",
        "hv": "",
        "mean": "quản trị nguồn nhân lực chiến lược (SHRM) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Management Process",
        "py": "",
        "hv": "",
        "mean": "Quy trình Quản trị (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "management process",
        "py": "",
        "hv": "",
        "mean": "quy trình quản trị (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Planning",
        "py": "",
        "hv": "",
        "mean": "Hoạch định (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Organizing",
        "py": "",
        "hv": "",
        "mean": "Tổ chức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Staffing",
        "py": "",
        "hv": "",
        "mean": "Định biên & Bố trí Nhân sự (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Leading",
        "py": "",
        "hv": "",
        "mean": "Lãnh đạo (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Controlling",
        "py": "",
        "hv": "",
        "mean": "Kiểm soát (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Analysis",
        "py": "",
        "hv": "",
        "mean": "Phân tích Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "job analysis",
        "py": "",
        "hv": "",
        "mean": "phân tích công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Description",
        "py": "",
        "hv": "",
        "mean": "Bản Mô tả Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "job description",
        "py": "",
        "hv": "",
        "mean": "bản mô tả công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Specification",
        "py": "",
        "hv": "",
        "mean": "Bản Tiêu chuẩn Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "job specification",
        "py": "",
        "hv": "",
        "mean": "bản tiêu chuẩn công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Competency-Based Job Analysis",
        "py": "",
        "hv": "",
        "mean": "Phân tích Công việc Dựa trên Năng lực (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Talent Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Nhân tài (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "talent management",
        "py": "",
        "hv": "",
        "mean": "quản trị nhân tài (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Personnel Planning and Forecasting",
        "py": "",
        "hv": "",
        "mean": "Hoạch định và Dự báo Nhân sự (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Employee Recruiting",
        "py": "",
        "hv": "",
        "mean": "Tuyển mộ Nhân viên (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "recruiting",
        "py": "",
        "hv": "",
        "mean": "tuyển mộ (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "recruitment",
        "py": "",
        "hv": "",
        "mean": "tuyển dụng & chiêu mộ (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Employee Selection",
        "py": "",
        "hv": "",
        "mean": "Tuyển chọn Nhân viên (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "selection",
        "py": "",
        "hv": "",
        "mean": "tuyển chọn (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Structured Interview",
        "py": "",
        "hv": "",
        "mean": "Phỏng vấn Có cấu trúc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "unstructured interview",
        "py": "",
        "hv": "",
        "mean": "phỏng vấn phi cấu trúc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Behavioral Interview",
        "py": "",
        "hv": "",
        "mean": "Phỏng vấn theo Hành vi (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Situational Interview",
        "py": "",
        "hv": "",
        "mean": "Phỏng vấn theo Tình huống (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Training and Development",
        "py": "",
        "hv": "",
        "mean": "Đào tạo và Phát triển (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "ADDIE Process",
        "py": "",
        "hv": "",
        "mean": "Quy trình ADDIE (Phân tích, Thiết kế, Phát triển, Triển khai, Đánh giá) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Performance Appraisal",
        "py": "",
        "hv": "",
        "mean": "Đánh giá Hiệu quả Công việc (Đánh giá Thành tích) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "performance appraisal",
        "py": "",
        "hv": "",
        "mean": "đánh giá hiệu quả công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Performance Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Hiệu quả Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "360-Degree Feedback",
        "py": "",
        "hv": "",
        "mean": "Phản hồi Đánh giá 360 độ (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Behaviorally Anchored Rating Scales",
        "py": "",
        "hv": "",
        "mean": "Thang đo Đánh giá Neo theo Hành vi (BARS) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "BARS",
        "py": "",
        "hv": "",
        "mean": "Thang đo đánh giá neo theo hành vi (BARS) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Management by Objectives",
        "py": "",
        "hv": "",
        "mean": "Quản trị theo Mục tiêu (MBO) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "MBO",
        "py": "",
        "hv": "",
        "mean": "Quản trị theo mục tiêu (MBO) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Compensation and Benefits",
        "py": "",
        "hv": "",
        "mean": "Tiền lương và Phúc lợi (C&B) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Evaluation",
        "py": "",
        "hv": "",
        "mean": "Đánh giá Giá trị Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Labor Relations",
        "py": "",
        "hv": "",
        "mean": "Quan hệ Lao động (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "labor relations",
        "py": "",
        "hv": "",
        "mean": "quan hệ lao động (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Collective Bargaining",
        "py": "",
        "hv": "",
        "mean": "Thương lượng Tập thể (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Employee Health and Safety",
        "py": "",
        "hv": "",
        "mean": "Sức khỏe và An toàn Lao động (EHS) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Equal Employment Opportunity",
        "py": "",
        "hv": "",
        "mean": "Bình đẳng Cơ hội Việc làm (EEO) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Organizational Behavior",
        "py": "",
        "hv": "",
        "mean": "Hành vi Tổ chức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "organizational behavior",
        "py": "",
        "hv": "",
        "mean": "hành vi tổ chức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "OB",
        "py": "",
        "hv": "",
        "mean": "Hành vi tổ chức (OB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Interpersonal Skills",
        "py": "",
        "hv": "",
        "mean": "Kỹ năng Giao tiếp & Tương tác Cá nhân (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "interpersonal skills",
        "py": "",
        "hv": "",
        "mean": "kỹ năng giao tiếp và tương tác cá nhân (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Systematic Study",
        "py": "",
        "hv": "",
        "mean": "Nghiên cứu có Hệ thống (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "systematic study",
        "py": "",
        "hv": "",
        "mean": "nghiên cứu có hệ thống (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Evidence-Based Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Dựa trên Bằng chứng (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "evidence-based management",
        "py": "",
        "hv": "",
        "mean": "quản trị dựa trên bằng chứng (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Intuition",
        "py": "",
        "hv": "",
        "mean": "Trực giác (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "intuition",
        "py": "",
        "hv": "",
        "mean": "trực giác (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Big Data",
        "py": "",
        "hv": "",
        "mean": "Dữ liệu Lớn (Big Data) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "big data",
        "py": "",
        "hv": "",
        "mean": "dữ liệu lớn (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Satisfaction",
        "py": "",
        "hv": "",
        "mean": "Sự Hài lòng với Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "job satisfaction",
        "py": "",
        "hv": "",
        "mean": "sự hài lòng với công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Job Involvement",
        "py": "",
        "hv": "",
        "mean": "Sự Tham gia vào Công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "job involvement",
        "py": "",
        "hv": "",
        "mean": "sự tham gia vào công việc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Organizational Commitment",
        "py": "",
        "hv": "",
        "mean": "Sự Cam kết với Tổ chức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "organizational commitment",
        "py": "",
        "hv": "",
        "mean": "sự cam kết với tổ chức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Psychological Empowerment",
        "py": "",
        "hv": "",
        "mean": "Trao quyền Tâm lý (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "psychological empowerment",
        "py": "",
        "hv": "",
        "mean": "trao quyền tâm lý (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Perceived Organizational Support",
        "py": "",
        "hv": "",
        "mean": "Cảm nhận Sự Hỗ trợ từ Tổ chức (POS) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "perceived organizational support",
        "py": "",
        "hv": "",
        "mean": "cảm nhận sự hỗ trợ từ tổ chức (POS) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Employee Engagement",
        "py": "",
        "hv": "",
        "mean": "Sự Gắn kết của Nhân viên (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "employee engagement",
        "py": "",
        "hv": "",
        "mean": "sự gắn kết của nhân viên (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Cognitive Dissonance",
        "py": "",
        "hv": "",
        "mean": "Sự Bất hòa Nhận thức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "cognitive dissonance",
        "py": "",
        "hv": "",
        "mean": "sự bất hòa nhận thức (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Organizational Citizenship Behavior",
        "py": "",
        "hv": "",
        "mean": "Hành vi Công dân trong Tổ chức (OCB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "organizational citizenship behavior",
        "py": "",
        "hv": "",
        "mean": "hành vi công dân trong tổ chức (OCB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "OCB",
        "py": "",
        "hv": "",
        "mean": "Hành vi công dân trong tổ chức (OCB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Counterproductive Work Behavior",
        "py": "",
        "hv": "",
        "mean": "Hành vi Tiêu cực Nơi Làm việc (CWB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "counterproductive work behavior",
        "py": "",
        "hv": "",
        "mean": "hành vi tiêu cực nơi làm việc (CWB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "CWB",
        "py": "",
        "hv": "",
        "mean": "Hành vi tiêu cực nơi làm việc (CWB) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Emotional Intelligence",
        "py": "",
        "hv": "",
        "mean": "Trí tuệ Cảm xúc (EI) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "emotional intelligence",
        "py": "",
        "hv": "",
        "mean": "trí tuệ cảm xúc (EI) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Big Five Model",
        "py": "",
        "hv": "",
        "mean": "Mô hình 5 Đặc điểm Nhân cách Lớn (Big Five) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Extraversion",
        "py": "",
        "hv": "",
        "mean": "Hướng ngoại (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Agreeableness",
        "py": "",
        "hv": "",
        "mean": "Hòa đồng (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Conscientiousness",
        "py": "",
        "hv": "",
        "mean": "Tận tâm (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Emotional Stability",
        "py": "",
        "hv": "",
        "mean": "Ổn định Cảm xúc (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Openness to Experience",
        "py": "",
        "hv": "",
        "mean": "Sẵn sàng Học hỏi & Trải nghiệm (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Core Self-Evaluation",
        "py": "",
        "hv": "",
        "mean": "Đánh giá Cốt lõi về Bản thân (CSE) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Self-Efficacy",
        "py": "",
        "hv": "",
        "mean": "Năng lực Tự nhận thức (Self-Efficacy) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Locus of Control",
        "py": "",
        "hv": "",
        "mean": "Điểm Kiểm soát (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Groupthink",
        "py": "",
        "hv": "",
        "mean": "Tư duy Tập thể (Groupthink) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Social Loafing",
        "py": "",
        "hv": "",
        "mean": "Sự Lười biếng Xã hội (Social Loafing) (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Transformational Leadership",
        "py": "",
        "hv": "",
        "mean": "Lãnh đạo Chuyển đổi (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Transactional Leadership",
        "py": "",
        "hv": "",
        "mean": "Lãnh đạo Giao dịch (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Diversity Management",
        "py": "",
        "hv": "",
        "mean": "Quản trị Sự Đa dạng (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "diversity management",
        "py": "",
        "hv": "",
        "mean": "quản trị sự đa dạng (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "Stereotype Threat",
        "py": "",
        "hv": "",
        "mean": "Mối Đe dọa từ Định kiến (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "stereotype threat",
        "py": "",
        "hv": "",
        "mean": "mối đe dọa từ định kiến (Quản trị & Điều hành Doanh nghiệp)"
      },
      {
        "zh": "离岸价",
        "py": "lí àn jià",
        "hv": "LY NGẠN GIÁ",
        "mean": "Giá FOB (Free On Board - Giao hàng lên tàu)"
      },
      {
        "zh": "到岸价",
        "py": "dào àn jià",
        "hv": "ĐÁO NGẠN GIÁ",
        "mean": "Giá CIF (Cost, Insurance and Freight - Tiền hàng, bảo hiểm và cước phí)"
      },
      {
        "zh": "不可撤销信用证",
        "py": "bù kě chè xiāo xìn yòng zhèng",
        "hv": "BẤT KHẢ TRIỆT TIÊU TÍN DỤNG CHỨNG",
        "mean": "Thư tín dụng không thể hủy ngang (Irrevocable L/C)"
      },
      {
        "zh": "提单",
        "py": "tí dān",
        "hv": "ĐỀ ĐƠN",
        "mean": "Vận đơn đường biển (Bill of Lading - B/L)"
      },
      {
        "zh": "形式发票",
        "py": "xíng shì fā piào",
        "hv": "HÌNH THỨC PHÁT PHIẾU",
        "mean": "Hóa đơn chiếu lệ (Proforma Invoice)"
      },
      {
        "zh": "索赔期限",
        "py": "suǒ péi qī xiàn",
        "hv": "SÁCH BỒI KỲ HẠN",
        "mean": "Thời hạn khiếu nại bồi thường hợp đồng ngoại thương"
      },
      {
        "zh": "仲裁条款",
        "py": "zhòng cái tiáo kuǎn",
        "hv": "TRỌNG TÀI ĐIỀU KHOẢN",
        "mean": "Điều khoản trọng tài giải quyết tranh chấp thương mại quốc tế"
      },
      {
        "zh": "电汇",
        "py": "diàn huì",
        "hv": "ĐIỆN HỐI",
        "mean": "Chuyển tiền bằng điện tín (Telegraphic Transfer - T/T)"
      },
      {
        "zh": "付款交单",
        "py": "fù kuǎn jiāo dān",
        "hv": "PHÓ KHOẢN GIAO ĐƠN",
        "mean": "Thanh toán nhờ thu trả tiền trao chứng từ (D/P)"
      },
      {
        "zh": "承兑交单",
        "py": "chéng duì jiāo dān",
        "hv": "THỪA ĐOÁI GIAO ĐƠN",
        "mean": "Thanh toán nhờ thu chấp nhận trả tiền trao chứng từ (D/A)"
      },
      {
        "zh": "清关手续",
        "py": "qīng guān shǒu xù",
        "hv": "THANH QUAN THỦ TỤC",
        "mean": "Thủ tục thông quan hàng hóa xuất nhập khẩu"
      },
      {
        "zh": "报关单",
        "py": "bào guān dān",
        "hv": "BÁO QUAN ĐƠN",
        "mean": "Tờ khai hải quan hàng hóa"
      },
      {
        "zh": "退税率",
        "py": "tuì shuì lǜ",
        "hv": "THOÁI THUẾ SUẤT",
        "mean": "Tỷ lệ hoàn thuế giá trị gia tăng hàng xuất khẩu"
      },
      {
        "zh": "外汇管制",
        "py": "wài huì guǎn zhì",
        "hv": "NGOẠI HỐI QUẢN CHẾ",
        "mean": "Chính sách kiểm soát và quản lý ngoại hối của nhà nước"
      },
      {
        "zh": "保函",
        "py": "bǎo hán",
        "hv": "BẢO HÀM",
        "mean": "Thư bảo lãnh ngân hàng (Letter of Guarantee - L/G)"
      },
      {
        "zh": "违约金",
        "py": "wéi yuē jīn",
        "hv": "VI ƯỚC KIM",
        "mean": "Tiền phạt vi phạm hợp đồng"
      },
      {
        "zh": "定金",
        "py": "dìng jīn",
        "hv": "ĐỊNH KIM",
        "mean": "Tiền đặt cọc bảo đảm thực hiện hợp đồng"
      },
      {
        "zh": "预付款",
        "py": "yù fù kuǎn",
        "hv": "DỰ PHÓ KHOẢN",
        "mean": "Khoản tiền thanh toán tạm ứng trước"
      },
      {
        "zh": "尾款",
        "py": "wěi kuǎn",
        "hv": "VĨ KHOẢN",
        "mean": "Khoản tiền thanh toán đợt cuối cùng"
      },
      {
        "zh": "总代理",
        "py": "zǒng dài lǐ",
        "hv": "TỔNG ĐẠI LÝ",
        "mean": "Đại lý độc quyền hoặc tổng đại lý phân phối"
      },
      {
        "zh": "招投标",
        "py": "zhāo tóu biāo",
        "hv": "CHIÊU ĐẦU TIÊU",
        "mean": "Hoạt động mời thầu và đấu thầu dự án"
      },
      {
        "zh": "标书",
        "py": "biāo shū",
        "hv": "TIÊU THƯ",
        "mean": "Hồ sơ mời thầu hoặc hồ sơ dự thầu"
      },
      {
        "zh": "中标",
        "py": "zhòng biāo",
        "hv": "TRÚNG TIÊU",
        "mean": "Trúng thầu dự án hoặc gói thầu"
      },
      {
        "zh": "现金流量表",
        "py": "xiàn jīn liú liàng biǎo",
        "hv": "HIỆN KIM LƯU LƯỢNG BIỂU",
        "mean": "Báo cáo lưu chuyển tiền tệ (Cash Flow Statement)"
      },
      {
        "zh": "利润表",
        "py": "lì rùn biǎo",
        "hv": "LỢI NHUẬN BIỂU",
        "mean": "Báo cáo kết quả hoạt động kinh doanh (Income Statement)"
      },
      {
        "zh": "资产负债表",
        "py": "zī chǎn fù zhài biǎo",
        "hv": "TƯ NGUYÊN PHỤ TRÁI BIỂU",
        "mean": "Bảng cân đối kế toán tài sản và công nợ"
      }
    ],
    "sentences": [
      {
        "zh": "若贵方订购量超过一万件，我方愿给予百分之五的价格折扣。",
        "py": "ruò guì fāng dìng gòu liàng chāo guò yī wàn jiàn ， wǒ fāng yuàn jǐ yǔ bǎi fēn zhī wǔ de jià gé zhé kòu 。",
        "vi": "Nếu quý công ty đặt hàng trên 10.000 kiện, bên tôi sẵn sàng chiết khấu 5% giá bán."
      },
      {
        "zh": "为保证双方资金安全，建议首批订单采用电汇定金加信用证模式。",
        "py": "wèi bǎo zhèng shuāng fāng zī jīn ān quán ， jiàn yì shǒu pī dìng dān cǎi yòng diàn huì dìng jīn jiā xìn yòng zhèng mó shì 。",
        "vi": "Để đảm bảo an toàn vốn cho hai bên, đề xuất đơn hàng đầu tiên áp dụng phương thức cọc T/T kết hợp L/C."
      }
    ],
    "case_study": {
      "title": "Đàm phán điều khoản thanh toán đơn hàng xuất khẩu",
      "zh": "买方认为当前市场资金流动性紧张，希望采用交单付款（D/P）结算。然而卖方代表指出，定制产品转售难度大，为防范汇率波动与拒收风险，坚持要求预付百分之三十定金，余款凭提单副本结清。经过友好磋商，双方最终同意预付百分之二十，尾款开立即期信用证，达成了互惠共赢的妥协方案。",
      "vi": "Bên mua cho rằng thị trường hiện nay thanh khoản vốn căng thẳng nên mong muốn thanh toán nhờ thu trả tiền đổi chứng từ (D/P). Tuy nhiên đại diện bên bán chỉ ra rằng hàng đặt may theo yêu cầu rất khó bán lại, để phòng ngừa biến động tỷ giá và rủi ro từ chối nhận hàng, bên bán kiên quyết yêu cầu đặt cọc 30%, phần còn lại thanh toán theo bản sao vận đơn. Qua trao đổi thiện chí, hai bên thống nhất cọc 20%, số còn lại mở L/C trả ngay."
    }
  },
  "tech": {
    "id": "tech",
    "icon": "💻",
    "title": "Công Nghệ & AI (科技与人工智能)",
    "subtitle": "Phần mềm, thuật toán, điện toán đám mây, kiến trúc hệ thống & AI",
    "level": "HSK 5–9 (Tech & Innovation)",
    "vocab": [
      {
        "zh": "大语言模型",
        "py": "dà yǔ yán mó xíng",
        "hv": "ĐẠI NGỮ NGÔN MÔ HÌNH",
        "mean": "Mô hình ngôn ngữ lớn (LLM - Large Language Model)",
        "ex_zh": "大语言模型在自然语言处理与多轮对话中展现出卓越能力。",
        "ex_vi": "Mô hình ngôn ngữ lớn thể hiện năng lực vượt trội trong xử lý ngôn ngữ tự nhiên và đối thoại nhiều lượt."
      },
      {
        "zh": "算法优化",
        "py": "suàn fǎ yōu huà",
        "hv": "TOÁN PHÁP ƯU HÓA",
        "mean": "Tối ưu hóa giải thuật / thuật toán",
        "ex_zh": "通过对搜索算法的优化，系统响应时间缩短了百分之四十。",
        "ex_vi": "Nhờ tối ưu hóa thuật toán tìm kiếm, thời gian phản hồi của hệ thống đã rút ngắn 40%."
      },
      {
        "zh": "云计算",
        "py": "yún suàn suàn",
        "hv": "VÂN TOÁN TOÁN",
        "mean": "Điện toán đám mây (Cloud Computing)",
        "ex_zh": "企业将核心业务迁移到云计算平台以降低运维成本。",
        "ex_vi": "Doanh nghiệp chuyển dịch các nghiệp vụ cốt lõi lên nền tảng điện toán đám mây để giảm chi phí vận hành."
      },
      {
        "zh": "分布式系统",
        "py": "fēn bù shì xì tǒng",
        "hv": "PHÂN BỐ THỨC HỆ THỐNG",
        "mean": "Hệ thống phân tán có độ chịu lỗi cao (Distributed System)",
        "ex_zh": "高可用架构通常基于分布式系统设计以消除单点故障。",
        "ex_vi": "Kiến trúc sẵn sàng cao thường được thiết kế dựa trên hệ thống phân tán để loại bỏ điểm lỗi đơn nhất."
      },
      {
        "zh": "接口调用",
        "py": "jiē kǒu diào yòng",
        "hv": "TIẾP KHẨU ĐIỀU DỤNG",
        "mean": "Gọi giao diện lập trình ứng dụng (API Call)",
        "ex_zh": "客户端通过安全令牌对后端接口进行高并发调用。",
        "ex_vi": "Phía client sử dụng token bảo mật để thực hiện các lượt gọi API đồng thời cao tới máy chủ phụ trợ."
      },
      {
        "zh": "数据清洗",
        "py": "shù jù qīng xǐ",
        "hv": "SỐ CỨ DThanh TẨY",
        "mean": "Làm sạch và tiền xử lý dữ liệu trước khi huấn luyện (Data Cleaning)",
        "ex_zh": "数据清洗是构建高质量机器学习数据集的关键步骤。",
        "ex_vi": "Làm sạch dữ liệu là bước then chốt để xây dựng tập dữ liệu máy học chất lượng cao."
      },
      {
        "zh": "容灾备份",
        "py": "róng zāi bèi fèn",
        "hv": "DUNG TAI BỊ PHẦN",
        "mean": "Sao lưu dự phòng và phục hồi sau thảm họa (Disaster Recovery)",
        "ex_zh": "多区域异地容灾备份确保了金融级数据的绝对安全性。",
        "ex_vi": "Cơ chế sao lưu phục hồi thảm họa đa khu vực địa lý đảm bảo tính an toàn tuyệt đối cho dữ liệu cấp tài chính."
      },
      {
        "zh": "端到端加密",
        "py": "duān dào duān jiā mì",
        "hv": "ĐOAN ĐÁO ĐOAN GIA MẬT",
        "mean": "Mã hóa đầu cuối bảo mật thông tin (End-to-End Encryption)",
        "ex_zh": "即时通讯软件必须采用端到端加密保护用户隐私。",
        "ex_vi": "Phần mềm nhắn tin tức thời bắt buộc phải áp dụng mã hóa đầu cuối để bảo vệ quyền riêng tư người dùng."
      },
      {
        "zh": "神经网络",
        "py": "shén jīng wǎng luò",
        "hv": "THẦN KINH VÕNG LẠC",
        "mean": "Mạng nơ-ron nhân tạo mô phỏng hoạt động của não bộ trong học sâu"
      },
      {
        "zh": "深度学习",
        "py": "shēn dù xué xí",
        "hv": "THÂM ĐỘ HỌC TẬP",
        "mean": "Phương pháp học sâu sử dụng nhiều lớp nơ-ron để trích xuất đặc trưng"
      },
      {
        "zh": "强化学习",
        "py": "qiáng huà xué xí",
        "hv": "CƯỜNG HÓA HỌC TẬP",
        "mean": "Học tăng cường dựa trên phần thưởng và phạt trong trí tuệ nhân tạo"
      },
      {
        "zh": "向量数据库",
        "py": "xiàng liàng shù jù kù",
        "hv": "HƯỚNG LƯỢNG SỐ CỨ KHỐ",
        "mean": "Cơ sở dữ liệu lưu trữ và truy vấn tương đồng vector (Vector DB)"
      },
      {
        "zh": "知识图谱",
        "py": "zhī shi tú pǔ",
        "hv": "TRI THỨC ĐỒ PHỔ",
        "mean": "Đồ thị tri thức liên kết các thực thể và mối quan hệ ngữ nghĩa"
      },
      {
        "zh": "参数微调",
        "py": "cān shù wēi tiáo",
        "hv": "THAM SỐ VI ĐIỀU",
        "mean": "Tinh chỉnh tham số mô hình nền tảng cho nhiệm vụ chuyên biệt (Fine-tuning)"
      },
      {
        "zh": "容器编排",
        "py": "róng qì biān pái",
        "hv": "DUNG KHÍ BIÊN BÀI",
        "mean": "Hệ thống tự động quản lý và điều phối container (Kubernetes / Docker)"
      },
      {
        "zh": "负载均衡",
        "py": "fù zài jūn héng",
        "hv": "PHỤ TẢI QUÂN HÀNH",
        "mean": "Cân bằng tải phân chia lưu lượng truy cập tới nhiều máy chủ"
      },
      {
        "zh": "消息队列",
        "py": "xiāo xi duì liè",
        "hv": "TIÊU TỨC ĐỐI LIỆT",
        "mean": "Hàng đợi thông điệp trung gian giao tiếp không đồng bộ (Kafka / RabbitMQ)"
      },
      {
        "zh": "单元测试",
        "py": "dān yuán cè shì",
        "hv": "ĐƠN NGUYÊN TRẮC THÍ",
        "mean": "Kiểm thử từng đơn vị hàm hoặc lớp độc lập trong mã nguồn"
      },
      {
        "zh": "持续集成",
        "py": "chí xù jí chéng",
        "hv": "TRÌ TỤC TẬP THÀNH",
        "mean": "Quy trình tích hợp mã nguồn tự động liên tục (CI/CD)"
      },
      {
        "zh": "零信任架构",
        "py": "líng xìn rèn jià gòu",
        "hv": "LINH TÍN NHIỆM GIÁ CẤU",
        "mean": "Kiến trúc bảo mật an ninh mạng không mặc định tin cậy bất kỳ ai"
      },
      {
        "zh": "检索增强生成",
        "py": "jiǎn suǒ zēng qiáng shēng chéng",
        "hv": "KIỂM TỎA TĂNG CƯỜNG SINH THÀNH",
        "mean": "Kỹ thuật RAG (Retrieval-Augmented Generation)"
      },
      {
        "zh": "嵌入向量",
        "py": "qiān rù xiàng liàng",
        "hv": "KHẢM NHẬP HƯỚNG LƯỢNG",
        "mean": "Vector nhúng biểu diễn ngữ nghĩa (Embedding vector)"
      },
      {
        "zh": "提示词工程",
        "py": "tí shì cí gōng chéng",
        "hv": "ĐỀ THỊ TỪ CÔNG TRÌNH",
        "mean": "Kỹ nghệ câu lệnh cho mô hình AI (Prompt Engineering)"
      },
      {
        "zh": "微服务架构",
        "py": "wēi fú wù jià gòu",
        "hv": "VI PHỤC VỤ GIÁ CẤU",
        "mean": "Kiến trúc vi dịch vụ (Microservices Architecture)"
      },
      {
        "zh": "高并发",
        "py": "gāo bīng fā",
        "hv": "CAO TINH PHÁT",
        "mean": "Xử lý đồng thời khối lượng truy cập cực lớn (High Concurrency)"
      },
      {
        "zh": "边缘计算",
        "py": "biān yuán jì suàn",
        "hv": "BIÊN DUYÊN KẾ TOÁN",
        "mean": "Điện toán biên xử lý dữ liệu tại nguồn (Edge Computing)"
      },
      {
        "zh": "物联网",
        "py": "wù lián wǎng",
        "hv": "VẬT LIÊN VÕNG",
        "mean": "Mạng lưới vạn vật kết nối Internet (IoT - Internet of Things)"
      },
      {
        "zh": "自动化运维",
        "py": "zì dòng huà yùn wéi",
        "hv": "TỰ ĐỘNG HÓA VẬN DUY",
        "mean": "Vận hành và bảo trì hệ thống tự động (DevOps / AIOps)"
      },
      {
        "zh": "数据库索引",
        "py": "shù jù kù suǒ yǐn",
        "hv": "SỐ CỨ KHỐ TỎA DẪN",
        "mean": "Chỉ mục cơ sở dữ liệu tăng tốc độ truy vấn (Database Index)"
      },
      {
        "zh": "分库分表",
        "py": "fēn kù fēn biǎo",
        "hv": "PHÂN KHỐ PHÂN BIỂU",
        "mean": "Kỹ thuật chia nhỏ database và bảng dữ liệu (Sharding)"
      },
      {
        "zh": "读写分离",
        "py": "dú xiě fēn lí",
        "hv": "ĐỘC TẢ PHÂN LY",
        "mean": "Tách biệt truy vấn đọc và ghi máy chủ DB (Read-Write Splitting)"
      },
      {
        "zh": "公钥私钥",
        "py": "gōng yào sī yào",
        "hv": "CÔNG DƯỢC TƯ DƯỢC",
        "mean": "Cặp khóa công khai và khóa bí mật mã hóa bất đối xứng"
      },
      {
        "zh": "防火墙",
        "py": "fáng huǒ qiáng",
        "hv": "PHÒNG HỎA TƯỜNG",
        "mean": "Tường lửa bảo mật ngăn chặn xâm nhập mạng trái phép"
      },
      {
        "zh": "渗透测试",
        "py": "shèn tòu cè shì",
        "hv": "SẨM THẤU TRẮC THÍ",
        "mean": "Kiểm thử thâm nhập đánh giá an ninh mạng (Penetration Testing)"
      },
      {
        "zh": "代码重构",
        "py": "dài mǎ chóng gòu",
        "hv": "ĐẠI MÃ TRỌNG CẤU",
        "mean": "Tái cấu trúc mã nguồn tối ưu mà không đổi tính năng (Refactoring)"
      },
      {
        "zh": "版本控制",
        "py": "bǎn běn guǎn zhì",
        "hv": "BẢN BẢN QUẢN CHẾ",
        "mean": "Hệ thống quản lý phiên bản mã nguồn (Git / Version Control)"
      },
      {
        "zh": "拉取请求",
        "py": "lā qǔ qǐng qiú",
        "hv": "LẠP THỦ THỈNH CẦU",
        "mean": "Yêu cầu hợp nhất mã nguồn (Pull Request - PR)"
      },
      {
        "zh": "开源社区",
        "py": "kāi yuán shè qū",
        "hv": "KHAI NGUYÊN XÃ KHU",
        "mean": "Cộng đồng phần mềm mã nguồn mở (Open-source Community)"
      },
      {
        "zh": "机器学习",
        "py": "jī qì xué xí",
        "hv": "CƠ KHÍ HỌC TẬP",
        "mean": "Học máy phân tích dữ liệu tự động học hỏi (Machine Learning)"
      },
      {
        "zh": "计算机视觉",
        "py": "jì suàn jī shì jué",
        "hv": "KẾ TOÁN CƠ THỊ GIÁC",
        "mean": "Thị giác máy tính nhận diện ảnh và video (Computer Vision)"
      },
      {
        "zh": "自然语言处理",
        "py": "zì rán yǔ yán chǔ lǐ",
        "hv": "TỰ NHIÊN NGỮ NGÔN XỬ LÝ",
        "mean": "Xử lý ngôn ngữ tự nhiên trong AI (NLP)"
      },
      {
        "zh": "智能合约",
        "py": "zhì néng hé yuē",
        "hv": "TRÍ NĂNG HỢP ƯỚC",
        "mean": "Hợp đồng thông minh tự động thực thi trên blockchain"
      },
      {
        "zh": "敏捷开发",
        "py": "mǐn jié kāi fā",
        "hv": "MẪN TIỆP KHAI PHÁT",
        "mean": "Phương pháp phát triển phần mềm linh hoạt (Agile / Scrum)"
      },
      {
        "zh": "产品经理",
        "py": "chǎn pǐn jīng lǐ",
        "hv": "SẢN PHẨM KINH LÝ",
        "mean": "Giám đốc / Quản lý sản phẩm công nghệ (Product Manager - PM)"
      },
      {
        "zh": "全栈工程师",
        "py": "quán zhàn gōng chéng shī",
        "hv": "TOÀN SẠN CÔNG TRÌNH SƯ",
        "mean": "Kỹ sư phát triển toàn diện frontend và backend (Fullstack Engineer)"
      },
      {
        "zh": "开源代码",
        "py": "kāi yuán dài mǎ",
        "hv": "KHAI NGUYÊN ĐẠI MÃ",
        "mean": "Mã nguồn mở công khai cho cộng đồng phát triển"
      },
      {
        "zh": "闭源软件",
        "py": "bì yuán ruǎn jiàn",
        "hv": "BẾ NGUYÊN NHUYỄN KIỆN",
        "mean": "Phần mềm mã nguồn đóng thương mại độc quyền"
      },
      {
        "zh": "动态规划",
        "py": "dòng tài guī huà",
        "hv": "ĐỘNG THÁI QUY HOẠCH",
        "mean": "Quy hoạch động trong thuật toán tối ưu hóa"
      },
      {
        "zh": "贪心算法",
        "py": "tān xīn suàn fǎ",
        "hv": "THAM TÂM TOÁN PHÁP",
        "mean": "Thuật toán tham lam giải quyết bài toán tối ưu cục bộ"
      },
      {
        "zh": "时间复杂度",
        "py": "shí jiān fù zá dù",
        "hv": "THỜI GIAN PHỨC TẠP ĐỘ",
        "mean": "Độ phức tạp thời gian của giải thuật (Time Complexity O(n))"
      },
      {
        "zh": "空间复杂度",
        "py": "kōng jiān fù zá dù",
        "hv": "KHÔNG GIAN PHỨC TẠP ĐỘ",
        "mean": "Độ phức tạp không gian bộ nhớ của giải thuật"
      },
      {
        "zh": "图神经网络",
        "py": "tú shén jīng wǎng luò",
        "hv": "ĐỒ THẦN KINH VÕNG LẠC",
        "mean": "Mạng nơ-ron đồ thị (GNN - Graph Neural Network)"
      },
      {
        "zh": "循环神经网络",
        "py": "xún huán shén jīng wǎng luò",
        "hv": "TUẦN HOÀN THẦN KINH VÕNG LẠC",
        "mean": "Mạng nơ-ron hồi quy xử lý chuỗi (RNN)"
      },
      {
        "zh": "卷积神经网络",
        "py": "juǎn jī shén jīng wǎng luò",
        "hv": "QUYỂN TÍCH THẦN KINH VÕNG LẠC",
        "mean": "Mạng nơ-ron tích chập xử lý thị giác máy tính (CNN)"
      },
      {
        "zh": "自注意力机制",
        "py": "zì zhù yì lì jī zhì",
        "hv": "TỰ CHÚ Ý LỰC CƠ CHẾ",
        "mean": "Cơ chế tự chú ý cốt lõi của kiến trúc Transformer (Self-Attention)"
      },
      {
        "zh": "多头注意力",
        "py": "duō tóu zhù yì lì",
        "hv": "ĐA ĐẦU CHÚ Ý LỰC",
        "mean": "Cơ chế chú ý đa đầu trong mô hình Transformer (Multi-head Attention)"
      },
      {
        "zh": "位置编码",
        "py": "wèi zhì biān mǎ",
        "hv": "VỊ TRÍ BIÊN MÃ",
        "mean": "Mã hóa vị trí từ trong câu cho Transformer (Positional Encoding)"
      },
      {
        "zh": "分词器",
        "py": "fēn cí qì",
        "hv": "PHÂN TỪ KHÍ",
        "mean": "Bộ tách từ và token hóa văn bản (Tokenizer - BPE/WordPiece)"
      },
      {
        "zh": "词嵌入",
        "py": "cí qiān rù",
        "hv": "TỪ KHẢM NHẬP",
        "mean": "Biểu diễn từ ngữ dưới dạng không gian vector số (Word Embedding)"
      },
      {
        "zh": "幻觉现象",
        "py": "huàn jué xiàn xiàng",
        "hv": "ẢO GIÁC HIỆN TƯỢNG",
        "mean": "Hiện tượng mô hình ngôn ngữ lớn bịa đặt thông tin sai lệch (Hallucination)"
      },
      {
        "zh": "对齐技术",
        "py": "duì qí jì shù",
        "hv": "ĐỐI TỀ KỸ THUẬT",
        "mean": "Kỹ thuật căn chỉnh hành vi AI phù hợp với giá trị con người (AI Alignment - RLHF)"
      },
      {
        "zh": "提示词注入",
        "py": "tí shì cí zhù rù",
        "hv": "ĐỀ THỊ TỪ CHÚ NHẬP",
        "mean": "Tấn công tiêm nhiễm câu lệnh điều khiển hệ thống AI (Prompt Injection)"
      },
      {
        "zh": "量化压缩",
        "py": "liàng huà yā suō",
        "hv": "LƯỢNG HÓA ÁP SÚC",
        "mean": "Kỹ thuật lượng tử hóa nén mô hình AI (Quantization: INT8, INT4, GGUF)"
      },
      {
        "zh": "显存占用",
        "py": "xiǎn cún zhàn yòng",
        "hv": "HIỂN TỒN CHIẾM DỤNG",
        "mean": "Dung lượng bộ nhớ VRAM của card đồ họa GPU bị sử dụng"
      },
      {
        "zh": "算力集群",
        "py": "suàn lì jí qún",
        "hv": "TOÁN LỰC TẬP QUẦN",
        "mean": "Cụm siêu máy tính cung cấp năng lực tính toán AI (GPU Cluster)"
      },
      {
        "zh": "无服务器架构",
        "py": "wú fú wù qì jià gòu",
        "hv": "VÔ PHỤC VỤ KHÍ GIÁ CẤU",
        "mean": "Kiến trúc điện toán không máy chủ (Serverless / AWS Lambda)"
      },
      {
        "zh": "反向代理",
        "py": "fǎn xiàng dài lǐ",
        "hv": "PHẢN HƯỚNG ĐẠI LÝ",
        "mean": "Máy chủ ủy nhiệm ngược bảo vệ và điều hướng tải (Reverse Proxy - Nginx)"
      },
      {
        "zh": "网关",
        "py": "wǎng guān",
        "hv": "VÕNG QUAN",
        "mean": "Cổng giao tiếp kết nối các mạng và dịch vụ (API Gateway)"
      },
      {
        "zh": "服务发现",
        "py": "fú wù fā xiàn",
        "hv": "PHỤC VỤ PHÁT HIỆN",
        "mean": "Cơ chế tự động dò tìm vị trí các dịch vụ vi mô (Service Discovery)"
      },
      {
        "zh": "断路器",
        "py": "duàn lù qì",
        "hv": "ĐOẠN LỘ KHÍ",
        "mean": "Cơ chế ngắt mạch bảo vệ hệ thống khi dịch vụ lỗi (Circuit Breaker)"
      },
      {
        "zh": "分布式锁",
        "py": "fēn bù shì suǒ",
        "hv": "PHÂN BỐ THỨC TỎA",
        "mean": "Khóa đồng bộ tiến trình trên hệ thống máy chủ phân tán (Distributed Lock - Redis)"
      },
      {
        "zh": "悲观锁",
        "py": "bēi guān suǒ",
        "hv": "BI QUAN TỎA",
        "mean": "Khóa bi quan ngăn ngừa xung đột dữ liệu đa luồng (Pessimistic Lock)"
      },
      {
        "zh": "乐观锁",
        "py": "lè guān suǒ",
        "hv": "LẠC QUAN TỎA",
        "mean": "Khóa lạc quan kiểm tra phiên bản dữ liệu trước khi cập nhật (Optimistic Lock)"
      },
      {
        "zh": "死锁",
        "py": "sǐ suǒ",
        "hv": "TỬ TỎA",
        "mean": "Tình trạng tắc nghẽn khóa vĩnh viễn giữa các luồng xử lý (Deadlock)"
      },
      {
        "zh": "内存泄漏",
        "py": "nèi cún xiè lòu",
        "hv": "NỘI TỒN TIẾT LẬU",
        "mean": "Lỗi rò rỉ bộ nhớ RAM không được giải phóng (Memory Leak)"
      },
      {
        "zh": "垃圾回收",
        "py": "lā jī huí shōu",
        "hv": "LẠP CƠ HỒI THU",
        "mean": "Cơ chế tự động dọn dẹp và thu hồi bộ nhớ không dùng (Garbage Collection - GC)"
      },
      {
        "zh": "异步非阻塞",
        "py": "yì bù fēi zǔ sè",
        "hv": "DỊ BỘ PHI TRỞ TẮC",
        "mean": "Cơ chế xử lý bất đồng bộ không gây nghẽn luồng (Asynchronous Non-blocking I/O)"
      },
      {
        "zh": "单点故障",
        "py": "dān diǎn gù zhàng",
        "hv": "ĐƠN ĐIỂM CỐ CHƯỚNG",
        "mean": "Điểm lỗi đơn nhất có thể làm sập toàn bộ hệ thống (Single Point of Failure - SPOF)"
      },
      {
        "zh": "双活数据中心",
        "py": "shuāng huó shù jù zhōng xīn",
        "hv": "SONG HOẠT SỐ CỨ TRUNG TÂM",
        "mean": "Trung tâm dữ liệu hoạt động song song dự phòng thời gian thực (Active-Active DC)"
      },
      {
        "zh": "链路追踪",
        "py": "liàn lù zhuī zōng",
        "hv": "LIÊN LỘ TRUY TÔNG",
        "mean": "Theo dõi hành trình gọi dịch vụ phân tán (Distributed Tracing - Jaeger/OpenTelemetry)"
      },
      {
        "zh": "日志聚合",
        "py": "rì zhì jù hé",
        "hv": "NHẬT CHÍ TỤ HỢP",
        "mean": "Thu thập và tổng hợp nhật ký tập trung (Log Aggregation - ELK Stack)"
      },
      {
        "zh": "暗网",
        "py": "àn wǎng",
        "hv": "ÁM VÕNG",
        "mean": "Mạng ngầm ẩn danh không được chỉ mục (Dark Web)"
      },
      {
        "zh": "中间人攻击",
        "py": "zhōng jiān rén gōng jī",
        "hv": "TRUNG GIAN NHÂN CÔNG KÍCH",
        "mean": "Kiểu tấn công mạng chặn bắt dữ liệu giữa hai bên (Man-in-the-Middle Attack - MITM)"
      },
      {
        "zh": "拒绝服务攻击",
        "py": "jù jué fú wù gōng jī",
        "hv": "CỰ TUYỆT PHỤC VỤ CÔNG KÍCH",
        "mean": "Tấn công làm tê liệt dịch vụ bằng lưu lượng rác ồ ạt (DoS / DDoS)"
      },
      {
        "zh": "钓鱼邮件",
        "py": "diào yú yóu jiàn",
        "hv": "ĐIẾU NGƯ BƯU KIỆN",
        "mean": "Thư điện tử giả mạo lừa đảo đánh cắp mật khẩu (Phishing Email)"
      }
    ],
    "sentences": [
      {
        "zh": "为了提高模型在长上下文下的推理速度，工程团队引入了键值缓存机制。",
        "py": "wèi le tí gāo mó xíng zài cháng shàng xià wén xià de tuī lǐ sù dù ， gōng chéng tuán duì yǐn rù le jiàn zhí huǎn cún jī zhì 。",
        "vi": "Nhằm tăng tốc độ suy luận của mô hình trong ngữ cảnh dài, đội ngũ kỹ thuật đã đưa vào cơ chế lưu trữ KV-Cache."
      },
      {
        "zh": "微服务架构通过容器化编排实现了各功能模块的独立扩容与持续交付。",
        "py": "wēi fú wù jià gòu tōng guò róng qì huà biān pái shí xiàn le gè gōng néng mó kuài de dú lì kuò róng yǔ chí xù jiāo fù 。",
        "vi": "Kiến trúc microservices thông qua điều phối container hóa đã thực hiện việc mở rộng độc lập và chuyển giao liên tục cho từng phân hệ chức năng."
      }
    ],
    "case_study": {
      "title": "Kiến trúc triển khai Agent tự trị và RAG cục bộ",
      "zh": "本项目采用了端侧私有化大模型与检索增强生成（RAG）相融合的技术路线。首先利用轻量级向量模型对海量中医药古籍文献进行多尺度分块切片并持久化嵌入。当终端发出查询指令时，向量检索引擎首先抓取Top-k关联片段，结合混合倒排索引完成二次重排，最后送入大模型完成结构化精准解答，既保障了私有数据的安全性，又有效遏制了大模型的幻觉现象。",
      "vi": "Dự án này áp dụng lộ trình công nghệ kết hợp giữa mô hình cục bộ riêng tư tại máy trạm và công nghệ thế hệ tăng cường truy xuất (RAG). Trước hết dùng mô hình vector hóa nhẹ chia cắt khối đa tầng và nhúng dữ liệu cho lượng lớn tài liệu cổ tịch Đông y. Khi có truy vấn từ client, công cụ truy xuất vector trích xuất các phân đoạn tương quan cao nhất, kết hợp chỉ mục đảo ngược để tái xếp hạng, sau cùng đưa vào LLM để đưa ra câu trả lời chuẩn xác, vừa bảo vệ dữ liệu vừa khống chế ảo giác AI."
    }
  },
  "legal": {
    "id": "legal",
    "icon": "⚖️",
    "title": "Pháp Lý & Hợp Đồng (法律与合同)",
    "subtitle": "Quyền sở hữu trí tuệ, điều khoản giải quyết tranh chấp, trọng tài",
    "level": "HSK 5–9 (Legal & Regulatory)",
    "vocab": [
      {
        "zh": "知识产权",
        "py": "zhī shi chǎn quán",
        "hv": "TRI THỨC SẢN QUYỀN",
        "mean": "Quyền sở hữu trí tuệ (IP - Intellectual Property)",
        "ex_zh": "合同各方应严格尊重并保护开发过程中的知识产权归属。",
        "ex_vi": "Các bên trong hợp đồng phải nghiêm túc tôn trọng và bảo vệ quyền sở hữu trí tuệ trong quá trình phát triển."
      },
      {
        "zh": "仲裁管辖",
        "py": "zhòng cái guǎn xiá",
        "hv": "TRỌNG TÀI QUẢN HẠT",
        "mean": "Thẩm quyền phán quyết của trọng tài thương mại",
        "ex_zh": "任何因本协议引起的争议均应提交国际经济贸易仲裁委员会仲裁。",
        "ex_vi": "Mọi tranh chấp phát sinh từ thỏa thuận này đều phải trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế để phán quyết."
      },
      {
        "zh": "连带保证",
        "py": "lián dài bǎo zhèng",
        "hv": "LIÊN ĐỚI BẢO CHỨNG",
        "mean": "Trách nhiệm bảo lãnh liên đới nghĩa vụ tài chính",
        "ex_zh": "担保方在此承担不可撤销的连带保证清偿责任。",
        "ex_vi": "Bên bảo lãnh tại đây gánh vác trách nhiệm bảo lãnh liên đới thanh toán không thể hủy ngang."
      },
      {
        "zh": "免责事由",
        "py": "miǎn zé shì yóu",
        "hv": "MIỄN TRÁCH SỰ DO",
        "mean": "Căn cứ hợp pháp để miễn trừ trách nhiệm pháp lý",
        "ex_zh": "法律规定不可抗力事件属于法定的违约免责事由。",
        "ex_vi": "Pháp luật quy định sự kiện bất khả kháng thuộc về căn cứ miễn trừ trách nhiệm vi phạm mang tính luật định."
      },
      {
        "zh": "排他许可",
        "py": "pái tā xǔ kě",
        "hv": "BÀI THA HỨA KHẢ",
        "mean": "Cấp phép độc quyền độc chiếm (Exclusive License)",
        "ex_zh": "被许可人获得了该专利技术在亚太地区的排他许可使用权。",
        "ex_vi": "Bên được cấp phép đã giành được quyền sử dụng độc quyền công nghệ sáng chế này tại khu vực Châu Á - Thái Bình Dương."
      },
      {
        "zh": "保密协议",
        "py": "bǎo mì xié yì",
        "hv": "BẢO MẬT HIỆP NGHỊ",
        "mean": "Thỏa thuận cam kết bảo mật thông tin (NDA)",
        "ex_zh": "在正式商务洽谈前，双方需先行签署具有法律约束力的保密协议。",
        "ex_vi": "Trước khi đàm phán thương mại chính thức, đôi bên cần ký trước một bản thỏa thuận bảo mật có giá trị ràng buộc pháp lý."
      },
      {
        "zh": "民事责任",
        "py": "mín shì zé rèn",
        "hv": "DÂN SỰ TRÁCH NHIỆM",
        "mean": "Trách nhiệm pháp lý dân sự phát sinh do vi phạm nghĩa vụ hợp đồng"
      },
      {
        "zh": "诉讼时效",
        "py": "sù sòng shí xiào",
        "hv": "TỐ TỤNG THỜI HIỆU",
        "mean": "Thời hạn người có quyền được yêu cầu tòa án bảo vệ quyền lợi hợp pháp"
      },
      {
        "zh": "商标侵权",
        "py": "shāng biāo qīn quán",
        "hv": "THƯƠNG TIÊU XÂM QUYỀN",
        "mean": "Hành vi vi phạm quyền sử dụng nhãn hiệu hàng hóa đã được bảo hộ"
      },
      {
        "zh": "商业秘密",
        "py": "shāng yè mì mì",
        "hv": "THƯƠNG NGHIỆP BÍ MẬT",
        "mean": "Bí mật kinh doanh đem lại lợi thế cạnh tranh cho doanh nghiệp"
      },
      {
        "zh": "竞业限制",
        "py": "jìng yè xiàn zhì",
        "hv": "CẠNH NGHIỆP HẠN CHẾ",
        "mean": "Điều khoản cam kết không làm việc cho đối thủ cạnh tranh sau nghỉ việc"
      },
      {
        "zh": "股权质押",
        "py": "gǔ quán zhì yā",
        "hv": "CỔ QUYỀN CHẤT ÁP",
        "mean": "Biện pháp cầm cố phần vốn góp hoặc cổ phần để bảo đảm nghĩa vụ tài chính"
      },
      {
        "zh": "强制执行",
        "py": "qiáng zhì zhí xíng",
        "hv": "CƯỠNG CHẾ THI HÀNH",
        "mean": "Cơ quan có thẩm quyền buộc người phải thi hành án chấp hành bản án"
      },
      {
        "zh": "司法管辖",
        "py": "sī fǎ guǎn xiá",
        "hv": "TƯ PHÁP QUẢN HẠT",
        "mean": "Phạm vi quyền hạn xét xử của tòa án theo lãnh thổ và cấp bậc"
      },
      {
        "zh": "法人代表",
        "py": "fǎ rén dài biǎo",
        "hv": "PHÁP NHÂN ĐẠI BIỂU",
        "mean": "Người đại diện theo pháp luật của công ty hoặc tổ chức"
      },
      {
        "zh": "有限责任",
        "py": "yǒu xiàn zé rèn",
        "hv": "HỮU HẠN TRÁCH NHIỆM",
        "mean": "Trách nhiệm hữu hạn trong phạm vi phần vốn góp"
      },
      {
        "zh": "连带责任",
        "py": "lián dài zé rèn",
        "hv": "LIÊN ĐỚI TRÁCH NHIỆM",
        "mean": "Trách nhiệm bồi thường liên đới giữa các bên vi phạm"
      },
      {
        "zh": "合同生效",
        "py": "hé tong shēng xiào",
        "hv": "HỢP ĐỒNG SINH HIỆU",
        "mean": "Hợp đồng chính thức phát sinh hiệu lực pháp lý ràng buộc"
      },
      {
        "zh": "解除合同",
        "py": "jiě chú hé tong",
        "hv": "GIẢI TRỪ HỢP ĐỒNG",
        "mean": "Chấm dứt hiệu lực hợp đồng theo thỏa thuận hoặc luật định"
      },
      {
        "zh": "终止协议",
        "py": "zhōng zhǐ xié yì",
        "hv": "CHUNG CHỈ HIỆP NGHỊ",
        "mean": "Thỏa thuận chấm dứt quyền và nghĩa vụ các bên"
      },
      {
        "zh": "违约责任",
        "py": "wéi yuē zé rèn",
        "hv": "VI ƯỚC TRÁCH NHIỆM",
        "mean": "Trách nhiệm pháp lý do không thực hiện đúng cam kết hợp đồng"
      },
      {
        "zh": "损害赔偿",
        "py": "sǔn hài péi cháng",
        "hv": "TỔN HẠI BỒI THƯỜNG",
        "mean": "Bồi thường thiệt hại thực tế phát sinh do hành vi vi phạm"
      },
      {
        "zh": "专利申请",
        "py": "zhuān lì shēn qǐng",
        "hv": "CHUYÊN LỢI THÂN THỈNH",
        "mean": "Đơn đăng ký xác lập quyền bảo hộ bằng sáng chế"
      },
      {
        "zh": "著作权侵权",
        "py": "zhù zuò quán qīn quán",
        "hv": "TRỨ TÁC QUYỀN XÂM QUYỀN",
        "mean": "Xâm phạm bản quyền tác giả đối với tác phẩm văn học nghệ thuật"
      },
      {
        "zh": "劳动合同",
        "py": "láo dòng hé tong",
        "hv": "LAO ĐỘNG HỢP ĐỒNG",
        "mean": "Hợp đồng lao động thỏa thuận điều kiện làm việc và tiền lương"
      },
      {
        "zh": "经济补偿金",
        "py": "jīng jì bǔ cháng jīn",
        "hv": "KINH TẾ BỔ THƯỜNG KIM",
        "mean": "Khoản tiền trợ cấp thôi việc hoặc mất việc làm theo luật lao động"
      },
      {
        "zh": "试用期",
        "py": "shì yòng qī",
        "hv": "THÍ DỤNG KỲ",
        "mean": "Thời gian thử việc trước khi ký hợp đồng lao động chính thức"
      },
      {
        "zh": "竞业禁止",
        "py": "jìng yè jìn zhǐ",
        "hv": "CẠNH NGHIỆP CẤM CHỈ",
        "mean": "Điều khoản cấm cạnh tranh không lành mạnh trong thời hạn quy định"
      },
      {
        "zh": "调解委员会",
        "py": "tiáo jiě wěi yuán huì",
        "hv": "ĐIỀU GIẢI ỦY VIÊN HỘI",
        "mean": "Hội đồng hòa giải tranh chấp thương mại hoặc lao động"
      },
      {
        "zh": "仲裁裁决",
        "py": "zhòng cái cái jué",
        "hv": "TRỌNG TÀI TÀI QUYẾT",
        "mean": "Phán quyết trọng tài có giá trị chung thẩm và bắt buộc thi hành"
      },
      {
        "zh": "提起诉讼",
        "py": "tí qǐ sù sòng",
        "hv": "ĐỀ KHỞI TỐ TỤNG",
        "mean": "Nộp đơn khởi kiện yêu cầu tòa án giải quyết vụ án"
      },
      {
        "zh": "出庭作证",
        "py": "chū tíng zuò zhèng",
        "hv": "XUẤT ĐÌNH TÁC CHỨNG",
        "mean": "Có mặt tại phiên tòa để cung cấp chứng cứ và lời khai nhân chứng"
      },
      {
        "zh": "举证责任",
        "py": "jǔ zhèng zé rèn",
        "hv": "CỬ CHỨNG TRÁCH NHIỆM",
        "mean": "Nghĩa vụ chứng minh lời khẳng định hoặc phản đối trước tòa án"
      },
      {
        "zh": "执行公证",
        "py": "zhí xíng gōng zhèng",
        "hv": "THI HÀNH CÔNG CHỨNG",
        "mean": "Văn bản công chứng có hiệu lực bắt buộc cưỡng chế thi hành"
      },
      {
        "zh": "不可抗辩条款",
        "py": "bù kě kàng biàn tiáo kuǎn",
        "hv": "BẤT KHẢ KHÁNG BIỆN ĐIỀU KHOẢN",
        "mean": "Điều khoản không thể bác bỏ hoặc miễn trừ tranh chấp"
      },
      {
        "zh": "反垄断法",
        "py": "fǎn lǒng duàn fǎ",
        "hv": "PHẢN LŨNG ĐOẠN PHÁP",
        "mean": "Luật chống độc quyền và kiểm soát tập trung kinh tế"
      },
      {
        "zh": "不正当竞争",
        "py": "bù zhèng dàng jìng zhēng",
        "hv": "BẤT CHÍNH ĐƯƠNG CẠNH TRANH",
        "mean": "Hành vi cạnh tranh không lành mạnh gây thiệt hại cho đối thủ"
      },
      {
        "zh": "商业贿赂",
        "py": "shāng yè huì lù",
        "hv": "THƯƠNG NGHIỆP HỐI LỘ",
        "mean": "Hành vi đưa hối lộ nhằm trục lợi phi pháp trong giao dịch"
      },
      {
        "zh": "内幕交易",
        "py": "nèi mù jiāo yì",
        "hv": "NỘI MẠC GIAO DỊCH",
        "mean": "Hành vi giao dịch nội gián chứng khoán trái pháp luật (Insider Trading)"
      },
      {
        "zh": "洗钱罪",
        "py": "xǐ qián zuì",
        "hv": "TẨY TIỀN TỘI",
        "mean": "Tội phạm rửa tiền nhằm hợp pháp hóa nguồn tài sản bất chính"
      },
      {
        "zh": "不可撤回要约",
        "py": "bù kě chè huí yào yuē",
        "hv": "BẤT KHẢ TRIỆT HỒI YẾU ƯỚC",
        "mean": "Đề nghị giao kết hợp đồng không được phép thu hồi"
      },
      {
        "zh": "反要约",
        "py": "fǎn yào yuē",
        "hv": "PHẢN YẾU ƯỚC",
        "mean": "Đề nghị giao kết hợp đồng mới sau khi từ chối đề nghị trước"
      },
      {
        "zh": "附条件合同",
        "py": "fù tiáo jiàn hé tong",
        "hv": "PHỤ ĐIỀU KIỆN HỢP ĐỒNG",
        "mean": "Hợp đồng phát sinh hoặc chấm dứt hiệu lực kèm điều kiện cụ thể"
      },
      {
        "zh": "效力待定",
        "py": "xiào lì dài dìng",
        "hv": "HIỆU LỰC ĐÃI ĐỊNH",
        "mean": "Hợp đồng chờ người có thẩm quyền xác nhận hoặc phê chuẩn mới có hiệu lực"
      },
      {
        "zh": "无权代理",
        "py": "wú quán dài lǐ",
        "hv": "VÔ QUYỀN ĐẠI LÝ",
        "mean": "Hành vi đại diện xác lập giao dịch mà không có thẩm quyền hợp pháp"
      },
      {
        "zh": "表见代理",
        "py": "biǎo jiàn dài lǐ",
        "hv": "BIỂU KIẾN ĐẠI LÝ",
        "mean": "Đại diện hiển nhiên khiến bên thứ ba tin tưởng có thẩm quyền đại diện"
      },
      {
        "zh": "格式条款",
        "py": "gé shì tiáo kuǎn",
        "hv": "CÁCH THỨC ĐIỀU KHOẢN",
        "mean": "Điều khoản hợp đồng mẫu soạn sẵn do một bên áp đặt (Boilerplate clause)"
      },
      {
        "zh": "诚实信用原则",
        "py": "chéng shí xìn yòng yuán zé",
        "hv": "THÀNH THỰC TÍN DỤNG NGUYÊN TẮC",
        "mean": "Nguyên tắc thiện chí, trung thực và uy tín trong giao kết hợp đồng"
      },
      {
        "zh": "留置权",
        "py": "liú zhì quán",
        "hv": "LƯU TRÍ QUYỀN",
        "mean": "Quyền cầm giữ tài sản của người nợ cho đến khi nghĩa vụ được thanh toán"
      },
      {
        "zh": "优先受偿权",
        "py": "yōu xiān shòu cháng quán",
        "hv": "ƯU TIÊN THỤ THƯỜNG QUYỀN",
        "mean": "Quyền được ưu tiên thanh toán nợ trước các chủ nợ khác"
      },
      {
        "zh": "代位权",
        "py": "dài wèi quán",
        "hv": "ĐẠI VỊ QUYỀN",
        "mean": "Quyền của chủ nợ được thay mặt người nợ đòi tài sản từ bên thứ ba"
      },
      {
        "zh": "撤销权",
        "py": "chè xiāo quán",
        "hv": "TRIỆT TIÊU QUYỀN",
        "mean": "Quyền yêu cầu tòa án hủy bỏ giao dịch tẩu tán tài sản của con nợ"
      },
      {
        "zh": "民事保全",
        "py": "mín shì bǎo quán",
        "hv": "DÂN SỰ BẢO TOÀN",
        "mean": "Biện pháp khẩn cấp tạm thời phong tỏa tài sản trước khi xét xử"
      },
      {
        "zh": "先予执行",
        "py": "xiān yǔ zhí xíng",
        "hv": "TIÊN DỮ THI HÀNH",
        "mean": "Quyết định tạm ứng thi hành nghĩa vụ cấp bách trước khi tuyên án"
      },
      {
        "zh": "一审判决",
        "py": "yī shěn pàn jué",
        "hv": "NHẤT THẨM PHÁN QUYẾT",
        "mean": "Bản án sơ thẩm của tòa án cấp thứ nhất"
      },
      {
        "zh": "终审判决",
        "py": "zhōng shěn pàn jué",
        "hv": "CHUNG THẨM PHÁN QUYẾT",
        "mean": "Bản án phúc thẩm có hiệu lực pháp luật thi hành ngay lập tức"
      },
      {
        "zh": "再审程序",
        "py": "zài shěn chéng xù",
        "hv": "TÁI THẨM TRÌNH TỰ",
        "mean": "Thủ tục giám đốc thẩm hoặc tái thẩm xem xét lại bản án có vi phạm"
      },
      {
        "zh": "公证遗嘱",
        "py": "gōng zhèng yí zhǔ",
        "hv": "CÔNG CHỨNG DI CHÚC",
        "mean": "Di chúc đã được phòng công chứng chứng thực hợp pháp"
      },
      {
        "zh": "继承份额",
        "py": "jì chéng fèn é",
        "hv": "KẾ THỪA PHẦN NGẠCH",
        "mean": "Phần di sản thừa kế phân chia cho từng người thừa kế hợp pháp"
      }
    ],
    "sentences": [
      {
        "zh": "若任何一方违反本协议项下的保密义务，无过错方有权立即解除合同并请求全额赔偿。",
        "py": "ruò rèn hé yī fāng wéi fǎn běn xié yì xiàng xià de bǎo mì yì wù ， wú guò cuò fāng yǒu quán lì jí jiě chú hé tong bìng qǐng qiú quán é péi cháng 。",
        "vi": "Nếu bất kỳ bên nào vi phạm nghĩa vụ bảo mật theo thỏa thuận này, bên không có lỗi có quyền chấm dứt ngay hợp đồng và yêu cầu bồi thường toàn bộ thiệt hại."
      }
    ],
    "case_study": {
      "title": "Điều khoản bồi thường thiệt hại và chấm dứt hợp đồng",
      "zh": "合同第十二条规定，违约金数额由双方在签订合同时预先约定。如违约造成的实际损失高于约定违约金，受损方有权请求仲裁机构或司法管辖法院根据实际损失予以追加增加。此外，一方发生重大违约导致合同目的无法实现时，另一方享有法定单方通知解除权。",
      "vi": "Điều 12 hợp đồng quy định số tiền bồi thường vi phạm do hai bên thỏa thuận trước khi ký kết. Nếu tổn thất thực tế do vi phạm gây ra cao hơn mức thỏa thuận, bên bị thiệt hại có quyền yêu cầu cơ quan trọng tài hoặc tòa án có thẩm quyền tăng mức bồi thường theo thiệt hại thực tế. Ngoài ra khi một bên vi phạm nghiêm trọng khiến mục đích hợp đồng không thể đạt được, bên còn lại có quyền đơn phương thông báo chấm dứt hợp đồng theo luật định."
    }
  },
  "tourism": {
    "id": "tourism",
    "icon": "✈️",
    "title": "Du Lịch & Văn Hóa (旅游与文化)",
    "subtitle": "Khách sạn, danh lam thắng cảnh, thủ tục xuất nhập cảnh & ẩm thực",
    "level": "HSK 3–6 (Travel & Hospitality)",
    "vocab": [
      {
        "zh": "名胜古迹",
        "py": "míng shèng gǔ jì",
        "hv": "DANH THẮNG CỔ TÍCH",
        "mean": "Di tích lịch sử và danh lam thắng cảnh nổi tiếng",
        "ex_zh": "北京拥有故宫、天坛等享誉全球的名胜古迹。",
        "ex_vi": "Bắc Kinh sở hữu những danh lam cổ tích nức tiếng toàn cầu như Cố Cung, Thiên Đàn."
      },
      {
        "zh": "落地签证",
        "py": "luò dì qiān zhèng",
        "hv": "LẠC ĐỊA THIÊM CHỨNG",
        "mean": "Thị thực làm tại cửa khẩu sân bay (Visa on arrival)",
        "ex_zh": "持有外交护照的人员可直接申请办理落地签证手续。",
        "ex_vi": "Người mang hộ chiếu ngoại giao có thể trực tiếp làm thủ tục xin visa tại cửa khẩu."
      },
      {
        "zh": "退税服务",
        "py": "tuì shuì fú wù",
        "hv": "THOÁI THUẾ PHỤC VỤ",
        "mean": "Dịch vụ hoàn thuế giá trị gia tăng cho du khách quốc tế (Tax refund)",
        "ex_zh": "外国游客在离境机场凭借购物发票可享受退税服务。",
        "ex_vi": "Khách du lịch quốc tế tại sân bay xuất cảnh căn cứ vào hóa đơn mua sắm có thể nhận dịch vụ hoàn thuế."
      },
      {
        "zh": "风土人情",
        "py": "fēng tǔ rén qíng",
        "hv": "PHONG THỔ NHÂN TÌNH",
        "mean": "Phong tục tập quán và nét văn hóa địa phương đặc thù",
        "ex_zh": "深入古城才能真正体验原汁原味的风土人情。",
        "ex_vi": "Đi sâu vào lòng cổ trấn mới thực sự trải nghiệm được phong thổ nhân tình nguyên bản."
      },
      {
        "zh": "套房预订",
        "py": "tào fáng yù dìng",
        "hv": "SÁO PHÒNG DỰ ĐỊNH",
        "mean": "Đặt trước phòng căn hộ / suite khách sạn cao cấp",
        "ex_zh": "客人在节假日旅游旺季前需至少提前两周完成套房预订。",
        "ex_vi": "Khách hàng cần hoàn tất đặt phòng suite trước ít nhất hai tuần vào mùa cao điểm du lịch lễ tết."
      },
      {
        "zh": "登机手续",
        "py": "dēng jī shǒu xù",
        "hv": "ĐĂNG CƠ THỦ TỤC",
        "mean": "Thủ tục làm thủ tục lên máy bay tại quầy hoặc trực tuyến (Check-in)"
      },
      {
        "zh": "行李托运",
        "py": "xíng li tuō yùn",
        "hv": "HÀNH LÝ THÁC VẬN",
        "mean": "Gửi hành lý vào khoang chứa đồ của máy bay"
      },
      {
        "zh": "边防检查",
        "py": "biān fáng jiǎn chá",
        "hv": "BIÊN PHÒNG KIỂM TRA",
        "mean": "Kiểm tra giấy tờ xuất nhập cảnh tại trạm biên phòng cửa khẩu"
      },
      {
        "zh": "免税专柜",
        "py": "miǎn shuì zhuān guì",
        "hv": "MIỄN THUẾ CHUYÊN QUẦY",
        "mean": "Quầy bán hàng hóa miễn thuế dành cho khách xuất cảnh (Duty Free)"
      },
      {
        "zh": "民宿客栈",
        "py": "mín sù kè zhàn",
        "hv": "DÂN TÚC KHÁCH SẠN",
        "mean": "Cơ sở lưu trú trải nghiệm văn hóa bản địa (Homestay)"
      },
      {
        "zh": "礼宾服务",
        "py": "lǐ bīn fú wù",
        "hv": "LỄ TÂN PHỤC VỤ",
        "mean": "Dịch vụ hỗ trợ hành khách, đặt tour và hành lý tại khách sạn (Concierge)"
      },
      {
        "zh": "往返机票",
        "py": "wǎng fǎn jī piào",
        "hv": "VÃNG PHẢN CƠ PHIẾU",
        "mean": "Vé máy bay hai chiều đi và về (Round-trip ticket)"
      },
      {
        "zh": "过境签",
        "py": "guò jìng qiān",
        "hv": "QUÁ CẢNH THIÊM",
        "mean": "Thị thực quá cảnh chuyển tiếp chuyến bay (Transit Visa)"
      },
      {
        "zh": "安检通道",
        "py": "ān jiǎn tōng dào",
        "hv": "AN KIỂM THÔNG ĐẠO",
        "mean": "Cửa kiểm tra an ninh soi chiếu tại sân bay"
      },
      {
        "zh": "登机口",
        "py": "dēng jī kǒu",
        "hv": "ĐĂNG CƠ KHẨU",
        "mean": "Cửa lên máy bay tại nhà ga sân bay (Boarding Gate)"
      },
      {
        "zh": "登机牌",
        "py": "dēng jī pái",
        "hv": "ĐĂNG CƠ BÀI",
        "mean": "Thẻ lên máy bay in số ghế và giờ bay (Boarding Pass)"
      },
      {
        "zh": "海关申报",
        "py": "hǎi guān shēn bào",
        "hv": "HẢI QUAN THÂN BÁO",
        "mean": "Kê khai hải quan hành lý tiền tệ vượt định mức (Customs Declaration)"
      },
      {
        "zh": "退税柜台",
        "py": "tuì shuì guì tái",
        "hv": "THOÁI THUẾ QUẦY ĐÀI",
        "mean": "Quầy làm thủ tục hoàn thuế GTGT cho khách du lịch quốc tế"
      },
      {
        "zh": "预订确认",
        "py": "yù dìng què rèn",
        "hv": "DỰ ĐỊNH XÁC NHẬN",
        "mean": "Xác nhận mã đặt phòng khách sạn hoặc vé tour (Booking Confirmation)"
      },
      {
        "zh": "入住登记",
        "py": "rù zhù dēng jì",
        "hv": "NHẬP TRÚ ĐĂNG KÝ",
        "mean": "Thủ tục nhận phòng tại khách sạn (Check-in)"
      },
      {
        "zh": "退房结账",
        "py": "tuì fáng jié zhàng",
        "hv": "THOÁI PHÒNG KẾT TRƯỢNG",
        "mean": "Thủ tục trả phòng và thanh toán hóa đơn khách sạn (Check-out)"
      },
      {
        "zh": "客房送餐",
        "py": "kè fáng sòng cān",
        "hv": "KHÁCH PHÒNG TỐNG XAN",
        "mean": "Dịch vụ phục vụ ăn uống tận phòng khách sạn (Room Service)"
      },
      {
        "zh": "唤醒服务",
        "py": "huàn xǐng fú wù",
        "hv": "HOÁN TỈNH PHỤC VỤ",
        "mean": "Dịch vụ gọi báo thức buổi sáng theo yêu cầu của khách (Wake-up Call)"
      },
      {
        "zh": "押金收据",
        "py": "yā jīn shōu jù",
        "hv": "ÁP KIM THU CỨ",
        "mean": "Biên lai nhận tiền đặt cọc giữ phòng hoặc thuê đồ"
      },
      {
        "zh": "全包套餐",
        "py": "quán bāo tào cān",
        "hv": "TOÀN BAO TAO XAN",
        "mean": "Gói du lịch trọn gói bao gồm vé máy bay, khách sạn và bữa ăn (All-inclusive)"
      },
      {
        "zh": "自费项目",
        "py": "zì fèi xiàng mù",
        "hv": "TỰ PHÍ HẠNG MỤC",
        "mean": "Các hoạt động tham quan giải trí tự túc chi phí ngoài chương trình tour"
      },
      {
        "zh": "导游证",
        "py": "dǎo yóu zhèng",
        "hv": "ĐẠO DU CHỨNG",
        "mean": "Thẻ hành nghề hướng dẫn viên du lịch chuyên nghiệp"
      },
      {
        "zh": "世界遗产",
        "py": "shì jiè yí chǎn",
        "hv": "THẾ GIỚI DI SẢN",
        "mean": "Di sản văn hóa hoặc thiên nhiên được UNESCO công nhận"
      },
      {
        "zh": "地道风味",
        "py": "dì dao fēng wèi",
        "hv": "ĐỊA ĐẠO PHONG VỊ",
        "mean": "Món ăn mang hương vị đặc sản truyền thống chuẩn bản địa"
      },
      {
        "zh": "特色小吃",
        "py": "tè sè xiǎo chī",
        "hv": "ĐẶC SẮC TIỂU CẬT",
        "mean": "Các món quà vặt, món ăn đường phố đặc sắc vùng miền"
      },
      {
        "zh": "旅行保险",
        "py": "lǚ xíng bǎo xiǎn",
        "hv": "LỮ HÀNH BẢO HIỂM",
        "mean": "Bảo hiểm y tế và tai nạn trong suốt chuyến du lịch quốc tế"
      },
      {
        "zh": "紧急求助",
        "py": "jǐn jí qiú zhù",
        "hv": "KHẨN CẤP CẦU TRỢ",
        "mean": "Số điện thoại hỗ trợ khẩn cấp dành cho du khách gặp sự cố (SOS Hotline)"
      },
      {
        "zh": "行李超重",
        "py": "xíng li chāo zhòng",
        "hv": "HÀNH LÝ SIÊU TRỌNG",
        "mean": "Hành lý vượt quá trọng lượng cho phép phải đóng phí phạt"
      },
      {
        "zh": "登机口变更",
        "py": "dēng jī kǒu biàn gēng",
        "hv": "ĐĂNG CƠ KHẨU BIẾN CANH",
        "mean": "Thông báo thay đổi cửa ra máy bay tại phòng chờ sân bay"
      },
      {
        "zh": "航班延误",
        "py": "háng bān yán wù",
        "hv": "HÀNG BAN DIÊN NGỘ",
        "mean": "Chuyến bay bị hoãn giờ cất cánh do thời tiết hoặc kỹ thuật"
      },
      {
        "zh": "航班取消",
        "py": "háng bān qǔ xiāo",
        "hv": "HÀNG BAN THỦ TIÊU",
        "mean": "Chuyến bay bị hủy bỏ hoàn toàn không thực hiện"
      },
      {
        "zh": "转机指南",
        "py": "zhuǎn jī zhǐ nán",
        "hv": "CHUYỂN CƠ CHỈ NAM",
        "mean": "Hướng dẫn di chuyển và đổi máy bay tại sân bay trung chuyển"
      },
      {
        "zh": "免税额度",
        "py": "miǎn shuì é dù",
        "hv": "MIỄN THUẾ NGẠCH ĐỘ",
        "mean": "Định mức trị giá hàng hóa được miễn thuế khi nhập cảnh"
      },
      {
        "zh": "随身行李",
        "py": "suí shēn xíng li",
        "hv": "TÙY THÂN HÀNH LÝ",
        "mean": "Hành lý xách tay mang trực tiếp lên khoang hành khách máy bay"
      },
      {
        "zh": "托运行李",
        "py": "tuō yùn xíng li",
        "hv": "THÁC VẬN HÀNH LÝ",
        "mean": "Hành lý ký gửi vào hầm hàng máy bay"
      },
      {
        "zh": "大床房",
        "py": "dà chuáng fáng",
        "hv": "ĐẠI SÀNG PHÒNG",
        "mean": "Phòng khách sạn một giường đôi lớn (King/Queen size bed)"
      },
      {
        "zh": "双床房",
        "py": "shuāng chuáng fáng",
        "hv": "SONG SÀNG PHÒNG",
        "mean": "Phòng khách sạn hai giường đơn riêng biệt (Twin bed room)"
      },
      {
        "zh": "海景套房",
        "py": "hǎi jǐng tào fáng",
        "hv": "HẢI CẢNH SÁO PHÒNG",
        "mean": "Phòng suite cao cấp có ban công hướng nhìn thẳng ra biển"
      },
      {
        "zh": "行政酒廊",
        "py": "xíng zhèng jiǔ láng",
        "hv": "HÀNH CHÍNH TỬU LANG",
        "mean": "Khu vực phòng chờ VIP dành riêng cho khách tầng hành chính"
      },
      {
        "zh": "无烟楼层",
        "py": "wú yān lóu céng",
        "hv": "VÔ YÊN LÂU TẦNG",
        "mean": "Tầng khách sạn cấm hút thuốc hoàn toàn bảo đảm không khí sạch"
      },
      {
        "zh": "自助早餐",
        "py": "zì zhù zǎo cān",
        "hv": "TỰ TRỢ TẢO XAN",
        "mean": "Bữa ăn sáng tự chọn phong phú tại nhà hàng khách sạn (Buffet Breakfast)"
      },
      {
        "zh": "迷你吧",
        "py": "mǐ nǐ bā",
        "hv": "MỄ NỄ BA",
        "mean": "Tủ lạnh nhỏ chứa nước ngọt và rượu bia giải khát trong phòng khách sạn (Minibar)"
      },
      {
        "zh": "保险箱",
        "py": "bǎo xiǎn xiāng",
        "hv": "BẢO HIỂM TƯƠNG",
        "mean": "Két sắt bảo mật cất giữ tiền và giấy tờ tùy thân trong phòng khách sạn"
      },
      {
        "zh": "门禁卡",
        "py": "mén jìn kǎ",
        "hv": "MÔN CẤM TẠP",
        "mean": "Thẻ từ quẹt mở cửa phòng và kích hoạt nguồn điện khách sạn"
      },
      {
        "zh": "接送机服务",
        "py": "jiē sòng jī fú wù",
        "hv": "TIẾP TỐNG CƠ PHỤC VỤ",
        "mean": "Dịch vụ xe đưa đón khách tận sân bay về khách sạn (Airport Shuttle)"
      },
      {
        "zh": "包车游览",
        "py": "bāo chē yóu lǎn",
        "hv": "BAO XA DU LÃM",
        "mean": "Thuê trọn gói xe ô tô riêng kèm tài xế tham quan theo lịch trình"
      },
      {
        "zh": "自由行",
        "py": "zì yóu xíng",
        "hv": "TỰ DO HÀNH",
        "mean": "Hình thức du lịch tự túc không đi theo đoàn của công ty du lịch"
      },
      {
        "zh": "跟团游",
        "py": "gēn tuán yóu",
        "hv": "CÂN ĐOÀN DU",
        "mean": "Du lịch trọn gói theo đoàn do hướng dẫn viên dẫn dắt suốt tuyến"
      },
      {
        "zh": "旺季",
        "py": "wàng jì",
        "hv": "VƯỢNG QUÝ",
        "mean": "Mùa cao điểm du lịch giá phòng và dịch vụ tăng cao"
      },
      {
        "zh": "淡季",
        "py": "dàn jì",
        "hv": "ĐẠM QUÝ",
        "mean": "Mùa thấp điểm du lịch ít khách tham quan và có nhiều ưu đãi giảm giá"
      },
      {
        "zh": "非物质文化遗产",
        "py": "fēi wù zhì wén huà yí chǎn",
        "hv": "PHI VẬT CHẤT VĂN HÓA DI SẢN",
        "mean": "Di sản văn hóa phi vật thể cần được bảo tồn và phát huy"
      },
      {
        "zh": "民俗体验",
        "py": "mín sú tǐ yàn",
        "hv": "DÂN TỤC THỂ NGHIỆM",
        "mean": "Trải nghiệm phong tục tập quán lễ hội độc đáo của người bản xứ"
      },
      {
        "zh": "传统手工艺",
        "py": "chuán tǒng shǒu gōng yì",
        "hv": "TRUYỀN THỐNG THỦ CÔNG NGHỆ",
        "mean": "Các nghề thủ công mỹ nghệ cổ truyền tinh xảo của địa phương"
      },
      {
        "zh": "特色纪念品",
        "py": "tè sè jì niàn pǐn",
        "hv": "ĐẶC SẮC KÝ NIỆM PHẨM",
        "mean": "Đồ lưu niệm mang đậm dấu ấn đặc trưng của điểm du lịch"
      }
    ],
    "sentences": [
      {
        "zh": "导游先生生动幽默地为我们讲解了兵马俑一号坑的考古发掘历史。",
        "py": "dǎo yóu xiān sheng shēng dòng yōu mò de wèi wǒ men jiǎng jiě le bīng mǎ yǒng yī hào kēng de kǎo gǔ fā jué lì shǐ 。",
        "vi": "Anh hướng dẫn viên đã thuyết minh sinh động và dí dỏm cho chúng tôi nghe về lịch sử khai quật khảo cổ hố số 1 Binh Mã Dũng."
      }
    ],
    "case_study": {
      "title": "Trải nghiệm văn hóa du lịch Tây An một ngày (西安一日行)",
      "zh": "从华清宫的温泉汤池到骊山脚下的烽火戏诸侯，历史画卷徐徐展开。午后转赴秦始皇兵马俑博物馆，千人千面的军阵陶俑令全球旅行者屏息赞叹。夜幕降临，漫步大唐不夜城，华灯璀璨，诗词飞花令互动让人仿佛梦回盛唐。品尝地道的羊肉泡馍与肉夹馍，领略古丝绸之路起点的千年文脉。",
      "vi": "Từ các hồ suối nước nóng tại Hoa Thanh Cung đến điển tích đốt lửa trêu chư hầu dưới chân núi Ly Sơn, bức tranh lịch sử dần mở ra. Buổi chiều chuyển sang Bảo tàng Binh Mã Dũng Tần Thủy Hoàng, đội hình tượng gốm nghìn người nghìn vẻ khiến du khách toàn cầu trầm trồ thán phục. Màn đêm buông xuống, dạo bước giữa Đại Đường Bất Dạ Thành, đèn hoa rực rỡ, thi đố thơ ca khiến người ta như ngỡ ngàng quay về thời Thịnh Đường. Thưởng thức mì bánh canh cừu và bánh kẹp thịt đậm đà hương vị, cảm nhận nghìn năm văn hóa nơi khởi đầu con đường tơ lụa cổ đại."
    }
  }
};

  window.SPECIALIZED_TRACKS = SPECIALIZED_COURSES;
  console.log("✅ SPECIALIZED_TRACKS Module loaded: 5 specialized professional domains initialized with " + 
    Object.values(SPECIALIZED_COURSES).reduce((acc, c) => acc + c.vocab.length, 0) + " comprehensive terms.");
})();
