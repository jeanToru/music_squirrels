const add = document.querySelector('.js-addPlayList');
const modalBack = document.querySelector('.background');
const modal = document.querySelector('.container__modal');

modal.classList.add('js__none');
modalBack.classList.add('js__none');

add.addEventListener('click', () => {
  modalBack.classList.remove('js__none');
  modal.classList.remove('js__none');
})

window.addEventListener('click', (event) => {
  const target = event.target;
  if(target.className === 'background') {
    modalBack.classList.add('js__none');
    modal.classList.add('js__none');
  }
})
