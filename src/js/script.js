const body = document.querySelector("body");
const burger = document.querySelector(".icon_menu");
const menu = document.querySelector(".header_links");
const close_on_mobile = document.querySelector(".close_on_mobile");
const current_year = document.querySelector(".year");

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

const swiper1 = new Swiper(".slide_carousel.swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 950,
  
    freeMode: {
      enabled: true,
      sticky: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 605px
      605: {
        slidesPerView: 1,
      },
      // when window width is >= 993px
      993: {
        slidesPerView: 1,
      },
    },
  
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
    },
  });

  const swiper2 = new Swiper(".slide_carousel.swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 950,
  
    freeMode: {
      enabled: true,
      sticky: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 605px
      605: {
        slidesPerView: 1,
      },
      // when window width is >= 993px
      993: {
        slidesPerView: 1,
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
  });

  const swiper3 = new Swiper(".slide_carousel.swiper3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 950,
  
    freeMode: {
      enabled: true,
      sticky: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 605px
      605: {
        slidesPerView: 1,
      },
      // when window width is >= 993px
      993: {
        slidesPerView: 1,
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  
  });