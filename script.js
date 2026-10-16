// 全局預設新聞文字資料 (對應各卡片彈窗內文)
const newsDatabase = {
  'hero': {
    title: 'Toyota 新一代 GR Supra 概念圖曝光！搭載直六雙渦輪與手排傳動，馬力突破 450hp',
    category: '全球新車',
    badgeClass: 'badge-red',
    date: '2026-10-15',
    img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    content: `根據日本當地車壇消息來源指出，Toyota Gazoo Racing 正秘密測試全新一代 Supra 旗艦跑車。新車將延續經典的直列六缸雙渦輪增壓引擎架構，並加入最新輕量化 48V 輕油電輔助系統，最大馬力一舉跨越 450匹 大關。<br><br>外觀方面，車頭融合了 GR GT3 概念車的極致空力線條，配備巨大煞車散熱孔與導流孔。最令車迷振奮的是，新車開發團隊承諾將繼續提供六速手排變速箱選項，為極致操控玩家保留純粹的駕馭樂趣。`
  },
  'news-1': {
    title: '保時捷 911 GT3 RS 紐柏林單圈再度刷刷新紀錄，空氣力學套件技術大解析',
    category: '全球新車',
    badgeClass: 'badge-red',
    date: '2026-10-14',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    content: `Porsche 原廠測試車手今日在綠色地獄紐柏林北環賽道（Nürburgring Nordschleife）創下了震撼車壇的新紀錄。新款 911 GT3 RS 憑藉更為強大的主動式 DRS 減阻系統與底盤擴散器，在高速彎道展現出媲美 GT3 賽車的下壓力表現。<br><br>技術工程師透露，本次成功的核心在於中央冷卻器與主動式前導流板的精密配合，讓整車在 285 km/h 時能產生高達 860 公斤的下壓力，將自然進氣高轉速跑車的極限提升到了全新高度。`
  },
  'news-2': {
    title: '【2026 交通新制】全台區間測速與科技執法全面升級！違規變換車道無所遁形',
    category: '台灣法規',
    badgeClass: 'badge-orange',
    date: '2026-10-12',
    img: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=80',
    content: `交通部於今日記者會中表示，為提升道路安全與降低嚴重車禍發生率，全台多處易肇事路段及高速公路交流道銜接處，將全面啟動高解析度 AI 智慧監控系統。<br><br>新系統除了原本的超速偵測之外，更加入了『跨越雙白線』、『未依規定保持安全距離』以及『未禮讓行人』等自動辨識功能。警方呼籲廣大駕駛人行經該路段時切勿違規，切勿心存僥倖。`
  },
  'news-3': {
    title: 'Yamaha YZF-R9 正式引進台灣！三缸電控跑車震撼發表，預售價首度公開',
    category: '二輪重機',
    badgeClass: 'badge-red',
    date: '2026-10-10',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    content: `台灣山葉正式舉辦品牌發表會，正式宣布引進廣受玩家期待的三缸中量級跑車 YZF-R9！核心搭載 890c.c. CP3 扭力型三缸引擎，兼具低轉猛烈扭力與高轉延伸性。<br><br>全車配備 6 軸 IMU 電控系統，包含彎道 ABS、循跡控制 (TCS)、滑行控制 (SCS) 以及進退快排系統。預售價格開出後立即掀起訂購熱潮，首批交車預計將於明年首季陸續展開。`
  },
  'news-4': {
    title: '2026 F1 引擎新規正式上路！永續燃料與電能比重大大幅提升',
    category: '車圈大事',
    badgeClass: 'badge-orange',
    date: '2026-10-08',
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    content: `世界一級方程式錦標賽（F1）2026 賽季的新規則正式生效。本季最重大的技術變革在於動力單元（PU）取消了複雜的 MGU-H 廢熱回收系統，同時大幅提高 MGU-K 馬達的輸出比例（提升至 350kW）。<br><br>此外，所有賽車必須使用 100% 碳中和的永續生質燃料（Advanced Sustainable Fuel），吸引了包含 Audi、Ford 等國際車企大廠正式加盟投入賽事。`
  }
};

// 分類過濾邏輯
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');
    const cards = document.querySelectorAll('.news-card');

    cards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 關鍵字搜尋邏輯
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.news-card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const excerpt = card.querySelector('.card-excerpt').textContent.toLowerCase();

    if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});

// 彈窗 (Modal) 開啟與關閉邏輯
function openModal(id) {
  const data = newsDatabase[id];
  if (!data) return;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <span class="badge ${data.badgeClass}">${data.category}</span>
    <h2 style="font-size: 1.5rem; margin: 10px 0; font-weight: 800;">${data.title}</h2>
    <p style="font-size: 0.85rem; color: var(--text-muted);">發布日期：${data.date}</p>
    <img src="${data.img}" class="modal-detail-img" alt="${data.title}">
    <div class="modal-body-text">${data.content}</div>
  `;

  document.getElementById('newsModal').classList.add('active');
}

function closeModal(event) {
  if (event.target.classList.contains('modal-backdrop')) {
    document.getElementById('newsModal').classList.remove('active');
  }
}

function closeModalDirect() {
  document.getElementById('newsModal').classList.remove('active');
}
