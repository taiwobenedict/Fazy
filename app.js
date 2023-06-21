var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    786: {
      slidesPerView: 3,
      spaceBetween: 5,
      loop: true,
      autoplay: {
        delay: 2500,
      }
    }
  }
});


// function myFunc(x) {
//   if (x.matches) {
//     let swiper = new Swiper(".mySwiper", {
//       spaceBetween: 10,
//       slidesPerView: 3,
//       loop: true,
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     });
//   }
// }

// var x = window.matchMedia("(min-width: 786)")
