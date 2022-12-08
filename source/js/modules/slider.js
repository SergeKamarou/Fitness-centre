const trainersSliderContainer = document.querySelector('.trainers__wrap');
const reviewsSliderContainer = document.querySelector('.reviews__wrap');

const initSliders = () => {
  if (trainersSliderContainer) {
    trainersSliderContainer.classList.remove('trainers__wrap--nojs');

    const swiper = new Swiper('.swiper--trainers', {
      direction: 'horizontal',
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    });
  }

  if (reviewsSliderContainer) {
    reviewsSliderContainer.classList.remove('reviews__wrap--nojs');

    const reviews = new Swiper('.reviews__slider-wrap', {
      direction: 'horizontal',
      slidesPerView: 1,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });
  }
};


export {initSliders};
