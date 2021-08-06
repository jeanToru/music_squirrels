import {audioInit} from './audioInit.js';

const audio = document.getElementById('audio');
const AudioContext = window.AudioContext || window.webkitAudioContext;

const controllerB = document.querySelector('.before');
const controllerP = document.querySelector('.play');
const controllerA = document.querySelector('.after');
const title = document.querySelector('.js-title')
let currentSong = 0;
let song;

const url = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/gorillaz';
fetch(url)
.then((response) => response.json())
.then((data) => {
  title.innerHTML = data[currentSong].name;
  init(data[currentSong].audio);
  next(data);
  previus(data);
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


/*
function playSong(song){
  audioInit();
  controllerP.addEventListener('click', () =>{
    if(controllerP.classList.contains('playing')){
      console.log(controllerP.src = '../img/play.svg');
      controllerP.setAttribute('id', 'btnPause');
      song.pause();
    }else{
      controllerP.src = '../img/pause.svg';
      song.play();
    }
    controllerP.classList.toggle('playing');
  });
}*/

function next(data){
  controllerA.addEventListener('click', () => {
    currentSong ++;
    if (currentSong > data.length - 1) {
      currentSong = 0;
    }
    song = data[currentSong].audio;
    title.innerHTML = data[currentSong].name;
    init(song);
  })
}

function previus(data){
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

export {
  audio,
  AudioContext
}
