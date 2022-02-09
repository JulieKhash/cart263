/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bgColor = 0;

let imageState;
let lightImg;
let handImg;
let handImages = []; // to store an hand images
let handParameters = {
  w: 200,
  h: 160,
};

// varibles for ml5 model hand properties
let hand;
let middleFinger;
let middleFingerTip;

let theramin;
let amp;
let delay;
let playing = true;

let state = `loading`; // current state of the program while loading
let video; // user's webcam
let modelName = `Handpose`; //the name of our model
let handpose; // handpose object
let predictions = []; // the current set of predictions made by handpose

/**
Description of preload
*/
function preload() {
  for (let i = 0; i < 3; i++) {
    handImg = loadImage(`assets/images/hand${i}.png`);
    lightImg = loadImage(`assets/images/light.png`);
    handImages.push(handImg);
    handImages.push(lightImg);
  }
}

function setup() {
  createCanvas(800, 600);

  // start a webcam and hide the resulting html element
  video = createCapture(VIDEO);
  video.hide();

  userStartAudio();

  theramin = new p5.Oscillator(`sine`); // create a sine wave
  delay = new p5.Delay();
  delay.process(theramin, 0.1, 0.7, 2300);

  // start a Handpose model and switch the state into `running`
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {
    state = `running`;
    theramin.start();
  });

  // listen to prediction events from handpose and store the results in the predictions
  //array when they occur
  handpose.on(`predict`, function (results) {
    predictions = results;
  });
}

// handles the states of the program
function draw() {
  background(bgColor);

  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
  }
}

function running() {
  // check if there predictions to be made
  if (predictions.length > 0) {
    hand = predictions[0]; // there's only one hand cuz it detecs only one hand
    middleFinger = hand.annotations.middleFinger;
    middleFingerTip = middleFinger[3];

    imageState = random(handImages);
    image(
      imageState,
      middleFingerTip[0],
      middleFingerTip[1],
      handParameters.w + 50,
      handParameters.h + 50
    );
    specialEffects();
  }
}

function specialEffects() {
  // maps the background color according to the y coorcdinate of the user's hand on the canvas
  bgColor = map(middleFingerTip[1], height / 2, 0, 0, 255);
  // maps the frequency according to to the y coorcdinate of the user's hand on the canvas
  let newFreq = map(middleFingerTip[1], height, 0, 0, 880);
  theramin.freq(newFreq);
  // maps the frequency according to to the x coorcdinate of the user's hand on the canvas
  let newAmp = map(middleFingerTip[0], width, 0, 0, 0.4);
  theramin.amp(newAmp);

  console.log(hand);
}

function loading() {
  background(255);
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(random(210, 230), random(210, 230), random(210, 230));
  text(`Loading...`, width / 2, height / 2);
  pop();
}
