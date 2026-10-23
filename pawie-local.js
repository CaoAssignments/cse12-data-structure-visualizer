// Pawie without a server: XP sources, the daily cap, streaks, the wardrobe and the daily quiz, kept in this
// browser's localStorage. There is no account, email or password.
//
// Save file: one JSON object under localStorage "pawie.save.v1". It can be written to a file and loaded
// back (exportText / importText), which is how a student moves Pawie to another browser or device.
(function () {
  'use strict';
  const root = typeof window !== 'undefined' ? window : globalThis;
  const Q = root.PawieQuiz || { PA_SCHEDULE: {}, QUIZ_DAYS: {}, JOKES_DAYS: {} };
  const CFG = Object.assign({ structs: ['ArrayList'], tz: 'America/Los_Angeles', quizToday: '' }, root.PAWIE_STATIC_CONFIG || {});
  const SAVE_KEY = 'pawie.save.v1';

  // ---- rules (mirrors auth.js) ----
  const DAILY_XP_CAP = 225;
  const SOURCES = {
    daily_visit:  { xp: 15, xpCap: 15 },
    ctor_new:     { xp: 15, xpCap: 15, unique: true },
    method_new:   { xp: 15, xpCap: 60, unique: true },
    watch_end:    { xp: 15, xpCap: 45, minGapMs: 2000 },
    quiz_correct: { xp: 18, xpCap: 90, unique: true },
    quiz_wrong:   { xp: 18, xpCap: 90, unique: true },
  };
  const EVENTS = {
    daily_visit: ['daily_visit'], ctor: ['ctor_new'], method: ['method_new'],
    watch: ['watch_end'], quiz_correct: ['quiz_correct'], quiz_wrong: ['quiz_wrong'],
  };
  const STREAK_BONUS = 10;
  const isStreakDay = (n) => n === 3 || (n > 0 && n % 7 === 0);
  const dayKeyAt = (ms) => new Date(ms).toLocaleDateString('en-CA', { timeZone: CFG.tz });
  const dayKey = () => dayKeyAt(Date.now());
  const yesterdayKey = () => dayKeyAt(Date.now() - 86400000);

  const WEEKLY_XP = 650;
  const UNLOCK_SCHEDULE = [
    ['outfit', 'grey',    'Grey outfit',       'grey',    300],
    ['hat',    'cap',     'Grey baseball cap', 'grey',    800],
    ['outfit', 'red',     'Red outfit',        'red',    1300],
    ['hat',    'apple',   'Apple',             'red',    1800],
    ['outfit', 'blue',    'Blue outfit',       'blue',   2300],
    ['hat',    'diamond', 'Blue diamond',      'blue',   2800],
    ['outfit', 'yellow',  'Yellow outfit',     'yellow', 3300],
    ['hat',    'crown',   'Crown',             'yellow', 3800],
  ];
  const WARDROBE = (() => {
    const slots = { hat: [], outfit: [] };
    for (const [slot, id, name, set, xp] of UNLOCK_SCHEDULE) slots[slot].push({ id, name, set, xp, week: Math.ceil(xp / WEEKLY_XP) });
    return { weeks: 6, weeklyXp: WEEKLY_XP, dailyXp: DAILY_XP_CAP, order: ['hat', 'outfit'], slots };
  })();
  const ITEMS = Object.entries(WARDROBE.slots).flatMap(([slot, list]) => list.map((i) => Object.assign({}, i, { slot }))).sort((a, b) => a.xp - b.xp);
  let allOpen = () => false;
  const owned = (slot, id, xp) => id === 'none' || (WARDROBE.slots[slot] || []).some((i) => i.id === id && (allOpen() || xp >= i.xp));
  const MAX_XP = ITEMS[ITEMS.length - 1].xp;
  const QUIZ_PER_DAY = 5;

  // ---- storage ----
  // localStorage can be missing or throw (private windows, blocked site data). The save then lives in memory
  // for this visit only, and storageOk() tells the page so it can warn the student.
  let mem = null, storageFailed = false;
  const rand = () => {
    try { return Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(36).padStart(2, '0')).join('').slice(0, 20); }
    catch (e) { return (Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).slice(0, 20).padEnd(12, '0'); }
  };
  const blank = () => ({
    v: 1, anon: rand(), created: Date.now(), lastExport: 0,
    pet: { name: 'Pawie', xp: 0, hat: 'none', outfit: 'none', day: '', day_xp: 0, day_state: {}, streak: 0, last_visit: '' },
    quiz: {},
  });
  const store = () => { try { return root.localStorage || null; } catch (e) { return null; } };

  function sane(raw) {            // accept only a well-formed save; anything odd is rebuilt field by field
    if (!raw || typeof raw !== 'object' || !raw.pet || typeof raw.pet !== 'object') return null;
    const b = blank(), p = raw.pet;
    const num = (x, lo, hi, d) => (Number.isFinite(Number(x)) ? Math.min(hi, Math.max(lo, Math.floor(Number(x)))) : d);
    const out = {
      v: 1,
      anon: /^[A-Za-z0-9_-]{8,40}$/.test(raw.anon || '') ? raw.anon : b.anon,
      created: num(raw.created, 0, Date.now() + 86400000, b.created),
      lastExport: num(raw.lastExport, 0, Date.now() + 86400000, 0),
      pet: {
        name: String(p.name || 'Pawie').replace(/\s+/g, ' ').trim().slice(0, 20) || 'Pawie',
        xp: num(p.xp, 0, MAX_XP + 1000, 0),
        hat: 'none', outfit: 'none',
        day: /^\d{4}-\d{2}-\d{2}$/.test(p.day || '') ? p.day : '',
        day_xp: num(p.day_xp, 0, DAILY_XP_CAP, 0),
        day_state: {},
        streak: num(p.streak, 0, 3650, 0),
        last_visit: /^\d{4}-\d{2}-\d{2}$/.test(p.last_visit || '') ? p.last_visit : '',
      },
      quiz: {},
    };
    for (const slot of WARDROBE.order) out.pet[slot] = owned(slot, String(p[slot] || 'none'), out.pet.xp) ? String(p[slot] || 'none') : 'none';
    let st = p.day_state;
    if (typeof st === 'string') { try { st = JSON.parse(st); } catch (e) { st = {}; } }
    if (st && typeof st === 'object') {
      const keep = {};
      for (const k of ['x', 'k', 't']) if (st[k] && typeof st[k] === 'object') keep[k] = st[k];
      out.pet.day_state = keep;
    }
    if (raw.quiz && typeof raw.quiz === 'object') {
      for (const [key, v] of Object.entries(raw.quiz)) {
        if (!/^[A-Za-z]{1,24}:\d{1,2}:\d{1,2}$/.test(key) || !v || typeof v !== 'object') continue;
        out.quiz[key] = { chosen: num(v.chosen, 0, 9, 0), on_time: v.on_time ? 1 : 0, ts: num(v.ts, 0, Date.now() + 86400000, 0) };
      }
    }
    return out;
  }
  function load() {
    if (mem) return mem;
    const s = store();
    if (s) {
      try {
        const text = s.getItem(SAVE_KEY);
        if (text) {
          const got = sane(JSON.parse(text));
          if (got) return (mem = got);
          s.setItem(SAVE_KEY + '.corrupt', text);           // keep what we could not read, never silently drop it
        }
      } catch (e) { storageFailed = true; }
    } else storageFailed = true;
    mem = blank();
    persist();
    return mem;
  }
  function persist() {
    const s = store();
    if (!s || !mem) { storageFailed = true; return; }
    try { s.setItem(SAVE_KEY, JSON.stringify(mem)); storageFailed = false; } catch (e) { storageFailed = true; }
  }

  const mode = () => 'student';
  const isStaff = () => false;
  const fail = (status, message, code) => { throw Object.assign(new Error(message), { status, code }); };

  // ---- the pet ----
  function tasksOf(p) {
    const st = p.day === dayKey() ? p.day_state : {};
    const k = st.k || {}, x = st.x || {};
    const n = (name) => (k[name] || []).length;
    return {
      visit: p.last_visit === dayKey() ? 1 : 0,
      ctor: n('ctor_new'),
      method: n('method_new'),
      watch: Math.min(Math.floor((x.watch_end || 0) / SOURCES.watch_end.xp), 3),
      quiz: n('quiz_correct') + n('quiz_wrong'),
    };
  }
  function petView() {
    const p = load().pet;
    const unlocked = ITEMS.filter((i) => p.xp >= i.xp);
    const next = ITEMS.find((i) => p.xp < i.xp) || null;
    const look = {};
    for (const slot of WARDROBE.order) look[slot] = owned(slot, p[slot], p.xp) ? p[slot] : 'none';
    const live = p.last_visit === dayKey() || p.last_visit === yesterdayKey();
    return Object.assign({ name: p.name, xp: p.xp }, look, {
      unlockedCount: unlocked.length, total: ITEMS.length,
      prevXp: unlocked.length ? unlocked[unlocked.length - 1].xp : 0,
      next: next && { slot: next.slot, id: next.id, name: next.name, xp: next.xp },
      todayXp: p.day === dayKey() ? p.day_xp : 0, dailyCap: DAILY_XP_CAP,
      streak: live ? p.streak : 0,
      tasks: tasksOf(p),
    });
  }
  const account = () => ({ token: 'local', ident: 'this browser', verified: true, role: mode(), pet: petView() });

  function petEvent(body) {
    const candidates = EVENTS[body.type];
    if (!candidates) fail(400, 'Unknown event.');
    const key = String(body.key == null ? '' : body.key).slice(0, 80);
    const now = Date.now(), today = dayKey();
    const save = load(), p = save.pet;
    const fresh = p.day === today;
    const state = fresh ? JSON.parse(JSON.stringify(p.day_state || {})) : {};
    state.x = state.x || {}; state.k = state.k || {}; state.t = state.t || {};

    let streak = p.streak, lastVisit = p.last_visit, streakBonus = 0;
    if (body.type === 'daily_visit') {
      if (p.last_visit === today) return { gained: 0, limited: true, unlockedNow: [], pet: petView() };
      streak = p.last_visit === yesterdayKey() ? p.streak + 1 : 1;
      lastVisit = today;
      if (isStreakDay(streak)) streakBonus = STREAK_BONUS;
    }

    let gain = 0;
    for (const name of candidates) {
      const src = SOURCES[name];
      if (src.unique && !key) continue;
      if (src.unique && (state.k[name] || []).includes(key)) continue;
      if (src.minGapMs && state.t[name] && now - state.t[name] < src.minGapMs) continue;
      const room = src.xpCap - (state.x[name] || 0);
      if (room <= 0) continue;
      gain = Math.min(src.xp, room);
      state.x[name] = (state.x[name] || 0) + gain;
      state.t[name] = now;
      if (src.unique) (state.k[name] = state.k[name] || []).push(key);
      break;
    }
    if (!gain && !streakBonus) return { gained: 0, limited: true, unlockedNow: [], pet: petView() };

    const used = fresh ? p.day_xp : 0;
    const add = Math.max(0, Math.min(gain + streakBonus, DAILY_XP_CAP - used));
    const before = p.xp;
    p.xp += add; p.day = today; p.day_xp = used + add; p.day_state = state; p.streak = streak; p.last_visit = lastVisit;
    persist();
    const unlockedNow = ITEMS.filter((i) => i.xp > before && i.xp <= before + add).map((i) => ({ slot: i.slot, id: i.id, name: i.name }));
    return { gained: add, capped: add < gain + streakBonus, streakBonus, unlockedNow, pet: petView() };
  }

  // ---- the daily quiz and jokes: released by date ----
  const quizToday = () => CFG.quizToday || dayKey();
  const isoDay = (iso) => Math.floor(Date.parse(iso + 'T00:00:00Z') / 86400000);
  const dateOfQuizDay = (start, day) => new Date((isoDay(start) + day - 1) * 86400000).toISOString().slice(0, 10);
  const seeAll = () => isStaff();

  function quizList(body) {
    const struct = String(body.struct || '');
    const days = Q.QUIZ_DAYS[struct], sched = Q.PA_SCHEDULE[struct];
    if (!days || !sched) return { struct, scheduled: false };
    const today = quizToday(), all = seeAll(), quiz = load().quiz;
    const out = days.map((qs, i) => {
      const day = i + 1, date = dateOfQuizDay(sched.start, day), open = all || date <= today;
      if (!open) return { day, date, open: false };
      const answered = qs.map((_, k) => k).filter((k) => quiz[struct + ':' + day + ':' + k]);
      const done = answered.length >= qs.length;
      const entry = { day, date, open: true, answered, done, questions: qs.map((it) => ({ q: it.q, opt: it.opt })) };
      if (done) {
        entry.results = qs.map((it, k) => ({ chosen: quiz[struct + ':' + day + ':' + k].chosen, ans: it.ans, why: it.why }));
        entry.onTime = qs.every((_, k) => !!quiz[struct + ':' + day + ':' + k].on_time);
      }
      return entry;
    });
    return { struct, scheduled: true, today, total: days.length, perDay: QUIZ_PER_DAY, days: out };
  }
  function jokeList(body) {
    const struct = String(body.struct || '');
    const days = Q.JOKES_DAYS[struct], sched = Q.PA_SCHEDULE[struct] || Q.PA_SCHEDULE.ArrayList;
    if (!days || !sched) return { struct, scheduled: false };
    const today = quizToday(), all = seeAll();
    const out = days.map((js, i) => {
      const day = i + 1, date = dateOfQuizDay(sched.start, day), open = all || date <= today;
      return open ? { day, date, open: true, jokes: js } : { day, date, open: false };
    });
    return { struct, scheduled: true, today, total: days.length, days: out };
  }
  function quizAnswer(body) {
    const struct = String(body.struct || ''), day = Number(body.day), idx = Number(body.idx), chosen = Number(body.chosen);
    const days = Q.QUIZ_DAYS[struct], sched = Q.PA_SCHEDULE[struct];
    if (!days || !sched || !Number.isInteger(day) || day < 1 || day > days.length) fail(400, 'Unknown quiz day.');
    const qs = days[day - 1];
    if (!Number.isInteger(idx) || idx < 0 || idx >= qs.length) fail(400, 'Unknown question.');
    if (!Number.isInteger(chosen) || chosen < 0 || chosen >= qs[idx].opt.length) fail(400, 'Pick one of the options.');
    const today = quizToday(), date = dateOfQuizDay(sched.start, day);
    if (!isStaff() && date > today) fail(403, "That day's questions are not open yet.", 'locked');
    const save = load(), key = struct + ':' + day + ':' + idx;
    let gained = 0, unlockedNow = [], pet;
    if (!save.quiz[key]) {
      const onTime = date === today;
      save.quiz[key] = { chosen, on_time: onTime ? 1 : 0, ts: Date.now() };
      persist();
      if (onTime) {
        const r = petEvent({ type: chosen === qs[idx].ans ? 'quiz_correct' : 'quiz_wrong', key });
        gained = r.gained; unlockedNow = r.unlockedNow || []; pet = r.pet;
      }
    }
    const done = qs.every((_, k) => save.quiz[struct + ':' + day + ':' + k]);
    const reply = Object.assign({ saved: true, gained, unlockedNow, done, onTime: date === today }, pet ? { pet } : {});
    if (done) reply.results = qs.map((it, k) => ({ chosen: save.quiz[struct + ':' + day + ':' + k].chosen, ans: it.ans, why: it.why }));
    return reply;
  }

  function rename(body) {
    const name = String(body.name || '').trim().replace(/\s+/g, ' ');
    if (!name || name.length > 20) fail(400, 'Pick a name of 1 to 20 characters.');
    load().pet.name = name; persist();
    return { pet: petView() };
  }
  function equip(body) {
    const p = load().pet, next = {};
    for (const slot of WARDROBE.order) {
      const current = owned(slot, p[slot], p.xp) ? p[slot] : 'none';
      const want = body[slot] === undefined ? current : String(body[slot]);
      if (!owned(slot, want, p.xp)) fail(403, 'That item is not unlocked yet.');
      next[slot] = want;
    }
    for (const slot of WARDROBE.order) p[slot] = next[slot];
    persist();
    return { pet: petView() };
  }

  // ---- the save file ----
  function exportText() {
    const save = load();
    save.lastExport = Date.now(); persist();
    return JSON.stringify({ app: 'pawie', v: 1, exported: save.lastExport, data: save }, null, 1);
  }
  function importText(text) {
    let parsed;
    try { parsed = JSON.parse(String(text)); } catch (e) { fail(400, 'That file is not a Pawie save.'); }
    if (!parsed || parsed.app !== 'pawie' || !parsed.data) fail(400, 'That file is not a Pawie save.');
    const got = sane(parsed.data);
    if (!got) fail(400, 'That save file is damaged.');
    mem = got; persist();
    return { pet: petView() };
  }
  function reset() { mem = blank(); persist(); return { pet: petView() }; }

  // ---- the "server" ----
  async function handle(path, body) {
    body = body || {};
    switch (path) {
      case '/api/config':
        return Object.assign({ emailEnabled: false, wardrobe: WARDROBE, structs: CFG.structs, requireLogin: false, paSchedule: Q.PA_SCHEDULE }, allOpen() ? { wardrobeOpen: true } : {});
      case '/api/me': return account();
      case '/api/auth/logout': return {};
      case '/api/pet/event': return petEvent(body);
      case '/api/pet/rename': return rename(body);
      case '/api/pet/equip': return equip(body);
      case '/api/quiz/list': return quizList(body);
      case '/api/quiz/answer': return quizAnswer(body);
      case '/api/jokes/list': return jokeList(body);
      default:
        if (path.indexOf('/api/auth/') === 0) fail(404, 'There are no accounts here. Your Pawie is saved in this browser.');
        return fail(404, 'Not found.');
    }
  }


  root.PawieLocal = {
    handle, exportText, importText, reset,
    storageOk: () => { load(); return !storageFailed; },
    lastExport: () => load().lastExport || 0,
    summary: () => { const s = load(), v = petView(); return { anon: s.anon, xp: v.xp, level: v.unlockedCount, streak: v.streak }; },
    _rules: { SOURCES, EVENTS, WARDROBE, DAILY_XP_CAP, MAX_XP },
  };
})();
