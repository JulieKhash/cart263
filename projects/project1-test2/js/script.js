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

// forest background
let forestBgBWImg;
let forestBgColImg;
let forestBW;
let forestColor;

// bottle
let bloodBottleImg;
let bloodBottle;
let bottleDrunken = false;
let imageBottleVisible = false;
let imageMutedBottleVisible = true;

// eclipse
let eclipseImg;
let eclipse;
let branchFrameImg;
let branchFrame;
let blueBirdImg;
let blueBird;

// eye
let eyeImg;
let eye;

// blooming flower
let bloomingFlowerImg;
let bloomingFlower;
let bloodSplashImg;
let hummingBirdImg;
let hummingBird;
let humBirdMovingVisible = false;
let humBirdMutedVisible = true;
let blackFrameImg;
let blackFrame;

// statue
let statueImg;
let statue;
let brokenGlassImg;

// test
let circleImg;

let lightcursorImg;

// sounds
let breathingSFX;
let birdChirpSFX;

// let voiceBottleScene = false;

let state = `lunarEclipse`;
let started = false;
let mainScene = true;
let bottleScene = false;
let flowerBirdScene = false;

function preload() {
  forestBgBWImg = loadImage("assets/images/forestbw.png");
  forestBgColImg = loadImage("assets/images/forestcol.png");
  bloodBottleImg = loadImage("assets/images/bloodbottlesm.png");
  eyeImg = loadImage("assets/images/eye.gif");
  eclipseImg = loadImage("assets/images/eclipse.gif");
  branchFrameImg = loadImage("assets/images/lunartree.png");
  blueBirdImg = loadImage("assets/images/bluebird600.png");
  circleImg = loadImage("assets/images/circle2.png");
  bloomingFlowerImg = loadImage("assets/images/flowers.gif");
  bloodSplashImg = loadImage("assets/images/bloodSplash3.png");
  hummingBirdImg = loadImage("assets/images/hummingbird.png");
  blackFrameImg = loadImage("assets/images/blackframe.png");

  statueImg = loadImage("assets/images/statueboy3.png");
  brokenGlassImg = loadImage("assets/images/brokenglass.png");

  lightcursorImg = loadImage(`assets/images/light70.png`);

  breathingSFX = loadSound("assets/sounds/breathingeye.wav");
  birdChirpSFX = loadSound("assets/sounds/birdchirp.mp3");

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noCursor();
  imageMode(CENTER);

  statue = new Statue(statueImg, brokenGlassImg);
  hummingBird = new HummingBird(hummingBirdImg, hummingBirdImg, bloodSplashImg);
  bloomingFlower = new BloomingFLower(bloomingFlowerImg, blackFrameImg);
  blueBird = new BlueBird(blueBirdImg);
  eclipse = new Eclipse(branchFrameImg, eclipseImg, circleImg);
  eye = new Eye(eyeImg);
  bloodBottle = new BloodBottle(bloodBottleImg, bloodBottleImg);
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
  } else if (state === `statueBoy`) {
    statueScene();

    mouseCursor();
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
  blueBird.update();
}

function bloomingFlowerScene() {
  if (flowerBirdScene) {
    bloomingFlower.update();
    hummingBird.update();
  }
}

function statueScene() {
  forestColor.update();
  statue.update();
}

function mouseCursor() {
  image(lightcursorImg, mouseX, mouseY);
}

function mouseWheel() {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);
}

function mousePressed() {
  if (bottleScene) {
    bloodBottle.mousePressed();
  }
  if (flowerBirdScene) {
    bloomingFlower.mousePressed();
    hummingBird.mousePressed();
  }
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    bottleScene = true;
    state = `wineBottle`;
  }
}
