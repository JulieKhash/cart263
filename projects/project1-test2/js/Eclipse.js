class Eclipse {
  constructor(imageBranchFrame, imageEclipse) {
    this.x = width / 2;
    this.y = height / 2;

    this.branchW = 1300;
    this.branchWH = 1300;

    this.imageBranchFrame = imageBranchFrame;

    this.moonW = 1000;
    this.moonH = 562;
    this.imageEclipse = imageEclipse;
  }

  update() {
    this.display();
  }

  display() {
    // lunar eclipse
    push();
    image(this.imageEclipse, this.x, this.y - 100, this.moonW, this.moonH);
    pop();

    // branch frame
    push();
    tint(random(210, 255), 255);
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }
}
