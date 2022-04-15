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
let fireplaceImg;
let fireplace;
let fireplaceFireImg;
let wineGlassImg;
let wineGlass;

let waterDropSFX;
let waterdropSound = false;

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
let state = `main`;
let mainScene = true;
let libraryColorScene = false;

function preload() {
  libraryBWImg = loadImage(`assets/images/libraryBW.png`);
  libraryColorImg = loadImage(`assets/images/libraryColored.png`);
  fireplaceImg = loadImage(`assets/images/fireplace3.jpg`);
  fireplaceFireImg = loadImage(`assets/images/fire.gif`);
  wineGlassImg = loadImage(`assets/images/butter.png`);

  mirrorSmallImg = loadImage(`assets/images/smallmirror200.png`);
  flowerDropsImg = loadImage(`assets/images/flowerdrops.gif`);
  mirrorFrameImg = loadImage(`assets/images/mirrorframe.png`);
  // butterFlyImg = loadImage(`assets/images/butter.png`);

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");

  waterDropSFX = loadSound(`assets/sounds/waterdrop2.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  wineGlass = new WineGlass(wineGlassImg);
  fireplace = new Fireplace(fireplaceImg, fireplaceFireImg);
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
  wineGlass.update();
}

function libraryRoomBnW() {
  if (mainScene) {
    libraryRoomBW.update();
    titleMain.update();
    prologue.update();
  }
}

// display library when its true
function libraryRoomColor() {
  if (libraryColorScene) {
    libraryRoomCol.update();
    mirrorSmall.update();
    speakingMirror.update();
  }
}

// function mousePressed() {
//   responsiveVoice.speak(someText, "UK English Male", {
//     pitch: 0.2,
//     rate: 1,
//   });
// }
function mousePressed() {
  //  libraryRoomCol.mousePressed();
  speakingMirror.mousePressed();
  mirrorSmall.mousePressed();
  // wineGlass.mousePressed();
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    libraryColorScene = true;
    state = `libraryRoomColor`;
  } else if (keyCode === 13 && state === `libraryRoomColor`) {
    libraryColorScene = truefalse;
    state = `fireplaceScene`;
  }
}

function mouseWheel(event) {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);

  console.log(event.delta);
}
