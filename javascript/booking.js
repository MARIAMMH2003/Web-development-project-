const bookingCards = document.querySelectorAll(".booking-card");


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    500: 
    {
      slidesPerView: 1,
    },
    700:
    {
      slidesPerView: 2,
    },
    950:
    {
      slidesPerView: 3,
    },
  },
});
