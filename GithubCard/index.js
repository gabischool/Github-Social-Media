
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

function mycard(cardContent) {
  const newCard = document.createElement("div"),
    newImage = document.createElement("img"),
    CardInfor = document.createElement("div"),
    myName = document.createElement("h3"),
    username = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    Followers = document.createElement("p"),
    Following = document.createElement("p"),
    Bio = document.createElement("p");

  myName.textContent = cardContent.name;
  username.textContent = cardContent.login;
  newImage.src = cardContent.avatar_url;
  location.textContent = cardContent.location;
  profile.textContent = cardContent.html_url;
  Followers.textContent = cardContent.followers;
  Following.textContent = cardContent.following;
  Bio.textContent = cardContent.bio;

  newCard.classList.add("card");
  CardInfor.classList.add("card-info");
  myName.classList.add("name");
  username.classList.add("username");

  newCard.appendChild(newImage);
  newCard.appendChild(CardInfor);
  CardInfor.appendChild(myName);
  CardInfor.appendChild(username);
  CardInfor.appendChild(location);
  CardInfor.appendChild(profile);
  CardInfor.appendChild(Followers);
  CardInfor.appendChild(Following);
  CardInfor.appendChild(Bio);

  return newCard;
}

let cards = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/abdinuur10")
  .then((res) => {
    console.log(res.data);

    cards.appendChild(mycard(res.data));
  })

  .catch((error) => {
    console.log("Unexpected eroor, try agian", error);
  });



