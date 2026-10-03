import json, os, random

data_dir = r"D:\Build\hsk-write-grammar\data"

# Curated 病句 (Grammar error correction) typical of HSK 4-6
bingju_data = [
    {
        "id": "bj-01",
        "level": 4,
        "type": "把字句语序错误",
        "wrong": "我把作业没做完。",
        "correct": "我没把作业做完。",
        "explanation": "Phó từ phủ định '没/不' hoặc động từ năng nguyện '想/要/能' phải đứng TRƯỚC chữ '把', không được đặt sau.",
        "options": ["我", "把作业", "没做完", "。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-02",
        "level": 4,
        "type": "动量补语位置错误",
        "wrong": "他看了一次那个电影。",
        "correct": "他看了那个电影一次。/ 他看了一次那部电影。",
        "explanation": "Bổ ngữ động lượng '一次' khi tân ngữ là đại từ chỉ định + danh từ thì thường đặt sau tân ngữ hoặc đổi lượng từ.",
        "options": ["他", "看了", "一次", "那个电影。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-03",
        "level": 4,
        "type": "比字句否定错误",
        "wrong": "他比我不高。",
        "correct": "他不比我高。/ 他没有我高。",
        "explanation": "Phủ định của câu so sánh '比' không dùng '比不+tính từ' mà phải đưa phó từ '不' lên trước chữ '比' (人不比我高), hoặc dùng câu '没有'.",
        "options": ["他", "比我", "不高", "。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-04",
        "level": 5,
        "type": "被字句与结果补语",
        "wrong": "钱包被偷了走。",
        "correct": "钱包被偷走了。",
        "explanation": "Bổ ngữ kết quả/xu hướng gắn liền trực tiếp ngay sau động từ ('偷走'), trợ từ động thái '了' đứng sau cụm động-bổ ('偷走了').",
        "options": ["钱包", "被", "偷了走", "。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-05",
        "level": 5,
        "type": "关联词语搭配不当",
        "wrong": "尽管下大雨，所以他还是按时到了。",
        "correct": "尽管下大雨，但他还是按时到了。",
        "explanation": "Cặp liên từ nhượng bộ '尽管' thường đi kèm với '但是/但/还是', không đi với liên từ nguyên nhân kết quả '所以'.",
        "options": ["尽管下大雨", "，", "所以", "他还是按时到了。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-06",
        "level": 5,
        "type": "成分残缺（缺主语）",
        "wrong": "通过这次讨论，使我们认识到了团队的重要性。",
        "correct": "通过这次讨论，我们认识到了团队的重要性。",
        "explanation": "Dùng đồng thời '通过……' và '使……' làm câu bị mất chủ ngữ. Cần bỏ '使' để '我们' làm chủ ngữ.",
        "options": ["通过这次讨论", "，", "使我们", "认识到了团队的重要性。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-07",
        "level": 6,
        "type": "语意重复赘余",
        "wrong": "他的病情正在逐渐慢慢好转。",
        "correct": "他的病情正在逐渐好转。/ 他的病情正在慢慢好转。",
        "explanation": "'逐渐' (dần dần) và '慢慢' (từ từ) đồng nghĩa, đặt cạnh nhau gây lỗi trùng lặp ngữ nghĩa (语意重复).",
        "options": ["他的病情", "正在", "逐渐慢慢", "好转。"],
        "error_segment_index": 2
    },
    {
        "id": "bj-08",
        "level": 6,
        "type": "词义混淆（致使/导致）",
        "wrong": "这个好消息导致大家非常兴奋。",
        "correct": "这个好消息使大家非常兴奋。/ 这个好消息让大家非常兴奋。",
        "explanation": "'导致' (dẫn đến) luôn dùng cho kết quả tiêu cực/xấu, không dùng cho kết quả tích cực như '非常兴奋'.",
        "options": ["这个好消息", "导致", "大家", "非常兴奋。"],
        "error_segment_index": 1
    }
]

# Curated Word Order exercises for HSK 4-6
word_order_data = [
    {
        "id": "wo-01",
        "level": 4,
        "target": "请你把桌子上的书整理一下。",
        "tokens": ["请你", "把", "桌子上的书", "整理", "一下"],
        "grammar_point": "把字句 (Câu chữ 把)",
        "meaning_vn": "Xin bạn hãy thu dọn sách trên bàn một chút."
    },
    {
        "id": "wo-02",
        "level": 4,
        "target": "妹妹的中文说得比我流利得多。",
        "tokens": ["妹妹的中文", "说得", "比我", "流利得多"],
        "grammar_point": "比字句 + 程度补语 (So sánh hơn + bổ ngữ mức độ)",
        "meaning_vn": "Tiếng Trung của em gái nói lưu loát hơn tôi rất nhiều."
    },
    {
        "id": "wo-03",
        "level": 4,
        "target": "时间不早了，我得回家了。",
        "tokens": ["时间", "不早了", "，", "我得", "回家了"],
        "grammar_point": "能愿动词 得 (děi - phải)",
        "meaning_vn": "Thời gian không còn sớm nữa, tôi phải về nhà rồi."
    },
    {
        "id": "wo-04",
        "level": 5,
        "target": "这个方案得到了专家们的一致认可。",
        "tokens": ["这个方案", "得到了", "专家们的", "一致认可"],
        "grammar_point": "动词 + 宾语搭配 (得到……认可)",
        "meaning_vn": "Phương án này đã nhận được sự đồng thuận nhất trí của các chuyên gia."
    },
    {
        "id": "wo-05",
        "level": 5,
        "target": "与其在这里抱怨，不如赶紧行动起来。",
        "tokens": ["与其", "在这里抱怨", "，", "不如", "赶紧行动起来"],
        "grammar_point": "选择复句 (与其……不如……)",
        "meaning_vn": "Thà rằng nhanh chóng hành động, còn hơn ngồi đây than phiền."
    },
    {
        "id": "wo-06",
        "level": 6,
        "target": "面对突如其来的变故，他显得格外镇定自若。",
        "tokens": ["面对", "突如其来的变故", "，", "他显得", "格外镇定自若"],
        "grammar_point": "成语与状态描写 (格外的用法)",
        "meaning_vn": "Đối mặt với biến cố bất ngờ ập đến, anh ấy tỏ ra đặc biệt bình tĩnh tự chủ."
    },
    {
        "id": "wo-07",
        "level": 6,
        "target": "这项研究成果为医学领域的发展做出了巨大贡献。",
        "tokens": ["这项研究成果", "为医学领域的", "发展", "做出了", "巨大贡献"],
        "grammar_point": "为……做出贡献 (Đóng góp to lớn cho...)",
        "meaning_vn": "Thành quả nghiên cứu này đã đóng góp to lớn cho sự phát triển của lĩnh vực y học."
    }
]

# Curated Writing Prompts (HSK 4 & 5 topics)
writing_prompts = [
    {
        "id": "wp-01",
        "level": 4,
        "title": "Hoàn thành đoạn văn theo 5 từ gợi ý (HSK 4)",
        "words": ["坚持", "健康", "习惯", "锻炼", "效果"],
        "guideline": "Viết một đoạn văn ngắn khoảng 40-60 chữ liên kết hợp lý 5 từ trên.",
        "sample": "为了保持身体健康，我们应该养成每天锻炼的好习惯。只要能长期坚持下去，就一定能看到明显的健康效果。"
    },
    {
        "id": "wp-02",
        "level": 5,
        "title": "Viết đoạn văn ngắn 80 chữ theo từ khóa (HSK 5)",
        "words": ["压力", "沟通", "理解", "解决", "态度"],
        "guideline": "Viết đoạn văn mạch lạc khoảng 80 chữ bàn về cách xử lý căng thẳng trong công việc/cuộc sống.",
        "sample": "在面对工作和生活中的压力时，积极的态度尤为重要。遇到矛盾与困难，及时与同事或家人沟通交流，增进彼此的理解，是解决问题的有效途径。良好心态才能带来更好的效率。"
    }
]

with open(os.path.join(data_dir, "bingju.json"), "w", encoding="utf-8") as f:
    json.dump(bingju_data, f, ensure_ascii=False, indent=2)

with open(os.path.join(data_dir, "word_order.json"), "w", encoding="utf-8") as f:
    json.dump(word_order_data, f, ensure_ascii=False, indent=2)

with open(os.path.join(data_dir, "writing_prompts.json"), "w", encoding="utf-8") as f:
    json.dump(writing_prompts, f, ensure_ascii=False, indent=2)

print("Generated exercises successfully!")
