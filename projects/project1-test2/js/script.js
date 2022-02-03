"use strict";

// responsive voice parameters
const VOICE_NAME = `UK English Male`;
const VOICE_PARAMS = {
  pitch: 0.3,
  rate: 0.8,
};

// Fonts
let titleFont;
let scriptFont;

// Titles/ texts
let titleMain;
let prologue;

// sounds
let breathingSFX;

// forest background
let forestBgBWImg;
let forestBgColImg;
let forestBW;
let forestColor;

// bottle
let bloodBottleImg;
let bloodBottle;
let bottleDrunken = false;

// eclipse
let eclipseImg;
let eclipse;
let branchFrameImg;
let branchFrame;

// eye
let eyeImg;
let eye;

// blooming flower
let bloomingFlowerImg;
let bloomingFlower;
let bloodSplashImg;
let hummingBirdImg;
let hummingBird;

// test
let circleImg;

let state = `flowerBird`;
let started = false;
let mainScene = true;
let bottleScene = false;

function preload() {
  forestBgBWImg = loadImage("assets/images/forestbw.png");
  forestBgColImg = loadImage("assets/images/forestcol.png");
  bloodBottleImg = loadImage("assets/images/bloodbottlesm.png");
  eyeImg = loadImage("assets/images/eye.gif");
  eclipseImg = loadImage("assets/images/eclipse.gif");
  branchFrameImg = loadImage("assets/images/lunartree.png");
  // circleImg = loadImage("assets/images/circle.png");
  bloomingFlowerImg = loadImage("assets/images/flowers.gif");
  bloodSplashImg = loadImage("assets/images/bloodSplash2.png");
  hummingBirdImg = loadImage("assets/images/hummingbird.png");

  breathingSFX = loadSound("assets/sounds/breathingeye.wav");

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  hummingBird = new HummingBird(hummingBirdImg, bloodSplashImg);
  bloomingFlower = new BloomingFLower(bloomingFlowerImg);
  eclipse = new Eclipse(branchFrameImg, eclipseImg);
  eye = new Eye(eyeImg);
  bloodBottle = new BloodBottle(bloodBottleImg);
  forestBW = new ForestBackground(forestBgBWImg);
  forestColor = new ForestBackground(forestBgColImg);
  titleMain = new Title();
  prologue = new Prologue();
}

function draw() {
  background(0);

  if (state === `main`) {
    forestBWScene();
  } else if (state === `wineBottle`) {
    bloodBottleScene();
  } else if (state === `lunarEclipse`) {
    eclipseScene();
  } else if (state === `flowerBird`) {
    bloomingFlowerScene();
  }
}

function forestBWScene() {
  if (mainScene) {
    forestBW.update();
    titleMain.update();
    prologue.update();
  }
}

function bloodBottleScene() {
  if (bottleScene) {
    forestBW.update();
    bloodBottle.update();
    eye.update();
  }
}

function eclipseScene() {
  eclipse.update();
}

function bloomingFlowerScene() {
  forestColor.update();
  bloomingFlower.update();
  hummingBird.update();
}

function mouseWheel() {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);
}

function mousePressed() {
  if (bottleScene) {
    bloodBottle.mousePressed();
  }
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    bottleScene = true;
    state = `wineBottle`;
    //  bloodBottle.repeatVoice();
  }
}
