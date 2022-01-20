const items = document.querySelector('.items');
const form = document.querySelector('.todo__form');
const input = document.querySelector('.todo__input');
const addbtn = document.querySelector('.todo__button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem();
});

function addItem() {
  const text = input.value;
  if (!text) {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.append(item);
  item.scrollIntoView({ block: 'center' });

  input.value = '';
  input.focus();
}

function createItem(text) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item__row');
  item.innerHTML = `
  <div class="item">
    <div class="item__info">
    <button class="item__check">
      <i class="fas fa-check"></i>
    </button>
    <span class="item__name">${text}</span>
    </div> 
    <button class="item__delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
  return item;
}
