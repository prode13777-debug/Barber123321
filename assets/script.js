// Плавное появление блоков при скролле
function reveal() {
  const elements = document.querySelectorAll('.section, .hero h1, .hero p, .btn, .card, .gallery img');
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('DOMContentLoaded', reveal);

// Плавный скролл к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
