class Voice {
  constructor() {
    this.voice1;
    // this.voice2;
  }

  voiceInstruction() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
    }
  }

  // voiceInstruction2() {
  //   if (!responsiveVoice.isPlaying()) {
  //     responsiveVoice.speak(this.voice2, VOICE_NAME, VOICE_PARAMS);
  //   }
  // }
}
