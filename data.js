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
