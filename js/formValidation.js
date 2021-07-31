import { checkData, signUp } from "./apiUsers.js";

const validation = document.getElementById('createUser');
const login = document.getElementById('login');


validation.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = validation.elements[2].value;
  const passwordConfirm = validation.elements[3].value;
  const userName = validation.elements[0].value;
  const userEmail = validation.elements[1].value;
  if (password === passwordConfirm){
    checkData(userEmail, password, userName)
  }else {
    alert('Playo la contra')
  }
});

login.addEventListener('submit', (e) => {
  e.preventDefault();
  const passwordConfirm = {
    password: login.elements[0].value
  }
  signUp(login.elements[0].value, passwordConfirm);
});
