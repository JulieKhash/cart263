class Eclipse {
  constructor(imageBranchFrame, imageGlass, imageStillGlass) {
    this.x = width / 2;
    this.y = height / 2;

    this.branchW = 1300;
    this.branchWH = 1300;

    this.imageBranchFrame = imageBranchFrame;

    this.angle = 0;
    this.imageGlass = imageGlass;
    this.imageStillGlass = imageStillGlass;
  }

  update() {
    this.display();
  }

  display() {
    if (circleStill) {
      push();
      translate(this.x, this.y - 150);
      tint(100);
      image(this.imageStillGlass, 0, 0);
      pop();
    } else if (circleMoving) {
      push();
      this.angle += 0.002;
      translate(this.x, this.y - 150);
      rotate(this.angle);
      tint(255);
      image(this.imageGlass, 0, 0);
      pop();
    }
    // tree
    push();
    image(this.imageBranchFrame, this.x, this.y, this.branchW, this.branchWH);
    pop();
  }

  mousePressed() {
    circleMoving = true;
    circleStill = false;
    if (!churchBellSFX.isPlaying()) {
      churchBellSFX.loop();
      churchBellSFX.volume(0.001); // i think it's not working
    }
  }
}
