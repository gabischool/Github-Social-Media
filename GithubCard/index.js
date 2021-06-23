
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

function gitmaker(data) {

    //step1: create elements
  const main = document.createElement('div')
  const Profileimage = document.createElement('img')
  const info = document.createElement('div')
  const Profilename = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const followers = document.createElement('p')

 //step2: connect elements
  main.appendChild(Profileimage)
  main.appendChild(info)
  info.appendChild(Profilename)
  info.appendChild(username)
  info.appendChild(location)
  info.appendChild(followers)

  //step3: add classes

    main.classList.add("card")
    info.classList.add("card-info")
    Profilename.classList.add("name")
    username.classList.add("username")
  
    //step4: add content  
      Profileimage.src= data.avatar_url 
      Profilename.textContent = data.name
      username.textContent = data.login
      location.textContent = data.location
      followers.textContent = data.followers
      

      return main
 
}

let maan = document.querySelector(".cards")
axios.get("https://api.github.com/users/Buushe")
.then(function(respond){
  maan.appendChild(gitmaker(respond.data))
})


.catch(function(err){
  console.log(err)
})


let man = document.querySelector(".cards")
axios.get("https://api.github.com/users/duraanali")
.then(function(respond){
  man.appendChild(gitmaker(respond.data))
})


.catch(function(err){
  console.log(err)
})

let min = document.querySelector(".cards")
axios.get("https://api.github.com/users/AbdirisakAhmed")
.then(function(respond){
  min.appendChild(gitmaker(respond.data))
})


.catch(function(err){
  console.log(err)
})  

let mn = document.querySelector(".cards")
axios.get("https://api.github.com/users/abdihakim98")
.then(function(respond){
  mn.appendChild(gitmaker(respond.data))
})


.catch(function(err){
  console.log(err)
})    
 
