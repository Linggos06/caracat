"use strict";

var slider = document.querySelector("#slider");
var foregroundImage = document.querySelector(".foreground-img");
var sliderButton = document.querySelector(".slider-button");
var backgr_header = document.querySelector(".background-img_header");
var foregr_header = document.querySelector(".foreground-img_header"); // const seasons_cont = document.querySelector(".seasons_container");
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
  sliderButton.style.left = "calc(".concat(sliderPos, "% - 15px)"); // let w = Number(foregroundImage.style.width.split("%")[0]);
  // console.log(w);
  // if (w >= 51) {
  //   foregr_header.style.opacity = "1";
  //   backgr_header.style.opacity = "0";
  // } else if (w <= 50) {
  //   backgr_header.style.opacity = "1";
  //   foregr_header.style.opacity = "0";
  // }
}

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