import {audioInit} from './audioInit.js';

const controllerB = document.querySelector('.before');
const controllerP = document.querySelector('.play');
const controllerA = document.querySelector('.after');
const title = document.querySelector('.js-title');

const audio = document.getElementById('audio');
const AudioContext = window.AudioContext || window.webkitAudioContext;
let currentSong;
let song;

const idArtist = localStorage.getItem('click');
const idSong = localStorage.getItem('idSong');
console.log(idArtist)

const URL = `https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/${idArtist}`;
fetch(URL)
.then((response) => response.json())
.then((data) => {
  for(let i = 0; i < data.length; i++) {

    if(data[i].id === idSong) {
      currentSong = i
      title.innerHTML = data[i].name;
      init(data[i].audio);

      function next(){
        controllerA.addEventListener('click', () => {
          currentSong ++;
          if (currentSong > data.length - 1) {
            currentSong = 0;
            console.log('hi')
          }
          song = data[currentSong].audio;
          title.innerHTML = data[currentSong].name;
          init(song);
        })
      }

      function previus(){
        controllerB.addEventListener('click', () => {
          currentSong --;
          if (currentSong < 0) {
            currentSong = data.length - 1;
          }
          song = data[currentSong].audio;
          title.innerHTML = data[currentSong].name;
          init(song);
        })
      }

      previus();
      next();
    }
  }
})

function init(data) {
  audio.src = data;
  audio.crossorigin = 'anonymous';
  audio.load();
  playSong(audio);
}

function playSong(song){
  audioInit();
  controllerP.addEventListener('click', () => {
    if(audio.paused === false) {
      controllerP.classList.remove('pause');
      controllerP.classList.add('play');
      song.pause();
    } else {
      controllerP.classList.remove('play');
      controllerP.classList.add('addPlaylist');
      controllerP.classList.add('pause');
      song.play();
    }
  })
}

export {
  audio,
  AudioContext,
}
