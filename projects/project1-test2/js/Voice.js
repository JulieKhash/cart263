// Super class Voice
// adds general settings for responsive voice

class Voice {
  constructor() {
    this.voice1;
    this.voice2;
  }

  // checks, if the voice isn't playing then speaks, utters longer chunks of text
  utteranceLong() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice1, VOICE_NAME, VOICE_PARAMS);
    }
  }

  // checks, if the voice isn't playing then speaks, utters shorter text
  utteranceShort() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(this.voice2, VOICE_NAME, VOICE_PARAMS);
    }
  }
}
