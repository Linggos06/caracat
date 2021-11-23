const body = document.querySelector("body");
const burger = document.querySelector(".icon_menu");
const menu = document.querySelector(".header_links");
const close_on_mobile = document.querySelector(".close_on_mobile");
const current_year = document.querySelector(".year");

// AUTOMATICALLY Update Copyright Year
current_year.textContent = new Date().getFullYear();

// Burger menu for mobile view
burger.addEventListener("click", (e) => {
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

let swiper1;
let parallaxSlider = ".swiper1";
const parallaxSliderOptions = {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  parallax: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },

  on: {
    init: function () {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        let image = [...swiper.slides[i].children].find((element) =>
          element.classList.contains("image_container")
        );
        image.setAttribute("data-swiper-parallax", `${0.75 * swiper.width}`);
        image.setAttribute("data-swiper-parallax-opacity", `${0.5}`);

        let title = [...swiper.slides[i].children].find((element) =>
          element.classList.contains("slide_header")
        );
        title.setAttribute("data-swiper-parallax", `${0.6 * swiper.width}`);
      }
    },
  },
};
swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);

window.addEventListener("resize", () => {
  swiper1.destroy();
  swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);
});
