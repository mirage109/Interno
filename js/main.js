const navTriggerBtn = document.querySelector("#nav_triger_btn");
const navMenu = document.querySelector("#nav_menu");

navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
});

sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".steps__step", { distance: "100px", interval: 100 });

sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 800 });

sr.reveal(".testimonials__bg", { delay: 800 });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: 1000 });

sr.reveal(".brands__img", { delay: 600, distance: "100px", interval: 100});

sr.reveal('.work__title')
sr.reveal('.work__subtitle', { delay: 600})
sr.reveal('.work__grid', { delay: 1000})

sr.reveal('.stats')
sr.reveal('.stats__item', { interval: 100, distance: '100px'})

sr.reveal('.news__title')
sr.reveal('.news__subtitle', { delay: 600})
sr.reveal('.news__item', { interval: 100, distance: '100px', delay: 1000})

sr.reveal('.contact__container')
sr.reveal('.contact__text', { delay: 600})

sr.reveal('.footer__item', { interval: 100, distance: '100px'})