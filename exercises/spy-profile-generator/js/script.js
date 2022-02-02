/**
Past Life Generator
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let userProfile = {
  name: "HIDDEN",
  homeLand: "HIDDEN",
  bodyPart: "HIDDEN",
  description: "HIDDEN",
  object: "HIDDEN",
  food: "HIDDEN",
  mood: "HIDDEN",
};

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  push();
  textAlign(LEFT, TOP);
  textFont(`Courier`);
  textSize(40);
  fill(0, 100, 255);
  text(profile, 100, 100);
  pop();
}
