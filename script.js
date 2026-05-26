// TICKER — pausa ao passar o mouse
const ticker = document.getElementById('tickerList');

ticker.addEventListener('mouseenter', () => {
  ticker.style.animationPlayState = 'paused';
});

ticker.addEventListener('mouseleave', () => {
  ticker.style.animationPlayState = 'running';
});