const board = document.querySelector('#board');
const colors = ['#5c0e19',
  '#9f2c35',
  '#f36172',
  '#db879d',
  '#f7cbe1']

const SQUARES_NUMBER = 500;


createGame();


function createGame() {
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');



    square.addEventListener('mouseover', () => {
      setColor(square)
    })

    square.addEventListener('mouseleave', () => {
      removeColor(square);
    })


    board.append(square);
  }

}

function setColor(item) {
  const color = getRandomColor()
  item.style.background = color;
  item.style.boxShadow = `0 0 3px ${color} `
}

function removeColor(item) {
  item.style.background = '#323131';
  item.style.boxShadow = `0 0 2px  #323131`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index];
}