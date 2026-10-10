// ============================================================================
// HSK 3.0 — MODULE CHUYÊN NGÀNH TIÊU CHUẨN (SPECIALIZED TRACKS & CURRICULUM)
// Phân tách 5 khóa học chuyên ngành:
// 1. 🩺 Y Dược & Đông Y (Medical & TCM - 医学与中医)
// 2. 💼 Kinh Doanh & Thương Mại Quốc Tế (Business & Trade - 商务与外贸)
// 3. 💻 Công Nghệ Thông Tin & AI (IT & Artificial Intelligence - 科技与人工智能)
// 4. ⚖️ Pháp Luật & Hợp Đồng Thương Mại (Law & Legal Contracts - 法律与合同)
// 5. ✈️ Du Lịch & Dịch Vụ Khách Sạn (Tourism & Hospitality - 旅游与酒店)
// ============================================================================

(function() {
  'use strict';

  const SPECIALIZED_COURSES = {
    tcm: {
      id: "tcm",
      icon: "🩺",
      title: "Y Dược & Đông Y (医学与中医)",
      subtitle: "Thuật ngữ y khoa, biện chứng luận trị, huyệt đạo & dược liệu",
      level: "HSK 4–9 / MCT (Medical Chinese)",
      vocab: [
        { zh: "辨证论治", py: "biàn zhèng lùn zhì", hv: "BIỆN CHỨNG LUẬN TRỊ", mean: "Phương pháp chẩn đoán dựa trên chứng bệnh để đưa ra phác đồ điều trị thích hợp", ex_zh: "辨证论治是中医认识疾病和治疗疾病的基本原则。", ex_vi: "Biện chứng luận trị là nguyên tắc cơ bản của Đông y trong việc nhận biết và chữa trị bệnh tật." },
        { zh: "望闻问切", py: "wàng wén wèn qiè", hv: "VỌNG VĂN VẤN THIẾT", mean: "Tứ chẩn: quan sát, lắng nghe/ngửi mùi, hỏi han và bắt mạch", ex_zh: "老中医通过望闻问切综合判断患者的病情。", ex_vi: "Lão danh y thông qua vọng văn vấn thiết để phán đoán tổng thể tình trạng của bệnh nhân." },
        { zh: "阴阳五行", py: "yīn yáng wǔ xíng", hv: "ÂM DƯƠNG NGŨ HÀNH", mean: "Học thuyết âm dương và kim mộc thủy hỏa thổ trong triết học y học", ex_zh: "人体健康依赖于阴阳平衡与五行相生相克。", ex_vi: "Sức khỏe con người dựa vào sự cân bằng âm dương và tương sinh tương khắc của ngũ hành." },
        { zh: "气血亏虚", py: "qì xuè kuī xū", hv: "KHÍ HUYẾT KHUY HƯ", mean: "Tình trạng thiếu hụt cả khí và huyết trong cơ thể", ex_zh: "面色苍白往往是气血亏虚的明显体征。", ex_vi: "Sắc mặt nhợt nhạt thường là biểu hiện rõ ràng của tình trạng khí huyết khuy hư." },
        { zh: "足三里", py: "zú sān lǐ", hv: "TÚC TAM LÝ", mean: "Huyệt đạo bổ tỳ vị trường thọ trên đường kinh Vị", ex_zh: "常灸足三里，能健脾胃、增强机体免疫力。", ex_vi: "Thường xuyên cứu huyệt Túc Tam Lý có thể kiện tỳ vị, tăng cường miễn dịch cơ thể." },
        { zh: "黄帝内经", py: "huáng dì nèi jīng", hv: "HOÀNG ĐẾ NỘI KINH", mean: "Bộ kinh điển lý luận nền tảng lâu đời nhất của y học phương Đông", ex_zh: "《黄帝内经》奠定了中医学的理论基石。", ex_vi: "Hoàng Đế Nội Kinh đã đặt nền móng lý luận cho nền y học cổ truyền phương Đông." },
        { zh: "疏肝理气", py: "shū gān lǐ qì", hv: "SƠ CAN LÝ KHÍ", mean: "Phương pháp điều trị giải tỏa ứ trệ tại tạng Can", ex_zh: "柴胡疏肝散是疏肝理气的经典代表方剂。", ex_vi: "Sài Hồ Sơ Can Tán là bài thuốc kinh điển đại diện cho phép sơ can lý khí." },
        { zh: "针灸推拿", py: "zhēn jiǔ tuī ná", hv: "CHÂM CỨU THÔI NÃ", mean: "Phương pháp chữa bệnh không dùng thuốc: châm kim, cứu ngải và xoa bóp", ex_zh: "针灸推拿对缓解颈椎病和腰痛有显著疗效。", ex_vi: "Châm cứu thôi nã có hiệu quả rõ rệt trong việc thuyên giảm thoái hóa đốt sống cổ và đau thắt lưng." }
      ],
      sentences: [
        { zh: "根据舌苔薄白、脉象浮紧，初步诊断为风寒感冒。", py: "gēn jù shé tāi bó bái 、 mài xiàng fú jǐn ， chū bù zhěn duàn wéi fēng hán gǎn mào 。", vi: "Căn cứ vào rêu lưỡi mỏng trắng, mạch tượng phù khẩn, sơ bộ chẩn đoán là cảm mạo phong hàn." },
        { zh: "本方剂以补中益气、升阳举陷为主要功效。", py: "běn fāng jì yǐ bǔ zhōng yì qì 、 shēng yáng jǔ xiàn wéi zhǔ yào gōng xiào 。", vi: "Bài thuốc này lấy công năng bổ trung ích khí, thăng dương cử hãm làm tác dụng chính." }
      ],
      case_study: {
        title: "Bệnh án biện chứng Can khí uất kết (肝气郁结病案)",
        zh: "患者女，三十五岁。自述近两月情绪抑郁，胸胁胀痛，善太息，食欲减退。舌淡红苔薄白，脉弦。辨证为肝气郁结，气机不畅。治法宜疏肝解郁，理气和胃。方选柴胡疏肝散加减，配合针灸太冲、期门穴，调畅气机。",
        vi: "Bệnh nhân nữ, 35 tuổi. Tự khai 2 tháng nay tâm trạng u uất, đau tức ngực sườn, hay thở dài, ăn uống kém. Lưỡi nhạt rêu mỏng trắng, mạch huyền. Biện chứng: Can khí uất kết, khí cơ không thông. Phép trị: Sơ can giải uất, lý khí hòa vị. Phương thuốc: Sài hồ sơ can tán gia giảm, phối hợp châm huyệt Thái Xung, Kỳ Môn để điều hòa khí cơ."
      }
    },
    business: {
      id: "business",
      icon: "💼",
      title: "Kinh Doanh & Thương Mại (商务与外贸)",
      subtitle: "Đàm phán hợp đồng, xuất nhập khẩu, thanh toán quốc tế & chào giá",
      level: "HSK 4–6 / BCT (Business Chinese)",
      vocab: [
        { zh: "信用证", py: "xìn yòng zhèng", hv: "TÍN DỤNG CHỨNG", mean: "Thư tín dụng ngân hàng (L/C - Letter of Credit)", ex_zh: "我们通常要求买方通过不可撤销即期信用证付款。", ex_vi: "Chúng tôi thường yêu cầu bên mua thanh toán bằng thư tín dụng không thể hủy ngang trả ngay." },
        { zh: "不可抗力", py: "bù kě kàng lì", hv: "BẤT KHẢ KHÁNG LỰC", mean: "Điều khoản sự kiện bất khả kháng (Force Majeure)", ex_zh: "若因不可抗力导致交货延迟，双方均免于违约赔偿。", ex_vi: "Nếu chậm trễ giao hàng do sự kiện bất khả kháng, đôi bên đều được miễn trừ bồi thường vi phạm hợp đồng." },
        { zh: "报关清关", py: "bào guān qīng guān", hv: "BÁO QUAN THANH QUAN", mean: "Thủ tục khai báo hải quan và thông quan hàng hóa", ex_zh: "货代公司将负责本批集装箱在目的港的报关清关手续。", ex_vi: "Công ty logistics sẽ chịu trách nhiệm thủ tục khai báo và thông quan cho lô container này tại cảng đến." },
        { zh: "离岸价格", py: "lí àn jià gé", hv: "LY NGẠN GIÁ CÁCH", mean: "Giá FOB (Free on Board - giao hàng lên tàu)", ex_zh: "我方报价以青岛港离岸价格为基准计算。", ex_vi: "Báo giá của bên tôi được tính toán dựa trên giá FOB tại cảng Thanh Đảo." },
        { zh: "到岸价格", py: "dào àn jià gé", hv: "ĐÁO NGẠN GIÁ CÁCH", mean: "Giá CIF (Cost, Insurance and Freight)", ex_zh: "如果按到岸价格成交，海运保险费将由卖方承担。", ex_vi: "Nếu ký kết theo giá CIF, phí bảo hiểm hàng hải sẽ do bên bán chi trả." },
        { zh: "违约责任", py: "wéi yuē zé rèn", hv: "VI ƯỚC TRÁCH NHIỆM", mean: "Trách nhiệm vi phạm hợp đồng và nghĩa vụ bồi thường", ex_zh: "合同第六条明确规定了单方违约时的赔偿金比例。", ex_vi: "Điều 6 của hợp đồng quy định rõ ràng tỷ lệ bồi thường khi một bên đơn phương vi phạm hợp đồng." },
        { zh: "询价还盘", py: "xún jià huán pán", hv: "TUẦN GIÁ HOÀN BÀN", mean: "Hỏi giá và trả giá ngược lại (Inquiry and Counter-offer)", ex_zh: "经过三轮询价与还盘，双方终于就单价达成了一致。", ex_vi: "Sau 3 vòng hỏi giá và trả giá qua lại, hai bên cuối cùng đã thống nhất được đơn giá." },
        { zh: "装船提单", py: "zhuāng chuán tí dān", hv: "TRANG THUYỀN ĐỀ ĐƠN", mean: "Vận đơn đường biển (Bill of Lading - B/L)", ex_zh: "买方只有在向银行结清全款后方可换取正本装船提单。", ex_vi: "Bên mua chỉ sau khi thanh toán toàn bộ tiền cho ngân hàng mới có thể nhận vận đơn gốc." }
      ],
      sentences: [
        { zh: "若贵方订购量超过一万件，我方愿给予百分之五的价格折扣。", py: "ruò guì fāng dìng gòu liàng chāo guò yī wàn jiàn ， wǒ fāng yuàn jǐ yǔ bǎi fēn zhī wǔ de jià gé zhé kòu 。", vi: "Nếu quý công ty đặt hàng trên 10.000 kiện, bên tôi sẵn sàng chiết khấu 5% giá bán." },
        { zh: "为保证双方资金安全，建议首批订单采用电汇定金加信用证模式。", py: "wèi bǎo zhèng shuāng fāng zī jīn ān quán ， jiàn yì shǒu pī dìng dān cǎi yòng diàn huì dìng jīn jiā xìn yòng zhèng mó shì 。", vi: "Để đảm bảo an toàn vốn cho hai bên, đề xuất đơn hàng đầu tiên áp dụng phương thức cọc T/T kết hợp L/C." }
      ],
      case_study: {
        title: "Đàm phán điều khoản thanh toán đơn hàng xuất khẩu",
        zh: "买方认为当前市场资金流动性紧张，希望采用交单付款（D/P）结算。然而卖方代表指出，定制产品转售难度大，为防范汇率波动与拒收风险，坚持要求预付百分之三十定金，余款凭提单副本结清。经过友好磋商，双方最终同意预付百分之二十，尾款开立即期信用证，达成了互惠共赢的妥协方案。",
        vi: "Bên mua cho rằng thị trường hiện nay thanh khoản vốn căng thẳng nên mong muốn thanh toán nhờ thu trả tiền đổi chứng từ (D/P). Tuy nhiên đại diện bên bán chỉ ra rằng hàng đặt may theo yêu cầu rất khó bán lại, để phòng ngừa biến động tỷ giá và rủi ro từ chối nhận hàng, bên bán kiên quyết yêu cầu đặt cọc 30%, phần còn lại thanh toán theo bản sao vận đơn. Qua trao đổi thiện chí, hai bên thống nhất cọc 20%, số còn lại mở L/C trả ngay."
      }
    },
    tech: {
      id: "tech",
      icon: "💻",
      title: "Công Nghệ & AI (科技与人工智能)",
      subtitle: "Phần mềm, thuật toán, điện toán đám mây, kiến trúc hệ thống & AI",
      level: "HSK 5–9 (Tech & Innovation)",
      vocab: [
        { zh: "大语言模型", py: "dà yǔ yán mó xíng", hv: "ĐẠI NGỮ NGÔN MÔ HÌNH", mean: "Mô hình ngôn ngữ lớn (LLM - Large Language Model)", ex_zh: "大语言模型在自然语言处理与多轮对话中展现出卓越能力。", ex_vi: "Mô hình ngôn ngữ lớn thể hiện năng lực vượt trội trong xử lý ngôn ngữ tự nhiên và đối thoại nhiều lượt." },
        { zh: "算法优化", py: "suàn fǎ yōu huà", hv: "TOÁN PHÁP ƯU HÓA", mean: "Tối ưu hóa giải thuật / thuật toán", ex_zh: "通过对搜索算法的优化，系统响应时间缩短了百分之四十。", ex_vi: "Nhờ tối ưu hóa thuật toán tìm kiếm, thời gian phản hồi của hệ thống đã rút ngắn 40%." },
        { zh: "云计算", py: "yún suàn suàn", hv: "VÂN TOÁN TOÁN", mean: "Điện toán đám mây (Cloud Computing)", ex_zh: "企业将核心业务迁移到云计算平台以降低运维成本。", ex_vi: "Doanh nghiệp chuyển dịch các nghiệp vụ cốt lõi lên nền tảng điện toán đám mây để giảm chi phí vận hành." },
        { zh: "分布式系统", py: "fēn bù shì xì tǒng", hv: "PHÂN BỐ THỨC HỆ THỐNG", mean: "Hệ thống phân tán có độ chịu lỗi cao (Distributed System)", ex_zh: "高可用架构通常基于分布式系统设计以消除单点故障。", ex_vi: "Kiến trúc sẵn sàng cao thường được thiết kế dựa trên hệ thống phân tán để loại bỏ điểm lỗi đơn nhất." },
        { zh: "接口调用", py: "jiē kǒu diào yòng", hv: "TIẾP KHẨU ĐIỀU DỤNG", mean: "Gọi giao diện lập trình ứng dụng (API Call)", ex_zh: "客户端通过安全令牌对后端接口进行高并发调用。", ex_vi: "Phía client sử dụng token bảo mật để thực hiện các lượt gọi API đồng thời cao tới máy chủ phụ trợ." },
        { zh: "数据清洗", py: "shù jù qīng xǐ", hv: "SỐ CỨ DThanh TẨY", mean: "Làm sạch và tiền xử lý dữ liệu trước khi huấn luyện (Data Cleaning)", ex_zh: "数据清洗是构建高质量机器学习数据集的关键步骤。", ex_vi: "Làm sạch dữ liệu là bước then chốt để xây dựng tập dữ liệu máy học chất lượng cao." },
        { zh: "容灾备份", py: "róng zāi bèi fèn", hv: "DUNG TAI BỊ PHẦN", mean: "Sao lưu dự phòng và phục hồi sau thảm họa (Disaster Recovery)", ex_zh: "多区域异地容灾备份确保了金融级数据的绝对安全性。", ex_vi: "Cơ chế sao lưu phục hồi thảm họa đa khu vực địa lý đảm bảo tính an toàn tuyệt đối cho dữ liệu cấp tài chính." },
        { zh: "端到端加密", py: "duān dào duān jiā mì", hv: "ĐOAN ĐÁO ĐOAN GIA MẬT", mean: "Mã hóa đầu cuối bảo mật thông tin (End-to-End Encryption)", ex_zh: "即时通讯软件必须采用端到端加密保护用户隐私。", ex_vi: "Phần mềm nhắn tin tức thời bắt buộc phải áp dụng mã hóa đầu cuối để bảo vệ quyền riêng tư người dùng." }
      ],
      sentences: [
        { zh: "为了提高模型在长上下文下的推理速度，工程团队引入了键值缓存机制。", py: "wèi le tí gāo mó xíng zài cháng shàng xià wén xià de tuī lǐ sù dù ， gōng chéng tuán duì yǐn rù le jiàn zhí huǎn cún jī zhì 。", vi: "Nhằm tăng tốc độ suy luận của mô hình trong ngữ cảnh dài, đội ngũ kỹ thuật đã đưa vào cơ chế lưu trữ KV-Cache." },
        { zh: "微服务架构通过容器化编排实现了各功能模块的独立扩容与持续交付。", py: "wēi fú wù jià gòu tōng guò róng qì huà biān pái shí xiàn le gè gōng néng mó kuài de dú lì kuò róng yǔ chí xù jiāo fù 。", vi: "Kiến trúc microservices thông qua điều phối container hóa đã thực hiện việc mở rộng độc lập và chuyển giao liên tục cho từng phân hệ chức năng." }
      ],
      case_study: {
        title: "Kiến trúc triển khai Agent tự trị và RAG cục bộ",
        zh: "本项目采用了端侧私有化大模型与检索增强生成（RAG）相融合的技术路线。首先利用轻量级向量模型对海量中医药古籍文献进行多尺度分块切片并持久化嵌入。当终端发出查询指令时，向量检索引擎首先抓取Top-k关联片段，结合混合倒排索引完成二次重排，最后送入大模型完成结构化精准解答，既保障了私有数据的安全性，又有效遏制了大模型的幻觉现象。",
        vi: "Dự án này áp dụng lộ trình công nghệ kết hợp giữa mô hình cục bộ riêng tư tại máy trạm và công nghệ thế hệ tăng cường truy xuất (RAG). Trước hết dùng mô hình vector hóa nhẹ chia cắt khối đa tầng và nhúng dữ liệu cho lượng lớn tài liệu cổ tịch Đông y. Khi có truy vấn từ client, công cụ truy xuất vector trích xuất các phân đoạn tương quan cao nhất, kết hợp chỉ mục đảo ngược để tái xếp hạng, sau cùng đưa vào LLM để đưa ra câu trả lời chuẩn xác, vừa bảo vệ dữ liệu vừa khống chế ảo giác AI."
      }
    },
    legal: {
      id: "legal",
      icon: "⚖️",
      title: "Pháp Lý & Hợp Đồng (法律与合同)",
      subtitle: "Quyền sở hữu trí tuệ, điều khoản giải quyết tranh chấp, trọng tài",
      level: "HSK 5–9 (Legal & Regulatory)",
      vocab: [
        { zh: "知识产权", py: "zhī shi chǎn quán", hv: "TRI THỨC SẢN QUYỀN", mean: "Quyền sở hữu trí tuệ (IP - Intellectual Property)", ex_zh: "合同各方应严格尊重并保护开发过程中的知识产权归属。", ex_vi: "Các bên trong hợp đồng phải nghiêm túc tôn trọng và bảo vệ quyền sở hữu trí tuệ trong quá trình phát triển." },
        { zh: "仲裁管辖", py: "zhòng cái guǎn xiá", hv: "TRỌNG TÀI QUẢN HẠT", mean: "Thẩm quyền phán quyết của trọng tài thương mại", ex_zh: "任何因本协议引起的争议均应提交国际经济贸易仲裁委员会仲裁。", ex_vi: "Mọi tranh chấp phát sinh từ thỏa thuận này đều phải trình lên Ủy ban Trọng tài Kinh tế Thương mại Quốc tế để phán quyết." },
        { zh: "连带保证", py: "lián dài bǎo zhèng", hv: "LIÊN ĐỚI BẢO CHỨNG", mean: "Trách nhiệm bảo lãnh liên đới nghĩa vụ tài chính", ex_zh: "担保方在此承担不可撤销的连带保证清偿责任。", ex_vi: "Bên bảo lãnh tại đây gánh vác trách nhiệm bảo lãnh liên đới thanh toán không thể hủy ngang." },
        { zh: "免责事由", py: "miǎn zé shì yóu", hv: "MIỄN TRÁCH SỰ DO", mean: "Căn cứ hợp pháp để miễn trừ trách nhiệm pháp lý", ex_zh: "法律规定不可抗力事件属于法定的违约免责事由。", ex_vi: "Pháp luật quy định sự kiện bất khả kháng thuộc về căn cứ miễn trừ trách nhiệm vi phạm mang tính luật định." },
        { zh: "排他许可", py: "pái tā xǔ kě", hv: "BÀI THA HỨA KHẢ", mean: "Cấp phép độc quyền độc chiếm (Exclusive License)", ex_zh: "被许可人获得了该专利技术在亚太地区的排他许可使用权。", ex_vi: "Bên được cấp phép đã giành được quyền sử dụng độc quyền công nghệ sáng chế này tại khu vực Châu Á - Thái Bình Dương." },
        { zh: "保密协议", py: "bǎo mì xié yì", hv: "BẢO MẬT HIỆP NGHỊ", mean: "Thỏa thuận cam kết bảo mật thông tin (NDA)", ex_zh: "在正式商务洽谈前，双方需先行签署具有法律约束力的保密协议。", ex_vi: "Trước khi đàm phán thương mại chính thức, đôi bên cần ký trước một bản thỏa thuận bảo mật có giá trị ràng buộc pháp lý." }
      ],
      sentences: [
        { zh: "若任何一方违反本协议项下的保密义务，无过错方有权立即解除合同并请求全额赔偿。", py: "ruò rèn hé yī fāng wéi fǎn běn xié yì xiàng xià de bǎo mì yì wù ， wú guò cuò fāng yǒu quán lì jí jiě chú hé tong bìng qǐng qiú quán é péi cháng 。", vi: "Nếu bất kỳ bên nào vi phạm nghĩa vụ bảo mật theo thỏa thuận này, bên không có lỗi có quyền chấm dứt ngay hợp đồng và yêu cầu bồi thường toàn bộ thiệt hại." }
      ],
      case_study: {
        title: "Điều khoản bồi thường thiệt hại và chấm dứt hợp đồng",
        zh: "合同第十二条规定，违约金数额由双方在签订合同时预先约定。如违约造成的实际损失高于约定违约金，受损方有权请求仲裁机构或司法管辖法院根据实际损失予以追加增加。此外，一方发生重大违约导致合同目的无法实现时，另一方享有法定单方通知解除权。",
        vi: "Điều 12 hợp đồng quy định số tiền bồi thường vi phạm do hai bên thỏa thuận trước khi ký kết. Nếu tổn thất thực tế do vi phạm gây ra cao hơn mức thỏa thuận, bên bị thiệt hại có quyền yêu cầu cơ quan trọng tài hoặc tòa án có thẩm quyền tăng mức bồi thường theo thiệt hại thực tế. Ngoài ra khi một bên vi phạm nghiêm trọng khiến mục đích hợp đồng không thể đạt được, bên còn lại có quyền đơn phương thông báo chấm dứt hợp đồng theo luật định."
      }
    },
    tourism: {
      id: "tourism",
      icon: "✈️",
      title: "Du Lịch & Văn Hóa (旅游与文化)",
      subtitle: "Khách sạn, danh lam thắng cảnh, thủ tục xuất nhập cảnh & ẩm thực",
      level: "HSK 3–6 (Travel & Hospitality)",
      vocab: [
        { zh: "名胜古迹", py: "míng shèng gǔ jì", hv: "DANH THẮNG CỔ TÍCH", mean: "Di tích lịch sử và danh lam thắng cảnh nổi tiếng", ex_zh: "北京拥有故宫、天坛等享誉全球的名胜古迹。", ex_vi: "Bắc Kinh sở hữu những danh lam cổ tích nức tiếng toàn cầu như Cố Cung, Thiên Đàn." },
        { zh: "落地签证", py: "luò dì qiān zhèng", hv: "LẠC ĐỊA THIÊM CHỨNG", mean: "Thị thực làm tại cửa khẩu sân bay (Visa on arrival)", ex_zh: "持有外交护照的人员可直接申请办理落地签证手续。", ex_vi: "Người mang hộ chiếu ngoại giao có thể trực tiếp làm thủ tục xin visa tại cửa khẩu." },
        { zh: "退税服务", py: "tuì shuì fú wù", hv: "THOÁI THUẾ PHỤC VỤ", mean: "Dịch vụ hoàn thuế giá trị gia tăng cho du khách quốc tế (Tax refund)", ex_zh: "外国游客在离境机场凭借购物发票可享受退税服务。", ex_vi: "Khách du lịch quốc tế tại sân bay xuất cảnh căn cứ vào hóa đơn mua sắm có thể nhận dịch vụ hoàn thuế." },
        { zh: "风土人情", py: "fēng tǔ rén qíng", hv: "PHONG THỔ NHÂN TÌNH", mean: "Phong tục tập quán và nét văn hóa địa phương đặc thù", ex_zh: "深入古城才能真正体验原汁原味的风土人情。", ex_vi: "Đi sâu vào lòng cổ trấn mới thực sự trải nghiệm được phong thổ nhân tình nguyên bản." },
        { zh: "套房预订", py: "tào fáng yù dìng", hv: "SÁO PHÒNG DỰ ĐỊNH", mean: "Đặt trước phòng căn hộ / suite khách sạn cao cấp", ex_zh: "客人在节假日旅游旺季前需至少提前两周完成套房预订。", ex_vi: "Khách hàng cần hoàn tất đặt phòng suite trước ít nhất hai tuần vào mùa cao điểm du lịch lễ tết." }
      ],
      sentences: [
        { zh: "导游先生生动幽默地为我们讲解了兵马俑一号坑的考古发掘历史。", py: "dǎo yóu xiān sheng shēng dòng yōu mò de wèi wǒ men jiǎng jiě le bīng mǎ yǒng yī hào kēng de kǎo gǔ fā jué lì shǐ 。", vi: "Anh hướng dẫn viên đã thuyết minh sinh động và dí dỏm cho chúng tôi nghe về lịch sử khai quật khảo cổ hố số 1 Binh Mã Dũng." }
      ],
      case_study: {
        title: "Trải nghiệm văn hóa du lịch Tây An một ngày (西安一日行)",
        zh: "从华清宫的温泉汤池到骊山脚下的烽火戏诸侯，历史画卷徐徐展开。午后转赴秦始皇兵马俑博物馆，千人千面的军阵陶俑令全球旅行者屏息赞叹。夜幕降临，漫步大唐不夜城，华灯璀璨，诗词飞花令互动让人仿佛梦回盛唐。品尝地道的羊肉泡馍与肉夹馍，领略古丝绸之路起点的千年文脉。",
        vi: "Từ các hồ suối nước nóng tại Hoa Thanh Cung đến điển tích đốt lửa trêu chư hầu dưới chân núi Ly Sơn, bức tranh lịch sử dần mở ra. Buổi chiều chuyển sang Bảo tàng Binh Mã Dũng Tần Thủy Hoàng, đội hình tượng gốm nghìn người nghìn vẻ khiến du khách toàn cầu trầm trồ thán phục. Màn đêm buông xuống, dạo bước giữa Đại Đường Bất Dạ Thành, đèn hoa rực rỡ, thi đố thơ ca khiến người ta như ngỡ ngàng quay về thời Thịnh Đường. Thưởng thức mì bánh canh cừu và bánh kẹp thịt đậm đà hương vị, cảm nhận nghìn năm văn hóa nơi khởi đầu con đường tơ lụa cổ đại."
      }
    }
  };

  window.SPECIALIZED_TRACKS = SPECIALIZED_COURSES;
  console.log("✅ SPECIALIZED_TRACKS Module loaded: 5 specialized professional domains initialized.");
})();
