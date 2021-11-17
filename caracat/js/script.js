"use strict";

var body = document.querySelector("body");
var burger = document.querySelector(".icon_menu");
var menu = document.querySelector(".header_links");
var close_on_mobile = document.querySelector(".close_on_mobile");
var current_year = document.querySelector(".year");
var slider = document.querySelector("#slider");
var foregroundImage = document.querySelector(".foreground-img");
var sliderButton = document.querySelector(".slider-button");
slider.addEventListener("change", ch);
slider.addEventListener("input", ch);

function ch(e) {
  var sliderPos = e.target.value;
  foregroundImage.style.width = "".concat(sliderPos, "%");
  sliderButton.style.left = "calc(".concat(sliderPos, "% - 15px)");
}

current_year.textContent = new Date().getFullYear();
burger.addEventListener("click", function (e) {
  menu.classList.add("active");
  body.style.position = "fixed";
  body.style.overflowY = "scroll";
});
close_on_mobile.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("active");
  body.style.position = "static";
  body.style.overflowY = "visible";
}

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
var swiper3 = new Swiper(".slide_carousel.swiper3", {
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
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3'
  }
});