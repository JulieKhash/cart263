"use strict";

// WEB storage API saves and loads the data
let userData = {
  name: `stranger`, // default data
};

function setup() {
  createCanvas(600, 600);

  // load the data at the start of your program
  let data = JSON.parse(
    localStorage.getItem(`web-storage-example-personalization`)
  );
  // if there's data (we might have saved data) use this data
  if (data !== null) {
    userData.name = data.name;
  }
  // if there's not data we ask for data and save it
  else {
    userData.name = prompt(`What's your name?`);
    localStorage.setItem(
      `web-storage-example-personalization`,
      JSON.stringify(userData)
    );
  }
}

function draw() {
  background(0);

  // display the data
  push();
  textSize(60);
  fill(255);
  textAlign(CENTER);
  text(`Haw ya doing ${userData.name}?`, width / 2, height / 2);
  pop();
}
