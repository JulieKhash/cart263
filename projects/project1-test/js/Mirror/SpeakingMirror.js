class SpeakingMirror {
  constructor(imageFrame, imageReflection) {
    this.x = width / 2; // position x
    this.y = height / 2; // position y
    this.w = 400; // width of the refelection
    this.h = 500; // height of the refelection

    this.frameOpacity = 200; // opacity of the mirror frame
    this.image = imageFrame;
    this.imageReflection = imageReflection;
    this.visible = false; // default false
  }

  update() {
    this.display();
    //  this.checkOverlapReflection(mouseX, mouseY);
  }

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

  // checkOverlapMirrorFrame(x, y) {
  //   if (
  //     this.x > this.x - this.image.width / 2 &&
  //     this.x < this.x + this.image.width / 2 &&
  //     this.y > this.y - this.image.height / 2 &&
  //     this.y < this.y + this.image.height / 2
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  display() {
    if (!this.visible) {
      push();
      image(this.imageReflection, this.x, this.y + 50, this.w, this.h);
      pop();

      push();
      tint(255, this.frameOpacity);
      image(this.image, this.x, this.y);
      pop();
    }
  }

  mousePressed() {
    if (this.checkOverlapReflection(mouseX, mouseY)) {
      this.smallVisible = false;
    } else {
      this.smallVisible = true;
    }
  }
}
