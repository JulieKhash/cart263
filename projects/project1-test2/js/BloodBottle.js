class BloodBottle {
  constructor(imageBottle) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBottle = imageBottle;
  }

  update() {
    this.display();
    this.voiceInstruction();
  }

  voiceInstruction() {
    responsiveVoice.speak(`You must drink it`, VOICE_NAME, VOICE_PARAMS);
  }

  display() {
    push();
    tint(random(200, 255), 170);
    image(this.imageBottle, this.x, this.y);
    pop();
  }

  mousePressed() {
    //breathingSFX.loop();
  }
}
