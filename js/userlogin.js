const urlUsers = 'https://squirrelsmusic.herokuapp.com/users';
const urlUser = 'https://squirrelsmusic.herokuapp.com/user';
const urlRecent = 'https://squirrelsmusic.herokuapp.com/recent';

let idUser = localStorage.getItem('idUserLogin');
let nameUser = localStorage.getItem('nameLogin');

class Data {
  constructor(data) {
    this.data = data;
  }

  addUser() {
    const contentD = document.getElementById('js-welcome');
    const content = `
      <div class="box__content">
        <h1>welcome, ${this.data}</h1>
        <p>Go to the last song you listening</p>
        <img src="${this.data}" alt="">
          <button class="mainBtn form__button--btn">Play</button>
    </div>
    `;
    contentD.innerHTML = content;
  }
}

function checkUsers() {
  fetch(urlUsers, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].name === nameUser) {
          const userWelcome = new Data(data.data[i].name);
          userWelcome.addUser();
        }
      }
    })
}

function userFetch() {
  fetch(`${urlUser}/${idUser}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user)
    })
}

function recentSong() {
  fetch(`${urlRecent}/${idUser}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((recent) => {
        console.log(recent);
    })
}
