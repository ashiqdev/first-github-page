const list = document.querySelector('.list');
const input = document.querySelector('.item-input');
const form = document.querySelector('.new-item-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = document.createElement('li');
  item.innerText = input.value;
  item.classList.add('list-item');

  list.appendChild(item);

  input.value = '';
});
