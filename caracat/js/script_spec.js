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
var current_year = document.querySelector(".year"); // AUTOMATICALLY Update Copyright Year

current_year.textContent = new Date().getFullYear(); // Burger menu for mobile view

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
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1"
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