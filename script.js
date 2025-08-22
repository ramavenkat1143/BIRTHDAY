// 🎉 Show birthday message
function showMessage() {
  alert("you are the best person in my life! ❤️🎉");
}

// 🎊 CONFETTI EFFECT (Slow and Smooth)
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    radius: Math.random() * 6 + 4,
    density: Math.random() * 30,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.closePath();
  });
  update();
}

function update() {
  pieces.forEach(p => {
    // Slower falling and gentle sway
    p.y += 0.3 + Math.cos(p.density) * 0.5;
    p.x += Math.sin(p.density) * 0.2;

    // Reset if off screen
    if (p.y > canvas.height + 100) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
  });
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}
loop();

// 📸 SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// 🔁 Auto-slideshow every 4 seconds
setInterval(() => plusSlides(1), 4000);

// 🎵 AUTOPLAY MUSIC WITH FALLBACK
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
  document.getElementById("music-overlay").style.display = "none";
}
window.addEventListener('load', () => {
  // Remove old autoplay fallback
});
