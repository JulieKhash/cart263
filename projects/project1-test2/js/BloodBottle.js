class BloodBottle {
  constructor(imageBottle, imageMutedBottle, voice, voice2) {
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 170;

    this.imageBottle = imageBottle;
    this.imageMutedBottle = imageMutedBottle;

    this.voice1 = voice;
    this.voice2 = voice2;
  }

  update() {
    this.display();
    this.bottleIsDrunken();
  }

  // after 5 secs enable the user's trigger for action
  triggerAction() {
    setTimeout(this.makeVisible, 7000);
  }

  makeVisible() {
    imageMutedBottleVisible = false;
    imageBottleVisible = true;
  }

  // let the voice to speak out
  voiceInstruction1() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
    }
  }

  voiceInstruction2() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice2, VOICE_NAME, VOICE_PARAMS);
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
