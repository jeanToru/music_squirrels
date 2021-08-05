import Playlists from "./PLaylists.js";

let urlPlaylists = 'https://squirrelsmusic.herokuapp.com/playlists/';
let idUser = localStorage.getItem('idUserLogin');

function getPlaylitsUser() {
  fetch(`${urlPlaylists}${idUser}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.data.forEach((infoPlaylist) => {
        const playList = new Playlists(infoPlaylist.name, infoPlaylist._id);
        playList.AddplaylistDOM()
      });
      const btnPlaylist = document.querySelector('.js-playList');
      playListName(btnPlaylist);
    })
}

function paintPlaylist(name, id){
  const playlist = new Playlists(name, id);
  playlist.AddplaylistNameDOM();
}

function playListName(btnPlaylist) {
  btnPlaylist.addEventListener('click', (event) => {
    const target = event.target;
    const idPlaylist = target.getAttribute('id');
    let name = target.innerHTML;
    paintPlaylist(name, idPlaylist);
  })
}

getPlaylitsUser();
