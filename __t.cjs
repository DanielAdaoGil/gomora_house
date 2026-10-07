const { spawn } = require('child_process');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const W = process.argv[2] ? +process.argv[2] : 1280;
const H = process.argv[3] ? +process.argv[3] : 800;
const OUT = process.argv[4] || 'C:/PROJECTOS/Sites/gomora_house/__shot.png';
const ACT = process.argv[5] || 'settle';
async function main() {
  const prof = 'C:/PROJECTOS/Sites/gomora_house/__tprof';
  try { require('fs').rmSync(prof, { recursive: true, force: true }); } catch (e) {}
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',
    ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--autoplay-policy=no-user-gesture-required',
     '--remote-debugging-port=9361', '--user-data-dir=' + prof,
     '--window-size=' + W + ',' + H, 'about:blank'], { stdio: 'ignore' });
  let t = null;
  for (let i = 0; i < 60 && !t; i++) { await sleep(500); try { t = (await (await fetch('http://127.0.0.1:9361/json/list')).json()).find(x => x.type === 'page'); } catch (e) {} }
  if (!t) { console.log('NO_TAB'); chrome.kill(); process.exit(1); }
  const ws = new WebSocket(t.webSocketDebuggerUrl); let id = 0; const p = new Map();
  const send = (m, q = {}) => new Promise((res, rej) => { const i2 = ++id; p.set(i2, { res, rej }); ws.send(JSON.stringify({ id: i2, method: m, params: q })); });
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && p.has(m.id)) { const r = p.get(m.id); p.delete(m.id); m.error ? r.rej(new Error(JSON.stringify(m.error))) : r.res(m.result); } };
  await new Promise(r => { ws.onopen = r; });
  const ev = async x => (await send('Runtime.evaluate', { returnByValue: true, expression: x })).result.value;
  await send('Runtime.enable'); await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:5173/' });
  await sleep(21000);
  const J = {};
  J.body = await ev('document.body.className');
  J.cards = await ev('document.querySelectorAll(".card").length');
  J.epnums = await ev('document.querySelectorAll(".card .epnum").length');
  J.ep1 = await ev('document.querySelector(".card .epnum").textContent');
  J.eplast = await ev('Array.from(document.querySelectorAll(".card .epnum")).pop().textContent');
  J.imgs = await ev('Array.from(document.querySelectorAll(".card img.in")).filter(i=>i.currentSrc||i.src).length');
  J.episodes = await ev('typeof DESC!=="undefined"?DESC.length:-1');
  J.hero = await ev('document.querySelector("#hero h2").textContent');
  J.heroVis = await ev('getComputedStyle(document.querySelector("#hero")).opacity');
  /* vertical order: EP1 top, EP22 bottom at settle */
  J.order = await ev('JSON.stringify(Array.from(document.querySelectorAll(".card")).map(c=>{const r=c.getBoundingClientRect();return {t:c.querySelector(".epnum").textContent,y:Math.round(r.top+r.height/2)};}))');
  /* top-half visibility: every card seen in top half is fully within stage */
  J.topclip = await ev('JSON.stringify(Array.from(document.querySelectorAll(".card")).map(c=>{const r=c.getBoundingClientRect();const cy=r.top+r.height/2;return cy<400?{t:c.querySelector(".epnum").textContent,top:Math.round(r.top),vis:getComputedStyle(c).opacity}:null;}).filter(Boolean))');
  J.sb = await ev('(() => { const d = document.createElement("div"); d.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px"; document.body.appendChild(d); const w = d.offsetWidth - d.clientWidth; d.remove(); return w; })()');
  /* scroll past hero (herogone) then measure front-side clipping */
  await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: W / 2, y: H / 2, deltaX: 0, deltaY: 400 });
  await sleep(2500);
  J.herogone = await ev('document.body.className');
  J.frontclip = await ev('JSON.stringify(Array.from(document.querySelectorAll(".card")).map(c=>{const r=c.getBoundingClientRect();return {t:c.querySelector(".epnum").textContent,top:Math.round(r.top),bot:Math.round(r.bottom)};}))');
  J.frontvis = await ev('Array.from(document.querySelectorAll(".card")).filter(c=>{const r=c.getBoundingClientRect();const cy=r.top+r.height/2;return cy>=0&&cy<=innerHeight;}).length');
  /* open lightbox EP5 from sphere via direct call, screenshot with blur */
  await ev('openLit(4, null)');
  await sleep(1200);
  J.lit = await ev('document.body.className');
  J.ltitle = await ev('document.querySelector("#lt").textContent');
  J.ldesc = await ev('document.querySelector("#ld").textContent.slice(0,60)');
  J.dl = await ev('document.querySelector("#dl").href.slice(0,40)');
  J.blur = await ev('getComputedStyle(document.querySelector("#stage")).filter');
  await send('Page.captureScreenshot', { format: 'png' }).then(async r => { require('fs').writeFileSync(OUT, Buffer.from(r.data, 'base64')); });
  console.log(JSON.stringify(J, null, 1));
  ws.close(); chrome.kill(); process.exit(0);
}
main().catch(e => { console.log('FAIL ' + (e.message || e)); process.exit(1); });
