"use strict";

let titleFont;

let instructions = {
  phrase: `I was waiting for you in that alley. Watching you watching me`,
  x: undefined,
  y: undefined,
  size: 30,
  active: false,
};

let mirrorFrameImg;
let mirrorFrame = {
  x: undefined,
  y: 1500,
  opacity: 200,
  active: false,
};

let flowerDropsImg;
let flowerDrops = {
  x: undefined,
  y: 1550,
  w: 400,
  h: 500,
  active: false,
};

let libraryBWImg;
let libraryColorImg;
let libraryColor = {
  opacity: 0,
};

function preload() {
  libraryBWImg = loadImage(`assets/images/libraryBW.png`);
  libraryColorImg = loadImage(`assets/images/libraryColored.png`);

  flowerDropsImg = loadImage(`assets/images/flowerdrops.gif`);
  mirrorFrameImg = loadImage(`assets/images/mirrorframe.png`);

  titleFont = loadFont("assets/fonts/BOERT.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0);

  push();
  image(libraryBWImg, width / 2, height / 2, 2600, 1500);
  pop();

  // push();
  // tint(255, libraryColor.opacity);
  // image(libraryColorImg, width / 2, height / 2, 2600, 1500);
  // pop();

  titleText();
  instructionText();

  if (mirrorFrame.active || flowerDrops.active) {
    speakingMirror();
  }
}

function instructionText() {
  instructions.x = width / 2;
  instructions.y = 1000;

  //rect background
  push();
  fill(0, 200);
  rectMode(CENTER);
  rect(instructions.x, instructions.y, 800, 300);

  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(`Georgia`);
  fill(random(170, 210), 0, 10);
  text(instructions.phrase, instructions.x, instructions.y);
  pop();
}

function titleText() {
  push();
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(titleFont);
  fill(random(170, 210), 0, 10);
  text("The Lestat Vampire", width / 2, height / 2);
  pop();
}

function speakingMirror() {
  let x = width / 2;
  let y = height;

  push();
  flowerDrops.x = x;
  image(
    flowerDropsImg,
    flowerDrops.x,
    flowerDrops.y,
    flowerDrops.w,
    flowerDrops.h
  );
  pop();

  push();
  mirrorFrame.x = x;
  tint(255, mirrorFrame.opacity);
  image(mirrorFrameImg, mirrorFrame.x, mirrorFrame.y);
  pop();
}

function mouseWheel(event) {
  //   push();
  //   if (event.delta > 0) {
  //     libraryColor.opacity += 100;
  //     libraryColor.opacity = constrain(libraryColor.opacity, 1, 255);
  //   } else {
  //     libraryColor.opacity -= 100;
  //     libraryColor.opacity = constrain(libraryColor.opacity, 1, 0);
  //   }
  //   pop();

  // scrolls upwards after library has the color
  push();
  // if (libraryColor.opacity >= 255) {
  mirrorFrame.active = true;
  flowerDrops.active = true;
  mirrorFrame.y -= event.delta;
  flowerDrops.y -= event.delta;
  // }
  pop();

  console.log(event.delta);
}
