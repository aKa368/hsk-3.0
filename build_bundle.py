import json, os

data_dir = r"D:\Build\hsk-write-grammar\data"
out_file = r"D:\Build\hsk-write-grammar\data.js"

with open(os.path.join(data_dir, "handwriting_enriched.json"), encoding="utf-8") as f:
    handwriting = json.load(f)

with open(os.path.join(data_dir, "grammar_enriched.json"), encoding="utf-8") as f:
    grammar = json.load(f)

with open(os.path.join(data_dir, "word_order.json"), encoding="utf-8") as f:
    word_order = json.load(f)

with open(os.path.join(data_dir, "bingju.json"), encoding="utf-8") as f:
    bingju = json.load(f)

with open(os.path.join(data_dir, "writing_prompts.json"), encoding="utf-8") as f:
    writing_prompts = json.load(f)

bundle = {
    "handwriting": handwriting,
    "grammar": grammar,
    "word_order": word_order,
    "bingju": bingju,
    "writing_prompts": writing_prompts
}

with open(out_file, "w", encoding="utf-8") as f:
    f.write("window.HSK_DATA = " + json.dumps(bundle, ensure_ascii=False) + ";\n")

print(f"Data bundled successfully into {out_file} (size: {os.path.getsize(out_file)/1024:.1f} KB)")
