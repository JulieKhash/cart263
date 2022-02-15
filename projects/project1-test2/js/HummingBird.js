class HummingBird extends Voice {
  constructor(imageBird, imageMutedBird, imageSplash, voice1, voice2) {
    super();
    this.x = width / 2 + 480;
    this.y = height / 2 + 300;
    this.vx = 0;
    this.vy = 0;
    // this.w = 87;
    // this.h = 250;
    this.speed = 2;

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

  update() {
    this.display();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(this.makeVisible, 22000);
  }

  makeVisible() {
    humBirdMovingVisible = true;
    humBirdMutedVisible = false;
  }

  voiceInstruction1() {
    super.voiceInstruction1();
  }

  voiceInstruction2() {
    super.voiceInstruction2();
  }

  changeState() {
    if (this.checkOverlapDragonfly(mouseX, mouseY)) {
      state = `lunarEclipse`;
      birdChirpSFX.stop();
      flowerBirdScene = false;
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

  display() {
    if (humBirdMutedVisible) {
      push();
      tint(50, 250);
      image(this.imageMutedBird, this.x, this.y);
      pop();
    } else if (humBirdMovingVisible) {
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

  mousePressed() {
    this.triggerAction();
    if (humBirdMovingVisible) {
      this.changeState();
      this.voiceInstruction2();
    } else {
      this.voiceInstruction1();
    }
  }
}
