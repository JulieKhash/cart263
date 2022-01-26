class TimeBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 500;
    this.radiusMin = 0;
    this.radiusMax = 600;
    this.color = 200;
    this.alpha = 150;

    this.startAt = millis();
    this.timeLeft = 7000; // the game lasts 8 secs

    this.active = false;
  }

  update() {
    this.reduce();
    this.display();
  }

  reduce() {
    this.radius--;
    this.radius = map(
      millis(),
      this.startAt,
      this.timeLeft,
      this.radiusMax,
      this.radiusMin
    );

    if (this.radius <= 0) {
      this.active = false;
    }
  }

  display() {
    if (this.active) {
      push();
      fill(this.color, this.alpha);
      ellipse(this.x, this.y, this.radius);
      pop();
    }
  }
}
