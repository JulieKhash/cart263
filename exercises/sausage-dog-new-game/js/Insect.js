// a parent class for Insect (butterfy) includes body of the constructor
//and its functionality

class Insect {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.3; // a default speed (floating)
    this.speedMin = 8;
    this.speedMax = 15;
    this.speedIncrease = 2;
    this.jitterness = 0.1;
    this.jitternessIncrease = 0.2;
    this.image = image;

    this.angle = 0;
    this.wiggling = false; // initially a wiggling reaction is set to false to control the behaviour
  }

// includes all the insect behaviour functions like floating, wiggling, moving rapid etc.
  update() {
    if (!spiderDetected) {
      this.wiggle(); // floats and wiggles if the spider isn't found
    } else {
      this.speed = 0.3; // changes back thr speed to the original value
      this.moveRapid();
    }
    this.isMouseOver();
    this.move();
    this.display();
  }

// makes a butterfy more jiterry (makes chaotic)
  moveRapid() {
    this.speed += this.speedIncrease;
    this.speed = constrain(this.speed, this.speedMin, this.speedMax);
    this.jitterness += this.jitternessIncrease;
    this.jitterness = constrain(this.jitterness, this.jitterness, this.jitternessIncrease);
  }

// wiggle the insect if the mouse is over it (movement is reactive to a mouse)
  wiggle() {
    if (this.mouseOver && !this.wiggling) {
      this.wiggling = true; // true if the mouse is over it
      this.speed = 5; // change the speed of wiggling
    } else {
      this.wiggling = false;
      this.speed = 0.3;  // change the speed back to default when mouse is removed
    }
  }

// check if the mouse ia over a insect
  isMouseOver() {
    if (this.overlap(mouseX, mouseY))
     this.mouseOver = true;
    else {
      this.mouseOver = false;
    }
  }

  // a default move of the insects, gives a flaoting impression
  move() {
    // check if we need to change their moving direction
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

  // display the insects
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  // check if the mouse is inside the insect
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

  // makes an error like sound(hoo-hoo) when the mouse clicks on it
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      errorSFX.play();
    }
  }
}
