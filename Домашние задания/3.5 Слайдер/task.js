const slides = Array.from(document.querySelectorAll('.slider__item'));
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

let activeIndex = slides.findIndex(slide => slide.classList.contains('slider__item_active'));

function updateSlide(index) {
    slides[activeIndex].classList.remove('slider__item_active');
    activeIndex = index;
    slides[activeIndex].classList.add('slider__item_active');
}

prevBtn.addEventListener('click', () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    updateSlide(newIndex);
});

nextBtn.addEventListener('click', () => {
    const newIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    updateSlide(newIndex);
});
