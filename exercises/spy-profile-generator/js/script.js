/**
Past Life Generator
Julie Khashimova

Data is from corpora

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let userProfile = {
  name: "HIDDEN",
  homeLand: "HIDDEN",
  bodyPart: "HIDDEN",
  description1: "HIDDEN",
  description2: "HIDDEN",
  description3: "HIDDEN",
  object: "HIDDEN",
  food: "HIDDEN",
  mood1: "HIDDEN",
  mood2: "HIDDEN",
};

let promptText = `Enter your name here`;

let countryData;
let bodyPartData;
let descriptionData;
let objectData;
let foodData;
let moodData;

/**
Description of preload
*/
function preload() {
  countryData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json"
  );
  bodyPartData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/bodyParts.json"
  );
  descriptionData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json"
  );
  objectData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json"
  );
  foodData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/pizzaToppings.json"
  );
  moodData = loadJSON(
    "https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/moods.json"
  );
}

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateUserProfile();
}

function generateUserProfile() {
  userProfile.name = prompt(promptText);
  let country = random(countryData.countries);
  userProfile.homeLand = country;
  let bodyPart = random(bodyPartData.bodyParts);
  userProfile.bodyPart = bodyPart;

  let description1 = random(descriptionData.descriptions);
  userProfile.description1 = description1;
  let description2 = random(descriptionData.descriptions);
  userProfile.description2 = description2;
  let description3 = random(descriptionData.descriptions);
  userProfile.description3 = description3;

  let object = random(objectData.objects);
  userProfile.object = object;
  let food = random(foodData.pizzaToppings);
  userProfile.food = food;
  let mood1 = random(moodData.moods);
  userProfile.mood1 = mood1;
  let mood2 = random(moodData.moods);
  userProfile.mood2 = mood2;

  localStorage.setItem(`past-life-profile-data`, JSON.stringify(userProfile));
}
/**
Description of draw()
*/
function draw() {
  background(0);

  textGenerator();
  titleText();
  restartText();
}

function textGenerator() {
  let profile = `${userProfile.name}, in your past life you were born in ${userProfile.homeLand}.
You had a charming ${userProfile.bodyPart}. You were very ${userProfile.description1}, ${userProfile.description2} and ${userProfile.description3}.
You were obsessed with ${userProfile.object} and loved ${userProfile.food}. You were, however,
${userProfile.mood1} dealing with ${userProfile.mood2} people.`;

  push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont(`Courier`);
  textSize(30);
  fill(180, 180, 0);
  text(profile, width / 2, height / 3);
  pop();
}

function titleText() {
  push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textStyle(ITALIC);
  textFont(`Georgia`);
  textSize(60);
  fill(255);
  text("Past Life Generator", width / 2, 100);
  pop();
}
function restartText() {
  push();
  textAlign(CENTER, CENTER);
  // textStyle(BOLD);
  //textStyle(ITALIC);
  textFont(`Georgia`);
  textSize(20);
  fill(180);
  text(`Press "c" to change your past`, width / 2, height - 300);
  pop();
}
