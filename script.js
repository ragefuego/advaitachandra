// ── Cursor ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  ring.style.left   = e.clientX + 'px';
  ring.style.top    = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    cursor.style.background = '#FF3B3B';
    ring.style.width = '44px';
    ring.style.height = '44px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.background = '#FF8C42';
    ring.style.width = '32px';
    ring.style.height = '32px';
  });
});

// ── Boot sequence ──
const boot = document.getElementById('boot');
setTimeout(() => {
  boot.classList.add('done');
  setTimeout(() => { boot.style.display = 'none'; }, 800);
}, 3000);

// ── Uptime counter ──
let seconds = 0;
setInterval(() => {
  seconds++;
  const h = String(Math.floor(seconds/3600)).padStart(2,'0');
  const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
  const s = String(seconds%60).padStart(2,'0');
  const el = document.getElementById('uptime');
  if (el) el.textContent = `${h}:${m}:${s}`;
}, 1000);

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.08 });
reveals.forEach(r => observer.observe(r));