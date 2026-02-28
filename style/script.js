/* ===== CIRCLE SCROLL EFFECT ===== */
const section = document.querySelector(".hero-wrapper-2");
const video = document.getElementById("circleVideo");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const scrollProgress = 1 - (rect.top / windowHeight);
  const clamped = Math.min(Math.max(scrollProgress, 0), 2);

  let scale;
  let translateY;
  let opacity;

  if (clamped <= 1) {
    scale = 0.6 + (clamped * 0.4);
    translateY = 250 - (clamped * 250);
    opacity = clamped;
  } else {
    const exitProgress = clamped - 1;
    scale = 1 - (exitProgress * 0.4);
    translateY = exitProgress * 150;
    opacity = 1 - exitProgress;
  }

  video.style.transform = `translateY(${translateY}px) scale(${scale})`;
  video.style.opacity = opacity;
});


/* ===== HAMBURGER MENU ===== */
document.addEventListener("DOMContentLoaded", function() {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

});