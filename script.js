const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.getElementById("profile-container");
const errorContainer = document.getElementById("error-container");
const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const usernameElement = document.getElementById("username");
const bioElement = document.getElementById("bio");
const locationElement = document.getElementById("location");
const joinedDateElement = document.getElementById("joined-date");
const profileLink = document.getElementById("profile-link");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const companyElement = document.getElementById("company");
const blogElement = document.getElementById("blog");
const twitterElement = document.getElementById("twitter");
const companyContainer = document.getElementById("company-container");
const blogContainer = document.getElementById("blog-container");
const twitterContainer = document.getElementById("twitter-container");
const reposContainer = document.getElementById("repos-container");


searchBtn.addEventListener("click".searchUser);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchUser();
  }
});

async function searchUser(){
    const username = searchInput.value.trim();
    if (!username) return;
    try{
 
        profileContainer.classList.add("hidden");
        errorContainer.classList.add("hidden");
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error("user not found");
        const data = await response.json();
        displayUserData(userData)
    }catch (error){ showError()
}   }


function displayUserData(user){
    avatar.src = user.avatar_url;
    nameElement.textContent = user.name || "No name provided";
    usernameElement.textContent = `@${user.login}`;
    bioElement.textContent = user.bio || "This profile has no bio";
    locationElement.textContent = user.location || "Not available";
    joinedDateElement.textContent = user.created_at 
    profileLink.href = user.html_url;
    followers.textContent = user.followers;
    following.textContent = user.following;
    repos.textContent = user.public_repos;
    if(user.company){
        companyElement.textContent = user.company;
        companyContainer.classList.remove("hidden");
    } else{
        companyContainer.classList.add("hidden");
    }

    if(user.blog){
        blogElement.textContent = user.blog;
        blogElement.href = user.blog;
        blogContainer.classList.remove("hidden");
        blogContainer.style.display ="flex";
    } else{
        blogContainer.classList.add("hidden");
    }
    if(user.twitter_username){
        twitterElement.textContent = `@${user.twitter_username}`;
        twitterElement.href = `https://twitter.com/${user.twitter_username}`;
        twitterContainer.classList.remove("hidden");
    } else{
        twitterContainer.classList.add("hidden");
    }





function showError(){
    errorContainer.classList.remove("hidden");
    profileContainer.classList.add("hidden");
}