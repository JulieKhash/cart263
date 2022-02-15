class DragonFly extends Voice {
  constructor(imageBird, imageMutedBird, imageSplash, voice1, voice2) {
    super();
    this.x = width / 2 + 480;
    this.y = height / 2 + 300;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;

    this.timeDelay = 24000;

    this.imageBird = imageBird;
    this.imageMutedBird = imageMutedBird;

    this.SplashX = width / 2 - 200;
    this.SplashY = height / 2 - 100;
    this.SplashW = 1020;
    this.SplashH = 700;
    this.imageSplash = imageSplash;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  // updates the dragonfly
  update() {
    this.display();
  }

  // triggers user to the action after a specified time
  triggerPrompt() {
    setTimeout(function () {
      dragonflyMovingVisible = true;
      dragonflyMutedVisible = false;
    }, this.timeDelay);
  }

  // speaks longer text
  voiceInstruction1() {
    super.voiceInstruction1();
  }

  // repeats the short lines
  voiceInstruction2() {
    super.voiceInstruction2();
  }

  // changes the state if the user clicks on a dragonfly, stops the sfx
  changeState() {
    if (this.checkOverlapDragonfly(mouseX, mouseY)) {
      state = `lunarEclipse`;
      birdChirpSFX.stop();
      flowerDragonFlyScene = false;
      eclipseNightScene = true;
    }
  }

  // check if the mouse touches the bottle
  checkOverlapDragonfly(x, y) {
    if (
      x > this.x - this.imageBird.width / 2 &&
      x < this.x + this.imageBird.width / 2 &&
      y > this.y - this.imageBird.height / 2 &&
      y < this.y + this.imageBird.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  // shows the muted dragonfly, then makes it glitter
  display() {
    if (dragonflyMutedVisible) {
      push();
      tint(50, 250);
      image(this.imageMutedBird, this.x, this.y);
      pop();
    } else if (dragonflyMovingVisible) {
      push();
      tint(255, random(140, 200));
      image(this.imageBird, this.x, this.y);
      pop();
    }

    // show blood splash
    push();
    tint(200, random(80, 120));
    image(
      this.imageSplash,
      this.SplashX,
      this.SplashY,
      this.SplashW,
      this.SplashH
    );
    pop();
  }

  // enables user prompt, state change, and the speakign voice
  mousePressed() {
    this.triggerPrompt();
    if (dragonflyMovingVisible) {
      this.changeState();
      this.voiceInstruction2();
    } else {
      this.voiceInstruction1();
    }
  }
}
