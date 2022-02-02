"use strict";

// Fonts
let titleFont;
let scriptFont;

// Titles/ texts
let titleMain;
let prologue;

// forest background
let forestBgBWImg;
let forestBgColImg;
let forestBW;
let forestColor;

let state = `main`;
let mainScene = true;

function preload() {
  forestBgBWImg = loadImage("assets/images/forestbw.png");
  forestBgColImg = loadImage("assets/images/forestcol.png");

  titleFont = loadFont("assets/fonts/BOERT.ttf");
  scriptFont = loadFont("assets/fonts/BaroqueScript.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  forestBW = new ForestBackground(forestBgBWImg);
  forestColor = new ForestBackground(forestBgColImg);
  titleMain = new Title();
  prologue = new Prologue();
}

function draw() {
  background(0);

  if (state = `main`) {
    forestBWscene();
    titleMain.update();
    prologue.update();
  }
}

function forestBWscene() {
  forestBW.update();
}

function mouseWheel(){
  titleMain.mouseWheel(event);
  prologue.mouseWheel(event);

}
