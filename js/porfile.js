import User from "./User.js";
let urlUserEspecific = 'https://squirrelsmusic.herokuapp.com/user/';
let idUser = localStorage.getItem('idUserLogin');
const btnEdit = document.querySelector('.js-profileName');

function chanceName() {
  fetch(`${urlUserEspecific}${idUser}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const userDoom = new User(data, null);
      userDoom.nameUserDoom();
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
    if (!e.target.classList.contains('save')) {
      userName.setAttribute('contentEditable', 'true');
    }else {
      updateName(userName)
    }
    e.target.classList.toggle('save');
  }
})

chanceName();
