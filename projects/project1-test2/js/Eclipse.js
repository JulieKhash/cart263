// "Eclipse", because the idea of a rotating stained glass window came from an eclipse
// extends Voice (responsive voice) class
// appears muted, activates the scene when user clicks with their mouse

class Eclipse extends Voice {
  constructor(imageBranchFrame, imageGlass, imageStillGlass, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;

    this.fadeAmount = 0; // intial fade value
    this.fadeRate = 5; // fade in rate

    this.branchW = 1300;
    this.branchWH = 1300;
    this.imageBranchFrame = imageBranchFrame;

    this.angle = 0; // rotational angle
    this.rotationRate = 0.002; // rotation rate value
    this.imageGlass = imageGlass;
    this.imageStillGlass = imageStillGlass;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  // updates the stained glass and tree
  update() {
    this.display();
    this.showSlowly();
  }

  // speaks longer lines
  voiceUtteranceLong() {
    super.utteranceLong();
  }

  // repeats shorted lines
  voiceUtteranceShort() {
    super.utteranceShort();
  }

  // fade in
  showSlowly() {
    this.fadeAmount += this.fadeRate;
  }

  // shows a still stained glass window, then brightens and slowly slowly
  display() {
    if (circleStill) {
      push();
      translate(this.x, this.y - 150);
      tint(100, this.fadeAmount);
      image(this.imageStillGlass, 0, 0);
      pop();
    } else if (circleMoving) {
      push();
      this.angle += this.rotationRate;
      translate(this.x, this.y - 150); // off-center to the left
      rotate(this.angle);
      tint(255);
      image(this.imageGlass, 0, 0);
      pop();
    }
    // night tree image
    push();
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }

  mousePressed() {
    // activates the stained glass window
    circleMoving = true;
    circleStill = false;
    // plays sound of a church bell sound
    if (!churchBellSFX.isPlaying()) {
      churchBellSFX.setVolume(0.5);
      churchBellSFX.loop();
    }
    // when the bird gleams, repeats a short speech (by clicking)
    if (redBirdVisible) {
      this.voiceUtteranceShort();
    } else {
      this.voiceUtteranceLong(); // plays longer speech until bird gleams
    }
  }
}
