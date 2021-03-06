class Playlists {
  constructor(name, id){
    this.name = name;
    this.id = id;
  }

  AddplaylistDOM(){
    const contentDOM = document.querySelector('.js-playList');
    const content = `
    <li id="${this.id}" class="sidebar__playlist--list">
      <h3 class="playlist" id="${this.id}">${this.name}</h3>
    </li>
    `;
    contentDOM.innerHTML += content;
  }

  updatePlaylist() {
    const urlPlaylists = 'https://squirrelsmusic.herokuapp.com/playlist/';
    fetch(`${urlPlaylists}${this.id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
  }

  addPlaylistNameDOM(){
    const contentDOM = document.querySelector('.js-playlistName');
    contentDOM.innerHTML = '';
    const content = `
    <li class="songList__edit">
      <h2>${this.name}</h2>
      <button id="${this.id}" class="sidebar__edit js-editMode">Edit</button>
      <button id="${this.id}" class="sidebar__trash-Playlist js__none">remove</button>
    </li>
    `;
    contentDOM.innerHTML += content;
  }
}

export default  Playlists;
