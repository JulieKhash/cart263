// a class for the drinking glass, extends Voice (responsive voice)
class BloodBottle extends Voice {
  constructor(imageBottle, imageMutedBottle, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.fadeAMount = 170;
    this.fadeRate = 1 / 5;

    this.delayTime = 5000;

    this.imageBottle = imageBottle;
    this.imageMutedBottle = imageMutedBottle;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  // updates the bottle
  update() {
    this.display();
    this.bottleIsDrunken();
  }

  // triggers user to the action after a specified time
  triggerPrompt() {
    setTimeout(function () {
      imageMutedBottleVisible = false;
      imageBottleVisible = true;
    }, this.delayTime);
  }

  // speaks longer text
  voiceInstruction1() {
    super.voiceInstruction1();
  }

  // speaks short text
  voiceInstruction2() {
    super.voiceInstruction2();
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

  // enables prompt to drink the glass, plays the sound effect, plays a resp voice when the mouse is clciked
  mousePressed() {
    this.triggerPrompt();
    if (this.checkOverlapBottle(mouseX, mouseY) && imageBottleVisible) {
      bottleDrunken = true;
      if (!breathingSFX.isPlaying()) {
        breathingSFX.setVolume(0.8);
        breathingSFX.play();
      }
      this.voiceInstruction2();
    }
    this.voiceInstruction1();
  }
}
