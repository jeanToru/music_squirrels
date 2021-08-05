const urlUsers = 'https://squirrelsmusic.herokuapp.com/users';
const urlRecent = 'https://squirrelsmusic.herokuapp.com/recent';
const urlSongs = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/';

let idUser = localStorage.getItem('idUserLogin');
let nameUser = localStorage.getItem('idUserName');
let image = localStorage.getItem('image');

class Data {
  constructor(data) {
    this.data = data;
  }

  addUserSignUp() {
    const contentD = document.getElementById('js-singUp');
    const content = `
      <div class="box__content">
        <h1>welcome, ${this.data}</h1>
        <p>You don't have recent Music</p>
        <button class="mainBtn form__button--btn">Play</button>
    </div>
    `;
    contentD.innerHTML = content;
  }

  addUserLogin() {
    const contentD = document.getElementById('js-welcome');
    const content = `
      <div class="box__content">
        <h1>welcome,
          <a href="../profile/index.html" class="linkProfile">${this.data}</a>
        </h1>
        <p>Go to the last song you listening</p>
        <img src="${image}" alt="">
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
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].name === nameUser) {
          console.log(data.data[i]._id)
          console.log(localStorage.setItem('idUserSingUp', data.data[i]._id));
          const userWelcome = new Data(data.data[i].name);
          userWelcome.addUserLogin();
        }
      }
    })
}

function recentSong() {
  fetch(`${urlRecent}/${idUser}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiSong(data.data[0].songs[data.data[0].songs.length - 1]);
    })
}

function apiSong(idSong) {
  fetch(`${urlSongs}${idSong}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('image', data.image);
    })
}

checkUsers();
recentSong();
