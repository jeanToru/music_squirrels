import User from "./User.js";

let urlUser = 'https://squirrelsmusic.herokuapp.com/user/';
let idUser = localStorage.getItem('idUserLogin');
const btnEdit = document.querySelector('.js-profileName');

function changeName() {
  fetch(`${urlUser}${idUser}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const userDOM = new User(data, null);
      userDOM.nameUserDoom();
    })
}

function updateName(name){
  const newName = name.innerHTML;
  const UpdateUser = new User(newName, idUser);
  UpdateUser.updateNameUser();
}

btnEdit.addEventListener('click', (e) => {
  if (e.target.classList.contains('sidebar__edit')) {
    const userName =  document.querySelector('.sidebar__name');
    if (!e.target.classList.contains('change')) {
      userName.setAttribute('contentEditable', 'true');
    }else {
      updateName(userName)
    }
    e.target.classList.toggle('change');
  }
})

changeName();
