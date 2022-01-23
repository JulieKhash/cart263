"use strict";

const ANIMAL_IMG = 10;
const NUM_ANIMALS = 100;

let animalImages = []; //stores animal images
let animals = []; //stores animal objects

let sausageDogImg;
let sausageDog;

let errorSFX;
let barkSFX;

function preload() {
  for (let i = 0; i < ANIMAL_IMG; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
   sausageDogImg = loadImage(`assets/images/sausage-dog.png`);

   errorSFX = loadSound(`assets/sounds/errorSound.mp3`);
   barkSFX = loadSound(`assets/sounds/barkSound.mp3`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

// create the sausageDog
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImg);
}

function draw() {
  background(0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  sausageDog.update();
}

function mousePressed(){
  sausageDog.mousePressed();

  for (let i = 0; i < animals.length; i++) {
  animals[i].mousePressed();
  }
}
