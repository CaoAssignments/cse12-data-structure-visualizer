// Anonymous usage tracking: track(type, props) batches events and sends them to a Google Sheet.
//
// What is sent: a random id for this browser, a random id for this visit, coarse events (structure,
// operation NAME, quiz question and whether it was right, Pawie button use) and Pawie's XP, level and
// streak. No name, email, code or typed text. Respects the browser's Do Not Track setting. If
// window.PAWIE_COLLECT_URL is empty, nothing is sent at all.
(function () {
  const url = window.PAWIE_COLLECT_URL || '';
  const dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1';
  const rand = () => Array.from(crypto.getRandomValues(new Uint8Array(12)), b => b.toString(36).padStart(2, '0')).join('').slice(0, 20);
  const stored = (area, key) => {
    try { let v = window[area].getItem(key); if (!v) { v = rand(); window[area].setItem(key, v); } return v; }
    catch (e) { return rand(); }
  };
  const sid = stored('sessionStorage', 'pawieSid');
  const ownAnon = stored('localStorage', 'pawieAnon');
  let queue = [];

  const excluded = () => false;

  function who() {
    try { if (window.PawieLocal) return window.PawieLocal.summary(); } catch (e) {}
    return { anon: ownAnon, xp: 0, level: 0, streak: 0 };
  }

  function flush() {
    if (!queue.length) return;
    const events = queue.splice(0, 50);
    if (url && !excluded()) {
      const me = who();
      // text/plain keeps this a "simple" request, so the browser sends it without a preflight request the receiving end cannot answer
      fetch(url, {
        method: 'POST', mode: 'no-cors', keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ app: 'static-1', anon: me.anon, sid, pet: { xp: me.xp, level: me.level, streak: me.streak }, events }),
      }).catch(() => {});       // analytics must never break the app
    }
    if (queue.length) flush();
  }

  window.track = function (type, props) {
    if (dnt || !url || excluded()) return;
    const { struct, ...data } = props || {};
    queue.push({ ts: Date.now(), type, struct, data });
    if (queue.length >= 20) flush();
  };

  setInterval(flush, 5000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);
  window.track('page_open', { page: 'app' });
})();
