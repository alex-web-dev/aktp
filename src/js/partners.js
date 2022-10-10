import Swiper, { Pagination, Autoplay } from "swiper";

new Swiper({
  modules: [ Pagination, Autoplay ],
  el: '.partners__list',
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.partners__pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    1220: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    991: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    860:{
      spaceBetween: 20,
      slidesPerView: 3,
    },
    640:{
      slidesPerView: 2,
    },
  },
});