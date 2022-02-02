/**
Past Life Generator
Julie Khashimova

Uses:
Darius Kazemi's corpora project:
https://github.com/dariusk/corpora/

In this simple randomizion program, the user can play around the idea of their past lives
and have some fun. They may change the description if they don't like it
*/

"use strict";

// the user profile data
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

// texts
let promptText = `Enter your name here`;
let gameName = `Past Life Generator`;
let removeText = `Press "c" to change your past`;

// variables for JSON data
let countryData;
let bodyPartData;
let descriptionData;
let objectData;
let foodData;
let moodData;

// load the json data from the internet to generate the profile
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

// sets up canvas, obtains data from local storage
function setup() {
  createCanvas(windowWidth, windowHeight);

  // check if the data was stored in the local browser, show it if so
  let data = JSON.parse(localStorage.getItem(`past-life-profile-data`));
  if (data !== null) {
    userProfile.name = data.name;
    userProfile.homeLand = data.homeLand;
    userProfile.bodyPart = data.bodyPart;
    userProfile.description1 = data.description1;
    userProfile.description2 = data.description2;
    userProfile.description3 = data.description3;
    userProfile.object = data.object;
    userProfile.food = data.food;
    userProfile.mood1 = data.mood1;
    userProfile.mood2 = data.mood2;
  }
}

// generates a user profile, assigns changeable data
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
  // stores the generated data in the user's local browser
  localStorage.setItem(`past-life-profile-data`, JSON.stringify(userProfile));
}

// displays texts
function draw() {
  background(0);

  textGenerator();
  titleText();
  restartText();
}

// generates descriptive text inside the given text template
function textGenerator() {
  let profile = `${userProfile.name}, in your past life you were born in ${userProfile.homeLand}.
You had a charming ${userProfile.bodyPart}. You were very ${userProfile.description1}, ${userProfile.description2} and ${userProfile.description3}.
You were obsessed with ${userProfile.object} and loved ${userProfile.food}. You were, however,
${userProfile.mood1} dealing with ${userProfile.mood2} people.`;

  push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textFont(`Courier`);
  textSize(28);
  fill(180, 180, 0);
  text(profile, width / 2, height / 2);
  pop();
}

// program's title
function titleText() {
  push();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textStyle(ITALIC);
  textFont(`Georgia`);
  textSize(60);
  fill(255);
  text(gameName, width / 2, 300);
  pop();
}

// call-for-action text
function restartText() {
  push();
  textAlign(CENTER, CENTER);
  textFont(`Georgia`);
  textSize(20);
  fill(180);
  text(removeText, width / 2, height - 300);
  pop();
}

// press "c"  to remove the existing data and assign a new one
function keyPressed() {
  if (key === `c`) {
    localStorage.removeItem(`past-life-profile-data`);
    generateUserProfile();
  }
}
