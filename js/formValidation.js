import { checkData, login } from "./apiUsers.js";

const validation = document.getElementById('createUser');
const register = document.getElementById('login');
const modal = document.querySelector('.container__modal');
modal.classList.add('js__none');

validation.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = validation.elements[2].value;
  const passwordConfirm = validation.elements[3].value;
  const userName = validation.elements[0].value;
  const userEmail = validation.elements[1].value;
  if (password === passwordConfirm) {
    checkData(userEmail, password, userName);
  } else {
    modalAlert();
  }
});

register.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = register.elements[0].value;
  const passwordConfirm = register.elements[1].value;
  login(email, passwordConfirm);
});

function modalAlert() {
  modal.classList.remove('js__none');
  const btnOk = document.querySelector('.js-btn-ok');
  btnOk.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      modal.classList.add('js__none');
    }
  })
}
