// BloodBottle
// extends Voice (responsive voice) class
// the drinking glass of blood that glitters after certain amount of time and
// makes the user "drink it"

class BloodBottle extends Voice {
  constructor(imageBottle, imageMutedBottle, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.fadeAMount = 170; // intial fade value
    this.fadeRate = 1 / 5; // fade rate

    this.delayTime = 6000; // time when the hint appears

    this.imageBottle = imageBottle;
    this.imageMutedBottle = imageMutedBottle;

    this.voice1 = voice1; // longer utterance
    this.voice2 = voice2; // shorter utterance
  }

  // updates the bottle
  update() {
    this.display();
    this.bottleIsDrunken();
  }

  // gives a hint after the specified time
  triggerPrompt() {
    setTimeout(function () {
      imageMutedBottleVisible = false;
      imageBottleVisible = true;
    }, this.delayTime);
  }

  // speaks longer text
  voiceUtteranceLong() {
    super.utteranceLong();
  }

  // speaks short text
  voiceUtteranceShort() {
    super.utteranceShort();
  }

  // make the bottle slowly disappear slowly if it's drunken
  bottleIsDrunken() {
    if (bottleDrunken) {
      this.fadeAMount -= this.fadeRate;
    }
  }

  // check if the mouse touches the bottle
  checkOverlapBottle(x, y) {
    if (
      x > this.x - this.imageBottle.width / 2 &&
      x < this.x + this.imageBottle.width / 2 &&
      y > this.y - this.imageBottle.height / 2 &&
      y < this.y + this.imageBottle.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  // displays a muted bottle, then makes it glitter
  display() {
    if (imageMutedBottleVisible) {
      push();
      tint(120, this.fadeAMount);
      image(this.imageMutedBottle, this.x, this.y);
      pop();
    } else if (imageBottleVisible) {
      push();
      tint(random(200, 250), this.fadeAMount);
      image(this.imageBottle, this.x, this.y);
      pop();
    }
  }

  // enables object hint after user click
  mousePressed() {
    this.triggerPrompt();
    // makes a breathing sound play when the bottle is visible and is clicked
    if (this.checkOverlapBottle(mouseX, mouseY) && imageBottleVisible) {
      bottleDrunken = true;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.setVolume(0.8);
        breathingSFX.play();
      }
      this.voiceUtteranceShort(); // plays a shorter speech
    }
    this.voiceUtteranceLong(); // plays a longer speech
  }
}
