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
    this.errorSound = true;
  }

  update() {
    this.mouseHover();
    this.move();
    this.display();
  }

  // jitter fast if the spider is found
    mouseHover(){
      if(this.overlap(mouseX, mouseY))
        this.speed = 5;
       else {
        this.speed = 0.3
      }
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

    // constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
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
    if(this.overlap(mouseX, mouseY) && this.errorSound) {
      errorSFX.play();
    }
  }
}
