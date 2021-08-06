import getSpecificSong from "./Playlist.js";

class Recent {
  constructor(name,id) {
    this.name = name;
    this.id = id;
  }

  getRecentUser() {
    const urlPlaylist = 'https://squirrelsmusic.herokuapp.com/recent/';
    fetch(`${urlPlaylist}${this.id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const songList = data.data[0].songs;
        songList.forEach((songs) => {
          getSpecificSong(songs);
        })
      })
  }

  addRecentNameDOM(){
    const contentDOM = document.querySelector('.js-playlistName');
    contentDOM.innerHTML = '';
    const content = `
    <li class="songList__edit">
      <h2>${this.name}</h2>
    </li>
    `;
    contentDOM.innerHTML += content;
  }
}

export default Recent;
