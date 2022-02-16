// DragonFly
// extends Voice (responsive voice) class
// the dragonfly that glitters after certain time and adds the "hint" effect
// that makes the user click on it.
// changes the state through the dragonfly

class DragonFly extends Voice {
  constructor(imageBird, imageMutedBird, imageSplash, voice1, voice2) {
    super();
    // positions on the right side corner of the frame
    this.x = width / 2 + 480; // x-coord
    this.y = height / 2 + 300; // y-coord
    this.vx = 0; // velocity x
    this.vy = 0; // // velocity y

    this.timeDelay = 25000; // time when the hint appears

    this.imageBird = imageBird;
    this.imageMutedBird = imageMutedBird;

    // positions and size parameters for the red splash
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

  // gives a hint after the specified time
  triggerPrompt() {
    setTimeout(function () {
      dragonflyMovingVisible = true;
      dragonflyMutedVisible = false;
    }, this.timeDelay);
  }

  // speaks longer text
  voiceUtteranceLong() {
    super.utteranceLong();
  }

  // repeats a short line
  voiceUtteranceShort() {
    super.utteranceShort();
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

  // checks if the mouse touches the bottle
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

    // shows a glittering blood splash
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

  // enables a hint, state change, and the speaking voice
  mousePressed() {
    this.triggerPrompt();
    if (dragonflyMovingVisible) {
      this.changeState();
      this.voiceUtteranceShort();
    } else {
      this.voiceUtteranceLong();
    }
  }
}
