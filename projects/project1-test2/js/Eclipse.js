class Eclipse {
  constructor(imageBranchFrame, imageEclipse) {
    this.x = width / 2;
    this.y = height / 2;

    this.branchW = 1300;
    this.branchWH = 1300;

    this.imageBranchFrame = imageBranchFrame;

    this.moonW = 900;
    this.moonH = 506;
    this.imageEclipse = imageEclipse;
  }

  update() {
    this.display();
  }

  display() {
    // lunar eclipse
    push();
    tint(255, 255);
    image(this.imageEclipse, this.x, this.y - 150);
    pop();

    // branch frame
    push();
    tint(255, 255);
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }
}
