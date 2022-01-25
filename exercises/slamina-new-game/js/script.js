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
let phrase = "Maybe it is..."
let showPhrase = true;

let state = "intro"

// let x = 0;
let timeBar;



function setup() {
  createCanvas(700, 700);

  timeBar = new TimeBar(width/2, height/2);


  if (annyang) {
    let commands = {
      "I think it is *fruit": guessFruit,
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

  timeBar.update();



  if (currentAnswer === currentFruit) {

    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);


  // animation();
  showMainPhrase();
}

function reverseString(string) {
  let characters = string.split("");
  let reverseCharacter = characters.reverse();
  let result = reverseCharacter.join("");
  return result;
}

function mousePressed() {
  currentFruit = random(FRUITS);
  let reverseFruit = reverseString(currentFruit);

  responsiveVoice.speak(reverseFruit);
}

function guessFruit(fruit) {
  currentAnswer = fruit.toLowerCase();
  console.log(currentAnswer);
}


// function animation() {
//   push();
//   x += 0.01;
//   stroke(255);
//   translate(width / 2, height / 2);
//   rotate(x);
//   noFill();
//   rectMode(CENTER);
//   rect(0, 0, 300, 300);
//   pop();
// }
function gameOver(){
  if timeBar.timeLeft === 5000{
    fill(255, 0, 0)
    text("gameover!", width/2, height/2)
  }
}


function showMainPhrase(){
  if (showPhrase){
    fill(255);
    text(phrase, width/2, height/2);
  }
}
