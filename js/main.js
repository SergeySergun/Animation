const swiper = new Swiper('.swiper', {
  slidesPerView: 3.5,  
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
    },
    600: {
      slidesPerView: 2,
        spaceBetweenSlides: 30
    },
    900: {
      slidesPerView: 3.5,
        spaceBetweenSlides: 30
    }
    // when window width is <= 999px
   
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    
  },
});