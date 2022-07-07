const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
  const usersRequest = await fetch(
    `https://randomuser.me/api?results=${numUsers}`
  );
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
getData(1);

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

selectUserNumber.addEventListener("change", function (e) {
  // create a variable that will capture the selected value
  const numUsers = e.target.value;
  getData(numUsers);
});
// after adding this change event listener for selectUserNumber and then creating a numUsers variable that captures the selected value, followed by calling the getData function inside the callback function, you then need to modify the getData() function so it accepts numUsers as a parameter, and then in the fetch() request edit the API URL to use the results of the numUsers
// an argument for the first call to the getData() function needs to now be provided
