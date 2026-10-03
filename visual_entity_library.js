/* BỘ THƯ VIỆN ĐỒ HỌA THỰC THỂ BÁN TẢ THỰC CAO CẤP (DETAILED 2D ILLUSTRATION) */
(function() {
  window.COMPREHENSIVE_ENTITY_SVGS = {
    // === 1. RAU CỦ & NÔNG SẢN ===
    "白菜": {
      badge: "🥬 Cải Thảo",
      svg: `<g transform="translate(18, 6)">
        <ellipse cx="32" cy="58" rx="28" ry="5" fill="rgba(0,0,0,0.08)"/>
        <!-- Bẹ lá ngoài uốn lượn -->
        <path d="M12 44 C8 30 12 16 22 10 C28 6 32 12 28 24 C24 34 20 44 18 52 Z" fill="#22c55e" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M52 44 C56 30 52 16 42 10 C36 6 32 12 36 24 C40 34 44 44 46 52 Z" fill="#22c55e" stroke="#15803d" stroke-width="1.6" stroke-linejoin="round"/>
        <!-- Thân bẹ cải trắng ngà -->
        <path d="M20 52 C22 36 26 24 32 22 C38 24 42 36 44 52 C44 56 20 56 20 52 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.6"/>
        <!-- Bẹ lá giữa uốn xoăn -->
        <path d="M16 34 C14 24 18 14 24 8 C30 4 34 10 32 20 C30 30 26 40 24 50 Z" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
        <path d="M48 34 C50 24 46 14 40 8 C34 4 30 10 32 20 C34 30 38 40 40 50 Z" fill="#4ade80" stroke="#16a34a" stroke-width="1.5"/>
        <!-- Lõi búp cải cuộn non màu vàng xanh -->
        <path d="M24 26 C24 14 28 6 32 6 C36 6 40 14 40 26 C40 38 36 48 32 48 C28 48 24 38 24 26 Z" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
        <path d="M27 20 C28 12 31 8 32 8 C33 8 36 12 37 20 C38 28 36 42 32 42 C28 42 26 28 27 20 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.2"/>
        <!-- Gân lá trắng phân nhánh -->
        <path d="M32 48 L32 18 M32 40 Q26 32 22 28 M32 40 Q38 32 42 28 M32 30 Q28 24 24 20 M32 30 Q36 24 40 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Cuống cắt gốc trắng tươi -->
        <ellipse cx="32" cy="53" rx="12" ry="3.5" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      </g>`
    },
    "胡萝卜": {
      badge: "🥕 Cà Rốt",
      svg: `<g transform="translate(22, 6)">
        <ellipse cx="28" cy="58" rx="20" ry="4" fill="rgba(0,0,0,0.08)"/>
        <!-- Lá xanh rậm rạp -->
        <path d="M28 14 Q22 4 16 6 Q24 12 26 16 M28 14 Q28 2 28 1 M28 14 Q34 4 40 6 Q32 12 30 16" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <!-- Củ cà rốt cam thon dài -->
        <path d="M22 16 C20 16 18 18 20 22 L26 54 C27 57 29 57 30 54 L36 22 C38 18 36 16 34 16 Z" fill="#f97316" stroke="#ea580c" stroke-width="1.8"/>
        <!-- Rãnh nếp gấp củ -->
        <line x1="22" y1="24" x2="28" y2="25" stroke="#c2410c" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="28" y1="34" x2="34" y2="33" stroke="#c2410c" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="25" y1="44" x2="30" y2="44" stroke="#c2410c" stroke-width="1.2" stroke-linecap="round"/>
      </g>`
    },
    "洋葱": {
      badge: "🧅 Hành Tây",
      svg: `<g transform="translate(22, 8)">
        <ellipse cx="28" cy="54" rx="22" ry="5" fill="rgba(0,0,0,0.08)"/>
        <!-- Thân củ hành tròn -->
        <path d="M14 36 C14 22 22 12 28 8 C34 12 42 22 42 36 C42 48 36 54 28 54 C20 54 14 48 14 36 Z" fill="#c084fc" stroke="#7e22ce" stroke-width="1.8"/>
        <!-- Các đường vân sọc -->
        <path d="M22 16 C18 26 18 42 22 52 M34 16 C38 26 38 42 34 52 M28 10 L28 54" stroke="#e9d5ff" stroke-width="1.5" fill="none"/>
        <!-- Rễ chùm dưới đáy -->
        <path d="M26 54 L25 58 M28 54 L28 60 M30 54 L31 58" stroke="#ca8a04" stroke-width="1.5" stroke-linecap="round"/>
      </g>`
    },

    // === 2. THỊT & MÓN MẶN ===
    "五花肉": {
      badge: "🥓 Thịt Ba Chỉ",
      svg: `<g transform="translate(14, 10)">
        <!-- Thớt gỗ -->
        <rect x="6" y="44" width="60" height="8" rx="2" fill="#d97706" stroke="#b45309" stroke-width="1.5"/>
        <ellipse cx="36" cy="46" rx="28" ry="6" fill="rgba(0,0,0,0.1)"/>
        <!-- Miếng thịt ba chỉ cắt lát 3D -->
        <!-- Lớp bì -->
        <path d="M14 18 Q36 14 58 18 L58 22 Q36 18 14 22 Z" fill="#881337" stroke="#4c0519" stroke-width="1.2"/>
        <!-- Lớp mỡ 1 -->
        <path d="M14 22 Q36 18 58 22 L58 26 Q36 22 14 26 Z" fill="#fef08a"/>
        <!-- Lớp nạc 1 -->
        <path d="M14 26 Q36 22 58 26 L58 32 Q36 28 14 32 Z" fill="#e11d48"/>
        <!-- Lớp mỡ 2 -->
        <path d="M14 32 Q36 28 58 32 L58 36 Q36 32 14 36 Z" fill="#fef9c3"/>
        <!-- Lớp nạc 2 -->
        <path d="M14 36 Q36 32 58 36 L58 42 Q36 38 14 42 Z" fill="#be123c"/>
        <!-- Viền nét khối miếng thịt -->
        <path d="M14 18 L14 42 M58 18 L58 42" stroke="#4c0519" stroke-width="1.2"/>
        <!-- Vân cẩm thạch trắng -->
        <path d="M24 29 Q32 31 40 29 M28 38 Q36 40 46 38" stroke="#ffe4e6" stroke-width="1.2" fill="none" opacity="0.8"/>
      </g>`
    },
    "牛肉": {
      badge: "🥩 Thịt Bò",
      svg: `<g transform="translate(18, 12)">
        <ellipse cx="32" cy="44" rx="28" ry="6" fill="rgba(0,0,0,0.1)"/>
        <!-- Miếng bít tết / thịt bò đỏ tươi -->
        <path d="M12 24 C12 16 26 14 40 18 C52 22 54 32 50 40 C44 48 24 46 16 42 C8 36 12 28 12 24 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
        <!-- Khối mỡ vàng viền ngoài -->
        <path d="M40 18 C48 20 52 26 50 32" stroke="#fef08a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <!-- Vân mỡ cẩm thạch -->
        <path d="M22 24 Q30 28 38 24 M24 34 Q34 38 42 32 M18 30 Q24 32 28 30" stroke="#fecdd3" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>`
    },
    "排骨": {
      badge: "🍖 Sườn Heo",
      svg: `<g transform="translate(18, 12)">
        <ellipse cx="32" cy="46" rx="26" ry="5" fill="rgba(0,0,0,0.1)"/>
        <!-- Khối thịt sườn đỏ nâu -->
        <rect x="14" y="24" width="36" height="18" rx="5" fill="#be123c" stroke="#881337" stroke-width="2"/>
        <!-- Hai đầu xương trắng nhô ra -->
        <circle cx="10" cy="33" r="5.5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="54" cy="33" r="5.5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Thớ thịt nướng thơm -->
        <line x1="22" y1="28" x2="42" y2="28" stroke="#ffe4e6" stroke-width="2" stroke-linecap="round"/>
        <line x1="20" y1="34" x2="44" y2="34" stroke="#ffe4e6" stroke-width="2" stroke-linecap="round"/>
      </g>`
    },

    // === 3. HOA QUẢ ===
    "草莓": {
      badge: "🍓 Dâu Tây",
      svg: `<g transform="translate(22, 10)">
        <ellipse cx="28" cy="50" rx="18" ry="4" fill="rgba(0,0,0,0.08)"/>
        <!-- Quả dâu đỏ mọng -->
        <path d="M16 18 C10 26 14 42 26 48 C38 42 42 26 36 18 C30 14 22 14 16 18 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <!-- Tai lá xanh uốn cong -->
        <path d="M20 18 L26 8 L28 18 L34 10 L32 20 L24 20 Z" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
        <path d="M26 8 Q27 4 30 3" stroke="#15803d" stroke-width="2" fill="none"/>
        <!-- Các hạt vàng li ti -->
        <circle cx="20" cy="26" r="1.2" fill="#fef08a"/><circle cx="28" cy="24" r="1.2" fill="#fef08a"/><circle cx="34" cy="28" r="1.2" fill="#fef08a"/>
        <circle cx="23" cy="34" r="1.2" fill="#fef08a"/><circle cx="31" cy="36" r="1.2" fill="#fef08a"/>
        <circle cx="26" cy="42" r="1.2" fill="#fef08a"/>
      </g>`
    },

    // === 4. TINH BỘT & MÓN ĂN ===
    "面条": {
      badge: "🍜 Tô Mì Sợi",
      svg: `<g transform="translate(18, 8)">
        <ellipse cx="32" cy="54" rx="26" ry="5" fill="rgba(0,0,0,0.1)"/>
        <!-- Đôi đũa gắp mì -->
        <line x1="14" y1="12" x2="48" y2="20" stroke="#78350f" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="12" y1="16" x2="46" y2="24" stroke="#78350f" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Sợi mì vàng uốn lượn bốc lên -->
        <path d="M28 20 Q34 28 28 36 M34 21 Q30 30 36 36" stroke="#facc15" stroke-width="2.5" fill="none"/>
        <!-- Bát tô sứ men đỏ/xanh -->
        <path d="M14 32 C14 52 50 52 50 32 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <rect x="26" y="50" width="12" height="3" fill="#b91c1c"/>
        <!-- Nước dùng & sợi mì trong bát -->
        <ellipse cx="32" cy="32" rx="17" ry="5" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="26" cy="32" r="3" fill="#22c55e"/>
      </g>`
    }
  };

  // Hàm tra cứu đồ họa bán tả thực
  window.getExactEntitySvg = function(zh, vi, en) {
    if (!zh) return null;
    if (window.COMPREHENSIVE_ENTITY_SVGS[zh]) {
      return window.COMPREHENSIVE_ENTITY_SVGS[zh];
    }
    const keys = Object.keys(window.COMPREHENSIVE_ENTITY_SVGS);
    for (let k of keys) {
      if (zh.includes(k)) return window.COMPREHENSIVE_ENTITY_SVGS[k];
    }
    return null;
  };
})();
