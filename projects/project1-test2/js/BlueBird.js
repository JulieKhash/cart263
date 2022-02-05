class BlueBird {
  constructor(imageBlueBird, imageMutedBlueBird) {
    this.x = width / 2 + 300;
    this.y = height / 2 - 200;
    this.w = 137;
    this.h = 400;

    this.imageBlueBird = imageBlueBird;
    this.imageMutedBlueBird = imageMutedBlueBird;
  }

  update() {
    this.display();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(this.makeVisible, 3000);
  }

  makeVisible() {
    blueBirdVisible = true;
    blueBirdMutedVisible = false;
  }

  changeState() {
    if (this.checkOverlapBird(mouseX, mouseY)) {
      state = `statueBoy`;
      churchBellSFX.stop();
      eclipseNightScene = false;
      encounterScene = true;
    }
  }

  // check if the mouse touches the bird
  checkOverlapBird(x, y) {
    if (
      x > this.x - this.imageBlueBird.width / 2 &&
      x < this.x + this.imageBlueBird.width / 2 &&
      y > this.y - this.imageBlueBird.height / 2 &&
      y < this.y + this.imageBlueBird.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (blueBirdMutedVisible) {
      push();
      tint(110, 250);
      image(this.imageBlueBird, this.x, this.y, this.w, this.h);
      pop();
    } else if (blueBirdVisible) {
      push();
      tint(255, random(190, 250));
      image(this.imageBlueBird, this.x, this.y, this.w, this.h);
      pop();
    }
  }
  mousePressed() {
    this.triggerAction();
    if (blueBirdVisible) {
    }
    this.changeState();
  }
}
