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
        <a href="../songs/index.html">
          <h2 id="${this.id}" class="artist_content--name">${this.name}</h2>
        </a>
      </div>
    `;
   contentDoom.innerHTML += content;
  }

  addDescriptionDOM() {
    const contentDoom = document.querySelector('.js-description');
    const content = `
    <div id="${this.id}" class="box__content">
    <h1>${this.name}</h1>
    <img src="${this.image}" alt="${this.name}">
    <p>${this.description}</p>
    </div>
    `;
    contentDoom.innerHTML += content;
  }
}

export default Artist;
