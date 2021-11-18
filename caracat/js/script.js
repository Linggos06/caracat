"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var body = document.querySelector("body");
var burger = document.querySelector(".icon_menu");
var menu = document.querySelector(".header_links");
var close_on_mobile = document.querySelector(".close_on_mobile");
var current_year = document.querySelector(".year");
var slider = document.querySelector("#slider");
var foregroundImage = document.querySelector(".foreground-img");
var sliderButton = document.querySelector(".slider-button");
var backgr_header = document.querySelector(".background-img_header");
var foregr_header = document.querySelector(".foreground-img_header");

if (document.documentElement.clientWidth <= 992) {
  var value = 51;
  slider.value = value;
  foregroundImage.style.width = "".concat(value, "%");
  sliderButton.style.left = "calc(".concat(value, "% - 15px)");
}

if (document.documentElement.clientWidth <= 780) {
  var _value = 58;
  slider.value = _value;
  foregroundImage.style.width = "".concat(_value, "%");
  sliderButton.style.left = "calc(".concat(_value, "% - 15px)");
}

slider.addEventListener("change", ch);
slider.addEventListener("input", ch);
slider.addEventListener("touchmove", ch);

function ch(e) {
  var sliderPos = e.target.value;
  foregroundImage.style.width = "".concat(sliderPos, "%");
  sliderButton.style.left = "calc(".concat(sliderPos, "% - 15px)");
  var w = Number(foregroundImage.style.width.split('%')[0]);
  console.log(w);

  if (w >= 51) {
    foregr_header.style.opacity = "1";
    backgr_header.style.opacity = "0";
  } else if (w <= 50) {
    backgr_header.style.opacity = "1";
    foregr_header.style.opacity = "0";
  }
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

var swiper1;
var parallaxSlider = ".swiper1";
var parallaxSliderOptions = {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  parallax: true,
  grabCursor: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1'
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true
  },
  on: {
    init: function init() {
      var swiper = this;

      for (var i = 0; i < swiper.slides.length; i++) {
        var image = _toConsumableArray(swiper.slides[i].children).find(function (element) {
          return element.classList.contains("image_container");
        });

        image.setAttribute("data-swiper-parallax", "".concat(0.75 * swiper.width));
        image.setAttribute("data-swiper-parallax-opacity", "".concat(0.5));

        var title = _toConsumableArray(swiper.slides[i].children).find(function (element) {
          return element.classList.contains("slide_header");
        });

        title.setAttribute("data-swiper-parallax", "".concat(0.6 * swiper.width));
      }
    }
  }
};
swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);
window.addEventListener("resize", function () {
  swiper1.destroy();
  swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);
});
var swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  }
});
var swiper3 = new Swiper(".swiper3", {
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3'
  }
});
var anim_text = document.querySelectorAll(".anim_text");
var interior_images = document.querySelectorAll(".interior_item");
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeOut 1.5s ".concat(entry.target.dataset.delay, " forwards ease-out");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.4
});
var observer2 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.animation = "showUp 2s forwards ease-out";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.4
});
anim_text.forEach(function (el) {
  observer.observe(el);
});
interior_images.forEach(function (el) {
  observer2.observe(el);
});