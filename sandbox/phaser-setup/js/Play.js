class Play extends Phaser.Scene {
  constructor() {
    super({ key: `play` });
  }

  create() {
    let style = {
      fontFamily: "sans-serif",
      fontSize: 74,
      color: "#00ff00",
    };
    let gameDescription = "Makaaka Game!";
    this.add.text(300, 100, gameDescription, style);
  }

  update() {}
}
