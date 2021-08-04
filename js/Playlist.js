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
    })
}

getPlaylitsUser();
