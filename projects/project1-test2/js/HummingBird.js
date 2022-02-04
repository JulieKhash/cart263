class HummingBird {
  constructor(imageBird, imageMutedBird, imageSplash) {
    this.x = width / 2 + 250;
    this.y = height / 2 - 50;
    this.vx = 0;
    this.vy = 0;
    this.w = 396;
    this.h = 445;
    this.speed = 2;

    this.imageBird = imageBird;
    this.imageMutedBird = imageMutedBird;

    this.SplashX = width / 2 - 200;
    this.SplashY = height / 2 - 100;
    this.SplashW = 1020;
    this.SplashH = 700;
    this.imageSplash = imageSplash;
  }

  update() {
    //  this.changeState();
    this.move();
    this.display();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(this.makeVisible, 3000);
  }

  makeVisible() {
    humBirdMovingVisible = true;
    humBirdMutedVisible = false;
  }

  changeState() {
    if (this.checkOverlapBird(mouseX, mouseY)) {
      state = `lunarEclipse`;
      birdChirpSFX.stop();
      flowerBirdScene = false;
      eclipseNightScene = true;
    }
  }

  // check if the mouse touches the bird
  // checkOverlapBird(x, y) {
  //   if (
  //     x > this.x - this.imageBird.width / 2 &&
  //     x < this.x + this.imageBird.width / 2 &&
  //     y > this.y - this.imageBird.height / 2 &&
  //     y < this.y + this.imageBird.height / 2
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  checkOverlapBird(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.w / 5 && this.h / 5) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    // check if we need to change the moving direction
    let r = random(0, 1);
    if (r < 0.8) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    // move position with velocity
    this.x += this.vx;
    this.y += this.vy;

    // constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    if (humBirdMutedVisible) {
      push();
      tint(50, 250);
      image(this.imageMutedBird, this.x, this.y, this.w, this.h);
      pop();
    } else if (humBirdMovingVisible) {
      push();
      tint(255, random(140, 200));
      image(this.imageBird, this.x, this.y, this.w, this.h);
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
    }
  }
}
