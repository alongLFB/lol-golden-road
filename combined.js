<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#060a14" />
  <title>黄金之路 LoL — 英雄联盟电竞阵容挑战 | Golden Road LoL</title>
  <meta name="description" content="转动赛区、战队和年份转盘，从英雄联盟电竞历史中选秀组建5人阵容，挑战完美赛季。Spin region, team and year to draft a League of Legends esports roster." />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="/" />
  <meta property="og:title" content="黄金之路 LoL — Golden Road LoL" />
  <meta property="og:description" content="从英雄联盟电竞历史中组建梦幻阵容，挑战黄金之路。" />
  <meta property="og:type" content="website" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏆</text></svg>" />
  <link rel="stylesheet" href="styles.css?v=20260625_v4" />
</head>
<body>

  <!-- Background Effects -->
  <div class="bg-effects" aria-hidden="true"></div>
  <div class="bg-grid" aria-hidden="true"></div>

  <!-- Language Toggle -->
  <button class="lang-toggle" id="lang-toggle" onclick="Game.toggleLang()">
    <span class="globe-icon">🌐</span>
    <span id="lang-toggle-text" data-i18n="lang.switch">EN</span>
  </button>

  <!-- Confetti Container (for golden road win) -->
  <div class="confetti-container" id="confetti-container" aria-hidden="true"></div>

  <!-- Main Layout -->
  <div class="layout">

    <!-- ============ START SCREEN ============ -->
    <div class="screen active" id="screen-start">
      <div class="hero">
        <div class="hero-kicker" data-i18n="app.tagline">英雄联盟电竞阵容挑战</div>
        <h1 class="hero-title">
          <span id="hero-title-main" data-i18n="app.title">黄金之路</span>
          <span> LoL</span>
        </h1>
        <p class="hero-sub" data-i18n="app.description">
          转动赛区、战队和年份转盘，从英雄联盟电竞历史中选秀组建5人阵容，挑战完美赛季：春季赛、季中冠军赛、夏季赛、全球总决赛。
        </p>
      </div>

      <!-- Mode Selection -->
      <div class="mode-select">
        <div class="mode-card" id="mode-golden" onclick="Game.startMode('golden')">
          <span class="mode-card-icon">🏆</span>
          <div class="mode-card-title" data-i18n="mode.golden">黄金之路</div>
          <div class="mode-card-desc" data-i18n="mode.golden.desc">完整赛季挑战 — 春季赛 → MSI → 夏季赛 → 全球总决赛</div>
        </div>
        <div class="mode-card" id="mode-msi" onclick="Game.startMode('msi')">
          <span class="mode-card-icon">🌏</span>
          <div class="mode-card-title" data-i18n="mode.msi">MSI 挑战</div>
          <div class="mode-card-desc" data-i18n="mode.msi.desc">精简的季中冠军赛主题挑战</div>
        </div>
        <div class="mode-card" id="mode-free" onclick="Game.startFreeDraftMode()">
          <span class="mode-card-icon">🧠</span>
          <div class="mode-card-title" data-i18n="mode.free">自主选人</div>
          <div class="mode-card-desc" data-i18n="mode.free.desc">组建你的梦幻银河战舰，无视轮盘随机性</div>
        </div>
      </div>

      <!-- Info Sections -->
      <div class="info-sections">
        <section class="info-section" id="section-about">
          <h2 data-i18n="about.title">关于挑战</h2>
          <p data-i18n="about.p1">黄金之路LoL是一款面向英雄联盟电竞粉丝的策略选秀游戏。每次挑战都需要平衡阵容知识、策略判断和运气：转盘决定候选池，但由你决定最终阵容。</p>
          <p data-i18n="about.p2">黄金之路模式模拟完整赛季。你的阵容将参加春季赛、MSI、夏季赛和全球总决赛。完美通关意味着在每个赛事都夺冠——这对于顶级阵容也极为困难。</p>
        </section>

        <section class="info-section" id="section-strategy">
          <h2 data-i18n="about.strategy">策略提示</h2>
          <ul>
            <li data-i18n="about.tip1">为弱阵容年份保留重骰机会。战队重骰可以拯救一个困难的赛区-年份组合。</li>
            <li data-i18n="about.tip2">优先选择稀缺位置的选手。如果抽到的阵容有出色的辅助或打野，趁早锁定。</li>
            <li data-i18n="about.tip3">选手评分与特定赛季绑定，巅峰赛季远比名气重要。</li>
          </ul>
        </section>

        <section class="info-section" id="section-modes">
          <h2 data-i18n="about.modes">游戏模式与评分</h2>
          <p data-i18n="about.modes.p1">黄金之路模式使用 2013-2025 年的历史阵容。MSI 挑战模式使用精选的 MSI 年份阵容，运行更短的模拟。</p>
          <p data-i18n="about.modes.p2">选完5人后，系统将隐藏的选手评分取均值作为阵容评分，然后模拟各阶段赛事。强阵容能提高胜率，但没有什么阵容能保证黄金之路。</p>
        </section>
      </div>
    </div>

    <!-- ============ DRAFT SCREEN ============ -->
    <div class="screen" id="screen-draft">
      <div class="draft-container">

        <!-- Draft Header -->
        <div class="draft-header">
          <button class="back-btn" onclick="Game.backToStart()">
            ← <span data-i18n="mode.back">返回</span>
          </button>
          <div class="round-badge" id="round-badge">
            <span data-i18n="draft.round" data-i18n-params='{"n":"1"}'>第 1 轮</span>
            <span data-i18n="draft.of">/ 5</span>
          </div>
          <div></div>
        </div>

        <!-- Reroll Bar -->
        <div class="reroll-bar" id="reroll-bar">
          <button class="reroll-item" id="reroll-region" onclick="Game.reroll('region')">
            <span data-i18n="draft.region">赛区</span>
            <span data-i18n="draft.reroll">重骰</span>
            <span class="reroll-count" id="reroll-region-count">3</span>
          </button>
          <button class="reroll-item" id="reroll-team" onclick="Game.reroll('team')">
            <span data-i18n="draft.team">战队</span>
            <span data-i18n="draft.reroll">重骰</span>
            <span class="reroll-count" id="reroll-team-count">3</span>
          </button>
          <button class="reroll-item" id="reroll-year" onclick="Game.reroll('year')">
            <span data-i18n="draft.year">年份</span>
            <span data-i18n="draft.reroll">重骰</span>
            <span class="reroll-count" id="reroll-year-count">3</span>
          </button>
        </div>

        <!-- Wheels -->
        <div class="wheels-section">
          <div class="wheel-wrapper">
            <div class="wheel-label" data-i18n="draft.region">赛区</div>
            <div class="wheel-box" id="wheel-region">
              <div class="wheel-value placeholder">?</div>
            </div>
          </div>
          <div class="wheel-wrapper">
            <div class="wheel-label" data-i18n="draft.team">战队</div>
            <div class="wheel-box" id="wheel-team">
              <div class="wheel-value placeholder">?</div>
            </div>
          </div>
          <div class="wheel-wrapper">
            <div class="wheel-label" data-i18n="draft.year">年份</div>
            <div class="wheel-box" id="wheel-year">
              <div class="wheel-value placeholder">?</div>
            </div>
          </div>
        </div>

        <!-- Spin Button -->
        <button class="btn-spin" id="btn-spin" onclick="Game.spin()">
          <span data-i18n="draft.spin">转 动</span>
        </button>

        <!-- Player Selection (hidden until spin) -->
        <div class="player-selection hidden" id="player-selection">
          <!-- Spin Result Banner -->
          <div class="spin-result-banner" id="spin-result-banner">
            <div class="spin-result-item">
              <div class="spin-result-label" data-i18n="draft.region">赛区</div>
              <div class="spin-result-value" id="result-region">—</div>
            </div>
            <div class="spin-result-divider"></div>
            <div class="spin-result-item">
              <div class="spin-result-label" data-i18n="draft.team">战队</div>
              <div class="spin-result-value" id="result-team">—</div>
            </div>
            <div class="spin-result-divider"></div>
            <div class="spin-result-item">
              <div class="spin-result-label" data-i18n="draft.year">年份</div>
              <div class="spin-result-value" id="result-year">—</div>
            </div>
          </div>

          <!-- Selection Header -->
          <div class="selection-header" data-i18n="draft.pick.player">选择一名选手加入阵容</div>

          <!-- Player Cards Grid -->
          <div class="player-grid" id="player-grid"></div>

          <!-- Role Assignment -->
          <div class="text-center">
            <div class="selection-header" data-i18n="draft.pick.role" style="margin-top:0">分配到位置</div>
            <div class="role-assign" id="role-assign"></div>
            <button class="btn-confirm" id="btn-confirm" onclick="Game.confirmPick()" disabled>
              <span data-i18n="draft.confirm">确认选择</span> ✓
            </button>
          </div>
        </div>

        <!-- Roster Panel -->
        <div class="roster-panel">
          <div class="roster-title" data-i18n="draft.roster">你的阵容</div>
          <div class="roster-grid" id="roster-grid">
            <!-- Filled by game.js -->
          </div>
        </div>

      </div>
    </div>

    <!-- ============ FREE DRAFT SCREEN ============ -->
    <div class="screen" id="screen-free-draft">
      <div class="draft-container free-draft-layout">
        
        <!-- Left: Roster slots -->
        <div class="roster-panel free-draft-roster">
          <div class="draft-header flex-start-mb20">
            <button class="back-btn" onclick="Game.backToStart()">
              ← <span data-i18n="mode.back">返回</span>
            </button>
          </div>
          <div class="roster-title" data-i18n="draft.roster">你的阵容</div>
          <div class="roster-grid" id="free-roster-grid">
            <!-- Filled by game.js -->
          </div>
          <div class="text-center" style="margin-top: 20px;">
            <button class="btn-confirm" id="btn-free-sim" onclick="Game.startFreeSim()" disabled>
              <span data-i18n="sim.start">开始模拟</span> ✓
            </button>
          </div>
        </div>

        <!-- Right: Player Pool -->
        <div class="player-pool-panel">
          <div class="selection-header pool-header" data-i18n="free.pool">历史选手池</div>
          
          <!-- Filters -->
          <div class="search-container">
            <input type="text" id="free-search" class="search-input" placeholder="搜索选手名..." oninput="Game.filterFreePlayers()" />
          </div>
          <div class="role-assign free-role-tabs" id="free-role-tabs">
            <button class="role-btn active" onclick="Game.setFreeRoleFilter('all')">All</button>
            <button class="role-btn" onclick="Game.setFreeRoleFilter('top')">Top</button>
            <button class="role-btn" onclick="Game.setFreeRoleFilter('jungle')">Jungle</button>
            <button class="role-btn" onclick="Game.setFreeRoleFilter('mid')">Mid</button>
            <button class="role-btn" onclick="Game.setFreeRoleFilter('adc')">ADC</button>
            <button class="role-btn" onclick="Game.setFreeRoleFilter('support')">Support</button>
          </div>

          <!-- List -->
          <div id="free-player-list" class="free-player-list">
            <!-- Rendered by JS -->
          </div>
        </div>

      </div>
    </div>

    <!-- ============ SIMULATION SCREEN ============ -->
    <div class="screen" id="screen-sim">
      <div class="sim-container">

        <!-- Final Roster Display -->
        <div class="roster-panel" style="margin-top:0">
          <div class="roster-title" data-i18n="draft.roster">你的阵容</div>
          <div class="roster-grid" id="sim-roster-grid"></div>
        </div>

        <!-- Team Rating -->
        <div class="team-rating-display">
          <div class="team-rating-label" data-i18n="sim.team.rating">阵容评分</div>
          <div class="team-rating-value" id="team-rating-value">0</div>
          <div class="team-rating-bar">
            <div class="team-rating-fill" id="team-rating-fill" style="width:0%"></div>
          </div>
        </div>

        <!-- Events Timeline -->
        <div class="events-timeline" id="events-timeline"></div>

        <!-- Sim Action Button -->
        <button class="btn-sim-action" id="btn-sim-action" onclick="Game.simNext()">
          <span data-i18n="sim.start">开始模拟</span>
        </button>

      </div>
    </div>

    <!-- ============ RESULTS SCREEN ============ -->
    <div class="screen" id="screen-results">
      <div class="result-container">

        <div class="result-banner" id="result-banner">
          <div class="result-title" id="result-title">—</div>
          <div class="result-desc" id="result-desc">—</div>
        </div>

        <div class="result-stats" id="result-stats"></div>

        <!-- Season Summary (event results list) -->
        <div class="events-timeline" id="result-events" style="width:100%;max-width:500px;"></div>

        <!-- Share Card Preview -->
        <div class="share-section">
          <div class="share-card-frame" id="share-card-frame">
            <canvas id="share-canvas" width="600" height="780"></canvas>
          </div>

          <!-- Share Buttons -->
          <div class="share-buttons">
            <button class="btn-share-action btn-share-copy" onclick="Game.copyShareText()">
              <span data-i18n="share.copy">📋 复制</span>
            </button>
            <button class="btn-share-action btn-share-image" onclick="Game.downloadImage()">
              <span data-i18n="share.image">⬇ 保存图片</span>
            </button>
            <button class="btn-share-action btn-share-post" onclick="Game.postToX()">
              <span data-i18n="share.post">𝕏 发布</span>
            </button>
          </div>
        </div>

        <!-- Copied Toast -->
        <div class="toast hidden" id="toast-copied">
          <span data-i18n="share.copied">已复制到剪贴板！</span>
        </div>

        <div class="result-actions">
          <button class="btn-replay" onclick="Game.replay()">
            <span data-i18n="result.play.again">再来一局</span>
          </button>
          <button class="btn-home" onclick="Game.backToStart()">
            <span data-i18n="result.back.home">返回首页</span>
          </button>
        </div>

      </div>
    </div>

  </div>

  <!-- Footer -->
  <footer class="site-footer" id="site-footer">
    <div class="footer-links">
      <a href="how-to-play.html" data-i18n="footer.howtoplay">玩法说明</a>
      <span class="footer-dot">·</span>
      <a href="glossary.html" data-i18n="footer.glossary">术语表</a>
      <span class="footer-dot">·</span>
      <a href="about.html" data-i18n="footer.about">关于</a>
      <span class="footer-dot">·</span>
      <a href="contact.html" data-i18n="footer.contact">联系我们</a>
      <span class="footer-dot">·</span>
      <a href="privacy.html" data-i18n="footer.privacy">隐私政策</a>
      <span class="footer-dot">·</span>
      <a href="terms.html" data-i18n="footer.terms">使用条款</a>
      <span class="footer-dot">·</span>
      <a href="https://goldenroadlol.com/" target="_blank" rel="noopener" data-i18n="footer.friendlink">友情链接：Golden Road LoL (原版)</a>
      <span class="footer-dot">·</span>
      <span class="footer-disc" style="display:inline;margin:0;" data-i18n="footer.disclaimer">非 Riot Games 官方产品</span>
    </div>
    <div class="visitor-counter" id="visitor-counter" style="display: none;">
      <span class="visitor-icon">👥</span>
      <span id="visitor-text" data-i18n="footer.visitor.count" data-i18n-params='{"count":"..."}'>已有 ... 位经理踏上黄金之路</span>
    </div>
  </footer>


  <!-- Scripts -->
  <script src="i18n.js"></script>
  <script src="data.js"></script>
  <script src="engine.js"></script>
  <script src="game.js"></script>
</body>
</html>

/**
 * League of Legends Golden Road — Historical Data
 * ================================================
 * This file provides ALL the historical data used in the
 * LoL Golden Road esports roster draft game, including:
 *
 *   • REGIONS   – The four major competitive regions
 *   • TEAMS     – Teams grouped by region, each with the years they appear
 *   • ROSTERS   – Player rosters keyed by "teamId-year"
 *   • MSI_YEARS – Years available for the MSI challenge mode
 *
 * Ratings reflect historical performance:
 *   World Champions rosters  → average 85-95
 *   Strong non-champion       → average 75-85
 *   Average rosters            → average 65-75
 */

// ---------------------------------------------------------------------------
// 1. REGIONS
// ---------------------------------------------------------------------------
const REGIONS = [
  { id: 'lpl', name: 'LPL', nameZh: 'LPL (中国)' },
  { id: 'lck', name: 'LCK', nameZh: 'LCK (韩国)' },
  { id: 'lec', name: 'LEC', nameZh: 'LEC (欧洲)' },
  { id: 'lcs', name: 'LCS', nameZh: 'LCS (北美)' },
];

// ---------------------------------------------------------------------------
// 2. TEAMS  –  keyed by region id
// ---------------------------------------------------------------------------
const TEAMS = {
  // ── LPL ──────────────────────────────────────────────────────────────────
  lpl: [
    { id: 'edg',  name: 'EDward Gaming',       abbr: 'EDG',  years: [2014, 2015, 2016, 2021, 2022] },
    { id: 'rng',  name: 'Royal Never Give Up',  abbr: 'RNG',  years: [2014, 2015, 2016, 2017, 2018, 2021, 2022] },
    { id: 'ig',   name: 'Invictus Gaming',      abbr: 'IG',   years: [2015, 2018, 2019] },
    { id: 'fpx',  name: 'FunPlus Phoenix',      abbr: 'FPX',  years: [2019, 2020, 2021] },
    { id: 'tes',  name: 'Top Esports',          abbr: 'TES',  years: [2020, 2021, 2024] },
    { id: 'wbg',  name: 'Weibo Gaming',         abbr: 'WBG',  years: [2020, 2023, 2024, 2025] },
    { id: 'jdg',  name: 'JD Gaming',            abbr: 'JDG',  years: [2019, 2020, 2023, 2024, 2025] },
    { id: 'blg',  name: 'Bilibili Gaming',      abbr: 'BLG',  years: [2023, 2024, 2025] },
    { id: 'we',   name: 'Team WE',              abbr: 'WE',   years: [2013, 2014, 2017] },
    { id: 'omg',  name: 'Oh My God',            abbr: 'OMG',  years: [2013, 2014] },
    { id: 'lng',  name: 'LNG Esports',          abbr: 'LNG',  years: [2021, 2023] },
  ],

  // ── LCK ──────────────────────────────────────────────────────────────────
  lck: [
    { id: 't1',   name: 'T1',                   abbr: 'T1',   years: [2013, 2015, 2016, 2017, 2019, 2022, 2023, 2024, 2025] },
    { id: 'geng', name: 'Gen.G',                abbr: 'GEN',  years: [2014, 2016, 2017, 2023, 2024, 2025] },
    { id: 'dk',   name: 'Dplus KIA',            abbr: 'DK',   years: [2019, 2020, 2021, 2022] },
    { id: 'kt',   name: 'KT Rolster',           abbr: 'KT',   years: [2013, 2014, 2017, 2018] },
    { id: 'drx',  name: 'DRX',                  abbr: 'DRX',  years: [2020, 2022] },
    { id: 'hle',  name: 'Hanwha Life Esports',  abbr: 'HLE',  years: [2021, 2024] },
    { id: 'af',   name: 'Afreeca Freecs',       abbr: 'AF',   years: [2018] },
  ],

  // ── LEC ──────────────────────────────────────────────────────────────────
  lec: [
    { id: 'g2',   name: 'G2 Esports',           abbr: 'G2',   years: [2017, 2018, 2019, 2020, 2022, 2024] },
    { id: 'fnc',  name: 'Fnatic',               abbr: 'FNC',  years: [2013, 2015, 2018, 2019, 2020] },
    { id: 'mad',  name: 'MAD Lions',            abbr: 'MAD',  years: [2021, 2022] },
    { id: 'rge',  name: 'Rogue',                abbr: 'RGE',  years: [2020, 2022] },
  ],

  // ── LCS ──────────────────────────────────────────────────────────────────
  lcs: [
    { id: 'c9',   name: 'Cloud9',               abbr: 'C9',   years: [2013, 2014, 2018, 2021, 2023] },
    { id: 'tl',   name: 'Team Liquid',           abbr: 'TL',   years: [2018, 2019, 2023] },
    { id: 'tsm',  name: 'TSM',                  abbr: 'TSM',  years: [2014, 2016, 2017, 2020] },
    { id: '100t', name: '100 Thieves',           abbr: '100T', years: [2021, 2023] },
  ],
};

// ---------------------------------------------------------------------------
// 3. ROSTERS  –  keyed by "teamId-year"
// ---------------------------------------------------------------------------
const ROSTERS = {

  // =========================================================================
  //  LPL
  // =========================================================================

  // ── EDG ──────────────────────────────────────────────────────────────────
  'edg-2014': {
    players: [
      { name: 'Koro1',     role: 'top',     rating: 78 },
      { name: 'ClearLove', role: 'jungle',  rating: 82 },
      { name: 'U',         role: 'mid',     rating: 72 },
      { name: 'NaMei',     role: 'adc',     rating: 80 },
      { name: 'Fzzf',      role: 'support', rating: 74 },
    ],
  },
  'edg-2015': {
    // MSI 2015 Champions
    players: [
      { name: 'Koro1',     role: 'top',     rating: 80 },
      { name: 'ClearLove', role: 'jungle',  rating: 85 },
      { name: 'PawN',      role: 'mid',     rating: 84 },
      { name: 'Deft',      role: 'adc',     rating: 88 },
      { name: 'Meiko',     role: 'support', rating: 82 },
    ],
  },
  'edg-2016': {
    players: [
      { name: 'Mouse',     role: 'top',     rating: 68 },
      { name: 'ClearLove', role: 'jungle',  rating: 80 },
      { name: 'Scout',     role: 'mid',     rating: 76 },
      { name: 'Deft',      role: 'adc',     rating: 85 },
      { name: 'Meiko',     role: 'support', rating: 80 },
    ],
  },
  'edg-2021': {
    // Worlds 2021 Champions
    players: [
      { name: 'Flandre',   role: 'top',     rating: 88 },
      { name: 'JieJie',    role: 'jungle',  rating: 90 },
      { name: 'Scout',     role: 'mid',     rating: 92 },
      { name: 'Viper',     role: 'adc',     rating: 95 },
      { name: 'Meiko',     role: 'support', rating: 91 },
    ],
  },
  'edg-2022': {
    players: [
      { name: 'Flandre',   role: 'top',     rating: 80 },
      { name: 'JieJie',    role: 'jungle',  rating: 78 },
      { name: 'Scout',     role: 'mid',     rating: 82 },
      { name: 'Viper',     role: 'adc',     rating: 84 },
      { name: 'Meiko',     role: 'support', rating: 82 },
    ],
  },

  // ── RNG ──────────────────────────────────────────────────────────────────
  'rng-2014': {
    players: [
      { name: 'Cola',      role: 'top',     rating: 68 },
      { name: 'inSec',     role: 'jungle',  rating: 72 },
      { name: 'Corn',      role: 'mid',     rating: 65 },
      { name: 'Uzi',       role: 'adc',     rating: 88 },
      { name: 'Zero',      role: 'support', rating: 66 },
    ],
  },
  'rng-2015': {
    players: [
      { name: 'Looper',    role: 'top',     rating: 72 },
      { name: 'Mlxg',      role: 'jungle',  rating: 76 },
      { name: 'Xiaohu',    role: 'mid',     rating: 74 },
      { name: 'Uzi',       role: 'adc',     rating: 90 },
      { name: 'Mata',      role: 'support', rating: 78 },
    ],
  },
  'rng-2016': {
    players: [
      { name: 'Looper',    role: 'top',     rating: 70 },
      { name: 'Mlxg',      role: 'jungle',  rating: 78 },
      { name: 'Xiaohu',    role: 'mid',     rating: 78 },
      { name: 'Uzi',       role: 'adc',     rating: 90 },
      { name: 'Mata',      role: 'support', rating: 76 },
    ],
  },
  'rng-2017': {
    players: [
      { name: 'Letme',     role: 'top',     rating: 74 },
      { name: 'Mlxg',      role: 'jungle',  rating: 80 },
      { name: 'Xiaohu',    role: 'mid',     rating: 82 },
      { name: 'Uzi',       role: 'adc',     rating: 92 },
      { name: 'Ming',      role: 'support', rating: 80 },
    ],
  },
  'rng-2018': {
    // MSI 2018 Champions
    players: [
      { name: 'Letme',     role: 'top',     rating: 78 },
      { name: 'Mlxg',      role: 'jungle',  rating: 82 },
      { name: 'Xiaohu',    role: 'mid',     rating: 85 },
      { name: 'Uzi',       role: 'adc',     rating: 95 },
      { name: 'Ming',      role: 'support', rating: 84 },
    ],
  },
  'rng-2021': {
    // MSI 2021 Champions
    players: [
      { name: 'Xiaohu',    role: 'top',     rating: 86 },
      { name: 'Wei',       role: 'jungle',  rating: 84 },
      { name: 'Cryin',     role: 'mid',     rating: 72 },
      { name: 'GALA',      role: 'adc',     rating: 86 },
      { name: 'Ming',      role: 'support', rating: 84 },
    ],
  },
  'rng-2022': {
    // MSI 2022 Champions
    players: [
      { name: 'Breathe',   role: 'top',     rating: 78 },
      { name: 'Wei',       role: 'jungle',  rating: 82 },
      { name: 'Xiaohu',    role: 'mid',     rating: 84 },
      { name: 'GALA',      role: 'adc',     rating: 85 },
      { name: 'Ming',      role: 'support', rating: 85 },
    ],
  },

  // ── IG ───────────────────────────────────────────────────────────────────
  'ig-2015': {
    players: [
      { name: 'Zzitai',    role: 'top',     rating: 72 },
      { name: 'Kakao',     role: 'jungle',  rating: 74 },
      { name: 'Rookie',    role: 'mid',     rating: 84 },
      { name: 'Kid',       role: 'adc',     rating: 62 },
      { name: 'Kitties',   role: 'support', rating: 58 },
    ],
  },
  'ig-2018': {
    // Worlds 2018 Champions
    players: [
      { name: 'TheShy',    role: 'top',     rating: 96 },
      { name: 'Ning',      role: 'jungle',  rating: 86 },
      { name: 'Rookie',    role: 'mid',     rating: 95 },
      { name: 'JackeyLove', role: 'adc',    rating: 88 },
      { name: 'Baolan',    role: 'support', rating: 72 },
    ],
  },
  'ig-2019': {
    players: [
      { name: 'TheShy',    role: 'top',     rating: 90 },
      { name: 'Ning',      role: 'jungle',  rating: 78 },
      { name: 'Rookie',    role: 'mid',     rating: 90 },
      { name: 'JackeyLove', role: 'adc',    rating: 86 },
      { name: 'Baolan',    role: 'support', rating: 70 },
    ],
  },

  // ── FPX ──────────────────────────────────────────────────────────────────
  'fpx-2019': {
    // Worlds 2019 Champions
    players: [
      { name: 'GimGoon',   role: 'top',     rating: 78 },
      { name: 'Tian',      role: 'jungle',  rating: 92 },
      { name: 'Doinb',     role: 'mid',     rating: 90 },
      { name: 'Lwx',       role: 'adc',     rating: 82 },
      { name: 'Crisp',     role: 'support', rating: 84 },
    ],
  },
  'fpx-2020': {
    players: [
      { name: 'Khan',      role: 'top',     rating: 78 },
      { name: 'Tian',      role: 'jungle',  rating: 74 },
      { name: 'Doinb',     role: 'mid',     rating: 82 },
      { name: 'Lwx',       role: 'adc',     rating: 78 },
      { name: 'Crisp',     role: 'support', rating: 80 },
    ],
  },
  'fpx-2021': {
    players: [
      { name: 'Nuguri',    role: 'top',     rating: 82 },
      { name: 'Tian',      role: 'jungle',  rating: 70 },
      { name: 'Doinb',     role: 'mid',     rating: 78 },
      { name: 'Lwx',       role: 'adc',     rating: 74 },
      { name: 'Crisp',     role: 'support', rating: 76 },
    ],
  },

  // ── TES ──────────────────────────────────────────────────────────────────
  'tes-2020': {
    players: [
      { name: '369',       role: 'top',     rating: 84 },
      { name: 'Karsa',     role: 'jungle',  rating: 80 },
      { name: 'knight',    role: 'mid',     rating: 90 },
      { name: 'JackeyLove', role: 'adc',    rating: 88 },
      { name: 'yuyanjia',  role: 'support', rating: 70 },
    ],
  },
  'tes-2021': {
    players: [
      { name: '369',       role: 'top',     rating: 82 },
      { name: 'Karsa',     role: 'jungle',  rating: 76 },
      { name: 'knight',    role: 'mid',     rating: 88 },
      { name: 'JackeyLove', role: 'adc',    rating: 86 },
      { name: 'Zhuo',      role: 'support', rating: 68 },
    ],
  },
  'tes-2024': {
    players: [
      { name: '369',       role: 'top',     rating: 82 },
      { name: 'Tian',      role: 'jungle',  rating: 76 },
      { name: 'Creme',     role: 'mid',     rating: 78 },
      { name: 'JackeyLove', role: 'adc',    rating: 84 },
      { name: 'Meiko',     role: 'support', rating: 80 },
    ],
  },

  // ── WBG / Suning ────────────────────────────────────────────────────────
  'wbg-2020': {
    // Worlds 2020 Finalists (as Suning)
    players: [
      { name: 'Bin',       role: 'top',     rating: 84 },
      { name: 'SofM',      role: 'jungle',  rating: 86 },
      { name: 'Angel',     role: 'mid',     rating: 78 },
      { name: 'huanfeng',  role: 'adc',     rating: 82 },
      { name: 'SwordArt',  role: 'support', rating: 80 },
    ],
  },
  'wbg-2023': {
    players: [
      { name: 'TheShy',    role: 'top',     rating: 80 },
      { name: 'Weiwei',    role: 'jungle',  rating: 78 },
      { name: 'Xiaohu',    role: 'mid',     rating: 80 },
      { name: 'Light',     role: 'adc',     rating: 78 },
      { name: 'Crisp',     role: 'support', rating: 76 },
    ],
  },
  'wbg-2024': {
    players: [
      { name: 'Bin',       role: 'top',     rating: 86 },
      { name: 'Weiwei',    role: 'jungle',  rating: 80 },
      { name: 'Xiaohu',    role: 'mid',     rating: 78 },
      { name: 'Light',     role: 'adc',     rating: 76 },
      { name: 'Crisp',     role: 'support', rating: 78 },
    ],
  },
  'wbg-2025': {
    players: [
      { name: 'Breathe',   role: 'top',     rating: 80 },
      { name: 'Tian',      role: 'jungle',  rating: 82 },
      { name: 'Xiaohu',    role: 'mid',     rating: 80 },
      { name: 'Light',     role: 'adc',     rating: 78 },
      { name: 'Hang',      role: 'support', rating: 78 },
    ],
  },

  // ── JDG ──────────────────────────────────────────────────────────────────
  'jdg-2019': {
    players: [
      { name: 'Zoom',      role: 'top',     rating: 82 },
      { name: 'Flawless',  role: 'jungle',  rating: 72 },
      { name: 'Yagao',     role: 'mid',     rating: 78 },
      { name: 'Imp',       role: 'adc',     rating: 74 },
      { name: 'LvMao',     role: 'support', rating: 72 },
    ],
  },
  'jdg-2020': {
    players: [
      { name: 'Zoom',      role: 'top',     rating: 84 },
      { name: 'Kanavi',    role: 'jungle',  rating: 88 },
      { name: 'Yagao',     role: 'mid',     rating: 80 },
      { name: 'LokeN',     role: 'adc',     rating: 76 },
      { name: 'LvMao',     role: 'support', rating: 74 },
    ],
  },
  'jdg-2023': {
    // MSI 2023 Champions
    players: [
      { name: '369',       role: 'top',     rating: 90 },
      { name: 'Kanavi',    role: 'jungle',  rating: 90 },
      { name: 'knight',    role: 'mid',     rating: 92 },
      { name: 'Ruler',     role: 'adc',     rating: 92 },
      { name: 'Missing',   role: 'support', rating: 84 },
    ],
  },
  'jdg-2024': {
    players: [
      { name: '369',       role: 'top',     rating: 84 },
      { name: 'Kanavi',    role: 'jungle',  rating: 84 },
      { name: 'knight',    role: 'mid',     rating: 86 },
      { name: 'Ruler',     role: 'adc',     rating: 86 },
      { name: 'Missing',   role: 'support', rating: 80 },
    ],
  },
  'jdg-2025': {
    players: [
      { name: 'Ale',       role: 'top',     rating: 80 },
      { name: 'Xun',       role: 'jungle',  rating: 82 },
      { name: 'Scout',     role: 'mid',     rating: 86 },
      { name: 'Peyz',      role: 'adc',     rating: 84 },
      { name: 'Missing',   role: 'support', rating: 82 },
    ],
  },

  // ── BLG ──────────────────────────────────────────────────────────────────
  'blg-2023': {
    players: [
      { name: 'Bin',       role: 'top',     rating: 84 },
      { name: 'Xun',       role: 'jungle',  rating: 80 },
      { name: 'Yagao',     role: 'mid',     rating: 76 },
      { name: 'Elk',       role: 'adc',     rating: 80 },
      { name: 'ON',        role: 'support', rating: 76 },
    ],
  },
  'blg-2024': {
    players: [
      { name: 'Bin',       role: 'top',     rating: 88 },
      { name: 'Xun',       role: 'jungle',  rating: 84 },
      { name: 'knight',    role: 'mid',     rating: 88 },
      { name: 'Elk',       role: 'adc',     rating: 84 },
      { name: 'ON',        role: 'support', rating: 80 },
    ],
  },
  'blg-2025': {
    players: [
      { name: 'Bin',       role: 'top',     rating: 88 },
      { name: 'Wei',       role: 'jungle',  rating: 84 },
      { name: 'knight',    role: 'mid',     rating: 88 },
      { name: 'Elk',       role: 'adc',     rating: 84 },
      { name: 'ON',        role: 'support', rating: 80 },
    ],
  },

  // ── WE ───────────────────────────────────────────────────────────────────
  'we-2013': {
    players: [
      { name: 'CaoMei',    role: 'top',     rating: 72 },
      { name: 'Ruo',       role: 'jungle',  rating: 62 },
      { name: 'Misaya',    role: 'mid',     rating: 74 },
      { name: 'WeiXiao',   role: 'adc',     rating: 84 },
      { name: 'Fzzf',      role: 'support', rating: 68 },
    ],
  },
  'we-2014': {
    players: [
      { name: 'Aluka',     role: 'top',     rating: 66 },
      { name: 'Spirit',    role: 'jungle',  rating: 74 },
      { name: 'xiye',      role: 'mid',     rating: 70 },
      { name: 'Mystic',    role: 'adc',     rating: 72 },
      { name: 'Conan',     role: 'support', rating: 62 },
    ],
  },
  'we-2017': {
    // MSI 2017 Semifinalists
    players: [
      { name: '957',       role: 'top',     rating: 78 },
      { name: 'Condi',     role: 'jungle',  rating: 80 },
      { name: 'xiye',      role: 'mid',     rating: 82 },
      { name: 'Mystic',    role: 'adc',     rating: 80 },
      { name: 'Ben',       role: 'support', rating: 72 },
    ],
  },

  // ── OMG ──────────────────────────────────────────────────────────────────
  'omg-2013': {
    players: [
      { name: 'Gogoing',   role: 'top',     rating: 78 },
      { name: 'LoveLin',   role: 'jungle',  rating: 74 },
      { name: 'Cool',      role: 'mid',     rating: 80 },
      { name: 'san',       role: 'adc',     rating: 74 },
      { name: 'Bigpomelo', role: 'support', rating: 68 },
    ],
  },
  'omg-2014': {
    // Worlds 2014 Semifinalists
    players: [
      { name: 'Gogoing',   role: 'top',     rating: 80 },
      { name: 'LoveLin',   role: 'jungle',  rating: 76 },
      { name: 'Cool',      role: 'mid',     rating: 82 },
      { name: 'san',       role: 'adc',     rating: 72 },
      { name: 'DaDa7',     role: 'support', rating: 64 },
    ],
  },

  // ── LNG ──────────────────────────────────────────────────────────────────
  'lng-2021': {
    players: [
      { name: 'Ale',       role: 'top',     rating: 78 },
      { name: 'Tarzan',    role: 'jungle',  rating: 84 },
      { name: 'icon',      role: 'mid',     rating: 72 },
      { name: 'Light',     role: 'adc',     rating: 74 },
      { name: 'Iwandy',    role: 'support', rating: 70 },
    ],
  },
  'lng-2023': {
    players: [
      { name: 'Zika',      role: 'top',     rating: 78 },
      { name: 'Tarzan',    role: 'jungle',  rating: 82 },
      { name: 'Scout',     role: 'mid',     rating: 84 },
      { name: 'GALA',      role: 'adc',     rating: 82 },
      { name: 'Hang',      role: 'support', rating: 74 },
    ],
  },

  // =========================================================================
  //  LCK
  // =========================================================================

  // ── T1 / SKT ─────────────────────────────────────────────────────────────
  't1-2013': {
    // Worlds 2013 Champions (as SKT T1)
    players: [
      { name: 'Impact',    role: 'top',     rating: 82 },
      { name: 'Bengi',     role: 'jungle',  rating: 80 },
      { name: 'Faker',     role: 'mid',     rating: 94 },
      { name: 'Piglet',    role: 'adc',     rating: 82 },
      { name: 'PoohManDu', role: 'support', rating: 74 },
    ],
  },
  't1-2015': {
    // Worlds 2015 Champions
    players: [
      { name: 'MaRin',     role: 'top',     rating: 90 },
      { name: 'Bengi',     role: 'jungle',  rating: 82 },
      { name: 'Faker',     role: 'mid',     rating: 96 },
      { name: 'Bang',      role: 'adc',     rating: 86 },
      { name: 'Wolf',      role: 'support', rating: 78 },
    ],
  },
  't1-2016': {
    // Worlds 2016 Champions
    players: [
      { name: 'Duke',      role: 'top',     rating: 80 },
      { name: 'Blank',     role: 'jungle',  rating: 72 },
      { name: 'Faker',     role: 'mid',     rating: 94 },
      { name: 'Bang',      role: 'adc',     rating: 88 },
      { name: 'Wolf',      role: 'support', rating: 80 },
    ],
  },
  't1-2017': {
    // Worlds 2017 Finalist
    players: [
      { name: 'Huni',      role: 'top',     rating: 82 },
      { name: 'Peanut',    role: 'jungle',  rating: 82 },
      { name: 'Faker',     role: 'mid',     rating: 95 },
      { name: 'Bang',      role: 'adc',     rating: 84 },
      { name: 'Wolf',      role: 'support', rating: 76 },
    ],
  },
  't1-2019': {
    // Worlds 2019 Semifinalist
    players: [
      { name: 'Khan',      role: 'top',     rating: 82 },
      { name: 'Clid',      role: 'jungle',  rating: 86 },
      { name: 'Faker',     role: 'mid',     rating: 90 },
      { name: 'Teddy',     role: 'adc',     rating: 84 },
      { name: 'Mata',      role: 'support', rating: 78 },
    ],
  },
  't1-2022': {
    // Worlds 2022 Finalist
    players: [
      { name: 'Zeus',      role: 'top',     rating: 88 },
      { name: 'Oner',      role: 'jungle',  rating: 86 },
      { name: 'Faker',     role: 'mid',     rating: 92 },
      { name: 'Gumayusi',  role: 'adc',     rating: 86 },
      { name: 'Keria',     role: 'support', rating: 90 },
    ],
  },
  't1-2023': {
    // Worlds 2023 Champions
    players: [
      { name: 'Zeus',      role: 'top',     rating: 90 },
      { name: 'Oner',      role: 'jungle',  rating: 88 },
      { name: 'Faker',     role: 'mid',     rating: 93 },
      { name: 'Gumayusi',  role: 'adc',     rating: 88 },
      { name: 'Keria',     role: 'support', rating: 92 },
    ],
  },
  't1-2024': {
    // Worlds 2024 Champions
    players: [
      { name: 'Zeus',      role: 'top',     rating: 90 },
      { name: 'Oner',      role: 'jungle',  rating: 90 },
      { name: 'Faker',     role: 'mid',     rating: 92 },
      { name: 'Gumayusi',  role: 'adc',     rating: 86 },
      { name: 'Keria',     role: 'support', rating: 92 },
    ],
  },
  't1-2025': {
    // Worlds 2025 Champions
    players: [
      { name: 'Doran',     role: 'top',     rating: 84 },
      { name: 'Oner',      role: 'jungle',  rating: 92 },
      { name: 'Faker',     role: 'mid',     rating: 94 },
      { name: 'Gumayusi',  role: 'adc',     rating: 88 },
      { name: 'Keria',     role: 'support', rating: 94 },
    ],
  },

  // ── Gen.G / Samsung ──────────────────────────────────────────────────────
  'geng-2014': {
    // Worlds 2014 Champions (as Samsung White)
    players: [
      { name: 'Looper',    role: 'top',     rating: 78 },
      { name: 'DanDy',     role: 'jungle',  rating: 92 },
      { name: 'PawN',      role: 'mid',     rating: 84 },
      { name: 'imp',       role: 'adc',     rating: 88 },
      { name: 'Mata',      role: 'support', rating: 92 },
    ],
  },
  'geng-2016': {
    // As Samsung Galaxy
    players: [
      { name: 'CuVee',     role: 'top',     rating: 76 },
      { name: 'Ambition',  role: 'jungle',  rating: 76 },
      { name: 'Crown',     role: 'mid',     rating: 80 },
      { name: 'Ruler',     role: 'adc',     rating: 78 },
      { name: 'CoreJJ',    role: 'support', rating: 74 },
    ],
  },
  'geng-2017': {
    // Worlds 2017 Champions (as Samsung Galaxy)
    players: [
      { name: 'CuVee',     role: 'top',     rating: 82 },
      { name: 'Ambition',  role: 'jungle',  rating: 80 },
      { name: 'Crown',     role: 'mid',     rating: 82 },
      { name: 'Ruler',     role: 'adc',     rating: 84 },
      { name: 'CoreJJ',    role: 'support', rating: 82 },
    ],
  },
  'geng-2023': {
    players: [
      { name: 'Doran',     role: 'top',     rating: 82 },
      { name: 'Canyon',    role: 'jungle',  rating: 88 },
      { name: 'Chovy',     role: 'mid',     rating: 92 },
      { name: 'Peyz',      role: 'adc',     rating: 80 },
      { name: 'Delight',   role: 'support', rating: 76 },
    ],
  },
  'geng-2024': {
    players: [
      { name: 'Kiin',      role: 'top',     rating: 88 },
      { name: 'Canyon',    role: 'jungle',  rating: 90 },
      { name: 'Chovy',     role: 'mid',     rating: 94 },
      { name: 'Peyz',      role: 'adc',     rating: 82 },
      { name: 'Lehends',   role: 'support', rating: 84 },
    ],
  },
  'geng-2025': {
    players: [
      { name: 'Kiin',      role: 'top',     rating: 88 },
      { name: 'Canyon',    role: 'jungle',  rating: 90 },
      { name: 'Chovy',     role: 'mid',     rating: 94 },
      { name: 'Ruler',     role: 'adc',     rating: 90 },
      { name: 'Duro',      role: 'support', rating: 82 },
    ],
  },

  // ── DK / DWG ─────────────────────────────────────────────────────────────
  'dk-2019': {
    players: [
      { name: 'Nuguri',    role: 'top',     rating: 84 },
      { name: 'Canyon',    role: 'jungle',  rating: 86 },
      { name: 'ShowMaker', role: 'mid',     rating: 86 },
      { name: 'Nuclear',   role: 'adc',     rating: 72 },
      { name: 'BeryL',     role: 'support', rating: 78 },
    ],
  },
  'dk-2020': {
    // Worlds 2020 Champions (as DAMWON Gaming)
    players: [
      { name: 'Nuguri',    role: 'top',     rating: 92 },
      { name: 'Canyon',    role: 'jungle',  rating: 94 },
      { name: 'ShowMaker', role: 'mid',     rating: 94 },
      { name: 'Ghost',     role: 'adc',     rating: 78 },
      { name: 'BeryL',     role: 'support', rating: 84 },
    ],
  },
  'dk-2021': {
    // Worlds 2021 Finalist, MSI 2021 Champions (as DK)
    players: [
      { name: 'Khan',      role: 'top',     rating: 84 },
      { name: 'Canyon',    role: 'jungle',  rating: 92 },
      { name: 'ShowMaker', role: 'mid',     rating: 92 },
      { name: 'Ghost',     role: 'adc',     rating: 76 },
      { name: 'BeryL',     role: 'support', rating: 82 },
    ],
  },
  'dk-2022': {
    players: [
      { name: 'Nuguri',    role: 'top',     rating: 82 },
      { name: 'Canyon',    role: 'jungle',  rating: 88 },
      { name: 'ShowMaker', role: 'mid',     rating: 88 },
      { name: 'deokdam',   role: 'adc',     rating: 76 },
      { name: 'Kellin',    role: 'support', rating: 72 },
    ],
  },

  // ── KT Rolster ───────────────────────────────────────────────────────────
  'kt-2013': {
    // KT Bullets
    players: [
      { name: 'inSec',     role: 'top',     rating: 76 },
      { name: 'KaKAO',     role: 'jungle',  rating: 82 },
      { name: 'Ryu',       role: 'mid',     rating: 78 },
      { name: 'Score',     role: 'adc',     rating: 74 },
      { name: 'Mafa',      role: 'support', rating: 72 },
    ],
  },
  'kt-2014': {
    // KT Arrows – OGN Summer 2014 Champions
    players: [
      { name: 'Ssumday',   role: 'top',     rating: 80 },
      { name: 'KaKAO',     role: 'jungle',  rating: 86 },
      { name: 'Rookie',    role: 'mid',     rating: 84 },
      { name: 'Arrow',     role: 'adc',     rating: 76 },
      { name: 'Hachani',   role: 'support', rating: 68 },
    ],
  },
  'kt-2017': {
    players: [
      { name: 'Smeb',      role: 'top',     rating: 86 },
      { name: 'Score',     role: 'jungle',  rating: 84 },
      { name: 'PawN',      role: 'mid',     rating: 78 },
      { name: 'Deft',      role: 'adc',     rating: 86 },
      { name: 'Mata',      role: 'support', rating: 84 },
    ],
  },
  'kt-2018': {
    // Worlds 2018 Quarterfinalist
    players: [
      { name: 'Smeb',      role: 'top',     rating: 88 },
      { name: 'Score',     role: 'jungle',  rating: 86 },
      { name: 'Ucal',      role: 'mid',     rating: 82 },
      { name: 'Deft',      role: 'adc',     rating: 88 },
      { name: 'Mata',      role: 'support', rating: 86 },
    ],
  },

  // ── DRX ──────────────────────────────────────────────────────────────────
  'drx-2020': {
    players: [
      { name: 'Doran',     role: 'top',     rating: 76 },
      { name: 'Pyosik',    role: 'jungle',  rating: 74 },
      { name: 'Chovy',     role: 'mid',     rating: 90 },
      { name: 'Deft',      role: 'adc',     rating: 84 },
      { name: 'Keria',     role: 'support', rating: 82 },
    ],
  },
  'drx-2022': {
    // Worlds 2022 Champions
    players: [
      { name: 'Kingen',    role: 'top',     rating: 80 },
      { name: 'Pyosik',    role: 'jungle',  rating: 76 },
      { name: 'Zeka',      role: 'mid',     rating: 86 },
      { name: 'Deft',      role: 'adc',     rating: 86 },
      { name: 'BeryL',     role: 'support', rating: 78 },
    ],
  },

  // ── HLE ──────────────────────────────────────────────────────────────────
  'hle-2021': {
    // Worlds 2021 Semifinalist
    players: [
      { name: 'Morgan',    role: 'top',     rating: 66 },
      { name: 'Willer',    role: 'jungle',  rating: 66 },
      { name: 'Chovy',     role: 'mid',     rating: 90 },
      { name: 'Deft',      role: 'adc',     rating: 84 },
      { name: 'Vsta',      role: 'support', rating: 68 },
    ],
  },
  'hle-2024': {
    // Worlds 2024 Finalist
    players: [
      { name: 'Doran',     role: 'top',     rating: 82 },
      { name: 'Peanut',    role: 'jungle',  rating: 82 },
      { name: 'Zeka',      role: 'mid',     rating: 84 },
      { name: 'Viper',     role: 'adc',     rating: 86 },
      { name: 'Delight',   role: 'support', rating: 78 },
    ],
  },

  // ── AF / KDF ─────────────────────────────────────────────────────────────
  'af-2018': {
    // Afreeca Freecs
    players: [
      { name: 'Kiin',      role: 'top',     rating: 86 },
      { name: 'Spirit',    role: 'jungle',  rating: 74 },
      { name: 'Kuro',      role: 'mid',     rating: 76 },
      { name: 'Kramer',    role: 'adc',     rating: 74 },
      { name: 'TuSin',     role: 'support', rating: 72 },
    ],
  },

  // =========================================================================
  //  LEC
  // =========================================================================

  // ── G2 Esports ───────────────────────────────────────────────────────────
  'g2-2017': {
    // MSI 2017 Finalist
    players: [
      { name: 'Expect',    role: 'top',     rating: 70 },
      { name: 'Trick',     role: 'jungle',  rating: 74 },
      { name: 'Perkz',     role: 'mid',     rating: 82 },
      { name: 'Zven',      role: 'adc',     rating: 80 },
      { name: 'Mithy',     role: 'support', rating: 78 },
    ],
  },
  'g2-2018': {
    // Worlds 2018 Semifinalist
    players: [
      { name: 'Wunder',    role: 'top',     rating: 80 },
      { name: 'Jankos',    role: 'jungle',  rating: 82 },
      { name: 'Perkz',     role: 'mid',     rating: 86 },
      { name: 'Hjarnan',   role: 'adc',     rating: 72 },
      { name: 'Wadid',     role: 'support', rating: 70 },
    ],
  },
  'g2-2019': {
    // MSI 2019 Champions, Worlds 2019 Finalist
    players: [
      { name: 'Wunder',    role: 'top',     rating: 88 },
      { name: 'Jankos',    role: 'jungle',  rating: 88 },
      { name: 'Caps',      role: 'mid',     rating: 92 },
      { name: 'Perkz',     role: 'adc',     rating: 86 },
      { name: 'Mikyx',     role: 'support', rating: 84 },
    ],
  },
  'g2-2020': {
    // Worlds 2020 Semifinalist
    players: [
      { name: 'Wunder',    role: 'top',     rating: 84 },
      { name: 'Jankos',    role: 'jungle',  rating: 84 },
      { name: 'Caps',      role: 'mid',     rating: 90 },
      { name: 'Perkz',     role: 'adc',     rating: 82 },
      { name: 'Mikyx',     role: 'support', rating: 82 },
    ],
  },
  'g2-2022': {
    players: [
      { name: 'BrokenBlade', role: 'top',   rating: 80 },
      { name: 'Jankos',    role: 'jungle',  rating: 80 },
      { name: 'caPs',      role: 'mid',     rating: 84 },
      { name: 'Flakked',   role: 'adc',     rating: 72 },
      { name: 'Targamas',  role: 'support', rating: 70 },
    ],
  },
  'g2-2024': {
    players: [
      { name: 'BrokenBlade', role: 'top',   rating: 78 },
      { name: 'Yike',      role: 'jungle',  rating: 76 },
      { name: 'Caps',      role: 'mid',     rating: 84 },
      { name: 'Hans Sama', role: 'adc',     rating: 78 },
      { name: 'Mikyx',     role: 'support', rating: 76 },
    ],
  },

  // ── Fnatic ───────────────────────────────────────────────────────────────
  'fnc-2013': {
    // Worlds 2013 Semifinalist
    players: [
      { name: 'sOAZ',      role: 'top',     rating: 78 },
      { name: 'Cyanide',   role: 'jungle',  rating: 72 },
      { name: 'xPeke',     role: 'mid',     rating: 82 },
      { name: 'Puszu',     role: 'adc',     rating: 70 },
      { name: 'YellOwStaR', role: 'support', rating: 76 },
    ],
  },
  'fnc-2015': {
    // Worlds 2015 Semifinalist
    players: [
      { name: 'Huni',      role: 'top',     rating: 84 },
      { name: 'Reignover', role: 'jungle',  rating: 82 },
      { name: 'Febiven',   role: 'mid',     rating: 82 },
      { name: 'Rekkles',   role: 'adc',     rating: 84 },
      { name: 'YellOwStaR', role: 'support', rating: 80 },
    ],
  },
  'fnc-2018': {
    // Worlds 2018 Finalist
    players: [
      { name: 'Bwipo',     role: 'top',     rating: 80 },
      { name: 'Broxah',    role: 'jungle',  rating: 82 },
      { name: 'Caps',      role: 'mid',     rating: 88 },
      { name: 'Rekkles',   role: 'adc',     rating: 84 },
      { name: 'Hylissang', role: 'support', rating: 78 },
    ],
  },
  'fnc-2019': {
    players: [
      { name: 'Bwipo',     role: 'top',     rating: 78 },
      { name: 'Broxah',    role: 'jungle',  rating: 78 },
      { name: 'Nemesis',   role: 'mid',     rating: 76 },
      { name: 'Rekkles',   role: 'adc',     rating: 82 },
      { name: 'Hylissang', role: 'support', rating: 76 },
    ],
  },
  'fnc-2020': {
    players: [
      { name: 'Bwipo',     role: 'top',     rating: 76 },
      { name: 'Selfmade',  role: 'jungle',  rating: 82 },
      { name: 'Nemesis',   role: 'mid',     rating: 74 },
      { name: 'Rekkles',   role: 'adc',     rating: 84 },
      { name: 'Hylissang', role: 'support', rating: 78 },
    ],
  },

  // ── MAD Lions ────────────────────────────────────────────────────────────
  'mad-2021': {
    // Worlds 2021 Quarterfinalist
    players: [
      { name: 'Armut',     role: 'top',     rating: 78 },
      { name: 'Elyoya',    role: 'jungle',  rating: 82 },
      { name: 'Humanoid',  role: 'mid',     rating: 80 },
      { name: 'Carzzy',    role: 'adc',     rating: 78 },
      { name: 'Kaiser',    role: 'support', rating: 78 },
    ],
  },
  'mad-2022': {
    players: [
      { name: 'Armut',     role: 'top',     rating: 72 },
      { name: 'Elyoya',    role: 'jungle',  rating: 78 },
      { name: 'Nisqy',     role: 'mid',     rating: 72 },
      { name: 'Unforgiven', role: 'adc',    rating: 70 },
      { name: 'Kaiser',    role: 'support', rating: 74 },
    ],
  },

  // ── Rogue ────────────────────────────────────────────────────────────────
  'rge-2020': {
    players: [
      { name: 'Finn',      role: 'top',     rating: 70 },
      { name: 'Inspired',  role: 'jungle',  rating: 76 },
      { name: 'Larssen',   role: 'mid',     rating: 76 },
      { name: 'Hans Sama', role: 'adc',     rating: 78 },
      { name: 'Vander',    role: 'support', rating: 70 },
    ],
  },
  'rge-2022': {
    // Worlds 2022 Quarterfinalist
    players: [
      { name: 'Odoamne',   role: 'top',     rating: 76 },
      { name: 'Malrang',   role: 'jungle',  rating: 78 },
      { name: 'Larssen',   role: 'mid',     rating: 78 },
      { name: 'Comp',      role: 'adc',     rating: 76 },
      { name: 'Trymbi',    role: 'support', rating: 74 },
    ],
  },

  // =========================================================================
  //  LCS
  // =========================================================================

  // ── Cloud9 ───────────────────────────────────────────────────────────────
  'c9-2013': {
    // Worlds 2013 Quarterfinalist
    players: [
      { name: 'Balls',     role: 'top',     rating: 74 },
      { name: 'Meteos',    role: 'jungle',  rating: 78 },
      { name: 'Hai',       role: 'mid',     rating: 76 },
      { name: 'Sneaky',    role: 'adc',     rating: 76 },
      { name: 'LemonNation', role: 'support', rating: 68 },
    ],
  },
  'c9-2014': {
    players: [
      { name: 'Balls',     role: 'top',     rating: 72 },
      { name: 'Meteos',    role: 'jungle',  rating: 76 },
      { name: 'Hai',       role: 'mid',     rating: 74 },
      { name: 'Sneaky',    role: 'adc',     rating: 78 },
      { name: 'LemonNation', role: 'support', rating: 66 },
    ],
  },
  'c9-2018': {
    // Worlds 2018 Semifinalist
    players: [
      { name: 'Licorice',  role: 'top',     rating: 76 },
      { name: 'Svenskeren', role: 'jungle', rating: 76 },
      { name: 'Jensen',    role: 'mid',     rating: 80 },
      { name: 'Sneaky',    role: 'adc',     rating: 76 },
      { name: 'Zeyzal',    role: 'support', rating: 70 },
    ],
  },
  'c9-2021': {
    players: [
      { name: 'Fudge',     role: 'top',     rating: 72 },
      { name: 'Blaber',    role: 'jungle',  rating: 78 },
      { name: 'Perkz',     role: 'mid',     rating: 80 },
      { name: 'Zven',      role: 'adc',     rating: 76 },
      { name: 'Vulcan',    role: 'support', rating: 74 },
    ],
  },
  'c9-2023': {
    players: [
      { name: 'Fudge',     role: 'top',     rating: 74 },
      { name: 'Blaber',    role: 'jungle',  rating: 78 },
      { name: 'Jojopyun',  role: 'mid',     rating: 72 },
      { name: 'Berserker', role: 'adc',     rating: 80 },
      { name: 'Zven',      role: 'support', rating: 72 },
    ],
  },

  // ── Team Liquid ──────────────────────────────────────────────────────────
  'tl-2018': {
    players: [
      { name: 'Impact',    role: 'top',     rating: 76 },
      { name: 'Xmithie',   role: 'jungle',  rating: 74 },
      { name: 'Pobelter',  role: 'mid',     rating: 72 },
      { name: 'Doublelift', role: 'adc',    rating: 80 },
      { name: 'Olleh',     role: 'support', rating: 70 },
    ],
  },
  'tl-2019': {
    // MSI 2019 Finalist
    players: [
      { name: 'Impact',    role: 'top',     rating: 78 },
      { name: 'Xmithie',   role: 'jungle',  rating: 76 },
      { name: 'Jensen',    role: 'mid',     rating: 80 },
      { name: 'Doublelift', role: 'adc',    rating: 82 },
      { name: 'CoreJJ',    role: 'support', rating: 84 },
    ],
  },
  'tl-2023': {
    players: [
      { name: 'Ssumday',   role: 'top',     rating: 70 },
      { name: 'Pyosik',    role: 'jungle',  rating: 68 },
      { name: 'APA',       role: 'mid',     rating: 70 },
      { name: 'Yeon',      role: 'adc',     rating: 68 },
      { name: 'CoreJJ',    role: 'support', rating: 76 },
    ],
  },

  // ── TSM ──────────────────────────────────────────────────────────────────
  'tsm-2014': {
    players: [
      { name: 'Dyrus',     role: 'top',     rating: 72 },
      { name: 'Amazing',   role: 'jungle',  rating: 70 },
      { name: 'Bjergsen',  role: 'mid',     rating: 82 },
      { name: 'WildTurtle', role: 'adc',    rating: 74 },
      { name: 'Lustboy',   role: 'support', rating: 72 },
    ],
  },
  'tsm-2016': {
    players: [
      { name: 'Hauntzer',  role: 'top',     rating: 76 },
      { name: 'Svenskeren', role: 'jungle', rating: 76 },
      { name: 'Bjergsen',  role: 'mid',     rating: 84 },
      { name: 'Doublelift', role: 'adc',    rating: 82 },
      { name: 'Biofrost',  role: 'support', rating: 72 },
    ],
  },
  'tsm-2017': {
    players: [
      { name: 'Hauntzer',  role: 'top',     rating: 74 },
      { name: 'Svenskeren', role: 'jungle', rating: 72 },
      { name: 'Bjergsen',  role: 'mid',     rating: 82 },
      { name: 'Doublelift', role: 'adc',    rating: 80 },
      { name: 'Biofrost',  role: 'support', rating: 70 },
    ],
  },
  'tsm-2020': {
    players: [
      { name: 'BrokenBlade', role: 'top',   rating: 72 },
      { name: 'Spica',     role: 'jungle',  rating: 76 },
      { name: 'Bjergsen',  role: 'mid',     rating: 80 },
      { name: 'Doublelift', role: 'adc',    rating: 78 },
      { name: 'Biofrost',  role: 'support', rating: 68 },
    ],
  },

  // ── 100 Thieves ──────────────────────────────────────────────────────────
  '100t-2021': {
    players: [
      { name: 'Ssumday',   role: 'top',     rating: 76 },
      { name: 'Closer',    role: 'jungle',  rating: 78 },
      { name: 'Abbedagge', role: 'mid',     rating: 74 },
      { name: 'FBI',       role: 'adc',     rating: 76 },
      { name: 'Huhi',      role: 'support', rating: 72 },
    ],
  },
  '100t-2023': {
    players: [
      { name: 'Tenacity',  role: 'top',     rating: 68 },
      { name: 'Closer',    role: 'jungle',  rating: 76 },
      { name: 'Bjergsen',  role: 'mid',     rating: 74 },
      { name: 'Doublelift', role: 'adc',    rating: 72 },
      { name: 'Busio',     role: 'support', rating: 68 },
    ],
  },
};

// ---------------------------------------------------------------------------
// 4. MSI_YEARS
// ---------------------------------------------------------------------------
const MSI_YEARS = [2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025];

/**
 * engine.js — 智能赛事模拟引擎 (Intelligent Simulation Engine)
 * Golden Road LoL 黄金之路
 *
 * Features:
 * - Synergy bonuses for same historical team / region
 * - Monte Carlo Gaussian simulation for variance
 * - Historical Regional Bias
 * - Tournament Momentum
 */

const Engine = (() => {

  // --- Helpers ---

  // Box-Muller transform for normally distributed random numbers
  function randomGaussian() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random();
    while(v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  // --- Core Intelligence ---

  /**
   * Parse roster and calculate advanced stats: Synergy, Variance, Momentum
   */
  function getTeamInfo(roster) {
    if (!roster || roster.length === 0) return { rating: 0, region: 'mixed', variance: 5, clutch: 0 };
    
    const total = roster.reduce((sum, p) => sum + p.rating, 0);
    let base = total / roster.length;
    
    const teamYearCounts = {};
    const regionCounts = {};
    
    roster.forEach(p => {
      const key = `${p.team}-${p.year}`;
      teamYearCounts[key] = (teamYearCounts[key] || 0) + 1;
      
      let rId = 'unknown';
      if (typeof TEAMS !== 'undefined') {
        for (const [regionId, teams] of Object.entries(TEAMS)) {
          if (teams.some(t => t.abbr === p.team)) {
            rId = regionId;
            break;
          }
        }
      }
      p._region = rId;
      regionCounts[rId] = (regionCounts[rId] || 0) + 1;
    });

    let synergyBonus = 0;
    // Team familiarity bonus
    Object.values(teamYearCounts).forEach(count => {
      if (count === 2) synergyBonus += 1;
      if (count === 3) synergyBonus += 2.5;
      if (count === 4) synergyBonus += 4;
      if (count === 5) synergyBonus += 6;
    });

    let primaryRegion = 'mixed';
    let maxRegionCount = 0;
    Object.entries(regionCounts).forEach(([r, count]) => {
      if (count >= 3) primaryRegion = r;
      if (count > maxRegionCount) maxRegionCount = count;
    });

    // Communication / Regional style synergy
    if (maxRegionCount === 5) synergyBonus += 2;
    else if (maxRegionCount === 4) synergyBonus += 1;
    else if (maxRegionCount < 3) synergyBonus -= 1; // Language barrier

    const finalRating = Math.round(base + synergyBonus);
    
    // Default variance is 10 if not defined. High rating players tend to be slightly more consistent (lower variance)
    const variance = roster.reduce((sum, p) => sum + (p.variance || 10), 0) / roster.length;
    const clutch = roster.reduce((sum, p) => sum + (p.clutch || 2), 0) / roster.length;

    return {
      base: Math.round(base),
      rating: finalRating,
      synergy: Math.round(synergyBonus),
      region: primaryRegion,
      variance: variance,
      clutch: clutch
    };
  }

  /**
   * Keep this for UI backwards compatibility
   */
  function calcTeamRating(roster) {
    return getTeamInfo(roster).rating;
  }

  /**
   * Historical bias matrix
   */
  function getHistoricalBias(regionA, regionB) {
    if (regionA === 'mixed' || regionB === 'mixed') return 1.0;
    if (regionA === 'lck' && regionB === 'lpl') return 1.02; // slight edge
    if (regionA === 'lpl' && regionB === 'lck') return 0.98;
    return 1.0;
  }

  function generateOpponentObj(stage, round) {
    const stageBase = {
      spring: { min: 60, max: 82 },
      msi:    { min: 72, max: 90 },
      summer: { min: 62, max: 84 },
      worlds: { min: 75, max: 95 },
    };
    const roundMod = { group: 0, quarter: 3, semi: 6, final: 10 };
    const base = stageBase[stage] || stageBase.spring;
    const mod = roundMod[round] || 0;
    const min = Math.min(base.min + mod, 95);
    const max = Math.min(base.max + mod, 98);
    const rating = Math.floor(min + Math.random() * (max - min + 1));

    const regions = ['lpl', 'lck', 'lec', 'lcs'];
    let region;
    if (round === 'semi' || round === 'final') {
      region = Math.random() < 0.6 ? 'lck' : 'lpl';
    } else {
      region = regions[Math.floor(Math.random() * regions.length)];
    }

    return {
      rating,
      region,
      variance: 10,
      clutch: (round === 'final' || round === 'semi') ? 3 : 1
    };
  }

  // --- Simulation Logic ---

  function simulateMatch(teamInfo, oppInfo, isKnockout = false, momentum = 0) {
    // Gaussian Monte Carlo Performance
    let perfA = teamInfo.rating + momentum + randomGaussian() * teamInfo.variance + (isKnockout ? teamInfo.clutch : 0);
    let perfB = oppInfo.rating + randomGaussian() * oppInfo.variance + (isKnockout ? oppInfo.clutch : 0);

    const bias = getHistoricalBias(teamInfo.region, oppInfo.region);
    return (perfA * bias) > perfB;
  }

  function simulateSeries(teamInfo, oppInfo, bestOf, baseMomentum = 0) {
    const winsNeeded = Math.ceil(bestOf / 2);
    let wins = 0;
    let losses = 0;
    let momentum = baseMomentum;

    for (let i = 0; i < bestOf; i++) {
      if (simulateMatch(teamInfo, oppInfo, true, momentum)) {
        wins++;
        momentum += 1; // Gain momentum during series
      } else {
        losses++;
        momentum -= 1; // Lose momentum
      }
      if (wins >= winsNeeded) return true;
      if (losses >= winsNeeded) return false;
    }
    return wins > losses;
  }

  function simulateStage(teamInfo, stage) {
    const details = [];
    let momentum = 0;

    // Group stage (3 BO1 matches)
    const groupOpponents = [
      generateOpponentObj(stage, 'group'),
      generateOpponentObj(stage, 'group'),
      generateOpponentObj(stage, 'group'),
    ];

    let groupWins = 0;
    groupOpponents.forEach((opp, i) => {
      const win = simulateMatch(teamInfo, opp, false, momentum);
      if (win) { groupWins++; momentum += 1; }
      else { momentum -= 1; }
      details.push({ round: 'group', game: i + 1, opponent: opp.rating, win });
    });

    if (groupWins < 2) {
      return { stage, placement: 'group', isChampion: false, details, placementText: 'sim.group.stage' };
    }

    momentum += 2; // Advance buff
    const qfOpp = generateOpponentObj(stage, 'quarter');
    const qfWin = simulateSeries(teamInfo, qfOpp, 5, momentum);
    details.push({ round: 'quarter', opponent: qfOpp.rating, win: qfWin });
    if (!qfWin) return { stage, placement: 'top8', isChampion: false, details, placementText: 'sim.top8' };

    momentum += 2;
    const sfOpp = generateOpponentObj(stage, 'semi');
    const sfWin = simulateSeries(teamInfo, sfOpp, 5, momentum);
    details.push({ round: 'semi', opponent: sfOpp.rating, win: sfWin });
    if (!sfWin) return { stage, placement: 'top4', isChampion: false, details, placementText: 'sim.top4' };

    momentum += 2;
    const fOpp = generateOpponentObj(stage, 'final');
    const fWin = simulateSeries(teamInfo, fOpp, 5, momentum);
    details.push({ round: 'final', opponent: fOpp.rating, win: fWin });
    if (!fWin) return { stage, placement: 'finalist', isChampion: false, details, placementText: 'sim.finalist' };

    return { stage, placement: 'champion', isChampion: true, details, placementText: 'sim.champion' };
  }

  function simulateGoldenRoad(roster) {
    // Note: We now pass the full roster here
    const teamInfo = getTeamInfo(roster);
    const stageNames = ['spring', 'msi', 'summer', 'worlds'];
    const stages = [];
    let totalWins = 0;

    for (const stageName of stageNames) {
      const result = simulateStage(teamInfo, stageName);
      stages.push(result);
      if (result.isChampion) {
        totalWins++;
        // Winning a championship permanently boosts confidence (rating)
        teamInfo.rating += 1;
      }
    }

    return {
      stages,
      isGoldenRoad: totalWins === 4,
      totalWins,
      teamRating: teamInfo.rating,
    };
  }

  function simulateMSI(roster) {
    const teamInfo = getTeamInfo(roster);
    const details = [];
    const stages = [];
    let momentum = 0;

    // Play-In stage
    const playInOpps = [
      generateOpponentObj('msi', 'group'),
      generateOpponentObj('msi', 'group')
    ];
    playInOpps[0].rating = Math.max(55, playInOpps[0].rating - 5);
    playInOpps[1].rating = Math.max(55, playInOpps[1].rating - 3);

    let playInWins = 0;
    playInOpps.forEach((opp, i) => {
      const win = simulateMatch(teamInfo, opp, false, momentum);
      if (win) { playInWins++; momentum++; } else { momentum--; }
      details.push({ round: 'playin', game: i + 1, opponent: opp.rating, win });
    });

    stages.push({
      stage: 'msi_playin', placement: playInWins >= 1 ? 'advance' : 'eliminated',
      isChampion: false, details: [...details],
      placementText: playInWins >= 1 ? 'sim.top8' : 'sim.eliminated',
    });

    if (playInWins < 1) return { stages, isChampion: false, teamRating: teamInfo.rating };

    // Group stage
    momentum += 1;
    const groupDetails = [];
    let groupWins = 0;
    for (let i = 0; i < 3; i++) {
      const opp = generateOpponentObj('msi', 'group');
      const win = simulateMatch(teamInfo, opp, false, momentum);
      if (win) { groupWins++; momentum++; } else { momentum--; }
      groupDetails.push({ round: 'group', game: i + 1, opponent: opp.rating, win });
    }

    stages.push({
      stage: 'msi_groups', placement: groupWins >= 2 ? 'advance' : 'group',
      isChampion: false, details: groupDetails,
      placementText: groupWins >= 2 ? 'sim.top4' : 'sim.group.stage',
    });

    if (groupWins < 2) return { stages, isChampion: false, teamRating: teamInfo.rating };

    // Knockout Semifinal
    momentum += 2;
    const knockDetails = [];
    const sfOpp = generateOpponentObj('msi', 'semi');
    const sfWin = simulateSeries(teamInfo, sfOpp, 5, momentum);
    knockDetails.push({ round: 'semi', opponent: sfOpp.rating, win: sfWin });

    stages.push({
      stage: 'msi_knockout', placement: sfWin ? 'advance' : 'top4',
      isChampion: false, details: knockDetails,
      placementText: sfWin ? 'sim.finalist' : 'sim.top4',
    });

    if (!sfWin) return { stages, isChampion: false, teamRating: teamInfo.rating };

    // Grand Final
    momentum += 2;
    const finalDetails = [];
    const fOpp = generateOpponentObj('msi', 'final');
    const fWin = simulateSeries(teamInfo, fOpp, 5, momentum);
    finalDetails.push({ round: 'final', opponent: fOpp.rating, win: fWin });

    stages.push({
      stage: 'msi_final', placement: fWin ? 'champion' : 'finalist',
      isChampion: fWin, details: finalDetails,
      placementText: fWin ? 'sim.champion' : 'sim.finalist',
    });

    return { stages, isChampion: fWin, teamRating: teamInfo.rating };
  }

  return {
    calcTeamRating,
    simulateMatch,
    simulateSeries,
    simulateStage,
    simulateGoldenRoad,
    simulateMSI,
  };
})();

/**
 * i18n.js — 中英双语国际化系统
 * Golden Road LoL 黄金之路
 */

const I18N = (() => {
  let currentLang = localStorage.getItem('gr-lang') || 'zh';

  const translations = {
    zh: {
      // App
      'app.title': '黄金之路',
      'app.subtitle': 'LoL',
      'app.tagline': '英雄联盟电竞阵容挑战',
      'app.description': '转动赛区、战队和年份转盘，从英雄联盟电竞历史中选秀组建5人阵容，挑战完美赛季：春季赛、季中冠军赛、夏季赛、全球总决赛。',
      'app.start': '开始挑战',

      // Language
      'lang.switch': 'EN',

      // Modes
      'mode.select': '选择游戏模式',
      'mode.golden': '黄金之路',
      'mode.golden.desc': '完整赛季挑战 — 春季赛 → MSI → 夏季赛 → 全球总决赛',
      'mode.msi': 'MSI 挑战',
      'mode.msi.desc': '精简的季中冠军赛主题挑战',
      'mode.free': '自主选人',
      'mode.free.desc': '组建你的梦幻银河战舰，无视轮盘随机性',
      'mode.back': '返回',

      // Roles
      'role.top': '上单',
      'role.jungle': '打野',
      'role.mid': '中单',
      'role.adc': 'ADC',
      'role.support': '辅助',

      // Draft
      'draft.round': '第 {n} 轮',
      'draft.of': '/ 5',
      'draft.spin': '转 动',
      'draft.spinning': '转动中...',
      'draft.reroll': '重骰',
      'draft.rerolls.left': '剩余 {n} 次',
      'draft.region': '赛区',
      'draft.team': '战队',
      'draft.year': '年份',
      'draft.pick.player': '选择一名选手加入阵容',
      'draft.pick.role': '分配到位置',
      'draft.confirm': '确认选择',
      'draft.roster': '你的阵容',
      'draft.empty': '待选',
      'draft.locked': '已锁定',
      'draft.result.title': '本轮抽签结果',
      'draft.available': '可用选手',
      'draft.no.rerolls': '重骰次数已用完',
      'free.pool': '历史选手池',

      // Simulation
      'sim.title': '赛季模拟',
      'sim.team.rating': '阵容评分',
      'sim.simulating': '模拟比赛中...',
      'sim.spring': '春季赛',
      'sim.msi': '季中冠军赛 (MSI)',
      'sim.summer': '夏季赛',
      'sim.worlds': '全球总决赛',
      'sim.champion': '🏆 冠军',
      'sim.finalist': '🥈 亚军',
      'sim.top4': '四强',
      'sim.top8': '八强',
      'sim.eliminated': '已淘汰',
      'sim.group.stage': '小组赛出局',
      'sim.start': '开始模拟',
      'sim.next': '下一阶段',

      // MSI Simulation
      'sim.msi.playin': 'MSI 入围赛',
      'sim.msi.groups': 'MSI 小组赛',
      'sim.msi.knockout': 'MSI 淘汰赛',
      'sim.msi.final': 'MSI 决赛',

      // Results
      'result.golden.road': '🏆 黄金之路达成！',
      'result.golden.road.desc': '不可思议！你的阵容横扫了整个赛季的所有赛事冠军！',
      'result.almost': '差一点！',
      'result.almost.desc': '你的阵容表现出色，但未能赢得所有赛事。',
      'result.failed': '挑战失败',
      'result.failed.desc': '你的阵容在赛季中遭遇了挫折。再试一次？',
      'result.play.again': '再来一局',
      'result.back.home': '返回首页',
      'result.wins': '{n} 个冠军',
      'result.season.summary': '赛季总结',

      // Share
      'share.title': '分享结果',
      'share.copy': '📋 复制',
      'share.image': '⬇ 保存图片',
      'share.post': '𝕏 发布',
      'share.copied': '已复制到剪贴板！',
      'share.card.failed': '黄金之路失败',
      'share.card.success': '黄金之路达成！',
      'share.card.msi.success': 'MSI 冠军！',
      'share.card.msi.failed': 'MSI 挑战失败',
      'share.text': '黄金之路 LoL\n阵容评分: {rating}\n{result}\n{roster}\n{events}',

      // About Section
      'about.title': '关于挑战',
      'about.p1': '黄金之路LoL是一款面向英雄联盟电竞粉丝的策略选秀游戏。每次挑战都需要平衡阵容知识、策略判断和运气：转盘决定候选池，但由你决定最终阵容。',
      'about.p2': '黄金之路模式模拟完整赛季。你的阵容将参加春季赛、MSI、夏季赛和全球总决赛。完美通关意味着在每个赛事都夺冠——这对于顶级阵容也极为困难。',
      'about.strategy': '策略提示',
      'about.tip1': '为弱阵容年份保留重骰机会。战队重骰可以拯救一个困难的赛区-年份组合。',
      'about.tip2': '优先选择稀缺位置的选手。如果抽到的阵容有出色的辅助或打野，趁早锁定。',
      'about.tip3': '选手评分与特定赛季绑定，巅峰赛季远比名气重要。',
      'about.modes': '游戏模式与评分',
      'about.modes.p1': '黄金之路模式使用 2013-2025 年的历史阵容。MSI 挑战模式使用精选的 MSI 年份阵容，运行更短的模拟。',
      'about.modes.p2': '选完5人后，系统将隐藏的选手评分取均值作为阵容评分，然后模拟各阶段赛事。强阵容能提高胜率，但没有什么阵容能保证黄金之路。',

      // How to Play
      'howto.title': '玩法说明',
      'howto.step1.title': '1. 选择模式',
      'howto.step1.desc': '选择黄金之路（完整赛季）或MSI挑战（精简版）',
      'howto.step2.title': '2. 转动转盘',
      'howto.step2.desc': '系统随机生成赛区+战队+年份的组合',
      'howto.step3.title': '3. 选择选手',
      'howto.step3.desc': '从该年阵容中选择一名选手，分配到空闲位置',
      'howto.step4.title': '4. 组建阵容',
      'howto.step4.desc': '重复5轮，完成上单/打野/中单/ADC/辅助的完整阵容',
      'howto.step5.title': '5. 模拟赛季',
      'howto.step5.desc': '观看你的阵容在各大赛事中的征战表现',

      // Footer
      'footer.disclaimer': '非 Riot Games 官方产品',
      'footer.howtoplay': '玩法说明',
      'footer.about': '关于',
      'footer.glossary': '术语表',
      'footer.contact': '联系我们',
      'footer.privacy': '隐私政策',
      'footer.terms': '使用条款',
      'footer.friendlink': '友情链接：Golden Road LoL (原版)',
      'footer.visitor.count': '已有 {count} 位经理踏上黄金之路',

      // Misc
      'misc.rating': '评分',
      'misc.player': '选手',
      'misc.position': '位置',
    },

    en: {
      // App
      'app.title': 'GOLDEN ROAD',
      'app.subtitle': 'LoL',
      'app.tagline': 'The League Esports Roster Challenge',
      'app.description': 'Spin a region, team and year for each role. Draft a 5-player roster from LoL esports history and chase the perfect season: Spring Split, MSI, Summer Split and Worlds.',
      'app.start': 'START CHALLENGE',

      // Language
      'lang.switch': '中文',

      // Modes
      'mode.select': 'Select Game Mode',
      'mode.golden': 'Golden Road',
      'mode.golden.desc': 'Full season challenge — Spring → MSI → Summer → Worlds',
      'mode.msi': 'MSI Challenge',
      'mode.msi.desc': 'Shorter MSI-themed challenge',
      'mode.free': 'Free Draft',
      'mode.free.desc': 'Build your dream team without RNG',
      'mode.back': 'Back',

      // Roles
      'role.top': 'Top',
      'role.jungle': 'Jungle',
      'role.mid': 'Mid',
      'role.adc': 'ADC',
      'role.support': 'Support',

      // Draft
      'draft.round': 'Round {n}',
      'draft.of': '/ 5',
      'draft.spin': 'SPIN',
      'draft.spinning': 'Spinning...',
      'draft.reroll': 'Reroll',
      'draft.rerolls.left': '{n} left',
      'draft.region': 'Region',
      'draft.team': 'Team',
      'draft.year': 'Year',
      'draft.pick.player': 'Pick a player for your roster',
      'draft.pick.role': 'Assign to role',
      'draft.confirm': 'Confirm Pick',
      'draft.roster': 'Your Roster',
      'draft.empty': 'Empty',
      'draft.locked': 'Locked',
      'draft.result.title': 'Spin Result',
      'draft.available': 'Available Players',
      'draft.no.rerolls': 'No rerolls remaining',
      'free.pool': 'Historical Player Pool',

      // Simulation
      'sim.title': 'Season Simulation',
      'sim.team.rating': 'Team Rating',
      'sim.simulating': 'Simulating...',
      'sim.spring': 'Spring Split',
      'sim.msi': 'Mid-Season Invitational',
      'sim.summer': 'Summer Split',
      'sim.worlds': 'World Championship',
      'sim.champion': '🏆 Champion',
      'sim.finalist': '🥈 Finalist',
      'sim.top4': 'Top 4',
      'sim.top8': 'Top 8',
      'sim.eliminated': 'Eliminated',
      'sim.group.stage': 'Group Stage Exit',
      'sim.start': 'Start Simulation',
      'sim.next': 'Next Stage',

      // MSI Simulation
      'sim.msi.playin': 'MSI Play-In',
      'sim.msi.groups': 'MSI Group Stage',
      'sim.msi.knockout': 'MSI Knockout',
      'sim.msi.final': 'MSI Grand Final',

      // Results
      'result.golden.road': '🏆 Golden Road Achieved!',
      'result.golden.road.desc': 'Incredible! Your roster swept every event of the entire season!',
      'result.almost': 'So Close!',
      'result.almost.desc': 'Your roster performed well, but couldn\'t win every event.',
      'result.failed': 'Challenge Failed',
      'result.failed.desc': 'Your roster hit some bumps along the way. Try again?',
      'result.play.again': 'Play Again',
      'result.back.home': 'Back to Home',
      'result.wins': '{n} Titles',
      'result.season.summary': 'Season Summary',

      // Share
      'share.title': 'Share Result',
      'share.copy': '📋 SHARE',
      'share.image': '⬇ IMAGE',
      'share.post': '𝕏 POST',
      'share.copied': 'Copied to clipboard!',
      'share.card.failed': 'GOLDEN ROAD FAILED',
      'share.card.success': 'GOLDEN ROAD ACHIEVED!',
      'share.card.msi.success': 'MSI CHAMPION!',
      'share.card.msi.failed': 'MSI CHALLENGE FAILED',
      'share.text': 'Golden Road LoL\nTeam Rating: {rating}\n{result}\n{roster}\n{events}',

      // About Section
      'about.title': 'About the Challenge',
      'about.p1': 'Golden Road LoL is a strategy draft game for League esports fans. Each run asks you to balance roster knowledge, strategy and luck: the wheels pick the team-season, but you decide which player and role belongs on the final five.',
      'about.p2': 'The Golden Road mode follows a full fantasy season. Your drafted lineup plays Spring Split, MSI, Summer Split and Worlds. A perfect run means finishing first at every stop — intentionally rare even for elite rosters.',
      'about.strategy': 'Strategy Tips',
      'about.tip1': 'Save rerolls for weak team-years. A Team reroll can rescue a difficult region-year combo.',
      'about.tip2': 'Draft scarce roles early. If a roster has a standout Support or Jungle, lock it in.',
      'about.tip3': 'Ratings are tied to specific seasons — prime years matter more than name recognition.',
      'about.modes': 'Modes & Scoring',
      'about.modes.p1': 'Golden Road mode uses historical rosters from 2013 through 2025. MSI Challenge uses curated MSI year rosters and runs a shorter simulation.',
      'about.modes.p2': 'After five picks, the game averages hidden player ratings into one Team Rating, then simulates each stage. Strong rosters improve your odds, but no draft guarantees the Golden Road.',

      // How to Play
      'howto.title': 'How to Play',
      'howto.step1.title': '1. Choose Mode',
      'howto.step1.desc': 'Golden Road (full season) or MSI Challenge (shorter)',
      'howto.step2.title': '2. Spin the Wheels',
      'howto.step2.desc': 'The system generates a random region + team + year combo',
      'howto.step3.title': '3. Pick a Player',
      'howto.step3.desc': 'Select one player from that roster and assign to an open role',
      'howto.step4.title': '4. Build the Roster',
      'howto.step4.desc': 'Repeat for 5 rounds to fill Top / Jungle / Mid / ADC / Support',
      'howto.step5.title': '5. Simulate the Season',
      'howto.step5.desc': 'Watch your roster compete across major events',

      // Footer
      'footer.disclaimer': 'Not affiliated with Riot Games',
      'footer.howtoplay': 'How to Play',
      'footer.about': 'About',
      'footer.glossary': 'Glossary',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.friendlink': 'Friend Link: Golden Road LoL (Original)',
      'footer.visitor.count': '{count} managers have embarked on the Golden Road',

      // Misc
      'misc.rating': 'Rating',
      'misc.player': 'Player',
      'misc.position': 'Role',
    }
  };

  function t(key, params = {}) {
    let text = translations[currentLang]?.[key] || translations['en']?.[key] || key;
    Object.keys(params).forEach(k => {
      text = text.replace(`{${k}}`, params[k]);
    });
    return text;
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('gr-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    // Dispatch custom event for UI updates
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function getLang() {
    return currentLang;
  }

  function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  }

  // Apply translations to all elements with data-i18n attribute
  function applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const params = el.dataset.i18nParams ? JSON.parse(el.dataset.i18nParams) : {};
      el.textContent = t(key, params);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
  }

  return { t, setLang, getLang, toggleLang, applyAll };
})();

/**
 * game.js — 游戏主逻辑
 * Golden Road LoL 黄金之路
 *
 * Manages game state, UI rendering, wheel spinning,
 * player drafting, and season simulation flow.
 */

const Game = (() => {
  // ─── State ────────────────────────────────────────
  let state = {
    mode: null,         // 'golden' or 'msi'
    round: 0,           // current round (0-4)
    phase: 'start',     // 'start', 'draft', 'sim', 'results'

    // Reroll counts
    rerolls: { region: 3, team: 3, year: 3 },

    // Current spin result
    currentSpin: { region: null, team: null, year: null, roster: null },
    hasSpun: false,

    // Selected player & role for current round
    selectedPlayer: null,
    selectedRole: null,

    // Draft roster (5 slots)
    roster: {
      top: null,
      jungle: null,
      mid: null,
      adc: null,
      support: null,
    },

    // Track used players (prevent duplicate picks)
    usedPlayers: new Set(),

    // Simulation results
    simResults: null,
    simStageIndex: 0,
  };

  const ROLES = ['top', 'jungle', 'mid', 'adc', 'support'];

  // ─── Screen Management ─────────────────────────────
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(`screen-${screenId}`);
    if (screen) screen.classList.add('active');
    state.phase = screenId;
  }

  // ─── Language ──────────────────────────────────────
  function toggleLang() {
    I18N.toggleLang();
    I18N.applyAll();
    // Re-render dynamic content
    if (state.phase === 'draft') {
      renderRoster();
      renderRerollBar();
      updateRoundBadge();
      if (state.hasSpun) renderPlayerSelection();
    }
    if (state.phase === 'sim') {
      renderSimScreen();
    }
  }

  // ─── Start Mode ────────────────────────────────────
  function startMode(mode) {
    state = {
      mode,
      round: 0,
      phase: 'draft',
      rerolls: { region: 3, team: 3, year: 3 },
      currentSpin: { region: null, team: null, year: null, roster: null },
      hasSpun: false,
      selectedPlayer: null,
      selectedRole: null,
      roster: { top: null, jungle: null, mid: null, adc: null, support: null },
      usedPlayers: new Set(),
      simResults: null,
      simStageIndex: 0,
    };
    showScreen('draft');
    renderDraftScreen();
  }

  function backToStart() {
    showScreen('start');
    I18N.applyAll();
  }

  // ─── Draft Screen ──────────────────────────────────
  function renderDraftScreen() {
    updateRoundBadge();
    renderRerollBar();
    renderRoster();
    resetWheels();
    hidePlayerSelection();
    updateSpinButton(true);
  }

  function updateRoundBadge() {
    const badge = document.getElementById('round-badge');
    badge.innerHTML = `${I18N.t('draft.round', { n: state.round + 1 })} ${I18N.t('draft.of')}`;
  }

  function renderRerollBar() {
    ['region', 'team', 'year'].forEach(type => {
      const btn = document.getElementById(`reroll-${type}`);
      const count = document.getElementById(`reroll-${type}-count`);
      count.textContent = state.rerolls[type];
      if (state.rerolls[type] <= 0 || !state.hasSpun) {
        btn.classList.add('disabled');
      } else {
        btn.classList.remove('disabled');
      }
    });
  }

  function resetWheels() {
    ['region', 'team', 'year'].forEach(type => {
      const box = document.getElementById(`wheel-${type}`);
      box.className = 'wheel-box';
      box.innerHTML = '<div class="wheel-value placeholder">?</div>';
    });
  }

  function updateSpinButton(enabled) {
    const btn = document.getElementById('btn-spin');
    btn.disabled = !enabled;
    const span = btn.querySelector('span');
    if (span) span.setAttribute('data-i18n', 'draft.spin');
    I18N.applyAll();
  }

  function hidePlayerSelection() {
    document.getElementById('player-selection').classList.add('hidden');
    state.hasSpun = false;
    state.selectedPlayer = null;
    state.selectedRole = null;
  }

  // ─── Spin Logic ────────────────────────────────────
  function spin() {
    if (state.hasSpun) return;

    // Random region
    const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];

    // Random team from that region
    const regionTeams = TEAMS[region.id];
    const team = regionTeams[Math.floor(Math.random() * regionTeams.length)];

    // Random year from that team
    let availYears = team.years;
    if (state.mode === 'msi') {
      availYears = team.years.filter(y => MSI_YEARS.includes(y));
      if (availYears.length === 0) availYears = team.years;
    }
    const year = availYears[Math.floor(Math.random() * availYears.length)];

    // Get roster
    const rosterKey = `${team.id}-${year}`;
    const roster = ROSTERS[rosterKey];

    state.currentSpin = { region, team, year, roster, rosterKey };

    // Animate wheels
    animateWheels(region, team, year, () => {
      state.hasSpun = true;
      renderRerollBar();
      renderPlayerSelection();
      updateSpinButton(false);
    });
  }

  function animateWheels(region, team, year, callback) {
    const duration = 1500;
    const interval = 80;
    const steps = Math.floor(duration / interval);

    let step = 0;

    // Start spinning class
    ['region', 'team', 'year'].forEach(type => {
      document.getElementById(`wheel-${type}`).classList.add('spinning');
    });

    const spinInterval = setInterval(() => {
      step++;

      // Random values during spin
      const rr = REGIONS[Math.floor(Math.random() * REGIONS.length)];
      const rt = TEAMS[rr.id][Math.floor(Math.random() * TEAMS[rr.id].length)];
      const ry = rt.years[Math.floor(Math.random() * rt.years.length)];

      const isZh = I18N.getLang() === 'zh';
      document.getElementById('wheel-region').innerHTML =
        `<div class="wheel-value">${isZh ? rr.nameZh : rr.name}</div>`;
      document.getElementById('wheel-team').innerHTML =
        `<div class="wheel-value">${rt.abbr}</div>`;
      document.getElementById('wheel-year').innerHTML =
        `<div class="wheel-value">${ry}</div>`;

      if (step >= steps) {
        clearInterval(spinInterval);
        // Land on actual values
        const isZh = I18N.getLang() === 'zh';
        document.getElementById('wheel-region').innerHTML =
          `<div class="wheel-value">${isZh ? region.nameZh : region.name}</div>`;
        document.getElementById('wheel-team').innerHTML =
          `<div class="wheel-value">${team.abbr}</div>`;
        document.getElementById('wheel-year').innerHTML =
          `<div class="wheel-value">${year}</div>`;

        // Landed class
        ['region', 'team', 'year'].forEach(type => {
          const box = document.getElementById(`wheel-${type}`);
          box.classList.remove('spinning');
          box.classList.add('landed');
        });

        setTimeout(callback, 300);
      }
    }, interval);
  }

  // ─── Reroll ────────────────────────────────────────
  function reroll(type) {
    if (state.rerolls[type] <= 0 || !state.hasSpun) return;

    state.rerolls[type]--;

    const { region, team, year } = state.currentSpin;
    let newRegion = region;
    let newTeam = team;
    let newYear = year;

    if (type === 'region') {
      const others = REGIONS.filter(r => r.id !== region.id);
      newRegion = others[Math.floor(Math.random() * others.length)];
      const regionTeams = TEAMS[newRegion.id];
      newTeam = regionTeams[Math.floor(Math.random() * regionTeams.length)];
      let availYears = newTeam.years;
      if (state.mode === 'msi') {
        availYears = newTeam.years.filter(y => MSI_YEARS.includes(y));
        if (availYears.length === 0) availYears = newTeam.years;
      }
      newYear = availYears[Math.floor(Math.random() * availYears.length)];
    } else if (type === 'team') {
      const regionTeams = TEAMS[newRegion.id].filter(t => t.id !== team.id);
      if (regionTeams.length > 0) {
        newTeam = regionTeams[Math.floor(Math.random() * regionTeams.length)];
      }
      let availYears = newTeam.years;
      if (state.mode === 'msi') {
        availYears = newTeam.years.filter(y => MSI_YEARS.includes(y));
        if (availYears.length === 0) availYears = newTeam.years;
      }
      newYear = availYears[Math.floor(Math.random() * availYears.length)];
    } else if (type === 'year') {
      let availYears = newTeam.years.filter(y => y !== year);
      if (state.mode === 'msi') {
        availYears = availYears.filter(y => MSI_YEARS.includes(y));
      }
      if (availYears.length > 0) {
        newYear = availYears[Math.floor(Math.random() * availYears.length)];
      }
    }

    const rosterKey = `${newTeam.id}-${newYear}`;
    const roster = ROSTERS[rosterKey];

    state.currentSpin = { region: newRegion, team: newTeam, year: newYear, roster, rosterKey };
    state.selectedPlayer = null;
    state.selectedRole = null;

    // Update wheels display
    const isZh = I18N.getLang() === 'zh';
    document.getElementById('wheel-region').innerHTML =
      `<div class="wheel-value">${isZh ? newRegion.nameZh : newRegion.name}</div>`;
    document.getElementById('wheel-team').innerHTML =
      `<div class="wheel-value">${newTeam.abbr}</div>`;
    document.getElementById('wheel-year').innerHTML =
      `<div class="wheel-value">${newYear}</div>`;

    renderRerollBar();
    renderPlayerSelection();
  }

  // ─── Player Selection ──────────────────────────────
  function renderPlayerSelection() {
    const container = document.getElementById('player-selection');
    container.classList.remove('hidden');

    const { region, team, year, roster } = state.currentSpin;
    if (!roster) {
      container.innerHTML = '<div class="selection-header" style="color:var(--danger)">⚠️ Roster data not found</div>';
      return;
    }

    // Update result banner
    const isZh = I18N.getLang() === 'zh';
    document.getElementById('result-region').textContent = isZh ? region.nameZh : region.name;
    document.getElementById('result-team').textContent = `${team.abbr} (${team.name})`;
    document.getElementById('result-year').textContent = year;

    // Render player cards
    const grid = document.getElementById('player-grid');
    grid.innerHTML = '';

    roster.players.forEach((player, idx) => {
      const isUsed = state.usedPlayers.has(`${player.name}-${player.role}`);
      const card = document.createElement('div');
      card.className = `player-card${isUsed ? ' used' : ''}${state.selectedPlayer === idx ? ' selected' : ''}`;
      card.onclick = () => { if (!isUsed) selectPlayer(idx); };
      card.innerHTML = `
        <div class="player-name">${player.name}</div>
        <div class="player-role">${I18N.t('role.' + player.role)}</div>
      `;
      grid.appendChild(card);
    });

    // Render role buttons
    renderRoleButtons();
    updateConfirmButton();
  }

  function selectPlayer(idx) {
    state.selectedPlayer = idx;

    // Auto-select role if the player's natural role is available
    const player = state.currentSpin.roster.players[idx];
    if (!state.roster[player.role]) {
      state.selectedRole = player.role;
    } else if (!state.selectedRole || state.roster[state.selectedRole]) {
      // Find first available role
      state.selectedRole = ROLES.find(r => !state.roster[r]) || null;
    }

    renderPlayerSelection();
  }

  function renderRoleButtons() {
    const container = document.getElementById('role-assign');
    container.innerHTML = '';

    ROLES.forEach(role => {
      const isFilled = !!state.roster[role];
      const isActive = state.selectedRole === role;
      const btn = document.createElement('button');
      btn.className = `role-btn${isFilled ? ' disabled' : ''}${isActive ? ' active' : ''}`;
      btn.textContent = I18N.t('role.' + role);
      btn.onclick = () => {
        if (!isFilled) {
          state.selectedRole = role;
          renderRoleButtons();
          updateConfirmButton();
        }
      };
      container.appendChild(btn);
    });
  }

  function updateConfirmButton() {
    const btn = document.getElementById('btn-confirm');
    btn.disabled = state.selectedPlayer === null || state.selectedRole === null;
  }

  // ─── Confirm Pick ──────────────────────────────────
  function confirmPick() {
    if (state.selectedPlayer === null || state.selectedRole === null) return;

    const player = state.currentSpin.roster.players[state.selectedPlayer];

    // Add to roster
    state.roster[state.selectedRole] = {
      name: player.name,
      role: player.role,
      assignedRole: state.selectedRole,
      rating: player.rating,
      team: state.currentSpin.team.abbr,
      year: state.currentSpin.year,
    };

    // Mark as used
    state.usedPlayers.add(`${player.name}-${player.role}`);

    // Advance round
    state.round++;
    state.selectedPlayer = null;
    state.selectedRole = null;

    if (state.round >= 5) {
      // All 5 picks made, go to simulation
      showScreen('sim');
      renderSimScreen();
    } else {
      // Next round
      renderDraftScreen();
    }
  }

  // ─── Roster Display ────────────────────────────────
  function renderRoster(targetId = 'roster-grid') {
    const grid = document.getElementById(targetId);
    grid.innerHTML = '';

    ROLES.forEach(role => {
      const player = state.roster[role];
      const slot = document.createElement('div');
      slot.className = `roster-slot${player ? ' filled' : ''}`;

      if (player) {
        slot.innerHTML = `
          <div class="slot-role">${I18N.t('role.' + role)}</div>
          <div class="slot-player">${player.name}</div>
          <div style="font-size:0.65rem;color:var(--text-muted)">${player.team} ${player.year}</div>
        `;
      } else {
        slot.innerHTML = `
          <div class="slot-role">${I18N.t('role.' + role)}</div>
          <div class="slot-empty">${I18N.t('draft.empty')}</div>
        `;
      }

      grid.appendChild(slot);
    });
  }

  // ─── Free Draft Mode ─────────────────────────────────
  let freeDraftPool = [];
  let freeDraftFilter = { text: '', role: 'all' };

  function initFreeDraftPool() {
    if (freeDraftPool.length > 0) return;
    for (const [key, roster] of Object.entries(ROSTERS)) {
      const parts = key.split('-');
      const teamId = parts[0];
      const year = parts[1];
      let teamAbbr = teamId.toUpperCase();
      // Try to find correct abbreviation
      for (const region of Object.values(TEAMS)) {
        const found = region.find(t => t.id === teamId);
        if (found) teamAbbr = found.abbr;
      }
      roster.players.forEach(p => {
        freeDraftPool.push({
          ...p,
          team: teamAbbr,
          year: year,
          key: `${p.name}-${teamAbbr}-${year}-${p.role}` // Unique key
        });
      });
    }
    // Sort by rating descending
    freeDraftPool.sort((a, b) => b.rating - a.rating);
  }

  function startFreeDraftMode() {
    state.mode = 'golden'; // Default to golden road for free draft
    state.phase = 'free-draft';
    state.roster = { top: null, jungle: null, mid: null, adc: null, support: null };
    initFreeDraftPool();
    freeDraftFilter = { text: '', role: 'all' };
    document.getElementById('free-search').value = '';
    
    showScreen('free-draft');
    renderFreeRoster();
    renderFreePlayerPool();
  }

  function renderFreeRoster() {
    const grid = document.getElementById('free-roster-grid');
    grid.innerHTML = '';
    let filledCount = 0;

    ROLES.forEach(role => {
      const player = state.roster[role];
      const slot = document.createElement('div');
      slot.className = `roster-slot${player ? ' filled' : ''}`;
      slot.style.cursor = player ? 'pointer' : 'default';

      if (player) {
        filledCount++;
        slot.style.cursor = 'pointer';
        slot.innerHTML = `
          <div class="slot-role">${I18N.t('role.' + role)}</div>
          <div class="slot-player">${player.name}</div>
          <div style="font-size:0.65rem;color:var(--text-muted)">${player.team} ${player.year}</div>
          <div style="font-size:0.65rem;color:var(--gold-light);margin-top:2px;">(点击移除)</div>
        `;
        slot.onclick = () => removeFreePlayer(role);
      } else {
        slot.style.cursor = 'pointer';
        slot.innerHTML = `
          <div class="slot-role">${I18N.t('role.' + role)}</div>
          <div class="slot-empty">${I18N.t('draft.empty')}</div>
        `;
        slot.onclick = () => setFreeRoleFilter(role);
      }
      grid.appendChild(slot);
    });

    const btnSim = document.getElementById('btn-free-sim');
    btnSim.disabled = filledCount < 5;
  }

  function renderFreePlayerPool() {
    const list = document.getElementById('free-player-list');
    list.innerHTML = '';

    const text = freeDraftFilter.text.toLowerCase();
    const role = freeDraftFilter.role;

    const filtered = freeDraftPool.filter(p => {
      if (role !== 'all' && p.role !== role) return false;
      if (text && !p.name.toLowerCase().includes(text) && !p.team.toLowerCase().includes(text)) return false;
      return true;
    });

    filtered.forEach(p => {
      const isPicked = Object.values(state.roster).some(rp => rp && rp.key === p.key);
      const isRoleFilled = state.roster[p.role] !== null;

      const card = document.createElement('div');
      card.className = `player-card${isPicked ? ' selected' : ''}`;
      
      if (isPicked || isRoleFilled) {
        card.style.opacity = '0.4';
        card.style.cursor = 'not-allowed';
      } else {
        card.onclick = () => pickFreePlayer(p);
      }

      card.innerHTML = `
        <div class="player-role">${I18N.t('role.' + p.role)}</div>
        <div class="player-name">${p.name}</div>
        <div style="font-size: 0.8rem; font-weight: bold; color: var(--gold-mid); text-align: center; margin-top: 4px;">Rating: ${p.rating}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 4px;">${p.team} ${p.year}</div>
      `;
      list.appendChild(card);
    });
  }

  function filterFreePlayers() {
    freeDraftFilter.text = document.getElementById('free-search').value;
    renderFreePlayerPool();
  }

  function setFreeRoleFilter(role) {
    freeDraftFilter.role = role;
    document.querySelectorAll('#free-role-tabs .role-btn').forEach(btn => {
      btn.classList.toggle('active', btn.innerText.toLowerCase() === role.toLowerCase());
    });
    renderFreePlayerPool();
  }

  function pickFreePlayer(playerObj) {
    if (state.roster[playerObj.role]) return; // slot full
    state.roster[playerObj.role] = playerObj;
    renderFreeRoster();
    
    // Auto-advance UX: automatically filter to the next unfilled role
    const emptyRole = ROLES.find(r => !state.roster[r]);
    if (emptyRole) {
      setFreeRoleFilter(emptyRole);
    } else {
      setFreeRoleFilter('all');
    }
  }

  function removeFreePlayer(role) {
    state.roster[role] = null;
    renderFreeRoster();
    renderFreePlayerPool();
  }

  function startFreeSim() {
    // Check if 5 picked
    if (Object.values(state.roster).some(p => !p)) return;
    
    // Switch to sim screen
    showScreen('sim');
    
    // Prepare for sim display using existing logic
    renderSimScreen();
  }

  // ─── Simulation Screen ─────────────────────────────
  function renderSimScreen() {
    // Render roster
    renderRoster('sim-roster-grid');

    // Calculate team rating
    const players = ROLES.map(r => state.roster[r]).filter(Boolean);
    const teamRating = Engine.calcTeamRating(players);

    // Animate rating counter
    animateCounter('team-rating-value', teamRating, 1500);

    // Rating bar
    setTimeout(() => {
      document.getElementById('team-rating-fill').style.width = `${teamRating}%`;
    }, 200);

    // Setup event timeline
    const timeline = document.getElementById('events-timeline');
    timeline.innerHTML = '';

    const events = getEventList();
    events.forEach((evt, idx) => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.id = `event-card-${idx}`;
      card.innerHTML = `
        <div class="event-icon">${evt.icon}</div>
        <div class="event-info">
          <div class="event-name">${I18N.t(evt.nameKey)}</div>
          <div class="event-result" id="event-result-${idx}">—</div>
        </div>
        <div class="event-badge" id="event-badge-${idx}" style="visibility:hidden">—</div>
      `;
      timeline.appendChild(card);
    });

    // Run simulation
    state.simResults = state.mode === 'golden'
      ? Engine.simulateGoldenRoad(players)
      : Engine.simulateMSI(players);

    state.simStageIndex = 0;

    // Update button
    const btn = document.getElementById('btn-sim-action');
    btn.querySelector('span').textContent = I18N.t('sim.start');
    btn.onclick = () => simNext();
  }

  function getEventList() {
    if (state.mode === 'golden') {
      return [
        { icon: '🌸', nameKey: 'sim.spring' },
        { icon: '🌏', nameKey: 'sim.msi' },
        { icon: '☀️', nameKey: 'sim.summer' },
        { icon: '🏆', nameKey: 'sim.worlds' },
      ];
    } else {
      return [
        { icon: '🎫', nameKey: 'sim.msi.playin' },
        { icon: '🌏', nameKey: 'sim.msi.groups' },
        { icon: '⚔️', nameKey: 'sim.msi.knockout' },
        { icon: '🏆', nameKey: 'sim.msi.final' },
      ];
    }
  }

  function simNext() {
    const results = state.simResults;
    if (!results || state.simStageIndex >= results.stages.length) {
      // All stages done, show results
      showScreen('results');
      renderResults();
      return;
    }

    const idx = state.simStageIndex;
    const stageResult = results.stages[idx];

    // Animate the event card
    const card = document.getElementById(`event-card-${idx}`);
    card.classList.add('active');

    // Simulate delay for drama
    setTimeout(() => {
      card.classList.remove('active');
      card.classList.add('completed', stageResult.isChampion ? 'won' : 'lost');

      const resultEl = document.getElementById(`event-result-${idx}`);
      resultEl.textContent = I18N.t(stageResult.placementText);
      resultEl.className = `event-result ${stageResult.isChampion ? 'win' : 'lose'}`;

      const badge = document.getElementById(`event-badge-${idx}`);
      badge.style.visibility = 'visible';
      badge.textContent = I18N.t(stageResult.placementText);
      badge.className = `event-badge ${stageResult.isChampion ? 'champion' : 'eliminated'}`;

      state.simStageIndex++;

      // Update button text
      const btn = document.getElementById('btn-sim-action');
      if (state.simStageIndex >= results.stages.length) {
        btn.querySelector('span').textContent = I18N.t('sim.next');
        btn.onclick = () => {
          showScreen('results');
          renderResults();
        };
      } else {
        btn.querySelector('span').textContent = I18N.t('sim.next');
      }
    }, 800);
  }

  // ─── Results Screen ────────────────────────────────
  function renderResults() {
    const results = state.simResults;
    const banner = document.getElementById('result-banner');
    const title = document.getElementById('result-title');
    const desc = document.getElementById('result-desc');

    const isGolden = state.mode === 'golden' ? results.isGoldenRoad : results.isChampion;
    const totalWins = state.mode === 'golden'
      ? results.totalWins
      : results.stages.filter(s => s.isChampion || s.placement === 'advance').length;

    if (isGolden) {
      banner.className = 'result-banner golden';
      title.className = 'result-title golden';
      title.textContent = I18N.t('result.golden.road');
      desc.textContent = I18N.t('result.golden.road.desc');
      spawnConfetti();
    } else if (state.mode === 'golden' && totalWins >= 3) {
      banner.className = 'result-banner failed';
      title.className = 'result-title';
      title.style.color = 'var(--warning)';
      title.textContent = I18N.t('result.almost');
      desc.textContent = I18N.t('result.almost.desc');
    } else {
      banner.className = 'result-banner failed';
      title.className = 'result-title';
      title.style.color = 'var(--text-secondary)';
      title.textContent = I18N.t('result.failed');
      desc.textContent = I18N.t('result.failed.desc');
    }

    // Stats
    const statsContainer = document.getElementById('result-stats');
    statsContainer.innerHTML = `
      <div class="result-stat">
        <div class="result-stat-value">${results.teamRating}</div>
        <div class="result-stat-label">${I18N.t('sim.team.rating')}</div>
      </div>
      <div class="result-stat">
        <div class="result-stat-value">${state.mode === 'golden' ? results.totalWins : (results.isChampion ? '✓' : '✗')}</div>
        <div class="result-stat-label">${state.mode === 'golden' ? I18N.t('result.wins', { n: 4 }) : 'MSI'}</div>
      </div>
    `;

    // Event results summary
    const eventsContainer = document.getElementById('result-events');
    eventsContainer.innerHTML = '';
    const events = getEventList();

    results.stages.forEach((stageResult, idx) => {
      const evt = events[idx];
      if (!evt) return;
      const card = document.createElement('div');
      card.className = `event-card completed ${stageResult.isChampion ? 'won' : 'lost'}`;
      card.innerHTML = `
        <div class="event-icon">${evt.icon}</div>
        <div class="event-info">
          <div class="event-name">${I18N.t(evt.nameKey)}</div>
          <div class="event-result ${stageResult.isChampion ? 'win' : 'lose'}">${I18N.t(stageResult.placementText)}</div>
        </div>
        <div class="event-badge ${stageResult.isChampion ? 'champion' : 'eliminated'}">${I18N.t(stageResult.placementText)}</div>
      `;
      eventsContainer.appendChild(card);
    });

    I18N.applyAll();

    // Render share card
    renderShareCanvas();
  }

  // ─── Share Card (Canvas) ───────────────────────────
  function renderShareCanvas() {
    const canvas = document.getElementById('share-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 600, H = 780;
    canvas.width = W;
    canvas.height = H;

    const results = state.simResults;
    const isGolden = state.mode === 'golden' ? results.isGoldenRoad : results.isChampion;
    const isZh = I18N.getLang() === 'zh';

    // ── Background
    ctx.fillStyle = '#0a1628';
    ctx.fillRect(0, 0, W, H);

    // ── Gold border
    const borderW = 3;
    const r = 16;
    const m = 20; // margin
    ctx.strokeStyle = isGolden ? '#dbb740' : '#4a5568';
    ctx.lineWidth = borderW;
    roundRect(ctx, m, m, W - 2 * m, H - 2 * m, r);
    ctx.stroke();

    // ── Title: "GOLDEN ROAD LoL" / "黄金之路 LoL"
    const titleText = isZh ? '黄金之路' : 'GOLDEN ROAD';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#dbb740';
    ctx.font = 'bold 36px Orbitron, Inter, sans-serif';
    ctx.fillText(titleText, W / 2, 75);

    ctx.fillStyle = '#8a95a8';
    ctx.font = 'bold 18px Orbitron, Inter, sans-serif';
    ctx.fillText('L o L', W / 2, 100);

    // ── Result status
    let statusText, statusColor;
    if (state.mode === 'golden') {
      if (isGolden) {
        statusText = I18N.t('share.card.success');
        statusColor = '#dbb740';
      } else {
        statusText = I18N.t('share.card.failed');
        statusColor = '#8a95a8';
      }
    } else {
      if (results.isChampion) {
        statusText = I18N.t('share.card.msi.success');
        statusColor = '#dbb740';
      } else {
        statusText = I18N.t('share.card.msi.failed');
        statusColor = '#8a95a8';
      }
    }
    ctx.fillStyle = statusColor;
    ctx.font = 'bold 16px Inter, Noto Sans SC, sans-serif';
    ctx.fillText(statusText, W / 2, 130);

    // ── Team Rating
    const ratingLabel = isZh ? '阵容评分' : 'Team Rating';
    ctx.fillStyle = '#8a95a8';
    ctx.font = '13px Inter, Noto Sans SC, sans-serif';
    ctx.fillText(ratingLabel, W / 2, 165);

    ctx.fillStyle = '#dbb740';
    ctx.font = 'bold 42px Orbitron, Inter, sans-serif';
    ctx.fillText(results.teamRating.toString(), W / 2, 210);

    // ── Roster table
    const tableTop = 235;
    const tableLeft = 50;
    const tableRight = W - 50;
    const tableW = tableRight - tableLeft;
    const rowH = 42;

    // Table border
    ctx.strokeStyle = '#2a3548';
    ctx.lineWidth = 1;
    roundRect(ctx, tableLeft, tableTop, tableW, rowH * 5 + 10, 10);
    ctx.stroke();

    // Role icons (text-based)
    const roleIcons = { top: '🗡', jungle: '🌿', mid: '💎', adc: '🏹', support: '🛡' };

    ROLES.forEach((role, i) => {
      const player = state.roster[role];
      if (!player) return;
      const y = tableTop + 8 + i * rowH + rowH / 2;

      // Role icon
      ctx.textAlign = 'left';
      ctx.font = '16px sans-serif';
      ctx.fillText(roleIcons[role] || '•', tableLeft + 15, y + 5);

      // Player name
      ctx.fillStyle = '#eaf0ff';
      ctx.font = 'bold 15px Inter, Noto Sans SC, sans-serif';
      ctx.fillText(player.name, tableLeft + 45, y + 5);

      // Team info (right-aligned)
      ctx.textAlign = 'right';
      ctx.fillStyle = '#6b7a8d';
      ctx.font = '12px Inter, Noto Sans SC, sans-serif';

      // Find region for this team
      let regionName = '';
      for (const [rid, teams] of Object.entries(TEAMS)) {
        if (teams.some(t => t.abbr === player.team)) {
          const region = REGIONS.find(r => r.id === rid);
          regionName = region ? (isZh ? region.nameZh.split(' ')[0] : region.name) : '';
          break;
        }
      }
      ctx.fillText(`${player.team} · ${regionName} ${player.year}`, tableRight - 15, y + 5);

      // Row separator
      if (i < 4) {
        ctx.strokeStyle = '#1a2538';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tableLeft + 10, tableTop + 8 + (i + 1) * rowH);
        ctx.lineTo(tableRight - 10, tableTop + 8 + (i + 1) * rowH);
        ctx.stroke();
      }
    });

    // ── Event results row
    const evtTop = tableTop + rowH * 5 + 35;
    const events = getEventList();
    const evtCount = events.length;
    const evtBoxW = Math.min(110, (tableW - 20) / evtCount - 8);
    const totalEvtW = evtCount * (evtBoxW + 8) - 8;
    const evtStartX = W / 2 - totalEvtW / 2;

    events.forEach((evt, i) => {
      const stageResult = results.stages[i];
      if (!stageResult) return;

      const x = evtStartX + i * (evtBoxW + 8);
      const isWin = stageResult.isChampion;

      // Event box
      ctx.strokeStyle = isWin ? '#2a6e3f' : '#4a3030';
      ctx.lineWidth = 1;
      roundRect(ctx, x, evtTop, evtBoxW, 55, 6);
      ctx.stroke();

      // Event name (short)
      ctx.textAlign = 'center';
      ctx.fillStyle = '#8a95a8';
      ctx.font = 'bold 9px Inter, Noto Sans SC, sans-serif';
      const shortNames = state.mode === 'golden'
        ? (isZh ? ['春季赛', 'MSI', '夏季赛', '世界赛'] : ['SPRING', 'MSI', 'SUMMER', 'WORLDS'])
        : (isZh ? ['入围赛', '小组赛', '淘汰赛', '决赛'] : ['PLAY-IN', 'GROUPS', 'KNOCKOUT', 'FINAL']);
      ctx.fillText(shortNames[i] || '', x + evtBoxW / 2, evtTop + 18);

      // Result
      let placementShort;
      if (stageResult.isChampion) {
        placementShort = isZh ? '🏆冠军' : '🏆 1st';
      } else if (stageResult.placement === 'finalist') {
        placementShort = isZh ? '亚军' : '2nd';
      } else if (stageResult.placement === 'top4') {
        placementShort = isZh ? '四强' : 'Top 4';
      } else if (stageResult.placement === 'top8') {
        placementShort = isZh ? '八强' : 'Top 8';
      } else if (stageResult.placement === 'advance') {
        placementShort = '✓';
      } else {
        placementShort = isZh ? '出局' : 'Out';
      }

      ctx.fillStyle = isWin ? '#34d399' : '#f87171';
      ctx.font = 'bold 14px Inter, Noto Sans SC, sans-serif';
      ctx.fillText(placementShort, x + evtBoxW / 2, evtTop + 42);
    });

    // ── Footer URL
    ctx.textAlign = 'center';
    ctx.fillStyle = '#4a5568';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText(isZh ? '黄金之路 LoL' : 'goldenroadlol.com', W / 2, H - 35);
  }

  /**
   * Helper: draw a rounded rectangle path
   */
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  // ─── Build Share Text ──────────────────────────────
  function buildShareText() {
    const results = state.simResults;
    const isGolden = state.mode === 'golden' ? results.isGoldenRoad : results.isChampion;
    const isZh = I18N.getLang() === 'zh';

    // Result line
    let resultLine;
    if (state.mode === 'golden') {
      resultLine = isGolden ? I18N.t('share.card.success') : I18N.t('share.card.failed');
    } else {
      resultLine = results.isChampion ? I18N.t('share.card.msi.success') : I18N.t('share.card.msi.failed');
    }

    // Roster lines
    const roleLabels = { top: '🗡', jungle: '🌿', mid: '💎', adc: '🏹', support: '🛡' };
    const rosterLines = ROLES.map(role => {
      const p = state.roster[role];
      if (!p) return '';
      return `${roleLabels[role]} ${p.name} (${p.team} ${p.year})`;
    }).join('\n');

    // Event lines
    const events = getEventList();
    const shortNames = state.mode === 'golden'
      ? (isZh ? ['春季赛', 'MSI', '夏季赛', '世界赛'] : ['Spring', 'MSI', 'Summer', 'Worlds'])
      : (isZh ? ['入围赛', '小组赛', '淘汰赛', '决赛'] : ['Play-In', 'Groups', 'Knockout', 'Final']);

    const evtLines = results.stages.map((s, i) => {
      const mark = s.isChampion ? '🏆' : '❌';
      return `${mark} ${shortNames[i] || ''}: ${I18N.t(s.placementText)}`;
    }).join('\n');

    return I18N.t('share.text', {
      rating: results.teamRating,
      result: resultLine,
      roster: rosterLines,
      events: evtLines,
    });
  }

  // ─── Copy to Clipboard ─────────────────────────────
  function copyShareText() {
    const text = buildShareText();
    navigator.clipboard.writeText(text).then(() => {
      showToast();
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast();
    });
  }

  // ─── Download Image ────────────────────────────────
  function downloadImage() {
    const canvas = document.getElementById('share-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'golden-road-result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  // ─── Post to X (Twitter) ───────────────────────────
  function postToX() {
    const text = buildShareText();
    const encoded = encodeURIComponent(text);
    window.open(`https://x.com/intent/tweet?text=${encoded}`, '_blank');
  }

  // ─── Toast Notification ────────────────────────────
  function showToast() {
    const toast = document.getElementById('toast-copied');
    if (!toast) return;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2000);
  }

  // ─── Confetti ──────────────────────────────────────
  function spawnConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#c9a227', '#f0d060', '#dbb740', '#ffd700', '#fff8dc', '#2d6cdf', '#5b9aff'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = `${2 + Math.random() * 3}s`;
      piece.style.animationDelay = `${Math.random() * 2}s`;
      piece.style.width = `${6 + Math.random() * 8}px`;
      piece.style.height = `${6 + Math.random() * 8}px`;
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
    }

    // Clean up after animation
    setTimeout(() => { container.innerHTML = ''; }, 6000);
  }

  // ─── Counter Animation ─────────────────────────────
  function animateCounter(elementId, target, duration) {
    const el = document.getElementById(elementId);
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (target - start) * ease);
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ─── Replay ────────────────────────────────────────
  function replay() {
    startMode(state.mode);
  }

  // ─── Modals ────────────────────────────────────────
  function showModal(type) {
    const overlay = document.getElementById(`modal-${type}`);
    if (overlay) overlay.classList.add('active');
  }

  function closeModal(type) {
    const overlay = document.getElementById(`modal-${type}`);
    if (overlay) overlay.classList.remove('active');
  }

  // Close modal on overlay click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // ─── Visitor Counter ───────────────────────────────
  async function initVisitorCounter() {
    const counterEl = document.getElementById('visitor-text');
    const containerEl = document.getElementById('visitor-counter');
    if (!counterEl || !containerEl) return;

    const storageKey = 'lol_golden_road_visited';
    const cacheKey = 'lol_golden_road_visit_count';
    const namespace = 'lol-golden-road';
    const key = 'unique-visitors';

    // Helper to update UI & cache
    function updateUI(count) {
      const num = parseInt(count, 10);
      if (isNaN(num)) return;
      localStorage.setItem(cacheKey, num.toString());
      
      // Update text parameters for i18n
      counterEl.setAttribute('data-i18n-params', JSON.stringify({ count: num.toLocaleString() }));
      
      // Re-apply translations specifically
      counterEl.textContent = I18N.t('footer.visitor.count', { count: num.toLocaleString() });
      
      // Show container
      containerEl.style.display = 'inline-flex';
    }

    // Load from cache first for instant feedback
    const cachedCount = localStorage.getItem(cacheKey);
    if (cachedCount) {
      updateUI(cachedCount);
    }

    const hasVisited = localStorage.getItem(storageKey);
    const action = hasVisited ? 'unique-visitors' : 'unique-visitors/up';
    const url = `https://api.counterapi.dev/v1/${namespace}/${action}`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && typeof data.count === 'number') {
          updateUI(data.count);
          if (!hasVisited) {
            localStorage.setItem(storageKey, 'true');
          }
        }
      }
    } catch (err) {
      console.warn('Failed to fetch visitor count:', err);
    }
  }

  // ─── Init ──────────────────────────────────────────
  function init() {
    // Set initial language
    const lang = I18N.getLang();
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Listen for language changes
    document.addEventListener('langchange', () => {
      if (state.phase === 'draft') {
        renderRoster();
        renderRerollBar();
        updateRoundBadge();
        if (state.hasSpun) renderPlayerSelection();
      }
      if (state.phase === 'sim') renderSimScreen();
      if (state.phase === 'results') renderResults();
    });

    // Apply initial translations
    I18N.applyAll();

    // Start visitor counter
    initVisitorCounter();
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ─── Public API ────────────────────────────────────
  return {
    startMode,
    startFreeDraftMode,
    filterFreePlayers,
    setFreeRoleFilter,
    startFreeSim,
    backToStart,
    spin,
    reroll,
    confirmPick,
    simNext,
    replay,
    toggleLang,
    showModal,
    closeModal,
    copyShareText,
    downloadImage,
    postToX,
  };
})();
