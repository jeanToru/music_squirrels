const urlUsers = 'https://squirrelsmusic.herokuapp.com/users';
const urlUser = 'https://squirrelsmusic.herokuapp.com/user';
const urlRecent = 'https://squirrelsmusic.herokuapp.com/recent';
const urlSongs = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/';

let idUser = localStorage.getItem('idUserLogin');
let nameUser = localStorage.getItem('idUserName');
let image = localStorage.getItem('image');

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
      apiSong(recent.data.songs[recent.data.songs.length - 1])
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
userFetch();
recentSong();
