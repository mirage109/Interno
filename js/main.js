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
