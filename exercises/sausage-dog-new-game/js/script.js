/**
Sausage-Dog + new game
Julie Khashimova

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

const BUTTERFLY_IMG = 13;
const NUM_BUTTERFLY = 50;

let butterflyImages = [];
let butterflies = []; // an empty array to store butterfly instances

let spiderImg;
let spider;

/**
Description of preload
*/
function preload() {
  for (let i = 0; i < BUTTERFLY_IMG; i++) {
    let butterflyImg = loadImage(`assets/images/butterfly${i}.png`);
    butterflyImages.push(butterflyImg);
  }
  spiderImg = loadImage(`assets/images/spider0.png`);
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_BUTTERFLY; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let butterflyImg = random(butterflyImages);
    let butterfly = new Insect(x, y, butterflyImg);
    butterflies.push(butterfly);
  }
  let x = random(0, width);
  let y = random(0, height);
  spider = new Spider(x, y, spiderImg);
}

/**
Description of draw()
*/
function draw() {
  background(255, 250, 200);

  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].update();
  }

  spider.update();
}

function mousePressed(){
  spider.mousePressed();
}
