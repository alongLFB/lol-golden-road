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
