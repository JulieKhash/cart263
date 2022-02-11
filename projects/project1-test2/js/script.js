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

// json related;
let programScript;
let titleText;
let bloodBottleText1;
let bloodBottleText2;

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
let blueBirdVisible = false;
let blueBirdMutedVisible = true;

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

// statue -the last scene
let statueImg;
let statue;
let encounterVisible = false;
let redSparkImg;
let redSpark;
let redSParkMutedImg;
let redSparkActive = false;
let redSparkMuted = true;

let lightingImg;
let birdsImg;

// test
let circleImg;
let circleMoving = false;
let circleStill = true;

let lightcursorImg;

// sounds
let breathingSFX;
let birdChirpSFX;
let churchBellSFX;
let mysteriousSFX;

// let voiceBottleScene = false;

let state = `main`;
let started = false;
let mainScene = true;
let bottleScene = false;
let flowerBirdScene = false;
let eclipseNightScene = false;
let encounterScene = false;

function preload() {
  forestBgBWImg = loadImage("assets/images/forestbw.png");
  forestBgColImg = loadImage("assets/images/lake.png");
  bloodBottleImg = loadImage("assets/images/bloodbottlesm.png");
  eyeImg = loadImage("assets/images/eye.gif");
  eclipseImg = loadImage("assets/images/eclipse.gif");
  branchFrameImg = loadImage("assets/images/lunartree.png");
  blueBirdImg = loadImage("assets/images/redbird600.png");
  circleImg = loadImage("assets/images/circle2.png");
  bloomingFlowerImg = loadImage("assets/images/flowers.gif");
  bloodSplashImg = loadImage("assets/images/bloodSplash3.png");
  hummingBirdImg = loadImage("assets/images/hummingbird.png");
  blackFrameImg = loadImage("assets/images/blackframe.png");

  statueImg = loadImage("assets/images/facespirit2.png");
  redSparkImg = loadImage("assets/images/redspark1500.png");
  redSParkMutedImg = loadImage("assets/images/redsparkBW1.png");

  lightingImg = loadImage("assets/images/lighting.gif");
  birdsImg = loadImage("assets/images/8.gif");

  lightcursorImg = loadImage(`assets/images/redlight70.png`);

  breathingSFX = loadSound("assets/sounds/breathingeye.wav");
  birdChirpSFX = loadSound("assets/sounds/birdchirp.mp3");
  churchBellSFX = loadSound("assets/sounds/bellrings.mp3");
  mysteriousSFX = loadSound("assets/sounds/kasatki.mp3");

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");

  programScript = loadJSON("assets/data/VoiceScript.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);

  getTextandScript();

  // titleText = programScript.title;

  redSpark = new RedSpark(redSparkImg);
  statue = new Statue(
    statueImg,
    redSparkImg,
    redSParkMutedImg,
    lightingImg,
    birdsImg
  );
  hummingBird = new HummingBird(hummingBirdImg, hummingBirdImg, bloodSplashImg);
  bloomingFlower = new FlowerBloom(bloomingFlowerImg, blackFrameImg);
  blueBird = new BlueBird(blueBirdImg, blueBirdImg);
  eclipse = new Eclipse(branchFrameImg, circleImg, circleImg);
  eye = new Eye(eyeImg);
  bloodBottle = new BloodBottle(
    bloodBottleImg,
    bloodBottleImg,
    bloodBottleText1,
    bloodBottleText2
  );
  forestBW = new ForestBackground(forestBgBWImg);
  forestColor = new ForestBackground(forestBgColImg);
  titleMain = new Title(titleText);
  prologue = new Prologue();
}

function draw() {
  background(0);

  // titleText = programScript.title;

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
  }
  mouseCursor();
}

function getTextandScript() {
  titleText = programScript.title;
  bloodBottleText1 = programScript.scenes[0].scene1[0];
  bloodBottleText2 = programScript.scenes[0].scene1[1];
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
  if (eclipseNightScene) {
    eclipse.update();
    blueBird.update();
  }
}

function bloomingFlowerScene() {
  if (flowerBirdScene) {
    bloomingFlower.update();
    hummingBird.update();
  }
}

function statueScene() {
  forestColor.update();
  // redSpark.update();
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
  } else if (flowerBirdScene) {
    bloomingFlower.mousePressed();
    hummingBird.mousePressed();
  } else if (eclipseNightScene) {
    eclipse.mousePressed();
    blueBird.mousePressed();
  } else if (encounterScene) {
    statue.mousePressed();
  }
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    bottleScene = true;
    state = `wineBottle`;
  }
}
