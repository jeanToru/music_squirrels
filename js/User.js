let urlUserEspecific = 'https://squirrelsmusic.herokuapp.com/user/';
class User {
  constructor(data, userEspecific) {
    this.data = data;
    this.userEspecific = userEspecific;
  }
  updateNameUser() {
    console.log(this.data)
    const newName = {
      "name": `${this.data}`,
    }
    fetch(`${urlUserEspecific}${this.userEspecific}`, {
      headers: {
        "Content-Type": "application/json"
    },
      method: "PUT",
      body: JSON.stringify(newName),
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
      <h2 class="sidebar__name">${this.data.data.name}</h2>
      <button class="sidebar__edit">edit</button>
    `;
    contentDoom.innerHTML += content;
  }
}

export default User;
