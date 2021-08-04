import User from "./User.js";
let urlUserEspecific = 'https://squirrelsmusic.herokuapp.com/user/';

let idUser = localStorage.getItem('idUserLogin');

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

chanceName();
