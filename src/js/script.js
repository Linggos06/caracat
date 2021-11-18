const body = document.querySelector("body");
const burger = document.querySelector(".icon_menu");
const menu = document.querySelector(".header_links");
const close_on_mobile = document.querySelector(".close_on_mobile");
const current_year = document.querySelector(".year");
const slider = document.querySelector("#slider");
const foregroundImage = document.querySelector(".foreground-img");
const sliderButton = document.querySelector(".slider-button");

slider.addEventListener("change", ch)
slider.addEventListener("input", ch)

function ch(e){
  const sliderPos = e.target.value;
  foregroundImage.style.width = `${sliderPos}%`;
   sliderButton.style.left = `calc(${sliderPos}% - 15px)`;
}

current_year.textContent = new Date().getFullYear();

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
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true
  },

  on: {
    init: function() {
      let swiper = this;
      for(let i = 0; i < swiper.slides.length; i++) {
      let image = [...swiper.slides[i].children].find(element => element.classList.contains("image_container"));
      image.setAttribute("data-swiper-parallax", `${0.75 * swiper.width}`);
      image.setAttribute("data-swiper-parallax-opacity", `${0.5}`);

      let title = [...swiper.slides[i].children].find(element => element.classList.contains("slide_header"));
      title.setAttribute("data-swiper-parallax", `${0.6 * swiper.width}`);
      }

    }
  }
}
 swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);

window.addEventListener("resize", () => {
  swiper1.destroy();
  swiper1 = new Swiper(parallaxSlider, parallaxSliderOptions);
}

)

  const swiper2 = new Swiper(".slide_carousel.swiper2", {
    direction: "horizontal",
    loop: true,
    speed: 950,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });

  const swiper3 = new Swiper(".slide_carousel.swiper3", {
    loop: true,
    speed: 950,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });

  const anim_text = document.querySelectorAll(".anim_text");
  const interior_images = document.querySelectorAll(".interior_item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.style.animation = `fadeOut 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        observer.unobserve(entry.target);
      }
    })
  }, {threshold: 0.4});

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.style.animation = `showUp 2s forwards ease-out`;
        observer.unobserve(entry.target);
      }
    })
  }, {threshold: 0.4});

  anim_text.forEach((el) => {
    observer.observe(el);
  })
  interior_images.forEach((el) => {
    observer2.observe(el);
  })

