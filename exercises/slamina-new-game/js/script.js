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
       "watermelon"
];

let currentAnimal = "";
let currentAnswer = "";

function setup() {
  createCanvas(600, 600);

  if (annyang) {
    let commands = {
      "I think it is *ANIMAL": guessAnimal,
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

function draw() {
  background(255, 100, 0);

  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);
}

function reverseString(string) {
  let characters = string.split("");
  let reverseCharacter = characters.reverse();
  let result = reverseCharacter.join("");
  return result;
}

function mousePressed() {
  currentAnimal = random(ANIMALS);
  let reverseAnimal = reverseString(currentAnimal);

  responsiveVoice.speak(reverseAnimal);
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
}
