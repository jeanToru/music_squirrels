class Playlists {
  constructor(name, id){
    this.name = name;
    this.id = id;
  }
  AddplaylistDOM(){
    const contentDOM = document.querySelector('.js-playList');
    const content = `
    <li class="sidebar__playlist--list">
      <h3>${this.name}</h3>
    </li>
    `;
    contentDOM.innerHTML += content;
  }
}

export default  Playlists;
