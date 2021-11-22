const body = document.querySelector("body");
const burger = document.querySelector(".icon_menu");
const menu = document.querySelector(".header_links");
const close_on_mobile = document.querySelector(".close_on_mobile");
const current_year = document.querySelector(".year");
const slider_bar = document.querySelector(".slider_bar");
const input = document.querySelector(".beer-range");

// Switch_photos section 
const events = ["change", "input"];
events.forEach((e) => {
  input.addEventListener(e, move);
})
function move(e) {
  slider_bar.style.left = `${e.target.value}%`;
}

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

//Parallax swiper/slider
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

// Sliders
const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
const swiper3 = new Swiper(".swiper3", {
  loop: true,
  speed: 950,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

// Scroll down effects
const anim_text = document.querySelectorAll(".anim_text");
const interior_images = document.querySelectorAll(".interior_item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeOut 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `showUp 2s forwards ease-out`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

anim_text.forEach((el) => {
  observer.observe(el);
});
interior_images.forEach((el) => {
  observer2.observe(el);
});

//Combined images slider


// Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages;    
  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    let lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
