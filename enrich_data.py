import os, urllib.request, urllib.parse, zipfile, io, json, re

data_dir = r"D:\Build\hsk-write-grammar\data"
os.makedirs(data_dir, exist_ok=True)

# 1. Download Unihan for kVietnamese
print("Step 1: Downloading Unihan for Sino-Vietnamese readings...")
url_unihan = "https://www.unicode.org/Public/UNIDATA/Unihan.zip"
req = urllib.request.Request(url_unihan, headers={"User-Agent": "Mozilla/5.0"})
hanviet_map = {}
with urllib.request.urlopen(req) as resp:
    z = zipfile.ZipFile(io.BytesIO(resp.read()))
    with z.open("Unihan_Readings.txt") as f:
        for raw in f:
            line = raw.decode("utf-8").strip()
            if "kVietnamese" in line and not line.startswith("#"):
                parts = line.split("\t")
                if len(parts) >= 3:
                    cp = int(parts[0][2:], 16)
                    char = chr(cp)
                    hanviet_map[char] = parts[2]
print(f"Parsed {len(hanviet_map)} Hán-Việt readings.")

# 2. Download CVDICT for Vietnamese meanings
print("Step 2: Downloading CVDICT for Vietnamese definitions...")
url_cvdict = "https://raw.githubusercontent.com/ph0ngp/CVDICT/main/CVDICT.u8"
req = urllib.request.Request(url_cvdict, headers={"User-Agent": "Mozilla/5.0"})
cvdict_map = {}
with urllib.request.urlopen(req) as resp:
    for raw in resp:
        line = raw.decode("utf-8").strip()
        if not line or line.startswith("#"):
            continue
        m = re.match(r"^\S+\s+(\S+)\s+\[([^\]]+)\]\s+/(.+)/$", line)
        if m:
            simp, py, mean = m.group(1), m.group(2), m.group(3)
            if simp not in cvdict_map:
                cvdict_map[simp] = {"pinyin": py, "meaning": mean.replace("/", "; ")}
print(f"Parsed {len(cvdict_map)} CVDICT entries.")

# Load handwriting
with open(os.path.join(data_dir, "handwriting_456.json"), encoding="utf-8") as f:
    hw_raw = json.load(f)

# Load grammar
with open(os.path.join(data_dir, "grammar_456.json"), encoding="utf-8") as f:
    grammar_raw = json.load(f)

AUDIO_BASE = "https://raw.githubusercontent.com/krmanik/HSK-3.0/main/New%20HSK%20(2025)/Audio/"

# Enrich handwriting
hw_enriched = {}
for lvl, chars in hw_raw.items():
    hw_enriched[lvl] = []
    for c in chars:
        hv = hanviet_map.get(c, "")
        dict_info = cvdict_map.get(c, {})
        py = dict_info.get("pinyin", "")
        meaning = dict_info.get("meaning", "")
        hw_enriched[lvl].append({
            "char": c,
            "hanviet": hv,
            "pinyin": py,
            "meaning": meaning,
            "audio": f"{AUDIO_BASE}cmn-{urllib.parse.quote(c)}.mp3"
        })

grammar_term_vn = {
    "词类": "Từ loại",
    "句类": "Loại câu",
    "句式": "Mẫu câu đặc biệt",
    "动作的态": "Trạng thái của động tác",
    "复句": "Câu phức",
    "语素": "Hình vị",
    "动词": "Động từ",
    "名词": "Danh từ",
    "形容词": "Tính từ",
    "副词": "Phó từ",
    "代词": "Đại từ",
    "介词": "Giới từ",
    "连词": "Liên từ",
    "助词": "Trợ từ",
    "量词": "Lượng từ",
    "能愿动词": "Động từ năng nguyện",
    "趋向补语": "Bổ ngữ xu hướng",
    "结果补语": "Bổ ngữ kết quả",
    "状态补语": "Bổ ngữ trạng thái",
    "程度补语": "Bổ ngữ mức độ",
    "可能补语": "Bổ ngữ khả năng",
    "时量补语": "Bổ ngữ thời lượng",
    "数量补语": "Bổ ngữ số lượng",
    "把字句": "Câu chữ 把",
    "被字句": "Câu chữ 被 (bị động)",
    "比字句": "Câu chữ 比 (so sánh)",
    "连动句": "Câu liên động",
    "兼语句": "Câu kiêm ngữ",
    "存现句": "Câu tồn hiện"
}

grammar_enriched = []
for g in grammar_raw:
    cat_vn = grammar_term_vn.get(g.get("cat", ""), g.get("cat", ""))
    sub_vn = grammar_term_vn.get(g.get("sub", ""), g.get("sub", ""))
    grammar_enriched.append({
        "id": g.get("id"),
        "level": g.get("level"),
        "cat_zh": g.get("cat"),
        "cat_vn": cat_vn,
        "sub_zh": g.get("sub"),
        "sub_vn": sub_vn,
        "label": g.get("label"),
        "label_full": g.get("label_full"),
        "pattern": g.get("pattern"),
        "examples": g.get("examples", [])
    })

with open(os.path.join(data_dir, "handwriting_enriched.json"), "w", encoding="utf-8") as f:
    json.dump(hw_enriched, f, ensure_ascii=False, indent=2)

with open(os.path.join(data_dir, "grammar_enriched.json"), "w", encoding="utf-8") as f:
    json.dump(grammar_enriched, f, ensure_ascii=False, indent=2)

print("ENRICHMENT COMPLETE!")
print("Handwriting sample:", hw_enriched["HSK4"][0])
print("Grammar sample:", grammar_enriched[0])
