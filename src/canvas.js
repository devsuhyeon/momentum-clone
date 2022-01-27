const canvasModal = document.querySelector('.canvas-modal');
const canvasBoard = document.querySelector('.canvas-board');
const range = document.querySelector('.controls__range .range');
const mode = document.querySelector('.mode');
const colors = document.querySelector('.controls__colors');
const paintingColor = document.querySelector('.painting-color');
const canvasOpenBtn = document.querySelector('.canvas__btn');
const canvasCloseBtn = document.querySelector('.canvas-close');
const ctx = canvasBoard.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleCanvasClick() {
  console.log(filling);
  if (filling) {
    console.log(canvasBoard.width);
    console.log(canvasBoard.height);
    ctx.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
  }
}

canvasBoard.addEventListener('mousemove', onMouseMove);
canvasBoard.addEventListener('mousedown', startPainting);
canvasBoard.addEventListener('mouseup', stopPainting);
canvasBoard.addEventListener('mouseleave', stopPainting);
canvasBoard.addEventListener('click', handleCanvasClick);

canvasOpenBtn.addEventListener('click', () => {
  canvasModal.classList.remove('hidden');
  canvasBoard.width = canvasBoard.offsetWidth;
  canvasBoard.height = canvasBoard.offsetHeight;
});

canvasCloseBtn.addEventListener('click', () => {
  canvasModal.classList.add('hidden');
});

// Chaning color
colors.addEventListener('click', (event) => {
  const color = event.target.style.backgroundColor;
  if (!color) {
    return;
  }
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  paintingColor.style.color = color;
});

// Brush Size
range.addEventListener('input', (event) => {
  ctx.lineWidth = event.target.value;
});

// Changing mode
mode.addEventListener('click', () => {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Paint';
  } else {
    filling = true;
    mode.innerText = 'Fill';
  }
});
