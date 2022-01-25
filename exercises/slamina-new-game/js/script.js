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

let reverseFruit;

let state = "game";
// let gameActive = false;

let timeBar;

function setup() {
  createCanvas(700, 700);

  //  timeBar = new TimeBar(width/2, height/2);

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
  if (!displayUserAnswer) {
    showCurrentFruit(reverseFruit);
  } else {
    showAnswer();
  }

  // timeBar.update();
  // gameOver();
}

// takes in a string (reversed) and displays it
function showCurrentFruit(string) {
  fill(255, 255, 0);
  text(string, width / 2, height / 2);
}

// shows the actual name of the fruit: green: correct, red: incorrect:
function showAnswer() {
  if (isCorrect()) {
    fill(0, 255, 0);
    text(currentFruit, width / 2, height / 2);
    responsiveVoice.speak("Great!");
  } else {
    fill(255, 0, 0);
    text(currentAnswer, width / 2, height / 2);
    responsiveVoice.speak("Nope!");
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

// breaks down the word the makes it reveresed
function reverseString(string) {
  let characters = string.split("");
  let reverseCharacter = characters.reverse();
  let result = reverseCharacter.join("");
  return result;
}

// gets a fruit from an array, reverse it and speaks
function mousePressed() {
  displayUserAnswer = false;
  currentFruit = random(FRUITS);
  reverseFruit = reverseString(currentFruit);

  // responsiveVoice.speak(currentFruit);
}

function guessFruit(fruit) {
  currentAnswer = fruit.toLowerCase();
  // if (isCorrect()) {
  displayUserAnswer = true;
  console.log(currentAnswer);
  // }
}

// function gameOver(){
//   if (!timeBar.active){
//     fill(255, 0, 0);
//     text("gameover!", width/2, height/2);
//   }
// }
