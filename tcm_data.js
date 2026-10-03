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
  const TCM_ACUPOINTS = [
  {
    "zh": "合谷",
    "pinyin": "hé gǔ",
    "hanviet": "Hợp Cốc",
    "meridian": "Thủ Dương Minh Đại Trường Kinh (LI4)",
    "vi": "Huyệt nguyên của Đại Trường kinh; chủ trị đau đầu, đau răng, liệt mặt, cảm mạo, thanh nhiệt sơ phong.",
    "en": "Hegu (LI4) - Yuan-Source point of Large Intestine meridian"
  },
  {
    "zh": "足三里",
    "pinyin": "zú sān lǐ",
    "hanviet": "Túc Tam Lý",
    "meridian": "Túc Dương Minh Vị Kinh (ST36)",
    "vi": "Huyệt hợp của Vị kinh; đại bổ tỳ vị, ích khí dưỡng huyết, tăng cường miễn dịch toàn thân, trường thọ kiện thể.",
    "en": "Zusanli (ST36) - He-Sea point of Stomach meridian"
  },
  {
    "zh": "内关",
    "pinyin": "nèi guān",
    "hanviet": "Nội Quan",
    "meridian": "Thủ Quyết Âm Tâm Bào Kinh (PC6)",
    "vi": "Huyệt lạc của Tâm Bào kinh, bát mạch giao hội; an thần, định tâm, thư hung lý khí, trị nôn ói, đau tức ngực, hồi hộp.",
    "en": "Neiguan (PC6) - Luo-Connecting point of Pericardium meridian"
  },
  {
    "zh": "太冲",
    "pinyin": "tài chōng",
    "hanviet": "Thái Xung",
    "meridian": "Túc Quyết Âm Can Kinh (LR3)",
    "vi": "Huyệt nguyên của Can kinh; bình can tức phong, sơ can giải uất, thanh nhiệt chỉ thống, trị đau đầu hoa mắt, cáu gắt.",
    "en": "Taichong (LR3) - Yuan-Source point of Liver meridian"
  },
  {
    "zh": "三阴交",
    "pinyin": "sān yīn jiāo",
    "hanviet": "Tam Âm Giao",
    "meridian": "Túc Thái Âm Tỳ Kinh (SP6)",
    "vi": "Nơi giao hội của 3 kinh âm túc (Tỳ - Can - Thận); kiện tỳ hóa thấp, điều kinh bổ can thận, trị mất ngủ, thống kinh.",
    "en": "Sanyinjiao (SP6) - Crossing point of Spleen, Liver, Kidney meridians"
  },
  {
    "zh": "百会",
    "pinyin": "bǎi huì",
    "hanviet": "Bách Hội",
    "meridian": "Đốc Mạch (GV20)",
    "vi": "Huyệt hội của các kinh dương; thăng dương ích khí, tỉnh thần khai khiếu, trị sa trực tràng, sa tử cung, hoa mắt chóng mặt.",
    "en": "Baihui (GV20) - Meeting point of all Yang meridians"
  },
  {
    "zh": "涌泉",
    "pinyin": "yǒng quán",
    "hanviet": "Dũng Tuyền",
    "meridian": "Túc Thiếu Âm Thận Kinh (KI1)",
    "vi": "Huyệt tỉnh của Thận kinh; giáng hỏa dẫn hỏa quy nguyên, định thần, tư âm ích thận, hạ huyết áp, trị mất ngủ.",
    "en": "Yongquan (KI1) - Jing-Well point of Kidney meridian"
  },
  {
    "zh": "神阙",
    "pinyin": "shén què",
    "hanviet": "Thần Khuyết",
    "meridian": "Nhâm Mạch (CV8 - Rốn)",
    "vi": "Huyệt tại chính giữa rốn; ôn dương cứu nghịch, kiện tỳ chỉ tả, hòa vị lý khí, cấm châm (chỉ cứu ngải hoặc đắp thuốc).",
    "en": "Shenque (CV8) - Navel center, tonifies Yuan Qi"
  },
  {
    "zh": "关元",
    "pinyin": "guān yuán",
    "hanviet": "Quan Nguyên",
    "meridian": "Nhâm Mạch (CV4)",
    "vi": "Huyệt mộ của Tiểu Trường; đại bổ nguyên khí, hồi dương cứu nghịch, ôn bổ hạ tiêu, ích thận bổ hư.",
    "en": "Guanyuan (CV4) - Mu point of Small Intestine, tonifies Original Qi"
  },
  {
    "zh": "气海",
    "pinyin": "qì hǎi",
    "hanviet": "Khí Hải",
    "meridian": "Nhâm Mạch (CV6)",
    "vi": "Biển của sinh khí hạ tiêu; sinh phát nguyên khí, ôn sưởi hạ tiêu, trị khí hư, tiêu chảy mạn tính, đái dầm.",
    "en": "Qihai (CV6) - Sea of Qi, vital energy reservoir"
  },
  {
    "zh": "风池",
    "pinyin": "fēng chí",
    "hanviet": "Phong Trì",
    "meridian": "Túc Thiếu Dương Đởm Kinh (GB20)",
    "vi": "Huyệt trị phong kinh điển; sơ phong tán tà, thanh đầu minh mục, trị cảm cúm, đau đầu vùng chẩm, cứng cổ, tăng nhãn áp.",
    "en": "Fengchi (GB20) - Wind Pool, treats exterior wind and headache"
  },
  {
    "zh": "大椎",
    "pinyin": "dà zhuī",
    "hanviet": "Đại Chùy",
    "meridian": "Đốc Mạch (GV14)",
    "vi": "Hội của Đốc mạch với 6 kinh dương; giải biểu thanh nhiệt, tuyên dương tán hàn, trị sốt cao, cảm mạo hàn nhiệt, suyễn tức.",
    "en": "Dazhui (GV14) - Great Vertebra, meeting of all Yang channels"
  }
];

  // 3. KHO ĐOẠN VĂN Y KINH KINH ĐIỂN (CLASSIC MEDICAL PASSAGES)
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
