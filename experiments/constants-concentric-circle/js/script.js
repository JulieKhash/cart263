"use strict";

const NUM_CIRCLES = 20;
let alphaValue = 50;
let circleSizeIncrease = 30;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);

  alphaValue = map(mouseX, 0, width, 10, 100);
  circleSizeIncrease = map(mouseY, 0, height, 10, 70);

  for (let i = 0; i < NUM_CIRCLES; i++) {
    fill(200, 20, 15, alphaValue);
    rectMode(CENTER);
    rect(width / 2, height / 2, i * circleSizeIncrease);
  }
}
