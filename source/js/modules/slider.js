const trainersSliderContainer = document.querySelector('.trainers__wrap');
const reviewsSliderContainer = document.querySelector('.reviews__wrap');

const initSliders = () => {
  if (trainersSliderContainer) {
    trainersSliderContainer.classList.remove('trainers__wrap--nojs');

    const trainersSlider = new Swiper('.swiper--trainers', {
      direction: 'horizontal',
      loop: true,
      loopedSlides: 0,
      loopFillGroupWithBlank: true,
      watchSlidesProgress: true,
      observer: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      keyboard: {
        enabled: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      on: {
        init() {
          const sliderDuplecateElements = trainersSliderContainer.querySelectorAll('.swiper-slide-duplicate');
          sliderDuplecateElements.forEach((item) => {
            item.setAttribute('tabindex', '-1');
          });
        },

        slideChange() {
          trainersSliderContainer.querySelectorAll('.swiper-slide').forEach((item) => {
            item.setAttribute('tabindex', '-1');
          });

          let activeSlides = trainersSliderContainer.querySelectorAll('.swiper-slide-visible');
          activeSlides.forEach((item) => {
            item.setAttribute('tabindex', '0');
          });
        },
      },
    });
  }

  if (reviewsSliderContainer) {
    reviewsSliderContainer.classList.remove('reviews__wrap--nojs');

    const reviewsSlider = new Swiper('.reviews__slider-wrap', {
      direction: 'horizontal',
      slidesPerView: 1,

      keyboard: {
        enabled: true,
      },

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
};


export {initSliders};
