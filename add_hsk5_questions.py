import json, os

new_questions = [
    {
        "id": "wo-hsk5-01",
        "level": 5,
        "target": "请您关闭所有的电子设备。",
        "tokens": ["所有的", "请您", "电子设备", "关闭"],
        "grammar_point": "祈使句 + 定语修饰 (所有的电子设备)",
        "meaning_vn": "Xin quý khách tắt tất cả các thiết bị điện tử."
    },
    {
        "id": "wo-hsk5-02",
        "level": 5,
        "target": "他为这场演讲做了充分准备。",
        "tokens": ["充分准备", "他", "为这场演讲", "做了"],
        "grammar_point": "介词 为 + 动宾搭配 (做准备)",
        "meaning_vn": "Anh ấy đã chuẩn bị chu đáo cho bài diễn thuyết này."
    },
    {
        "id": "wo-hsk5-03",
        "level": 5,
        "target": "他们之间似乎存在一些误会。",
        "tokens": ["似乎存在", "他们之间", "一些", "误会"],
        "grammar_point": "存现句 + 状语 似乎",
        "meaning_vn": "Giữa họ dường như tồn tại một số hiểu lầm."
    },
    {
        "id": "wo-hsk5-04",
        "level": 5,
        "target": "这家房地产公司正面临破产。",
        "tokens": ["这家", "正面临", "房地产公司", "破产"],
        "grammar_point": "进行时态 + 动宾短语 (面临破产)",
        "meaning_vn": "Công ty bất động sản này đang đối mặt với phá sản."
    },
    {
        "id": "wo-hsk5-05",
        "level": 5,
        "target": "这条围巾是丝绸的。",
        "tokens": ["这条围巾", "的", "丝绸", "是"],
        "grammar_point": "“是……的”结构 (Biểu thị chất liệu)",
        "meaning_vn": "Chiếc khăn quàng này là bằng lụa."
    },
    {
        "id": "wo-hsk5-06",
        "level": 5,
        "target": "他再次打破了世界纪录。",
        "tokens": ["再次", "他", "世界纪录", "打破了"],
        "grammar_point": "副词 再次 + 动宾搭配 (打破纪录)",
        "meaning_vn": "Anh ấy một lần nữa phá vỡ kỷ lục thế giới."
    },
    {
        "id": "wo-hsk5-07",
        "level": 5,
        "target": "孙大夫对明天的手术很有把握。",
        "tokens": ["很有把握", "孙大夫", "对明天的手术"],
        "grammar_point": "介词 对……很有把握",
        "meaning_vn": "Bác sĩ Tôn rất nắm chắc về cuộc phẫu thuật ngày mai."
    },
    {
        "id": "wo-hsk5-08",
        "level": 5,
        "target": "麻烦你替我签收一下包裹。",
        "tokens": ["替我", "麻烦你", "包裹", "签收一下"],
        "grammar_point": "客气祈使句 + 介词 替",
        "meaning_vn": "Phiền bạn ký nhận gói hàng giúp tôi một chút."
    },
    {
        "id": "wo-hsk5-09",
        "level": 5,
        "target": "他还在犹豫要不要辞职。",
        "tokens": ["要不要辞职", "他", "还在", "犹豫"],
        "grammar_point": "正反疑问从句充当宾语",
        "meaning_vn": "Anh ấy vẫn đang do dự có nên từ chức hay không."
    },
    {
        "id": "wo-hsk5-10",
        "level": 5,
        "target": "她经常利用业余时间写作。",
        "tokens": ["利用", "她经常", "业余时间", "写作"],
        "grammar_point": "连动句 (利用……做……)",
        "meaning_vn": "Cô ấy thường tận dụng thời gian rảnh rỗi để viết lách."
    },
    {
        "id": "wo-hsk5-11",
        "level": 5,
        "target": "玉米的营养价值非常高。",
        "tokens": ["非常高", "玉米的", "营养价值"],
        "grammar_point": "主谓谓语句 (A的B + 形容词)",
        "meaning_vn": "Giá trị dinh dưỡng của ngô rất cao."
    },
    {
        "id": "wo-hsk5-12",
        "level": 5,
        "target": "目前已知的昆虫种类有多少种？",
        "tokens": ["有多少种", "目前已知的", "昆虫种类"],
        "grammar_point": "疑问代词 多少 + 存现谓语",
        "meaning_vn": "Hiện tại số loài côn trùng đã biết có bao nhiêu loại?"
    },
    {
        "id": "wo-hsk5-13",
        "level": 5,
        "target": "这些研究成果值得我们参考。",
        "tokens": ["我们参考", "这些研究成果", "值得"],
        "grammar_point": "兼语句 (值得……)",
        "meaning_vn": "Những thành quả nghiên cứu này xứng đáng để chúng ta tham khảo."
    },
    {
        "id": "wo-hsk5-14",
        "level": 5,
        "target": "我的梦想是经营一家酒吧。",
        "tokens": ["经营一家酒吧", "我的梦想", "是"],
        "grammar_point": "判断动词 是 + 动宾短语",
        "meaning_vn": "Ước mơ của tôi là kinh doanh một quán bar."
    },
    {
        "id": "wo-hsk5-15",
        "level": 5,
        "target": "全部的损失都由保险公司赔偿。",
        "tokens": ["保险公司赔偿", "全部的损失", "都由"],
        "grammar_point": "介词 由……承担/赔偿",
        "meaning_vn": "Toàn bộ tổn thất đều do công ty bảo hiểm bồi thường."
    },
    {
        "id": "wo-hsk5-16",
        "level": 5,
        "target": "那趟航班因天气原因被临时取消了。",
        "tokens": ["被临时取消了", "因天气原因", "那趟航班"],
        "grammar_point": "被字句 + 原因状语",
        "meaning_vn": "Chuyến bay đó do thời tiết nên đã bị hủy tạm thời."
    },
    {
        "id": "wo-hsk5-17",
        "level": 5,
        "target": "你本科学过这门课程吗？",
        "tokens": ["这门课程", "你本科", "学过", "吗"],
        "grammar_point": "动态助词 过 (Biểu thị trải nghiệm quá khứ)",
        "meaning_vn": "Thời đại học bạn đã từng học môn học này chưa?"
    },
    {
        "id": "wo-hsk5-18",
        "level": 5,
        "target": "班主任再三强调要注意安全。",
        "tokens": ["要注意安全", "班主任", "再三强调"],
        "grammar_point": "副词 再三 (Nhấn mạnh lặp đi lặp lại)",
        "meaning_vn": "Giáo viên chủ nhiệm nhấn mạnh nhiều lần cần chú ý an toàn."
    },
    {
        "id": "wo-hsk5-19",
        "level": 5,
        "target": "这幅画儿反映了当地人的生活。",
        "tokens": ["当地人的生活", "这幅画儿", "反映了"],
        "grammar_point": "量词 幅 + 动宾搭配 (反映生活)",
        "meaning_vn": "Bức tranh này phản ánh đời sống của người dân địa phương."
    },
    {
        "id": "wo-hsk5-20",
        "level": 5,
        "target": "那间屋里摆满了花儿。",
        "tokens": ["花儿", "摆满了", "那间屋里"],
        "grammar_point": "存现句 + 结果补语 满",
        "meaning_vn": "Căn phòng đó bày đầy hoa."
    },
    {
        "id": "wo-hsk5-21",
        "level": 5,
        "target": "不及时还款将影响个人信用。",
        "tokens": ["个人信用", "将影响", "不及时还款"],
        "grammar_point": "动名词短语作主语 + 副词 将",
        "meaning_vn": "Không trả nợ đúng hạn sẽ ảnh hưởng đến tín dụng cá nhân."
    },
    {
        "id": "wo-hsk5-22",
        "level": 5,
        "target": "这座建筑的外形很像古代的酒杯。",
        "tokens": ["古代的酒杯", "很像", "这座建筑的外形"],
        "grammar_point": "动词 像 (So sánh hình dáng tương đồng)",
        "meaning_vn": "Ngoại hình tòa kiến trúc này rất giống chén rượu thời cổ đại."
    },
    {
        "id": "wo-hsk5-23",
        "level": 5,
        "target": "我第一次挑战这么高难度的手术。",
        "tokens": ["挑战", "这么高难度的手术", "我第一次"],
        "grammar_point": "状语 + 谓语动词 (挑战)",
        "meaning_vn": "Lần đầu tiên tôi thử thách một ca phẫu thuật độ khó cao thế này."
    },
    {
        "id": "wo-hsk5-24",
        "level": 5,
        "target": "太湖地区是中国重要的丝绸产地。",
        "tokens": ["丝绸产地", "中国重要的", "太湖地区", "是"],
        "grammar_point": "定语修饰名词 + 判断动词 是",
        "meaning_vn": "Vùng Thái Hồ là vùng sản xuất tơ lụa trọng điểm của Trung Quốc."
    }
]

fpath = r'D:\Build\hsk-write-grammar\data\word_order.json'
with open(fpath, 'r', encoding='utf-8') as f:
    existing = json.load(f)

existing_ids = {x['id'] for x in existing}
added = 0
for q in new_questions:
    if q['id'] not in existing_ids:
        existing.append(q)
        added += 1

with open(fpath, 'w', encoding='utf-8') as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)

print(f'Successfully added {added} questions! Total word order questions: {len(existing)}')
