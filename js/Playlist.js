import Playlists from "./PLaylists.js";
import Song from './song.js';
import Recent from './Recent.js';
import Favorite from './Favorite.js';

let urlPlaylists = 'https://squirrelsmusic.herokuapp.com/playlists/';
let idUser = localStorage.getItem('idUserLogin');
const btnRecent = document.querySelector('.clickRecent');
const btnFavorite = document.querySelector('.clickFavorite');

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
        playList.AddplaylistDOM();
      });
      const btnPlaylist = document.querySelector('.js-playList');
      playListName(btnPlaylist);
    })
}

function paintPlaylist(name, id) {
  const playlist = new Playlists(name, id);
  playlist.addPlaylistNameDOM();
}

function getSpecificSong(idSong) {
  const urlSongs = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/';
  fetch(`${urlSongs}${idSong}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const songs = new Song(data.id, data.name, data.album, data.image, data.audio);
      songs.addPlaylistSongsDOM();
    })
  const contentDOM = document.querySelector('.js-listSongs');
  contentDOM.innerHTML = ''
}

function getPlaylistUser(id) {
  const urlPlaylist = 'https://squirrelsmusic.herokuapp.com/playlist/';
  fetch(`${urlPlaylist}${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const songList = data.data.songs;
      songList.forEach((songs) => {
        getSpecificSong(songs)
      })
    })
}

function playListName(btnPlaylist) {
  btnPlaylist.addEventListener('click', (event) => {
    const target = event.target;
    const idPlaylist = target.getAttribute('id');
    let name = target.innerHTML;
    paintPlaylist(name, idPlaylist);
    getPlaylistUser(idPlaylist);
  })
}

btnRecent.addEventListener('click', (event) => {
  const target = event.target;
  let name = target.innerHTML;
  const recentList = new Recent(name, idUser);
  recentList.getRecentUser();
  recentList.addRecentNameDOM();
})

btnFavorite.addEventListener('click', (event) => {
  const target = event.target;
  let name = target.innerHTML;
  const favoriteList = new Favorite(name, idUser);
  favoriteList.getRecentUser();
  favoriteList.addRecentNameDOM();
})

getPlaylitsUser();

export default getSpecificSong;
