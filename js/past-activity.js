const swiper_past = new Swiper('.past-swiper', {
    slidesPerView: 2, 
    spaceBetween: 30,         // Show one slide at a time
    loop: false,  



    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

  });