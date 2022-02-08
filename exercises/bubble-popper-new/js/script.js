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

let inkspots; // ink spots we will be cleaning :)
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
}

/**
Description of draw()
*/
function draw() {}
