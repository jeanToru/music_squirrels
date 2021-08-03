const urlUsers = 'https://squirrelsmusic.herokuapp.com/users';
const ulrUser = 'https://squirrelsmusic.herokuapp.com/user';

function create(user) {
  fetch(ulrUser, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
}

function login(email, password) {
  const userLogin = {
    "email": `${email}`,
    "password": `${password}`,
  }
  fetch(`${ulrUser}/login`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(userLogin),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data._id);
      localStorage.setItem('idUserLogin', data.data._id);
      localStorage.setItem('idUserName', data.data.name);
    })
}

function checkData(email, password, name) {
  fetch(urlUsers, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const newUser = {
        "name": `${name}`,
        "email": `${email}`,
        "password": `${password}`,
      }
      create(newUser);
      //window.location.href = './homeLogin/index.html'
    })
}

export {
  login,
  checkData
}
