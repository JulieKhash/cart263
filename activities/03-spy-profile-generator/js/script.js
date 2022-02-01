"use strict";

let spyProfile = {
  name: "REDACTED",
  alias: "REDACTED",
  secretWeapon: "REDACTED",
  password: "REDACTED",
};

let tarotData;
let objectData;
let instrumentData;

function preload() {
  tarotData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json"
  );
  objectData = loadJSON(
    `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/tolkienCharacterNames.json`
  );
  instrumentData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // generateSpyProfile();
  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  // check if there is a saved data, check whether the password matches, then populate/show the all the tarotData
  if (data !== null) {
    let password = prompt(`What's your password?`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
  } else {
    // if there's not data saved generate data profile
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt("What's your name?");
  let name = random(objectData.names);
  spyProfile.alias = name;
  let weapon = random(instrumentData.objects);
  spyProfile.secretWeapon = `The ${weapon}`;
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
  background(0);

  let profile = `** DO NOT DISCLOSE! **

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  push();
  textAlign(LEFT, TOP);
  textFont(`Courier`);
  textSize(40);
  fill(255);
  text(profile, 100, 100);
  pop();
}
