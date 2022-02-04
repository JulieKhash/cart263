class BloodBottle {
  constructor(imageBottle, imageMutedBottle) {
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 170;

    // this.imageBottleVisible = false;
    this.imageBottle = imageBottle;

    // this.imageMutedBottleVisible = true;
    this.imageMutedBottle = imageMutedBottle;
  }

  update() {
    this.display();
    this.bottleIsDrunken();
    // this.triggerAction();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(this.makeVisible, 7000);
  }

  makeVisible() {
    //bottleDrunken = true;
    imageMutedBottleVisible = false;
    imageBottleVisible = true;
  }

  // let the voice to speak out
  voiceInstruction1() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(
        `Don't be afraid. I'm going to give you the choice you never had. You must drink it`,
        VOICE_NAME,
        VOICE_PARAMS
      );
    }
  }

  voiceInstruction2() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(`You must drink it`, VOICE_NAME, VOICE_PARAMS);
    }
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
    // this.triggerAction();

    if (imageMutedBottleVisible) {
      push();
      tint(130, this.opacity);
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
    // this.triggerAction();
    this.triggerAction();
    if (this.checkOverlapBottle(mouseX, mouseY) && imageBottleVisible) {
      // bottleDrunken = true;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.play();
      }
      this.voiceInstruction2();
    }
    this.voiceInstruction1();
  }

  alertFunc() {
    alert("Hello!");
  }
}
