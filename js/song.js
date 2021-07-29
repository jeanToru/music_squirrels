class Song {
  constructor(id, name, album, image, audio) {
    this.id = id;
    this.name = name;
    this.album = album;
    this.image = image;
    this.audio = audio;
  }

  addSongDOM() {
    const listSong = document.querySelector('.songsList');

    const content = `
      <li id="${this.id}" class="songList__item">
        <img src="${this.image}" alt="">
        <div class="songsList__item--name">
          <p>${this.name}</p>
          <span>Song</span>
        </div>
        <div class="songsList__item--name">
          <p>${this.album}z</p>
          <span>Album</span>
        </div>
        <button class="form__button--btn mainBtn">Play</button>
      </li>
      `;

    listSong.innerHTML += content;
  }
}

export default Song;
