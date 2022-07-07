const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  const data = await usersRequest.json();
  // console.log(data);
  /* 
  look at what your data variable returns in the console,
  find the property name for the array of user objects,
  create a new variable and map it to that property
   */
  const userResults = data.results;
  // console.log(userResults);

  displayUsers(userResults);
};
getData();

const displayUsers = function (userResults) {
  // empty randomFolks element’s contents to make sure there aren't any duplicated DOM elements
  randomFolks.innerHTML = "";

  for (const user of userResults) {
    // for every user, select their country, first name, and avatar URL with a size of medium
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<h3>${name}</h3> <p>${country}</p> 
    <img src=${imageUrl} alt="User avatar"/>`;
    randomFolks.append(userDiv);
  }
};
