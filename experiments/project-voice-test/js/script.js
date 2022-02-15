"use strict";

// responsive voice parameters
const VOICE_NAME = `UK English Male`;
const VOICE_PARAMS = {
  pitch: 0.3,
  rate: 0.8,
  volume: 0.9,
};

let script = [
  `I watched the whole magnificence of the dawn for the last time and then I said farewell to sunlight`,
  `The world had changed, yet stayed the same The years flew by like minutes. The city grew.`,
  `I'm at odds with everything. I always have been.`,
];

let currentIndex = 0;
let currentText;

function preload() {}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(100, 100, 100);

  currentText = script[currentIndex];
}

function mousePressed() {
  if (!responsiveVoice.isPlaying()) {
    currentIndex++;
    if (currentIndex > 4) {
      currentIndex = 0;
    }
    responsiveVoice.speak(currentText, VOICE_NAME, VOICE_PARAMS);
  }
}
