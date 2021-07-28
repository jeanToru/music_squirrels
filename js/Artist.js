class Artist {
  constructor(id, name, image, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  AddArtistDOM() {
    const contentDoom = document.querySelector('.artist');
    const content = `
      <div id="${this.id}" class="artist_content">
        <img class="artist_content--album" src="${this.image}" alt="">
        <h2 id="${this.id}" class="artist_content--name">${this.name}</h2>
      </div>
    `;
   contentDoom.innerHTML += content;
  }
}

export default Artist;
