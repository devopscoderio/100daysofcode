let homePoints = 0;
let guestPoints = 0;

function onePointHome() {
  document.getElementById("home-score").innerText = homePoints += 1
};


function twoPointHome() {
  document.getElementById("home-score").innerHTML = homePoints += 2
};

function threePointHome() {
  document.getElementById("home-score").innerHTML = homePoints += 3
};

function onePointGuest() {
  document.getElementById("guest-score").innerHTML = guestPoints += 1
};


function twoPointGuest() {
  document.getElementById("guest-score").innerHTML = guestPoints += 2
};

function threePointGuest() {
  document.getElementById("guest-score").innerHTML = guestPoints += 3
};


function newGame() {
  document.getElementById("home-score").innerHTML = homePoints = 0
  document.getElementById("guest-score").innerHTML = guestPoints = 0
};

function shotClock() {
  let shotClock = new Audio("./audio/NBA_Sound.mp3")
  shotClock.volume = 0.1;
  shotClock.play()
}