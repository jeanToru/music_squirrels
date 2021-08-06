import Playlists from "./PLaylists.js";
import Song from './song.js';
import Recent from './Recent.js';
import Favorite from './Favorite.js';
import { deletePlaylistSong, deletePlaylist } from './deletePlaylist.js'

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
  const btnEditMode = document.querySelector('.js-editMode');
  console.log(btnEditMode)
  getBtnEdit(btnEditMode);
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
        getSpecificSong(songs);
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
  favoriteList.getFavoriteUser();
  favoriteList.addFavoriteNameDOM();
  const btnEditMode = document.querySelector('.js-editMode');
  getBtnEdit(btnEditMode);
})

function getBtnEdit(btnEditMode) {
  btnEditMode.addEventListener('click', (event) => {
    const target = event.target;
    const idPlaylist = target.getAttribute('id');
    localStorage.setItem('playlistId', idPlaylist);
    const btnPlay = document.querySelectorAll('.form__button--btn');
    const btnTrash = document.querySelectorAll('.sidebar__trash');
    const btnTrashPlaylist = document.querySelector('.sidebar__trash-Playlist');
    btnTrashPlaylist.classList.remove('js__none');
    for (let i = 0; i < btnPlay.length; i++) {
      btnTrash[i].classList.remove('js__none');
      btnPlay[i].classList.add('js__none');
    }
    const btnDelete = document.querySelector('.sidebar__trash');
    getBtnDelete(btnDelete);
    getBtnDeletePlaylist(btnTrashPlaylist);
  })
}

function getBtnDelete(btnDelete) {
  btnDelete.addEventListener('click', (event) => {
    const idPlaylist = localStorage.getItem('playlistId');
    const contentDOM = document.querySelector('.songList__item');
    const target = event.target;
    const idSong = target.getAttribute('id');
    contentDOM.remove();
    deletePlaylistSong(idPlaylist, idSong);
  })
}

function getBtnDeletePlaylist(btnDelete) {
  btnDelete.addEventListener('click', (event) => {
    const target = event.target;
    const idPlaylist = target.getAttribute('id');
    deletePlaylist(idPlaylist);
    const title =  document.querySelectorAll('.sidebar__playlist--list')
    const listSongs = document.querySelectorAll('.songList__item');
    for (let i = 0; i < listSongs.length; i++) {
      listSongs[i].remove();
    }
    for (let i = 0; i < title.length; i++) {
      if(idPlaylist === title[i].getAttribute('id')){
        console.log(title[i])
        title[i].remove();
      }
    }
    const namePlaylist = document.querySelector('.songList__edit');
    namePlaylist.remove();
  })
}

getPlaylitsUser();
export default getSpecificSong;
