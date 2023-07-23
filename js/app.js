const greetingForm = document.querySelector("#greeting_form");
const greeting = document.querySelector("#greeting");
const greetingBtn = document.querySelector("#greetingBtn");
const greetingText = document.querySelector("#greetingtext");
const date = new Date();
function userInfo(event) {
  event.preventDefault();
  const userName = localStorage.setItem("userName", greeting.value);
  paintGreeting();
}
function paintGreeting() {
  const greetingTime = [
    "Good morning",
    "Good afternoon",
    "Good evening",
    "Good night",
  ];
  const correntUserName = localStorage.getItem("userName");
  const correnthours = date.getHours();
  let hours = null;
  if (correnthours >= 6 && correnthours < 12) {
    hours = 0;
  } else if (correnthours >= 12 && correnthours < 18) {
    hours = 1;
  } else if (correnthours >= 18 && correnthours < 24) {
    hours = 2;
  } else {
    hours = 3;
  }

  if (correntUserName != null) {
    greetingForm.classList.add("hidden");
    greetingText.innerText = `${greetingTime[hours]}, ${correntUserName}`;
  } else {
    greetingForm.classList.remove("hidden");
  }
}
paintGreeting();
greetingBtn.addEventListener("click", userInfo);
