class Eclipse {
  constructor(imageBranchFrame, imageEclipse) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBranchFrame = imageBranchFrame;
    this.imageEclipse = imageEclipse;
  }

  update() {
    this.display();
  }

  display() {
    // lunar eclipse
    push();
    image(this.imageEclipse, this.x, this.y);
    pop();

    // branch frame
    push();
    image(this.imageBranchFrame, this.x, this.y);
    pop();
  }
}
