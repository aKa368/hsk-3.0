import urllib.request, json, time, os

def get_session_token():
    url = "https://content.lazidi.vn/api/v1/session"
    req = urllib.request.Request(url, data=b"{}", headers={
        "Content-Type": "application/json", "User-Agent": "Mozilla/5.0",
        "Origin": "https://app.lazidi.vn", "Referer": "https://app.lazidi.vn/"
    })
    for attempt in range(12):
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                return json.loads(resp.read().decode())["token"]
        except Exception as e:
            wait = min(60, 5 * (attempt + 1))
            print(f"[{time.strftime('%X')}] Session token notice: {e}. Waiting {wait}s (attempt {attempt+1}/12)...")
            time.sleep(wait)
    raise RuntimeError("Failed to acquire session token after 12 attempts.")

def fetch_deck_batch(level, offset, tok):
    payload = json.dumps({
        "lang": "zh", "safe": True,
        "filters": {"level": [str(level)]},
        "seed": 0, "from": offset, "n": 4
    }).encode('utf-8')
    req = urllib.request.Request(
        "https://content.lazidi.vn/api/v1/deck",
        data=payload,
        headers={
            "Content-Type": "application/json",
            "X-Lazidi-Token": tok,
            "User-Agent": "Mozilla/5.0",
            "Origin": "https://app.lazidi.vn",
            "Referer": "https://app.lazidi.vn/"
        }
    )
    with urllib.request.urlopen(req, timeout=8) as resp:
        return json.loads(resp.read().decode())

def save_data(images, laz_entries, img_path, laz_data_path):
    # Save images
    with open(img_path, "w", encoding="utf-8") as f:
        json.dump(images, f, ensure_ascii=False, indent=2)

    js_img = "/* BẢN ĐỒ ÁNH XẠ ẢNH MINH HỌA WEBP CHUẨN CỦA LAZIDI CHO HSK */\nwindow.LAZIDI_IMAGES = " + json.dumps(images, ensure_ascii=False) + ";\n"
    with open(r"D:\Build\hsk-write-grammar\lazidi_images.js", "w", encoding="utf-8") as f:
        f.write(js_img)

    # Save entries
    js_ent = "/* DỮ LIỆU CHIẾT TỰ, MẸO NHỚ & CHỮ DỄ NHẦM THU THẬP TỪ LAZIDI */\nwindow.LAZIDI_ENTRIES = " + json.dumps(laz_entries, ensure_ascii=False) + ";\n"
    with open(laz_data_path, "w", encoding="utf-8") as f:
        f.write(js_ent)
    print(f"[{time.strftime('%X')}] Persisted: {len(images)} images, {len(laz_entries)} etymology entries to disk.")

def main():
    img_path = r"D:\Build\hsk-write-grammar\lazidi_images.json"
    with open(img_path, "r", encoding="utf-8") as f:
        images = json.load(f)

    laz_data_path = r"D:\Build\hsk-write-grammar\lazidi_data.js"
    with open(laz_data_path, "r", encoding="utf-8") as f:
        txt = f.read()
    prefix = "/* DỮ LIỆU CHIẾT TỰ, MẸO NHỚ & CHỮ DỄ NHẦM THU THẬP TỪ LAZIDI */\nwindow.LAZIDI_ENTRIES = "
    laz_entries = json.loads(txt[len(prefix):-2])

    token = get_session_token()
    print(f"[{time.strftime('%X')}] Token acquired. Starting deep crawl from HSK 4 onwards...")

    levels = [
        ("4", 990),
        ("5", 1580),
        ("6", 1778),
        ("7-9", 3000)
    ]

    for lvl, total in levels:
        print(f"[{time.strftime('%X')}] === Crawling HSK {lvl} (0 to {total}) ===")
        for pos in range(0, total, 4):
            success = False
            for retry in range(5):
                try:
                    res = fetch_deck_batch(lvl, pos, token)
                    for c in res.get("cards", []):
                        entry = c.get("entry")
                        if entry and entry.get("word"):
                            w = entry["word"]
                            img = entry.get("image")
                            if img:
                                images[w] = img.replace("m/", "")

                            char_details = entry.get("characterDetails", [{}])
                            lookalikes = []
                            for cd in char_details:
                                for lk in cd.get("lookalikes", []):
                                    lookalikes.append({
                                        "char": lk.get("char"),
                                        "reading": lk.get("reading"),
                                        "gloss": lk.get("glossVi"),
                                        "distinguish": lk.get("distinguishVi")
                                    })
                            components = [f"{comp.get('char')} ({comp.get('meaning')})" for comp in entry.get("components", [])]
                            laz_entry = {
                                "mnemonic": entry.get("mnemonic"),
                                "etymology": entry.get("etymology"),
                                "components": components if components else None,
                                "lookalikes": lookalikes if lookalikes else None
                            }
                            laz_entry = {k: v for k, v in laz_entry.items() if v}
                            if laz_entry:
                                laz_entries[w] = laz_entry
                    success = True
                    break
                except Exception as e:
                    sleep_time = (retry + 1) * 3
                    print(f"[{time.strftime('%X')}] Notice at lvl {lvl} pos {pos}: {e}. Retrying in {sleep_time}s...")
                    time.sleep(sleep_time)
                    try:
                        token = get_session_token()
                    except:
                        pass
            time.sleep(0.15)

            # Auto-save every 40 chunks (~160 cards)
            if (pos // 4) % 40 == 0:
                save_data(images, laz_entries, img_path, laz_data_path)

        # Save at end of each level
        save_data(images, laz_entries, img_path, laz_data_path)
        print(f"[{time.strftime('%X')}] Completed HSK {lvl}! Total images: {len(images)}")

    print(f"[{time.strftime('%X')}] ALL LEVELS FINISHED! Total images: {len(images)}")

if __name__ == "__main__":
    main()
