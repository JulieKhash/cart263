class Eclipse {
  constructor(imageBranchFrame, imageGlass, imageStillGlass) {
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 0;

    this.branchW = 1300;
    this.branchWH = 1300;
    this.imageBranchFrame = imageBranchFrame;

    this.angle = 0;
    this.imageGlass = imageGlass;
    this.imageStillGlass = imageStillGlass;
  }

  update() {
    this.display();
    this.showSlowly();
  }

  // let the voice to speak out
  voiceInstruction() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(
        `The monk whose soul with Heaven doth commune and spends his days in pious contemplation
finds he will meet his Maker all too soon.
For all his prayers gets no remuneration. Your body's dying. Pay no attention. It happens to us all`,
        VOICE_NAME,
        VOICE_PARAMS
      );
    }
  }

  showSlowly() {
    this.opacity += 5;
  }

  display() {
    if (circleStill) {
      push();
      translate(this.x, this.y - 150);
      tint(100, this.opacity);
      image(this.imageStillGlass, 0, 0);
      pop();
    } else if (circleMoving) {
      push();
      this.angle += 0.002;
      translate(this.x, this.y - 150);
      rotate(this.angle);
      tint(255);
      image(this.imageGlass, 0, 0);
      pop();
    }
    // tree
    push();
    // tint(255, this.opacity);
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }

  mousePressed() {
    // makes the stained glass move
    circleMoving = true;
    circleStill = false;
    // plays the bell sound
    if (!churchBellSFX.isPlaying()) {
      churchBellSFX.setVolume(0.5); // i think it's not working
      churchBellSFX.loop();
    }
    this.voiceInstruction();
  }
}
