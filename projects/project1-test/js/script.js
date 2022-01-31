"use strict";

let titleFont;
let scriptFont;

let titleMain;
let prologue;

let title = {
  phrase: `The Lestat Vampire`,
  phrase2: `scroll down`,
  opacity: 255,
};

let instructions = {
  phrase: `I was waiting for you in that alley. Watching you watching me
  What're you doing in my house?
  What if I could give it back to you?
  Pluck out the pain...and give you another life?
 ...One you could never imagine...

            Enter`,
  x: undefined,
  y: undefined,
  size: 30,
  opacity: 0,
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
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  titleMain = new Title();
  prologue = new Prologue();
}

function draw() {
  background(0);

  push();
  image(libraryBWImg, width / 2, height / 2, 2600, 1500);
  pop();

  titleMain.display();
  prologue.update();

  // titleText();
  // instructionText();

  if (mirrorFrame.active || flowerDrops.active) {
    speakingMirror();
  }
}

function instructionText() {
  instructions.x = width / 2;
  instructions.y = height / 2;

  //rect background
  push();
  noStroke();
  fill(0, instructions.opacity);
  rectMode(CENTER);
  rect(instructions.x, instructions.y, 1000, 500);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(25);
  textFont(scriptFont);
  textLeading(50); //line spacing
  fill(random(170, 210), 0, 0, instructions.opacity);
  text(instructions.phrase, instructions.x, instructions.y);
  pop();
}

// function titleText() {
//   push();
//   textAlign(CENTER, CENTER);
//   textSize(15);
//   textFont(`Georgia`);
//   fill(random(170, 210), 0, 10, title.opacity);
//   text(title.phrase2, width / 2, height / 2 + 100);
//   pop();
//
//   push();
//   textAlign(CENTER, CENTER);
//   textSize(50);
//   textFont(titleFont);
//   fill(random(170, 210), 0, 10, title.opacity);
//   text(title.phrase, width / 2, height / 2);
//   pop();
// }

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

function mousePressed() {
  responsiveVoice.speak(instructions.phrase, "UK English Male", {
    pitch: 0.03,
    rate: 0.9,
  });
}

function mouseWheel(event) {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);

  instructions.opacity += event.delta / 10;
  instructions.opacity = constrain(instructions.opacity, 0, 200);

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
