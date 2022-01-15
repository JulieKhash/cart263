class Insect {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.3;
    this.speedMin = 8;
    this.speedMax = 15;
    this.speedIncrease = 2;
    this.jitterness = 0.1;
    this.jitternessIncrease = 0.2;
    this.image = image;

    this.angle = 0;
    this.active = true;
    this.wiggling = false;
  }

  update() {
    this.mouseHover();
    this.wiggle();
    this.move();
    this.display();
  }

  moveRapid(){
   this.speed += this.speedIncrease;
   this.speed = constrain(this.speed, this.speedMin, this.speedMax);
   this.jitterness += this.jitternessIncrease;
   this.jitterness = constrain(this.jitterness, this.jitterness, this.jitternessIncrease);
  }

  // move butterflies away if mouse is over touch them
    mouseHover(){
      if(this.wiggling)
        this.speed = 5;
       else {
        this.wiggling = false;
      }
}

  wiggle(){
    if(this.overlap(mouseX, mouseY))
      this.wiggling = true;
     else {
      this.wiggling = false;
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
    if(this.overlap(mouseX, mouseY)) {
      errorSFX.play();
    }
  }
}
