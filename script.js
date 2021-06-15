const board = document.querySelector('#board');
const colors = ['#30c8cf', '#1b7467', '#186950', '#155c50', '#11314c', '#0f1541', '#210d36',
  '#2e0b26', '#250910', '#561d7d', '#4fd54b', '#d64fa3', '#561d7d', '#20518d', '#b72a7c', '#561d7d'
]

const SQUARES_NUMBER = 500;



for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  board.style.boxShadow = `0 0 20px 4px ${color}, 0 0 100px 4px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`
  board.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index];
}