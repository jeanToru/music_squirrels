let urlUserEspecific = 'https://squirrelsmusic.herokuapp.com/user/';

class User {
  constructor(data, userEspecific) {
    this.data = data;
    this.userEspecific = userEspecific;
  }
  updateNameUser() {
    fetch(`${urlUserEspecific}${this.userEspecific}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'PUT',
      body: JSON.stringify(this.data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
  }

  nameUserDoom() {
    const contentDoom = document.querySelector('.js-profileName');
    const content = `
      <h2>${this.data.data.name}</h2>
      <button class="sidebar__edit">edit</button>
    `;
    contentDoom.innerHTML += content;
  }
}

export default User;
