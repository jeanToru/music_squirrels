function savedLocalStorage() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.className === 'artist_content--name') {
      const id = target.getAttribute('id');
      localStorage.setItem('click', id);
    }
  });
}

export {
  savedLocalStorage
}
