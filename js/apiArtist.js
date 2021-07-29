import Artist from './Artist.js';
import { savedLocalStorage } from './saveLocal.js';

const url = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const id = localStorage.getItem('click');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((artistSong) => {
      const artists = new Artist(artistSong.id, artistSong.name, artistSong.image, artistSong.description);
      artists.AddArtistDOM();
    });
    savedLocalStorage();
  });

function fetchDescription(){
  fetch(url)
  .then((response) => response.json())
    .then((data) => {
      data.forEach((descriptionSong) => {
        console.log(descriptionSong.id)
        if(descriptionSong.id === id) {
          const description = new Artist(descriptionSong.id, descriptionSong.name, descriptionSong.image, descriptionSong.description);
          description.addDescriptionDOM();
        }
      });
    });
}

export {
  fetchDescription
}
