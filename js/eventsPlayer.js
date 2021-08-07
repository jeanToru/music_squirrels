const btnSongs = document.querySelector('.songsList');
const idArtist = localStorage.getItem('click');

btnSongs.addEventListener('click', (event) => {
  const target = event.target;
  const idSong = target.getAttribute('id');
  localStorage.setItem('idSong', idSong);
  window.location.href = '../player/index.html';
})
