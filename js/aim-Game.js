const timeList = document.querySelector('.time-list');
const startBtn = document.querySelector('#start');
const timeEl = document.querySelector('#time')
const screens = document.querySelectorAll('.screen')
const board = document.querySelector('#board')
start();


let time = 0;
let score = 0;

function start() {
  startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
  })
  timeList.addEventListener('click', (event) => {
    //делигирование событий
    if (event.target.classList.contains('time-btn')) {
      // у элемента по которому кликнули event.tartget есть ли опредленный класс contains ('class')
      // console.log(event.target)
      //console.log(event.target.getAttribute('data-time'))
      time = parseInt(event.target.getAttribute('data-time'));

      screens[1].classList.add('up')

      startGame();
    }
  })

  board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
      score++;
      event.target.remove();
      createRandomCircle()
    }
  })
}

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}


function decreaseTime() {
  if (time <= 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}


function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);

  //деструкторизация
  const { width, height } = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  //

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`

  board.append(circle);

}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}



function finishGame() {
  board.innerHTML = `<h1>Cчет:<span="primary"> ${score}</span></h1>`;
  timeEl.parentNode.classList.add('hide');
  //timeEl.parentNode.classList.remove()
}