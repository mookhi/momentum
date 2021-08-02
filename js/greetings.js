const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const hiddenQuotes = document.querySelector("#quote");
const hiddenTodos = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//---------------------clock------------------------
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    return clock.innerText;
}

getClock();
setInterval(getClock, 1000);
//--------------------------------------------------


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
    showing();
}

function paintGreetings(paintName) {
    const clockHour = parseInt(clock.innerText);
    if(clockHour >= 4 && clockHour <= 11) {
        greeting.innerText = `Good morning, ${paintName}`;
    } else if(clockHour >= 12 && clockHour <= 17) {
        greeting.innerText = `Good afternoon, ${paintName}`
    } else if(clockHour >= 18 || clockHour >= 0) {
        greeting.innerText = `Good evening, ${paintName}`
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function showing() {
    hiddenQuotes.classList.remove(HIDDEN_CLASSNAME);
    hiddenTodos.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    showing();
}
