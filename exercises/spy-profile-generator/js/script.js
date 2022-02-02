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
  description: "HIDDEN",
  object: "HIDDEN",
  food: "HIDDEN",
  mood: "HIDDEN",
};

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
  userProfile.name = prompt(`Enter your name here`);
  let country = random(countryData.countries);
  userProfile.homeLand = country;
  let bodyPart = random(bodyPartData.bodyParts);
  userProfile.bodyPart = bodyPart;
  let description = random(descriptionData.descriptions);
  userProfile.description = description;
  let object = random(objectData.objects);
  userProfile.object = object;
  let food = random(foodData.pizzaToppings);
  userProfile.food = food;
  let mood = random(moodData.moods);
  userProfile.mood = mood;
}
/**
Description of draw()
*/
function draw() {
  background(0);

  let profile = `In your past life you were...`;

  push();
  textAlign(LEFT, TOP);
  textFont(`Courier`);
  textSize(30);
  fill(0, 100, 255);
  text(profile, 100, 100);
  text(userProfile.homeLand, 200, 200);
  text(userProfile.bodyPart, 300, 300);
  pop();
}
