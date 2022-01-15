/**
Sausage-Dog + new game
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const BUTTERFLY_IMG = 14;
const NUM_BUTTERFLY = 50;

let butterflyImages = [];

/**
Description of preload
*/
function preload() {
  for (let i = 0; i < BUTTERFLY_IMG; i++){
    let butterflyImg = loadImage(`assets/images/butterfly${i}.png`);
    butterflyImages.push(butterflyImg);
  }
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
function draw() {

}
