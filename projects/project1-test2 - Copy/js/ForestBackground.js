class ForestBackground {
  constructor(imageForest) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 2000;
    this.h = 1240;

    this.imageForest = imageForest;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageForest, this.x, this.y, this.w, this.h);
    pop();
  }
}
