/**
Sausage-Dog + Spider and The Butterflies
Julie Khashimova

A simple interactive simulation that has a spider conceiled amongst the butterflies.
A user must find and click on a spider to create a chaos!
*/

"use strict";

const BUTTERFLY_IMG = 13;   // the number of butterfy images
const NUM_BUTTERFLY = 120;  // overall number of butterflies

let butterflyImages = []; // an array to store the butterfy images
let butterflies = []; // an empty array to store butterfly instances

let spiderImg;
let spider;
let branchImg;

let errorSFX; // a sound for the wrong click
let insectSFX; // a sound for the spider

let spiderDetected = false; // a defautl false because it's not yet found

// includes all the texts in our program
let message = {
  startText: "Find a Spider",
  endText: "Chaos!",
  visible: true,
  delay: 2500, // time when the text disappears
};

let state = "simulation"; // starts with the simulation page

// import all the media into the program
function preload() {
  // for loop to add images into the images array
  for (let i = 0; i < BUTTERFLY_IMG; i++) {
    let butterflyImg = loadImage(`assets/images/butterfly${i}.png`);
    butterflyImages.push(butterflyImg);
  }
  spiderImg = loadImage(`assets/images/spider0.png`);
  branchImg = loadImage(`assets/images/branch.png`)
  // sound effects
  errorSFX = loadSound(`assets/sounds/invalid-sound.mp3`);
  insectSFX = loadSound(`assets/sounds/insect-walk-sound.mp3`);
}

// initial setup, creates object instances: butterflies and a spider
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_BUTTERFLY; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let butterflyImg = random(butterflyImages);
    let butterfly = new Insect(x, y, butterflyImg);
    butterflies.push(butterfly);
  }
  let x = random(0, width);
  let y = random(0, height);
  spider = new Spider(x, y, spiderImg);
}

// sets up the background colour and the game state
function draw() {
  background(255, 250, 200);

  // game state starts off with the only simulation page
  if (state === "simulation") {
    simulation();
    displayHideText();
    startText();
    endText();
  }
  //image(branchImg, width/2, height/2);
}

// includes butterfly and spider behavours
function simulation() {
  makeButterflies();
  spider.update();
}

// makes butterflies and updates their behaviour
function makeButterflies() {
  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].update();
  }
}

// makes the text in the beggining disappear
function displayHideText() {
  setTimeout(hideText, message.delay);
}

// inverts the visibiity value of the text
function hideText() {
  message.visible = false;
}

// make the text appear in the beggining
function startText() {
  if (message.visible) {
    push();
    rectMode(CENTER);
    fill(200, 200, 0, 130);
    rect(width / 2, height / 2, 200, 80);
    textAlign(CENTER, CENTER);
    textSize(26);
    fill(0);
    text(message.startText, width / 2, height / 2);
    pop();
  }
}

// show the text if the the spider is found
function endText() {
  if (spiderDetected) {
    push();
    rectMode(CENTER);
    fill(200, 200, 0, 130);
    rect(width / 2, height / 2, 200, 80);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0, 200);
    text(message.endText, width / 2, height / 2);
    pop();
  }
}

// mouse pressed makes a sound, sets up spiderDetected to true if clicked on a spider
function mousePressed() {
  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].mousePressed();
  }
  spider.mousePressed();
}
