"use strict";

let someText = `What beauty by my side? A rose in bloom, a shrinking violet? Perhaps she has a mind to be my bride.
Perhaps my lesson has not ended yet! I don't want to die! But Death we are and have always been.
But I'm young!`;

// Fonts
let titleFont;
let scriptFont;

// Titles/ texts
let titleMain;
let prologue;

// Library room
let libraryRoomBW;
let libraryRoomCol;

// Fireplace
let firepaceImg;
let fireplace;

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

// libraries
let libraryBWImg;
let libraryColorImg;
let libraryColor = {
  opacity: 0,
};

// mirror
let mirrorSmallImg;
let mirrorSmall;
let speakingMirror;
let smallMirrorVisible = true; // visible
let speakingMirrorVisible = false; // not visible

let butterFlyImg;

// game states
let state = `fireplaceScene`;

function preload() {
  libraryBWImg = loadImage(`assets/images/libraryBW.png`);
  libraryColorImg = loadImage(`assets/images/libraryColored.png`);
  firepaceImg = loadImage(`assets/images/fireplace.jpg`);

  mirrorSmallImg = loadImage(`assets/images/smallmirror200.png`);
  flowerDropsImg = loadImage(`assets/images/flowerdrops.gif`);
  mirrorFrameImg = loadImage(`assets/images/mirrorframe.png`);

  // butterFlyImg = loadImage(`assets/images/butter.png`);

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  fireplace = new Fireplace(firepaceImg);
  speakingMirror = new SpeakingMirror(mirrorFrameImg, flowerDropsImg);
  mirrorSmall = new MirrorSmall(mirrorSmallImg);
  libraryRoomBW = new LibraryRoom(libraryBWImg); // Black and White image
  libraryRoomCol = new LibraryRoom(libraryColorImg); // With color
  titleMain = new Title();
  prologue = new Prologue();
}

function draw() {
  background(0);

  if (state === `main`) {
    libraryRoomBnW();
  } else if (state === `libraryRoomColor`) {
    libraryRoomColor();
  } else if (state === `fireplaceScene`) {
    fireplaceScene();
  }
}

function fireplaceScene() {
  fireplace.update();
}

function libraryRoomBnW() {
  libraryRoomBW.update();
  titleMain.update();
  prologue.update();
}

function libraryRoomColor() {
  libraryRoomCol.update();
  mirrorSmall.update();
  speakingMirror.update();
}

// function mousePressed() {
//   responsiveVoice.speak(someText, "UK English Male", {
//     pitch: 0.2,
//     rate: 1,
//   });
// }
function mousePressed() {
  // speakingMirror.mousePressed();
  mirrorSmall.mousePressed();
  libraryRoomCol.mousePressed();
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    state = `libraryRoomColor`;
  }
}

function mouseWheel(event) {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);

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
  // mirrorFrame.active = true;
  // flowerDrops.active = true;
  // mirrorFrame.y -= event.delta;
  // flowerDrops.y -= event.delta;

  // }
  // pop();
  //*********************Press Enter --> state colored library

  console.log(event.delta);
}
