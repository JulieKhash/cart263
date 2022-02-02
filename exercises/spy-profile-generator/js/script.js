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

let countryData;
let bodyPartData;
let descriptionData;
let objectData;
let foodData;
let moodData;

/**
Description of preload
*/
function preload() {}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  userProfile.name = prompt(`Enter your name here`);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  let profile = `In your past life you were...`;

  push();
  textAlign(LEFT, TOP);
  textFont(`Courier`);
  textSize(30);
  fill(0, 100, 255);
  text(profile, 100, 100);
  pop();
}
