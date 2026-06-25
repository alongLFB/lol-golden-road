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
