class Eclipse {
  constructor(imageBranchFrame, imageEclipse, imageGlass) {
    this.x = width / 2;
    this.y = height / 2;

    this.branchW = 1300;
    this.branchWH = 1300;

    this.imageBranchFrame = imageBranchFrame;

    this.moonW = 900;
    this.moonH = 506;
    this.imageEclipse = imageEclipse;

    this.angle = 0;
    this.imageGlass = imageGlass;
  }

  update() {
    this.display();
  }

  display() {
    // lunar eclipse
    // push();
    // // tint(255, 255);
    // image(this.imageEclipse, this.x, this.y - 150, this.moonW, this.moonH);
    // pop();

    // lunar eclipse
    push();
    //  tint(255, 120);
    this.angle += 0.002;
    translate(this.x, this.y - 150);
    rotate(this.angle);
    tint(150);
    image(this.imageGlass, 0, 0);
    pop();

    // tree
    push();
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }
}
