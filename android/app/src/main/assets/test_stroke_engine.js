/**
 * HSK 3.0 — Test Suite: Stroke Engine & Vector Parser (test_stroke_engine.js)
 * Kiểm tra:
 * 1. Cấu trúc dữ liệu nét (strokes, medians) của các chữ mẫu trong strokes.js.
 * 2. Tính hợp lệ và độ chính xác của logic parse SVG path.
 * 3. Tính toán chiều dài median path và xây dựng SVG median path.
 * 4. Hiệu ứng SVG dynamic stroke với clipPath và stroke-dasharray/stroke-dashoffset.
 * 5. Cơ chế Offline-First 3 tầng và Local Fallback Generator.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Thiết lập môi trường giả lập cho Node.js
const sandbox = {
  window: {},
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  Math: Math,
  JSON: JSON,
  Date: Date,
  Array: Array,
  Object: Object,
  isFinite: isFinite,
  parseFloat: parseFloat,
  parseInt: parseInt
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);

// 1. Nạp strokes.js
const strokesPath = path.join(__dirname, 'strokes.js');
const strokesCode = fs.readFileSync(strokesPath, 'utf8');
vm.runInContext(strokesCode, sandbox);

// 2. Nạp stroke_cache_db.js
const strokeCacheDbPath = path.join(__dirname, 'stroke_cache_db.js');
const strokeCacheDbCode = fs.readFileSync(strokeCacheDbPath, 'utf8');
vm.runInContext(strokeCacheDbCode, sandbox);

const SvgStrokeEngine = sandbox.SvgStrokeEngine;
const loadHanziStrokeData = sandbox.loadHanziStrokeData;
const generateFallbackStroke = sandbox.generateFallbackStroke || (sandbox.SvgStrokeEngine && sandbox.SvgStrokeEngine.generateFallbackStroke) || (sandbox.StrokeCacheDB && sandbox.StrokeCacheDB.generateFallbackStroke);
const HSK_STROKES = sandbox.window.HSK_STROKES;

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, detail) {
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${testName}`);
    if (detail) console.error(`    -> Chi tiết: ${detail}`);
  }
}

console.log('================================================================');
console.log('  HSK 3.0 — BỘ KIỂM THỬ VECTOR NÉT CHỮ & SVG STROKE ENGINE');
console.log('================================================================\n');

// -------------------------------------------------------------
// SUITE 1: Kiểm tra cấu trúc dữ liệu nét mẫu trong strokes.js
// -------------------------------------------------------------
console.log('[SUITE 1] Kiểm tra cấu trúc dữ liệu nét mẫu trong strokes.js:');

assert(
  HSK_STROKES && typeof HSK_STROKES === 'object',
  'Đối tượng window.HSK_STROKES tồn tại và là object',
  typeof HSK_STROKES
);

const allChars = Object.keys(HSK_STROKES || {});
assert(
  allChars.length >= 100,
  `Tổng số ký tự HSK trong strokes.js >= 100 (Hiện có: ${allChars.length} chữ)`,
  `Số lượng: ${allChars.length}`
);

const sampleChars = ['巴', '保', '抱', '背', '标', '并', '部', '餐', '产', '厂'];
let samplesValid = true;
let sampleErrors = [];

sampleChars.forEach(ch => {
  const item = HSK_STROKES[ch];
  if (!item) {
    samplesValid = false;
    sampleErrors.push(`Thiếu chữ mẫu [${ch}]`);
    return;
  }
  if (!Array.isArray(item.strokes) || item.strokes.length === 0) {
    samplesValid = false;
    sampleErrors.push(`Chữ [${ch}] thiếu mảng strokes hợp lệ`);
    return;
  }
  if (!Array.isArray(item.medians) || item.medians.length !== item.strokes.length) {
    samplesValid = false;
    sampleErrors.push(`Chữ [${ch}] số lượng medians (${item.medians ? item.medians.length : 0}) khác số lượng strokes (${item.strokes.length})`);
    return;
  }
  // Kiểm tra từng nét
  for (let i = 0; i < item.strokes.length; i++) {
    const s = item.strokes[i];
    const m = item.medians[i];
    if (typeof s !== 'string' || !s.startsWith('M') || !s.endsWith('Z')) {
      samplesValid = false;
      sampleErrors.push(`Chữ [${ch}] nét ${i}: SVG path không chuẩn format (bắt đầu bằng M, kết thúc bằng Z)`);
      break;
    }
    if (!Array.isArray(m) || m.length < 2) {
      samplesValid = false;
      sampleErrors.push(`Chữ [${ch}] nét ${i}: Median path phải có ít nhất 2 điểm`);
      break;
    }
    const pointsValid = m.every(p => Array.isArray(p) && p.length === 2 && isFinite(p[0]) && isFinite(p[1]) && p[0] >= -200 && p[0] <= 1200 && p[1] >= -200 && p[1] <= 1200);
    if (!pointsValid) {
      samplesValid = false;
      sampleErrors.push(`Chữ [${ch}] nét ${i}: Tọa độ median ngoài giới hạn [-200, 1200]`);
      break;
    }
  }
});

assert(
  samplesValid,
  `10 chữ mẫu kiểm tra (${sampleChars.join(', ')}) có đủ strokes và medians chuẩn xác 100%`,
  sampleErrors.join('; ')
);

// -------------------------------------------------------------
// SUITE 2: Kiểm tra logic Parse SVG Path (SvgStrokeEngine.parseSvgPath)
// -------------------------------------------------------------
console.log('\n[SUITE 2] Kiểm tra logic Parse SVG Path (SvgStrokeEngine.parseSvgPath):');

assert(
  SvgStrokeEngine && typeof SvgStrokeEngine.parseSvgPath === 'function',
  'Hàm SvgStrokeEngine.parseSvgPath tồn tại'
);

// Test parse nét 0 của chữ '巴'
const baStroke0 = HSK_STROKES['巴'].strokes[0];
const parsedBa0 = SvgStrokeEngine.parseSvgPath(baStroke0);

assert(
  parsedBa0.isValid === true,
  'Parse SVG path thực tế của chữ [巴] nét 0 thành công (isValid = true)'
);

assert(
  Array.isArray(parsedBa0.commands) && parsedBa0.commands.length >= 5,
  `Trích xuất thành công các lệnh SVG path (Số lệnh: ${parsedBa0.commands.length})`
);

assert(
  parsedBa0.bbox && parsedBa0.bbox.width > 0 && parsedBa0.bbox.height > 0,
  `Tính toán Bounding Box chính xác (W: ${parsedBa0.bbox.width}, H: ${parsedBa0.bbox.height})`
);

assert(
  parsedBa0.bbox.minX >= 0 && parsedBa0.bbox.maxX <= 1024 && parsedBa0.bbox.minY >= 0 && parsedBa0.bbox.maxY <= 1024,
  `Bounding Box nằm hoàn toàn trong không gian tọa độ 1024x1024 (minX: ${parsedBa0.bbox.minX}, maxX: ${parsedBa0.bbox.maxX})`
);

// Test parse chuỗi SVG path với các lệnh phức tạp
const testPath = 'M 100 200 L 300 200 Q 400 300 500 200 C 600 100 700 300 800 200 Z';
const parsedComplex = SvgStrokeEngine.parseSvgPath(testPath);
assert(
  parsedComplex.isValid === true && parsedComplex.commands.length === 5,
  'Parse chính xác chuỗi đường cong kết hợp M, L, Q, C, Z'
);

// Test parse an toàn khi input rỗng / null / sai định dạng
const parsedInvalid = SvgStrokeEngine.parseSvgPath('');
assert(
  parsedInvalid.isValid === false && parsedInvalid.commands.length === 0,
  'Xử lý an toàn chuỗi path rỗng mà không ném exception'
);

// -------------------------------------------------------------
// SUITE 3: Kiểm tra tính toán chiều dài Median & Median Path Builder
// -------------------------------------------------------------
console.log('\n[SUITE 3] Kiểm tra tính toán chiều dài Median & Median Path Builder:');

// Test tam giác vuông 3-4-5: (0,0) -> (300, 400) độ dài = 500
const testPoints = [[0, 0], [300, 400]];
const lenTriangle = SvgStrokeEngine.calculateMedianLength(testPoints);
assert(
  lenTriangle === 500,
  `Tính chiều dài Euclidean chính xác cho đoạn thẳng mẫu (Kỳ vọng: 500, Thực tế: ${lenTriangle})`
);

// Test median thực tế từ chữ '巴'
const baMedian0 = HSK_STROKES['巴'].medians[0];
const lenBa0 = SvgStrokeEngine.calculateMedianLength(baMedian0);
assert(
  lenBa0 > 200 && isFinite(lenBa0),
  `Tính chiều dài nét median thực tế của chữ [巴] nét 0 (Độ dài: ${lenBa0}px)`
);

// Test build SVG path từ median points
const builtPath = SvgStrokeEngine.buildMedianPath([[100, 150], [200, 250], [350, 450]]);
assert(
  builtPath === 'M 100 150 L 200 250 L 350 450',
  `Xây dựng chuỗi SVG Path median đúng chuẩn: "${builtPath}"`
);

// -------------------------------------------------------------
// SUITE 4: Hiệu ứng SVG dynamic stroke với clipPath và stroke-dasharray
// -------------------------------------------------------------
console.log('\n[SUITE 4] Hiệu ứng SVG dynamic stroke với clipPath và stroke-dasharray:');

const svgResult = SvgStrokeEngine.generateSvgHtml(HSK_STROKES['巴'], {
  width: 300,
  height: 300,
  strokeColor: '#2d2621',
  outlineColor: '#9e8a75',
  showOutline: true
});

assert(
  svgResult && typeof svgResult.svgHtml === 'string',
  'Hàm generateSvgHtml sinh mã SVG HTML thành công'
);

assert(
  svgResult.svgHtml.includes('<svg') && svgResult.svgHtml.includes('</svg>'),
  'Mã HTML có đầy đủ thẻ mở/đóng <svg>'
);

assert(
  svgResult.svgHtml.includes('<defs>') && svgResult.svgHtml.includes('<clipPath'),
  'Mã SVG chứa định nghĩa <defs> và các thẻ <clipPath id="..."> để bọc outline thư pháp'
);

assert(
  svgResult.svgHtml.includes('clip-path="url(#'),
  'Các nét median được liên kết chính xác với clip-path tương ứng'
);

assert(
  svgResult.svgHtml.includes('stroke-dasharray:') && svgResult.svgHtml.includes('stroke-dashoffset:'),
  'Các nét brush được thiết lập thuộc tính stroke-dasharray và stroke-dashoffset'
);

assert(
  svgResult.svgHtml.includes('transform="translate(0, 900) scale(1, -1)"'),
  'Hệ trục tọa độ SVG được biến đổi chuẩn tỷ lệ MakeMeAHanzi: translate(0, 900) scale(1, -1)'
);

assert(
  svgResult.strokeCount === HSK_STROKES['巴'].strokes.length,
  `Số lượng nét hoạt họa khớp chính xác với dữ liệu nét (Số nét: ${svgResult.strokeCount})`
);

// -------------------------------------------------------------
// SUITE 5: Cơ chế Offline-First 3 tầng & Local Fallback Generator
// -------------------------------------------------------------
async function runAsyncTests() {
  console.log('\n[SUITE 5] Cơ chế Offline-First 3 tầng & Local Fallback Generator:');

  // Test 1: Tầng 1 - RAM Hit
  let ramCallbackCalled = false;
  let ramData = null;
  loadHanziStrokeData('巴', function (data) {
    ramCallbackCalled = true;
    ramData = data;
  });

  assert(
    ramCallbackCalled && ramData && ramData === HSK_STROKES['巴'],
    'Tầng 1 (RAM): Trả về dữ liệu nét tức thì từ RAM khi chữ đã có trong window.HSK_STROKES'
  );

  // Test 2: Local Fallback Generator khi hoàn toàn offline
  const fallbackCharData = generateFallbackStroke('字');

  assert(
    fallbackCharData && fallbackCharData.isFallback === true,
    'Bộ Local Fallback Generator sinh đối tượng nét dự phòng có cờ isFallback: true'
  );

  assert(
    Array.isArray(fallbackCharData.strokes) && Array.isArray(fallbackCharData.medians) && fallbackCharData.strokes.length === fallbackCharData.medians.length,
    `Dữ liệu nét dự phòng có đầy đủ ${fallbackCharData.strokes.length} nét strokes và medians khớp nhau`
  );

  // Kiểm tra toàn bộ nét trong fallback đều parse hợp lệ
  const allFallbackValid = fallbackCharData.strokes.every(s => {
    const p = SvgStrokeEngine.parseSvgPath(s);
    return p.isValid && p.commands.length > 0;
  });
  assert(
    allFallbackValid,
    'Tất cả các nét SVG trong Local Fallback đều là vector hợp lệ 100%'
  );

  // Test 3: Cơ chế Offline Fallback an toàn của loadHanziStrokeData khi chữ chưa có trong RAM
  sandbox.navigator = { onLine: false }; // Giả lập mất mạng hoàn toàn
  let offlineCallbackCalled = false;
  let offlineData = null;

  await loadHanziStrokeData('未知字', function (data) {
    offlineCallbackCalled = true;
    offlineData = data;
  });

  assert(
    offlineCallbackCalled && offlineData && Array.isArray(offlineData.strokes),
    'Khi thiết bị Offline và chữ chưa có trong RAM: loadHanziStrokeData tự động kích hoạt Local Fallback thành công, không bị treo'
  );

  // -------------------------------------------------------------
  // TỔNG KẾT BÁO CÁO
  // -------------------------------------------------------------
  console.log('\n================================================================');
  console.log(`  KẾT QUẢ KIỂM THỬ: ${passedTests} PASS / ${failedTests} FAIL (Tổng: ${passedTests + failedTests})`);
  console.log('================================================================');

  if (failedTests > 0) {
    console.error('\n❌ CÓ BÀI TEST THẤT BẠI!');
    process.exit(1);
  } else {
    console.log('\n🎉 TẤT CẢ CÁC BÀI TEST VECTOR NÉT & STROKE ENGINE ĐÃ ĐẠT 100%!');
    process.exit(0);
  }
}

runAsyncTests().catch(err => {
  console.error('Lỗi thực thi kiểm thử async:', err);
  process.exit(1);
});
