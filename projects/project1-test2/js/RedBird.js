// a class for the red bird on the tree
class RedBird {
  constructor(imageRedBird, imageMutedRedBird) {
    this.x = width / 2 + 300; // x coordination
    this.y = height / 2 - 200; // y coordination
    this.w = 137; // width
    this.h = 400; // height

    this.imageRedBird = imageRedBird; // glittering bird
    this.imageMutedRedBird = imageMutedRedBird; // still bird
  }

  // updates the bird
  update() {
    this.display();
  }

  // triggers user to the prompt after a specified time
  triggerPrompt() {
    setTimeout(function () {
      redBirdVisible = true;
      redBirdMutedVisible = false;
    }, 20000);
  }

  // changes the scene, stops the sound effect
  changeState() {
    if (this.checkOverlapBird(mouseX, mouseY)) {
      state = `encounterSpirit`;
      churchBellSFX.stop();
      eclipseNightScene = false;
      encounterScene = true;
    }
  }

  // check if the mouse touches the bird
  checkOverlapBird(x, y) {
    if (
      x < this.x + this.imageRedBird.width / 2 &&
      x > this.x - this.imageRedBird.width / 2 &&
      y > this.y - this.imageRedBird.height / 2 &&
      y < this.y + this.imageRedBird.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  // displays the red bird on the tree, appears still, then glitters
  display() {
    if (redBirdMutedVisible) {
      push();
      tint(110, 250);
      image(this.imageRedBird, this.x, this.y, this.w, this.h);
      pop();
    } else if (redBirdVisible) {
      push();
      tint(255, random(190, 250));
      image(this.imageRedBird, this.x, this.y, this.w, this.h);
      pop();
    }
  }

  // calls the user prompt and enables state change when mouse is pressed
  mousePressed() {
    this.triggerPrompt();
    if (redBirdVisible) {
      this.changeState();
    }
  }
}
