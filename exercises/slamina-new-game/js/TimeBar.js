// a class for the Timer
// prepares a user to begin the game
// could be used for each guessing word, but needed time to figure that out

class TimeBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 500;
    this.radiusMin = 0;
    this.radiusMax = 600;
    this.color = 200;
    this.alpha = 150; // opacity

    this.startAt = millis(); // milliseconds from starting the program
    this.timeLeft = 7000; // timer lasting time

    this.active = true; // starts active
  }

  // updates the program
  update() {
    this.reduce();
    this.display();
  }

  // decreases the circle size according to millis()
  reduce() {
    this.radius--;
    this.radius = map(
      millis(),
      this.startAt,
      this.timeLeft,
      this.radiusMax,
      this.radiusMin
    ); // maps the millis() amount of time to the circle's radius

    if (this.radius <= 0) {
      this.active = false; // timer is off when the circle reaches 0 or less
    }
  }

  // displays the circle
  display() {
    if (this.active) {
      push();
      fill(this.color, this.alpha);
      ellipse(this.x, this.y, this.radius);
      pop();
    }
  }
}
