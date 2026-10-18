(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector('.motion-toggle');
  let paused = preference.matches;
  let frame = 0;
  const canvas = document.querySelector('#ink-particles');
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, time = 0, pointer = {x: 0, y: 0};
  const points = Array.from({length: 32}, (_, i) => ({x: ((i * 73) % 997) / 997, y: ((i * 137) % 991) / 991, r: i % 3 === 0 ? 1.5 : .8}));
  function resize() {
    const box = canvas.getBoundingClientRect();
    width = box.width; height = box.height;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = width * dpr; canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const photo = document.querySelector('.profile-avatar').getBoundingClientRect();
    const scene = canvas.parentElement.getBoundingClientRect();
    const craneWidth = innerWidth <= 760 ? 100 : 140;
    const craneHeight = craneWidth;
    canvas.parentElement.style.setProperty('--crane-land-x', `${photo.left - scene.left + photo.width * .74 - craneWidth * .45}px`);
    canvas.parentElement.style.setProperty('--crane-land-y', `${photo.top - scene.top - craneHeight * .94}px`);
    draw();
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const positions = points.map((p, i) => ({x: p.x * width + Math.sin(time + i) * 12 + pointer.x * p.r, y: p.y * height + Math.cos(time * .6 + i) * 14 + pointer.y * p.r}));
    positions.forEach((p, i) => {
      ctx.fillStyle = i % 5 ? 'rgba(65,95,72,.40)' : 'rgba(170,70,50,.55)';
      ctx.beginPath(); ctx.arc(p.x, p.y, points[i].r, 0, Math.PI * 2); ctx.fill();
      positions.slice(i + 1).forEach(q => {
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 115) {ctx.strokeStyle = `rgba(65,95,72,${(1 - d / 115) * .12})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();}
      });
    });
  }
  let previous = 0;
  function animate(now) {
    if (paused || document.hidden || !visible) {frame = 0; previous = 0; return;}
    time += Math.min((now - (previous || now)) / 1000, .05) * .16;
    previous = now; draw(); frame = requestAnimationFrame(animate);
  }
  let visible = true;
  function sync() {
    document.body.classList.toggle('motion-paused', paused);
    button.setAttribute('aria-pressed', String(paused));
    button.innerHTML = paused ? 'Resume motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
    if (!paused && !frame && visible && !document.hidden) frame = requestAnimationFrame(animate);
  }
  button.addEventListener('click', () => {paused = !paused; sync();});
  preference.addEventListener('change', e => {paused = e.matches; sync();});
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(entries => {visible = entries[0].isIntersecting; sync();}).observe(canvas);
  canvas.parentElement.parentElement.addEventListener('pointermove', e => {if (!paused) pointer = {x:(e.clientX / innerWidth - .5) * 8,y:(e.clientY / innerHeight - .5) * 8};}, {passive:true});
  window.addEventListener('resize', resize, {passive:true});
  if ('IntersectionObserver' in window && !preference.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting) {entry.target.classList.remove('pending'); observer.unobserve(entry.target);}}), {threshold:.06});
    document.querySelectorAll('.animate-fade-in-up,.animate-bounce-in,h2').forEach(el => {el.classList.add('reveal','pending');observer.observe(el);});
  }
  const progress = document.querySelector('.reading-progress');
  function scrollProgress() {const length = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${length > 0 ? scrollY / length * 100 : 0}%`;}
  addEventListener('scroll', scrollProgress, {passive:true});
  resize(); sync(); scrollProgress();
})();
