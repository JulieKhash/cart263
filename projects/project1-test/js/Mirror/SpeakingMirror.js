class SpeakingMirror {
  constructor(imageFrame, imageReflection) {
    this.x = width / 2; // position x
    this.y = height / 2; // position y
    this.w = 390; // width of the refelection
    this.h = 470; // height of the refelection

    this.frameOpacity = 200; // opacity of the mirror frame
    this.image = imageFrame;
    this.imageReflection = imageReflection;
  }

  update() {
    this.display();
    //  this.checkOverlapReflection(mouseX, mouseY);
  }

  // check if the mouse is over the inner reflection of the frame
  checkOverlapReflection(x, y) {
    if (
      this.x > this.x - this.imageReflection.width / 2 &&
      this.x < this.x + this.imageReflection.width / 2 &&
      this.y > this.y - this.imageReflection.height / 2 &&
      this.y < this.y + this.imageReflection.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  // displays a mirror frame and its reflection (flower, ripple)
  display() {
    if (speakingMirrorVisible) {
      push();
      image(this.imageReflection, this.x, this.y + 50, this.w, this.h);
      pop();

      push();
      tint(255, this.frameOpacity);
      image(this.image, this.x, this.y);
      pop();
    }
  }

  // play sounds only if the big mirror is visible, the state is library and if mouse is on a mirror
  mousePressed() {
    if (
      speakingMirrorVisible &&
      libraryColorScene &&
      this.checkOverlapReflection(mouseX, mouseY)
    ) {
      waterDropSFX.play();
    }
  }

  // mousePressed() {
  //   if (this.checkOverlapReflection(mouseX, mouseY)) {
  //     smallMirrorVisible = false;
  //   } else {
  //     smallMirrorVisible = true;
  //   }
  // }
}
