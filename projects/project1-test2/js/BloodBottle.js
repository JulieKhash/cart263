class BloodBottle {
  constructor(imageBottle) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBottle = imageBottle;
  }

  update() {
    this.display();
    // this.voiceInstruction();
  }

  // repeats the voice every 2 seconds
  repeatVoice() {
    setInterval(this.voiceInstruction, 20000);
  }

  voiceInstruction() {
    responsiveVoice.speak(
      `  Blood I was to find was a necessity as well.
      I awoke the next evening with a hunger I had never felt.You must drink it`,
      VOICE_NAME,
      VOICE_PARAMS
    );
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
    tint(random(200, 255), 170);
    image(this.imageBottle, this.x, this.y);
    pop();
  }

  mousePressed() {
    if (this.checkOverlapBottle(mouseX, mouseY)) {
      breathingSFX.loop();
      // image(eyeImg, this.x, this.y);
      // state = `main`;
    }
    //breathingSFX.loop();
  }
}
