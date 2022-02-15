"use strict";

// responsive voice parameters
const VOICE_NAME = `UK English Male`;
const VOICE_PARAMS = {
  pitch: 0.3,
  rate: 0.8,
  volume: 0.9,
};
// vampiric voice
let vampVoice;

// Fonts
let titleFont;
let scriptFont;

// Titles/ texts
let titleMain;
let prologue;

// json related, voice script, texts
let programScript;
let titleText;
let bloodBottleText1;
let bloodBottleText2;
let flowerBloomText1;
let flowerBloomText2;
let eclipseChurchText1;
let eclipseChurchText2;
let encounterText1;
let encounterText2;
let encounterText3;

// texbox prompt related
const userPrompt = `Will you come or no?`;
const userResponse = `yes`;
let currentResponse = ``;

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
let eclipse;
let branchFrameImg;
let branchFrame;
let redBirdImg;
let redBird;
let redBirdVisible = false;
let redBirdMutedVisible = true;

// eye
let eyeImg;
let eye;

// blooming flower
let bloomingFlowerImg;
let bloomingFlower;
let bloodSplashImg;
let dragonFlyImg;
let dragonFly;
let dragonflyMovingVisible = false;
let dragonflyMutedVisible = true;
let blackFrameImg;
let blackFrame;

// encounter scene
let encounterImg;
let encounter;
let encounterVisible = false;
let encounterFade = 0; // encounter visibility
let redSparkImg;
let redSpark;
let redSParkMutedImg;
let redSparkActive = false;
let redSparkMuted = true;

// last scene
let heartbeatImg;
let heartbeat;
let inkFrameImg;

// test
let circleImg;
let circleMoving = false;
let circleStill = true;

// mosue cursor
let lightcursorImg;

// sounds
let breathingSFX;
let birdChirpSFX;
let churchBellSFX;
let mysteriousSFX;
let heartbeatSFX;

// program states
let state = `flowerDragonFly`;
// let started = false;
let mainScene = true;
let bottleScene = false;
let flowerDragonFlyScene = true;
let eclipseNightScene = false;
let encounterScene = false;
let heartbeatScene = false;

// loads images, sounds, fotns and data files
function preload() {
  // visuals
  forestBgBWImg = loadImage("assets/images/forestbw.png");
  forestBgColImg = loadImage("assets/images/lake.png");
  bloodBottleImg = loadImage("assets/images/bloodbottlesm.png");
  eyeImg = loadImage("assets/images/eye.gif");
  branchFrameImg = loadImage("assets/images/lunartree.png");
  redBirdImg = loadImage("assets/images/redbird600.png");
  circleImg = loadImage("assets/images/circle2.png");
  bloomingFlowerImg = loadImage("assets/images/flowers.gif");
  bloodSplashImg = loadImage("assets/images/bloodSplash3.png");
  dragonFlyImg = loadImage("assets/images/dragon400.png");
  blackFrameImg = loadImage("assets/images/blackframe.png");
  encounterImg = loadImage("assets/images/spirit10.png");
  redSparkImg = loadImage("assets/images/redspark1500.png");
  redSParkMutedImg = loadImage("assets/images/redsparkBW1.png");
  heartbeatImg = loadImage("assets/images/lighting.gif");
  inkFrameImg = loadImage("assets/images/inkframe.png");
  lightcursorImg = loadImage(`assets/images/redlight70.png`);
  //sounds
  breathingSFX = loadSound("assets/sounds/breathingeye.wav");
  birdChirpSFX = loadSound("assets/sounds/birdchirp.mp3");
  churchBellSFX = loadSound("assets/sounds/bellrings.mp3");
  mysteriousSFX = loadSound("assets/sounds/kasatki.mp3");
  heartbeatSFX = loadSound("assets/sounds/heartbeat.mp3");
  //fonts
  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
  //json
  programScript = loadJSON("assets/data/VoiceScript.json");
}

// general set up
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);

  getTextandScript();
  setUPObjects();
}

// prepare program objects
function setUPObjects() {
  vampVoice = new Voice();

  heartbeat = new Lightning(heartbeatImg, inkFrameImg, encounterText3);
  redSpark = new RedSpark(redSparkImg);
  encounter = new Encounter(
    encounterImg,
    redSparkImg,
    redSParkMutedImg,
    encounterText1,
    encounterText2
  );
  dragonFly = new DragonFly(
    dragonFlyImg,
    dragonFlyImg,
    bloodSplashImg,
    flowerBloomText1,
    flowerBloomText2
  );
  bloomingFlower = new FlowerBloom(bloomingFlowerImg, blackFrameImg);
  redBird = new RedBird(redBirdImg, redBirdImg);
  eclipse = new Eclipse(
    branchFrameImg,
    circleImg,
    circleImg,
    eclipseChurchText1,
    eclipseChurchText2
  );
  eye = new Eye(eyeImg);
  bloodBottle = new BloodBottle(
    bloodBottleImg,
    bloodBottleImg,
    bloodBottleText1
  );
  forestBW = new ForestBackground(forestBgBWImg);
  forestColor = new ForestBackground(forestBgColImg);
  titleMain = new Title(titleText);
  prologue = new Prologue();
}

function draw() {
  background(0);

  if (state === `main`) {
    forestBWScene();
  } else if (state === `drinkingGlass`) {
    bloodBottleScene();
  } else if (state === `flowerDragonFly`) {
    bloomingFlowerScene();
  } else if (state === `lunarEclipse`) {
    eclipseScene();
  } else if (state === `encounterSpirit`) {
    encounterSpiritScene();
  } else if (state === `lightningHeartbeat`) {
    lightningHeartbeat();
  }
  mouseCursor();
}

function getTextandScript() {
  titleText = programScript.title;
  bloodBottleText1 = programScript.scenes[0].scene1[0];
  bloodBottleText2 = programScript.scenes[0].scene1[1];
  flowerBloomText1 = programScript.scenes[0].scene2[0];
  flowerBloomText2 = programScript.scenes[0].scene2[1];
  eclipseChurchText1 = programScript.scenes[0].scene3[0];
  eclipseChurchText2 = programScript.scenes[0].scene3[1];
  encounterText1 = programScript.scenes[0].scene4[0];
  encounterText2 = programScript.scenes[0].scene4[1];
  encounterText3 = programScript.scenes[0].scene4[2];
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
    redBird.update();
  }
}

function bloomingFlowerScene() {
  if (flowerDragonFlyScene) {
    bloomingFlower.update();
    dragonFly.update();
  }
}

function encounterSpiritScene() {
  if (encounterScene) {
    forestColor.update();
    encounter.update();
  }
}

function lightningHeartbeat() {
  if (heartbeatScene) {
    heartbeat.update();
  }
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
  } else if (flowerDragonFlyScene) {
    bloomingFlower.mousePressed();
    dragonFly.mousePressed();
  } else if (eclipseNightScene) {
    eclipse.mousePressed();
    redBird.mousePressed();
  } else if (encounterScene) {
    encounter.mousePressed();
  } else if (heartbeatScene) {
    heartbeat.mousePressed();
  }
}

function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    bottleScene = true;
    state = `drinkingGlass`;
  }
}
