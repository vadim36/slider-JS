const showNextSlide = direction => {
   const slider = document.querySelector('.slider');
   const currentSlide = slider.querySelector('.slider__slide[data-active]');
   const slides = Array.from(slider.children);

   const currentSlideIndex = Number(currentSlide.dataset.sliderIndex);

   let nextSlideIndex;

   if (direction === 'left') {
      nextSlideIndex = currentSlideIndex + 1 === slides.length ? 0 : currentSlideIndex + 1;
   }

   if (direction === 'right') {
      nextSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
   }

   const nextSlide = slider.querySelector(`.slider__slide[data-slider-index="${nextSlideIndex}"]`);

   currentSlide.classList.add('hidden');
   currentSlide.removeAttribute('data-active');

   nextSlide.classList.remove('hidden');
   nextSlide.setAttribute('data-active', '');
}

export default showNextSlide;