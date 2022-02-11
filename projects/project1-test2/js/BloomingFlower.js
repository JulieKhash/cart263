class BloomingFLower {
  constructor(imageBloom, imageBlackFrame) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 1450;
    this.h = 1080;

    this.opacity = 0;

    this.imageBloom = imageBloom;
    this.imageBlackFrame = imageBlackFrame;
  }

  update() {
    this.display();
    this.showSlowly();
  }

  // let the voice to speak out
  // voiceInstruction() {
  //   if (!responsiveVoice.isPlaying()) {
  //     responsiveVoice.speak(
  //       `What beauty by my side? A rose in bloom, a shrinking violet?
  // Perhaps she has a mind to be my bride. Perhaps my lesson has not ended yet!
  // I don't want to die! But Death we are and have always been.
  // But I'm young!`,
  //       VOICE_NAME,
  //       VOICE_PARAMS
  //     );
  //   }
  // }

  // voiceInstruction2() {
  //   if (!responsiveVoice.isPlaying()) {
  //     responsiveVoice.speak(`You must drink it`, VOICE_NAME, VOICE_PARAMS);
  //   }
  // }

  showSlowly() {
    this.opacity += 1;
  }

  display() {
    push();
    tint(255, this.opacity);
    image(this.imageBloom, this.x, this.y, this.w - 300, this.h - 300);
    pop();

    push();
    tint(255, this.opacity);
    image(this.imageBlackFrame, this.x, this.y, this.w + 200, this.h + 200);
    pop();
  }

  mousePressed() {
    if (!birdChirpSFX.isPlaying()) {
      birdChirpSFX.loop();
      birdChirpSFX.volume(0.5);
    }
    // this.voiceInstruction();
  }
}
