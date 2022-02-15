// a super class for the responsiveVoice
class Voice {
  constructor() {
    this.voice1;
    this.voice2;
  }

  utteranceLong() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
    }
  }

  utteranceShort() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice2, VOICE_NAME, VOICE_PARAMS);
    }
  }
}
