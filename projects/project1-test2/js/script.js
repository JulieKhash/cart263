/**
Project 1 - The Vampire Lestat
Julie Khashimova

You are between life and death
Experience yourself as Lestat de Lioncourt and delve into a philosophical journey about
what it means to be and become a vampire. Happy initiations!
*/

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
let state = `main`;
// let started = false;
let mainScene = true;
let bottleScene = false;
let flowerDragonFlyScene = false;
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
  // sounds
  breathingSFX = loadSound("assets/sounds/breathingeye.wav");
  birdChirpSFX = loadSound("assets/sounds/birdchirp.mp3");
  churchBellSFX = loadSound("assets/sounds/bellrings.mp3");
  mysteriousSFX = loadSound("assets/sounds/kasatki.mp3");
  heartbeatSFX = loadSound("assets/sounds/heartbeat.mp3");
  // fonts
  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
  // json
  programScript = loadJSON("assets/data/VoiceScript.json");
}

// general set up
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);

  getScript();
  setUPObjects();
}

// prepare program objects
function setUPObjects() {
  vampVoice = new Voice();

  heartbeat = new Lightning(heartbeatImg, inkFrameImg, encounterText3);
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
  forestBW = new Background(forestBgBWImg);
  forestColor = new Background(forestBgColImg);
  titleMain = new Title(titleText);
  prologue = new Prologue();
}

// calls the states of the program
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

// prepares the text from json, applies to the specific variable
function getScript() {
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

// shows the main scene
function forestBWScene() {
  if (mainScene) {
    forestBW.update();
    titleMain.update();
    prologue.update();
  }
}

// shows the drinking bottle scene
function bloodBottleScene() {
  if (bottleScene) {
    forestBW.update();
    bloodBottle.update();
    eye.update();
  }
}

// shows the night scene with the rotating stained glass
function eclipseScene() {
  if (eclipseNightScene) {
    eclipse.update();
    redBird.update();
  }
}

// shows the blooming flowers scene with the dragonfly
function bloomingFlowerScene() {
  if (flowerDragonFlyScene) {
    bloomingFlower.update();
    dragonFly.update();
  }
}

// shows the sprit encounter scene
function encounterSpiritScene() {
  if (encounterScene) {
    forestColor.update();
    encounter.update();
  }
}

// shows the "final" heartbeat/lightning scene
function lightningHeartbeat() {
  if (heartbeatScene) {
    heartbeat.update();
  }
}

// user's cursor shows the red spark
function mouseCursor() {
  image(lightcursorImg, mouseX, mouseY);
}

// mouse scroll that controls the display of title/prologue texts
function mouseWheel() {
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);
}

// mouse click enables users to trigger sounds, speaking voice and state changes
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

// press ENTER to move to the next scene -> drinking glass
function keyPressed() {
  if (keyCode === 13 && state === `main`) {
    mainScene = false;
    bottleScene = true;
    state = `drinkingGlass`;
  }
}
