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
var slider_bar = document.querySelector(".slider_bar");
var input = document.querySelector(".beer-range");
var events = ["change", "input"];
events.forEach(function (e) {
  input.addEventListener(e, move);
});

function move(e) {
  slider_bar.style.left = "".concat(e.target.value, "%");
} // const slider = document.querySelector("#slider");
// const foregroundImage_container = document.querySelector(".foreground-img_container");
// const foregroundImage = document.querySelector(".foreground-img");
// const sliderButton = document.querySelector(".slider-button");
// const backgr_header = document.querySelector(".background-img_header");
// const foregr_header = document.querySelector(".foreground-img_header");
// const seasons_cont = document.querySelector(".seasons_container");
// const seasons_header = document.querySelector(".seasons_header");
// const nature4 = document.querySelector(".nature_image_sea");
// seasons_cont.addEventListener("mouseover", (e) => {
//   if (
//     e.target.classList.contains("nature_image_winter") ||
//     e.target.classList.contains("nature_image_summer") ||
//     e.target.classList.contains("nature_image_road")
//   ) {
//     e.target.insertAdjacentElement("afterend", seasons_header);
//     seasons_header.style.position = "absolute";
//     seasons_header.style.pointerEvents = "none";
//     seasons_header.style.fontSize =
//       "calc(20px + (80 - 20) * ((100vw - 320px) / (1920 - 320)))";
//     seasons_header.style.lineHeight =
//       "calc(28px + (90 - 28) * ((100vw - 320px) / (1920 - 320)))";
//     seasons_header.style.top = "35%";
//     seasons_header.style.left = "15%";
//     seasons_header.style.maxWidth = "474px";
//     seasons_header.style.paddingRight = "15px";
//   } else {
//     nature4.insertAdjacentElement("afterend", seasons_header);
//   }
// });
// seasons_cont.addEventListener("mouseout", (e) => {
//   if (
//     e.target.classList.contains("nature_image_winter") ||
//     e.target.classList.contains("nature_image_summer") ||
//     e.target.classList.contains("nature_image_road")
//   ) {
//     console.log(seasons_header.parentNode);
//     if (seasons_header.parentNode) {
//       seasons_header.parentNode.removeChild(seasons_header);
//       nature4.insertAdjacentElement("afterend", seasons_header);
//     } else {
//       nature4.insertAdjacentElement("afterend", seasons_header);
//     }
//   }
// });
// if (document.documentElement.clientWidth <= 992) {
//   let value = 51;
//   slider.value = value;
//   foregroundImage.style.width = `${value}%`;
//   sliderButton.style.left = `calc(${value}% - 15px)`;
// }
// if (document.documentElement.clientWidth <= 780) {
//   let value = 58;
//   slider.value = value;
//   foregroundImage.style.width = `${value}%`;
//   sliderButton.style.left = `calc(${value}% - 15px)`;
// }
// slider.addEventListener("change", ch);
// slider.addEventListener("input", ch);
// setImgWidth();
// function setImgWidth () {
//   console.log(foregroundImage.style.width = getComputedStyle(foregroundImage)['width']);
// }
// function ch(e) {
//   setImgWidth();
//   const sliderPos = e.target.value;
//   foregroundImage_container.style.width = `${sliderPos}%`;
//   sliderButton.style.left = `calc(${sliderPos}% - 15px)`;
// //   // let w = Number(foregroundImage.style.width.split("%")[0]);
// //   // console.log(w);
// //   // if (w >= 51) {
// //   //   foregr_header.style.opacity = "1";
// //   //   backgr_header.style.opacity = "0";
// //   // } else if (w <= 50) {
// //   //   backgr_header.style.opacity = "1";
// //   //   foregr_header.style.opacity = "0";
// //   // }
// }


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
  swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions); // setImgWidth();
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
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
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
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3"
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