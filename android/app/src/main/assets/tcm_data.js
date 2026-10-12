// ============================================================================
// HSK 3.0 — MODULE Y HỌC CỔ TRUYỀN & THUẬT NGỮ CHUYÊN SÂU (TCM SPECIALIST)
// Nguồn: Bộ từ điển Hán-Việt Y học & Y kinh điển Hoàng Đế Nội Kinh, Thương Hàn Luận
// ============================================================================

(function() {
  'use strict';

  // 1. KHO TỪ VỰNG THUẬT NGỮ ĐÔNG Y & Y HỌC HÁN - VIỆT
  const TCM_TERMS = [
  {
    "zh": "中医",
    "hanviet": "trung y",
    "vi": "Đông y / y học cổ truyền Trung Hoa",
    "en": "",
    "pinyin": "zhōngyī"
  },
  {
    "zh": "中药",
    "hanviet": "trung dược",
    "vi": "thuốc Đông y",
    "en": "",
    "pinyin": "zhōngyào"
  },
  {
    "zh": "中药学",
    "hanviet": "trung dược học",
    "vi": "dược học Đông y",
    "en": "",
    "pinyin": "zhōngyàoxué"
  },
  {
    "zh": "方剂",
    "hanviet": "phương tễ",
    "vi": "bài thuốc / phương tễ",
    "en": "",
    "pinyin": "fāngjì"
  },
  {
    "zh": "方剂学",
    "hanviet": "phương tễ học",
    "vi": "phương tễ học",
    "en": "",
    "pinyin": "fāngjìxué"
  },
  {
    "zh": "辨证论治",
    "hanviet": "biện chứng luận trị",
    "vi": "biện chứng luận trị",
    "en": "",
    "pinyin": "biànzhèng lùnzhì"
  },
  {
    "zh": "阴阳",
    "hanviet": "âm dương",
    "vi": "âm dương",
    "en": "",
    "pinyin": "yīnyáng"
  },
  {
    "zh": "五行",
    "hanviet": "ngũ hành",
    "vi": "ngũ hành (5 yếu tố)",
    "en": "",
    "pinyin": "wǔxíng"
  },
  {
    "zh": "气血",
    "hanviet": "khí huyết",
    "vi": "khí huyết",
    "en": "",
    "pinyin": "qìxuè"
  },
  {
    "zh": "经络",
    "hanviet": "kinh lạc",
    "vi": "kinh lạc (meridian)",
    "en": "",
    "pinyin": "jīngluò"
  },
  {
    "zh": "穴位",
    "hanviet": "huyệt vị",
    "vi": "huyệt vị (acupoint)",
    "en": "",
    "pinyin": "xuéwèi"
  },
  {
    "zh": "针刺",
    "hanviet": "châm thích",
    "vi": "châm cứu (acupuncture)",
    "en": "",
    "pinyin": "zhēncì"
  },
  {
    "zh": "针灸",
    "hanviet": "châm cứu",
    "vi": "châm cứu",
    "en": "",
    "pinyin": "zhēnjiǔ"
  },
  {
    "zh": "艾灸",
    "hanviet": "ngải cứu",
    "vi": "cứu (moxibustion)",
    "en": "",
    "pinyin": "àijiǔ"
  },
  {
    "zh": "推拿",
    "hanviet": "thôi nã",
    "vi": "xoa bóp bấm huyệt (tuina)",
    "en": "",
    "pinyin": "tuīná"
  },
  {
    "zh": "望闻问切",
    "hanviet": "vọng văn vấn thiết",
    "vi": "tứ chẩn: vọng-văn-vấn-thiết",
    "en": "",
    "pinyin": "wàng wén wèn qiè"
  },
  {
    "zh": "脉诊",
    "hanviet": "mạch chẩn",
    "vi": "chẩn mạch",
    "en": "",
    "pinyin": "màizhěn"
  },
  {
    "zh": "舌诊",
    "hanviet": "thiệt chẩn",
    "vi": "khám lưỡi (tongue diagnosis)",
    "en": "",
    "pinyin": "shézhěn"
  },
  {
    "zh": "四诊合参",
    "hanviet": "tứ chẩn hợp tham",
    "vi": "kết hợp tứ chẩn",
    "en": "",
    "pinyin": "sìzhěn hécān"
  },
  {
    "zh": "药物",
    "hanviet": "dược vật",
    "vi": "thuốc (drug/medicine)",
    "en": "",
    "pinyin": "yàowù"
  },
  {
    "zh": "方药",
    "hanviet": "phương dược",
    "vi": "thuốc thang / đơn thuốc",
    "en": "",
    "pinyin": "fāngyào"
  },
  {
    "zh": "疗效",
    "hanviet": "liệu hiệu",
    "vi": "hiệu quả điều trị",
    "en": "",
    "pinyin": "liáoxiào"
  },
  {
    "zh": "治法",
    "hanviet": "trị pháp",
    "vi": "phép trị / phương pháp điều trị",
    "en": "",
    "pinyin": "zhìfǎ"
  },
  {
    "zh": "审证求因",
    "hanviet": "thẩm chứng cầu nhân",
    "vi": "thẩm chứng tìm nguyên nhân",
    "en": "",
    "pinyin": "shěnzhèng qiúyīn"
  },
  {
    "zh": "标本",
    "hanviet": "tiêu bổn",
    "vi": "tiêu-bản (bệnh gốc và ngọn)",
    "en": "",
    "pinyin": "biāoběn"
  },
  {
    "zh": "八纲辨证",
    "hanviet": "bát cương biện chứng",
    "vi": "bát cương biện chứng",
    "en": "",
    "pinyin": "bāgāng biànzhèng"
  },
  {
    "zh": "寒热",
    "hanviet": "hàn nhiệt",
    "vi": "hàn-nhiệt (lạnh-nóng)",
    "en": "",
    "pinyin": "hánrè"
  },
  {
    "zh": "虚实",
    "hanviet": "hư thực",
    "vi": "hư thực (hư-thực)",
    "en": "",
    "pinyin": "xūshí"
  },
  {
    "zh": "表里",
    "hanviet": "biểu lý",
    "vi": "biểu lý (nông-sâu)",
    "en": "",
    "pinyin": "biǎolǐ"
  },
  {
    "zh": "气血辨证",
    "hanviet": "khí huyết biện chứng",
    "vi": "biện chứng khí huyết",
    "en": "",
    "pinyin": "qìxuè biànzhèng"
  },
  {
    "zh": "脏腑辨证",
    "hanviet": "tạng phủ biện chứng",
    "vi": "biện chứng tạng phủ",
    "en": "",
    "pinyin": "zàngfù biànzhèng"
  },
  {
    "zh": "卫气营血",
    "hanviet": "vệ khí dinh huyết",
    "vi": "vệ-khí-dinh-huyết",
    "en": "",
    "pinyin": "wèiqìyíngxuè"
  },
  {
    "zh": "六经辨证",
    "hanviet": "lục kinh biện chứng",
    "vi": "biện chứng lục kinh",
    "en": "",
    "pinyin": "liùjīng biànzhèng"
  },
  {
    "zh": "药性",
    "hanviet": "dược tính",
    "vi": "tính thuốc",
    "en": "",
    "pinyin": "yàoxìng"
  },
  {
    "zh": "四气五味",
    "hanviet": "tứ khí ngũ vị",
    "vi": "tứ khí ngũ vị",
    "en": "",
    "pinyin": "sìqì wǔwèi"
  },
  {
    "zh": "归经",
    "hanviet": "quy kinh",
    "vi": "quy kinh (kinh mạch thuộc về)",
    "en": "",
    "pinyin": "guījīng"
  },
  {
    "zh": "升降浮沉",
    "hanviet": "thăng giáng phù trầm",
    "vi": "thăng giáng phù trầm",
    "en": "",
    "pinyin": "shēngjiàng fúchén"
  },
  {
    "zh": "配伍",
    "hanviet": "phối ngũ",
    "vi": "phối hợp (thuốc)",
    "en": "",
    "pinyin": "pèiwǔ"
  },
  {
    "zh": "君臣佐使",
    "hanviet": "quân thần tá sứ",
    "vi": "quân-thần-tá-sứ",
    "en": "",
    "pinyin": "jūnchén zuǒshǐ"
  },
  {
    "zh": "煎煮",
    "hanviet": "tiên chử",
    "vi": "sắc thuốc (decoction)",
    "en": "",
    "pinyin": "jiānzhǔ"
  },
  {
    "zh": "汤剂",
    "hanviet": "thang tễ",
    "vi": "thuốc sắc (decoction)",
    "en": "",
    "pinyin": "tāngjì"
  },
  {
    "zh": "丸剂",
    "hanviet": "hoàn tễ",
    "vi": "thuốc hoàn (pill)",
    "en": "",
    "pinyin": "wánjì"
  },
  {
    "zh": "散剂",
    "hanviet": "tán tễ",
    "vi": "thuốc tán (powder)",
    "en": "",
    "pinyin": "sǎnjì"
  },
  {
    "zh": "膏剂",
    "hanviet": "cao tễ",
    "vi": "thuốc cao (ointment)",
    "en": "",
    "pinyin": "gāojì"
  },
  {
    "zh": "配伍禁忌",
    "hanviet": "phối ngũ cấm kỵ",
    "vi": "tương kỵ khi phối thuốc",
    "en": "",
    "pinyin": "pèiwǔ jìnjì"
  },
  {
    "zh": "十八反",
    "hanviet": "thập bát phản",
    "vi": "thập bát phản (tương phản thuốc)",
    "en": "",
    "pinyin": "shíbāfǎn"
  },
  {
    "zh": "十九畏",
    "hanviet": "thập cửu úy",
    "vi": "thập cửu úy (tương úy thuốc)",
    "en": "",
    "pinyin": "shíjiǔwèi"
  },
  {
    "zh": "孕妇禁忌",
    "hanviet": "dự phụ cấm kỵ",
    "vi": "cấm kỵ cho phụ nữ mang thai",
    "en": "",
    "pinyin": "yùnfù jìnjì"
  },
  {
    "zh": "四诊",
    "hanviet": "tứ chẩn",
    "vi": "tứ chẩn (bốn phương pháp khám)",
    "en": "",
    "pinyin": "sìzhěn"
  },
  {
    "zh": "证候",
    "hanviet": "chứng hầu",
    "vi": "chứng hầu (hội chứng)",
    "en": "",
    "pinyin": "zhènghòu"
  },
  {
    "zh": "治则",
    "hanviet": "trị tắc",
    "vi": "nguyên tắc điều trị",
    "en": "",
    "pinyin": "zhìzé"
  },
  {
    "zh": "扶正祛邪",
    "hanviet": "phù chính khư tà",
    "vi": "phù chính khu tà (bổ chính trừ tà)",
    "en": "",
    "pinyin": "fúzhèng qūxié"
  },
  {
    "zh": "调和阴阳",
    "hanviet": "điều hòa âm dương",
    "vi": "điều hòa âm dương",
    "en": "",
    "pinyin": "tiáohé yīnyáng"
  },
  {
    "zh": "益气养血",
    "hanviet": "ích khí dưỡng huyết",
    "vi": "bổ khí dưỡng huyết",
    "en": "",
    "pinyin": "yìqì yǎngxuè"
  },
  {
    "zh": "活血化瘀",
    "hanviet": "hoạt huyết hóa ứ",
    "vi": "hoạt huyết hóa ứ",
    "en": "",
    "pinyin": "huóxuè huàyū"
  },
  {
    "zh": "清热解毒",
    "hanviet": "thanh nhiệt giải độc",
    "vi": "thanh nhiệt giải độc",
    "en": "",
    "pinyin": "qīngrè jiědú"
  },
  {
    "zh": "疏肝理气",
    "hanviet": "sơ can lý khí",
    "vi": "sơ can lý khí",
    "en": "",
    "pinyin": "shūgān lǐqì"
  },
  {
    "zh": "健脾益气",
    "hanviet": "kiện tỳ ích khí",
    "vi": "kiện tỳ bổ khí",
    "en": "",
    "pinyin": "jiànpí yìqì"
  },
  {
    "zh": "滋阴降火",
    "hanviet": "tư âm giáng hỏa",
    "vi": "tư âm giáng hỏa",
    "en": "",
    "pinyin": "zīyīn jiànghuǒ"
  },
  {
    "zh": "温经散寒",
    "hanviet": "ôn kinh tán hàn",
    "vi": "ôn kinh tán hàn",
    "en": "",
    "pinyin": "wēnjīng sànhán"
  },
  {
    "zh": "补阳",
    "hanviet": "bổ dương",
    "vi": "bổ dương",
    "en": "",
    "pinyin": "bǔyáng"
  },
  {
    "zh": "滋阴",
    "hanviet": "tư âm",
    "vi": "tư âm (bổ âm)",
    "en": "",
    "pinyin": "zīyīn"
  },
  {
    "zh": "药膳",
    "hanviet": "dược thiện",
    "vi": "thuốc và món ăn (dược thiện)",
    "en": "",
    "pinyin": "yàoshàn"
  },
  {
    "zh": "体质",
    "hanviet": "thể chất",
    "vi": "thể chất (constitution)",
    "en": "",
    "pinyin": "tǐzhì"
  },
  {
    "zh": "养生",
    "hanviet": "dưỡng sinh",
    "vi": "dưỡng sinh (health preservation)",
    "en": "",
    "pinyin": "yǎngshēng"
  },
  {
    "zh": "治未病",
    "hanviet": "trị vị bệnh",
    "vi": "trị bệnh chưa phát (phòng bệnh)",
    "en": "",
    "pinyin": "zhìwèibìng"
  },
  {
    "zh": "不良反应",
    "hanviet": "bất lương phản ứng",
    "vi": "phản ứng có hại (ADR)",
    "en": "",
    "pinyin": "bùliáng fǎnyìng"
  },
  {
    "zh": "药物不良反应",
    "hanviet": "dược vật bất lương phản ứng",
    "vi": "phản ứng có hại của thuốc",
    "en": "",
    "pinyin": "yàowù bùliáng fǎnyìng"
  },
  {
    "zh": "精气神",
    "hanviet": "tinh khí thần",
    "vi": "tinh-khí-thần (ba loại chất cơ bản của cơ thể)",
    "en": "jing, qi and shen",
    "pinyin": "jīng qì shén",
    "category": "dongy"
  },
  {
    "zh": "先天之精",
    "hanviet": "tiên thiên chi tinh",
    "vi": "tinh tiên thiên (bẩm sinh)",
    "en": "prenatal essence",
    "pinyin": "xiān tiān zhī jīng",
    "category": "dongy"
  },
  {
    "zh": "后天之精",
    "hanviet": "hậu thiên chi tinh",
    "vi": "tinh hậu thiên (từ thức ăn hóa sinh)",
    "en": "postnatal essence",
    "pinyin": "hòu tiān zhī jīng",
    "category": "dongy"
  },
  {
    "zh": "元阴元阳",
    "hanviet": "nguyên âm nguyên dương",
    "vi": "nguyên âm / nguyên dương (gốc âm dương của thận)",
    "en": "primordial yin and yang",
    "pinyin": "yuán yīn yuán yáng",
    "category": "dongy"
  },
  {
    "zh": "命门",
    "hanviet": "mệnh môn",
    "vi": "mệnh môn (cửa mệnh, nơi chứa nguyên hỏa)",
    "en": "life gate / mingmen",
    "pinyin": "mìng mén",
    "category": "dongy"
  },
  {
    "zh": "命门之火",
    "hanviet": "mệnh môn chi hỏa",
    "vi": "hỏa mệnh môn (dương khí gốc của cơ thể)",
    "en": "life-gate fire",
    "pinyin": "mìng mén zhī huǒ",
    "category": "dongy"
  },
  {
    "zh": "君火",
    "hanviet": "quân hỏa",
    "vi": "quân hỏa (hỏa của tâm)",
    "en": "monarch fire",
    "pinyin": "jūn huǒ",
    "category": "dongy"
  },
  {
    "zh": "相火",
    "hanviet": "tướng hỏa",
    "vi": "tướng hỏa (hỏa của can thận)",
    "en": "ministerial fire",
    "pinyin": "xiāng huǒ",
    "category": "dongy"
  },
  {
    "zh": "中气",
    "hanviet": "trung khí",
    "vi": "trung khí (khí của trung tiêu)",
    "en": "middle qi",
    "pinyin": "zhōng qì",
    "category": "dongy"
  },
  {
    "zh": "营气",
    "hanviet": "doanh khí",
    "vi": "doanh khí (khí dinh dưỡng chạy trong mạch)",
    "en": "nutritive qi (ying qi)",
    "pinyin": "yíng qì",
    "category": "dongy"
  },
  {
    "zh": "卫气",
    "hanviet": "vệ khí",
    "vi": "vệ khí (khí phòng vệ ngoài mạch)",
    "en": "defensive qi (wei qi)",
    "pinyin": "wèi qì",
    "category": "dongy"
  },
  {
    "zh": "宗气",
    "hanviet": "tông khí",
    "vi": "tông khí (khí tụ ở ngực)",
    "en": "pectoral/ancestral qi (zong qi)",
    "pinyin": "zōng qì",
    "category": "dongy"
  },
  {
    "zh": "元气",
    "hanviet": "nguyên khí",
    "vi": "nguyên khí (khí gốc của cơ thể)",
    "en": "primordial qi (yuan qi)",
    "pinyin": "yuán qì",
    "category": "dongy"
  },
  {
    "zh": "津液",
    "hanviet": "tân dịch",
    "vi": "tân dịch (dịch thể trong cơ thể)",
    "en": "body fluids",
    "pinyin": "jīn yè",
    "category": "dongy"
  },
  {
    "zh": "水谷精微",
    "hanviet": "thủy cốc tinh vi",
    "vi": "tinh chất từ thủy cốc (thức ăn)",
    "en": "essence of water and grain",
    "pinyin": "shuǐ gǔ jīng wēi",
    "category": "dongy"
  },
  {
    "zh": "上焦",
    "hanviet": "thượng tiêu",
    "vi": "thượng tiêu (vùng trên cơ hoành)",
    "en": "upper burner",
    "pinyin": "shàng jiāo",
    "category": "dongy"
  },
  {
    "zh": "中焦",
    "hanviet": "trung tiêu",
    "vi": "trung tiêu (vùng giữa, tỳ vị)",
    "en": "middle burner",
    "pinyin": "zhōng jiāo",
    "category": "dongy"
  },
  {
    "zh": "下焦",
    "hanviet": "hạ tiêu",
    "vi": "hạ tiêu (vùng dưới, thận bàng quang)",
    "en": "lower burner",
    "pinyin": "xià jiāo",
    "category": "dongy"
  },
  {
    "zh": "六淫",
    "hanviet": "lục dâm",
    "vi": "lục dâm (sáu tà khí: phong hàn thử thấp táo hỏa)",
    "en": "six exogenous pathogens",
    "pinyin": "liù yín",
    "category": "dongy"
  },
  {
    "zh": "风邪",
    "hanviet": "phong tà",
    "vi": "phong tà (tà khí phong)",
    "en": "wind pathogen",
    "pinyin": "fēng xié",
    "category": "dongy"
  },
  {
    "zh": "寒邪",
    "hanviet": "hàn tà",
    "vi": "hàn tà (tà khí hàn)",
    "en": "cold pathogen",
    "pinyin": "hán xié",
    "category": "dongy"
  },
  {
    "zh": "暑邪",
    "hanviet": "thử tà",
    "vi": "thử tà (tà khí thử/nóng hè)",
    "en": "summer-heat pathogen",
    "pinyin": "shǔ xié",
    "category": "dongy"
  },
  {
    "zh": "湿邪",
    "hanviet": "thấp tà",
    "vi": "thấp tà (tà khí thấp)",
    "en": "dampness pathogen",
    "pinyin": "shī xié",
    "category": "dongy"
  },
  {
    "zh": "燥邪",
    "hanviet": "táo tà",
    "vi": "táo tà (tà khí táo/khô)",
    "en": "dryness pathogen",
    "pinyin": "zào xié",
    "category": "dongy"
  },
  {
    "zh": "火邪",
    "hanviet": "hỏa tà",
    "vi": "hỏa tà (tà khí hỏa)",
    "en": "fire pathogen",
    "pinyin": "huǒ xié",
    "category": "dongy"
  },
  {
    "zh": "疫疠",
    "hanviet": "dịch lệ",
    "vi": "dịch lệ (bệnh dịch truyền nhiễm)",
    "en": "epidemic pestilence",
    "pinyin": "yì lì",
    "category": "dongy"
  },
  {
    "zh": "七情",
    "hanviet": "thất tình",
    "vi": "thất tình (bảy cảm xúc: hỷ nộ ưu tư bi khủng kinh)",
    "en": "seven emotions",
    "pinyin": "qī qíng",
    "category": "dongy"
  },
  {
    "zh": "瘀血",
    "hanviet": "ứ huyết",
    "vi": "ứ huyết (máu ứ trệ)",
    "en": "blood stasis",
    "pinyin": "yū xuè",
    "category": "dongy"
  },
  {
    "zh": "痰",
    "hanviet": "đàm",
    "vi": "đàm (đờm - sản phẩm bệnh lý)",
    "en": "phlegm",
    "pinyin": "tán",
    "category": "dongy"
  },
  {
    "zh": "五运六气",
    "hanviet": "ngũ vận lục khí",
    "vi": "ngũ vận lục khí (học thuyết vận khí)",
    "en": "five circuits and six qi",
    "pinyin": "wǔ yùn liù qì",
    "category": "dongy"
  },
  {
    "zh": "藏象",
    "hanviet": "tạng tượng",
    "vi": "tạng tượng (nghiên cứu nội tạng qua biểu hiện ngoài)",
    "en": "visceral manifestation (zangxiang)",
    "pinyin": "cáng xiàng",
    "category": "dongy"
  },
  {
    "zh": "奇恒之腑",
    "hanviet": "kỳ hành chi phủ",
    "vi": "kỳ hành chi phủ (não tủy xương mạch đảm nữ tử bào)",
    "en": "extraordinary fu organs",
    "pinyin": "qí héng zhī fǔ",
    "category": "dongy"
  },
  {
    "zh": "血脉",
    "hanviet": "huyết mạch",
    "vi": "huyết mạch (hệ mạch máu)",
    "en": "blood vessels",
    "pinyin": "xuè mài",
    "category": "dongy"
  },
  {
    "zh": "肾阳",
    "hanviet": "thận dương",
    "vi": "thận dương (dương khí của thận)",
    "en": "kidney yang",
    "pinyin": "shèn yáng",
    "category": "dongy"
  },
  {
    "zh": "肾阴",
    "hanviet": "thận âm",
    "vi": "thận âm (âm dịch của thận)",
    "en": "kidney yin",
    "pinyin": "shèn yīn",
    "category": "dongy"
  },
  {
    "zh": "脾阳",
    "hanviet": "tỳ dương",
    "vi": "tỳ dương (dương khí của tỳ)",
    "en": "spleen yang",
    "pinyin": "pí yáng",
    "category": "dongy"
  },
  {
    "zh": "肝气",
    "hanviet": "can khí",
    "vi": "can khí (khí của can)",
    "en": "liver qi",
    "pinyin": "gān qì",
    "category": "dongy"
  },
  {
    "zh": "肝阳",
    "hanviet": "can dương",
    "vi": "can dương (dương của can)",
    "en": "liver yang",
    "pinyin": "gān yáng",
    "category": "dongy"
  },
  {
    "zh": "肺气",
    "hanviet": "phế khí",
    "vi": "phế khí (khí của phế)",
    "en": "lung qi",
    "pinyin": "fèi qì",
    "category": "dongy"
  },
  {
    "zh": "心血",
    "hanviet": "tâm huyết",
    "vi": "tâm huyết (huyết của tâm)",
    "en": "heart blood",
    "pinyin": "xīn xuè",
    "category": "dongy"
  },
  {
    "zh": "心气",
    "hanviet": "tâm khí",
    "vi": "tâm khí (khí của tâm)",
    "en": "heart qi",
    "pinyin": "xīn qì",
    "category": "dongy"
  },
  {
    "zh": "胃气",
    "hanviet": "vị khí",
    "vi": "vị khí (khí của vị - quan trọng tiên thiên)",
    "en": "stomach qi",
    "pinyin": "wèi qì",
    "category": "dongy"
  },
  {
    "zh": "心主血脉",
    "hanviet": "tâm chủ huyết mạch",
    "vi": "tâm làm chủ huyết mạch",
    "en": "heart governs blood and vessels",
    "pinyin": "xīn zhǔ xuè mài",
    "category": "dongy"
  },
  {
    "zh": "心主神明",
    "hanviet": "tâm chủ thần minh",
    "vi": "tâm làm chủ tinh thần (thần minh)",
    "en": "heart governs spirit",
    "pinyin": "xīn zhǔ shén míng",
    "category": "dongy"
  },
  {
    "zh": "肝主疏泄",
    "hanviet": "can chủ sơ tiết",
    "vi": "can làm chủ sự điều đạt (sơ tiết)",
    "en": "liver governs free coursing",
    "pinyin": "gān zhǔ shū xiè",
    "category": "dongy"
  },
  {
    "zh": "肝藏血",
    "hanviet": "can tàng huyết",
    "vi": "can chứa/trữ huyết",
    "en": "liver stores blood",
    "pinyin": "gān cáng xuè",
    "category": "dongy"
  },
  {
    "zh": "脾主运化",
    "hanviet": "tỳ chủ vận hóa",
    "vi": "tỳ làm chủ vận chuyển tiêu hóa",
    "en": "spleen governs transportation/transformation",
    "pinyin": "pí zhǔ yùn huà",
    "category": "dongy"
  },
  {
    "zh": "脾统血",
    "hanviet": "tỳ thống huyết",
    "vi": "tỳ nhiếp/thống huyết (giữ máu trong mạch)",
    "en": "spleen commands blood",
    "pinyin": "pí tǒng xuè",
    "category": "dongy"
  },
  {
    "zh": "肺主宣发",
    "hanviet": "phế chủ tuyên phát",
    "vi": "phế làm chủ sự tuyên phát (tán khí ra ngoài)",
    "en": "lung governs dissemination",
    "pinyin": "fèi zhǔ xuān fā",
    "category": "dongy"
  },
  {
    "zh": "肺主肃降",
    "hanviet": "phế chủ túc giáng",
    "vi": "phế làm chủ sự túc giáng (thanh giáng)",
    "en": "lung governs descent",
    "pinyin": "fèi zhǔ sù jiàng",
    "category": "dongy"
  },
  {
    "zh": "肺朝百脉",
    "hanviet": "phế triều bách mạch",
    "vi": "phế hội tụ trăm mạch",
    "en": "lung faces the hundred vessels",
    "pinyin": "fèi cháo bǎi mài",
    "category": "dongy"
  },
  {
    "zh": "肾藏精",
    "hanviet": "thận tàng tinh",
    "vi": "thận chứa tinh",
    "en": "kidney stores essence",
    "pinyin": "shèn cáng jīng",
    "category": "dongy"
  },
  {
    "zh": "肾主纳气",
    "hanviet": "thận chủ nạp khí",
    "vi": "thận làm chủ sự thu nạp khí",
    "en": "kidney governs qi reception",
    "pinyin": "shèn zhǔ nà qì",
    "category": "dongy"
  },
  {
    "zh": "肾主水",
    "hanviet": "thận chủ thủy",
    "vi": "thận làm chủ sự thủy (nước)",
    "en": "kidney governs water",
    "pinyin": "shèn zhǔ shuǐ",
    "category": "dongy"
  },
  {
    "zh": "心包络",
    "hanviet": "tâm bào lạc",
    "vi": "tâm bào lạc (mạng bọc tim)",
    "en": "pericardium",
    "pinyin": "xīn bāo luò",
    "category": "dongy"
  },
  {
    "zh": "女子胞",
    "hanviet": "nữ tử bào",
    "vi": "nữ tử bào (tử cung)",
    "en": "uterus",
    "pinyin": "nǚ zǐ bāo",
    "category": "dongy"
  },
  {
    "zh": "后天之本",
    "hanviet": "hậu thiên chi bản",
    "vi": "gốc hậu thiên (chỉ tỳ)",
    "en": "root of acquired constitution",
    "pinyin": "hòu tiān zhī běn",
    "category": "dongy"
  },
  {
    "zh": "先天之本",
    "hanviet": "tiên thiên chi bản",
    "vi": "gốc tiên thiên (chỉ thận)",
    "en": "root of prenatal constitution",
    "pinyin": "xiān tiān zhī běn",
    "category": "dongy"
  },
  {
    "zh": "相傅之官",
    "hanviet": "tương phó chi quan",
    "vi": "chức quan phụ tá (chỉ phế)",
    "en": "official of assistance (lung)",
    "pinyin": "xiāng fù zhī guān",
    "category": "dongy"
  },
  {
    "zh": "将军之官",
    "hanviet": "tương quân chi quan",
    "vi": "chức quan tướng quân (chỉ can)",
    "en": "official of the general (liver)",
    "pinyin": "jiāng jūn zhī guān",
    "category": "dongy"
  },
  {
    "zh": "仓廪之官",
    "hanviet": "thương lẫm chi quan",
    "vi": "chức quan kho lẫm (chỉ tỳ)",
    "en": "official of the granary (spleen)",
    "pinyin": "cāng lǐn zhī guān",
    "category": "dongy"
  },
  {
    "zh": "膀胱",
    "hanviet": "bàng quang",
    "vi": "bàng quang",
    "en": "urinary bladder",
    "pinyin": "páng guāng",
    "category": "dongy"
  },
  {
    "zh": "三焦气化",
    "hanviet": "tam tiêu khí hóa",
    "vi": "khí hóa của tam tiêu",
    "en": "qi transformation of triple burner",
    "pinyin": "sān jiāo qì huà",
    "category": "dongy"
  },
  {
    "zh": "经脉",
    "hanviet": "kinh mạch",
    "vi": "kinh mạch (trục chính)",
    "en": "meridians (jing)",
    "pinyin": "jīng mài",
    "category": "dongy"
  },
  {
    "zh": "络脉",
    "hanviet": "lạc mạch",
    "vi": "lạc mạch (nhánh phụ)",
    "en": "collaterals (luo)",
    "pinyin": "luò mài",
    "category": "dongy"
  },
  {
    "zh": "十二经脉",
    "hanviet": "thập nhị kinh mạch",
    "vi": "mười hai kinh mạch chính",
    "en": "twelve main meridians",
    "pinyin": "shí èr jīng mài",
    "category": "dongy"
  },
  {
    "zh": "奇经八脉",
    "hanviet": "kỳ kinh bát mạch",
    "vi": "tám mạch đặc biệt",
    "en": "eight extraordinary meridians",
    "pinyin": "qí jīng bā mài",
    "category": "dongy"
  },
  {
    "zh": "任脉",
    "hanviet": "nhâm mạch",
    "vi": "kinh Nhâm (âm, chạy trước bụng)",
    "en": "conception vessel (Ren)",
    "pinyin": "rèn mài",
    "category": "dongy"
  },
  {
    "zh": "督脉",
    "hanviet": "đốc mạch",
    "vi": "kinh Đốc (dương, chạy sau lưng)",
    "en": "governing vessel (Du)",
    "pinyin": "dū mài",
    "category": "dongy"
  },
  {
    "zh": "冲脉",
    "hanviet": "xung mạch",
    "vi": "kinh Xung (hải của mạch)",
    "en": "thoroughfare vessel (Chong)",
    "pinyin": "chōng mài",
    "category": "dongy"
  },
  {
    "zh": "带脉",
    "hanviet": "đới mạch",
    "vi": "kinh Đới (vòng quanh eo)",
    "en": "belt vessel (Dai)",
    "pinyin": "dài mài",
    "category": "dongy"
  },
  {
    "zh": "阴阳跷脉",
    "hanviet": "âm dương kiều mạch",
    "vi": "âm kiều và dương kiều mạch",
    "en": "yin and yang heel vessels",
    "pinyin": "yīn yáng qiāo mài",
    "category": "dongy"
  },
  {
    "zh": "阴阳维脉",
    "hanviet": "âm dương duy mạch",
    "vi": "âm duy và dương duy mạch",
    "en": "yin and yang linking vessels",
    "pinyin": "yīn yáng wéi mài",
    "category": "dongy"
  },
  {
    "zh": "手太阴肺经",
    "hanviet": "thủ thái âm phế kinh",
    "vi": "kinh Phế (thủ thái âm)",
    "en": "lung meridian (LU)",
    "pinyin": "shǒu tài yīn fèi jīng",
    "category": "dongy"
  },
  {
    "zh": "手阳明大肠经",
    "hanviet": "thủ dương minh đại trường kinh",
    "vi": "kinh Đại trường (thủ dương minh)",
    "en": "large intestine meridian (LI)",
    "pinyin": "shǒu yáng míng dà cháng jīng",
    "category": "dongy"
  },
  {
    "zh": "足阳明胃经",
    "hanviet": "túc dương minh vị kinh",
    "vi": "kinh Vị (túc dương minh)",
    "en": "stomach meridian (ST)",
    "pinyin": "zú yáng míng wèi jīng",
    "category": "dongy"
  },
  {
    "zh": "足太阴脾经",
    "hanviet": "túc thái âm tỳ kinh",
    "vi": "kinh Tỳ (túc thái âm)",
    "en": "spleen meridian (SP)",
    "pinyin": "zú tài yīn pí jīng",
    "category": "dongy"
  },
  {
    "zh": "手少阴心经",
    "hanviet": "thủ thiếu âm tâm kinh",
    "vi": "kinh Tâm (thủ thiếu âm)",
    "en": "heart meridian (HT)",
    "pinyin": "shǒu shǎo yīn xīn jīng",
    "category": "dongy"
  },
  {
    "zh": "手太阳小肠经",
    "hanviet": "thủ thái dương tiểu trường kinh",
    "vi": "kinh Tiểu trường (thủ thái dương)",
    "en": "small intestine meridian (SI)",
    "pinyin": "shǒu tài yáng xiǎo cháng jīng",
    "category": "dongy"
  },
  {
    "zh": "足太阳膀胱经",
    "hanviet": "túc thái dương bàng quang kinh",
    "vi": "kinh Bàng quang (túc thái dương)",
    "en": "bladder meridian (BL)",
    "pinyin": "zú tài yáng páng guāng jīng",
    "category": "dongy"
  },
  {
    "zh": "足少阴肾经",
    "hanviet": "túc thiếu âm thận kinh",
    "vi": "kinh Thận (túc thiếu âm)",
    "en": "kidney meridian (KI)",
    "pinyin": "zú shǎo yīn shèn jīng",
    "category": "dongy"
  },
  {
    "zh": "手厥阴心包经",
    "hanviet": "thủ quyết âm tâm bào kinh",
    "vi": "kinh Tâm bào (thủ quyết âm)",
    "en": "pericardium meridian (PC)",
    "pinyin": "shǒu jué yīn xīn bāo jīng",
    "category": "dongy"
  },
  {
    "zh": "手少阳三焦经",
    "hanviet": "thủ thiếu dương tam tiêu kinh",
    "vi": "kinh Tam tiêu (thủ thiếu dương)",
    "en": "triple burner meridian (TB)",
    "pinyin": "shǒu shǎo yáng sān jiāo jīng",
    "category": "dongy"
  },
  {
    "zh": "足少阳胆经",
    "hanviet": "túc thiếu dương đảm kinh",
    "vi": "kinh Đảm (túc thiếu dương)",
    "en": "gallbladder meridian (GB)",
    "pinyin": "zú shǎo yáng dǎn jīng",
    "category": "dongy"
  },
  {
    "zh": "足厥阴肝经",
    "hanviet": "túc quyết âm can kinh",
    "vi": "kinh Can (túc quyết âm)",
    "en": "liver meridian (LR)",
    "pinyin": "zú jué yīn gān jīng",
    "category": "dongy"
  },
  {
    "zh": "腧穴",
    "hanviet": "du huyệt",
    "vi": "du huyệt (huyệt đạo)",
    "en": "acupoint (shu point)",
    "pinyin": "shù xué",
    "category": "dongy"
  },
  {
    "zh": "经穴",
    "hanviet": "kinh huyệt",
    "vi": "huyệt thuộc đường kinh",
    "en": "meridian acupoint",
    "pinyin": "jīng xué",
    "category": "dongy"
  },
  {
    "zh": "阿是穴",
    "hanviet": "a thị huyệt",
    "vi": "a thị huyệt (huyệt đau chỗ, không cố định)",
    "en": "ashi point / trigger point",
    "pinyin": "ā shì xué",
    "category": "dongy"
  },
  {
    "zh": "井荥输经合",
    "hanviet": "tỉnh huỳnh du kinh hợp",
    "vi": "năm loại huyệt ngũ du (tỉnh huỳnh du kinh hợp)",
    "en": "five shu points (jing/ying/shu/jing/he)",
    "pinyin": "jǐng xíng shū jīng hé",
    "category": "dongy"
  },
  {
    "zh": "原穴",
    "hanviet": "nguyên huyệt",
    "vi": "nguyên huyệt (huyệt nguồn)",
    "en": "source point (yuan)",
    "pinyin": "yuán xué",
    "category": "dongy"
  },
  {
    "zh": "络穴",
    "hanviet": "lạc huyệt",
    "vi": "lạc huyệt (huyệt nối)",
    "en": "connecting point (luo)",
    "pinyin": "luò xué",
    "category": "dongy"
  },
  {
    "zh": "郄穴",
    "hanviet": "khích huyệt",
    "vi": "khích huyệt (huyệt kẽ)",
    "en": "cleft point (xi)",
    "pinyin": "qiè xué",
    "category": "dongy"
  },
  {
    "zh": "浮脉",
    "hanviet": "phù mạch",
    "vi": "mạch phù (nông)",
    "en": "floating pulse",
    "pinyin": "fú mài",
    "category": "dongy"
  },
  {
    "zh": "沉脉",
    "hanviet": "trầm mạch",
    "vi": "mạch trầm (sâu)",
    "en": "deep/sunken pulse",
    "pinyin": "chén mài",
    "category": "dongy"
  },
  {
    "zh": "迟脉",
    "hanviet": "trì mạch",
    "vi": "mạch trì (chậm)",
    "en": "slow pulse",
    "pinyin": "chí mài",
    "category": "dongy"
  },
  {
    "zh": "数脉",
    "hanviet": "sác mạch",
    "vi": "mạch sác (nhanh)",
    "en": "rapid pulse",
    "pinyin": "shù mài",
    "category": "dongy"
  },
  {
    "zh": "弦脉",
    "hanviet": "huyền mạch",
    "vi": "mạch huyền (căng như dây đàn)",
    "en": "wiry pulse",
    "pinyin": "xián mài",
    "category": "dongy"
  },
  {
    "zh": "滑脉",
    "hanviet": "hoạt mạch",
    "vi": "mạch hoạt (trơn)",
    "en": "slippery pulse",
    "pinyin": "huá mài",
    "category": "dongy"
  },
  {
    "zh": "涩脉",
    "hanviet": "sáp mạch",
    "vi": "mạch sáp (trắc trở)/sáp",
    "en": "choppy/hesitant pulse",
    "pinyin": "sè mài",
    "category": "dongy"
  },
  {
    "zh": "细脉",
    "hanviet": "tế mạch",
    "vi": "mạch tế (nhỏ)",
    "en": "thin/thready pulse",
    "pinyin": "xì mài",
    "category": "dongy"
  },
  {
    "zh": "洪脉",
    "hanviet": "hồng mạch",
    "vi": "mạch hồng (lớn, tràn đầy)",
    "en": "flooding pulse",
    "pinyin": "hóng mài",
    "category": "dongy"
  },
  {
    "zh": "紧脉",
    "hanviet": "khẩn mạch",
    "vi": "mạch khẩn (căng căng)",
    "en": "tense/tight pulse",
    "pinyin": "jǐn mài",
    "category": "dongy"
  },
  {
    "zh": "濡脉",
    "hanviet": "nhu mạch",
    "vi": "mạch nhu (mềm, nhuyễn)",
    "en": "soggy/soft pulse",
    "pinyin": "rú mài",
    "category": "dongy"
  },
  {
    "zh": "芤脉",
    "hanviet": "khấu mạch",
    "vi": "mạch khấu (rỗng như hành)",
    "en": "hollow pulse",
    "pinyin": "kōu mài",
    "category": "dongy"
  },
  {
    "zh": "代脉",
    "hanviet": "đại mạch",
    "vi": "mạch đại (ngắt quãng đều)",
    "en": "intermittent pulse",
    "pinyin": "dài mài",
    "category": "dongy"
  },
  {
    "zh": "结脉",
    "hanviet": "kết mạch",
    "vi": "mạch kết (ngắt quãng không đều chậm)",
    "en": "knotted pulse",
    "pinyin": "jié mài",
    "category": "dongy"
  },
  {
    "zh": "促脉",
    "hanviet": "xúc mạch",
    "vi": "mạch xúc (ngắt quãng nhanh)",
    "en": "abrupt/hasty pulse",
    "pinyin": "cù mài",
    "category": "dongy"
  },
  {
    "zh": "寸关尺",
    "hanviet": "thốn quan xích",
    "vi": "thốn-quan-xích (ba vị trí bắt mạch ở cổ tay)",
    "en": "cun-guan-chi pulse positions",
    "pinyin": "cùn guān chǐ",
    "category": "dongy"
  },
  {
    "zh": "脉象",
    "hanviet": "mạch tượng",
    "vi": "mạch tượng (hình tượng của mạch)",
    "en": "pulse image",
    "pinyin": "mài xiàng",
    "category": "dongy"
  },
  {
    "zh": "舌质",
    "hanviet": "thiệt chất",
    "vi": "chất lưỡi (thân lưỡi)",
    "en": "tongue body",
    "pinyin": "shé zhì",
    "category": "dongy"
  },
  {
    "zh": "舌苔",
    "hanviet": "thiệt đài",
    "vi": "rêu lưỡi (đài lưỡi)",
    "en": "tongue coating",
    "pinyin": "shé tāi",
    "category": "dongy"
  },
  {
    "zh": "淡红舌",
    "hanviet": "đạm hồng thiệt",
    "vi": "lưỡi hồng nhạt (bình thường)",
    "en": "pale-red tongue",
    "pinyin": "dàn hóng shé",
    "category": "dongy"
  },
  {
    "zh": "红舌",
    "hanviet": "hồng thiệt",
    "vi": "lưỡi đỏ (nhiệt)",
    "en": "red tongue",
    "pinyin": "hóng shé",
    "category": "dongy"
  },
  {
    "zh": "绛舌",
    "hanviet": "giáng thiệt",
    "vi": "lưỡi giáng/tím đỏ (nhiệt nặng)",
    "en": "crimson tongue",
    "pinyin": "jiàng shé",
    "category": "dongy"
  },
  {
    "zh": "紫舌",
    "hanviet": "tử thiệt",
    "vi": "lưỡi tím (ứ huyết)",
    "en": "purple tongue",
    "pinyin": "zǐ shé",
    "category": "dongy"
  },
  {
    "zh": "胖大舌",
    "hanviet": "bạng đại thiệt",
    "vi": "lưỡi to bè (thấp, khí hư)",
    "en": "swollen tongue",
    "pinyin": "pàng dà shé",
    "category": "dongy"
  },
  {
    "zh": "齿痕",
    "hanviet": "xỉ ngân",
    "vi": "dấu răng (trên lưỡi)",
    "en": "tooth-marked tongue",
    "pinyin": "chǐ hén",
    "category": "dongy"
  },
  {
    "zh": "裂纹舌",
    "hanviet": "liệt văn thiệt",
    "vi": "lưỡi nứt (tân dịch hao)",
    "en": "cracked tongue",
    "pinyin": "liè wén shé",
    "category": "dongy"
  },
  {
    "zh": "白苔",
    "hanviet": "bạch đài",
    "vi": "rêu trắng",
    "en": "white coating",
    "pinyin": "bái tái",
    "category": "dongy"
  },
  {
    "zh": "黄苔",
    "hanviet": "hoàng đài",
    "vi": "rêu vàng (nhiệt)",
    "en": "yellow coating",
    "pinyin": "huáng tái",
    "category": "dongy"
  },
  {
    "zh": "腻苔",
    "hanviet": "nị đài",
    "vi": "rêu nị/nhớt (thấp trọc)",
    "en": "greasy coating",
    "pinyin": "nì tái",
    "category": "dongy"
  },
  {
    "zh": "阴阳辨证",
    "hanviet": "âm dương biện chứng",
    "vi": "biện chứng âm dương",
    "en": "yin-yang differentiation",
    "pinyin": "yīn yáng biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "表里辨证",
    "hanviet": "biểu lý biện chứng",
    "vi": "biện chứng biểu lý (nông sâu)",
    "en": "exterior-interior differentiation",
    "pinyin": "biǎo lǐ biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "寒热辨证",
    "hanviet": "hàn nhiệt biện chứng",
    "vi": "biện chứng hàn nhiệt (lạnh nóng)",
    "en": "cold-heat differentiation",
    "pinyin": "hán rè biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "虚实辨证",
    "hanviet": "hư thực biện chứng",
    "vi": "biện chứng hư thực (thiếu thừa)",
    "en": "deficiency-excess differentiation",
    "pinyin": "xū shí biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "气血津液辨证",
    "hanviet": "khí huyết tân dịch biện chứng",
    "vi": "biện chứng khí huyết tân dịch",
    "en": "qi-blood-fluid differentiation",
    "pinyin": "qì xuè jīn yè biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "卫气营血辨证",
    "hanviet": "vệ khí doanh huyết biện chứng",
    "vi": "biện chứng vệ-khí-doanh-huyết (ông bệnh)",
    "en": "defensive-qi-nutritive-blood differentiation",
    "pinyin": "wèi qì yíng xuè biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "三焦辨证",
    "hanviet": "tam tiêu biện chứng",
    "vi": "biện chứng tam tiêu (bệnh ôn)",
    "en": "triple-burner differentiation",
    "pinyin": "sān jiāo biàn zhèng",
    "category": "dongy"
  },
  {
    "zh": "辨证求因",
    "hanviet": "biện chứng cầu nhân",
    "vi": "biện chứng tìm nguyên nhân",
    "en": "differentiation to seek cause",
    "pinyin": "biàn zhèng qiú yīn",
    "category": "dongy"
  },
  {
    "zh": "审因论治",
    "hanviet": "thẩm nhân luận trị",
    "vi": "thẩm nhân luận trị (xét nhân rồi trị)",
    "en": "treatment based on cause",
    "pinyin": "shěn yīn lùn zhì",
    "category": "dongy"
  },
  {
    "zh": "病机",
    "hanviet": "bệnh cơ",
    "vi": "bệnh cơ (cơ chế bệnh)",
    "en": "pathomechanism",
    "pinyin": "bìng jī",
    "category": "dongy"
  },
  {
    "zh": "正邪",
    "hanviet": "chính tà",
    "vi": "chính tà (chính khí và tà khí)",
    "en": "upright and pathogenic qi",
    "pinyin": "zhèng xié",
    "category": "dongy"
  },
  {
    "zh": "正虚",
    "hanviet": "chính hư",
    "vi": "chính hư (chính khí suy)",
    "en": "deficiency of upright qi",
    "pinyin": "zhèng xū",
    "category": "dongy"
  },
  {
    "zh": "邪实",
    "hanviet": "tà thực",
    "vi": "tà thực (tà khí thịnh)",
    "en": "excess of pathogenic qi",
    "pinyin": "xié shí",
    "category": "dongy"
  },
  {
    "zh": "标本兼治",
    "hanviet": "tiêu bản kiêm trị",
    "vi": "trị cả tiêu lẫn bản",
    "en": "treat both branch and root",
    "pinyin": "biāo běn jiān zhì",
    "category": "dongy"
  },
  {
    "zh": "急则治标",
    "hanviet": "cấp tắc trị tiêu",
    "vi": "cấp thì trị tiêu (trị ngọn trước)",
    "en": "treat branch in acute",
    "pinyin": "jí zé zhì biāo",
    "category": "dongy"
  },
  {
    "zh": "缓则治本",
    "hanviet": "hoãn tắc trị bản",
    "vi": "hoãn thì trị bản (trị gốc)",
    "en": "treat root in chronic",
    "pinyin": "huǎn zé zhì běn",
    "category": "dongy"
  },
  {
    "zh": "君药",
    "hanviet": "quân dược",
    "vi": "quân dược (vị thuốc chủ)",
    "en": "monarch drug",
    "pinyin": "jūn yào",
    "category": "dongy"
  },
  {
    "zh": "臣药",
    "hanviet": "thần dược",
    "vi": "thần dược (vị thuốc phụ trợ)",
    "en": "minister drug",
    "pinyin": "chén yào",
    "category": "dongy"
  },
  {
    "zh": "佐药",
    "hanviet": "tá dược",
    "vi": "tá dược (vị thuốc hỗ trợ)",
    "en": "assistant drug",
    "pinyin": "zuǒ yào",
    "category": "dongy"
  },
  {
    "zh": "使药",
    "hanviet": "sứ dược",
    "vi": "sứ dược (vị thuốc dẫn)",
    "en": "envoy drug",
    "pinyin": "shǐ yào",
    "category": "dongy"
  },
  {
    "zh": "功效",
    "hanviet": "công hiệu",
    "vi": "công hiệu (hiệu quả của thuốc)",
    "en": "functions/actions",
    "pinyin": "gōng xiào",
    "category": "dongy"
  },
  {
    "zh": "主治",
    "hanviet": "chủ trị",
    "vi": "chủ trị (bệnh chính điều trị)",
    "en": "indications",
    "pinyin": "zhǔ zhì",
    "category": "dongy"
  },
  {
    "zh": "炮制",
    "hanviet": "bào chế",
    "vi": "bào chế (chế biến thuốc)",
    "en": "processing (paozhi)",
    "pinyin": "páo zhì",
    "category": "dongy"
  },
  {
    "zh": "性味",
    "hanviet": "tính vị",
    "vi": "tính vị (tính và vị thuốc)",
    "en": "nature and flavor",
    "pinyin": "xìng wèi",
    "category": "dongy"
  },
  {
    "zh": "道地药材",
    "hanviet": "đạo địa dược tài",
    "vi": "dược liệu đạo địa (vùng sản xuất chuẩn)",
    "en": "geo-authentic medicinal herbs",
    "pinyin": "dào dì yào cái",
    "category": "dongy"
  },
  {
    "zh": "煎药",
    "hanviet": "tiễn dược",
    "vi": "sắc thuốc",
    "en": "decoction preparation",
    "pinyin": "jiān yào",
    "category": "dongy"
  },
  {
    "zh": "服法",
    "hanviet": "phục pháp",
    "vi": "cách dùng thuốc",
    "en": "administration method",
    "pinyin": "fú fǎ",
    "category": "dongy"
  },
  {
    "zh": "禁忌",
    "hanviet": "cấm kỵ",
    "vi": "cấm kỵ (chống chỉ định)",
    "en": "contraindications",
    "pinyin": "jìn jì",
    "category": "dongy"
  },
  {
    "zh": "剂量",
    "hanviet": "tế lượng",
    "vi": "liều lượng (thuốc)",
    "en": "dosage",
    "pinyin": "jì liàng",
    "category": "dongy"
  },
  {
    "zh": "复方",
    "hanviet": "phức phương",
    "vi": "phức phương (bài thuốc nhiều vị)",
    "en": "compound formula",
    "pinyin": "fù fāng",
    "category": "dongy"
  },
  {
    "zh": "单方",
    "hanviet": "đơn phương",
    "vi": "đơn phương (bài thuốc một vị)",
    "en": "single-ingredient formula",
    "pinyin": "dān fāng",
    "category": "dongy"
  },
  {
    "zh": "黄帝内经",
    "hanviet": "hoàng đế nội kinh",
    "vi": "Hoàng Đế Nội Kinh (kinh điển nền tảng)",
    "en": "Huangdi Neijing / Yellow Emperor's Inner Canon",
    "pinyin": "huáng dì nèi jīng",
    "category": "dongy"
  },
  {
    "zh": "难经",
    "hanviet": "nạn kinh",
    "vi": "Nạn Kinh (vấn đáp kinh điển)",
    "en": "Nan Jing / Classic of Difficulties",
    "pinyin": "nán jīng",
    "category": "dongy"
  },
  {
    "zh": "伤寒论",
    "hanviet": "thương hàn luận",
    "vi": "Thương Hàn Luận (Trương Trọng Cảnh)",
    "en": "Shanghan Lun / Treatise on Cold Damage",
    "pinyin": "shāng hán lùn",
    "category": "dongy"
  },
  {
    "zh": "金匮要略",
    "hanviet": "kim quỹ yếu lược",
    "vi": "Kim Quỹ Yếu Lược (Trương Trọng Cảnh)",
    "en": "Jingui Yaolue / Synopsis of Golden Chamber",
    "pinyin": "jīn kuì yào lüè",
    "category": "dongy"
  },
  {
    "zh": "神农本草经",
    "hanviet": "thần nông bản thảo kinh",
    "vi": "Thần Nông Bản Thảo Kinh",
    "en": "Shennong Bencao Jing / Divine Farmer's Materia Medica",
    "pinyin": "shén nóng běn cǎo jīng",
    "category": "dongy"
  },
  {
    "zh": "本草纲目",
    "hanviet": "bản thảo cương mục",
    "vi": "Bản Thảo Cương Mục (Lý Thời Trân)",
    "en": "Bencao Gangmu / Compendium of Materia Medica",
    "pinyin": "běn cǎo gāng mù",
    "category": "dongy"
  },
  {
    "zh": "温病条辨",
    "hanviet": "ôn bệnh điều biện",
    "vi": "Ôn Bệnh Điều Biện (Ngô Cúc Thông)",
    "en": "Wenbing Tiaobian / Systematic Differentiation of Warm Disease",
    "pinyin": "wēn bìng tiáo biàn",
    "category": "dongy"
  },
  {
    "zh": "温热论",
    "hanviet": "ôn nhiệt luận",
    "vi": "Ôn Nhiệt Luận (Diệp Thiên Sĩ)",
    "en": "Wenre Lun / Treatise on Warm-heat",
    "pinyin": "wēn rè lùn",
    "category": "dongy"
  },
  {
    "zh": "针灸甲乙经",
    "hanviet": "châm cứu giáp ất kinh",
    "vi": "Châm Cứu Giáp Ất Kinh",
    "en": "Zhenjiu Jiayi Jing / A-B Classic of Acupuncture",
    "pinyin": "zhēn jiǔ jiǎ yǐ jīng",
    "category": "dongy"
  },
  {
    "zh": "脉经",
    "hanviet": "mạch kinh",
    "vi": "Mạch Kinh (Vương Thúc Hòa)",
    "en": "Mai Jing / Pulse Classic",
    "pinyin": "mài jīng",
    "category": "dongy"
  },
  {
    "zh": "肘后方",
    "hanviet": "chẩu hậu phương",
    "vi": "Chẩu Hậu Phương (Cát Hồng)",
    "en": "Zhouhou Fang / Emergency Formulary",
    "pinyin": "zhǒu hòu fāng",
    "category": "dongy"
  },
  {
    "zh": "千金要方",
    "hanviet": "thiên kim yếu phương",
    "vi": "Thiên Kim Yếu Phương (Tôn Tư Mạc)",
    "en": "Qianjin Yaofang",
    "pinyin": "qiān jīn yào fāng",
    "category": "dongy"
  },
  {
    "zh": "诸病源候论",
    "hanviet": "chư bệnh nguyên hầu luận",
    "vi": "Chư Bệnh Nguyên Hầu Luận (đàm luận bệnh nguyên)",
    "en": "Zhubing Yuanhou Lun",
    "pinyin": "zhū bìng yuán hòu lùn",
    "category": "dongy"
  },
  {
    "zh": "汤头歌诀",
    "hanviet": "thang đầu ca quyết",
    "vi": "Thang Đầu Ca Quyết (bài ca về phương thuốc)",
    "en": "Tangtou Gejue",
    "pinyin": "tāng tóu gē jué",
    "category": "dongy"
  },
  {
    "zh": "方书之祖",
    "hanviet": "phương thư chi tổ",
    "vi": "tổ của các sách phương (chỉ Thương Hàn Tạp Bệnh Luận)",
    "en": "ancestor of formula books",
    "pinyin": "fāng shū zhī zǔ",
    "category": "dongy"
  },
  {
    "zh": "医案",
    "hanviet": "y án",
    "vi": "y án (bệnh án y học)",
    "en": "medical case record",
    "pinyin": "yī àn",
    "category": "dongy"
  },
  {
    "zh": "各家学说",
    "hanviet": "các gia học thuyết",
    "vi": "các gia học thuyết (các trường phái)",
    "en": "doctrines of various schools",
    "pinyin": "gè jiā xué shuō",
    "category": "dongy"
  },
  {
    "zh": "金元四大家",
    "hanviet": "kim nguyên tứ đại gia",
    "vi": "tứ đại gia đời Kim-Nguyên (Lưu Tố Nghị, Trương Tùng Chính, Lý Cao, Chu Đan Khê)",
    "en": "four great masters of Jin-Yuan",
    "pinyin": "jīn yuán sì dà jiā",
    "category": "dongy"
  },
  {
    "zh": "丹溪学派",
    "hanviet": "đan khê học phái",
    "vi": "phái Đan Khê (chu trấn hanh, trọng tư âm)",
    "en": "Zhu Danxi school",
    "pinyin": "dān xī xué pài",
    "category": "dongy"
  },
  {
    "zh": "温补学派",
    "hanviet": "ôn bổ học phái",
    "vi": "phái ôn bổ (ôn bổ thận dương)",
    "en": "warming-tonifying school",
    "pinyin": "wēn bǔ xué pài",
    "category": "dongy"
  },
  {
    "zh": "滋阴派",
    "hanviet": "tư âm phái",
    "vi": "phái tư âm (bồi âm)",
    "en": "nourishing-yin school",
    "pinyin": "zī yīn pài",
    "category": "dongy"
  },
  {
    "zh": "攻邪派",
    "hanviet": "công tà phái",
    "vi": "phái công tà (trục tà)",
    "en": "attacking-pathogen school",
    "pinyin": "gōng xié pài",
    "category": "dongy"
  },
  {
    "zh": "补土派",
    "hanviet": "bổ thổ phái",
    "vi": "phái bổ thổ (bồi tỳ)",
    "en": "tonifying-earth school",
    "pinyin": "bǔ tǔ pài",
    "category": "dongy"
  },
  {
    "zh": "寒凉派",
    "hanviet": "hàn lương phái",
    "vi": "phái hàn lương (dùng thuốc mát)",
    "en": "cold-cooling school",
    "pinyin": "hán liáng pài",
    "category": "dongy"
  },
  {
    "zh": "导引",
    "hanviet": "đạo dẫn",
    "vi": "đạo dẫn (bài tập dẫn khí)",
    "en": "daoyin / guided exercises",
    "pinyin": "dǎo yǐn",
    "category": "dongy"
  },
  {
    "zh": "气功",
    "hanviet": "khí công",
    "vi": "khí công",
    "en": "qigong",
    "pinyin": "qì gōng",
    "category": "dongy"
  },
  {
    "zh": "刮痧",
    "hanviet": "quát sa",
    "vi": "cạo gió (quát sa)",
    "en": "gua sha / scraping",
    "pinyin": "guā shā",
    "category": "dongy"
  },
  {
    "zh": "拔罐",
    "hanviet": "bạt quán",
    "vi": "giác hơi (bạt quán)",
    "en": "cupping",
    "pinyin": "bá guàn",
    "category": "dongy"
  },
  {
    "zh": "刺血",
    "hanviet": "thích huyết",
    "vi": "chích máu (thả huyết)",
    "en": "bloodletting",
    "pinyin": "cì xuè",
    "category": "dongy"
  },
  {
    "zh": "耳穴",
    "hanviet": "nhĩ huyệt",
    "vi": "huyệt tai (nhĩ huyệt liệu pháp)",
    "en": "auricular points",
    "pinyin": "ěr xué",
    "category": "dongy"
  },
  {
    "zh": "灸法",
    "hanviet": "cứu pháp",
    "vi": "phép cứu (cứu pháp)",
    "en": "moxibustion therapy",
    "pinyin": "jiǔ fǎ",
    "category": "dongy"
  },
  {
    "zh": "温针灸",
    "hanviet": "ôn châm cứu",
    "vi": "ôn châm cứu (châm kết hợp cứu)",
    "en": "warm acupuncture",
    "pinyin": "wēn zhēn jiǔ",
    "category": "dongy"
  },
  {
    "zh": "电针",
    "hanviet": "điện châm",
    "vi": "điện châm (châm có kích thích điện)",
    "en": "electroacupuncture",
    "pinyin": "diàn zhēn",
    "category": "dongy"
  },
  {
    "zh": "火罐",
    "hanviet": "hỏa quán",
    "vi": "giác hơi lửa (hỏa quán)",
    "en": "fire cupping",
    "pinyin": "huǒ guàn",
    "category": "dongy"
  },
  {
    "zh": "补泻",
    "hanviet": "bổ tả",
    "vi": "bổ tả (bổ và tả trong châm cứu)",
    "en": "tonifying and reducing",
    "pinyin": "bǔ xiè",
    "category": "dongy"
  },
  {
    "zh": "迎随补泻",
    "hanviet": "nghênh tùy bổ tả",
    "vi": "nghênh tùy bổ tả (bổ tả theo chiều kinh)",
    "en": "along/against meridian tonify-reduce",
    "pinyin": "yíng suí bǔ xiè",
    "category": "dongy"
  },
  {
    "zh": "循证医学",
    "hanviet": "tuần chứng y học",
    "vi": "y học dựa trên bằng chứng (EBM)",
    "en": "evidence-based medicine",
    "pinyin": "xún zhèng yī xué",
    "category": "dongy"
  },
  {
    "zh": "随机对照试验",
    "hanviet": "tùy cơ đối chiếu thí nghiệm",
    "vi": "thử nghiệm ngẫu nhiên có đối chứng (RCT)",
    "en": "randomized controlled trial",
    "pinyin": "suí jī duì zhào shì yàn",
    "category": "dongy"
  },
  {
    "zh": "临床研究",
    "hanviet": "lâm sàng nghiên cứu",
    "vi": "nghiên cứu lâm sàng",
    "en": "clinical research",
    "pinyin": "lín chuáng yán jiū",
    "category": "dongy"
  },
  {
    "zh": "中医现代化",
    "hanviet": "trung y hiện đại hóa",
    "vi": "hiện đại hóa Trung y",
    "en": "modernization of TCM",
    "pinyin": "zhōng yī xiàn dài huà",
    "category": "dongy"
  },
  {
    "zh": "中药药理学",
    "hanviet": "trung dược dược lý học",
    "vi": "dược lý học Trung dược",
    "en": "pharmacology of Chinese materia medica",
    "pinyin": "zhōng yào yào lǐ xué",
    "category": "dongy"
  },
  {
    "zh": "药效学",
    "hanviet": "dược hiệu học",
    "vi": "dược hiệu học (nghiên cứu tác dụng thuốc)",
    "en": "pharmacodynamics",
    "pinyin": "yào xiào xué",
    "category": "dongy"
  },
  {
    "zh": "毒理学",
    "hanviet": "độc lý học",
    "vi": "độc lý học (nghiên cứu độc tính)",
    "en": "toxicology",
    "pinyin": "dú lǐ xué",
    "category": "dongy"
  },
  {
    "zh": "质量标准",
    "hanviet": "chất lượng tiêu chuẩn",
    "vi": "tiêu chuẩn chất lượng (dược liệu)",
    "en": "quality standard",
    "pinyin": "zhì liàng biāo zhǔn",
    "category": "dongy"
  },
  {
    "zh": "统计",
    "hanviet": "thống kê",
    "vi": "thống kê (statistics)",
    "en": "",
    "pinyin": "tǒngjì"
  },
  {
    "zh": "统计学",
    "hanviet": "thống kê học",
    "vi": "môn thống kê",
    "en": "",
    "pinyin": "tǒngjìxué"
  },
  {
    "zh": "医学统计学",
    "hanviet": "y học thống kê học",
    "vi": "thống kê y học (medical statistics)",
    "en": "",
    "pinyin": "yīxué tǒngjìxué"
  },
  {
    "zh": "参数",
    "hanviet": "tham số",
    "vi": "tham số (parameter)",
    "en": "",
    "pinyin": "cānshù"
  },
  {
    "zh": "参数估计",
    "hanviet": "tham số ước kế",
    "vi": "ước lượng tham số",
    "en": "",
    "pinyin": "cānshù gūjì"
  },
  {
    "zh": "总体",
    "hanviet": "tổng thể",
    "vi": "tổng thể (population)",
    "en": "",
    "pinyin": "zǒngtǐ"
  },
  {
    "zh": "样本",
    "hanviet": "mẫu bản",
    "vi": "mẫu (sample)",
    "en": "",
    "pinyin": "yàngběn"
  },
  {
    "zh": "抽样",
    "hanviet": "trừu dạng",
    "vi": "lấy mẫu (sampling)",
    "en": "",
    "pinyin": "chōuyàng"
  },
  {
    "zh": "抽样误差",
    "hanviet": "trừu dạng sai sai",
    "vi": "sai số lấy mẫu",
    "en": "",
    "pinyin": "chōuyàng wùchā"
  },
  {
    "zh": "均数",
    "hanviet": "quân số",
    "vi": "số trung bình (mean)",
    "en": "",
    "pinyin": "jūnshù"
  },
  {
    "zh": "标准差",
    "hanviet": "tiêu chuẩn sai",
    "vi": "độ lệch chuẩn (SD)",
    "en": "",
    "pinyin": "biāozhǔnchā"
  },
  {
    "zh": "标准误",
    "hanviet": "tiêu chuẩn ngỗ",
    "vi": "sai số chuẩn (SE)",
    "en": "",
    "pinyin": "biāozhǔnwù"
  },
  {
    "zh": "方差",
    "hanviet": "phương sai",
    "vi": "phương sai (variance)",
    "en": "",
    "pinyin": "fāngchā"
  },
  {
    "zh": "方差分析",
    "hanviet": "phương sai phân tích",
    "vi": "phân tích phương sai (ANOVA)",
    "en": "",
    "pinyin": "fāngchā fēnxī"
  },
  {
    "zh": "变异",
    "hanviet": "biến dị",
    "vi": "biến thiên (variation)",
    "en": "",
    "pinyin": "biànyì"
  },
  {
    "zh": "变异系数",
    "hanviet": "biến dị hệ số",
    "vi": "hệ số biến thiên (CV)",
    "en": "",
    "pinyin": "biànyì xìshù"
  },
  {
    "zh": "置信区间",
    "hanviet": "trí tín khu gian",
    "vi": "khoảng tin cậy (CI)",
    "en": "",
    "pinyin": "zhìxìn qūjiān"
  },
  {
    "zh": "置信度",
    "hanviet": "trí tín độ",
    "vi": "độ tin cậy (confidence level)",
    "en": "",
    "pinyin": "zhìxìndù"
  },
  {
    "zh": "假设检验",
    "hanviet": "giả thiết kiểm nghiệm",
    "vi": "kiểm định giả thuyết (hypothesis testing)",
    "en": "",
    "pinyin": "jiǎshè jiǎnyàn"
  },
  {
    "zh": "假设",
    "hanviet": "giả thiết",
    "vi": "giả thuyết",
    "en": "",
    "pinyin": "jiǎshè"
  },
  {
    "zh": "检验",
    "hanviet": "kiểm nghiệm",
    "vi": "kiểm định (test)",
    "en": "",
    "pinyin": "jiǎnyàn"
  },
  {
    "zh": "检验效能",
    "hanviet": "kiểm nghiệm hiệu năng",
    "vi": "năng lực kiểm định (power)",
    "en": "",
    "pinyin": "jiǎnyàn xiàonéng"
  },
  {
    "zh": "检验水准",
    "hanviet": "kiểm nghiệm thủy chuẩn",
    "vi": "mức ý nghĩa (α)",
    "en": "",
    "pinyin": "jiǎnyàn shuǐzhǔn"
  },
  {
    "zh": "显著性",
    "hanviet": "hiển trứ tính",
    "vi": "ý nghĩa (significance)",
    "en": "",
    "pinyin": "xiǎnzhùxìng"
  },
  {
    "zh": "显著性检验",
    "hanviet": "hiển trứ tính kiểm nghiệm",
    "vi": "kiểm định ý nghĩa thống kê",
    "en": "",
    "pinyin": "xiǎnzhùxìng jiǎnyàn"
  },
  {
    "zh": "概率",
    "hanviet": "khái suất",
    "vi": "xác suất (probability)",
    "en": "",
    "pinyin": "gàilǜ"
  },
  {
    "zh": "正态分布",
    "hanviet": "chính thái phân bố",
    "vi": "phân bố chuẩn (normal)",
    "en": "",
    "pinyin": "zhèngtài fēnbù"
  },
  {
    "zh": "二项分布",
    "hanviet": "nhị hạng phân bố",
    "vi": "phân bố nhị thức (binomial)",
    "en": "",
    "pinyin": "èrxiàng fēnbù"
  },
  {
    "zh": "分布",
    "hanviet": "phân bố",
    "vi": "phân bố / phân phối (distribution)",
    "en": "",
    "pinyin": "fēnbù"
  },
  {
    "zh": "卡方检验",
    "hanviet": "khả phương kiểm nghiệm",
    "vi": "kiểm định chi bình phương (X²)",
    "en": "",
    "pinyin": "kǎfāng jiǎnyàn"
  },
  {
    "zh": "卡方分布",
    "hanviet": "khả phương phân bố",
    "vi": "phân bố chi bình phương",
    "en": "",
    "pinyin": "kǎfāng fēnbù"
  },
  {
    "zh": "t检验",
    "hanviet": "t kiểm nghiệm",
    "vi": "kiểm định t",
    "en": "",
    "pinyin": "t jiǎnyàn"
  },
  {
    "zh": "F检验",
    "hanviet": "F kiểm nghiệm",
    "vi": "kiểm định F",
    "en": "",
    "pinyin": "F jiǎnyàn"
  },
  {
    "zh": "非参数检验",
    "hanviet": "phi tham số kiểm nghiệm",
    "vi": "kiểm định phi tham số",
    "en": "",
    "pinyin": "fēicānshù jiǎnyàn"
  },
  {
    "zh": "秩和检验",
    "hanviet": "chất hòa kiểm nghiệm",
    "vi": "kiểm định tổng hạng (rank-sum)",
    "en": "",
    "pinyin": "zhìhé jiǎnyàn"
  },
  {
    "zh": "秩和",
    "hanviet": "chất hòa",
    "vi": "tổng hạng (rank sum)",
    "en": "",
    "pinyin": "zhìhé"
  },
  {
    "zh": "配对",
    "hanviet": "phối đối",
    "vi": "bắt cặp (paired)",
    "en": "",
    "pinyin": "pèiduì"
  },
  {
    "zh": "配对设计",
    "hanviet": "phối đối thiết kế",
    "vi": "thiết kế bắt cặp",
    "en": "",
    "pinyin": "pèiduì shèjì"
  },
  {
    "zh": "完全随机设计",
    "hanviet": "hoàn toàn tùy cơ thiết kế",
    "vi": "thiết kế hoàn toàn ngẫu nhiên",
    "en": "",
    "pinyin": "wánquán suíjī shèjì"
  },
  {
    "zh": "随机",
    "hanviet": "tùy cơ",
    "vi": "ngẫu nhiên (random)",
    "en": "",
    "pinyin": "suíjī"
  },
  {
    "zh": "四格表",
    "hanviet": "tứ cách biểu",
    "vi": "bảng 2x2 (fourfold table)",
    "en": "",
    "pinyin": "sìgébiao"
  },
  {
    "zh": "行×列表",
    "hanviet": "hành liệt biểu",
    "vi": "bảng hàng×cột (RxC)",
    "en": "",
    "pinyin": "háng lièbiǎo"
  },
  {
    "zh": "自由度",
    "hanviet": "tự do độ",
    "vi": "bậc tự do (df)",
    "en": "",
    "pinyin": "zìyóudù"
  },
  {
    "zh": "回归分析",
    "hanviet": "hồi quy phân tích",
    "vi": "phân tích hồi quy",
    "en": "",
    "pinyin": "huíguī fēnxī"
  },
  {
    "zh": "回归系数",
    "hanviet": "hồi quy hệ số",
    "vi": "hệ số hồi quy (regression coefficient)",
    "en": "",
    "pinyin": "huíguī xìshù"
  },
  {
    "zh": "相关系数",
    "hanviet": "tương quan hệ số",
    "vi": "hệ số tương quan (correlation)",
    "en": "",
    "pinyin": "xiāngguān xìshù"
  },
  {
    "zh": "相关分析",
    "hanviet": "tương quan phân tích",
    "vi": "phân tích tương quan",
    "en": "",
    "pinyin": "xiāngguān fēnxī"
  },
  {
    "zh": "变量",
    "hanviet": "biến lượng",
    "vi": "biến số (variable)",
    "en": "",
    "pinyin": "biànliàng"
  },
  {
    "zh": "自变量",
    "hanviet": "tự biến lượng",
    "vi": "biến độc lập",
    "en": "",
    "pinyin": "zìbiànliàng"
  },
  {
    "zh": "因变量",
    "hanviet": "nhân biến lượng",
    "vi": "biến phụ thuộc",
    "en": "",
    "pinyin": "yīnbiànliàng"
  },
  {
    "zh": "分类变量",
    "hanviet": "phân loại biến lượng",
    "vi": "biến phân loại (categorical)",
    "en": "",
    "pinyin": "fēnlèi biànliàng"
  },
  {
    "zh": "数值变量",
    "hanviet": "số trị biến lượng",
    "vi": "biến định lượng (numeric)",
    "en": "",
    "pinyin": "shùzhí biànliàng"
  },
  {
    "zh": "计量资料",
    "hanviet": "kế lượng tư liệu",
    "vi": "dữ liệu định lượng",
    "en": "",
    "pinyin": "jìliàng zīliào"
  },
  {
    "zh": "计数资料",
    "hanviet": "kế số tư liệu",
    "vi": "dữ liệu đếm (count data)",
    "en": "",
    "pinyin": "jìshù zīliào"
  },
  {
    "zh": "等级资料",
    "hanviet": "đẳng cấp tư liệu",
    "vi": "dữ liệu thứ bậc (ordinal)",
    "en": "",
    "pinyin": "děngjí zīliào"
  },
  {
    "zh": "频数",
    "hanviet": "tần số",
    "vi": "tần số (frequency)",
    "en": "",
    "pinyin": "pínshù"
  },
  {
    "zh": "频数分布",
    "hanviet": "tần số phân bố",
    "vi": "phân bố tần số",
    "en": "",
    "pinyin": "pínshù fēnbù"
  },
  {
    "zh": "构成比",
    "hanviet": "cấu thành tỉ",
    "vi": "tỉ trọng thành phần (proportion)",
    "en": "",
    "pinyin": "gòuchéngbǐ"
  },
  {
    "zh": "相对数",
    "hanviet": "tương đối số",
    "vi": "số tương đối",
    "en": "",
    "pinyin": "xiāngduìshù"
  },
  {
    "zh": "百分比",
    "hanviet": "bách phân bỉ",
    "vi": "phần trăm",
    "en": "",
    "pinyin": "bǎifēnbǐ"
  },
  {
    "zh": "中位数",
    "hanviet": "trung vị số",
    "vi": "trung vị (median)",
    "en": "",
    "pinyin": "zhōngwèishù"
  },
  {
    "zh": "众数",
    "hanviet": "chúng số",
    "vi": "yếu vị / mốt (mode)",
    "en": "",
    "pinyin": "zhòngshù"
  },
  {
    "zh": "几何均数",
    "hanviet": "kỉ hà quân số",
    "vi": "trung bình nhân (geometric mean)",
    "en": "",
    "pinyin": "jǐhé jūnshù"
  },
  {
    "zh": "极差",
    "hanviet": "cực sai",
    "vi": "khoảng biến thiên (range)",
    "en": "",
    "pinyin": "jíchā"
  },
  {
    "zh": "四分位数",
    "hanviet": "tứ phân vị số",
    "vi": "tứ phân vị (quartile)",
    "en": "",
    "pinyin": "sìfēnwèishù"
  },
  {
    "zh": "百分位数",
    "hanviet": "bách phân vị số",
    "vi": "bách phân vị (percentile)",
    "en": "",
    "pinyin": "bǎifēnwèishù"
  },
  {
    "zh": "拟合优度",
    "hanviet": "nghĩ hợp ưu độ",
    "vi": "độ phù hợp (goodness of fit)",
    "en": "",
    "pinyin": "nǐhé yōudù"
  },
  {
    "zh": "正态性检验",
    "hanviet": "chính thái tính kiểm nghiệm",
    "vi": "kiểm định tính chuẩn",
    "en": "",
    "pinyin": "zhèngtàixìng jiǎnyàn"
  },
  {
    "zh": "方差齐性检验",
    "hanviet": "phương sai tề tính kiểm nghiệm",
    "vi": "kiểm định tính đồng nhất phương sai",
    "en": "",
    "pinyin": "fāngchā qíxìng jiǎnyàn"
  },
  {
    "zh": "交互作用",
    "hanviet": "giao hỗ tác dụng",
    "vi": "tương tác (interaction)",
    "en": "",
    "pinyin": "jiāohù zuòyòng"
  },
  {
    "zh": "主效应",
    "hanviet": "chủ hiệu ứng",
    "vi": "hiệu ứng chính (main effect)",
    "en": "",
    "pinyin": "zhǔ xiàoyìng"
  },
  {
    "zh": "析因设计",
    "hanviet": "tích nhân thiết kế",
    "vi": "thiết kế giai thừa (factorial)",
    "en": "",
    "pinyin": "xīyīn shèjì"
  },
  {
    "zh": "正交设计",
    "hanviet": "chính giao thiết kế",
    "vi": "thiết kế trực giao (orthogonal)",
    "en": "",
    "pinyin": "zhèngjiāo shèjì"
  },
  {
    "zh": "嵌套设计",
    "hanviet": "khiên sáo thiết kế",
    "vi": "thiết kế lồng (nested)",
    "en": "",
    "pinyin": "qiàntào shèjì"
  },
  {
    "zh": "多中心",
    "hanviet": "đa trung tâm",
    "vi": "đa trung tâm (multicenter)",
    "en": "",
    "pinyin": "duōzhōngxīn"
  },
  {
    "zh": "疗效",
    "hanviet": "liệu hiệu",
    "vi": "hiệu quả điều trị (efficacy)",
    "en": "",
    "pinyin": "liáoxiào"
  },
  {
    "zh": "有效率",
    "hanviet": "hữu hiệu suất",
    "vi": "tỉ lệ hiệu quả",
    "en": "",
    "pinyin": "yǒuxiàolǜ"
  },
  {
    "zh": "治愈",
    "hanviet": "trị dũ",
    "vi": "khỏi bệnh / chữa khỏi (cure)",
    "en": "",
    "pinyin": "zhìyù"
  },
  {
    "zh": "对照",
    "hanviet": "đối chiếu",
    "vi": "đối chứng (control)",
    "en": "",
    "pinyin": "duìzhào"
  },
  {
    "zh": "对照组",
    "hanviet": "đối chiếu tổ",
    "vi": "nhóm đối chứng",
    "en": "",
    "pinyin": "duìzhàozǔ"
  },
  {
    "zh": "实验组",
    "hanviet": "thực nghiệm tổ",
    "vi": "nhóm thực nghiệm",
    "en": "",
    "pinyin": "shíyànzǔ"
  },
  {
    "zh": "试验",
    "hanviet": "thí nghiệm",
    "vi": "thử nghiệm (trial)",
    "en": "",
    "pinyin": "shìyàn"
  },
  {
    "zh": "样本量",
    "hanviet": "mẫu bản lượng",
    "vi": "cỡ mẫu (sample size)",
    "en": "",
    "pinyin": "yàngběnliàng"
  },
  {
    "zh": "观察",
    "hanviet": "quan sát",
    "vi": "quan sát (observation)",
    "en": "",
    "pinyin": "guānchá"
  },
  {
    "zh": "随访",
    "hanviet": "tùy phỏng",
    "vi": "theo dõi (follow-up)",
    "en": "",
    "pinyin": "suífǎng"
  },
  {
    "zh": "两独立样本",
    "hanviet": "lưỡng độc lập mẫu bản",
    "vi": "hai mẫu độc lập",
    "en": "",
    "pinyin": "liǎng dúlì yàngběn"
  },
  {
    "zh": "单样本",
    "hanviet": "đơn mẫu bản",
    "vi": "mẫu đơn (one sample)",
    "en": "",
    "pinyin": "dān yàngběn"
  },
  {
    "zh": "校正",
    "hanviet": "hiệu chính",
    "vi": "hiệu chỉnh (correction)",
    "en": "",
    "pinyin": "jiàozhèng"
  },
  {
    "zh": "率或构成比",
    "hanviet": "suất hoặc cấu thành tỉ",
    "vi": "tỉ lệ hoặc tỉ trọng",
    "en": "",
    "pinyin": "lǜ huò gòuchéngbǐ"
  },
  {
    "zh": "多重比较",
    "hanviet": "đa trùng bỉ giảo",
    "vi": "so sánh bội (multiple comparison)",
    "en": "",
    "pinyin": "duōchóng bǐjiào"
  },
  {
    "zh": "两两比较",
    "hanviet": "lưỡng lưỡng bỉ giảo",
    "vi": "so sánh từng cặp (pairwise)",
    "en": "",
    "pinyin": "liǎngliǎng bǐjiào"
  },
  {
    "zh": "线性趋势",
    "hanviet": "tuyến tính xu thế",
    "vi": "xu hướng tuyến tính (linear trend)",
    "en": "",
    "pinyin": "xiànxìng qūshì"
  },
  {
    "zh": "秩相关",
    "hanviet": "chất tương quan",
    "vi": "tương quan hạng (rank correlation)",
    "en": "",
    "pinyin": "zhì xiāngguān"
  },
  {
    "zh": "等级相关",
    "hanviet": "đẳng cấp tương quan",
    "vi": "tương quan thứ bậc",
    "en": "",
    "pinyin": "děngjí xiāngguān"
  },
  {
    "zh": "检验效能",
    "hanviet": "kiểm nghiệm hiệu năng",
    "vi": "năng lực kiểm định",
    "en": "",
    "pinyin": "jiǎnyàn xiàonéng"
  },
  {
    "zh": "两类错误",
    "hanviet": "lưỡng loại thác ngộ",
    "vi": "hai loại sai lầm (Type I & II error)",
    "en": "",
    "pinyin": "liǎnglèi cuòwù"
  },
  {
    "zh": "第一类错误",
    "hanviet": "đệ nhất loại thác ngộ",
    "vi": "sai lầm loại I (α)",
    "en": "",
    "pinyin": "dìyīlèi cuòwù"
  },
  {
    "zh": "第二类错误",
    "hanviet": "đệ nhị loại thác ngộ",
    "vi": "sai lầm loại II (β)",
    "en": "",
    "pinyin": "dìèrlèi cuòwù"
  },
  {
    "zh": "参考值范围",
    "hanviet": "tham khảo trị phạm vi",
    "vi": "khoảng giá trị tham chiếu",
    "en": "",
    "pinyin": "cānkǎozhí fànwéi"
  },
  {
    "zh": "可信区间",
    "hanviet": "khả tín khu gian",
    "vi": "khoảng tin cậy (CI)",
    "en": "",
    "pinyin": "kěxìn qūjiān"
  },
  {
    "zh": "估计值",
    "hanviet": "ước kế trị",
    "vi": "giá trị ước lượng",
    "en": "",
    "pinyin": "gūjìzhí"
  },
  {
    "zh": "可信度",
    "hanviet": "khả tín độ",
    "vi": "độ tin cậy",
    "en": "",
    "pinyin": "kěxìndù"
  },
  {
    "zh": "主成分分析",
    "hanviet": "chủ thành phần phân tích",
    "vi": "phân tích thành phần chính (PCA)",
    "en": "principal component analysis",
    "pinyin": "zhǔ chéng fèn fēn xī"
  },
  {
    "zh": "因子分析",
    "hanviet": "nhân tử phân tích",
    "vi": "phân tích nhân tố (factor analysis)",
    "en": "factor analysis",
    "pinyin": "yīn zi fēn xī"
  },
  {
    "zh": "聚类分析",
    "hanviet": "tụ loại phân tích",
    "vi": "phân tích cụm (cluster analysis)",
    "en": "cluster analysis",
    "pinyin": "jù lèi fēn xī"
  },
  {
    "zh": "判别分析",
    "hanviet": "phán biệt phân tích",
    "vi": "phân tích phân biệt (discriminant analysis)",
    "en": "discriminant analysis",
    "pinyin": "pàn bié fēn xī"
  },
  {
    "zh": "载荷",
    "hanviet": "tải",
    "vi": "hệ số tải (loading)",
    "en": "loading",
    "pinyin": "zài hè"
  },
  {
    "zh": "因子载荷",
    "hanviet": "nhân tử tải",
    "vi": "hệ số tải nhân tố (factor loading)",
    "en": "factor loading",
    "pinyin": "yīn zi zài hè"
  },
  {
    "zh": "旋转",
    "hanviet": "xoay chuyển",
    "vi": "xoay trục (rotation)",
    "en": "rotation",
    "pinyin": "xuán zhuǎn"
  },
  {
    "zh": "方差最大化旋转",
    "hanviet": "phương sai tối đại hóa xoay chuyển",
    "vi": "xoay varimax (phương sai tối đa)",
    "en": "varimax rotation",
    "pinyin": "fāng chà zuì dà huà xuán zhuǎn"
  },
  {
    "zh": "特征值",
    "hanviet": "đặc trưng trị",
    "vi": "giá trị riêng (eigenvalue)",
    "en": "eigenvalue",
    "pinyin": "tè zhēng zhí"
  },
  {
    "zh": "贡献率",
    "hanviet": "cống hiến suất",
    "vi": "tỉ lệ đóng góp (proportion of variance)",
    "en": "contribution rate",
    "pinyin": "gòng xiàn lǜ"
  },
  {
    "zh": "偏相关",
    "hanviet": "thiên tương quan",
    "vi": "tương quan riêng phần (partial correlation)",
    "en": "partial correlation",
    "pinyin": "piān xiāng guān"
  },
  {
    "zh": "复相关",
    "hanviet": "phục tương quan",
    "vi": "tương quan bội (multiple correlation)",
    "en": "multiple correlation",
    "pinyin": "fù xiāng guān"
  },
  {
    "zh": "典型相关",
    "hanviet": "điển hình tương quan",
    "vi": "tương quan chính tắc (canonical correlation)",
    "en": "canonical correlation",
    "pinyin": "diǎn xíng xiāng guān"
  },
  {
    "zh": "典型相关系数",
    "hanviet": "điển hình tương quan hệ số",
    "vi": "hệ số tương quan chính tắc",
    "en": "canonical correlation coefficient",
    "pinyin": "diǎn xíng xiāng guān xì shù"
  },
  {
    "zh": "多重线性回归",
    "hanviet": "đa trùng tuyến tính hồi quy",
    "vi": "hồi quy tuyến tính bội (multiple linear regression)",
    "en": "multiple linear regression",
    "pinyin": "duō zhòng xiàn xìng huí guī"
  },
  {
    "zh": "复相关系数",
    "hanviet": "phục tương quan hệ số",
    "vi": "hệ số tương quan bội (multiple R)",
    "en": "multiple correlation coefficient",
    "pinyin": "fù xiāng guān xì shù"
  },
  {
    "zh": "决定系数",
    "hanviet": "quyết định hệ số",
    "vi": "hệ số xác định (R²)",
    "en": "coefficient of determination",
    "pinyin": "jué dìng xì shù"
  },
  {
    "zh": "校正决定系数",
    "hanviet": "hiệu chính quyết định hệ số",
    "vi": "hệ số xác định hiệu chỉnh (adjusted R²)",
    "en": "adjusted R²",
    "pinyin": "jiào zhèng jué dìng xì shù"
  },
  {
    "zh": "标准化偏回归系数",
    "hanviet": "tiêu chuẩn hóa thiên hồi quy hệ số",
    "vi": "hệ số hồi quy riêng phần chuẩn hóa",
    "en": "standardized partial regression coefficient",
    "pinyin": "biāo zhǔn huà piān huí guī xì shù"
  },
  {
    "zh": "Logistic回归",
    "hanviet": "Logistic hồi quy",
    "vi": "hồi quy Logistic",
    "en": "logistic regression",
    "pinyin": "Logistic huí guī"
  },
  {
    "zh": "比值比",
    "hanviet": "tỉ trị bỉ",
    "vi": "tỉ số chênh (OR)",
    "en": "odds ratio",
    "pinyin": "bǐ zhí bǐ"
  },
  {
    "zh": "相对危险度",
    "hanviet": "tương đối nguy hiểm độ",
    "vi": "nguy cơ tương đối (RR)",
    "en": "relative risk",
    "pinyin": "xiāng duì wēi xiǎn dù"
  },
  {
    "zh": "生存分析",
    "hanviet": "sinh tồn phân tích",
    "vi": "phân tích sống còn (survival analysis)",
    "en": "survival analysis",
    "pinyin": "shēng cún fēn xī"
  },
  {
    "zh": "生存时间",
    "hanviet": "sinh tồn thời gian",
    "vi": "thời gian sống còn (survival time)",
    "en": "survival time",
    "pinyin": "shēng cún shí jiān"
  },
  {
    "zh": "删失",
    "hanviet": "san thất",
    "vi": "kiểm duyệt (censoring)",
    "en": "censoring",
    "pinyin": "shān shī"
  },
  {
    "zh": "生存曲线",
    "hanviet": "sinh tồn khúc tuyến",
    "vi": "đường cong sống còn",
    "en": "survival curve",
    "pinyin": "shēng cún qū xiàn"
  },
  {
    "zh": "风险函数",
    "hanviet": "phong hiểm hàm số",
    "vi": "hàm nguy cơ (hazard function)",
    "en": "hazard function",
    "pinyin": "fēng xiǎn hán shù"
  },
  {
    "zh": "风险比",
    "hanviet": "phong hiểm tỉ",
    "vi": "tỉ số nguy cơ (HR)",
    "en": "hazard ratio",
    "pinyin": "fēng xiǎn bǐ"
  },
  {
    "zh": "协方差分析",
    "hanviet": "hiệp phương sai phân tích",
    "vi": "phân tích hiệp phương sai (ANCOVA)",
    "en": "analysis of covariance",
    "pinyin": "xié fāng chà fēn xī"
  },
  {
    "zh": "协变量",
    "hanviet": "hiệp biến lượng",
    "vi": "biến đồng hành (covariate)",
    "en": "covariate",
    "pinyin": "xié biàn liàng"
  },
  {
    "zh": "重复测量",
    "hanviet": "trùng phục đo lượng",
    "vi": "đo lường lặp lại (repeated measures)",
    "en": "repeated measures",
    "pinyin": "chóng fù cè liáng"
  },
  {
    "zh": "贝叶斯",
    "hanviet": "bối diệp tư",
    "vi": "Bayes (xác suất Bayes)",
    "en": "Bayesian",
    "pinyin": "bèi yè sī"
  },
  {
    "zh": "先验概率",
    "hanviet": "tiên nghiệm xác suất",
    "vi": "xác suất tiên nghiệm (prior)",
    "en": "prior probability",
    "pinyin": "xiān yàn gài lǜ"
  },
  {
    "zh": "后验概率",
    "hanviet": "hậu nghiệm xác suất",
    "vi": "xác suất hậu nghiệm (posterior)",
    "en": "posterior probability",
    "pinyin": "hòu yàn gài lǜ"
  },
  {
    "zh": "似然",
    "hanviet": "tự nhiên",
    "vi": "hợp lý (likelihood)",
    "en": "likelihood",
    "pinyin": "shì rán"
  },
  {
    "zh": "似然函数",
    "hanviet": "tự nhiên hàm số",
    "vi": "hàm hợp lý (likelihood function)",
    "en": "likelihood function",
    "pinyin": "shì rán hán shù"
  },
  {
    "zh": "中介效应",
    "hanviet": "trung giới hiệu ứng",
    "vi": "hiệu ứng trung gian (mediation effect)",
    "en": "mediation effect",
    "pinyin": "zhōng jiè xiào yìng"
  },
  {
    "zh": "调节效应",
    "hanviet": "điều tiết hiệu ứng",
    "vi": "hiệu ứng điều tiết (moderation effect)",
    "en": "moderation effect",
    "pinyin": "tiáo jié xiào yìng"
  },
  {
    "zh": "中介变量",
    "hanviet": "trung giới biến lượng",
    "vi": "biến trung gian (mediator)",
    "en": "mediator",
    "pinyin": "zhōng jiè biàn liàng"
  },
  {
    "zh": "调节变量",
    "hanviet": "điều tiết biến lượng",
    "vi": "biến điều tiết (moderator)",
    "en": "moderator",
    "pinyin": "tiáo jié biàn liàng"
  },
  {
    "zh": "一致性",
    "hanviet": "nhất trí tính",
    "vi": "tính nhất quán (agreement)",
    "en": "agreement",
    "pinyin": "yí zhì xìng"
  },
  {
    "zh": "一致性检验",
    "hanviet": "nhất trí tính kiểm nghiệm",
    "vi": "kiểm định tính nhất quán",
    "en": "agreement test",
    "pinyin": "yí zhì xìng jiǎn yàn"
  },
  {
    "zh": "Kappa系数",
    "hanviet": "Kappa hệ số",
    "vi": "hệ số Kappa",
    "en": "Kappa coefficient",
    "pinyin": "Kappa xì shù"
  },
  {
    "zh": "组内相关系数",
    "hanviet": "tổ nội tương quan hệ số",
    "vi": "hệ số tương quan nội lớp (ICC)",
    "en": "intraclass correlation coefficient",
    "pinyin": "zǔ nèi xiāng guān xì shù"
  },
  {
    "zh": "量表",
    "hanviet": "lượng biểu",
    "vi": "thang đo (scale)",
    "en": "scale",
    "pinyin": "liàng biǎo"
  },
  {
    "zh": "信度",
    "hanviet": "tín độ",
    "vi": "độ tin cậy (reliability)",
    "en": "reliability",
    "pinyin": "xìn dù"
  },
  {
    "zh": "效度",
    "hanviet": "hiệu độ",
    "vi": "độ giá trị (validity)",
    "en": "validity",
    "pinyin": "xiào dù"
  },
  {
    "zh": "信度检验",
    "hanviet": "tín độ kiểm nghiệm",
    "vi": "kiểm định độ tin cậy",
    "en": "reliability test",
    "pinyin": "xìn dù jiǎn yàn"
  },
  {
    "zh": "优效性",
    "hanviet": "ưu hiệu tính",
    "vi": "tính ưu việt (superiority)",
    "en": "superiority",
    "pinyin": "yōu xiào xìng"
  },
  {
    "zh": "非劣效性",
    "hanviet": "phi liệt hiệu tính",
    "vi": "tính không kém hơn (non-inferiority)",
    "en": "non-inferiority",
    "pinyin": "fēi liè xiào xìng"
  },
  {
    "zh": "等效性",
    "hanviet": "đẳng hiệu tính",
    "vi": "tính tương đương (equivalence)",
    "en": "equivalence",
    "pinyin": "děng xiào xìng"
  },
  {
    "zh": "系统评价",
    "hanviet": "hệ thống bình giá",
    "vi": "đánh giá hệ thống (systematic review)",
    "en": "systematic review",
    "pinyin": "xì tǒng píng jià"
  },
  {
    "zh": "Meta分析",
    "hanviet": "Meta phân tích",
    "vi": "phân tích gộp (Meta-analysis)",
    "en": "meta-analysis",
    "pinyin": "Meta fēn xī"
  },
  {
    "zh": "异质性",
    "hanviet": "dị chất tính",
    "vi": "tính không đồng nhất (heterogeneity)",
    "en": "heterogeneity",
    "pinyin": "yì zhì xìng"
  },
  {
    "zh": "发表偏倚",
    "hanviet": "phát biểu thiên ỷ",
    "vi": "thiên lệch công bố (publication bias)",
    "en": "publication bias",
    "pinyin": "fā biǎo piān yǐ"
  },
  {
    "zh": "临床预测模型",
    "hanviet": "lâm sàng dự trắc mô hình",
    "vi": "mô hình dự đoán lâm sàng",
    "en": "clinical prediction model",
    "pinyin": "lín chuáng yù cè mó xíng"
  },
  {
    "zh": "列线图",
    "hanviet": "liệt tuyến đồ",
    "vi": "biểu đồ nomogram",
    "en": "nomogram",
    "pinyin": "liè xiàn tú"
  },
  {
    "zh": "校准",
    "hanviet": "hiệu chuẩn",
    "vi": "hiệu chuẩn (calibration)",
    "en": "calibration",
    "pinyin": "jiào zhǔn"
  },
  {
    "zh": "区分度",
    "hanviet": "khu phân độ",
    "vi": "độ phân biệt (discrimination)",
    "en": "discrimination",
    "pinyin": "qū fēn dù"
  },
  {
    "zh": "受试者工作特征曲线",
    "hanviet": "thụ thí giả công tác đặc trưng khúc tuyến",
    "vi": "đường cong ROC",
    "en": "ROC curve",
    "pinyin": "shòu shì zhě gōng zuò tè zhēng qū xiàn"
  },
  {
    "zh": "真实世界研究",
    "hanviet": "chân thực thế giới nghiên cứu",
    "vi": "nghiên cứu thực tế (real-world study)",
    "en": "real-world study",
    "pinyin": "zhēn shí shì jiè yán jiū"
  },
  {
    "zh": "大数据",
    "hanviet": "đại sổ cư",
    "vi": "dữ liệu lớn (big data)",
    "en": "big data",
    "pinyin": "dà shù jù"
  },
  {
    "zh": "倾向评分",
    "hanviet": "khuynh hướng bình phân",
    "vi": "điểm xu hướng (propensity score)",
    "en": "propensity score",
    "pinyin": "qīng xiàng píng fēn"
  },
  {
    "zh": "统计推断",
    "hanviet": "thống kê suy đoán",
    "vi": "suy luận thống kê (statistical inference)",
    "en": "statistical inference",
    "pinyin": "tǒng jì tuī duàn"
  },
  {
    "zh": "样本含量",
    "hanviet": "dạng bản hàm lượng",
    "vi": "cỡ mẫu (sample size)",
    "en": "sample size",
    "pinyin": "yàng běn hán liàng"
  },
  {
    "zh": "对照试验",
    "hanviet": "đối chiếu thí nghiệm",
    "vi": "thử nghiệm đối chứng (controlled trial)",
    "en": "controlled trial",
    "pinyin": "duì zhào shì yàn"
  },
  {
    "zh": "评价指标",
    "hanviet": "bình giá chỉ tiêu",
    "vi": "chỉ số đánh giá (evaluation index)",
    "en": "evaluation index",
    "pinyin": "píng jià zhǐ biāo"
  }
];

  // 2. KHO HUYỆT ĐẠO KINH ĐIỂN & KINH LẠC (ACUPOINTS)
  const TCM_MERIDIANS = [
  {
    "code": "LU",
    "name_vn": "Thủ Thái Âm Phế Kinh",
    "name_zh": "手太阴肺经",
    "symbol": "LU",
    "total_points": 11,
    "desc": "Chủ về hô hấp, phế khí, biểu hiện ra lông tóc và mũi. Điều hòa khí toàn thân."
  },
  {
    "code": "LI",
    "name_vn": "Thủ Dương Minh Đại Trường Kinh",
    "name_zh": "手阳明大肠经",
    "symbol": "LI",
    "total_points": 20,
    "desc": "Chủ về truyền đạo cặn bã, tiêu trừ nhiệt độc vùng đầu mặt, răng miệng và hầu họng."
  },
  {
    "code": "ST",
    "name_vn": "Túc Dương Minh Vị Kinh",
    "name_zh": "足阳明胃经",
    "symbol": "ST",
    "total_points": 45,
    "desc": "Chủ về thu nạp và ngấu nhừ thủy cốc, biển chứa khí huyết hậu thiên."
  },
  {
    "code": "SP",
    "name_vn": "Túc Thái Âm Tỳ Kinh",
    "name_zh": "足太阴脾经",
    "symbol": "SP",
    "total_points": 21,
    "desc": "Chủ về vận hóa tinh vi thủy cốc và thủy thấp, thống nhiếp huyết dịch."
  },
  {
    "code": "HT",
    "name_vn": "Thủ Thiếu Âm Tâm Kinh",
    "name_zh": "手少阴心经",
    "symbol": "HT",
    "total_points": 9,
    "desc": "Quân chủ chi quan, chủ về huyết mạch và tàng trữ thần chí."
  },
  {
    "code": "SI",
    "name_vn": "Thủ Thái Dương Tiểu Trường Kinh",
    "name_zh": "手太阳小肠经",
    "symbol": "SI",
    "total_points": 19,
    "desc": "Chủ về thụ thịnh và phân thanh giáng trọc dịch thể."
  },
  {
    "code": "BL",
    "name_vn": "Túc Thái Dương Bàng Quang Kinh",
    "name_zh": "足太阳膀胱经",
    "symbol": "BL",
    "total_points": 67,
    "desc": "Đường kinh dài nhất, chứa hệ thống Du huyệt lục phủ ngũ tạng, chủ khí hóa bàng quang."
  },
  {
    "code": "KI",
    "name_vn": "Túc Thiếu Âm Thận Kinh",
    "name_zh": "足少阴肾经",
    "symbol": "KI",
    "total_points": 27,
    "desc": "Gốc rễ tiên thiên, tàng tinh, chủ cốt tủy, nạp khí và sinh sản."
  },
  {
    "code": "PC",
    "name_vn": "Thủ Quyết Âm Tâm Bào Kinh",
    "name_zh": "手厥阴心包经",
    "symbol": "PC",
    "total_points": 9,
    "desc": "Bảo vệ tâm quân, thay tâm chịu tà, chủ trị các chứng ngực sườn và thần chí."
  },
  {
    "code": "TE",
    "name_vn": "Thủ Thiếu Dương Tam Tiêu Kinh",
    "name_zh": "手少阳三焦经",
    "symbol": "TE",
    "total_points": 23,
    "desc": "Nguyên khí chi biệt sứ, thông hành nguyên khí và vận hành đường thủy dịch."
  },
  {
    "code": "GB",
    "name_vn": "Túc Thiếu Dương Đởm Kinh",
    "name_zh": "足少阳胆经",
    "symbol": "GB",
    "total_points": 44,
    "desc": "Trung chính chi quan, chủ về quyết đoán, sơ tiết đởm trấp."
  },
  {
    "code": "LR",
    "name_vn": "Túc Quyết Âm Can Kinh",
    "name_zh": "足厥阴肝经",
    "symbol": "LR",
    "total_points": 14,
    "desc": "Tướng quân chi quan, chủ sơ tiết khí cơ, tàng huyết và chủ cân."
  },
  {
    "code": "GV",
    "name_vn": "Đốc Mạch",
    "name_zh": "督脉",
    "symbol": "GV",
    "total_points": 29,
    "desc": "Dương mạch chi hải, thống suất và điều tiết dương khí toàn thân dọc cột sống."
  },
  {
    "code": "CV",
    "name_vn": "Nhâm Mạch",
    "name_zh": "任脉",
    "symbol": "CV",
    "total_points": 24,
    "desc": "Âm mạch chi hải, nuôi dưỡng và điều hòa toàn bộ các kinh âm phía trước thân."
  },
  {
    "code": "EX",
    "name_vn": "Kinh Ngoại Kỳ Huyệt",
    "name_zh": "经外奇穴",
    "symbol": "EX",
    "total_points": 50,
    "desc": "Các huyệt đặc hiệu ngoài 14 kinh mạch chính kinh."
  }
];

const TCM_ACUPOINTS = [
  {
    "code": "LU1",
    "zh": "中府",
    "py": "Zhōngfǔ",
    "hanviet": "Trung Phủ",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸痛、胸满。",
    "vi": "Huyệt Trung Phủ (LU1) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛、胸满。"
  },
  {
    "code": "LU2",
    "zh": "云门",
    "py": "Yúnmén",
    "hanviet": "Vân Môn",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸痛、胸满。",
    "vi": "Huyệt Vân Môn (LU2) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛、胸满。"
  },
  {
    "code": "LU3",
    "zh": "天府",
    "py": "Tiānfǔ",
    "hanviet": "Thiên Phủ",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "上臂",
    "indications": "哮喘、鼻衄、上臂内侧痛。",
    "vi": "Huyệt Thiên Phủ (LU3) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 上臂. Chủ trị: 哮喘、鼻衄、上臂内侧痛。"
  },
  {
    "code": "LU4",
    "zh": "侠白",
    "py": "Xiábái",
    "hanviet": "Hiệp Bạch",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "上臂",
    "indications": "咳嗽、胸满、上臂内侧痛。",
    "vi": "Huyệt Hiệp Bạch (LU4) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 上臂. Chủ trị: 咳嗽、胸满、上臂内侧痛。"
  },
  {
    "code": "LU5",
    "zh": "尺泽",
    "py": "Chǐzé",
    "hanviet": "Xích Trạch",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "肘部",
    "indications": "咳嗽、咯血、发热、哮喘、咽喉痛、胸满。",
    "vi": "Huyệt Xích Trạch (LU5) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 肘部. Chủ trị: 咳嗽、咯血、发热、哮喘、咽喉痛、胸满。"
  },
  {
    "code": "LU6",
    "zh": "孔最",
    "py": "Kǒngzuì",
    "hanviet": "Khổng Tối",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "前臂",
    "indications": "咳嗽、胸痛、哮喘、咯血、咽喉痛、肘臂挛痛。",
    "vi": "Huyệt Khổng Tối (LU6) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 咳嗽、胸痛、哮喘、咯血、咽喉痛、肘臂挛痛。"
  },
  {
    "code": "LU7",
    "zh": "列缺",
    "py": "Lièquē",
    "hanviet": "Liệt Khuyết",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "前臂",
    "indications": "头痛、偏头痛、项强、咳嗽、哮喘、咽喉痛。",
    "vi": "Huyệt Liệt Khuyết (LU7) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 头痛、偏头痛、项强、咳嗽、哮喘、咽喉痛。"
  },
  {
    "code": "LU8",
    "zh": "经渠",
    "py": "Jīngqú",
    "hanviet": "Kinh Cừ",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "前臂",
    "indications": "咳嗽、哮喘、发热、胸痛、咽喉痛、腕痛。",
    "vi": "Huyệt Kinh Cừ (LU8) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 前臂. Chủ trị: 咳嗽、哮喘、发热、胸痛、咽喉痛、腕痛。"
  },
  {
    "code": "LU9",
    "zh": "太渊",
    "py": "Tàiyuān",
    "hanviet": "Thái Uyên",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "腕部",
    "indications": "咳嗽、哮喘、咯血、咽喉痛、心悸、胸痛。",
    "vi": "Huyệt Thái Uyên (LU9) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 腕部. Chủ trị: 咳嗽、哮喘、咯血、咽喉痛、心悸、胸痛。"
  },
  {
    "code": "LU10",
    "zh": "鱼际",
    "py": "Yújì",
    "hanviet": "Ngư Tế",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "手掌",
    "indications": "咳嗽、咯血、咽喉痛、失音、发热、掌心热。",
    "vi": "Huyệt Ngư Tế (LU10) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 手掌. Chủ trị: 咳嗽、咯血、咽喉痛、失音、发热、掌心热。"
  },
  {
    "code": "LU11",
    "zh": "少商",
    "py": "Shàoshāng",
    "hanviet": "Thiếu Thương",
    "meridian_code": "LU",
    "meridian": "Thủ Thái Âm Phế Kinh (手太阴肺经 · LU)",
    "region": "拇指",
    "indications": "咽喉痛、咳嗽、哮喘、鼻衄、发热、昏厥。",
    "vi": "Huyệt Thiếu Thương (LU11) thuộc Thủ Thái Âm Phế Kinh. Vị trí: 拇指. Chủ trị: 咽喉痛、咳嗽、哮喘、鼻衄、发热、昏厥。"
  },
  {
    "code": "LI1",
    "zh": "商阳",
    "py": "Shāngyáng",
    "hanviet": "Thương Dương",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "手指",
    "indications": "牙痛、咽喉痛、麻木、热病、昏厥。",
    "vi": "Huyệt Thương Dương (LI1) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手指. Chủ trị: 牙痛、咽喉痛、麻木、热病、昏厥。"
  },
  {
    "code": "LI2",
    "zh": "二间",
    "py": "Èrjiān",
    "hanviet": "Nhị Gian",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "手指",
    "indications": "视物模糊、鼻衄、牙痛、咽喉痛、热病。",
    "vi": "Huyệt Nhị Gian (LI2) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手指. Chủ trị: 视物模糊、鼻衄、牙痛、咽喉痛、热病。"
  },
  {
    "code": "LI3",
    "zh": "三间",
    "py": "Sānjiān",
    "hanviet": "Tam Gian",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "手部",
    "indications": "牙痛、眼痛、咽喉痛。",
    "vi": "Huyệt Tam Gian (LI3) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手部. Chủ trị: 牙痛、眼痛、咽喉痛。"
  },
  {
    "code": "LI4",
    "zh": "合谷",
    "py": "Hégǔ",
    "hanviet": "Hợp Cốc",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "手部",
    "indications": "头痛、颈痛、目肿痛、眼痛、鼻衄、鼻塞。",
    "vi": "Huyệt Hợp Cốc (LI4) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 手部. Chủ trị: 头痛、颈痛、目肿痛、眼痛、鼻衄、鼻塞。"
  },
  {
    "code": "LI5",
    "zh": "阳溪",
    "py": "Yángxī",
    "hanviet": "Dương Khê",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "腕部",
    "indications": "头痛、目肿痛、牙痛、咽喉痛、腕痛。",
    "vi": "Huyệt Dương Khê (LI5) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 腕部. Chủ trị: 头痛、目肿痛、牙痛、咽喉痛、腕痛。"
  },
  {
    "code": "LI6",
    "zh": "偏历",
    "py": "Piānlì",
    "hanviet": "Thiên Lịch",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "前臂",
    "indications": "目赤、耳鸣、耳聋、鼻衄、咽喉痛、水肿。",
    "vi": "Huyệt Thiên Lịch (LI6) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 目赤、耳鸣、耳聋、鼻衄、咽喉痛、水肿。"
  },
  {
    "code": "LI7",
    "zh": "温溜",
    "py": "Wēnliū",
    "hanviet": "Ôn Lưu",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "前臂",
    "indications": "头痛、咽喉痛、肠鸣、腹痛。",
    "vi": "Huyệt Ôn Lưu (LI7) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 头痛、咽喉痛、肠鸣、腹痛。"
  },
  {
    "code": "LI8",
    "zh": "下廉",
    "py": "Xiàlián",
    "hanviet": "Hạ Liêm",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "前臂",
    "indications": "腹痛、肠鸣、肘痛、活动不利。",
    "vi": "Huyệt Hạ Liêm (LI8) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 腹痛、肠鸣、肘痛、活动不利。"
  },
  {
    "code": "LI9",
    "zh": "上廉",
    "py": "Shànglián",
    "hanviet": "Thượng Liêm",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "前臂",
    "indications": "活动不利、麻木、肠鸣、腹痛。",
    "vi": "Huyệt Thượng Liêm (LI9) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 活动不利、麻木、肠鸣、腹痛。"
  },
  {
    "code": "LI10",
    "zh": "手三里",
    "py": "Shǒusānlǐ",
    "hanviet": "Thủ Tam Lý",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "前臂",
    "indications": "腹痛、泄泻、牙痛、颊肿、活动不利、肩痛。",
    "vi": "Huyệt Thủ Tam Lý (LI10) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 前臂. Chủ trị: 腹痛、泄泻、牙痛、颊肿、活动不利、肩痛。"
  },
  {
    "code": "LI11",
    "zh": "曲池",
    "py": "Qūchí",
    "hanviet": "Khúc Trì",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "肘部",
    "indications": "咽喉痛、牙痛、眼痛、瘰疬、荨麻疹、活动不利。",
    "vi": "Huyệt Khúc Trì (LI11) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肘部. Chủ trị: 咽喉痛、牙痛、眼痛、瘰疬、荨麻疹、活动不利。"
  },
  {
    "code": "LI12",
    "zh": "肘髎",
    "py": "Zhǒuliáo",
    "hanviet": "Trụ Liêu",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "肘部",
    "indications": "麻木。",
    "vi": "Huyệt Trụ Liêu (LI12) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肘部. Chủ trị: 麻木。"
  },
  {
    "code": "LI13",
    "zh": "手五里",
    "py": "Shǒuwǔlǐ",
    "hanviet": "Thủ Ngũ Lý",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "上臂",
    "indications": "瘰疬。",
    "vi": "Huyệt Thủ Ngũ Lý (LI13) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 上臂. Chủ trị: 瘰疬。"
  },
  {
    "code": "LI14",
    "zh": "臂臑",
    "py": "Bìnào",
    "hanviet": "Tý Nhu",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "上臂",
    "indications": "肩痛、瘰疬。",
    "vi": "Huyệt Tý Nhu (LI14) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 上臂. Chủ trị: 肩痛、瘰疬。"
  },
  {
    "code": "LI15",
    "zh": "肩髃",
    "py": "Jiānyú",
    "hanviet": "Kiên Ngung",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "肩部",
    "indications": "肩痛、活动不利、瘰疬。",
    "vi": "Huyệt Kiên Ngung (LI15) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肩部. Chủ trị: 肩痛、活动不利、瘰疬。"
  },
  {
    "code": "LI16",
    "zh": "巨骨",
    "py": "Jùgǔ",
    "hanviet": "Cự Cốt",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "肩部",
    "indications": "活动不利、肩痛。",
    "vi": "Huyệt Cự Cốt (LI16) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 肩部. Chủ trị: 活动不利、肩痛。"
  },
  {
    "code": "LI17",
    "zh": "天鼎",
    "py": "Tiāndǐng",
    "hanviet": "Thiên Đỉnh",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "颈部",
    "indications": "暴喑、失音、咽喉痛、瘰疬、瘿气。",
    "vi": "Huyệt Thiên Đỉnh (LI17) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 颈部. Chủ trị: 暴喑、失音、咽喉痛、瘰疬、瘿气。"
  },
  {
    "code": "LI18",
    "zh": "扶突",
    "py": "Fútū",
    "hanviet": "Phù Đột",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "颈部",
    "indications": "咳嗽、哮喘、咽喉痛、暴喑、失音、瘰疬。",
    "vi": "Huyệt Phù Đột (LI18) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 颈部. Chủ trị: 咳嗽、哮喘、咽喉痛、暴喑、失音、瘰疬。"
  },
  {
    "code": "LI19",
    "zh": "口禾髎",
    "py": "Kǒuhéliáo",
    "hanviet": "Khẩu Hòa Liêu",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "面部",
    "indications": "鼻塞、鼻衄、口歪。",
    "vi": "Huyệt Khẩu Hòa Liêu (LI19) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 面部. Chủ trị: 鼻塞、鼻衄、口歪。"
  },
  {
    "code": "LI20",
    "zh": "迎香",
    "py": "Yíngxiāng",
    "hanviet": "Nghinh Hương",
    "meridian_code": "LI",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (手阳明大肠经 · LI)",
    "region": "面部",
    "indications": "鼻塞、鼻衄、流涕、口歪。",
    "vi": "Huyệt Nghinh Hương (LI20) thuộc Thủ Dương Minh Đại Trường Kinh. Vị trí: 面部. Chủ trị: 鼻塞、鼻衄、流涕、口歪。"
  },
  {
    "code": "ST1",
    "zh": "承泣",
    "py": "Chéngqì",
    "hanviet": "Thừa Khấp",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "目肿痛、眼痛、流泪、眼睑瞤动、面瘫。",
    "vi": "Huyệt Thừa Khấp (ST1) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 目肿痛、眼痛、流泪、眼睑瞤动、面瘫。"
  },
  {
    "code": "ST2",
    "zh": "四白",
    "py": "Sìbái",
    "hanviet": "Tứ Bạch",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "面瘫、眼睑瞤动。",
    "vi": "Huyệt Tứ Bạch (ST2) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动。"
  },
  {
    "code": "ST3",
    "zh": "巨髎",
    "py": "Jùliáo",
    "hanviet": "Cự Liêu",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "面瘫、眼睑瞤动、鼻衄、牙痛。",
    "vi": "Huyệt Cự Liêu (ST3) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动、鼻衄、牙痛。"
  },
  {
    "code": "ST4",
    "zh": "地仓",
    "py": "Dìcāng",
    "hanviet": "Địa Thương",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "口歪、眼睑瞤动。",
    "vi": "Huyệt Địa Thương (ST4) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 口歪、眼睑瞤动。"
  },
  {
    "code": "ST5",
    "zh": "大迎",
    "py": "Dàyíng",
    "hanviet": "Đại Nghinh",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "面瘫、牙关紧闭、颊肿、面痛、牙痛。",
    "vi": "Huyệt Đại Nghinh (ST5) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、牙关紧闭、颊肿、面痛、牙痛。"
  },
  {
    "code": "ST6",
    "zh": "颊车",
    "py": "Jiáchē",
    "hanviet": "Giáp Xa",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "面瘫、牙痛、颊肿、牙关紧闭。",
    "vi": "Huyệt Giáp Xa (ST6) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 面瘫、牙痛、颊肿、牙关紧闭。"
  },
  {
    "code": "ST7",
    "zh": "下关",
    "py": "Xiàguān",
    "hanviet": "Hạ Quan",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "面部",
    "indications": "耳聋、耳鸣、牙痛、面瘫、活动不利。",
    "vi": "Huyệt Hạ Quan (ST7) thuộc Túc Dương Minh Vị Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、牙痛、面瘫、活动不利。"
  },
  {
    "code": "ST8",
    "zh": "头维",
    "py": "Tóuwéi",
    "hanviet": "Đầu Duy",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "头部",
    "indications": "头痛、视物模糊、眼痛、流泪。",
    "vi": "Huyệt Đầu Duy (ST8) thuộc Túc Dương Minh Vị Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、眼痛、流泪。"
  },
  {
    "code": "ST9",
    "zh": "人迎",
    "py": "Rényíng",
    "hanviet": "Nhân Nghinh",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "颈部",
    "indications": "咽喉痛、哮喘、瘿气、头晕。",
    "vi": "Huyệt Nhân Nghinh (ST9) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、瘿气、头晕。"
  },
  {
    "code": "ST10",
    "zh": "水突",
    "py": "Shuǐtū",
    "hanviet": "Thủy Đột",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "颈部",
    "indications": "咽喉痛、哮喘、咳嗽。",
    "vi": "Huyệt Thủy Đột (ST10) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、咳嗽。"
  },
  {
    "code": "ST11",
    "zh": "气舍",
    "py": "Qìshè",
    "hanviet": "Khí Xá",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "颈部",
    "indications": "咽喉痛、哮喘、呃逆、瘿气。",
    "vi": "Huyệt Khí Xá (ST11) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、哮喘、呃逆、瘿气。"
  },
  {
    "code": "ST12",
    "zh": "缺盆",
    "py": "Quēpén",
    "hanviet": "Khuyết Bồn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "颈部",
    "indications": "咳嗽、哮喘、咽喉痛。",
    "vi": "Huyệt Khuyết Bồn (ST12) thuộc Túc Dương Minh Vị Kinh. Vị trí: 颈部. Chủ trị: 咳嗽、哮喘、咽喉痛。"
  },
  {
    "code": "ST13",
    "zh": "气户",
    "py": "Qìhù",
    "hanviet": "Khí Hộ",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "胸满、哮喘、咳嗽、呃逆、胸痛。",
    "vi": "Huyệt Khí Hộ (ST13) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸满、哮喘、咳嗽、呃逆、胸痛。"
  },
  {
    "code": "ST14",
    "zh": "库房",
    "py": "Kùfáng",
    "hanviet": "Khố Phòng",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "胸满、胸痛、咳嗽。",
    "vi": "Huyệt Khố Phòng (ST14) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸满、胸痛、咳嗽。"
  },
  {
    "code": "ST15",
    "zh": "屋翳",
    "py": "Wūyì",
    "hanviet": "Ốc Ế",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、哮喘、乳痈。",
    "vi": "Huyệt Ốc Ế (ST15) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈。"
  },
  {
    "code": "ST16",
    "zh": "膺窗",
    "py": "Yīngchuāng",
    "hanviet": "Ưng Song",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、哮喘、乳痈。",
    "vi": "Huyệt Ưng Song (ST16) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈。"
  },
  {
    "code": "ST17",
    "zh": "乳中",
    "py": "Rǔzhōng",
    "hanviet": "Nhũ Trung",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "乳中用作定位标志；现代针灸标准通常禁针禁灸，不作为操作穴。",
    "vi": "Huyệt Nhũ Trung (ST17) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 乳中用作定位标志；现代针灸标准通常禁针禁灸，不作为操作穴。"
  },
  {
    "code": "ST18",
    "zh": "乳根",
    "py": "Rǔgēn",
    "hanviet": "Nhũ Căn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、哮喘、乳痈、乳少。",
    "vi": "Huyệt Nhũ Căn (ST18) thuộc Túc Dương Minh Vị Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、乳痈、乳少。"
  },
  {
    "code": "ST19",
    "zh": "不容",
    "py": "Bùróng",
    "hanviet": "Bất Dung",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹胀、呕吐、胃痛、食欲不振。",
    "vi": "Huyệt Bất Dung (ST19) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、呕吐、胃痛、食欲不振。"
  },
  {
    "code": "ST20",
    "zh": "承满",
    "py": "Chéngmǎn",
    "hanviet": "Thừa Mãn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "胃痛、腹胀、呕吐、食欲不振。",
    "vi": "Huyệt Thừa Mãn (ST20) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、呕吐、食欲不振。"
  },
  {
    "code": "ST21",
    "zh": "梁门",
    "py": "Liángmén",
    "hanviet": "Lương Môn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "胃痛、呕吐、食欲不振、腹胀、泄泻。",
    "vi": "Huyệt Lương Môn (ST21) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、食欲不振、腹胀、泄泻。"
  },
  {
    "code": "ST22",
    "zh": "关门",
    "py": "Guānmén",
    "hanviet": "Quan Môn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹胀、食欲不振、肠鸣、泄泻、水肿。",
    "vi": "Huyệt Quan Môn (ST22) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、食欲不振、肠鸣、泄泻、水肿。"
  },
  {
    "code": "ST23",
    "zh": "太乙",
    "py": "Tàiyǐ",
    "hanviet": "Thái Ất",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "胃痛、烦躁、癫狂、消化不良。",
    "vi": "Huyệt Thái Ất (ST23) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、烦躁、癫狂、消化不良。"
  },
  {
    "code": "ST24",
    "zh": "滑肉门",
    "py": "Huáròumén",
    "hanviet": "Hoạt Nhục Môn",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "胃痛、呕吐、癫狂。",
    "vi": "Huyệt Hoạt Nhục Môn (ST24) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、癫狂。"
  },
  {
    "code": "ST25",
    "zh": "天枢",
    "py": "Tiānshū",
    "hanviet": "Thiên Xu",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹痛、肠鸣、便秘、泄泻、痢疾、月经不调。",
    "vi": "Huyệt Thiên Xu (ST25) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、便秘、泄泻、痢疾、月经不调。"
  },
  {
    "code": "ST26",
    "zh": "外陵",
    "py": "Wàilíng",
    "hanviet": "Ngoại Lăng",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹痛、疝气、痛经。",
    "vi": "Huyệt Ngoại Lăng (ST26) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、疝气、痛经。"
  },
  {
    "code": "ST27",
    "zh": "大巨",
    "py": "Dàjù",
    "hanviet": "Đại Cự",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹胀、小便不利、疝气。",
    "vi": "Huyệt Đại Cự (ST27) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、小便不利、疝气。"
  },
  {
    "code": "ST28",
    "zh": "水道",
    "py": "Shuǐdào",
    "hanviet": "Thủy Đạo",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹胀、尿潴留、水肿、疝气、痛经。",
    "vi": "Huyệt Thủy Đạo (ST28) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹胀、尿潴留、水肿、疝气、痛经。"
  },
  {
    "code": "ST29",
    "zh": "归来",
    "py": "Guīlái",
    "hanviet": "Quy Lai",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "腹部",
    "indications": "腹痛、疝气、痛经、月经不调、闭经、带下病。",
    "vi": "Huyệt Quy Lai (ST29) thuộc Túc Dương Minh Vị Kinh. Vị trí: 腹部. Chủ trị: 腹痛、疝气、痛经、月经不调、闭经、带下病。"
  },
  {
    "code": "ST30",
    "zh": "气冲",
    "py": "Qìchōng",
    "hanviet": "Khí Xung",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "体表相关区域",
    "indications": "腹痛、肠鸣、疝气、阳痿、痛经、月经不调。",
    "vi": "Huyệt Khí Xung (ST30) thuộc Túc Dương Minh Vị Kinh. Vị trí: 体表相关区域. Chủ trị: 腹痛、肠鸣、疝气、阳痿、痛经、月经不调。"
  },
  {
    "code": "ST31",
    "zh": "髀关",
    "py": "Bìguān",
    "hanviet": "Bễ Quan",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "大腿",
    "indications": "肌肉萎缩、活动不利、麻木。",
    "vi": "Huyệt Bễ Quan (ST31) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 肌肉萎缩、活动不利、麻木。"
  },
  {
    "code": "ST32",
    "zh": "伏兔",
    "py": "Fútù",
    "hanviet": "Phục Thố",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "大腿",
    "indications": "腰痛、活动不利、脚气。",
    "vi": "Huyệt Phục Thố (ST32) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 腰痛、活动不利、脚气。"
  },
  {
    "code": "ST33",
    "zh": "阴市",
    "py": "Yīnshì",
    "hanviet": "Âm Thị",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "大腿",
    "indications": "麻木、活动不利。",
    "vi": "Huyệt Âm Thị (ST33) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 麻木、活动不利。"
  },
  {
    "code": "ST34",
    "zh": "梁丘",
    "py": "Liángqiū",
    "hanviet": "Lương Khâu",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "大腿",
    "indications": "麻木、胃痛、乳痈、活动不利。",
    "vi": "Huyệt Lương Khâu (ST34) thuộc Túc Dương Minh Vị Kinh. Vị trí: 大腿. Chủ trị: 麻木、胃痛、乳痈、活动不利。"
  },
  {
    "code": "ST35",
    "zh": "犊鼻",
    "py": "Dúbí",
    "hanviet": "Độc Tỵ",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "膝部",
    "indications": "麻木、活动不利、脚气。",
    "vi": "Huyệt Độc Tỵ (ST35) thuộc Túc Dương Minh Vị Kinh. Vị trí: 膝部. Chủ trị: 麻木、活动不利、脚气。"
  },
  {
    "code": "ST36",
    "zh": "足三里",
    "py": "Zúsānlǐ",
    "hanviet": "Túc Tam Lý",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "小腿",
    "indications": "胃痛、呕吐、呃逆、腹胀、肠鸣、泄泻。",
    "vi": "Huyệt Túc Tam Lý (ST36) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 胃痛、呕吐、呃逆、腹胀、肠鸣、泄泻。"
  },
  {
    "code": "ST37",
    "zh": "上巨虚",
    "py": "Shàngjùxū",
    "hanviet": "Thượng Cự Hư",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "小腿",
    "indications": "腹痛、肠鸣、泄泻、痢疾、便秘、脚气。",
    "vi": "Huyệt Thượng Cự Hư (ST37) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 腹痛、肠鸣、泄泻、痢疾、便秘、脚气。"
  },
  {
    "code": "ST38",
    "zh": "条口",
    "py": "Tiáokǒu",
    "hanviet": "Điều Khẩu",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "小腿",
    "indications": "麻木、活动不利、腹痛。",
    "vi": "Huyệt Điều Khẩu (ST38) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 麻木、活动不利、腹痛。"
  },
  {
    "code": "ST39",
    "zh": "下巨虚",
    "py": "Xiàjùxū",
    "hanviet": "Hạ Cự Hư",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "小腿",
    "indications": "小腹痛、腹痛、背痛、乳痈、麻木。",
    "vi": "Huyệt Hạ Cự Hư (ST39) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 小腹痛、腹痛、背痛、乳痈、麻木。"
  },
  {
    "code": "ST40",
    "zh": "丰隆",
    "py": "Fēnglóng",
    "hanviet": "Phong Long",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "小腿",
    "indications": "头痛、头晕、眩晕、咳嗽、哮喘、胸痛。",
    "vi": "Huyệt Phong Long (ST40) thuộc Túc Dương Minh Vị Kinh. Vị trí: 小腿. Chủ trị: 头痛、头晕、眩晕、咳嗽、哮喘、胸痛。"
  },
  {
    "code": "ST41",
    "zh": "解溪",
    "py": "Jiěxī",
    "hanviet": "Giải Khê",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "踝部",
    "indications": "踝部症状、肌肉萎缩、活动不利、癫痫、头痛、头晕。",
    "vi": "Huyệt Giải Khê (ST41) thuộc Túc Dương Minh Vị Kinh. Vị trí: 踝部. Chủ trị: 踝部症状、肌肉萎缩、活动不利、癫痫、头痛、头晕。"
  },
  {
    "code": "ST42",
    "zh": "冲阳",
    "py": "Chōngyáng",
    "hanviet": "Xung Dương",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "足部",
    "indications": "面瘫、肌肉萎缩、活动不利。",
    "vi": "Huyệt Xung Dương (ST42) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 面瘫、肌肉萎缩、活动不利。"
  },
  {
    "code": "ST43",
    "zh": "陷谷",
    "py": "Xiàngǔ",
    "hanviet": "Hãm Cốc",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "足部",
    "indications": "水肿、腹痛、肠鸣。",
    "vi": "Huyệt Hãm Cốc (ST43) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 水肿、腹痛、肠鸣。"
  },
  {
    "code": "ST44",
    "zh": "内庭",
    "py": "Nèitíng",
    "hanviet": "Nội Đình",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "足部",
    "indications": "牙痛、口歪、咽喉痛、鼻衄、胃痛、反酸。",
    "vi": "Huyệt Nội Đình (ST44) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足部. Chủ trị: 牙痛、口歪、咽喉痛、鼻衄、胃痛、反酸。"
  },
  {
    "code": "ST45",
    "zh": "厉兑",
    "py": "Lìduì",
    "hanviet": "Lệ Đoái",
    "meridian_code": "ST",
    "meridian": "Túc Dương Minh Vị Kinh (足阳明胃经 · ST)",
    "region": "足趾",
    "indications": "面肿、口歪、鼻衄、牙痛、咽喉痛、腹胀。",
    "vi": "Huyệt Lệ Đoái (ST45) thuộc Túc Dương Minh Vị Kinh. Vị trí: 足趾. Chủ trị: 面肿、口歪、鼻衄、牙痛、咽喉痛、腹胀。"
  },
  {
    "code": "SP1",
    "zh": "隐白",
    "py": "Yǐnbái",
    "hanviet": "Ẩn Bạch",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "足趾",
    "indications": "腹胀、崩漏、神志病、抽搐。",
    "vi": "Huyệt Ẩn Bạch (SP1) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足趾. Chủ trị: 腹胀、崩漏、神志病、抽搐。"
  },
  {
    "code": "SP2",
    "zh": "大都",
    "py": "Dàdū",
    "hanviet": "Đại Đô",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "足趾",
    "indications": "腹胀、胃痛、便秘、热病。",
    "vi": "Huyệt Đại Đô (SP2) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足趾. Chủ trị: 腹胀、胃痛、便秘、热病。"
  },
  {
    "code": "SP3",
    "zh": "太白",
    "py": "Tàibái",
    "hanviet": "Thái Bạch",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "足部",
    "indications": "胃痛、腹胀、便秘、痢疾、呕吐、泄泻。",
    "vi": "Huyệt Thái Bạch (SP3) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 胃痛、腹胀、便秘、痢疾、呕吐、泄泻。"
  },
  {
    "code": "SP4",
    "zh": "公孙",
    "py": "Gōngsūn",
    "hanviet": "Công Tôn",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "足部",
    "indications": "胃痛、呕吐、腹痛、泄泻、痢疾、肠鸣。",
    "vi": "Huyệt Công Tôn (SP4) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 胃痛、呕吐、腹痛、泄泻、痢疾、肠鸣。"
  },
  {
    "code": "SP5",
    "zh": "商丘",
    "py": "Shāngqiū",
    "hanviet": "Thương Khâu",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "足部",
    "indications": "腹胀、便秘、泄泻、肠鸣、踝部症状、痔疮。",
    "vi": "Huyệt Thương Khâu (SP5) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 足部. Chủ trị: 腹胀、便秘、泄泻、肠鸣、踝部症状、痔疮。"
  },
  {
    "code": "SP6",
    "zh": "三阴交",
    "py": "Sānyīnjiāo",
    "hanviet": "Tam Âm Giao",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "小腿",
    "indications": "腹痛、肠鸣、腹胀、泄泻、痛经、月经不调。",
    "vi": "Huyệt Tam Âm Giao (SP6) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、肠鸣、腹胀、泄泻、痛经、月经不调。"
  },
  {
    "code": "SP7",
    "zh": "漏谷",
    "py": "Lòugǔ",
    "hanviet": "Lậu Cốc",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "小腿",
    "indications": "腹胀、肠鸣、麻木。",
    "vi": "Huyệt Lậu Cốc (SP7) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹胀、肠鸣、麻木。"
  },
  {
    "code": "SP8",
    "zh": "地机",
    "py": "Dìjī",
    "hanviet": "Địa 机",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "小腿",
    "indications": "腹痛、泄泻、水肿、小便不利、遗精、月经不调。",
    "vi": "Huyệt Địa 机 (SP8) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、水肿、小便不利、遗精、月经不调。"
  },
  {
    "code": "SP9",
    "zh": "阴陵泉",
    "py": "Yīnlíngquán",
    "hanviet": "Âm Lăng Tuyền",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "小腿",
    "indications": "腹痛、泄泻、痢疾、水肿、黄疸、小便不利。",
    "vi": "Huyệt Âm Lăng Tuyền (SP9) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、痢疾、水肿、黄疸、小便不利。"
  },
  {
    "code": "SP10",
    "zh": "血海",
    "py": "Xuèhǎi",
    "hanviet": "Huyết Hải",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "大腿",
    "indications": "月经不调、痛经、崩漏、闭经、荨麻疹、湿疹。",
    "vi": "Huyệt Huyết Hải (SP10) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 大腿. Chủ trị: 月经不调、痛经、崩漏、闭经、荨麻疹、湿疹。"
  },
  {
    "code": "SP11",
    "zh": "箕门",
    "py": "Jīmén",
    "hanviet": "Cơ Môn",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "大腿",
    "indications": "小便不利、遗尿、肌肉萎缩、活动不利。",
    "vi": "Huyệt Cơ Môn (SP11) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 大腿. Chủ trị: 小便不利、遗尿、肌肉萎缩、活动不利。"
  },
  {
    "code": "SP12",
    "zh": "冲门",
    "py": "Chōngmén",
    "hanviet": "Xung Môn",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "体表相关区域",
    "indications": "腹痛、疝气、小便不利。",
    "vi": "Huyệt Xung Môn (SP12) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 体表相关区域. Chủ trị: 腹痛、疝气、小便不利。"
  },
  {
    "code": "SP13",
    "zh": "府舍",
    "py": "Fǔshè",
    "hanviet": "Phủ Xá",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "腹部",
    "indications": "小腹痛、腹痛、疝气。",
    "vi": "Huyệt Phủ Xá (SP13) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 小腹痛、腹痛、疝气。"
  },
  {
    "code": "SP14",
    "zh": "腹结",
    "py": "Fùjié",
    "hanviet": "腹 Kết",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "腹部",
    "indications": "腹胀、疝气、泄泻、便秘。",
    "vi": "Huyệt 腹 Kết (SP14) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹胀、疝气、泄泻、便秘。"
  },
  {
    "code": "SP15",
    "zh": "大横",
    "py": "Dàhéng",
    "hanviet": "Đại Hoành",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "腹部",
    "indications": "腹痛、泄泻、痢疾、便秘。",
    "vi": "Huyệt Đại Hoành (SP15) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、痢疾、便秘。"
  },
  {
    "code": "SP16",
    "zh": "腹哀",
    "py": "Fù’āi",
    "hanviet": "腹 Ai",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "腹部",
    "indications": "腹痛、消化不良、便秘、痢疾。",
    "vi": "Huyệt 腹 Ai (SP16) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 腹部. Chủ trị: 腹痛、消化不良、便秘、痢疾。"
  },
  {
    "code": "SP17",
    "zh": "食窦",
    "py": "Shídòu",
    "hanviet": "Thực Đậu",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "胸前部",
    "indications": "胸痛。",
    "vi": "Huyệt Thực Đậu (SP17) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛。"
  },
  {
    "code": "SP18",
    "zh": "天溪",
    "py": "Tiānxī",
    "hanviet": "Thiên Khê",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、呃逆、乳痈、乳少。",
    "vi": "Huyệt Thiên Khê (SP18) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、呃逆、乳痈、乳少。"
  },
  {
    "code": "SP19",
    "zh": "胸乡",
    "py": "Xiōngxiāng",
    "hanviet": "Hung Hương",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "胸前部",
    "indications": "胸痛。",
    "vi": "Huyệt Hung Hương (SP19) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸痛。"
  },
  {
    "code": "SP20",
    "zh": "周荣",
    "py": "Zhōuróng",
    "hanviet": "Chu 荣",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "胸前部",
    "indications": "胸满、咳嗽、呃逆。",
    "vi": "Huyệt Chu 荣 (SP20) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸前部. Chủ trị: 胸满、咳嗽、呃逆。"
  },
  {
    "code": "SP21",
    "zh": "大包",
    "py": "Dàbāo",
    "hanviet": "Đại Bao",
    "meridian_code": "SP",
    "meridian": "Túc Thái Âm Tỳ Kinh (足太阴脾经 · SP)",
    "region": "胸侧部",
    "indications": "胸痛、哮喘。",
    "vi": "Huyệt Đại Bao (SP21) thuộc Túc Thái Âm Tỳ Kinh. Vị trí: 胸侧部. Chủ trị: 胸痛、哮喘。"
  },
  {
    "code": "HT1",
    "zh": "极泉",
    "py": "Jíquán",
    "hanviet": "Cực Tuyền",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "腋部",
    "indications": "瘰疬、干燥相关症状。",
    "vi": "Huyệt Cực Tuyền (HT1) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 腋部. Chủ trị: 瘰疬、干燥相关症状。"
  },
  {
    "code": "HT2",
    "zh": "青灵",
    "py": "Qīnglíng",
    "hanviet": "Thanh Linh",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "上臂",
    "indications": "心痛、胁痛、肩臂痛。",
    "vi": "Huyệt Thanh Linh (HT2) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 上臂. Chủ trị: 心痛、胁痛、肩臂痛。"
  },
  {
    "code": "HT3",
    "zh": "少海",
    "py": "Shàohǎi",
    "hanviet": "Thiếu Hải",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "肘部",
    "indications": "心痛、麻木、瘰疬。",
    "vi": "Huyệt Thiếu Hải (HT3) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 肘部. Chủ trị: 心痛、麻木、瘰疬。"
  },
  {
    "code": "HT4",
    "zh": "灵道",
    "py": "Língdào",
    "hanviet": "Linh Đạo",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "前臂",
    "indications": "心痛、肘臂挛痛、暴喑、失音。",
    "vi": "Huyệt Linh Đạo (HT4) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心痛、肘臂挛痛、暴喑、失音。"
  },
  {
    "code": "HT5",
    "zh": "通里",
    "py": "Tōnglǐ",
    "hanviet": "Thông Lý",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "前臂",
    "indications": "心悸、头晕、视物模糊、咽喉痛、暴喑、失音。",
    "vi": "Huyệt Thông Lý (HT5) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心悸、头晕、视物模糊、咽喉痛、暴喑、失音。"
  },
  {
    "code": "HT6",
    "zh": "阴郄",
    "py": "Yīnxì",
    "hanviet": "Âm 郄",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "前臂",
    "indications": "心痛、盗汗、咯血、鼻衄、暴喑、失音。",
    "vi": "Huyệt Âm 郄 (HT6) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 前臂. Chủ trị: 心痛、盗汗、咯血、鼻衄、暴喑、失音。"
  },
  {
    "code": "HT7",
    "zh": "神门",
    "py": "Shénmén",
    "hanviet": "Thần Môn",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "腕部",
    "indications": "心痛、烦躁、心悸、失眠、癫狂、癫痫。",
    "vi": "Huyệt Thần Môn (HT7) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 腕部. Chủ trị: 心痛、烦躁、心悸、失眠、癫狂、癫痫。"
  },
  {
    "code": "HT8",
    "zh": "少府",
    "py": "Shàofǔ",
    "hanviet": "Thiếu Phủ",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "手掌",
    "indications": "心悸、胸痛、掌心热、遗尿、小便不利、瘙痒。",
    "vi": "Huyệt Thiếu Phủ (HT8) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 手掌. Chủ trị: 心悸、胸痛、掌心热、遗尿、小便不利、瘙痒。"
  },
  {
    "code": "HT9",
    "zh": "少冲",
    "py": "Shàochōng",
    "hanviet": "Thiếu Xung",
    "meridian_code": "HT",
    "meridian": "Thủ Thiếu Âm Tâm Kinh (手少阴心经 · HT)",
    "region": "手指",
    "indications": "心悸、心痛、胸痛、癫狂、热病、昏厥。",
    "vi": "Huyệt Thiếu Xung (HT9) thuộc Thủ Thiếu Âm Tâm Kinh. Vị trí: 手指. Chủ trị: 心悸、心痛、胸痛、癫狂、热病、昏厥。"
  },
  {
    "code": "SI1",
    "zh": "少泽",
    "py": "Shàozé",
    "hanviet": "Thiếu Trạch",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "手指",
    "indications": "头痛、热病、昏厥、乳少、咽喉痛、目赤。",
    "vi": "Huyệt Thiếu Trạch (SI1) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 头痛、热病、昏厥、乳少、咽喉痛、目赤。"
  },
  {
    "code": "SI2",
    "zh": "前谷",
    "py": "Qiángǔ",
    "hanviet": "Tiền Cốc",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "手指",
    "indications": "麻木、热病、耳鸣、头痛。",
    "vi": "Huyệt Tiền Cốc (SI2) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 麻木、热病、耳鸣、头痛。"
  },
  {
    "code": "SI3",
    "zh": "后溪",
    "py": "Hòuxī",
    "hanviet": "Hậu Khê",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "手指",
    "indications": "耳鸣、耳聋、咽喉痛、癫狂、疟疾、盗汗。",
    "vi": "Huyệt Hậu Khê (SI3) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 手指. Chủ trị: 耳鸣、耳聋、咽喉痛、癫狂、疟疾、盗汗。"
  },
  {
    "code": "SI4",
    "zh": "腕骨",
    "py": "Wàngǔ",
    "hanviet": "Uyển Cốt",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "腕部",
    "indications": "热病、头痛、腕痛、黄疸。",
    "vi": "Huyệt Uyển Cốt (SI4) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 腕部. Chủ trị: 热病、头痛、腕痛、黄疸。"
  },
  {
    "code": "SI5",
    "zh": "阳谷",
    "py": "Yánggǔ",
    "hanviet": "Dương Cốc",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "腕部",
    "indications": "热病。",
    "vi": "Huyệt Dương Cốc (SI5) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 腕部. Chủ trị: 热病。"
  },
  {
    "code": "SI6",
    "zh": "养老",
    "py": "Yǎnglǎo",
    "hanviet": "Dưỡng Lão",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "前臂",
    "indications": "视物模糊、肩痛。",
    "vi": "Huyệt Dưỡng Lão (SI6) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 前臂. Chủ trị: 视物模糊、肩痛。"
  },
  {
    "code": "SI7",
    "zh": "支正",
    "py": "Zhīzhèng",
    "hanviet": "Chi Chánh",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "前臂",
    "indications": "项强、头痛、头晕、肘痛、热病、癫狂。",
    "vi": "Huyệt Chi Chánh (SI7) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 前臂. Chủ trị: 项强、头痛、头晕、肘痛、热病、癫狂。"
  },
  {
    "code": "SI8",
    "zh": "小海",
    "py": "Xiǎohǎi",
    "hanviet": "Tiểu Hải",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "肘部",
    "indications": "头痛、颊肿、癫痫。",
    "vi": "Huyệt Tiểu Hải (SI8) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肘部. Chủ trị: 头痛、颊肿、癫痫。"
  },
  {
    "code": "SI9",
    "zh": "肩贞",
    "py": "Jiānzhēn",
    "hanviet": "Kiên Trinh",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "肩部",
    "indications": "活动不利。",
    "vi": "Huyệt Kiên Trinh (SI9) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肩部. Chủ trị: 活动不利。"
  },
  {
    "code": "SI10",
    "zh": "臑俞",
    "py": "Nàoshū",
    "hanviet": "Nhu Du",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "肩部",
    "indications": "肩部肿痛、肩臂酸痛无力。",
    "vi": "Huyệt Nhu Du (SI10) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 肩部. Chủ trị: 肩部肿痛、肩臂酸痛无力。"
  },
  {
    "code": "SI11",
    "zh": "天宗",
    "py": "Tiānzōng",
    "hanviet": "Thiên Tông",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "体表相关区域",
    "indications": "哮喘。",
    "vi": "Huyệt Thiên Tông (SI11) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 哮喘。"
  },
  {
    "code": "SI12",
    "zh": "秉风",
    "py": "Bǐngfēng",
    "hanviet": "Bỉnh Phong",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "体表相关区域",
    "indications": "麻木、活动不利。",
    "vi": "Huyệt Bỉnh Phong (SI12) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 麻木、活动不利。"
  },
  {
    "code": "SI13",
    "zh": "曲垣",
    "py": "Qūyuán",
    "hanviet": "Khúc 垣",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "体表相关区域",
    "indications": "拘急强直。",
    "vi": "Huyệt Khúc 垣 (SI13) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 体表相关区域. Chủ trị: 拘急强直。"
  },
  {
    "code": "SI14",
    "zh": "肩外俞",
    "py": "Jiānwàishū",
    "hanviet": "Kiên Ngoại Du",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "背部",
    "indications": "肩背酸痛、颈项拘急疼痛。",
    "vi": "Huyệt Kiên Ngoại Du (SI14) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 背部. Chủ trị: 肩背酸痛、颈项拘急疼痛。"
  },
  {
    "code": "SI15",
    "zh": "肩中俞",
    "py": "Jiānzhōngshū",
    "hanviet": "Kiên Trung Du",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "背部",
    "indications": "咳嗽、气喘、肩背痛。",
    "vi": "Huyệt Kiên Trung Du (SI15) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 背部. Chủ trị: 咳嗽、气喘、肩背痛。"
  },
  {
    "code": "SI16",
    "zh": "天窗",
    "py": "Tiānchuāng",
    "hanviet": "Thiên Song",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "颈部",
    "indications": "咽喉痛、暴喑、失音、耳聋、耳鸣、拘急强直。",
    "vi": "Huyệt Thiên Song (SI16) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 颈部. Chủ trị: 咽喉痛、暴喑、失音、耳聋、耳鸣、拘急强直。"
  },
  {
    "code": "SI17",
    "zh": "天容",
    "py": "Tiānróng",
    "hanviet": "Thiên Dung",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "颈部",
    "indications": "耳聋、耳鸣、咽喉痛、颊肿、瘿气。",
    "vi": "Huyệt Thiên Dung (SI17) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 颈部. Chủ trị: 耳聋、耳鸣、咽喉痛、颊肿、瘿气。"
  },
  {
    "code": "SI18",
    "zh": "颧髎",
    "py": "Quánliáo",
    "hanviet": "颧 Liêu",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "面部",
    "indications": "面瘫、眼睑瞤动、牙痛、颊肿。",
    "vi": "Huyệt 颧 Liêu (SI18) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 面部. Chủ trị: 面瘫、眼睑瞤动、牙痛、颊肿。"
  },
  {
    "code": "SI19",
    "zh": "听宫",
    "py": "Tīnggōng",
    "hanviet": "Thính Cung",
    "meridian_code": "SI",
    "meridian": "Thủ Thái Dương Tiểu Trường Kinh (手太阳小肠经 · SI)",
    "region": "面部",
    "indications": "耳聋、耳鸣、活动不利、牙痛。",
    "vi": "Huyệt Thính Cung (SI19) thuộc Thủ Thái Dương Tiểu Trường Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、活动不利、牙痛。"
  },
  {
    "code": "BL1",
    "zh": "睛明",
    "py": "Jīngmíng",
    "hanviet": "Tình Minh",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "面部",
    "indications": "目肿痛、眼痛、流泪、视物模糊。",
    "vi": "Huyệt Tình Minh (BL1) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 面部. Chủ trị: 目肿痛、眼痛、流泪、视物模糊。"
  },
  {
    "code": "BL2",
    "zh": "攒竹",
    "py": "Cuánzhú",
    "hanviet": "Toản Trúc",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、流泪、目肿痛、眼痛、眼睑瞤动。",
    "vi": "Huyệt Toản Trúc (BL2) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、流泪、目肿痛、眼痛、眼睑瞤动。"
  },
  {
    "code": "BL3",
    "zh": "眉冲",
    "py": "Méichōng",
    "hanviet": "Mi Xung",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、癫痫、鼻塞。",
    "vi": "Huyệt Mi Xung (BL3) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、癫痫、鼻塞。"
  },
  {
    "code": "BL4",
    "zh": "曲差",
    "py": "Qūchā",
    "hanviet": "Khúc Sai",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、鼻塞、鼻衄。",
    "vi": "Huyệt Khúc Sai (BL4) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、鼻塞、鼻衄。"
  },
  {
    "code": "BL5",
    "zh": "五处",
    "py": "Wǔchù",
    "hanviet": "Ngũ Xử",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、视物模糊、癫痫、抽搐。",
    "vi": "Huyệt Ngũ Xử (BL5) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、癫痫、抽搐。"
  },
  {
    "code": "BL6",
    "zh": "承光",
    "py": "Chéngguāng",
    "hanviet": "Thừa Quang",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、视物模糊、鼻塞。",
    "vi": "Huyệt Thừa Quang (BL6) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、视物模糊、鼻塞。"
  },
  {
    "code": "BL7",
    "zh": "通天",
    "py": "Tōngtiān",
    "hanviet": "Thông Thiên",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、鼻塞、鼻衄、流涕。",
    "vi": "Huyệt Thông Thiên (BL7) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、鼻塞、鼻衄、流涕。"
  },
  {
    "code": "BL8",
    "zh": "络却",
    "py": "Luòquè",
    "hanviet": "Lạc Khước",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头晕、视物模糊、耳鸣、癫狂。",
    "vi": "Huyệt Lạc Khước (BL8) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头晕、视物模糊、耳鸣、癫狂。"
  },
  {
    "code": "BL9",
    "zh": "玉枕",
    "py": "Yùzhěn",
    "hanviet": "Ngọc Chẩm",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "头部",
    "indications": "头痛、头晕、眼痛、鼻塞。",
    "vi": "Huyệt Ngọc Chẩm (BL9) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 头部. Chủ trị: 头痛、头晕、眼痛、鼻塞。"
  },
  {
    "code": "BL10",
    "zh": "天柱",
    "py": "Tiānzhù",
    "hanviet": "Thiên Trụ",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "颈部",
    "indications": "头痛、鼻塞、咽喉痛、项强、肩痛。",
    "vi": "Huyệt Thiên Trụ (BL10) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 颈部. Chủ trị: 头痛、鼻塞、咽喉痛、项强、肩痛。"
  },
  {
    "code": "BL11",
    "zh": "大杼",
    "py": "Dàzhù",
    "hanviet": "Đại Trữ",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "头痛、颈痛、咳嗽、发热、项强。",
    "vi": "Huyệt Đại Trữ (BL11) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 头痛、颈痛、咳嗽、发热、项强。"
  },
  {
    "code": "BL12",
    "zh": "风门",
    "py": "Fēngmén",
    "hanviet": "Phong Môn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咳嗽、发热、头痛、项强、背痛。",
    "vi": "Huyệt Phong Môn (BL12) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、发热、头痛、项强、背痛。"
  },
  {
    "code": "BL13",
    "zh": "肺俞",
    "py": "Fèishū",
    "hanviet": "Phế Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咳嗽、哮喘、胸痛、唾血、发热、盗汗。",
    "vi": "Huyệt Phế Du (BL13) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、胸痛、唾血、发热、盗汗。"
  },
  {
    "code": "BL14",
    "zh": "厥阴俞",
    "py": "Juéyīnshū",
    "hanviet": "厥 Âm Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咳嗽、心痛、心悸、呕吐。",
    "vi": "Huyệt 厥 Âm Du (BL14) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、心痛、心悸、呕吐。"
  },
  {
    "code": "BL15",
    "zh": "心俞",
    "py": "Xīnshū",
    "hanviet": "Tâm Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "心痛、心悸、咳嗽、唾血、遗精、盗汗。",
    "vi": "Huyệt Tâm Du (BL15) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 心痛、心悸、咳嗽、唾血、遗精、盗汗。"
  },
  {
    "code": "BL16",
    "zh": "督俞",
    "py": "Dūshū",
    "hanviet": "Đốc Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "心痛、胸腹痛、寒热。",
    "vi": "Huyệt Đốc Du (BL16) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 心痛、胸腹痛、寒热。"
  },
  {
    "code": "BL17",
    "zh": "膈俞",
    "py": "Géshū",
    "hanviet": "Cách Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "呕吐、呃逆、吞咽困难、哮喘、咳嗽、唾血。",
    "vi": "Huyệt Cách Du (BL17) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 呕吐、呃逆、吞咽困难、哮喘、咳嗽、唾血。"
  },
  {
    "code": "BL18",
    "zh": "肝俞",
    "py": "Gānshū",
    "hanviet": "Can Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "黄疸、胁痛、目赤、视物模糊、神志病、癫痫。",
    "vi": "Huyệt Can Du (BL18) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 黄疸、胁痛、目赤、视物模糊、神志病、癫痫。"
  },
  {
    "code": "BL19",
    "zh": "胆俞",
    "py": "Dǎnshū",
    "hanviet": "Đởm Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "黄疸、胸痛、发热。",
    "vi": "Huyệt Đởm Du (BL19) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 黄疸、胸痛、发热。"
  },
  {
    "code": "BL20",
    "zh": "脾俞",
    "py": "Píshū",
    "hanviet": "Tỳ Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "腹胀、黄疸、呕吐、泄泻、痢疾、水肿。",
    "vi": "Huyệt Tỳ Du (BL20) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、黄疸、呕吐、泄泻、痢疾、水肿。"
  },
  {
    "code": "BL21",
    "zh": "胃俞",
    "py": "Wèishū",
    "hanviet": "Vị Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "胸痛、食欲不振、腹胀、肠鸣、泄泻、恶心。",
    "vi": "Huyệt Vị Du (BL21) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 胸痛、食欲不振、腹胀、肠鸣、泄泻、恶心。"
  },
  {
    "code": "BL22",
    "zh": "三焦俞",
    "py": "Sānjiāoshū",
    "hanviet": "Tam Tiêu Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "肠鸣、腹胀、消化不良、呕吐、泄泻、痢疾。",
    "vi": "Huyệt Tam Tiêu Du (BL22) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 肠鸣、腹胀、消化不良、呕吐、泄泻、痢疾。"
  },
  {
    "code": "BL23",
    "zh": "肾俞",
    "py": "Shènshū",
    "hanviet": "Thận Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "遗精、阳痿、遗尿、月经不调、带下病、腰痛。",
    "vi": "Huyệt Thận Du (BL23) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 遗精、阳痿、遗尿、月经不调、带下病、腰痛。"
  },
  {
    "code": "BL24",
    "zh": "气海俞",
    "py": "Qìhǎishū",
    "hanviet": "Khí Hải Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "腰痛、月经不调、痛经、哮喘。",
    "vi": "Huyệt Khí Hải Du (BL24) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰痛、月经不调、痛经、哮喘。"
  },
  {
    "code": "BL25",
    "zh": "大肠俞",
    "py": "Dàchángshū",
    "hanviet": "Đại Trường Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "腰痛、肠鸣、腹胀、泄泻、便秘、肌肉萎缩。",
    "vi": "Huyệt Đại Trường Du (BL25) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰痛、肠鸣、腹胀、泄泻、便秘、肌肉萎缩。"
  },
  {
    "code": "BL26",
    "zh": "关元俞",
    "py": "Guānyuánshū",
    "hanviet": "Quan Nguyên Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "腰骶痛、腹胀、泄泻。",
    "vi": "Huyệt Quan Nguyên Du (BL26) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腰骶痛、腹胀、泄泻。"
  },
  {
    "code": "BL27",
    "zh": "小肠俞",
    "py": "Xiǎochángshū",
    "hanviet": "Tiểu Trường Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "小腹胀痛、遗精、遗尿、腰骶痛。",
    "vi": "Huyệt Tiểu Trường Du (BL27) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 小腹胀痛、遗精、遗尿、腰骶痛。"
  },
  {
    "code": "BL28",
    "zh": "膀胱俞",
    "py": "Pángguāngshū",
    "hanviet": "Bàng Quang Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "小便不利、遗尿、腰骶痛。",
    "vi": "Huyệt Bàng Quang Du (BL28) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 小便不利、遗尿、腰骶痛。"
  },
  {
    "code": "BL29",
    "zh": "中膂俞",
    "py": "Zhōnglǚshū",
    "hanviet": "Trung 膂 Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "痢疾、疝气、拘急强直。",
    "vi": "Huyệt Trung 膂 Du (BL29) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 痢疾、疝气、拘急强直。"
  },
  {
    "code": "BL30",
    "zh": "白环俞",
    "py": "Báihuánshū",
    "hanviet": "Bạch Hoàn Du",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "遗尿、疝气、带下病、月经不调、小便不利、便秘。",
    "vi": "Huyệt Bạch Hoàn Du (BL30) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 遗尿、疝气、带下病、月经不调、小便不利、便秘。"
  },
  {
    "code": "BL31",
    "zh": "上髎",
    "py": "Shàngliáo",
    "hanviet": "Thượng Liêu",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "腰痛、小便不利、便秘、月经不调、带下病、子宫脱垂。",
    "vi": "Huyệt Thượng Liêu (BL31) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、小便不利、便秘、月经不调、带下病、子宫脱垂。"
  },
  {
    "code": "BL32",
    "zh": "次髎",
    "py": "Cìliáo",
    "hanviet": "Thứ Liêu",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "腰痛、疝气、月经不调、带下病、痛经、遗精。",
    "vi": "Huyệt Thứ Liêu (BL32) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、疝气、月经不调、带下病、痛经、遗精。"
  },
  {
    "code": "BL33",
    "zh": "中髎",
    "py": "Zhōngliáo",
    "hanviet": "Trung Liêu",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "腰痛、便秘、泄泻、小便不利、月经不调、带下病。",
    "vi": "Huyệt Trung Liêu (BL33) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、便秘、泄泻、小便不利、月经不调、带下病。"
  },
  {
    "code": "BL34",
    "zh": "下髎",
    "py": "Xiàliáo",
    "hanviet": "Hạ Liêu",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "骶部",
    "indications": "腰痛、小腹痛、腹痛、小便不利、便秘、带下病。",
    "vi": "Huyệt Hạ Liêu (BL34) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 骶部. Chủ trị: 腰痛、小腹痛、腹痛、小便不利、便秘、带下病。"
  },
  {
    "code": "BL35",
    "zh": "会阳",
    "py": "Huìyáng",
    "hanviet": "Hội Dương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "臀部",
    "indications": "痢疾、泄泻、痔疮、阳痿、带下病。",
    "vi": "Huyệt Hội Dương (BL35) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 痢疾、泄泻、痔疮、阳痿、带下病。"
  },
  {
    "code": "BL36",
    "zh": "承扶",
    "py": "Chéngfú",
    "hanviet": "Thừa Phù",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "臀部",
    "indications": "便秘、肌肉萎缩、麻木、活动不利。",
    "vi": "Huyệt Thừa Phù (BL36) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 便秘、肌肉萎缩、麻木、活动不利。"
  },
  {
    "code": "BL37",
    "zh": "殷门",
    "py": "Yīnmén",
    "hanviet": "殷 Môn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "大腿",
    "indications": "肌肉萎缩、麻木、活动不利、半身不遂。",
    "vi": "Huyệt 殷 Môn (BL37) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 大腿. Chủ trị: 肌肉萎缩、麻木、活动不利、半身不遂。"
  },
  {
    "code": "BL38",
    "zh": "浮郄",
    "py": "Fúxì",
    "hanviet": "Phù 郄",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "膝部",
    "indications": "麻木。",
    "vi": "Huyệt Phù 郄 (BL38) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 麻木。"
  },
  {
    "code": "BL39",
    "zh": "委阳",
    "py": "Wěiyáng",
    "hanviet": "委 Dương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "膝部",
    "indications": "拘急强直、水肿、小便不利。",
    "vi": "Huyệt 委 Dương (BL39) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 拘急强直、水肿、小便不利。"
  },
  {
    "code": "BL40",
    "zh": "委中",
    "py": "Wěizhōng",
    "hanviet": "委 Trung",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "膝部",
    "indications": "腰痛、活动不利、髋部症状、肌肉萎缩、麻木、半身不遂。",
    "vi": "Huyệt 委 Trung (BL40) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 膝部. Chủ trị: 腰痛、活动不利、髋部症状、肌肉萎缩、麻木、半身不遂。"
  },
  {
    "code": "BL41",
    "zh": "附分",
    "py": "Fùfēn",
    "hanviet": "Phụ Phân",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "拘急强直、肩痛、麻木。",
    "vi": "Huyệt Phụ Phân (BL41) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 拘急强直、肩痛、麻木。"
  },
  {
    "code": "BL42",
    "zh": "魄户",
    "py": "Pòhù",
    "hanviet": "魄 Hộ",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咯血、咳嗽、哮喘、项强、肩痛。",
    "vi": "Huyệt 魄 Hộ (BL42) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咯血、咳嗽、哮喘、项强、肩痛。"
  },
  {
    "code": "BL43",
    "zh": "膏肓",
    "py": "Gāohuāng",
    "hanviet": "膏 肓",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咳嗽、哮喘、唾血、盗汗、遗精。",
    "vi": "Huyệt 膏 肓 (BL43) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、唾血、盗汗、遗精。"
  },
  {
    "code": "BL44",
    "zh": "神堂",
    "py": "Shéntáng",
    "hanviet": "Thần Đường",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "哮喘、心痛、心悸、咳嗽、拘急强直。",
    "vi": "Huyệt Thần Đường (BL44) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 哮喘、心痛、心悸、咳嗽、拘急强直。"
  },
  {
    "code": "BL45",
    "zh": "譩譆",
    "py": "Yìxǐ",
    "hanviet": "譩 譆",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "咳嗽、哮喘、肩痛。",
    "vi": "Huyệt 譩 譆 (BL45) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、肩痛。"
  },
  {
    "code": "BL46",
    "zh": "膈关",
    "py": "Géguān",
    "hanviet": "Cách Quan",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "吞咽困难、呃逆、呕吐、拘急强直。",
    "vi": "Huyệt Cách Quan (BL46) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 吞咽困难、呃逆、呕吐、拘急强直。"
  },
  {
    "code": "BL47",
    "zh": "魂门",
    "py": "Húnmén",
    "hanviet": "Hồn Môn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "胸痛、呕吐、泄泻。",
    "vi": "Huyệt Hồn Môn (BL47) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 胸痛、呕吐、泄泻。"
  },
  {
    "code": "BL48",
    "zh": "阳纲",
    "py": "Yánggāng",
    "hanviet": "Dương 纲",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "肠鸣、腹痛、泄泻、胁痛、黄疸。",
    "vi": "Huyệt Dương 纲 (BL48) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 肠鸣、腹痛、泄泻、胁痛、黄疸。"
  },
  {
    "code": "BL49",
    "zh": "意舍",
    "py": "Yìshè",
    "hanviet": "意 Xá",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "腹胀、肠鸣、呕吐、泄泻、吞咽困难。",
    "vi": "Huyệt 意 Xá (BL49) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、肠鸣、呕吐、泄泻、吞咽困难。"
  },
  {
    "code": "BL50",
    "zh": "胃仓",
    "py": "Wèicāng",
    "hanviet": "Vị Thương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "背部",
    "indications": "腹胀、消化不良。",
    "vi": "Huyệt Vị Thương (BL50) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 背部. Chủ trị: 腹胀、消化不良。"
  },
  {
    "code": "BL51",
    "zh": "肓门",
    "py": "Huāngmén",
    "hanviet": "肓 Môn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "腹痛、便秘。",
    "vi": "Huyệt 肓 Môn (BL51) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 腹痛、便秘。"
  },
  {
    "code": "BL52",
    "zh": "志室",
    "py": "Zhìshì",
    "hanviet": "Chí Thất",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "腰部",
    "indications": "遗精、阳痿、遗尿、小便不利、月经不调、水肿。",
    "vi": "Huyệt Chí Thất (BL52) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 腰部. Chủ trị: 遗精、阳痿、遗尿、小便不利、月经不调、水肿。"
  },
  {
    "code": "BL53",
    "zh": "胞肓",
    "py": "Bāohuāng",
    "hanviet": "Bào 肓",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "臀部",
    "indications": "肠鸣、腹胀。",
    "vi": "Huyệt Bào 肓 (BL53) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 肠鸣、腹胀。"
  },
  {
    "code": "BL54",
    "zh": "秩边",
    "py": "Zhìbiān",
    "hanviet": "Trật Biên",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "臀部",
    "indications": "肌肉萎缩、活动不利、小便不利、痔疮、便秘。",
    "vi": "Huyệt Trật Biên (BL54) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 臀部. Chủ trị: 肌肉萎缩、活动不利、小便不利、痔疮、便秘。"
  },
  {
    "code": "BL55",
    "zh": "合阳",
    "py": "Héyáng",
    "hanviet": "Hợp Dương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "小腿",
    "indications": "腰痛。",
    "vi": "Huyệt Hợp Dương (BL55) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 腰痛。"
  },
  {
    "code": "BL56",
    "zh": "承筋",
    "py": "Chéngjīn",
    "hanviet": "Thừa Cân",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "小腿",
    "indications": "痔疮。",
    "vi": "Huyệt Thừa Cân (BL56) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 痔疮。"
  },
  {
    "code": "BL57",
    "zh": "承山",
    "py": "Chéngshān",
    "hanviet": "Thừa Sơn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "小腿",
    "indications": "腰痛、痔疮、便秘、脚气。",
    "vi": "Huyệt Thừa Sơn (BL57) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 腰痛、痔疮、便秘、脚气。"
  },
  {
    "code": "BL58",
    "zh": "飞扬",
    "py": "Fēiyáng",
    "hanviet": "Phi Dương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "小腿",
    "indications": "头痛、视物模糊、鼻塞、鼻衄、痔疮。",
    "vi": "Huyệt Phi Dương (BL58) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 头痛、视物模糊、鼻塞、鼻衄、痔疮。"
  },
  {
    "code": "BL59",
    "zh": "跗阳",
    "py": "Fūyáng",
    "hanviet": "跗 Dương",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "小腿",
    "indications": "头痛、腰痛。",
    "vi": "Huyệt 跗 Dương (BL59) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 小腿. Chủ trị: 头痛、腰痛。"
  },
  {
    "code": "BL60",
    "zh": "昆仑",
    "py": "Kūnlún",
    "hanviet": "Côn Lôn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "踝部",
    "indications": "头痛、视物模糊、项强、鼻衄、肩痛、癫痫。",
    "vi": "Huyệt Côn Lôn (BL60) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 踝部. Chủ trị: 头痛、视物模糊、项强、鼻衄、肩痛、癫痫。"
  },
  {
    "code": "BL61",
    "zh": "仆参",
    "py": "Púcān",
    "hanviet": "Bộc Tham",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足部",
    "indications": "肌肉萎缩、足跟痛。",
    "vi": "Huyệt Bộc Tham (BL61) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 肌肉萎缩、足跟痛。"
  },
  {
    "code": "BL62",
    "zh": "申脉",
    "py": "Shēnmài",
    "hanviet": "Thân Mạch",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足部",
    "indications": "癫痫、癫狂、头痛、头晕、失眠、背痛。",
    "vi": "Huyệt Thân Mạch (BL62) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫痫、癫狂、头痛、头晕、失眠、背痛。"
  },
  {
    "code": "BL63",
    "zh": "金门",
    "py": "Jīnmén",
    "hanviet": "Kim Môn",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足部",
    "indications": "癫狂、癫痫、小儿惊风、抽搐、背痛、活动不利。",
    "vi": "Huyệt Kim Môn (BL63) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫狂、癫痫、小儿惊风、抽搐、背痛、活动不利。"
  },
  {
    "code": "BL64",
    "zh": "京骨",
    "py": "Jīnggǔ",
    "hanviet": "京 Cốt",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足部",
    "indications": "头痛、项强、癫痫。",
    "vi": "Huyệt 京 Cốt (BL64) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 头痛、项强、癫痫。"
  },
  {
    "code": "BL65",
    "zh": "束骨",
    "py": "Shùgǔ",
    "hanviet": "Thúc Cốt",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足部",
    "indications": "癫狂、头痛、项强、视物模糊、背痛。",
    "vi": "Huyệt Thúc Cốt (BL65) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足部. Chủ trị: 癫狂、头痛、项强、视物模糊、背痛。"
  },
  {
    "code": "BL66",
    "zh": "足通谷",
    "py": "Zútōnggǔ",
    "hanviet": "Túc Thông Cốc",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足趾",
    "indications": "头痛、项强、视物模糊、鼻衄、癫狂。",
    "vi": "Huyệt Túc Thông Cốc (BL66) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足趾. Chủ trị: 头痛、项强、视物模糊、鼻衄、癫狂。"
  },
  {
    "code": "BL67",
    "zh": "至阴",
    "py": "Zhìyīn",
    "hanviet": "Chí Âm",
    "meridian_code": "BL",
    "meridian": "Túc Thái Dương Bàng Quang Kinh (足太阳膀胱经 · BL)",
    "region": "足趾",
    "indications": "头痛、鼻塞、鼻衄、眼痛。",
    "vi": "Huyệt Chí Âm (BL67) thuộc Túc Thái Dương Bàng Quang Kinh. Vị trí: 足趾. Chủ trị: 头痛、鼻塞、鼻衄、眼痛。"
  },
  {
    "code": "KI1",
    "zh": "涌泉",
    "py": "Yǒngquán",
    "hanviet": "Dũng Tuyền",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "足底",
    "indications": "头痛、视物模糊、头晕、咽喉痛、干燥相关症状、失音。",
    "vi": "Huyệt Dũng Tuyền (KI1) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足底. Chủ trị: 头痛、视物模糊、头晕、咽喉痛、干燥相关症状、失音。"
  },
  {
    "code": "KI2",
    "zh": "然谷",
    "py": "Rángǔ",
    "hanviet": "Nhiên Cốc",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "足部",
    "indications": "瘙痒、子宫脱垂、月经不调、遗精、咯血、口渴。",
    "vi": "Huyệt Nhiên Cốc (KI2) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 瘙痒、子宫脱垂、月经不调、遗精、咯血、口渴。"
  },
  {
    "code": "KI3",
    "zh": "太溪",
    "py": "Tàixī",
    "hanviet": "Thái Khê",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "踝部",
    "indications": "咽喉痛、牙痛、耳聋、耳鸣、头晕、唾血。",
    "vi": "Huyệt Thái Khê (KI3) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 踝部. Chủ trị: 咽喉痛、牙痛、耳聋、耳鸣、头晕、唾血。"
  },
  {
    "code": "KI4",
    "zh": "大钟",
    "py": "Dàzhōng",
    "hanviet": "Đại Chung",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "足部",
    "indications": "唾血、哮喘、拘急强直、小便不利、便秘、足跟痛。",
    "vi": "Huyệt Đại Chung (KI4) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 唾血、哮喘、拘急强直、小便不利、便秘、足跟痛。"
  },
  {
    "code": "KI5",
    "zh": "水泉",
    "py": "Shuǐquán",
    "hanviet": "Thủy Tuyền",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "足部",
    "indications": "闭经、月经不调、痛经、子宫脱垂、小便不利、视物模糊。",
    "vi": "Huyệt Thủy Tuyền (KI5) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 闭经、月经不调、痛经、子宫脱垂、小便不利、视物模糊。"
  },
  {
    "code": "KI6",
    "zh": "照海",
    "py": "Zhàohǎi",
    "hanviet": "Chiếu Hải",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "足部",
    "indications": "月经不调、带下病、子宫脱垂、瘙痒、尿潴留、便秘。",
    "vi": "Huyệt Chiếu Hải (KI6) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 足部. Chủ trị: 月经不调、带下病、子宫脱垂、瘙痒、尿潴留、便秘。"
  },
  {
    "code": "KI7",
    "zh": "复溜",
    "py": "Fùliū",
    "hanviet": "Phục Lưu",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "小腿",
    "indications": "水肿、腹胀、泄泻、肠鸣、肌肉萎缩、盗汗。",
    "vi": "Huyệt Phục Lưu (KI7) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 水肿、腹胀、泄泻、肠鸣、肌肉萎缩、盗汗。"
  },
  {
    "code": "KI8",
    "zh": "交信",
    "py": "Jiāoxìn",
    "hanviet": "Giao Tín",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "小腿",
    "indications": "月经不调、痛经、崩漏、子宫脱垂、泄泻、便秘。",
    "vi": "Huyệt Giao Tín (KI8) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 月经不调、痛经、崩漏、子宫脱垂、泄泻、便秘。"
  },
  {
    "code": "KI9",
    "zh": "筑宾",
    "py": "Zhùbīn",
    "hanviet": "Trúc Tân",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "小腿",
    "indications": "神志病、疝气。",
    "vi": "Huyệt Trúc Tân (KI9) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 小腿. Chủ trị: 神志病、疝气。"
  },
  {
    "code": "KI10",
    "zh": "阴谷",
    "py": "Yīngǔ",
    "hanviet": "Âm Cốc",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "膝部",
    "indications": "阳痿、疝气、崩漏、小便不利、膝痛、神志病。",
    "vi": "Huyệt Âm Cốc (KI10) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 膝部. Chủ trị: 阳痿、疝气、崩漏、小便不利、膝痛、神志病。"
  },
  {
    "code": "KI11",
    "zh": "横骨",
    "py": "Hénggǔ",
    "hanviet": "Hoành Cốt",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "小便不利、遗尿、遗精、阳痿。",
    "vi": "Huyệt Hoành Cốt (KI11) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 小便不利、遗尿、遗精、阳痿。"
  },
  {
    "code": "KI12",
    "zh": "大赫",
    "py": "Dàhè",
    "hanviet": "Đại 赫",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "遗精、阳痿、带下病、外阴痛、子宫脱垂。",
    "vi": "Huyệt Đại 赫 (KI12) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 遗精、阳痿、带下病、外阴痛、子宫脱垂。"
  },
  {
    "code": "KI13",
    "zh": "气穴",
    "py": "Qìxué",
    "hanviet": "Khí 穴",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "月经不调、痛经、小便不利、腹痛、泄泻。",
    "vi": "Huyệt Khí 穴 (KI13) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 月经不调、痛经、小便不利、腹痛、泄泻。"
  },
  {
    "code": "KI14",
    "zh": "四满",
    "py": "Sìmǎn",
    "hanviet": "Tứ Mãn",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "腹痛、泄泻、遗精、月经不调、痛经。",
    "vi": "Huyệt Tứ Mãn (KI14) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、遗精、月经不调、痛经。"
  },
  {
    "code": "KI15",
    "zh": "中注",
    "py": "Zhōngzhù",
    "hanviet": "Trung Chú",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "月经不调、腹痛、便秘。",
    "vi": "Huyệt Trung Chú (KI15) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 月经不调、腹痛、便秘。"
  },
  {
    "code": "KI16",
    "zh": "肓俞",
    "py": "Huāngshū",
    "hanviet": "肓 Du",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "腹痛、呕吐、便秘、泄泻。",
    "vi": "Huyệt 肓 Du (KI16) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、呕吐、便秘、泄泻。"
  },
  {
    "code": "KI17",
    "zh": "商曲",
    "py": "Shāngqū",
    "hanviet": "Thương Khúc",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "腹痛、泄泻、便秘。",
    "vi": "Huyệt Thương Khúc (KI17) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、便秘。"
  },
  {
    "code": "KI18",
    "zh": "石关",
    "py": "Shíguān",
    "hanviet": "石 Quan",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "呕吐、腹痛、便秘。",
    "vi": "Huyệt 石 Quan (KI18) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 呕吐、腹痛、便秘。"
  },
  {
    "code": "KI19",
    "zh": "阴都",
    "py": "Yīndū",
    "hanviet": "Âm Đô",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "肠鸣、腹痛、便秘、呕吐。",
    "vi": "Huyệt Âm Đô (KI19) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 肠鸣、腹痛、便秘、呕吐。"
  },
  {
    "code": "KI20",
    "zh": "腹通谷",
    "py": "Fùtōnggǔ",
    "hanviet": "腹 Thông Cốc",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "腹痛、呕吐、消化不良。",
    "vi": "Huyệt 腹 Thông Cốc (KI20) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、呕吐、消化不良。"
  },
  {
    "code": "KI21",
    "zh": "幽门",
    "py": "Yōumén",
    "hanviet": "幽 Môn",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "腹部",
    "indications": "腹痛、消化不良、呕吐、泄泻、恶心。",
    "vi": "Huyệt 幽 Môn (KI21) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 腹部. Chủ trị: 腹痛、消化不良、呕吐、泄泻、恶心。"
  },
  {
    "code": "KI22",
    "zh": "步廊",
    "py": "Bùláng",
    "hanviet": "Bộ 廊",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸满、呕吐、食欲不振。",
    "vi": "Huyệt Bộ 廊 (KI22) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、呕吐、食欲不振。"
  },
  {
    "code": "KI23",
    "zh": "神封",
    "py": "Shénfēng",
    "hanviet": "Thần Phong",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸满、乳痈。",
    "vi": "Huyệt Thần Phong (KI23) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、乳痈。"
  },
  {
    "code": "KI24",
    "zh": "灵墟",
    "py": "Língxū",
    "hanviet": "Linh 墟",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸满、乳痈。",
    "vi": "Huyệt Linh 墟 (KI24) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满、乳痈。"
  },
  {
    "code": "KI25",
    "zh": "神藏",
    "py": "Shéncáng",
    "hanviet": "Thần Tàng",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸痛。",
    "vi": "Huyệt Thần Tàng (KI25) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛。"
  },
  {
    "code": "KI26",
    "zh": "彧中",
    "py": "Yùzhōng",
    "hanviet": "彧 Trung",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸满。",
    "vi": "Huyệt 彧 Trung (KI26) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸满。"
  },
  {
    "code": "KI27",
    "zh": "俞府",
    "py": "Shūfǔ",
    "hanviet": "Du Phủ",
    "meridian_code": "KI",
    "meridian": "Túc Thiếu Âm Thận Kinh (足少阴肾经 · KI)",
    "region": "胸前部",
    "indications": "咳嗽、哮喘、胸痛。",
    "vi": "Huyệt Du Phủ (KI27) thuộc Túc Thiếu Âm Thận Kinh. Vị trí: 胸前部. Chủ trị: 咳嗽、哮喘、胸痛。"
  },
  {
    "code": "PC1",
    "zh": "天池",
    "py": "Tiānchí",
    "hanviet": "Thiên Trì",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "胸前部",
    "indications": "胁痛。",
    "vi": "Huyệt Thiên Trì (PC1) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 胸前部. Chủ trị: 胁痛。"
  },
  {
    "code": "PC2",
    "zh": "天泉",
    "py": "Tiānquán",
    "hanviet": "Thiên Tuyền",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "上臂",
    "indications": "心痛、咳嗽、胸痛。",
    "vi": "Huyệt Thiên Tuyền (PC2) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 上臂. Chủ trị: 心痛、咳嗽、胸痛。"
  },
  {
    "code": "PC3",
    "zh": "曲泽",
    "py": "Qūzé",
    "hanviet": "Khúc Trạch",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "肘部",
    "indications": "心痛、心悸、热病、烦躁、胃痛、呕吐。",
    "vi": "Huyệt Khúc Trạch (PC3) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 肘部. Chủ trị: 心痛、心悸、热病、烦躁、胃痛、呕吐。"
  },
  {
    "code": "PC4",
    "zh": "郄门",
    "py": "Xìmén",
    "hanviet": "郄 Môn",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "前臂",
    "indications": "心痛、心悸、鼻衄、咯血、胸痛、癫痫。",
    "vi": "Huyệt 郄 Môn (PC4) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、鼻衄、咯血、胸痛、癫痫。"
  },
  {
    "code": "PC5",
    "zh": "间使",
    "py": "Jiānshǐ",
    "hanviet": "Gian Sử",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "前臂",
    "indications": "心痛、心悸、胃痛、呕吐、热病、烦躁。",
    "vi": "Huyệt Gian Sử (PC5) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、胃痛、呕吐、热病、烦躁。"
  },
  {
    "code": "PC6",
    "zh": "内关",
    "py": "Nèiguān",
    "hanviet": "Nội Quan",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "前臂",
    "indications": "心痛、心悸、胁痛、胃痛、恶心、呕吐。",
    "vi": "Huyệt Nội Quan (PC6) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 前臂. Chủ trị: 心痛、心悸、胁痛、胃痛、恶心、呕吐。"
  },
  {
    "code": "PC7",
    "zh": "大陵",
    "py": "Dàlíng",
    "hanviet": "Đại Lăng",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "腕部",
    "indications": "心痛、心悸、胃痛、呕吐、神志病、癫痫。",
    "vi": "Huyệt Đại Lăng (PC7) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 腕部. Chủ trị: 心痛、心悸、胃痛、呕吐、神志病、癫痫。"
  },
  {
    "code": "PC8",
    "zh": "劳宫",
    "py": "Láogōng",
    "hanviet": "Lao Cung",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "手掌",
    "indications": "心痛、神志病、癫痫、呕吐、恶心。",
    "vi": "Huyệt Lao Cung (PC8) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 手掌. Chủ trị: 心痛、神志病、癫痫、呕吐、恶心。"
  },
  {
    "code": "PC9",
    "zh": "中冲",
    "py": "Zhōngchōng",
    "hanviet": "Trung Xung",
    "meridian_code": "PC",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (手厥阴心包经 · PC)",
    "region": "手指",
    "indications": "心痛、心悸、昏厥、失语、拘急强直、热病。",
    "vi": "Huyệt Trung Xung (PC9) thuộc Thủ Quyết Âm Tâm Bào Kinh. Vị trí: 手指. Chủ trị: 心痛、心悸、昏厥、失语、拘急强直、热病。"
  },
  {
    "code": "TE1",
    "zh": "关冲",
    "py": "Guānchōng",
    "hanviet": "Quan Xung",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "手指",
    "indications": "头痛、目赤、咽喉痛、拘急强直、热病、烦躁。",
    "vi": "Huyệt Quan Xung (TE1) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手指. Chủ trị: 头痛、目赤、咽喉痛、拘急强直、热病、烦躁。"
  },
  {
    "code": "TE2",
    "zh": "液门",
    "py": "Yèmén",
    "hanviet": "Dịch Môn",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "手部",
    "indications": "头痛、目赤、耳聋、咽喉痛、疟疾、臂痛。",
    "vi": "Huyệt Dịch Môn (TE2) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手部. Chủ trị: 头痛、目赤、耳聋、咽喉痛、疟疾、臂痛。"
  },
  {
    "code": "TE3",
    "zh": "中渚",
    "py": "Zhōngzhǔ",
    "hanviet": "Trung Chữ",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "手部",
    "indications": "头痛、目赤、耳聋、耳鸣、咽喉痛、热病。",
    "vi": "Huyệt Trung Chữ (TE3) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 手部. Chủ trị: 头痛、目赤、耳聋、耳鸣、咽喉痛、热病。"
  },
  {
    "code": "TE4",
    "zh": "阳池",
    "py": "Yángchí",
    "hanviet": "Dương Trì",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "腕部",
    "indications": "臂痛、疟疾、耳聋、口渴。",
    "vi": "Huyệt Dương Trì (TE4) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 腕部. Chủ trị: 臂痛、疟疾、耳聋、口渴。"
  },
  {
    "code": "TE5",
    "zh": "外关",
    "py": "Wàiguān",
    "hanviet": "Ngoại Quan",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "前臂",
    "indications": "热病、头痛、耳聋、耳鸣、胁痛、活动不利。",
    "vi": "Huyệt Ngoại Quan (TE5) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 热病、头痛、耳聋、耳鸣、胁痛、活动不利。"
  },
  {
    "code": "TE6",
    "zh": "支沟",
    "py": "Zhīgōu",
    "hanviet": "Chi Câu",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "前臂",
    "indications": "耳鸣、耳聋、胁痛、呕吐、便秘、热病。",
    "vi": "Huyệt Chi Câu (TE6) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳鸣、耳聋、胁痛、呕吐、便秘、热病。"
  },
  {
    "code": "TE7",
    "zh": "会宗",
    "py": "Huìzōng",
    "hanviet": "Hội Tông",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "前臂",
    "indications": "耳聋、癫痫。",
    "vi": "Huyệt Hội Tông (TE7) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、癫痫。"
  },
  {
    "code": "TE8",
    "zh": "三阳络",
    "py": "Sānyángluò",
    "hanviet": "Tam Dương Lạc",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "前臂",
    "indications": "耳聋、声音嘶哑、胸痛、牙痛。",
    "vi": "Huyệt Tam Dương Lạc (TE8) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、声音嘶哑、胸痛、牙痛。"
  },
  {
    "code": "TE9",
    "zh": "四渎",
    "py": "Sìdú",
    "hanviet": "Tứ 渎",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "前臂",
    "indications": "耳聋、牙痛、偏头痛、声音嘶哑。",
    "vi": "Huyệt Tứ 渎 (TE9) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 前臂. Chủ trị: 耳聋、牙痛、偏头痛、声音嘶哑。"
  },
  {
    "code": "TE10",
    "zh": "天井",
    "py": "Tiānjǐng",
    "hanviet": "Thiên Tỉnh",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "肘部",
    "indications": "偏头痛、颈痛、癫痫、瘰疬、瘿气。",
    "vi": "Huyệt Thiên Tỉnh (TE10) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 肘部. Chủ trị: 偏头痛、颈痛、癫痫、瘰疬、瘿气。"
  },
  {
    "code": "TE11",
    "zh": "清泠渊",
    "py": "Qīnglíngyuān",
    "hanviet": "Thanh 泠 Uyên",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "上臂",
    "indications": "头痛、目痛、肩臂痛。",
    "vi": "Huyệt Thanh 泠 Uyên (TE11) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 头痛、目痛、肩臂痛。"
  },
  {
    "code": "TE12",
    "zh": "消泺",
    "py": "Xiāoluò",
    "hanviet": "Tiêu 泺",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "上臂",
    "indications": "头痛、项强、活动不利。",
    "vi": "Huyệt Tiêu 泺 (TE12) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 头痛、项强、活动不利。"
  },
  {
    "code": "TE13",
    "zh": "臑会",
    "py": "Nàohuì",
    "hanviet": "Nhu Hội",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "上臂",
    "indications": "瘿气、肩痛。",
    "vi": "Huyệt Nhu Hội (TE13) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 上臂. Chủ trị: 瘿气、肩痛。"
  },
  {
    "code": "TE14",
    "zh": "肩髎",
    "py": "Jiānliáo",
    "hanviet": "Kiên Liêu",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "肩部",
    "indications": "活动不利。",
    "vi": "Huyệt Kiên Liêu (TE14) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 肩部. Chủ trị: 活动不利。"
  },
  {
    "code": "TE15",
    "zh": "天髎",
    "py": "Tiānliáo",
    "hanviet": "Thiên Liêu",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "体表相关区域",
    "indications": "肩痛、拘急强直。",
    "vi": "Huyệt Thiên Liêu (TE15) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 体表相关区域. Chủ trị: 肩痛、拘急强直。"
  },
  {
    "code": "TE16",
    "zh": "天牖",
    "py": "Tiānyǒu",
    "hanviet": "Thiên 牖",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "颈部",
    "indications": "头痛、项强、面肿、视物模糊、耳聋。",
    "vi": "Huyệt Thiên 牖 (TE16) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 颈部. Chủ trị: 头痛、项强、面肿、视物模糊、耳聋。"
  },
  {
    "code": "TE17",
    "zh": "翳风",
    "py": "Yìfēng",
    "hanviet": "Ế Phong",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "颈部",
    "indications": "耳鸣、耳聋、面瘫、牙痛、颊肿、瘰疬。",
    "vi": "Huyệt Ế Phong (TE17) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 颈部. Chủ trị: 耳鸣、耳聋、面瘫、牙痛、颊肿、瘰疬。"
  },
  {
    "code": "TE18",
    "zh": "瘈脉",
    "py": "Chìmài",
    "hanviet": "瘈 Mạch",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "头部",
    "indications": "头痛、耳鸣、耳聋、小儿惊风、抽搐。",
    "vi": "Huyệt 瘈 Mạch (TE18) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋、小儿惊风、抽搐。"
  },
  {
    "code": "TE19",
    "zh": "颅息",
    "py": "Lúxī",
    "hanviet": "颅 Tức",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "头部",
    "indications": "头痛、耳鸣、耳聋、小儿惊风、抽搐。",
    "vi": "Huyệt 颅 Tức (TE19) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋、小儿惊风、抽搐。"
  },
  {
    "code": "TE20",
    "zh": "角孙",
    "py": "Jiǎosūn",
    "hanviet": "Giác Tôn",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "头部",
    "indications": "耳鸣、目肿痛、牙痛。",
    "vi": "Huyệt Giác Tôn (TE20) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 耳鸣、目肿痛、牙痛。"
  },
  {
    "code": "TE21",
    "zh": "耳门",
    "py": "Ěrmén",
    "hanviet": "耳 Môn",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "面部",
    "indications": "耳鸣、耳聋、牙痛、拘急强直。",
    "vi": "Huyệt 耳 Môn (TE21) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 面部. Chủ trị: 耳鸣、耳聋、牙痛、拘急强直。"
  },
  {
    "code": "TE22",
    "zh": "耳和髎",
    "py": "Ěrhéliáo",
    "hanviet": "耳 Hòa Liêu",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "头部",
    "indications": "偏头痛、耳鸣。",
    "vi": "Huyệt 耳 Hòa Liêu (TE22) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 偏头痛、耳鸣。"
  },
  {
    "code": "TE23",
    "zh": "丝竹空",
    "py": "Sīzhúkōng",
    "hanviet": "Ty Trúc Không",
    "meridian_code": "TE",
    "meridian": "Thủ Thiếu Dương Tam Tiêu Kinh (手少阳三焦经 · TE)",
    "region": "头部",
    "indications": "头痛、眼痛、视物模糊、眼睑瞤动、牙痛、面瘫。",
    "vi": "Huyệt Ty Trúc Không (TE23) thuộc Thủ Thiếu Dương Tam Tiêu Kinh. Vị trí: 头部. Chủ trị: 头痛、眼痛、视物模糊、眼睑瞤动、牙痛、面瘫。"
  },
  {
    "code": "GB1",
    "zh": "瞳子髎",
    "py": "Tóngzǐliáo",
    "hanviet": "瞳 Tử Liêu",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、眼痛、流泪。",
    "vi": "Huyệt 瞳 Tử Liêu (GB1) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眼痛、流泪。"
  },
  {
    "code": "GB2",
    "zh": "听会",
    "py": "Tīnghuì",
    "hanviet": "Thính Hội",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "面部",
    "indications": "耳聋、耳鸣、牙痛、活动不利。",
    "vi": "Huyệt Thính Hội (GB2) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 面部. Chủ trị: 耳聋、耳鸣、牙痛、活动不利。"
  },
  {
    "code": "GB3",
    "zh": "上关",
    "py": "Shàngguān",
    "hanviet": "Thượng Quan",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、耳聋、耳鸣、牙痛。",
    "vi": "Huyệt Thượng Quan (GB3) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、耳聋、耳鸣、牙痛。"
  },
  {
    "code": "GB4",
    "zh": "颔厌",
    "py": "Hànyàn",
    "hanviet": "颔 厌",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "偏头痛、眩晕、耳鸣、牙痛、抽搐、癫痫。",
    "vi": "Huyệt 颔 厌 (GB4) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕、耳鸣、牙痛、抽搐、癫痫。"
  },
  {
    "code": "GB5",
    "zh": "悬颅",
    "py": "Xuánlú",
    "hanviet": "Huyền 颅",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "偏头痛、面肿。",
    "vi": "Huyệt Huyền 颅 (GB5) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、面肿。"
  },
  {
    "code": "GB6",
    "zh": "悬厘",
    "py": "Xuánlí",
    "hanviet": "Huyền Ly",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "偏头痛、耳鸣。",
    "vi": "Huyệt Huyền Ly (GB6) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、耳鸣。"
  },
  {
    "code": "GB7",
    "zh": "曲鬓",
    "py": "Qūbìn",
    "hanviet": "Khúc 鬓",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、颊肿、牙关紧闭、小儿惊风、抽搐。",
    "vi": "Huyệt Khúc 鬓 (GB7) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、颊肿、牙关紧闭、小儿惊风、抽搐。"
  },
  {
    "code": "GB8",
    "zh": "率谷",
    "py": "Shuàigǔ",
    "hanviet": "Suất Cốc",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "偏头痛、眩晕、呕吐、小儿惊风、抽搐。",
    "vi": "Huyệt Suất Cốc (GB8) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕、呕吐、小儿惊风、抽搐。"
  },
  {
    "code": "GB9",
    "zh": "天冲",
    "py": "Tiānchōng",
    "hanviet": "Thiên Xung",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、癫痫、抽搐。",
    "vi": "Huyệt Thiên Xung (GB9) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、癫痫、抽搐。"
  },
  {
    "code": "GB10",
    "zh": "浮白",
    "py": "Fúbái",
    "hanviet": "Phù Bạch",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、耳鸣、耳聋。",
    "vi": "Huyệt Phù Bạch (GB10) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、耳鸣、耳聋。"
  },
  {
    "code": "GB11",
    "zh": "头窍阴",
    "py": "Tóuqiàoyīn",
    "hanviet": "Đầu Khiếu Âm",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "耳鸣、耳聋。",
    "vi": "Huyệt Đầu Khiếu Âm (GB11) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 耳鸣、耳聋。"
  },
  {
    "code": "GB12",
    "zh": "完骨",
    "py": "Wángǔ",
    "hanviet": "Hoàn Cốt",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "颈部",
    "indications": "头痛、失眠、颊肿、牙痛。",
    "vi": "Huyệt Hoàn Cốt (GB12) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 头痛、失眠、颊肿、牙痛。"
  },
  {
    "code": "GB13",
    "zh": "本神",
    "py": "Běnshén",
    "hanviet": "Bản Thần",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、失眠、眩晕、癫痫。",
    "vi": "Huyệt Bản Thần (GB13) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、失眠、眩晕、癫痫。"
  },
  {
    "code": "GB14",
    "zh": "阳白",
    "py": "Yángbái",
    "hanviet": "Dương Bạch",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、眩晕、眼睑瞤动、流泪。",
    "vi": "Huyệt Dương Bạch (GB14) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、眼睑瞤动、流泪。"
  },
  {
    "code": "GB15",
    "zh": "头临泣",
    "py": "Tóulínqì",
    "hanviet": "Đầu Lâm Khấp",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、眩晕、流泪、流涕、鼻塞。",
    "vi": "Huyệt Đầu Lâm Khấp (GB15) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、流泪、流涕、鼻塞。"
  },
  {
    "code": "GB16",
    "zh": "目窗",
    "py": "Mùchuāng",
    "hanviet": "目 Song",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、眩晕、鼻塞。",
    "vi": "Huyệt 目 Song (GB16) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、鼻塞。"
  },
  {
    "code": "GB17",
    "zh": "正营",
    "py": "Zhèngyíng",
    "hanviet": "Chánh 营",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "偏头痛、眩晕。",
    "vi": "Huyệt Chánh 营 (GB17) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 偏头痛、眩晕。"
  },
  {
    "code": "GB18",
    "zh": "承灵",
    "py": "Chénglíng",
    "hanviet": "Thừa Linh",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、眩晕、鼻塞。",
    "vi": "Huyệt Thừa Linh (GB18) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、眩晕、鼻塞。"
  },
  {
    "code": "GB19",
    "zh": "脑空",
    "py": "Nǎokōng",
    "hanviet": "脑 Không",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "头部",
    "indications": "头痛、拘急强直、眩晕、耳鸣、癫痫。",
    "vi": "Huyệt 脑 Không (GB19) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 头部. Chủ trị: 头痛、拘急强直、眩晕、耳鸣、癫痫。"
  },
  {
    "code": "GB20",
    "zh": "风池",
    "py": "Fēngchí",
    "hanviet": "Phong Trì",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "颈部",
    "indications": "头痛、眩晕、失眠、拘急强直、视物模糊、耳鸣。",
    "vi": "Huyệt Phong Trì (GB20) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 头痛、眩晕、失眠、拘急强直、视物模糊、耳鸣。"
  },
  {
    "code": "GB21",
    "zh": "肩井",
    "py": "Jiānjǐng",
    "hanviet": "Kiên Tỉnh",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "颈部",
    "indications": "肩痛、活动不利、乳少、乳痈、瘰疬、中风。",
    "vi": "Huyệt Kiên Tỉnh (GB21) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 颈部. Chủ trị: 肩痛、活动不利、乳少、乳痈、瘰疬、中风。"
  },
  {
    "code": "GB22",
    "zh": "渊腋",
    "py": "Yuānyè",
    "hanviet": "Uyên 腋",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "胸侧部",
    "indications": "胸满、胁痛、活动不利。",
    "vi": "Huyệt Uyên 腋 (GB22) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸侧部. Chủ trị: 胸满、胁痛、活动不利。"
  },
  {
    "code": "GB23",
    "zh": "辄筋",
    "py": "Zhéjīn",
    "hanviet": "辄 Cân",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "胸侧部",
    "indications": "胸满、胁痛、哮喘。",
    "vi": "Huyệt 辄 Cân (GB23) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸侧部. Chủ trị: 胸满、胁痛、哮喘。"
  },
  {
    "code": "GB24",
    "zh": "日月",
    "py": "Rìyuè",
    "hanviet": "Nhật Nguyệt",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "胸前部",
    "indications": "胁痛、呕吐、反酸、呃逆、黄疸、乳痈。",
    "vi": "Huyệt Nhật Nguyệt (GB24) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 胸前部. Chủ trị: 胁痛、呕吐、反酸、呃逆、黄疸、乳痈。"
  },
  {
    "code": "GB25",
    "zh": "京门",
    "py": "Jīngmén",
    "hanviet": "京 Môn",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "腹部",
    "indications": "腹胀、肠鸣、泄泻、腰痛。",
    "vi": "Huyệt 京 Môn (GB25) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 腹胀、肠鸣、泄泻、腰痛。"
  },
  {
    "code": "GB26",
    "zh": "带脉",
    "py": "Dàimài",
    "hanviet": "Đới Mạch",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "腹部",
    "indications": "月经不调、闭经、带下病、腹痛、疝气、腰痛。",
    "vi": "Huyệt Đới Mạch (GB26) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 月经不调、闭经、带下病、腹痛、疝气、腰痛。"
  },
  {
    "code": "GB27",
    "zh": "五枢",
    "py": "Wǔshū",
    "hanviet": "Ngũ Xu",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "腹部",
    "indications": "带下病、小腹痛、腹痛、疝气、便秘。",
    "vi": "Huyệt Ngũ Xu (GB27) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 带下病、小腹痛、腹痛、疝气、便秘。"
  },
  {
    "code": "GB28",
    "zh": "维道",
    "py": "Wéidào",
    "hanviet": "Duy Đạo",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "腹部",
    "indications": "带下病、小腹痛、腹痛、疝气、子宫脱垂。",
    "vi": "Huyệt Duy Đạo (GB28) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 腹部. Chủ trị: 带下病、小腹痛、腹痛、疝气、子宫脱垂。"
  },
  {
    "code": "GB29",
    "zh": "居髎",
    "py": "Jūliáo",
    "hanviet": "居 Liêu",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "臀部",
    "indications": "麻木、肌肉萎缩。",
    "vi": "Huyệt 居 Liêu (GB29) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 臀部. Chủ trị: 麻木、肌肉萎缩。"
  },
  {
    "code": "GB30",
    "zh": "环跳",
    "py": "Huántiào",
    "hanviet": "Hoàn Khiêu",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "臀部",
    "indications": "肌肉萎缩、半身不遂。",
    "vi": "Huyệt Hoàn Khiêu (GB30) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 臀部. Chủ trị: 肌肉萎缩、半身不遂。"
  },
  {
    "code": "GB31",
    "zh": "风市",
    "py": "Fēngshì",
    "hanviet": "Phong Thị",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "大腿",
    "indications": "脚气、瘙痒。",
    "vi": "Huyệt Phong Thị (GB31) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 大腿. Chủ trị: 脚气、瘙痒。"
  },
  {
    "code": "GB32",
    "zh": "中渎",
    "py": "Zhōngdú",
    "hanviet": "Trung 渎",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "大腿",
    "indications": "麻木、半身不遂。",
    "vi": "Huyệt Trung 渎 (GB32) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 大腿. Chủ trị: 麻木、半身不遂。"
  },
  {
    "code": "GB33",
    "zh": "膝阳关",
    "py": "Xīyángguān",
    "hanviet": "膝 Dương Quan",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "膝部",
    "indications": "麻木。",
    "vi": "Huyệt 膝 Dương Quan (GB33) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 膝部. Chủ trị: 麻木。"
  },
  {
    "code": "GB34",
    "zh": "阳陵泉",
    "py": "Yánglíngquán",
    "hanviet": "Dương Lăng Tuyền",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "胁痛、黄疸、膝痛、下肢痿痹。",
    "vi": "Huyệt Dương Lăng Tuyền (GB34) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 胁痛、黄疸、膝痛、下肢痿痹。"
  },
  {
    "code": "GB35",
    "zh": "阳交",
    "py": "Yángjiāo",
    "hanviet": "Dương Giao",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "胸满、肌肉萎缩。",
    "vi": "Huyệt Dương Giao (GB35) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 胸满、肌肉萎缩。"
  },
  {
    "code": "GB36",
    "zh": "外丘",
    "py": "Wàiqiū",
    "hanviet": "Ngoại Khâu",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "颈痛。",
    "vi": "Huyệt Ngoại Khâu (GB36) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 颈痛。"
  },
  {
    "code": "GB37",
    "zh": "光明",
    "py": "Guāngmíng",
    "hanviet": "Quang Minh",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "膝痛、肌肉萎缩、活动不利、视物模糊、眼痛。",
    "vi": "Huyệt Quang Minh (GB37) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 膝痛、肌肉萎缩、活动不利、视物模糊、眼痛。"
  },
  {
    "code": "GB38",
    "zh": "阳辅",
    "py": "Yángfǔ",
    "hanviet": "Dương 辅",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "偏头痛、瘰疬、胸痛、疟疾。",
    "vi": "Huyệt Dương 辅 (GB38) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 偏头痛、瘰疬、胸痛、疟疾。"
  },
  {
    "code": "GB39",
    "zh": "悬钟",
    "py": "Xuánzhōng",
    "hanviet": "Huyền Chung",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "小腿",
    "indications": "中风、半身不遂、腹胀、胁痛、肌肉萎缩、脚气。",
    "vi": "Huyệt Huyền Chung (GB39) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 小腿. Chủ trị: 中风、半身不遂、腹胀、胁痛、肌肉萎缩、脚气。"
  },
  {
    "code": "GB40",
    "zh": "丘墟",
    "py": "Qiūxū",
    "hanviet": "Khâu 墟",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "踝部",
    "indications": "颈痛、胁痛、呕吐、反酸、肌肉萎缩、疟疾。",
    "vi": "Huyệt Khâu 墟 (GB40) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 踝部. Chủ trị: 颈痛、胁痛、呕吐、反酸、肌肉萎缩、疟疾。"
  },
  {
    "code": "GB41",
    "zh": "足临泣",
    "py": "Zúlínqì",
    "hanviet": "Túc Lâm Khấp",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "足部",
    "indications": "头痛、眩晕、瘰疬、胁痛、月经不调。",
    "vi": "Huyệt Túc Lâm Khấp (GB41) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 头痛、眩晕、瘰疬、胁痛、月经不调。"
  },
  {
    "code": "GB42",
    "zh": "地五会",
    "py": "Dìwǔhuì",
    "hanviet": "Địa Ngũ Hội",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "足部",
    "indications": "耳鸣。",
    "vi": "Huyệt Địa Ngũ Hội (GB42) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 耳鸣。"
  },
  {
    "code": "GB43",
    "zh": "侠溪",
    "py": "Xiáxī",
    "hanviet": "Hiệp Khê",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "足部",
    "indications": "头痛、头晕、眩晕、耳鸣、耳聋、颊肿。",
    "vi": "Huyệt Hiệp Khê (GB43) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足部. Chủ trị: 头痛、头晕、眩晕、耳鸣、耳聋、颊肿。"
  },
  {
    "code": "GB44",
    "zh": "足窍阴",
    "py": "Zúqiàoyīn",
    "hanviet": "Túc Khiếu Âm",
    "meridian_code": "GB",
    "meridian": "Túc Thiếu Dương Đởm Kinh (足少阳胆经 · GB)",
    "region": "足趾",
    "indications": "偏头痛、耳聋、耳鸣、眼痛、热病。",
    "vi": "Huyệt Túc Khiếu Âm (GB44) thuộc Túc Thiếu Dương Đởm Kinh. Vị trí: 足趾. Chủ trị: 偏头痛、耳聋、耳鸣、眼痛、热病。"
  },
  {
    "code": "LR1",
    "zh": "大敦",
    "py": "Dàdūn",
    "hanviet": "Đại 敦",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "足趾",
    "indications": "疝气、遗尿、崩漏、子宫脱垂、癫痫。",
    "vi": "Huyệt Đại 敦 (LR1) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足趾. Chủ trị: 疝气、遗尿、崩漏、子宫脱垂、癫痫。"
  },
  {
    "code": "LR2",
    "zh": "行间",
    "py": "Xíngjiān",
    "hanviet": "Hành Gian",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "足部",
    "indications": "胁痛、腹胀、头痛、头晕、眩晕、目肿痛。",
    "vi": "Huyệt Hành Gian (LR2) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足部. Chủ trị: 胁痛、腹胀、头痛、头晕、眩晕、目肿痛。"
  },
  {
    "code": "LR3",
    "zh": "太冲",
    "py": "Tàichōng",
    "hanviet": "Thái Xung",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "足部",
    "indications": "头痛、头晕、眩晕、失眠、目肿痛、眼痛。",
    "vi": "Huyệt Thái Xung (LR3) thuộc Túc Quyết Âm Can Kinh. Vị trí: 足部. Chủ trị: 头痛、头晕、眩晕、失眠、目肿痛、眼痛。"
  },
  {
    "code": "LR4",
    "zh": "中封",
    "py": "Zhōngfēng",
    "hanviet": "Trung Phong",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "踝部",
    "indications": "疝气、外阴痛、遗精、尿潴留、胁痛。",
    "vi": "Huyệt Trung Phong (LR4) thuộc Túc Quyết Âm Can Kinh. Vị trí: 踝部. Chủ trị: 疝气、外阴痛、遗精、尿潴留、胁痛。"
  },
  {
    "code": "LR5",
    "zh": "蠡沟",
    "py": "Lígōu",
    "hanviet": "Lãi Câu",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "小腿",
    "indications": "尿潴留、遗尿、疝气、月经不调、带下病、瘙痒。",
    "vi": "Huyệt Lãi Câu (LR5) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 尿潴留、遗尿、疝气、月经不调、带下病、瘙痒。"
  },
  {
    "code": "LR6",
    "zh": "中都",
    "py": "Zhōngdū",
    "hanviet": "Trung Đô",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "小腿",
    "indications": "腹痛、泄泻、疝气、崩漏。",
    "vi": "Huyệt Trung Đô (LR6) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 腹痛、泄泻、疝气、崩漏。"
  },
  {
    "code": "LR7",
    "zh": "膝关",
    "py": "Xīguān",
    "hanviet": "膝 Quan",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "小腿",
    "indications": "膝部肿痛、下肢内侧疼痛。",
    "vi": "Huyệt 膝 Quan (LR7) thuộc Túc Quyết Âm Can Kinh. Vị trí: 小腿. Chủ trị: 膝部肿痛、下肢内侧疼痛。"
  },
  {
    "code": "LR8",
    "zh": "曲泉",
    "py": "Qūquán",
    "hanviet": "Khúc Tuyền",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "膝部",
    "indications": "子宫脱垂、小腹痛、腹痛、尿潴留、遗精、外阴痛。",
    "vi": "Huyệt Khúc Tuyền (LR8) thuộc Túc Quyết Âm Can Kinh. Vị trí: 膝部. Chủ trị: 子宫脱垂、小腹痛、腹痛、尿潴留、遗精、外阴痛。"
  },
  {
    "code": "LR9",
    "zh": "阴包",
    "py": "Yīnbāo",
    "hanviet": "Âm Bao",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "大腿",
    "indications": "小腹痛、腹痛、遗尿、尿潴留、月经不调。",
    "vi": "Huyệt Âm Bao (LR9) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 小腹痛、腹痛、遗尿、尿潴留、月经不调。"
  },
  {
    "code": "LR10",
    "zh": "足五里",
    "py": "Zúwǔlǐ",
    "hanviet": "Túc Ngũ Lý",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "大腿",
    "indications": "腹胀、尿潴留。",
    "vi": "Huyệt Túc Ngũ Lý (LR10) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 腹胀、尿潴留。"
  },
  {
    "code": "LR11",
    "zh": "阴廉",
    "py": "Yīnlián",
    "hanviet": "Âm Liêm",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "大腿",
    "indications": "月经不调、带下病、小腹痛、腹痛。",
    "vi": "Huyệt Âm Liêm (LR11) thuộc Túc Quyết Âm Can Kinh. Vị trí: 大腿. Chủ trị: 月经不调、带下病、小腹痛、腹痛。"
  },
  {
    "code": "LR12",
    "zh": "急脉",
    "py": "Jímài",
    "hanviet": "Cấp Mạch",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "体表相关区域",
    "indications": "小腹痛、腹痛、疝气、外阴痛。",
    "vi": "Huyệt Cấp Mạch (LR12) thuộc Túc Quyết Âm Can Kinh. Vị trí: 体表相关区域. Chủ trị: 小腹痛、腹痛、疝气、外阴痛。"
  },
  {
    "code": "LR13",
    "zh": "章门",
    "py": "Zhāngmén",
    "hanviet": "Chương Môn",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "腹部",
    "indications": "腹胀、肠鸣、胁痛、呕吐、泄泻、消化不良。",
    "vi": "Huyệt Chương Môn (LR13) thuộc Túc Quyết Âm Can Kinh. Vị trí: 腹部. Chủ trị: 腹胀、肠鸣、胁痛、呕吐、泄泻、消化不良。"
  },
  {
    "code": "LR14",
    "zh": "期门",
    "py": "Qīmén",
    "hanviet": "Kỳ Môn",
    "meridian_code": "LR",
    "meridian": "Túc Quyết Âm Can Kinh (足厥阴肝经 · LR)",
    "region": "胸前部",
    "indications": "腹胀、呃逆、反酸、乳痈、情志抑郁、热病。",
    "vi": "Huyệt Kỳ Môn (LR14) thuộc Túc Quyết Âm Can Kinh. Vị trí: 胸前部. Chủ trị: 腹胀、呃逆、反酸、乳痈、情志抑郁、热病。"
  },
  {
    "code": "GV1",
    "zh": "长强",
    "py": "Chángqiáng",
    "hanviet": "Trường Cường",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "会阴部",
    "indications": "泄泻、痔疮、脱肛、便秘、癫痫。",
    "vi": "Huyệt Trường Cường (GV1) thuộc Đốc Mạch. Vị trí: 会阴部. Chủ trị: 泄泻、痔疮、脱肛、便秘、癫痫。"
  },
  {
    "code": "GV2",
    "zh": "腰俞",
    "py": "Yāoshū",
    "hanviet": "Yêu Du",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "骶部",
    "indications": "月经不调、拘急强直、痔疮、肌肉萎缩、癫痫。",
    "vi": "Huyệt Yêu Du (GV2) thuộc Đốc Mạch. Vị trí: 骶部. Chủ trị: 月经不调、拘急强直、痔疮、肌肉萎缩、癫痫。"
  },
  {
    "code": "GV3",
    "zh": "腰阳关",
    "py": "Yāoyángguān",
    "hanviet": "Yêu Dương Quan",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "腰部",
    "indications": "腰骶痛、下肢痿痹、月经不调。",
    "vi": "Huyệt Yêu Dương Quan (GV3) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 腰骶痛、下肢痿痹、月经不调。"
  },
  {
    "code": "GV4",
    "zh": "命门",
    "py": "Mìngmén",
    "hanviet": "Mệnh Môn",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "腰部",
    "indications": "拘急强直、阳痿、遗精、月经不调、泄泻、消化不良。",
    "vi": "Huyệt Mệnh Môn (GV4) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 拘急强直、阳痿、遗精、月经不调、泄泻、消化不良。"
  },
  {
    "code": "GV5",
    "zh": "悬枢",
    "py": "Xuánshū",
    "hanviet": "Huyền Xu",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "腰部",
    "indications": "拘急强直、泄泻、消化不良。",
    "vi": "Huyệt Huyền Xu (GV5) thuộc Đốc Mạch. Vị trí: 腰部. Chủ trị: 拘急强直、泄泻、消化不良。"
  },
  {
    "code": "GV6",
    "zh": "脊中",
    "py": "Jǐzhōng",
    "hanviet": "Tích Trung",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "泄泻、黄疸、癫痫、拘急强直。",
    "vi": "Huyệt Tích Trung (GV6) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 泄泻、黄疸、癫痫、拘急强直。"
  },
  {
    "code": "GV7",
    "zh": "中枢",
    "py": "Zhōngshū",
    "hanviet": "Trung Xu",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "腰痛、拘急强直。",
    "vi": "Huyệt Trung Xu (GV7) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 腰痛、拘急强直。"
  },
  {
    "code": "GV8",
    "zh": "筋缩",
    "py": "Jīnsuō",
    "hanviet": "Cân Súc",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "癫痫、拘急强直、胃痛。",
    "vi": "Huyệt Cân Súc (GV8) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 癫痫、拘急强直、胃痛。"
  },
  {
    "code": "GV9",
    "zh": "至阳",
    "py": "Zhìyáng",
    "hanviet": "Chí Dương",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "黄疸、咳嗽、哮喘、拘急强直、胸痛。",
    "vi": "Huyệt Chí Dương (GV9) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 黄疸、咳嗽、哮喘、拘急强直、胸痛。"
  },
  {
    "code": "GV10",
    "zh": "灵台",
    "py": "Língtái",
    "hanviet": "Linh Thai",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "咳嗽、哮喘、项强。",
    "vi": "Huyệt Linh Thai (GV10) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、项强。"
  },
  {
    "code": "GV11",
    "zh": "神道",
    "py": "Shéndào",
    "hanviet": "Thần Đạo",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "心悸、拘急强直、咳嗽、心痛。",
    "vi": "Huyệt Thần Đạo (GV11) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 心悸、拘急强直、咳嗽、心痛。"
  },
  {
    "code": "GV12",
    "zh": "身柱",
    "py": "Shēnzhù",
    "hanviet": "身 Trụ",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "咳嗽、哮喘、癫痫、拘急强直。",
    "vi": "Huyệt 身 Trụ (GV12) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 咳嗽、哮喘、癫痫、拘急强直。"
  },
  {
    "code": "GV13",
    "zh": "陶道",
    "py": "Táodào",
    "hanviet": "陶 Đạo",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "背部",
    "indications": "拘急强直、头痛、疟疾、热病。",
    "vi": "Huyệt 陶 Đạo (GV13) thuộc Đốc Mạch. Vị trí: 背部. Chủ trị: 拘急强直、头痛、疟疾、热病。"
  },
  {
    "code": "GV14",
    "zh": "大椎",
    "py": "Dàzhuī",
    "hanviet": "Đại Chùy",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "颈部",
    "indications": "疟疾、热病、癫痫、发热、咳嗽、哮喘。",
    "vi": "Huyệt Đại Chùy (GV14) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 疟疾、热病、癫痫、发热、咳嗽、哮喘。"
  },
  {
    "code": "GV15",
    "zh": "哑门",
    "py": "Yǎmén",
    "hanviet": "Á Môn",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "颈部",
    "indications": "神志病、癫痫、耳聋、声音嘶哑、中风、拘急强直。",
    "vi": "Huyệt Á Môn (GV15) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 神志病、癫痫、耳聋、声音嘶哑、中风、拘急强直。"
  },
  {
    "code": "GV16",
    "zh": "风府",
    "py": "Fēngfǔ",
    "hanviet": "Phong Phủ",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "颈部",
    "indications": "头痛、项强、视物模糊、鼻衄、咽喉痛、中风。",
    "vi": "Huyệt Phong Phủ (GV16) thuộc Đốc Mạch. Vị trí: 颈部. Chủ trị: 头痛、项强、视物模糊、鼻衄、咽喉痛、中风。"
  },
  {
    "code": "GV17",
    "zh": "脑户",
    "py": "Nǎohù",
    "hanviet": "脑 Hộ",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "癫痫、头晕、拘急强直。",
    "vi": "Huyệt 脑 Hộ (GV17) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、头晕、拘急强直。"
  },
  {
    "code": "GV18",
    "zh": "强间",
    "py": "Qiángjiān",
    "hanviet": "Cường Gian",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "头痛、项强、视物模糊、癫狂。",
    "vi": "Huyệt Cường Gian (GV18) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、项强、视物模糊、癫狂。"
  },
  {
    "code": "GV19",
    "zh": "后顶",
    "py": "Hòudǐng",
    "hanviet": "Hậu Đính",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "头痛、眩晕、癫狂、癫痫。",
    "vi": "Huyệt Hậu Đính (GV19) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眩晕、癫狂、癫痫。"
  },
  {
    "code": "GV20",
    "zh": "百会",
    "py": "Bǎihuì",
    "hanviet": "Bách Hội",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "头痛、眩晕、耳鸣、鼻塞、失语、中风。",
    "vi": "Huyệt Bách Hội (GV20) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眩晕、耳鸣、鼻塞、失语、中风。"
  },
  {
    "code": "GV21",
    "zh": "前顶",
    "py": "Qiándǐng",
    "hanviet": "Tiền Đính",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "癫痫、头晕、视物模糊、头痛、流涕。",
    "vi": "Huyệt Tiền Đính (GV21) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、头晕、视物模糊、头痛、流涕。"
  },
  {
    "code": "GV22",
    "zh": "囟会",
    "py": "Xìnhuì",
    "hanviet": "囟 Hội",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "头痛、视物模糊、流涕、小儿惊风、抽搐。",
    "vi": "Huyệt 囟 Hội (GV22) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、视物模糊、流涕、小儿惊风、抽搐。"
  },
  {
    "code": "GV23",
    "zh": "上星",
    "py": "Shàngxīng",
    "hanviet": "Thượng 星",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "头痛、眼痛、鼻衄、流涕、神志病。",
    "vi": "Huyệt Thượng 星 (GV23) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 头痛、眼痛、鼻衄、流涕、神志病。"
  },
  {
    "code": "GV24",
    "zh": "神庭",
    "py": "Shéntíng",
    "hanviet": "Thần Đình",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "癫痫、心悸、失眠、头痛、眩晕、流涕。",
    "vi": "Huyệt Thần Đình (GV24) thuộc Đốc Mạch. Vị trí: 头部. Chủ trị: 癫痫、心悸、失眠、头痛、眩晕、流涕。"
  },
  {
    "code": "GV24+",
    "zh": "印堂",
    "py": "Yìntáng",
    "hanviet": "Ấn Đường",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "头部",
    "indications": "",
    "vi": "Huyệt Ấn Đường (GV24+) thuộc Đốc Mạch. Vùng: 头部."
  },
  {
    "code": "GV25",
    "zh": "素髎",
    "py": "Sùliáo",
    "hanviet": "Tố Liêu",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "面部",
    "indications": "昏厥、鼻塞、鼻衄、流涕。",
    "vi": "Huyệt Tố Liêu (GV25) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 昏厥、鼻塞、鼻衄、流涕。"
  },
  {
    "code": "GV26",
    "zh": "水沟",
    "py": "Shuǐgōu",
    "hanviet": "Thủy Câu",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "面部",
    "indications": "昏厥、口眼歪斜、腰脊痛。",
    "vi": "Huyệt Thủy Câu (GV26) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 昏厥、口眼歪斜、腰脊痛。"
  },
  {
    "code": "GV27",
    "zh": "兑端",
    "py": "Duìduān",
    "hanviet": "Đoái Đoan",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "面部",
    "indications": "神志病、拘急强直。",
    "vi": "Huyệt Đoái Đoan (GV27) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 神志病、拘急强直。"
  },
  {
    "code": "GV28",
    "zh": "龈交",
    "py": "Yínjiāo",
    "hanviet": "Ngân Giao",
    "meridian_code": "GV",
    "meridian": "Đốc Mạch (督脉 · GV)",
    "region": "面部",
    "indications": "神志病、流涕。",
    "vi": "Huyệt Ngân Giao (GV28) thuộc Đốc Mạch. Vị trí: 面部. Chủ trị: 神志病、流涕。"
  },
  {
    "code": "CV1",
    "zh": "会阴",
    "py": "Huìyīn",
    "hanviet": "Hội Âm",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "会阴部",
    "indications": "尿潴留、痔疮、遗精、遗尿、月经不调、神志病。",
    "vi": "Huyệt Hội Âm (CV1) thuộc Nhâm Mạch. Vị trí: 会阴部. Chủ trị: 尿潴留、痔疮、遗精、遗尿、月经不调、神志病。"
  },
  {
    "code": "CV2",
    "zh": "曲骨",
    "py": "Qūgǔ",
    "hanviet": "Khúc Cốt",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "遗尿、遗精、阳痿、带下病、月经不调、痛经。",
    "vi": "Huyệt Khúc Cốt (CV2) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、阳痿、带下病、月经不调、痛经。"
  },
  {
    "code": "CV3",
    "zh": "中极",
    "py": "Zhōngjí",
    "hanviet": "Trung Cực",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "遗尿、遗精、阳痿、疝气、崩漏、月经不调。",
    "vi": "Huyệt Trung Cực (CV3) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、阳痿、疝气、崩漏、月经不调。"
  },
  {
    "code": "CV4",
    "zh": "关元",
    "py": "Guānyuán",
    "hanviet": "Quan Nguyên",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "遗尿、遗精、尿潴留、疝气、月经不调、带下病。",
    "vi": "Huyệt Quan Nguyên (CV4) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 遗尿、遗精、尿潴留、疝气、月经不调、带下病。"
  },
  {
    "code": "CV5",
    "zh": "石门",
    "py": "Shímén",
    "hanviet": "石 Môn",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹痛、泄泻、水肿、疝气、遗尿、闭经。",
    "vi": "Huyệt 石 Môn (CV5) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、泄泻、水肿、疝气、遗尿、闭经。"
  },
  {
    "code": "CV6",
    "zh": "气海",
    "py": "Qìhǎi",
    "hanviet": "Khí Hải",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹痛、遗尿、遗精、阳痿、疝气、水肿。",
    "vi": "Huyệt Khí Hải (CV6) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、遗尿、遗精、阳痿、疝气、水肿。"
  },
  {
    "code": "CV7",
    "zh": "阴交",
    "py": "Yīnjiāo",
    "hanviet": "Âm Giao",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹胀、水肿、疝气、月经不调。",
    "vi": "Huyệt Âm Giao (CV7) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹胀、水肿、疝气、月经不调。"
  },
  {
    "code": "CV8",
    "zh": "神阙",
    "py": "Shénquè",
    "hanviet": "Thần Khuyết",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹痛、肠鸣、中风、脱肛、泄泻。",
    "vi": "Huyệt Thần Khuyết (CV8) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、中风、脱肛、泄泻。"
  },
  {
    "code": "CV9",
    "zh": "水分",
    "py": "Shuǐfēn",
    "hanviet": "Thủy Phân",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹痛、肠鸣、水肿、尿潴留、泄泻。",
    "vi": "Huyệt Thủy Phân (CV9) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、水肿、尿潴留、泄泻。"
  },
  {
    "code": "CV10",
    "zh": "下脘",
    "py": "Xiàwǎn",
    "hanviet": "Hạ 脘",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "腹痛、肠鸣、消化不良、呕吐、泄泻。",
    "vi": "Huyệt Hạ 脘 (CV10) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 腹痛、肠鸣、消化不良、呕吐、泄泻。"
  },
  {
    "code": "CV11",
    "zh": "建里",
    "py": "Jiànlǐ",
    "hanviet": "Kiến Lý",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "胃痛、呕吐、腹胀、肠鸣、水肿、食欲不振。",
    "vi": "Huyệt Kiến Lý (CV11) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、呕吐、腹胀、肠鸣、水肿、食欲不振。"
  },
  {
    "code": "CV12",
    "zh": "中脘",
    "py": "Zhōngwǎn",
    "hanviet": "Trung 脘",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "胃痛、腹胀、肠鸣、恶心、呕吐、反酸。",
    "vi": "Huyệt Trung 脘 (CV12) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、肠鸣、恶心、呕吐、反酸。"
  },
  {
    "code": "CV13",
    "zh": "上脘",
    "py": "Shàngwǎn",
    "hanviet": "Thượng 脘",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "胃痛、腹胀、恶心、呕吐、癫痫、失眠。",
    "vi": "Huyệt Thượng 脘 (CV13) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 胃痛、腹胀、恶心、呕吐、癫痫、失眠。"
  },
  {
    "code": "CV14",
    "zh": "巨阙",
    "py": "Jùquè",
    "hanviet": "Cự 阙",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "恶心、反酸、吞咽困难、呕吐、神志病、癫痫。",
    "vi": "Huyệt Cự 阙 (CV14) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 恶心、反酸、吞咽困难、呕吐、神志病、癫痫。"
  },
  {
    "code": "CV15",
    "zh": "鸠尾",
    "py": "Jiūwěi",
    "hanviet": "鸠 尾",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "腹部",
    "indications": "恶心、神志病、癫痫。",
    "vi": "Huyệt 鸠 尾 (CV15) thuộc Nhâm Mạch. Vị trí: 腹部. Chủ trị: 恶心、神志病、癫痫。"
  },
  {
    "code": "CV16",
    "zh": "中庭",
    "py": "Zhōngtíng",
    "hanviet": "Trung Đình",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "胸满、呃逆、恶心、食欲不振。",
    "vi": "Huyệt Trung Đình (CV16) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸满、呃逆、恶心、食欲不振。"
  },
  {
    "code": "CV17",
    "zh": "膻中",
    "py": "Dànzhōng",
    "hanviet": "膻 Trung",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "哮喘、胸痛、胸满、心悸、乳少、呃逆。",
    "vi": "Huyệt 膻 Trung (CV17) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 哮喘、胸痛、胸满、心悸、乳少、呃逆。"
  },
  {
    "code": "CV18",
    "zh": "玉堂",
    "py": "Yùtáng",
    "hanviet": "Ngọc Đường",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、哮喘、呕吐。",
    "vi": "Huyệt Ngọc Đường (CV18) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘、呕吐。"
  },
  {
    "code": "CV19",
    "zh": "紫宫",
    "py": "Zǐgōng",
    "hanviet": "Tử Cung",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "胸痛、哮喘、咳嗽。",
    "vi": "Huyệt Tử Cung (CV19) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、哮喘、咳嗽。"
  },
  {
    "code": "CV20",
    "zh": "华盖",
    "py": "Huágài",
    "hanviet": "华 Cái",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "胸满、哮喘、咳嗽。",
    "vi": "Huyệt 华 Cái (CV20) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸满、哮喘、咳嗽。"
  },
  {
    "code": "CV21",
    "zh": "璇玑",
    "py": "Xuánjī",
    "hanviet": "璇 玑",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "胸前部",
    "indications": "胸痛、咳嗽、哮喘。",
    "vi": "Huyệt 璇 玑 (CV21) thuộc Nhâm Mạch. Vị trí: 胸前部. Chủ trị: 胸痛、咳嗽、哮喘。"
  },
  {
    "code": "CV22",
    "zh": "天突",
    "py": "Tiāntū",
    "hanviet": "Thiên Đột",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "颈部",
    "indications": "哮喘、咳嗽、咽喉痛、呃逆、声音嘶哑、吞咽困难。",
    "vi": "Huyệt Thiên Đột (CV22) thuộc Nhâm Mạch. Vị trí: 颈部. Chủ trị: 哮喘、咳嗽、咽喉痛、呃逆、声音嘶哑、吞咽困难。"
  },
  {
    "code": "CV23",
    "zh": "廉泉",
    "py": "Liánquán",
    "hanviet": "Liêm Tuyền",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "颈部",
    "indications": "失语、拘急强直、中风、声音嘶哑、吞咽困难。",
    "vi": "Huyệt Liêm Tuyền (CV23) thuộc Nhâm Mạch. Vị trí: 颈部. Chủ trị: 失语、拘急强直、中风、声音嘶哑、吞咽困难。"
  },
  {
    "code": "CV24",
    "zh": "承浆",
    "py": "Chéngjiāng",
    "hanviet": "Thừa 浆",
    "meridian_code": "CV",
    "meridian": "Nhâm Mạch (任脉 · CV)",
    "region": "面部",
    "indications": "牙痛、神志病。",
    "vi": "Huyệt Thừa 浆 (CV24) thuộc Nhâm Mạch. Vị trí: 面部. Chủ trị: 牙痛、神志病。"
  },
  {
    "code": "EX-HN1",
    "zh": "四神聪",
    "py": "Sìshéncōng",
    "hanviet": "Tứ Thần 聪",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tứ Thần 聪 (EX-HN1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN2",
    "zh": "当阳",
    "py": "Dāngyáng",
    "hanviet": "Đương Dương",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Đương Dương (EX-HN2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN4",
    "zh": "鱼腰",
    "py": "Yúyāo",
    "hanviet": "Ngư Yêu",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Ngư Yêu (EX-HN4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN5",
    "zh": "太阳",
    "py": "Tàiyáng",
    "hanviet": "Thái Dương",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Thái Dương (EX-HN5) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN6",
    "zh": "耳尖",
    "py": "Ěrjiān",
    "hanviet": "耳 Tiêm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 耳 Tiêm (EX-HN6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN7",
    "zh": "球后",
    "py": "Qiúhòu",
    "hanviet": "Cầu Hậu",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Cầu Hậu (EX-HN7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN8",
    "zh": "上迎香",
    "py": "Shàngyíngxiāng",
    "hanviet": "Thượng Nghinh Hương",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Thượng Nghinh Hương (EX-HN8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN9",
    "zh": "内迎香",
    "py": "Nèiyíngxiāng",
    "hanviet": "Nội Nghinh Hương",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Nội Nghinh Hương (EX-HN9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN10",
    "zh": "聚泉",
    "py": "Jùquán",
    "hanviet": "Tụ Tuyền",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tụ Tuyền (EX-HN10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN11",
    "zh": "海泉",
    "py": "Hǎiquán",
    "hanviet": "Hải Tuyền",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Hải Tuyền (EX-HN11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN12",
    "zh": "金津玉液",
    "py": "JīnjīnYùyè",
    "hanviet": "Kim 津 Ngọc Dịch",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Kim 津 Ngọc Dịch (EX-HN12) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN14",
    "zh": "翳明",
    "py": "Yìmíng",
    "hanviet": "Ế Minh",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Ế Minh (EX-HN14) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "N-HN54",
    "zh": "安眠",
    "py": "Ānmián",
    "hanviet": "An 眠",
    "meridian_code": "N",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · N)",
    "region": "",
    "indications": "",
    "vi": "Huyệt An 眠 (N-HN54) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "N-HN20",
    "zh": "牵正",
    "py": "Qiānzhènɡ",
    "hanviet": "Khiên Chánh",
    "meridian_code": "N",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · N)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Khiên Chánh (N-HN20) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EXTRA-XINSHE",
    "zh": "新设",
    "py": "Xīnshè",
    "hanviet": "Tân Thiết",
    "meridian_code": "EXTRA",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EXTRA)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tân Thiết (EXTRA-XINSHE) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-HN15",
    "zh": "颈百劳",
    "py": "Jìngbǎiláo",
    "hanviet": "颈 Bách Lao",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 颈 Bách Lao (EX-HN15) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EXTRA-XUEYADIAN",
    "zh": "血压点",
    "py": "Xuèyādiǎn",
    "hanviet": "Huyết Áp Điểm",
    "meridian_code": "EXTRA",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EXTRA)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Huyết Áp Điểm (EXTRA-XUEYADIAN) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EXTRA-TITUO",
    "zh": "提托",
    "py": "Títuō",
    "hanviet": "Đề Thác",
    "meridian_code": "EXTRA",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EXTRA)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Đề Thác (EXTRA-TITUO) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-CA1",
    "zh": "子宫",
    "py": "Zǐgōng",
    "hanviet": "Tử Cung",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tử Cung (EX-CA1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B1",
    "zh": "定喘",
    "py": "Dìngchuǎn",
    "hanviet": "Định Suyễn",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Định Suyễn (EX-B1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B2",
    "zh": "夹脊",
    "py": "Jiájǐ",
    "hanviet": "Giáp Tích",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Giáp Tích (EX-B2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B3",
    "zh": "胃脘下俞",
    "py": "Wèiwǎnxiàshū",
    "hanviet": "Vị 脘 Hạ Du",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Vị 脘 Hạ Du (EX-B3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EXTRA-JIEJI",
    "zh": "接脊",
    "py": "Jiējǐ",
    "hanviet": "Tiếp Tích",
    "meridian_code": "EXTRA",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EXTRA)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tiếp Tích (EXTRA-JIEJI) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B4",
    "zh": "痞根",
    "py": "Pǐgēn",
    "hanviet": "痞 Căn",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 痞 Căn (EX-B4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B6",
    "zh": "腰宜",
    "py": "Yāoyí",
    "hanviet": "Yêu 宜",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Yêu 宜 (EX-B6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B7",
    "zh": "腰眼",
    "py": "Yāoyǎn",
    "hanviet": "Yêu Nhãn",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Yêu Nhãn (EX-B7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-B8",
    "zh": "十七椎",
    "py": "Shíqīzhuī",
    "hanviet": "Thập Thất Chùy",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Thập Thất Chùy (EX-B8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "M-UE48",
    "zh": "肩前",
    "py": "Jiānqián",
    "hanviet": "Kiên Tiền",
    "meridian_code": "M",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · M)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Kiên Tiền (M-UE48) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE1",
    "zh": "肘尖",
    "py": "Zhǒujiān",
    "hanviet": "Trụ Tiêm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Trụ Tiêm (EX-UE1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE2",
    "zh": "二白",
    "py": "Èrbái",
    "hanviet": "Nhị Bạch",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Nhị Bạch (EX-UE2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE3",
    "zh": "中泉",
    "py": "Zhōngquán",
    "hanviet": "Trung Tuyền",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Trung Tuyền (EX-UE3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE4",
    "zh": "中魁",
    "py": "Zhōngkuí",
    "hanviet": "Trung 魁",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Trung 魁 (EX-UE4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE5",
    "zh": "大骨空",
    "py": "Dàgǔkōng",
    "hanviet": "Đại Cốt Không",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Đại Cốt Không (EX-UE5) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE6",
    "zh": "小骨空",
    "py": "Xiǎogǔkōng",
    "hanviet": "Tiểu Cốt Không",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tiểu Cốt Không (EX-UE6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE7",
    "zh": "腰痛点",
    "py": "Yāotòngdiǎn",
    "hanviet": "Yêu Thống Điểm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Yêu Thống Điểm (EX-UE7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE8",
    "zh": "外劳宫",
    "py": "Wàiláogōng",
    "hanviet": "Ngoại Lao Cung",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Ngoại Lao Cung (EX-UE8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE9",
    "zh": "八邪",
    "py": "Bāxié",
    "hanviet": "Bát Tà",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Bát Tà (EX-UE9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE10",
    "zh": "四缝",
    "py": "Sìfèng",
    "hanviet": "Tứ Phùng",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Tứ Phùng (EX-UE10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-UE11",
    "zh": "十宣",
    "py": "Shíxuān",
    "hanviet": "Thập 宣",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Thập 宣 (EX-UE11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE1",
    "zh": "髋骨",
    "py": "Kuāngǔ",
    "hanviet": "髋 Cốt",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 髋 Cốt (EX-LE1) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE2",
    "zh": "鹤顶",
    "py": "Hèdǐng",
    "hanviet": "鹤 Đính",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 鹤 Đính (EX-LE2) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE3",
    "zh": "百虫窝",
    "py": "Bǎichóngwō",
    "hanviet": "Bách 虫 Oa",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Bách 虫 Oa (EX-LE3) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE4",
    "zh": "内膝眼",
    "py": "Nèixīyǎn",
    "hanviet": "Nội 膝 Nhãn",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Nội 膝 Nhãn (EX-LE4) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE6",
    "zh": "胆囊",
    "py": "Dǎnnáng",
    "hanviet": "Đởm 囊",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Đởm 囊 (EX-LE6) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE7",
    "zh": "阑尾",
    "py": "Lánwěi",
    "hanviet": "阑 尾",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt 阑 尾 (EX-LE7) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE8",
    "zh": "内踝尖",
    "py": "Nèihuáijiān",
    "hanviet": "Nội 踝 Tiêm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Nội 踝 Tiêm (EX-LE8) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE9",
    "zh": "外踝尖",
    "py": "Wàihuáijiān",
    "hanviet": "Ngoại 踝 Tiêm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Ngoại 踝 Tiêm (EX-LE9) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE10",
    "zh": "八风",
    "py": "Bāfēng",
    "hanviet": "Bát Phong",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Bát Phong (EX-LE10) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EXTRA-LINEITING",
    "zh": "里内庭",
    "py": "Lǐnèitínɡ",
    "hanviet": "Lý Nội Đình",
    "meridian_code": "EXTRA",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EXTRA)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Lý Nội Đình (EXTRA-LINEITING) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE11",
    "zh": "独阴",
    "py": "Dúyīn",
    "hanviet": "Độc Âm",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Độc Âm (EX-LE11) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  },
  {
    "code": "EX-LE12",
    "zh": "气端",
    "py": "Qìduān",
    "hanviet": "Khí Đoan",
    "meridian_code": "EX",
    "meridian": "Kinh Ngoại Kỳ Huyệt (经外奇穴 · EX)",
    "region": "",
    "indications": "",
    "vi": "Huyệt Khí Đoan (EX-LE12) thuộc Kinh Ngoại Kỳ Huyệt. Vùng: ."
  }
];

const TCM_PASSAGES = [
  {
    "id": "tcm-neijing-1",
    "title": "Hoàng Đế Nội Kinh · Tố Vấn (Thượng Cổ Thiên Chân Luận)",
    "source": "黄帝内经 · 素问 · 上古天真论",
    "category": "Kinh Điển Dưỡng Sinh",
    "content_zh": "上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年，度百岁乃去。",
    "pinyin": "Shàng gǔ zhī rén, qí zhī dào zhě, fǎ yú yīn yáng, hé yú shù shù, shí yǐn yǒu jié, qǐ jū yǒu cháng, bù wàng zuò láo, gù néng xíng yǔ shén jù, ér jìn zhōng qí tiān nián, dù bǎi suì nǎi qù.",
    "hanviet": "Thượng cổ chi nhân, kỳ tri đạo giả, pháp vu âm dương, hòa vu thuật số, thực ẩm hữu tiết, khởi cư hữu thường, bất vọng tác lao, cố năng hình dữ thần câu, nhi tận chung kỳ thiên niên, độ bách tuế nãi khứ.",
    "translation_vi": "Người thời thượng cổ am hiểu đạo dưỡng sinh, luôn thuận theo quy luật âm dương, hòa hợp với phép tắc điều dưỡng, ăn uống có chừng mực, sinh hoạt ngủ nghỉ có giờ giấc, không làm việc lao lực bừa bãi. Cho nên hình thể và tinh thần đều được chu toàn, sống trọn tuổi trời, thọ quá trăm tuổi mới mất.",
    "translation_en": "In ancient times, those who knew the Dao modeled themselves on Yin and Yang, harmonized with divination and arts, moderated their food and drink, kept regular habits, and did not toil recklessly. Thus their physical forms remained complete with spirit, exhausting their natural life span beyond a hundred years."
  },
  {
    "id": "tcm-shanghan-guizhi",
    "title": "Thương Hàn Luận · Quế Chi Thang Quỹ Tắc",
    "source": "伤寒论 · 辨太阳病脉证并治",
    "category": "Kinh Điển Trị Liệu",
    "content_zh": "太阳病，头痛，发热，汗出，恶风，桂枝汤主之。桂枝汤方：桂枝三两，芍药三两，甘草二两炙，生姜三两切，大枣十二枚擘。",
    "pinyin": "Tài yáng bìng, tóu tòng, fā rè, hàn chū, wù fēng, Guì zhī tāng zhǔ zhī. Guì zhī tāng fāng: guì zhī sān liǎng, sháo yào sān liǎng, gān cǎo èr liǎng zhì, shēng jiāng sān liǎng qiē, dà zǎo shí èr méi bò.",
    "hanviet": "Thái dương bệnh, đầu thống, phát nhiệt, hãn xuất, ố phong, Quế Chi Thang chủ chi. Quế Chi Thang phương: quế chi tam lượng, thược dược tam lượng, cam thảo nhị lượng chích, sinh khương tam lượng thiết, đại táo thập nhị mai phách.",
    "translation_vi": "Thái dương bệnh, đau đầu, phát sốt, ra mồ hôi, sợ gió (biểu hư), dùng Quế Chi Thang làm chủ. Phương Quế Chi Thang gồm: Quế chi 3 lạng, Thược dược 3 lạng, Chích cam thảo 2 lạng, Sinh khương thái lát 3 lạng, Đại táo 12 quả bẻ đôi.",
    "translation_en": "Taiyang disease with headache, fever, sweating, and aversion to wind is governed by Guizhi Decoction. Formula: Cinnamon twig 3 liang, Peony root 3 liang, Roasted licorice 2 liang, Fresh ginger 3 liang, Jujube 12 pieces."
  },
  {
    "id": "tcm-neijing-2",
    "title": "Hoàng Đế Nội Kinh · Âm Dương Ứng Tượng Đại Luận",
    "source": "黄帝内经 · 素问 · 阴阳应象大论",
    "category": "Lý Luận Cơ Bản",
    "content_zh": "阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也，治病必求于本。",
    "pinyin": "Yīn yáng zhě, tiān dì zhī dào yě, wàn wù zhī gāng jì, biàn huà zhī fù mǔ, shēng shā zhī běn shǐ, shén míng zhī fǔ yě, zhì bìng bì qiú yú běn.",
    "hanviet": "Âm dương giả, thiên địa chi đạo dã, vạn vật chi cương kỷ, biến hóa chi phụ mẫu, sinh sát chi bản thủy, thần minh chi phủ dã, trị bệnh tất cầu vu bản.",
    "translation_vi": "Âm dương chính là quy luật của trời đất, là cương kỷ trật tự của muôn vật, là cha mẹ cội nguồn của mọi sự biến hóa, là gốc rễ của sinh trưởng và tiêu diệt, là nơi trú ngụ của tinh thần trí huệ. Cho nên chữa bệnh nhất định phải tìm về gốc rễ.",
    "translation_en": "Yin and Yang are the way of Heaven and Earth, the guideline of all things, the parents of change, the origin of life and destruction, the palace of divine intelligence. To treat illness, one must seek the root."
  }
];

  // Cung cấp các API tra cứu chuyên dụng
  window.TCM_DATA = {
    terms: TCM_TERMS,
    acupoints: TCM_ACUPOINTS,
    meridians: TCM_MERIDIANS,
    passages: TCM_PASSAGES,
    findTerm: function(zh) {
      return TCM_TERMS.find(t => t.zh === zh);
    },
    search: function(q) {
      if (!q) return TCM_TERMS.slice(0, 50);
      const query = q.toLowerCase().trim();
      return TCM_TERMS.filter(t => 
        (t.zh && t.zh.includes(query)) ||
        (t.hanviet && t.hanviet.toLowerCase().includes(query)) ||
        (t.vi && t.vi.toLowerCase().includes(query)) ||
        (t.pinyin && t.pinyin.toLowerCase().includes(query))
      );
    }
  };

  console.log('✅ TCM Specialist Data Module initialized: ' + TCM_TERMS.length + ' terms, ' + TCM_ACUPOINTS.length + ' acupoints, ' + TCM_PASSAGES.length + ' passages.');
})();
