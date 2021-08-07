function deletePlaylist(idPlaylist) {
  const urlPlaylistsDelete = `https://squirrelsmusic.herokuapp.com/playlist/${idPlaylist}`;
  fetch(urlPlaylistsDelete, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
}

function deletePlaylistSong(idPlaylist, idSong) {
  const urlPlaylistsDelete = `https://squirrelsmusic.herokuapp.com/playlist/${idPlaylist}/song/${idSong}`;
  fetch(urlPlaylistsDelete, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
}

export {
  deletePlaylist,
  deletePlaylistSong
}
