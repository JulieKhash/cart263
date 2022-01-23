/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let phrase = "Hello, Anubis!"
let phrases = ["Juju", "LALA", "Tootoroo"];
let saying = "";

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
}


/**
Description of draw()
*/
function draw() {
  background(255, 100, 10);

  push();
  textSize(35);
  textAlign(CENTER);
  fill(255);
  text(saying, width/2, height/2);
  pop();
}

function mousePressed(){
  responsiveVoice.speak(phrases[2], "UK English Male",
  {onstart: showSpeaking, onend: hideSpeaking});
}

function showSpeaking(){
  saying = phrases[2];
}

function hideSpeaking(){
  saying = "";
}
