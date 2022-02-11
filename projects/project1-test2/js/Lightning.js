class Lightning {
  constructor(imageLightning, imageInkFrame, voice) {
    this.x = width / 2;
    this.y = height / 2;

    this.opacity = 0;
    this.imageLightning = imageLightning;
    this.imageInkFrame = imageInkFrame;

    this.voice = voice;

    this.text = `Don't worry.
    Soon, you'll be sleeping as soundly as you've ever slept.
    And when you awake l'll be waiting for you and so will all the world.`;
  }

  update() {
    this.display();
  }

  voiceInstruction() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice, VOICE_NAME, VOICE_PARAMS);
    }
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
    this.voiceInstruction();
  }
}
