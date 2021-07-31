// import { getUsers } from "./apiUsers.js";

const validation = document.getElementById('createUser');

function createUser(name, email, password) {
    const newUser = {
        name: name,
        email: email,
        password: password,
    };
    create(newUser);
}

function create(user) {
    console.log(JSON.stringify(user));
    fetch('https://squirrelsmusic.herokuapp.com/user', {
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
    alert(`El usuario fue agregado satisfactoriamente`);
}

validation.addEventListener('submit', (event) => {
    event.preventDefault();
    createUser(validation.elements[0].value, validation.elements[1].value, validation.elements[2].value)
})
