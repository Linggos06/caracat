"use strict";

var swiper1 = new Swiper(".slide_carousel.swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1'
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
var swiper2 = new Swiper(".slide_carousel.swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
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
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  }
});