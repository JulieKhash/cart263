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
    this.voiceInstruction();
  }

  // repeats the voice every 2 seconds
  repeatVoice() {
    setInterval(this.voiceInstruction, 2000);
  }

  voiceInstruction() {
    responsiveVoice.speak(`You must drink it`, VOICE_NAME, VOICE_PARAMS);
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
    }
    //breathingSFX.loop();
  }
}
