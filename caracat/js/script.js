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
var input = document.querySelector(".beer-range"); // Switch_photos section 

var events = ["change", "input"];
events.forEach(function (e) {
  input.addEventListener(e, move);
});

function move(e) {
  slider_bar.style.left = "".concat(e.target.value, "%");
} // AUTOMATICALLY Update Copyright Year


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
} //Parallax swiper/slider


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
}); // Sliders

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
}); // Scroll down effects

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
}); //Combined images slider
// Lazy Loading

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyload = function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });

        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    };

    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});