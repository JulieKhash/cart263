class RedBird {
  constructor(imageRedBird, imageMutedRedBird) {
    this.x = width / 2 + 300;
    this.y = height / 2 - 200;
    this.w = 137;
    this.h = 400;

    this.imageRedBird = imageRedBird;
    this.imageMutedRedBird = imageMutedRedBird;
  }

  update() {
    this.display();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(function () {
      redBirdVisible = true;
      redBirdMutedVisible = false;
    }, 20000);
  }

  changeState() {
    if (this.checkOverlapBird(mouseX, mouseY)) {
      state = `encounterSpirit`;
      churchBellSFX.stop();
      eclipseNightScene = false;
      encounterScene = true;
    }
  }

  // check if the mouse touches the bird
  checkOverlapBird(x, y) {
    if (
      x < this.x + this.imageRedBird.width / 2 &&
      x > this.x - this.imageRedBird.width / 2 &&
      y > this.y - this.imageRedBird.height / 2 &&
      y < this.y + this.imageRedBird.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (redBirdMutedVisible) {
      push();
      tint(110, 250);
      image(this.imageRedBird, this.x, this.y, this.w, this.h);
      pop();
    } else if (redBirdVisible) {
      push();
      tint(255, random(190, 250));
      image(this.imageRedBird, this.x, this.y, this.w, this.h);
      pop();
    }
  }

  mousePressed() {
    this.triggerAction();
    if (redBirdVisible) {
      this.changeState();
    }
  }
}
