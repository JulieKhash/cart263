class BloodBottle extends Voice {
  constructor(imageBottle, imageMutedBottle, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.opacity = 170;

    this.imageBottle = imageBottle;
    this.imageMutedBottle = imageMutedBottle;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  update() {
    this.display();
    this.bottleIsDrunken();
  }

  // triggers a user to the action after a specified time
  triggerAction() {
    setTimeout(this.makeVisible, 7000);
  }

  makeVisible() {
    imageMutedBottleVisible = false;
    imageBottleVisible = true;
  }

  voiceInstruction1() {
    super.voiceInstruction1();
  }

  voiceInstruction2() {
    super.voiceInstruction2();
  }

  // make the bottle slowly disappear if it's drunken
  bottleIsDrunken() {
    if (bottleDrunken) {
      this.opacity -= 1 / 5;
    }
  }

  // check if the mouse touches the bottle
  checkOverlapBottle(x, y) {
    if (
      x > this.x - this.imageBottle.width / 2 &&
      x < this.x + this.imageBottle.width / 2 &&
      y > this.y - this.imageBottle.height / 2 &&
      y < this.y + this.imageBottle.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (imageMutedBottleVisible) {
      push();
      tint(120, this.opacity);
      image(this.imageMutedBottle, this.x, this.y);
      pop();
    } else if (imageBottleVisible) {
      push();
      tint(random(200, 250), this.opacity);
      image(this.imageBottle, this.x, this.y);
      pop();
    }
  }

  mousePressed() {
    this.triggerAction();
    if (this.checkOverlapBottle(mouseX, mouseY) && imageBottleVisible) {
      bottleDrunken = true;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.setVolume(0.8);
        breathingSFX.play();
      }
      this.voiceInstruction2();
    }
    this.voiceInstruction1();
  }
}
