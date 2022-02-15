class Lightning extends Voice {
  constructor(imageLightning, imageInkFrame, voice1) {
    super();
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 0;
    this.imageLightning = imageLightning;
    this.imageInkFrame = imageInkFrame;

    this.text = `Don't worry.
    Soon, you'll be sleeping as soundly as you've ever slept.
    And when you awake l'll be waiting for you and so will all the world.`;

    this.voice1 = voice1;
  }

  update() {
    this.display();
  }

  voiceInstruction1() {
    super.voiceInstruction1();
  }

  display() {
    push();
    this.opacity += 0.05;
    this.opacity = constrain(this.opacity, 0, 150);
    tint(255, this.opacity);
    image(this.imageLightning, this.x, this.y, 800, 1200);
    pop();

    push();
    image(this.imageInkFrame, this.x, this.y, 1000, 1333);
    pop();

    push();
    this.opacity += 0.1;
    this.opacity = constrain(this.opacity, 0, 150);
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont(scriptFont);
    textLeading(50); //line spacing
    fill(random(150, 220), 0, 0, this.opacity);
    text(this.text, this.x, this.y);
    pop();
  }

  mousePressed() {
    if (!heartbeatSFX.isPlaying()) {
      heartbeatSFX.setVolume(0.5);
      heartbeatSFX.loop();
    }
    this.voiceInstruction1();
  }
}
