"use strict";

// storing data in a local browser
let clicks = 0;

// an objesct to store the data: withdefault values
let gameData = {
  highScore: 0,
};

function setup() {
  createCanvas(800, 800);

  // when program runs we use the existing data with getItem, if there not null than
  // we use the existing data in our program
  let data = JSON.parse(localStorage.getItem(`click-attack-game-data`));
  if (data !== null) {
    gameData = data;
  }
}

function draw() {
  background(0);

  push();
  textSize(50);
  textStyle(BOLD);
  fill(255);
  text(clicks, width / 2, height / 2);
  pop();

  push();
  textSize(30);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(255, 0, 0);
  text(`High score: ${gameData.highScore}`, 400, 100);
  pop();
}

function mousePressed() {
  clicks++;

  // set (save item into a browser)
  if (clicks > gameData.highScore) {
    gameData.highScore = clicks;
    // save the data for the next game
    localStorage.setItem(`click-attack-game-data`, JSON.stringify(gameData));
  }
}

function keyPressed() {
  if (key === `c`) {
    localStorage.removeItem(`click-attack-game-data`);
  }
}
