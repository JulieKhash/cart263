"use strict";

let titleFont;

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
  opacity: 1,
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

  image(libraryBWImg, width / 2, height / 2, 2600, 1500);

  push();
  tint(255, libraryColor.opacity);
  image(libraryColorImg, width / 2, height / 2, 2600, 1500);
  pop();

  if (mirrorFrame.active || flowerDrops.active) {
    speakingMirror();
  }
}

function speakingMirror() {
  let x = width / 2;
  let y = height;

  push();
  flowerDrops.x = x;
  // flowerDrops.y = y + 50;
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
  // mirrorFrame.y = y;
  tint(255, mirrorFrame.opacity);
  image(mirrorFrameImg, mirrorFrame.x, mirrorFrame.y);
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

  // scrolls upwards after library has the color
  if (libraryColor.opacity >= 255) {
    mirrorFrame.active = true;
    flowerDrops.active = true;
    mirrorFrame.y -= event.delta;
    flowerDrops.y -= event.delta;
  }
  // mirror scroll up
  // if (libraryColor.opacity === 255) {

  // }
  console.log(event.delta);
}
