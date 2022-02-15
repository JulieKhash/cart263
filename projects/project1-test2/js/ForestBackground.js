// a class for the background image (shows a forest)
class ForestBackground {
  constructor(imageForest) {
    this.x = width / 2; // x-coor
    this.y = height / 2; // y-cord
    this.w = 2000; // width
    this.h = 1240; // height

    this.imageForest = imageForest;
  }

  // updates the bg
  update() {
    this.display();
  }

  // displays an image background
  display() {
    push();
    image(this.imageForest, this.x, this.y, this.w, this.h);
    pop();
  }
}
