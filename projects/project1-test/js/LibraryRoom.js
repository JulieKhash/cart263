class LibraryRoom {
  constructor(image) {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeW = 2600;
    this.sizeH = 1500;
    this.image = image;
    //this.imageColor = libraryColorImg;
  }

  update() {
    this.display();
  }

  // check if the mouse touches the small mirror
  checkOverlapBackground(x, y) {
    if (
      x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      x > this.y - this.image.height / 2 &&
      x < this.y + this.image.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    push();
    image(this.image, this.x, this.y, this.sizeW, this.sizeH);
    pop();
  }

  mousePressed() {
    if (
      this.checkOverlapBackground(mouseX, mouseY) &&
      !smallMirrorVisible &&
      speakingMirrorVisible
    ) {
      smallMirrorVisible = true;
      //speakingMirrorVisible = false;
    }
  }
}
