import showNextSlide from '../_modules/showNextSlide.js';

const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);

slides.forEach((slide, index) => {
   index !== 0
      ? slide.classList.add('hidden')
      : slide.setAttribute('data-active', '');

   slide.dataset.sliderIndex = String(index);
});

slider.addEventListener('click', event => {
   if (event.target.closest('.slider__slide')) {
      showNextSlide('left');
   }
});

const buttonControlNext = document.querySelector('#buttonNext');
const buttonControlPrevious = document.querySelector('#buttonPrevious');

buttonControlNext.onclick = () => showNextSlide('left');
buttonControlPrevious.onclick = () => showNextSlide('right');