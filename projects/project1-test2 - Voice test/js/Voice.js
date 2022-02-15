class Voice {
  constructor() {
    this.voice1;
  }

  voiceInstruction() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
    }
  }
}
