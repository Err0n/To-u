// Floating hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart-bg';
  heart.textContent = '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}, 800);

const music = document.getElementById('bgMusic');
let started = false;
let isPlaying = false;

function startMusicOnce() {
  if (!started) {
    music.play();
    started = true;
    isPlaying = true;
  }
}

function toggleMusic(e) {
  e.stopPropagation();
  if (isPlaying) { music.pause(); } else { music.play(); }
  isPlaying = !isPlaying;
}

// Slider logic
const slides = document.querySelectorAll('.slider img');
let current = 0;
setInterval(() => {
  slides.forEach((img, i) => img.style.opacity = '0');
  slides[current].style.opacity = '1';
  current = (current + 1) % slides.length;
}, 4000);
