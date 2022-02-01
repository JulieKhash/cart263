class MirrorSmall extends SpeakingMirror {
  constructor(imageSmallMirror) {
    super();
    this.x = width / 2 - 600; // position x
    this.y = height / 2 + 100; // position y
    this.w = 90; // image width
    this.h = 131; // image height
    this.glitter = 180;

    this.imageSmallMirror = imageSmallMirror;
    //  this.smallVisible = false;
  }

  update() {
    super.update();

    this.display();
  }

  // check if the mouse touches the small mirror
  checkOverlapSmallMirror(x, y) {
    if (
      this.x > this.x - this.imageSmallMirror.width / 2 &&
      this.x < this.x + this.imageSmallMirror.width / 2 &&
      this.y > this.y - this.imageSmallMirror.height / 2 &&
      this.y < this.y + this.imageSmallMirror.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (smallMirrorVisible) {
      push();
      tint(255, random(160, 250));
      image(this.imageSmallMirror, this.x, this.y, this.w, this.h);
      pop();
    }
  }

  // make the small mirror disapper when mouse clicked
  mousePressed() {
    if (this.checkOverlapSmallMirror(mouseX, mouseY)) {
      smallMirrorVisible = false;
      speakingMirrorVisible = true;
    }
  }
}
