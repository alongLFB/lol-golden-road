const fs = require('fs');
global.I18N = { t: (key) => key };
global.TEAMS = { lck: [{id:'t1', abbr:'T1'}] };
global.ROSTERS = { 't1-2025': { players: [{name:'Faker', role:'mid', rating:99}] } };
let freeDraftPool = [];
const roster = global.ROSTERS['t1-2025'];
roster.players.forEach(p => freeDraftPool.push({...p, team: 'T1', year: '2025'}));

let html = "";
freeDraftPool.forEach(p => {
  html += `
        <div class="player-role">${I18N.t('role.' + p.role)}</div>
        <div class="player-name">${p.name}</div>
        <div style="font-size: 0.8rem; font-weight: bold; color: var(--gold-mid); text-align: center; margin-top: 4px;">Rating: ${p.rating}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 4px;">${p.team} ${p.year}</div>
      `;
});
console.log(html);
