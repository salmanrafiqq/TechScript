
let header=document.querySelector('#header');


window.addEventListener('scroll',()=>{
if (window.scrollY>60){

    header.classList.add('active');
}else{
    header.classList.remove('active');
}
})


var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });