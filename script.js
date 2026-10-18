(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector('.motion-toggle');
  let paused = preference.matches;
  const scene = document.querySelector('.ink-landscape');
  function resize() {
    const photo = document.querySelector('.profile-avatar').getBoundingClientRect();
    const bounds = scene.getBoundingClientRect();
    const craneWidth = innerWidth <= 760 ? 110 : 150;
    scene.style.setProperty('--crane-land-x', `${photo.left - bounds.left + photo.width * .74 - craneWidth * .45}px`);
    scene.style.setProperty('--crane-land-y', `${photo.top - bounds.top - craneWidth * 2 / 3 * .94}px`);
  }
  function sync() {
    document.body.classList.toggle('motion-paused', paused);
    button.setAttribute('aria-pressed', String(paused));
    button.innerHTML = paused ? 'Resume motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
  }
  button.addEventListener('click', () => {paused = !paused; sync();});
  preference.addEventListener('change', e => {paused = e.matches; sync();});
  document.addEventListener('visibilitychange', sync);
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
