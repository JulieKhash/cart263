"use strict";

let userSpeechArray = [
  `What were you going to do`,
  `Who are you`,
  `I've come to answer your prayers`,
  `Life has no meaning anymore does it`,
  `How is it going`,
];

// current speech they are supposed to say
let currentSpeech = ``;
let currentSpeechLine = 1;

// text they are supposed to read
let displayText = ``;

function setup() {
  createCanvas(800, 800);

  if (annyang) {
    let command = {
      "*userSpeech": handleUserSpeech,
    };
    annyang.addCommands(command);
    annyang.start();

    // a phrase a user must say
    userPhrase();
  }
}

function draw() {
  background(0);

  textAlign(CENTER);
  textSize(40);
  fill(255, 0, 0);

  //text(currentSpeech, width / 2, height / 2);
  text(displayText, width / 2, height / 2);
}

// function showNextString() {
//   currentSpeechLine++;
// }

function handleUserSpeech(userSpeech) {
  if (userSpeech.toLowerCase() === currentSpeech.toLowerCase()) {
    // displayText = `Yes ${currentSpeech}`; // doesn't respond to the array of strings with punctuation
    displayText = currentSpeechLine++; // shows number
  } else {
    displayText = `again`;
  }
  console.log(userSpeech); // shows anything that user says on console
}

function userPhrase() {
  currentSpeech = userSpeechArray[currentSpeechLine];
  displayText = `${currentSpeech}?`;

  console.log(currentSpeech);
}
