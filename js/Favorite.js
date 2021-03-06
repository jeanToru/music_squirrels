import getSpecificSong from "./Playlist.js";

class Favorite {
  constructor(name,id) {
    this.name = name;
    this.id = id;
  }

  getFavoriteUser() {
    const urlPlaylist = 'https://squirrelsmusic.herokuapp.com/favorite-music/';
    fetch(`${urlPlaylist}${this.id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const favoriteSongs = data.data[0].songs;
        favoriteSongs.forEach((songs) => {
          getSpecificSong(songs);
        })
      })
  }

  addFavoriteNameDOM(){
    const contentDOM = document.querySelector('.js-playlistName');
    contentDOM.innerHTML = '';
    const content = `
    <li class="songList__edit">
      <h2>${this.name}</h2>
      <button class="sidebar__edit js-edit__favorite">edit</button>
    </li>
    `;
    contentDOM.innerHTML += content;
  }
}

export default Favorite;
