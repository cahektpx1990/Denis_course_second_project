window.onscroll = function showHeader () {
   let headerBgr = document.querySelector('.header');
      if(window.pageYOffset > 50){
      headerBgr.classList.add('header__fixed-bgr');
   } else {
      headerBgr.classList.remove('header__fixed-bgr');
}
};

// window.onscroll = function colorBlack () {
//    let headerColor = document.querySelector('.header__logo-link');

//    if(window.pageYOffset > 50){
//       headerColor.classList.add('header__scroll0-color');
//    };
// };


const burgerEl = document.querySelector('.header__burger');
const menuWrapEl = document.querySelector('.header__menu-wrap');

burgerEl.addEventListener('click', function(event) {
   menuWrapEl.classList.toggle('header__menu-wrap_visible');
});

// --------------------Slider

var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   spaceBetween: 25,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      200: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      560: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 50,
      },
      }
});


// scroll animation

new WOW({
   offset:       5,
}).init();

// Theme switch


// switchThemeEl.addEventListener('click', function(event) {
//    document.querySelector('html').classList.toggle('dark-light')
// });

// local Storage
let darkMode = localStorage.getItem('dark-mode');
const darkModeToggle = document.querySelector('.switch');

const enableDarkMode = () => {
   // 1. Add the class to the body
   document.body.classList.add('dark-mode');
   // 2. Update darkMode in localStorage
   localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
   // 1. Remove the class from the body
   document.body.classList.remove('dark-mode');
   // 2. Update darkMode in localStorage 
   localStorage.setItem('dark-mode', null);
};

if (darkMode === 'enabled') {
   enableDarkMode();
};


darkModeToggle.addEventListener('click', () => {
   // get their darkMode setting
   darkMode = localStorage.getItem('dark-mode'); 
   
   darkMode !== 'enabled' ? enableDarkMode() : disableDarkMode();
});



