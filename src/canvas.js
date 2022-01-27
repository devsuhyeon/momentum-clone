const canvasModal = document.querySelector('.canvas-modal');
const canvasBoard = document.querySelector('.canvas-board');
const range = document.querySelector('.controls__range .range');
const colors = document.querySelector('.controls__colors');
const paintingColor = document.querySelector('.painting-color');

const canvasOpenBtn = document.querySelector('.canvas__btn');
const canvasCloseBtn = document.querySelector('.canvas-close');
const ctx = canvasBoard.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

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

canvasBoard.addEventListener('mousemove', onMouseMove);
canvasBoard.addEventListener('mousedown', startPainting);
canvasBoard.addEventListener('mouseup', stopPainting);
canvasBoard.addEventListener('mouseleave', stopPainting);

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
  paintingColor.style.color = color;
});

// Brush Size
range.addEventListener('input', (event) => {
  ctx.lineWidth = event.target.value;
});
