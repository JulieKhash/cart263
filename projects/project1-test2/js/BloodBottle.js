class BloodBottle {
  constructor(imageBottle) {
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 170;

    this.imageBottle = imageBottle;
  }

  update() {
    this.display();
    this.bottleIsDrunken();
    this.playVoice();
    //  this.voiceInstruction();
  }

  // repeats the voice every 2 seconds
  playVoice() {
    setTimeout(this.voiceInstruction1, 1000);
    setInterval(this.voiceInstruction2, 5000);
  }

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
    push();
    tint(random(200, 255), this.opacity);
    image(this.imageBottle, this.x, this.y);
    pop();
  }

  mousePressed() {
    if (this.checkOverlapBottle(mouseX, mouseY)) {
      bottleDrunken = true;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.play();
      }
    }
  }
}
