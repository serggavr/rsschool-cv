const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const sidebar = document.querySelector('.sidebar');
const slider = document.querySelector('.slider');
const step = document.querySelector('.step');
const slides = document.querySelectorAll('.slide');
const steps = document.querySelectorAll('.step');
let activeSlideIndex = 1;


sidebar.style.top = `-${(steps.length -1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})
downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === steps.length) {
            activeSlideIndex = 0;
        }
    }
    else if (direction == 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = steps.length -1;
        }
    }
    slider.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
}

document.onwheel = function (direction) {
    if (direction.deltaY > 0) {
        changeSlide('down');
    }
    else if (direction.deltaY < 0) {
        changeSlide('up');
    }
};
