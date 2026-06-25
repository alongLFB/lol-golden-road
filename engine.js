/**
 * engine.js — 赛季模拟引擎
 * Golden Road LoL 黄金之路
 *
 * Simulates a season of events (Spring, MSI, Summer, Worlds)
 * using team ratings with randomness for realistic outcomes.
 */

const Engine = (() => {

  /**
   * Calculate team rating from picked players
   * @param {Array} roster - Array of player objects with .rating
   * @returns {number} Average team rating (1-99)
   */
  function calcTeamRating(roster) {
    if (!roster || roster.length === 0) return 0;
    const total = roster.reduce((sum, p) => sum + p.rating, 0);
    return Math.round(total / roster.length);
  }

  /**
   * Simulate a single match. Higher rating = higher chance to win.
   * Uses logistic-style probability with randomness.
   * @param {number} teamRating - Your team's rating
   * @param {number} opponentRating - Opponent's rating
   * @returns {boolean} True if your team wins
   */
  function simulateMatch(teamRating, opponentRating) {
    const diff = teamRating - opponentRating;
    // Logistic curve: P(win) = 1 / (1 + e^(-k*diff))
    // k = 0.08 gives reasonable spread
    const k = 0.08;
    const pWin = 1 / (1 + Math.exp(-k * diff));
    return Math.random() < pWin;
  }

  /**
   * Simulate a Best-of-N series
   * @param {number} teamRating
   * @param {number} opponentRating
   * @param {number} bestOf - 1, 3, or 5
   * @returns {boolean} True if your team wins the series
   */
  function simulateSeries(teamRating, opponentRating, bestOf) {
    const winsNeeded = Math.ceil(bestOf / 2);
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < bestOf; i++) {
      if (simulateMatch(teamRating, opponentRating)) {
        wins++;
      } else {
        losses++;
      }
      if (wins >= winsNeeded) return true;
      if (losses >= winsNeeded) return false;
    }
    return wins > losses;
  }

  /**
   * Generate a random opponent rating based on stage difficulty
   * @param {string} stage - 'spring', 'msi', 'summer', 'worlds'
   * @param {string} round - 'group', 'quarter', 'semi', 'final'
   * @returns {number} Opponent rating
   */
  function generateOpponent(stage, round) {
    // Base difficulty ranges per stage
    const stageBase = {
      spring: { min: 60, max: 82 },
      msi:    { min: 72, max: 90 },
      summer: { min: 62, max: 84 },
      worlds: { min: 75, max: 95 },
    };

    // Round modifiers (later rounds = harder)
    const roundMod = {
      group:   0,
      quarter: 3,
      semi:    6,
      final:   10,
    };

    const base = stageBase[stage] || stageBase.spring;
    const mod = roundMod[round] || 0;

    const min = Math.min(base.min + mod, 95);
    const max = Math.min(base.max + mod, 98);

    return Math.floor(min + Math.random() * (max - min + 1));
  }

  /**
   * Simulate a full stage (e.g. Spring Split)
   * Returns result object with placement
   * @param {number} teamRating
   * @param {string} stage
   * @returns {Object} { stage, placement, isChampion, details[] }
   */
  function simulateStage(teamRating, stage) {
    const details = [];
    let alive = true;

    // Group stage (3 BO1 matches)
    const groupOpponents = [
      generateOpponent(stage, 'group'),
      generateOpponent(stage, 'group'),
      generateOpponent(stage, 'group'),
    ];

    let groupWins = 0;
    groupOpponents.forEach((opp, i) => {
      const win = simulateMatch(teamRating, opp);
      if (win) groupWins++;
      details.push({
        round: 'group',
        game: i + 1,
        opponent: opp,
        win,
      });
    });

    // Need at least 2 wins to advance from groups
    if (groupWins < 2) {
      return {
        stage,
        placement: 'group',
        isChampion: false,
        details,
        placementText: 'sim.group.stage',
      };
    }

    // Quarterfinals (BO5)
    const qfOpp = generateOpponent(stage, 'quarter');
    const qfWin = simulateSeries(teamRating, qfOpp, 5);
    details.push({ round: 'quarter', opponent: qfOpp, win: qfWin });

    if (!qfWin) {
      return {
        stage,
        placement: 'top8',
        isChampion: false,
        details,
        placementText: 'sim.top8',
      };
    }

    // Semifinals (BO5)
    const sfOpp = generateOpponent(stage, 'semi');
    const sfWin = simulateSeries(teamRating, sfOpp, 5);
    details.push({ round: 'semi', opponent: sfOpp, win: sfWin });

    if (!sfWin) {
      return {
        stage,
        placement: 'top4',
        isChampion: false,
        details,
        placementText: 'sim.top4',
      };
    }

    // Finals (BO5)
    const fOpp = generateOpponent(stage, 'final');
    const fWin = simulateSeries(teamRating, fOpp, 5);
    details.push({ round: 'final', opponent: fOpp, win: fWin });

    if (!fWin) {
      return {
        stage,
        placement: 'finalist',
        isChampion: false,
        details,
        placementText: 'sim.finalist',
      };
    }

    return {
      stage,
      placement: 'champion',
      isChampion: true,
      details,
      placementText: 'sim.champion',
    };
  }

  /**
   * Simulate the Golden Road: Spring → MSI → Summer → Worlds
   * @param {number} teamRating
   * @returns {Object} { stages[], isGoldenRoad, totalWins }
   */
  function simulateGoldenRoad(teamRating) {
    const stageNames = ['spring', 'msi', 'summer', 'worlds'];
    const stages = [];
    let totalWins = 0;

    for (const stageName of stageNames) {
      const result = simulateStage(teamRating, stageName);
      stages.push(result);
      if (result.isChampion) totalWins++;
    }

    return {
      stages,
      isGoldenRoad: totalWins === 4,
      totalWins,
      teamRating,
    };
  }

  /**
   * Simulate MSI Challenge Mode (shorter, focused on MSI stages)
   * Play-In → Groups → Knockout → Final
   * @param {number} teamRating
   * @returns {Object} { stages[], isChampion, teamRating }
   */
  function simulateMSI(teamRating) {
    const details = [];
    const stages = [];

    // Play-In stage (2 BO1 matches, need both)
    const playInOpps = [
      generateOpponent('msi', 'group') - 5,
      generateOpponent('msi', 'group') - 3,
    ];
    let playInWins = 0;
    playInOpps.forEach((opp, i) => {
      const effOpp = Math.max(55, opp);
      const win = simulateMatch(teamRating, effOpp);
      if (win) playInWins++;
      details.push({ round: 'playin', game: i + 1, opponent: effOpp, win });
    });

    stages.push({
      stage: 'msi_playin',
      placement: playInWins >= 1 ? 'advance' : 'eliminated',
      isChampion: false,
      details: [...details],
      placementText: playInWins >= 1 ? 'sim.top8' : 'sim.eliminated',
    });

    if (playInWins < 1) {
      return { stages, isChampion: false, teamRating };
    }

    // Group stage (3 BO1 matches, need 2 wins)
    const groupDetails = [];
    let groupWins = 0;
    for (let i = 0; i < 3; i++) {
      const opp = generateOpponent('msi', 'group');
      const win = simulateMatch(teamRating, opp);
      if (win) groupWins++;
      groupDetails.push({ round: 'group', game: i + 1, opponent: opp, win });
    }

    stages.push({
      stage: 'msi_groups',
      placement: groupWins >= 2 ? 'advance' : 'group',
      isChampion: false,
      details: groupDetails,
      placementText: groupWins >= 2 ? 'sim.top4' : 'sim.group.stage',
    });

    if (groupWins < 2) {
      return { stages, isChampion: false, teamRating };
    }

    // Knockout Semifinal (BO5)
    const knockDetails = [];
    const sfOpp = generateOpponent('msi', 'semi');
    const sfWin = simulateSeries(teamRating, sfOpp, 5);
    knockDetails.push({ round: 'semi', opponent: sfOpp, win: sfWin });

    stages.push({
      stage: 'msi_knockout',
      placement: sfWin ? 'advance' : 'top4',
      isChampion: false,
      details: knockDetails,
      placementText: sfWin ? 'sim.finalist' : 'sim.top4',
    });

    if (!sfWin) {
      return { stages, isChampion: false, teamRating };
    }

    // Grand Final (BO5)
    const finalDetails = [];
    const fOpp = generateOpponent('msi', 'final');
    const fWin = simulateSeries(teamRating, fOpp, 5);
    finalDetails.push({ round: 'final', opponent: fOpp, win: fWin });

    stages.push({
      stage: 'msi_final',
      placement: fWin ? 'champion' : 'finalist',
      isChampion: fWin,
      details: finalDetails,
      placementText: fWin ? 'sim.champion' : 'sim.finalist',
    });

    return {
      stages,
      isChampion: fWin,
      teamRating,
    };
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
