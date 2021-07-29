import Song from './song.js';
import { fetchDescription } from './apiArtist.js';

const id = localStorage.getItem('click');

const URLSONG = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/`;

fetch(`${URLSONG}${id}`, {
  method: "GET"
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((songList) => {
      const songs = new Song(songList.id, songList.name, songList.album, songList.image, songList.audio);
      songs.addSongDOM();
    })
    fetchDescription()
  })
  .catch((error) => {
    console.log("error", error);
  })
