const clock = document.querySelector("#clockform h1");

function correntTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}

correntTime();
setInterval(correntTime, 1000);
