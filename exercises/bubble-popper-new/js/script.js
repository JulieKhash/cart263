/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// let bgColor = {
//   r: 0,
//   g: 0,
//   b: 0,
// };

let bgColor = 0;

let imageState;
let handImg;
let handImages = []; // to store an hand images
let handParameters = {
  w: 200,
  h: 160,
};
let middleFingerTip;

let theramin;
let delay;

let ghostImg;

let state = `running`; // current state of the program while loading
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
    ghostImg = loadImage(`assets/images/ghost3.png`);
    handImages.push(handImg);
    handImages.push(ghostImg);
  }
}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 600);

  // background(255);

  userStartAudio();
  theramin = new p5.Oscillator(`sine`); // create a sine wave
  theramin.start();
  delay = new p5.Delay();
  delay.process(theramin, 0.1, 0.7, 2300);

  // start a webcam and hide the resulting html element
  video = createCapture(VIDEO);
  video.hide();

  // start a Handpose model and switch the state into `running`
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {
    state = `running`;
  });

  // listen to prediction events from handpose and store the results in the predictions
  //array when they occur
  handpose.on(`predict`, function (results) {
    predictions = results;
  });
}

/**
Description of draw()
*/
function draw() {
  // background(bgColor.r, bgColor.g, bgColor.b);
  // bgColor.r = map(bgColor.r, height, 0, 255, 0);
  // bgColor;
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
    let hand = predictions[0]; // there's only one hand cuz it detecs only one hand
    let middleFinger = hand.annotations.middleFinger;
    middleFingerTip = middleFinger[3];

    imageState = random(handImages);

    // if (middleFingerTip[1] < height / 2) {
    //   imageState = handImages[2];
    // } else if (middleFingerTip[1] > height / 2) {
    //   imageState = handImages[1];
    // }
    image(
      imageState,
      middleFingerTip[0],
      middleFingerTip[1],
      handParameters.w + 50,
      handParameters.h + 50
    );

    bgColor = map(middleFingerTip[1], height / 2, 0, 0, 255);
    // bgColor = map(middleFingerTip[0], 0, width, 0, 255);

    // bgColor.r = map(middleFingerTip[1], 0, height, 0, 50);
    // bgColor.g = map(middleFingerTip[1], 0, height, 0, 250);
    // bgColor.b = map(middleFingerTip[1], 0, height, 0, 250);
    //
    // bgColor.r = map(middleFingerTip[0], 0, width, 0, 50);
    // bgColor.g = map(middleFingerTip[0], 0, width, 0, 250);
    // bgColor.b = map(middleFingerTip[0], 0, width, 0, 250);

    let newFreq = map(middleFingerTip[1], height, 0, 0, 880);
    theramin.freq(newFreq);

    let newAmp = map(middleFingerTip[0], width, 0, 0, 0.5);
    theramin.amp(newAmp);

    console.log(hand);
  }
}

function playTheramin() {}
// function showHands(hand) {
//   push();
//   handX = hand.annotations.palmBase[0];
//   // handY = hand.middleFinger[3];
//   image(handImages[0], handX, handX);
//   pop();
// }

function loading() {
  background(255);
  push();
  text(`Loading...`, widht / 2, height / 2);
  pop();
}
