class TimeBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 600;
    this.color = 200;
    this.alpha = 220;

    this.startAt = millis();
    this.timeLeft = 5000;

    this.active = true;
  }

  update() {
    this.reduce();
    this.display();
    //    this.fillBar();
  }

  reduce() {
    this.radius--;
    this.radius = constrain(this.radius, 600, 0);
    this.radius = map(millis(), this.startAt, this.timeLeft, 600, 0);
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
