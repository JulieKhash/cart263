"use strict";

// an array of fruit names
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

let currentFruit = ""; // an empty string for the fruit name in array
let currentAnswer = ""; // an empty string for the answer given by the user

let displayUserAnswer = false; // user answer is non-active
let displayGuessWord = true; //  guess (reversed) word is active

let instruction = "Read the Fruit name in Reverse. Click to Start";

let reverseFruit;

let state = "intro";

let timeBar;

function setup() {
  createCanvas(700, 700);

  timeBar = new TimeBar(width / 2, height / 2); // creates a circlelike timer

  // creates a voice recognition, checks if it's available on a given browser
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

// shows the actual name of the fruit: green: correct, red: incorrect
function showAnswer() {
  if (isCorrect()) {
    background(0, 200, 0);
    text(currentFruit, width / 2, height / 2);
    // responsiveVoice.speak("Great!"); //!!spoken sound reflects back to text
  } else {
    background(200, 0, 0);
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

// breaks down the word and makes it reversed
function reverseString(string) {
  let characters = string.split("");
  let reverseCharacter = characters.reverse();
  let result = reverseCharacter.join("");
  return result;
}

// starts a game after time is out and mouse is clicked, displays a guessing word
function mousePressed() {
  if ((state = "intro" && !timeBar.active)) {
    state = "game";
  }

  displayUserAnswer = false;
  currentFruit = random(FRUITS);
  reverseFruit = reverseString(currentFruit);
}

// takes in the answer given by the user and assigns to currentAnswer
function guessFruit(fruit) {
  currentAnswer = fruit.toLowerCase();
  displayUserAnswer = true;
  console.log(currentAnswer);
}

// game states
function gameStates() {
  if (state === "intro") {
    intro();
  } else if (state === "game") {
    game();
  }
}

// start screen, shows a text and adds a speaking voice
function intro() {
  background(20, 0, 0);
  fill(random(1, 255));
  text("Allow speech", width / 2, height / 2);
  responsiveVoice.speak(instruction);
}

// the game scene, shows reversed word and the user's answer
function game() {
  if (!displayUserAnswer) {
    showCurrentFruit(reverseFruit);
  } else {
    showAnswer();
  }
}
