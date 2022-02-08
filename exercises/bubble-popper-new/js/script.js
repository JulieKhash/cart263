/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let cleaningClothImg;
let inkImg;
let inkspots = []; //an empty array to store the inkspots

let inkspot; // ink spot we will be cleaning :)
let inkspotsCleaned = false; // initially not cleaned

let cleaningCloth = {
  x: undefined,
  y: undefined,
  size: 400,
};

let state = `loading`; // current state of the program while loading
let video; // user's webcam
let modelName = `Handpose`; //the name of our model
let handpose; // handpose object
let predictions = []; // the current set of predictions made by handpose

/**
Description of preload
*/
function preload() {
  cleaningClothImg = loadImage("assets/images/cloth.png");
  inkImg = loadImage("assets/images/spot.png");
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

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
  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
  } else if (state === `cleaned`) {
    cleaned();
  }
}

function running() {
  // check if there predictions to be made
  if (predictions.length > 0) {
    let hand = predictions[0]; // there's only one hand cuz it detecs only one hand
    showCleaningCloth();
  }
}
