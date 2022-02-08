/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let video = undefined; //user's cam
let handpose = undefined; // handpose model;
let predictions = []; // an array to store predictions
let bubble = undefined; // the bubble

function setup() {
  createCanvas(700, 700);

  // start a webcam and hide the results from html element
  video = createCapture(VIDEO);
  video.hide();

  // load handpose model
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {
    console.log(`Model Loaded`);
  });

  // listen for predictions
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  });

  // the bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };
}

function draw() {
  background(0);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipX);
    pop();

    push();
    noStroke();
    fill(0, 0, 200);
    ellipse(baseX, baseY, 30);
    pop();

    //check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  // move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(200, 40, 10);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}
