class Insect {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.3;
    this.jitterness = 0.1;
    this.image = image;

    this.angle = 0;
  }

  update() {
    this.move();
    this.display();
  }

  move() {
    // check if we need to change direction
    let r = random(0, 1);
    if (r < this.jitterness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    // move position with velocity
    this.x += this.vx;
    this.y += this.vy;
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  overlap(x, y) {
    if (x > this.x - this.image.width / 2 &&
        x < this.x + this.image.width / 2 &&
        y > this.y - this.image.height / 2 &&
        y < this.y + this.image.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  mousePressed(){
    if(this.overlap(mouseX, mouseY)) {
      errorSFX.play();
    }
  }
}
