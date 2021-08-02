// navbar

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 0?  navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


//slider
 
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 1000,
    // effect: 'fade',
    speed:1000,
    loop:true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

  //wow 
  new WOW().init();

  //jquery counter up

 $(document).ready(function(){
   $(".counter").counterUp({
     delay:10,
     time:1000,
     triggerOnce:true
   },{offset:"100%", triggerOnce:true});
 })



//owl carousel
const nextIcon = '<i class="fa fa-chevron-right"></i>';
const prevIcon = '<i class="fa fa-chevron-left"></i>';

$('.owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
  nav:false,
  navText:[
    prevIcon,
    nextIcon
  ],
  responsive:{
      0:{
        items:1
      },
      361:{
          items:1
      },
      768:{
          items:3
      },

      1000:{
          items:5
      },
      
  }
})


//back to top
const btn = $('#back-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//search modal


const modalSearch = document.querySelector('.modal-search');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalSearch.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})
