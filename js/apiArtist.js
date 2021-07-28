import Artist from './Artist.js';
const url = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((artistSong) => {
      const artists = new Artist(artistSong.id, artistSong.name, artistSong.image, artistSong.description);
      artists.AddArtistDOM();
    });

  });
