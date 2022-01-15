class Spider extends Insect {
  constructor(x, y, image) {
    super(x, y, image);

    this.detected = false;
    this.rotationSpeed = 0.20;
  }

  update() {
    super.update();

    if (this.detected) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed(){
    if(this.overlap(mouseX, mouseY)){
      this.detected = true;
      insectSFX.play();
    }
  }

}
