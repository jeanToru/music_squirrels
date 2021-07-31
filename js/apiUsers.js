const urlUsers = 'https://squirrelsmusic.herokuapp.com/users'
const ulrUser = 'https://squirrelsmusic.herokuapp.com/user'

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

function signUp(email, password) {
  fetch(`${urlUsers}/${email}`, {

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
      for (let i = 0; i < data.data.length; i++) {
        if (email === data.data[i].email) {
          console.log('Email utilizado por otro usuario')
          break
        }
        const newUser = {
          "name": `${name}`,
          "email": `${email}`,
          "password": `${password}`,
        }
        create(newUser);
      }
    })
}

export {
  checkData,
  signUp
}
