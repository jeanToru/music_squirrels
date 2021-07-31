const urlUsers = 'https://squirrelsmusic.herokuapp.com/users'

function getUsers() {
  fetch(urlUsers, {
    method: "GET"
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log("error", error);
  });
}

export {
  getUsers
}
