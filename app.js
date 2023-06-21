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



// Smooth scrolling
$("nav a").on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top  -100}, 500);
});

let toggler = document.querySelector('.toggler');
let navLinks = document.querySelector('.nav-links');
let closeBtn = document.querySelector('.close')
let allLinks = document.querySelectorAll('.link')
let header = document.querySelector('header')


function closeSideBar () {
  navLinks.classList.toggle('active')
  header.classList.remove('header-bg')

}


allLinks.forEach(link => link.onclick = () => closeSideBar())
toggler.onclick = () => closeSideBar()
closeBtn.onclick = () => closeSideBar()

document.body.onscroll = () => {
  navLinks.classList.add("active");
  
  if (document.body.scrollTop == 0) {
    header.classList.remove('header-bg')
  } else {
    header.classList.add('header-bg')
  }

}
