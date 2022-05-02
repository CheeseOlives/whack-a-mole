const newGame = document.getElementById("new-game");
const startGame = document.getElementById("start-game");
const leaderboard = document.getElementById("leaderboard");
const countdown = document.getElementById("countdown");
const scoreCount = document.getElementById("score-count");
const gameGrid = document.getElementById("game-grid");
const play = document.getElementById("play");
const moleHill = document.querySelectorAll(".grid-square");
let gameOver = false;

//RANDOM NUMBER FUNCTION

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//ASSIGN MOLE TO RANDOM HILL

function randomMole(num) {
  moleHill[num].classList.toggle("mole");
  setTimeout(() => {
    moleHill[num].classList.toggle("mole");
  }, 800);
}

//CLEAR ALL MOLE HILLS

function clearMoles() {
  moleHill.forEach((e) => {
    e.classList.remove("mole");
  });
}

//ADD POINTS TO SCOREBOARD

gameGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("mole")) {
    scoreCount.textContent = parseInt(scoreCount.textContent) + 1;
  }
});

//GENERATE RANDOM NUMBER AND ASSIGN
function moleSet() {
  const moleInterval = setInterval(() => {
    console.log("int2");
    if (!gameOver) {
      console.log("running");
      const rand = getRandomIntInclusive(0, moleHill.length - 1);
      randomMole(rand);
    } else {
      clearMoles();
      clearInterval(moleInterval);
      return;
    }
  }, 900);
}

//COUNTDOWN TIMER

function countdownTimer() {
  let timeCount = countdown.textContent;
  console.log(timeCount);
  const counterTimer = setInterval(() => {
    console.log("int1");
    if (timeCount && !gameOver) {
      timeCount -= 1;
      countdown.textContent = timeCount;
    } else {
      gameOver = true;
      clearInterval(counterTimer);
      return;
    }
  }, 1000);

  return counterTimer;
}

//RESTART FUNCTION, RESET STATS COUNTERS AND START PROCESSES AGAIN

function restartGame() {
  countdown.textContent = "30";
  scoreCount.textContent = "0";
  moleSet();
  countdownTimer();
  console.log(gameOver);
}

/********************************
 * START A NEW GAME
 * 1 SET INTERVAL TO COUNTDOWN
 * 1 TIMEOUT TO REMOVE COUNTDOWN DIV
 * 1 TIMEOUT TO REMOVE COUNTDOWN DIV
 ********************************/

startGame.addEventListener("click", (e) => {
  console.log("clicked");
  //1 SET INTERVAL TO COUNTDOWN
  let counter = 3;
  const interval = setInterval(() => {
    play.textContent = counter;
    counter -= 1;
  }, 1000);

  //1 TIMEOUT TO REMOVE COUNTDOWN DIV
  setTimeout(() => {
    play.classList.add("hide-play");
    clearInterval(interval);
  }, 4000);

  //1 TIMEOUT TO REVEAL GAME GRID DIV
  setTimeout(() => {
    gameGrid.classList.remove("hide-grid");
  }, 4000);

  //GENERATE RANDOM NUMBER AND ASSIGN MOLE TO HILL

  moleSet();

  //COUNTDOWN TIMER

  setTimeout(() => {
    countdownTimer();
  }, 3000);
});

// BUTTON TO INITIATE NEW GAME
newGame.addEventListener("click", (e) => {
  gameOver = false;
  restartGame();
});


//////////////////////////////////////
///////////      CHI      ////////////
//////////////////////////////////////

///////////////////////////////////////////////
/////////////////////LEADERBOARD///////////////
///////////////////////////////////////////////

//////////////// draft 1 ///////////////
////////////////////////////////////////
// const nameDisplay = document.getElementById('leaderboard-name');


// const name_submit = document.forms['name-submit'];

// name_submit.addEventListener('submit', (e) => {
// e.preventDefault();
// const nameData = new FormData(name_submit);
// const {name} = Object.fromEntries(nameData);
// console.log("🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name", name);
// name_submit.reset();
// handleNames(name);
// });

// const leaderboardNames = [];

// function handleNames(name){
//   leaderboardNames.push(name);
//   inputLeaderboardName();
// }

// function inputLeaderboardName() {
//   nameDisplay.textContent = leaderboardNames.join(', ');
// }

// function handleNames(name){
//   leaderboardNames.push(name);
//   inputLeaderboardName();
//  }

///////////////////draft 2//////////////////
////////////////////////////////////////////
// const nameDisplay = document.getElementById('leaderboard-name');


// const name_submit = document.forms['name-submit'];

// name_submit.addEventListener('submit', (e) => {
// e.preventDefault();
// const nameData = new FormData(name_submit);
// const {name} = Object.fromEntries(nameData);
// console.log("🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name", name);
// name_submit.reset();
// handleNames(name);
// });

// const leaderboardNames = [];

// const ol = document.getElementById('name-list');
// const newName = document.createElement("li");

// function handleNames(name){
//   leaderboardNames.push(name);
//   // inputLeaderboardName();
  
//   leaderboardNames.forEach(function(name, index) {
//         ol.appendChild(newName);    
//     nameDisplay.textContent = name;
//   })
// }

/////////////////////// draft 3 ////////////////////
////////////////////////////////////////////////////
const nameDisplay = document.getElementById('leaderboard-name1');

const leaderboardName1 = document.getElementById('leaderboard-name1');
const leaderboardName2 = document.getElementById('leaderboard-name2');
const leaderboardName3 = document.getElementById('leaderboard-name3');
const leaderboardName4 = document.getElementById('leaderboard-name4');
const leaderboardName5 = document.getElementById('leaderboard-name5');

const hideList = document.getElementsByClassName('leaderboard-name');

const name_submit = document.forms['name-submit'];

name_submit.addEventListener('submit', (e) => {
e.preventDefault();
const nameData = new FormData(name_submit);
const {name} = Object.fromEntries(nameData);
console.log("🚀 ~ file: main.js ~ line 158 ~ name_submit.addEventListener ~ name", name);
name_submit.reset();
handleNames(name);
console.log('name array', leaderboardNames);
});

const leaderboardNames = [];

function handleNames(name){
  leaderboardNames.push(name);
  leaderboardName1.textContent = leaderboardNames[0];
  leaderboardName2.textContent = leaderboardNames[1];
  leaderboardName3.textContent = leaderboardNames[2];
  leaderboardName4.textContent = leaderboardNames[3];
  leaderboardName5.textContent = leaderboardNames[4];
}

/////something to hide a list item if it is blank?//

////////////////////////////////////////////////////
/////////////////////// SCORE //////////////////////
////////////////////////////////////////////////////

////// STILL IN PROGRESS/////////////

//show the score
// const leaderboardScores = [];

// const leaderboard_score = document.getElementById('leaderboard-score');
// leaderboard_score.textContent = scoreCount;