// Testimonial slider logic (place in a <script> tag or separate JS file)
let current = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  current = idx;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

setInterval(() => {
  let nxt = (current + 1) % slides.length;
  showSlide(nxt);
}, 5000);

showSlide(0);
