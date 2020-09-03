import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [
  'tarmes',
  'blhagadorn',
  'juliankeefe',
  'festaton',
  'vrowold',
];
 
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(stuff => {
    const userData = stuff.data
    const newCard = createGitCard( userData )
    cards.appendChild(newCard)
  })
  .catch(err => {
    debugger
  })
})

// for (i = 0; i < followersArray.length; i++) {
//   axios.get(`https://api.github.com/users/${followersArray[i]}`)
//   .then(stuff => {
//     const userData = stuff.data
//     const newCard = createGitCard({ userData })
//     cards.appendChild(newCard)
//   })
//   .catch(err => {
//     debugger
//   })
// }


// axios.get('https://api.github.com/users/tarmes')
//   .then(stuff => {
//     console.log(stuff.data.avatar_url);
//     const userData = stuff.data
//     const newCard = createGitCard({ userData })
//     cards.appendChild(newCard)
//   })
//   .catch(err => {
//     debugger
//   })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
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

function createGitCard( gitObj ) {
  
  const gitCard = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardHeader = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const userAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const userBio = document.createElement('p')

  gitCard.appendChild(userImg)
  gitCard.appendChild(cardInfo)
  cardInfo.appendChild(cardHeader)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  userProfile.appendChild(userAddress)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(userBio)

  gitCard.classList.add('card')
  cardInfo.classList.add('card-info')
  cardHeader.classList.add('name')
  userName.classList.add('username')

  userImg.src = gitObj.avatar_url
  cardHeader.textContent = gitObj.name
  userName.textContent = gitObj.login
  userLocation.textContent = `Location: ${gitObj.location}`
  userProfile.textContent = 'Profile:'
  userAddress.textContent = 'address to users github page'
  userAddress.href = gitObj.html_url
  followers.textContent = `Followers: ${gitObj.followers}`
  following.textContent = `Followers: ${gitObj.following}`

  return gitCard

}

const cards = document.querySelector('.cards')



