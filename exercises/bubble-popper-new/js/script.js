/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let handImg;
let handImages = []; // to store an hand images
let handParameters = {
  w: 200,
  h: 160,
};
let middleFingerTip;

let oscillator;

let state = `running`; // current state of the program while loading
let video; // user's webcam
let modelName = `Handpose`; //the name of our model
let handpose; // handpose object
let predictions = []; // the current set of predictions made by handpose

/**
Description of preload
*/
function preload() {
  for (let i = 0; i < 2; i++) {
    handImg = loadImage(`assets/images/hand${i}.png`);
    handImages.push(handImg);
  }
}

/**
Description of setup
*/
function setup() {
  createCanvas(800, 600);
  background(0);

  userStartAudio();
  oscillator = new p5.Oscillator(`sine`); // create a sine wave

  oscillator.start();

  // oscillator.start();

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
  // background(0, 50, 100);
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

    image(
      handImages[0],
      middleFingerTip[0],
      middleFingerTip[1],
      handParameters.w,
      handParameters.h
    );
    // showHands(hand);
    let newFreq = map(middleFingerTip[1], height, 0, 0, 440);
    oscillator.freq(newFreq);
    console.log(hand);
    // oscillator.start();
  }
}

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
