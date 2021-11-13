"use strict";

var swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 605px
    605: {
      slidesPerView: 1
    },
    // when window width is >= 993px
    993: {
      slidesPerView: 1
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true
  }
});