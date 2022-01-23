const form = document.querySelector(".js-greeting-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const SHOWING_CN = "showing";
const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(){
    const userName = input.value
    console.log(userName);
    saveName(userName);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintingUser(currentUser){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `${currentUser}, Welcome`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askForName();
    }else{
        paintingUser(currentUser);
    }
}
function init(){
    loadName();
}
init();