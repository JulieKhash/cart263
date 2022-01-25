class TimeBar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 500;
    this.radiusMin = 0;
    this.radiusMax = 600;
    this.color = 200;
    this.alpha = 220;

    this.startAt = millis();
    this.timeLeft = 5000;

    this.active = true;
    this.timeOver = false;
  }

  update() {
    this.reduce();
    this.display();
    //    this.fillBar();
  }

  // timeOut(){
  //   if ()
  // }

  reduce() {
    this.radius--;
    this.radius = map(millis(), this.startAt, this.timeLeft, this.radiusMax, this.radiusMin);

    if (this.radius <= 0){
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
