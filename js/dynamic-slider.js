const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide')
const slidesCount = document.querySelectorAll('.main-slide div');
const container = document.querySelector('.container');


sidebar.style.top = `-${(slidesCount.length - 1) * 100}vh`

let activeSlideIndex = 0;


const BntListener = () => {
  upButton.addEventListener('click', () => {
    changeSlide('up');

  })
  downButton.addEventListener('click', () => {
    changeSlide('down');
  })

}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount.length) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount.length - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}


BntListener()