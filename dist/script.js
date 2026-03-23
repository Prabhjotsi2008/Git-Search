const userInput = document.querySelector("#user-input");
const searchButton = document.querySelector("#search-btn");
const userName = document.querySelector("#user-name");
const userBio = document.querySelector("#user-bio");
const userLocation = document.querySelector("#user-location");
const userFollowers = document.querySelector("#user-followers");
const userFollowing = document.querySelector("#user-following");
const userRepos = document.querySelector("#user-repos");
const userImg = document.querySelector("#user-img");
const loader = document.querySelector("#loader");
const userLink = document.querySelector("#link");

const themeToggle = document.querySelector("#theme-toggle");
const toggleIcon = document.querySelector("#toggle-icon");

const inputCont = document.querySelector(".input-cont");
const titleBar = document.querySelector("#title-bar");
const outputCont = document.querySelector(".output-cont");

const userParas = document.querySelectorAll(".para");
// console.log(userInput.placeholder,searchButton.textContent)

const BASE_URL = "https://api.github.com/users/"

searchButton.addEventListener("click", () => {
    userImg.src = "images/github-svgrepo-com.svg";
    loader.classList.add("text-green-500")
    loader.textContent = "Fetching data from GitHub..."
    loader.classList.remove("hidden");
    userParas.forEach(para => para.classList.add("hidden"));

    const username = userInput.value.toLowerCase().trim();
    console.log(username);

    if (username == "" || !username) {
        loader.classList.remove("text-green-500")
        loader.classList.add("text-gray-400")
        loader.textContent = "Enter a valid username"
        userParas.forEach(para => para.classList.add("hidden"));
        return;
    }
    setTimeout(async () => {
        try{
        const response = await fetch(`${BASE_URL}${username}`);
        const data = await response.json();
        console.log(data);

        if (data.message == "Not Found"){
            loader.classList.remove("text-green-500")
            loader.classList.add("text-gray-400")
            loader.textContent = `Username ${username} not found`
            return;
        }
        const name = `${data.name || "N/A"} (${data.type})`;
        const bio = data.bio || "N/A";
        const location = data.location || "N/A";
        const followers = data.followers || 0;
        const following = data.following || 0;
        const repos = data.public_repos || 0;
        const imgUrl = data.avatar_url || "images/github-svgrepo-com.svg"; 
        const link = data.html_url || "#";

        loader.classList.add("hidden");
        userParas.forEach(para => para.classList.remove("hidden"));

        userName.textContent = name;
        userBio.textContent = bio;
        userLocation.textContent = location;
        userFollowers.textContent = followers;
        userFollowing.textContent = following;
        userRepos.textContent = repos;
        userImg.src = imgUrl;
        userLink.href = link;
        
    } catch(err){
        alert("Error in fetching data from GitHub. Please try again later.");
        loader.classList.add("hidden");
        userParas.forEach(para => para.classList.add("hidden"));
    }
    },1500);
});

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    toggleIcon.src = toggleIcon.src.includes("dark-mode-github.svg") ? "images/light-mode-github.svg" : "images/dark-mode-github.svg";  

    document.body.classList.toggle("bg-slate-100");
    document.body.classList.toggle("text-slate-900");
    inputCont.classList.toggle("bg-white");
    inputCont.classList.toggle("border-slate-200");
    titleBar.classList.toggle("bg-white");
    titleBar.classList.toggle("border-slate-200");
    themeToggle.classList.toggle("bg-white");
    themeToggle.classList.toggle("border-slate-200");
    outputCont.classList.toggle("bg-white");
    outputCont.classList.toggle("border-slate-200");
});