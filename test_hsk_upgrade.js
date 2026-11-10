/**
 * HSK 3.0 — BỘ KIỂM THỬ NÂNG CẤP HSK v1.3.1
 * Kiểm tra tích hợp:
 * 1) Typography Heti CJK
 * 2) Pinyin-Pro Smart Search
 * 3) Chaizi (Chiết tự) Data & Lookup
 * 4) Giao diện & Script Integration
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

let passedTests = 0;
let failedTests = 0;

function check(desc, fn) {
  try {
    fn();
    console.log(`  ✓ PASS: ${desc}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${desc}`);
    console.error(`    -> Lỗi: ${err.message}`);
    failedTests++;
  }
}

console.log('================================================================');
console.log('  HSK 3.0 — BỘ KIỂM THỬ NÂNG CẤP v1.3.1 (HETI, PINYIN-PRO, CHAIZI)');
console.log('================================================================\n');

// -------------------------------------------------------------
// SUITE 1: Kiểm tra Typography tiếng Trung Heti (UI/UX)
// -------------------------------------------------------------
console.log('[SUITE 1] Kiểm tra Typography tiếng Trung Heti:');

const hetiPath = path.join(__dirname, 'heti.min.css');
check('File heti.min.css tồn tại và có dung lượng hợp lệ', () => {
  assert(fs.existsSync(hetiPath), 'heti.min.css không tồn tại');
  const stat = fs.statSync(hetiPath);
  assert(stat.size > 5000, `Dung lượng heti.min.css quá nhỏ: ${stat.size} bytes`);
});

const hetiContent = fs.readFileSync(hetiPath, 'utf8');
check('heti.min.css chứa định nghĩa class .heti và quy tắc font-family CJK', () => {
  assert(hetiContent.includes('.heti'), 'Thiếu class .heti trong heti.min.css');
  assert(
    hetiContent.includes('Heti Hei') || hetiContent.includes('PingFang') || hetiContent.includes('Microsoft YaHei'),
    'Thiếu định nghĩa font stack tiếng Trung CJK trong heti.min.css'
  );
});

check('heti.min.css chứa quy tắc điều chỉnh khoảng cách dấu câu CJK và chữ Latin/số', () => {
  assert(
    hetiContent.includes('letter-spacing') || hetiContent.includes('font-feature-settings') || hetiContent.includes('heti-'),
    'Thiếu các quy tắc căn chỉnh khoảng cách CJK'
  );
});

// -------------------------------------------------------------
// SUITE 2: Kiểm tra Thư viện Pinyin-Pro cục bộ
// -------------------------------------------------------------
console.log('\n[SUITE 2] Kiểm tra Thư viện Pinyin-Pro cục bộ:');

const pinyinProPath = path.join(__dirname, 'pinyin-pro.min.js');
check('File pinyin-pro.min.js tồn tại và có dung lượng hợp lệ', () => {
  assert(fs.existsSync(pinyinProPath), 'pinyin-pro.min.js không tồn tại');
  const stat = fs.statSync(pinyinProPath);
  assert(stat.size > 100000, `Dung lượng pinyin-pro.min.js quá nhỏ: ${stat.size} bytes`);
});

let pinyinPro;
check('pinyin-pro.min.js nạp được vào Node.js và export các API chuẩn', () => {
  pinyinPro = require(pinyinProPath);
  assert(typeof pinyinPro.pinyin === 'function', 'pinyinPro.pinyin không phải là hàm');
  assert(typeof pinyinPro.match === 'function', 'pinyinPro.match không phải là hàm');
});

check('pinyin-pro thực hiện so khớp Pinyin viết tắt/thông minh chính xác (nh -> 你好, bj -> 北京)', () => {
  const matchNh = pinyinPro.match('你好', 'nh');
  assert(Array.isArray(matchNh) && matchNh.length === 2, `So khớp 'nh' với '你好' thất bại: ${JSON.stringify(matchNh)}`);

  const matchBj = pinyinPro.match('北京', 'bj');
  assert(Array.isArray(matchBj) && matchBj.length === 2, `So khớp 'bj' với '北京' thất bại: ${JSON.stringify(matchBj)}`);

  const matchNihao = pinyinPro.match('你好', 'nihao');
  assert(Array.isArray(matchNihao) && matchNihao.length === 2, `So khớp 'nihao' với '你好' thất bại: ${JSON.stringify(matchNihao)}`);

  const matchMismatch = pinyinPro.match('你好', 'xyz');
  assert(matchMismatch === null, `So khớp âm sai phải trả về null`);
});

// -------------------------------------------------------------
// SUITE 3: Kiểm tra Dữ liệu Chiết tự (Chaizi Data)
// -------------------------------------------------------------
console.log('\n[SUITE 3] Kiểm tra Dữ liệu Chiết tự (chaizi_data.js):');

const chaiziPath = path.join(__dirname, 'chaizi_data.js');
check('File chaizi_data.js tồn tại và nạp được vào Node/window', () => {
  assert(fs.existsSync(chaiziPath), 'chaizi_data.js không tồn tại');
  const stat = fs.statSync(chaiziPath);
  assert(stat.size > 50000, `Dung lượng chaizi_data.js quá nhỏ: ${stat.size} bytes`);
});

let chaiziData;
check('chaizi_data.js chứa đối tượng window.CHAIZI_DATA với ít nhất 3.000 ký tự Hán tự', () => {
  chaiziData = require(chaiziPath);
  assert(typeof chaiziData === 'object' && chaiziData !== null, 'CHAIZI_DATA không phải object');
  const total = Object.keys(chaiziData).length;
  assert(total >= 3000, `Số lượng chữ Hán chiết tự ít hơn 3.000 (Hiện có: ${total})`);
  console.log(`    -> Tổng số chữ Hán có chiết tự: ${total.toLocaleString()} chữ`);
});

check('Tra cứu mẫu chiết tự chính xác: 明 -> 日 月, 休 -> 亻 木, 好 -> 女 子, 森 -> 木 木 木', () => {
  assert(chaiziData['明'] === '日 月' || (Array.isArray(chaiziData['明']) && chaiziData['明'].join(' ') === '日 月'), 'Chiết tự chữ 明 không đúng');
  assert(chaiziData['休'] === '亻 木' || (Array.isArray(chaiziData['休']) && chaiziData['休'].join(' ') === '亻 木'), 'Chiết tự chữ 休 không đúng');
  assert(chaiziData['好'] === '女 子' || (Array.isArray(chaiziData['好']) && chaiziData['好'].join(' ') === '女 子'), 'Chiết tự chữ 好 không đúng');
  assert(
    chaiziData['森'] === '木 木 木' || chaiziData['森'] === '木 林' || (Array.isArray(chaiziData['森']) && chaiziData['森'].join(' ') === '木 木 木'),
    'Chiết tự chữ 森 không đúng'
  );
});

// -------------------------------------------------------------
// SUITE 4: Kiểm tra Tích hợp HTML & CSS & Logic Tìm kiếm
// -------------------------------------------------------------
console.log('\n[SUITE 4] Kiểm tra Tích hợp index.html, style.css & app.js:');

const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
const appContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

check('index.html đã nhúng heti.min.css, pinyin-pro.min.js và chaizi_data.js', () => {
  assert(htmlContent.includes('href="heti.min.css"'), 'index.html chưa nhúng heti.min.css');
  assert(htmlContent.includes('src="pinyin-pro.min.js"'), 'index.html chưa nhúng pinyin-pro.min.js');
  assert(htmlContent.includes('src="chaizi_data.js"'), 'index.html chưa nhúng chaizi_data.js');
});

check('index.html áp dụng class heti vào các container Tab 2, Tab 4, Tab 7', () => {
  assert(htmlContent.includes('tracing-summary-box heti'), 'Tab 2 chưa có class heti');
  assert(htmlContent.includes('curr-text-container heti'), 'Tab 4 chưa có class heti');
  assert(htmlContent.includes('track-content-area heti'), 'Tab 7 chưa có class heti');
});

check('style.css chứa định dạng cho class .dict-chaizi và typography CJK', () => {
  assert(cssContent.includes('.dict-chaizi'), 'style.css chưa định nghĩa .dict-chaizi');
  assert(cssContent.includes('.heti'), 'style.css chưa có quy tắc bổ trợ cho .heti');
});

check('app.js tích hợp pinyinPro.match trong hàm performDictSearch()', () => {
  assert(appContent.includes('window.pinyinPro') && appContent.includes('pMatch'), 'app.js chưa tích hợp pinyinPro.match');
});

check('app.js hiển thị badge chiết tự dict-chaizi khi render thẻ từ vựng từ điển Tab 6', () => {
  assert(appContent.includes('dict-chaizi') && appContent.includes('window.CHAIZI_DATA'), 'app.js chưa hiển thị badge chiết tự cho thẻ từ vựng');
});

// -------------------------------------------------------------
// TỔNG KẾT
// -------------------------------------------------------------
console.log('\n================================================================');
console.log(`  KẾT QUẢ KIỂM THỬ: ${passedTests} PASS / ${failedTests} FAIL (Tổng: ${passedTests + failedTests})`);
console.log('================================================================\n');

if (failedTests > 0) {
  console.error(`❌ CÓ ${failedTests} BÀI TEST THẤT BẠI!`);
  process.exit(1);
} else {
  console.log('🎉 TẤT CẢ CÁC BÀI TEST NÂNG CẤP v1.3.1 ĐÃ ĐẠT 100% PASS!');
  process.exit(0);
}
