import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

let reviewsSwiper = null;

function initSwiper() {
  if (window.innerWidth >= 1440) return;

  reviewsSwiper = new Swiper('#reviews-swiper', {
    modules: [EffectCoverflow, Navigation, Keyboard],

    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 2,

    speed: 600,
    longSwipes: true,
    longSwipesRatio: 0.2,
    resistanceRatio: 0.85,
    simulateTouch: true,
    touchRatio: 1,

    watchOverflow: true,

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    },

    navigation: {
      nextEl: '[data-nav="reviews-slider-button-next"]',
      prevEl: '[data-nav="reviews-slider-button-prev"]',
    },

    keyboard: {
      enabled: true,
    },
  });
}

function destroySwiper() {
  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

function handleResize() {
  if (window.innerWidth >= 1440) {
    destroySwiper();
  } else {
    if (!reviewsSwiper) initSwiper();
  }
}

initSwiper();
window.addEventListener('resize', handleResize);
