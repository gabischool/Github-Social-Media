
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

const followersArray = [];
const cardGit = document.querySelector(".cards")

axios.get("https://api.github.com/users/axmed84")
.then(response => {
  // response.data.forEach(function(information) {
    let myImage = response.data.avatar_url
    let myName = response.data.name
    let myUsername = response.data.login
    let myLocation = response.data.location
    let myProfile = response.data.html_url
    let myFollowers = response.data.followers
    let myFollowing = response.data.following
    let myBio = response.data.Bio
    cardGit.appendChild(githubUsers(myImage, myName, "login :"+myUsername, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
axios.get("https://api.github.com/users/AbdirisakKhabir")
.then(response => {
  // response.data.forEach(function(information) {
    let myImage = response.data.avatar_url
    let myName = response.data.name
    let myUsername = response.data.login
    let myLocation = response.data.location
    let myProfile = response.data.html_url
    let myFollowers = response.data.followers
    let myFollowing = response.data.following
    let myBio = response.data.Bio
    cardGit.appendChild(githubUsers(myImage, myName, myUsername, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
axios.get("https://api.github.com/users/duraanali")
.then(response => {
  // response.data.forEach(function(information) {
    let myImage = response.data.avatar_url
    let myName = response.data.name
    let myUsername = response.data.login
    let myLocation = response.data.location
    let myProfile = response.data.html_url
    let myFollowers = response.data.followers
    let myFollowing = response.data.following
    let myBio = response.data.Bio
    cardGit.appendChild(githubUsers(myImage, myName, "login :"+myUsername, "Location: "+myLocation, "Profile: "+myProfile, "Followers:" +myFollowers, "Following: "+myFollowing, "Bio: "+myBio))
  })
// }).catch(err => {
//   console.log(err)
// })

function githubUsers(image, user, userName, location, profile, followers, following, bio){
  // Step 1: creating elements
  const card = document.createElement("div")
  const userImg = document.createElement("img")
  const infoCard = document.createElement("div")
  const mainName = document.createElement("h3")
  const auserName = document.createElement("p")
  const userlocation = document.createElement("p")
  const userProfile = document.createElement("p")
  const userFallowers = document.createElement("p")
  const userFallowing = document.createElement("p")
  const userBio = document.createElement("p")
  // Step 2: Connection
  card.appendChild(userImg)
  card.appendChild(infoCard)
  infoCard.appendChild(mainName)
  infoCard.appendChild(auserName)
  infoCard.appendChild(userlocation)
  infoCard.appendChild(userProfile)
  infoCard.appendChild(userFallowers)
  infoCard.appendChild(userFallowing)
  infoCard.appendChild(userBio)
  // step 3: adding CSS
  card.classList.add("card")
  userImg.classList.add("card", "img")
  mainName.classList.add("name")
  auserName.classList.add("username")
  // step 4: add content
  userImg.src = image
  mainName.textContent = user
  auserName.textContent = auserName
  userlocation.textContent = location
  userProfile.textContent = profile
  userFallowers.textContent = followers
  userFallowing.textContent = following

return card

}



