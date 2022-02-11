class Eclipse extends Voice {
  constructor(imageBranchFrame, imageGlass, imageStillGlass, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 0;

    this.branchW = 1300;
    this.branchWH = 1300;
    this.imageBranchFrame = imageBranchFrame;

    this.angle = 0;
    this.imageGlass = imageGlass;
    this.imageStillGlass = imageStillGlass;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  update() {
    this.display();
    this.showSlowly();
  }

  // voiceInstruction1() {
  //   if (!responsiveVoice.isPlaying()) {
  //     responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
  //   }
  // }
  //
  // voiceInstruction2() {
  //   if (!responsiveVoice.isPlaying()) {
  //     responsiveVoice.speak(this.voice2, VOICE_NAME, VOICE_PARAMS);
  //   }
  // }
  voiceInstruction1() {
    super.voiceInstruction1();
  }

  voiceInstruction2() {
    super.voiceInstruction2();
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
    if (blueBirdVisible) {
      this.voiceInstruction2();
    } else {
      this.voiceInstruction1();
    }
  }
}
