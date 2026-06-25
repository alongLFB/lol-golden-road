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
