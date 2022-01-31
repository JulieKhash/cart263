"use strict";

// Fonts
let titleFont;
let scriptFont;

// Titles/ texts
let titleMain;
let prologue;

// Library room
let libraryRoomBW;
let libraryRoomCol;

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
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  libraryRoomBW = new LibraryRoom(libraryBWImg); // Black and White
  libraryRoomCol = new LibraryRoom(libraryColorImg); // With color
  titleMain = new Title();
  prologue = new Prologue();
}

function draw() {
  background(0);

  // push();
  // image(libraryBWImg, width / 2, height / 2, 2600, 1500);
  // pop();

  libraryRoomBW.update();
  titleMain.update();
  prologue.update();

  if (mirrorFrame.active || flowerDrops.active) {
    speakingMirror();
  }
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

// function mousePressed() {
//   responsiveVoice.speak(instructions.phrase, "UK English Male", {
//     pitch: 0.03,
//     rate: 0.9,
//   });
// }

function mouseWheel(event) {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);

  // instructions.opacity += event.delta / 10;
  // instructions.opacity = constrain(instructions.opacity, 0, 200);

  //   title.opacity -= event.delta / 5;

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
  // push();
  // // if (libraryColor.opacity >= 255) {
  mirrorFrame.active = true;
  flowerDrops.active = true;
  mirrorFrame.y -= event.delta;
  flowerDrops.y -= event.delta;
  // }
  // pop();
  //*********************Press Enter --> state colored library

  console.log(event.delta);
}
