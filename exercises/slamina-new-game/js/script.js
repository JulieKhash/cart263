"use strict";

const FRUITS = [
  "apple",
  "apricot",
  "avocado",
  "banana",
  "bell pepper",
  "bilberry",
  "blackberry",
  "blackcurrant",
  "blood orange",
  "blueberry",
  "boysenberry",
  "breadfruit",
  "canary melon",
  "cantaloupe",
  "cherimoya",
  "cherry",
  "chili pepper",
  "clementine",
  "cloudberry",
  "coconut",
  "cranberry",
  "cucumber",
  "currant",
  "damson",
  "date",
  "dragonfruit",
  "durian",
  "eggplant",
  "elderberry",
  "feijoa",
  "fig",
  "goji berry",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeydew",
  "huckleberry",
  "jackfruit",
  "jambul",
  "jujube",
  "kiwi fruit",
  "kumquat",
  "lemon",
  "lime",
  "loquat",
  "lychee",
  "mandarine",
  "mango",
  "mulberry",
  "nectarine",
  "nut",
  "olive",
  "orange",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "physalis",
  "pineapple",
  "plum",
  "pomegranate",
  "pomelo",
  "purple mangosteen",
  "quince",
  "raisin",
  "rambutan",
  "raspberry",
  "redcurrant",
  "rock melon",
  "salal berry",
  "satsuma",
  "star fruit",
  "strawberry",
  "tamarillo",
  "tangerine",
  "tomato",
  "ugli fruit",
  "watermelon",
];

let currentFruit = "";
let currentAnswer = "";

let displayUserAnswer = false;
let displayGuessWord = true;

let responsiveVoiceActive = true;

let reverseFruit;

let state = "intro";
let gameActive = true;

let timeBar;

function setup() {
  createCanvas(700, 700);

  timeBar = new TimeBar(width / 2, height / 2); // creates a circlelike timer

  // creates a voice recognition, checks if available on a given browser
  if (annyang) {
    let commands = {
      "*fruit": guessFruit,
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

function draw() {
  background(0, 10, 100);

  gameStates();
  timeBar.update();
}

// takes in a string (reversed) and displays it
function showCurrentFruit(string) {
  if (displayGuessWord) {
    fill(255, 255, 0);
    text(string, width / 2, height / 2);
  }
}

// shows the actual name of the fruit: green: correct, red: incorrect:
function showAnswer() {
  if (isCorrect()) {
    background(0, 255, 0);
    text(currentFruit, width / 2, height / 2);
    //    responsiveVoice.speak("Great!");
  } else {
    background(255, 0, 0);
    text(currentAnswer, width / 2, height / 2);
    // responsiveVoice.speak("Nope!");
  }
}

// checks if the current answer matches the name of the current fruit
function isCorrect() {
  if (currentAnswer === currentFruit) {
    return true;
  } else {
    return false;
  }
}

// breaks down the word the makes it reversed
function reverseString(string) {
  let characters = string.split("");
  let reverseCharacter = characters.reverse();
  let result = reverseCharacter.join("");
  return result;
}

// gets a fruit from an array, reverse it and speaks
function mousePressed() {
  if ((state = "intro" && !timeBar.active)) {
    state = "game";
  }

  displayUserAnswer = false;
  currentFruit = random(FRUITS);
  reverseFruit = reverseString(currentFruit);

  // responsiveVoice.speak("Read the Fruit name in Reverse. Click to Start");
  // responsiveVoice.speak(currentFruit);
}

function guessFruit(fruit) {
  currentAnswer = fruit.toLowerCase();
  displayUserAnswer = true;
  console.log(currentAnswer);
}

function speakingVoice() {
  if (responsiveVoiceActive) {
    responsiveVoice.speak("Read the Fruit name in Reverse. Click to Start");
  }
}

function gameStates() {
  if (state === "intro") {
    intro();
  } else if (state === "game") {
    game();
  } else if (state === "gameOver") {
    gameOver();
  }
}

function intro() {
  background(20, 0, 0);
  //timeBar.active = false;
  timeBar.active = true;
  fill(255);
  text("Allow speech", width / 2, height / 2);
  speakingVoice();
  // responsiveVoice.speak("Read the Fruit name in Reverse. Click to Start");
}

function game() {
  // timeBar.active = true;
  if (!displayUserAnswer) {
    showCurrentFruit(reverseFruit);
  } else {
    showAnswer();
  }
}

// function startSpeaking() {
//   currentAnswer;
// }
//
// function endSpeaking() {
//   currentFruit = "";
// }

function gameOver() {
  if (!timeBar.active) {
    displayGuessWord = false;
    displayUserAnswer = false;
    fill(random(0, 255));
    text("game over!", width / 2, height / 2);
    // responsiveVoice.speak("Game Over, Press R to restart");
  }
}
