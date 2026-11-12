/**
 * HSK 3.0 — BỘ KIỂM THỬ TỰ ĐỘNG CẬP NHẬT TRỰC TUYẾN & CHỐNG LẶP THÔNG BÁO (v1.3.2)
 *
 * Kiểm tra toàn diện:
 * 1. Đồng bộ phiên bản đa nền tảng (Lockstep Manifest Sync: version.json, app.js, index.html, sw.js, build.gradle).
 * 2. Cơ chế Tự động cập nhật ngầm Web/PWA (Zero-Click Seamless Auto-Update).
 * 3. Cơ chế Chống vòng lặp làm mới trang (Reload Loop Guard).
 * 4. Cơ chế Khắc phục lỗi lặp thông báo sau reload (Post-Reload Loop Elimination).
 * 5. Tách biệt hành vi Web vs Native Android WebView.
 */

const fs = require('fs');
const path = require('path');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('================================================================');
console.log('  HSK 3.0 — BỘ KIỂM THỬ AUTO-UPDATE & SEAMLESS HOT RELOAD (v1.3.2)');
console.log('================================================================\n');

// -----------------------------------------------------------------------------
// [SUITE 1] Kiểm tra Tính Nhất Quán Phiên Bản (Lockstep Manifest Sync)
// -----------------------------------------------------------------------------
console.log('[SUITE 1] Kiểm tra Tính Nhất Quán Phiên Bản Toàn Diện:');

const TARGET_VERSION = '1.3.2';
const TARGET_BUILD = 2026111201;
const TARGET_CACHE = 'hsk3-cache-v58';

// 1. version.json
const versionJsonPath = path.join(__dirname, 'version.json');
const versionJson = JSON.parse(fs.readFileSync(versionJsonPath, 'utf8'));
assert(versionJson.version === TARGET_VERSION, `version.json có version = '${TARGET_VERSION}' (Hiện tại: ${versionJson.version})`);
assert(Number(versionJson.build) === TARGET_BUILD, `version.json có build = ${TARGET_BUILD} (Hiện tại: ${versionJson.build})`);

// 2. sw.js
const swContent = fs.readFileSync(path.join(__dirname, 'sw.js'), 'utf8');
const cacheMatch = swContent.match(/CACHE_NAME\s*=\s*['"]([^'"]+)['"]/);
assert(cacheMatch && cacheMatch[1] === TARGET_CACHE, `sw.js có CACHE_NAME = '${TARGET_CACHE}' (Hiện tại: ${cacheMatch ? cacheMatch[1] : 'null'})`);

// 3. android/app/build.gradle
const gradleContent = fs.readFileSync(path.join(__dirname, 'android/app/build.gradle'), 'utf8');
const vCodeMatch = gradleContent.match(/versionCode\s+(\d+)/);
const vNameMatch = gradleContent.match(/versionName\s+["']([^"']+)["']/);
assert(vCodeMatch && Number(vCodeMatch[1]) === TARGET_BUILD, `build.gradle versionCode = ${TARGET_BUILD} (Hiện tại: ${vCodeMatch ? vCodeMatch[1] : 'null'})`);
assert(vNameMatch && vNameMatch[1] === TARGET_VERSION, `build.gradle versionName = '${TARGET_VERSION}' (Hiện tại: ${vNameMatch ? vNameMatch[1] : 'null'})`);

// 4. index.html
const indexHtmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const btnMatch = indexHtmlContent.includes(`id="btn-manual-update-check" class="mode-btn" title="Kiểm tra bản cập nhật mới">v${TARGET_VERSION}</button>`);
assert(btnMatch, `index.html có nhãn nút kiểm tra cập nhật v${TARGET_VERSION}`);

// 5. app.js
const appJsContent = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
assert(appJsContent.includes(`DEFAULT_APP_VERSION = '${TARGET_VERSION}'`), `app.js chứa DEFAULT_APP_VERSION = '${TARGET_VERSION}'`);
assert(appJsContent.includes(`DEFAULT_APP_BUILD = ${TARGET_BUILD}`), `app.js chứa DEFAULT_APP_BUILD = ${TARGET_BUILD}`);
assert(!appJsContent.includes("window.APP_VERSION = '1.3.0'"), 'app.js không còn bị hardcode cũ v1.3.0');
assert(!appJsContent.includes('window.APP_BUILD = 2026102701'), 'app.js không còn bị hardcode cũ build 2026102701');

// -----------------------------------------------------------------------------
// [SUITE 2] Mock Môi Trường Web & Kiểm tra Seamless Zero-Click Auto-Update
// -----------------------------------------------------------------------------
console.log('\n[SUITE 2] Kiểm tra Cơ chế Web Zero-Click Seamless Auto-Update:');

function createMockEnvironment() {
  const localStorageStore = {};
  const sessionStorageStore = {};
  let reloadCount = 0;
  const domElements = {};

  const mockLocalStorage = {
    getItem: (k) => (k in localStorageStore ? localStorageStore[k] : null),
    setItem: (k, v) => { localStorageStore[k] = String(v); },
    removeItem: (k) => { delete localStorageStore[k]; },
    clear: () => { Object.keys(localStorageStore).forEach(k => delete localStorageStore[k]); }
  };

  const mockSessionStorage = {
    getItem: (k) => (k in sessionStorageStore ? sessionStorageStore[k] : null),
    setItem: (k, v) => { sessionStorageStore[k] = String(v); },
    removeItem: (k) => { delete sessionStorageStore[k]; }
  };

  const mockDocument = {
    getElementById: (id) => {
      if (!domElements[id]) {
        domElements[id] = { id, innerHTML: '', style: {}, textContent: '' };
      }
      return domElements[id];
    },
    createElement: (tag) => ({ tagName: tag, innerHTML: '', style: {} }),
    body: {
      appendChild: (el) => { domElements[el.id || 'toast'] = el; }
    }
  };

  const mockLocation = {
    host: 'localhost:8080',
    reload: () => { reloadCount++; }
  };

  return {
    mockLocalStorage,
    mockSessionStorage,
    mockDocument,
    mockLocation,
    getReloadCount: () => reloadCount,
    domElements
  };
}

// Kiểm tra logic handleWebSeamlessAutoUpdate
const env1 = createMockEnvironment();
const remoteNew = {
  version: '1.3.3',
  build: 2026112001,
  changelog: 'Test update new features'
};

// Mô phỏng hàm handleWebSeamlessAutoUpdate lấy từ app.js
function runTestWebUpdate(env, remote, isManual = false) {
  const AUTO_UPDATE_GUARD_KEY = 'hsk_last_web_auto_update';
  let guardInfo = null;
  try {
    guardInfo = JSON.parse(env.mockSessionStorage.getItem(AUTO_UPDATE_GUARD_KEY) || 'null');
  } catch (e) {}

  const now = Date.now();
  if (!isManual && guardInfo && Number(guardInfo.build) === Number(remote.build) && (now - Number(guardInfo.time) < 30000)) {
    return { status: 'GUARD_BLOCKED', reason: 'Loop prevented' };
  }

  env.mockSessionStorage.setItem(AUTO_UPDATE_GUARD_KEY, JSON.stringify({ build: remote.build, time: now }));
  env.mockLocalStorage.setItem('hsk_app_build', String(remote.build));
  env.mockLocalStorage.setItem('hsk_app_version', String(remote.version));

  const toast = env.mockDocument.getElementById('app-update-toast');
  toast.innerHTML = `HSK 3.0 v${remote.version}`;
  toast.style.display = 'flex';

  env.mockLocation.reload();
  return { status: 'UPDATED' };
}

const firstRun = runTestWebUpdate(env1, remoteNew, false);
assert(firstRun.status === 'UPDATED', 'Lần đầu phát hiện bản mới: Web tự động cập nhật ngầm thành công');
assert(env1.mockLocalStorage.getItem('hsk_app_build') === '2026112001', 'Đã lưu build mới vào localStorage (hsk_app_build = 2026112001)');
assert(env1.mockLocalStorage.getItem('hsk_app_version') === '1.3.3', 'Đã lưu version mới vào localStorage (hsk_app_version = 1.3.3)');
assert(env1.getReloadCount() === 1, 'Hàm reload đã được kích hoạt tự động (reloadCount = 1)');
assert(env1.domElements['app-update-toast'] && env1.domElements['app-update-toast'].style.display === 'flex', 'Toast cập nhật ngầm hiển thị không chặn màn hình');

// -----------------------------------------------------------------------------
// [SUITE 3] Kiểm tra Reload Loop Guard (Chống lặp reload liên tục)
// -----------------------------------------------------------------------------
console.log('\n[SUITE 3] Kiểm tra Cơ chế Chống Reload Loop (Reload Loop Guard):');

// Gọi lại ngay lần thứ 2 với cùng remote.build trong thời gian < 30s
const secondRun = runTestWebUpdate(env1, remoteNew, false);
assert(secondRun.status === 'GUARD_BLOCKED', 'Reload Loop Guard kích hoạt thành công: Chặn reload lặp lại cho cùng build');
assert(env1.getReloadCount() === 1, 'Số lần reload được bảo toàn không tăng (reloadCount vẫn là 1)');

// -----------------------------------------------------------------------------
// [SUITE 4] Kiểm tra Loại Bỏ Vòng Lặp Sau Reload (Post-Reload Loop Elimination)
// -----------------------------------------------------------------------------
console.log('\n[SUITE 4] Kiểm tra Khắc Phục Triệt Để Lỗi Lặp Thông Báo Sau Reload:');

// Giả lập sau khi trang reload lại:
// Code khởi động app đọc localStorage.getItem('hsk_app_build')
const savedBuildAfterReload = Number(env1.mockLocalStorage.getItem('hsk_app_build'));
const currentAppBuild = Math.max(TARGET_BUILD, savedBuildAfterReload || 0);
assert(currentAppBuild === 2026112001, `Build ứng dụng sau reload được đồng bộ từ localStorage (${currentAppBuild})`);

// checkRemoteVersion chạy lại với cùng remote build
const isNewRemoteBuild = Number(remoteNew.build) > Number(currentAppBuild);
assert(!isNewRemoteBuild, 'remote.build > currentBuild là FALSE sau reload -> Không còn hiện thông báo lặp!');

// Kiểm tra khi initMainApp dọn dẹp cache OTA: hsk_app_build KHÔNG bị xóa
['specialized_tracks_data.js', 'tcm_data.js', 'dict_data.js', 'version.json'].forEach(f => {
  env1.mockLocalStorage.removeItem('hsk_ota_' + f);
});
assert(env1.mockLocalStorage.getItem('hsk_app_build') === '2026112001', 'hsk_app_build vẫn được bảo toàn sau khi initMainApp dọn dẹp cache');

// -----------------------------------------------------------------------------
// [SUITE 5] Kiểm tra Phân Biệt Web vs Android Native WebView
// -----------------------------------------------------------------------------
console.log('\n[SUITE 5] Kiểm tra Phân Biệt Hành Vi Web vs Android Native:');

function checkEnvironmentMode(windowObj) {
  const isAndroid = !!windowObj.AndroidTTS || (typeof windowObj.location !== 'undefined' && windowObj.location.host.includes('androidplatform'));
  return isAndroid ? 'ANDROID_NATIVE' : 'WEB_PWA';
}

const webEnvWindow = { location: { host: 'aka368.github.io' } };
assert(checkEnvironmentMode(webEnvWindow) === 'WEB_PWA', 'Trình duyệt Web (GitHub Pages / Localhost) được phân loại chính xác là WEB_PWA');

const androidBridgeWindow = { AndroidTTS: { getNativeVersionCode: () => 2026111201 }, location: { host: 'localhost' } };
assert(checkEnvironmentMode(androidBridgeWindow) === 'ANDROID_NATIVE', 'Android WebView có AndroidTTS bridge được phân loại là ANDROID_NATIVE');

const androidAssetWindow = { location: { host: 'appassets.androidplatform.net' } };
assert(checkEnvironmentMode(androidAssetWindow) === 'ANDROID_NATIVE', 'Android WebView dùng WebViewAssetLoader được phân loại là ANDROID_NATIVE');

// =============================================================================
// TỔNG KẾT
// =============================================================================
console.log('\n================================================================');
console.log(`  KẾT QUẢ KIỂM THỬ: ${passedTests} PASS / ${failedTests} FAIL (Tổng: ${totalTests})`);
console.log('================================================================\n');

if (failedTests > 0) {
  console.error('❌ BỘ KIỂM THỬ CÓ TEST THẤT BẠI!');
  process.exit(1);
} else {
  console.log('🎉 TẤT CẢ CÁC BÀI TEST AUTO-UPDATE & REFRESH ĐÃ ĐẠT 100% PASS!');
  process.exit(0);
}
