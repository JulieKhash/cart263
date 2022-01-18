/**
Sausage-Dog + new game
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const BUTTERFLY_IMG = 13;
const NUM_BUTTERFLY = 40;

let butterflyImages = [];
let butterflies = []; // an empty array to store butterfly instances

let spiderImg;
let spider;

let errorSFX;
let insectSFX;

let spiderDetected = false;

let state = "simulation";
/**
Description of preload
*/
function preload() {
  for (let i = 0; i < BUTTERFLY_IMG; i++) {
    let butterflyImg = loadImage(`assets/images/butterfly${i}.png`);
    butterflyImages.push(butterflyImg);
  }
  spiderImg = loadImage(`assets/images/spider0.png`);

  errorSFX = loadSound(`assets/sounds/invalid-sound.mp3`);
  insectSFX = loadSound(`assets/sounds/insect-walk-sound.mp3`);
}

/**
Description of setup
*/
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

/**
Description of draw()
*/
function draw() {
  background(255, 250, 200);

  if (state === "instruction") {
    startScreen();
  } else if (state === "simulation") {
    simulation();
    //endText()
  }
}

function simulation() {
  makeButterflies();
  spider.update();
}

function makeButterflies() {
  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].update();
    // if (spiderDetected) {
    //   butterflies[i].moveRapid();
    // }
  }
}

function startScreen() {
  push();
  rectMode(CENTER);
  fill(200, 210, 0, 150);
  rect(width / 2, height / 2, 200, 80);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text("Find a Spider", width / 2, height / 2);
  pop();
}

//show the text if the the spider is found
function endText() {
  if (spiderDetected) {
    push();
    rectMode(CENTER);
    fill(200, 200, 0, 100);
    rect(width / 2, height / 2, 200, 80);
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(0, 200);
    text("Chaos!", width / 2, height / 2);
    pop();
  }
}

function mousePressed() {
  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].mousePressed();
  }

  spider.mousePressed();
}
