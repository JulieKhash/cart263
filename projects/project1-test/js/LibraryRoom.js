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

  display() {
    push();
    image(this.image, this.x, this.y, this.sizeW, this.sizeH);
    pop();
  }
}
