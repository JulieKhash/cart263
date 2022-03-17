// loading scene
class Boot extends Phaser.Scene {
  constructor() {
    super({ key: `boot` });
  }

  create() {
    let style = {
      fontFamily: "sans-serif",
      fontSize: 74,
      color: "#00ff00",
    };
    let loadingString = "Loading...";
    this.add.text(100, 100, loadingString, style);

    this.scene.start(`play`);
  }

  update() {}
}
