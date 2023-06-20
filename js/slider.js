const swiper = new Swiper('.section-slider__swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.section-slider__next',
    prevEl: '.section-slider__prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


var swiperThumb = new Swiper(".section-product__thumbs", {
  loop: true,
  spaceBetween: 10,
  direction: 'vertical',
  slidesPerGroup: 3,
  slidesPerView: 3,
  grid: {
    rows: 1,
  },
  // freeMode: true,
  // watchSlidesProgress: true,
  navigation: {
    nextEl: ".section-product__next",
    prevEl: ".section-product__prev",
  },
});

var swiper2 = new Swiper(".section-product__swiper", {
  loop: true,
  direction: 'horizontal',
  spaceBetween: 15,
  // If we need pagination
  pagination: {
    el: '.section-product__pagination',
    clickable: true,
  },
  thumbs: {
    swiper: swiperThumb,
  },
});