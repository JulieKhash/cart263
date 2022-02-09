/**
Alien communication - Ex4
Julie Khashimova

An interactive program that displays an image of a glitching hand based on a hand tracking system.
The program responds to the position of user's hand by chanhing the pitch of the frequency
and canvas color
*/

"use strict";

// background color
let bgColor = 0;

// image related
let imageState;
let lightImg;
let handImg;
let handImages = []; // to store an hand images
let handParameters = {
  w: 210,
  h: 250,
};

// varibles for ml5 handpose model
let hand;
let middleFinger;
let middleFingerTip;

// synth related
let theramin;
let amp;
let delay;
let playing = true;

let state = `loading`; // current state of the program while loading
let video; // user's webcam
let modelName = `Handpose`; //the name of our model
let handpose; // handpose object
let predictions = []; // the current set of predictions made by handpose

// loads images and stores in the array
function preload() {
  for (let i = 0; i < 3; i++) {
    handImg = loadImage(`assets/images/hand${i}.png`);
    lightImg = loadImage(`assets/images/light.png`);
    handImages.push(handImg);
    handImages.push(lightImg);
  }
}

// set up a webcam, handpose, creates synth
function setup() {
  createCanvas(800, 600);

  // start a webcam and hide the resulting html element
  video = createCapture(VIDEO);
  video.hide();

  userStartAudio();
  theramin = new p5.Oscillator(`sine`); // create a sine wave
  delay = new p5.Delay(); // create a reverb
  delay.process(theramin, 0.1, 0.7, 2300); // process the sine

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

// displays the webcam, if there's the hand is identified runs the program
function running() {
  // check if there predictions to be made
  if (predictions.length > 0) {
    hand = predictions[0]; // there's only one hand cuz it detecs only one hand
    middleFinger = hand.annotations.middleFinger; //chose mid-finger to identify the cental point easier
    middleFingerTip = middleFinger[3];
    // display an image of the hand based on the user's middleFinger position
    imageState = random(handImages);
    image(
      imageState,
      middleFingerTip[0],
      middleFingerTip[1],
      handParameters.h,
      handParameters.w
    );
    specialEffects();
  }
}

// produces special effects based on hand tracking
function specialEffects() {
  // maps the background color according to the y coorcdinate of the user's hand on the canvas
  bgColor = map(middleFingerTip[1], height / 2, 0, 0, 255);
  // maps the frequency according to to the y coorcdinate of the user's hand on the canvas
  let newFreq = map(middleFingerTip[1], height, 0, 0, 880);
  theramin.freq(newFreq);
  // maps the frequency according to to the x coorcdinate of the user's hand on the canvas
  let newAmp = map(middleFingerTip[0], width, 0, 0, 0.4);
  theramin.amp(newAmp);

  // console.log(hand);
}

// shows a "loading" screen while the program is laoding
function loading() {
  background(255);
  push();
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(random(210, 230), random(210, 230), random(210, 230));
  text(`Loading...`, width / 2, height / 2);
  pop();
}
