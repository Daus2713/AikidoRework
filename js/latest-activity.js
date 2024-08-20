const swiper_late = new Swiper('.late-swiper', {
    slidesPerView: 3, 
    spaceBetween: 30,         // Show one slide at a time
    loop: false,  



    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,        // Make pagination bullets clickable
    // },
  });
  

// var swiper = new Swiper('.swiper', {
//     slidesPerView: 1,          // Show one slide at a time
//     spaceBetween: 10,          // Space between slides
//     loop: true,                // Loop the slides
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,        // Make pagination bullets clickable
//     },
// });