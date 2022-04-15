class WineGlass {
  constructor(imageWineGlass) {
    this.x = width / 3 - 100;
    this.y = height / 3 - 20;

    this.imageWineGlass = imageWineGlass;
  }

  update() {
    this.display();
  }

  // mouseOver() {
  //   if (this.checkOverlapWine(mouseX, mouseY)) {
  //     push();
  //     image(this.imageWineGlassBright, this.x, this.y);
  //     pop();
  //   }
  // }

  // check if the mouse touches the small mirror
  checkOverlapWine(x, y) {
    if (
      x > this.x - this.imageWineGlass.width / 2 &&
      x < this.x + this.imageWineGlass.width / 2 &&
      x > this.y - this.imageWineGlass.height / 2 &&
      x < this.y + this.imageWineGlass.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    push();
    image(this.imageWineGlass, this.x, this.y);
    pop();
  }

  mousePressed() {
    if (this.checkOverlapWine(mouseX, mouseY)) {
      state = `main`;
    }
  }
}
