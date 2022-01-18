class Spider extends Insect {
  constructor(x, y, image) {
    super(x, y, image);

    this.speed = 5;
    this.rotationSpeed = 0.20;
  }

  update() {
    super.update();

    if (spiderDetected) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed(){
    if(this.overlap(mouseX, mouseY)){
      spiderDetected = true;

    //  insectSFX.play();
    }
  }
}
