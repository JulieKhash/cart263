"use strict";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  let config = {
    x: 300,
    y: 300,
    w: 250,
    h: 250,
    fillColor: {
      r: 200,
      b: 100,
      g: 100,
    },
    mode: CENTER,
  };
  drawRect(config);
}

function drawRect({ x, y, w, h, fillColor, mode }) {
  push();
  fill(fillColor.r, fillColor.b, fillColor.g);
  rectMode(mode);
  rect(x, y, w, h);
  pop();
}
