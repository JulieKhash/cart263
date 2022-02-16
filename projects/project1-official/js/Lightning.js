// Lightning
// extends Voice (responsive voice) class
// shows the animation of the lightning, synchronously accompanied by heartbeat sounds
// shows the text

class Lightning extends Voice {
  constructor(imageLightning, imageInkFrame, voice1) {
    super();
    // center position
    this.x = width / 2;
    this.y = height / 2;
    // fade related
    this.fadeAmount = 0;
    this.fadeAmountLight = 0.05;
    this.fadeAmountFrame = 0.1;
    this.fadeMin = 0;
    this.fadeMax = 150;
    // lighting image params
    this.imageLightning = imageLightning;
    this.lightW = 800;
    this.lightH = 1200;
    // image frame params
    this.imageInkFrame = imageInkFrame;
    this.frameW = 1000;
    this.frameH = 1333;
    // "final" text
    this.text = `Don't worry.
    Soon, you'll be sleeping as soundly as you've ever slept.
    And when you awake l'll be waiting for you and so will all the world.`;
    // voice
    this.voice1 = voice1;
  }

  // update lightning
  update() {
    this.display();
  }

  // reads the text on the screen
  voiceUtteranceLong() {
    super.utteranceLong();
  }

  //displays the animation of the lighting inside the frame and the text
  display() {
    push();
    // lightning
    this.fadeAmount += this.fadeAmountLight;
    this.fadeAmount = constrain(this.fadeAmount, this.fadeMin, this.fadeMax);
    tint(255, this.fadeAmount);
    image(this.imageLightning, this.x, this.y, this.lightW, this.lightH);
    pop();
    // inkish frame
    push();
    image(this.imageInkFrame, this.x, this.y, this.frameW, this.frameH);
    pop();
    // text
    push();
    this.fadeAmount += this.fadeAmountFrame;
    this.fadeAmount = constrain(this.fadeAmount, this.fadeMin, this.fadeMax);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont(scriptFont);
    textLeading(50); //line spacing
    fill(random(150, 220), 0, 0, this.fadeAmount);
    text(this.text, this.x, this.y);
    pop();
  }

  // playes the sound of a heartbeat, reads the text
  mousePressed() {
    if (!heartbeatSFX.isPlaying()) {
      heartbeatSFX.setVolume(0.5);
      heartbeatSFX.loop();
    }
    this.voiceUtteranceLong();
  }
}
