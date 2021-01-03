const list = document.querySelector('.list');
const input = document.querySelector('.list-item-input');
const form = document.querySelector('.list-item-form');
const template = document.querySelector('.list-item-template');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector('.list-item');
  listItem.innerText = input.value;

  list.appendChild(templateClone);

  input.value = '';
});
