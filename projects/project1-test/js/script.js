"use strict";

let libraryBWImg;
let libraryColorImg;
let libraryColor = {
  opacity: 1,
};

function preload() {
  libraryBWImg = loadImage(`assets/images/libraryBW.png`);
  libraryColorImg = loadImage(`assets/images/libraryColored.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0);

  image(libraryBWImg, width / 2, height / 2, 2600, 1500);

  push();
  tint(255, libraryColor.opacity);
  image(libraryColorImg, width / 2, height / 2, 2600, 1500);
  pop();
}
function mouseWheel(event) {
  if (event.delta > 0) {
    libraryColor.opacity += 100;
    libraryColor.opacity = constrain(libraryColor.opacity, 1, 255);
  } else {
    libraryColor.opacity -= 100;
    libraryColor.opacity = constrain(libraryColor.opacity, 1, 0);
  }
  console.log(event.delta);
}
