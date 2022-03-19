// defines boot class

// a phaser scene to handle preloading assets before switching to the play scene
class Boot extends Phaser.Scene {
  // sets the scene's key name
  constructor() {
    super({ key: `boot` });
  }

  preload() {
    // load assets
    this.load.image(`neutral-avatar`, `assets/images/encounter70.png`);
    this.load.image(`love`, `assets/images/heart.png`);
    this.load.image(`broken-heart`, `assets/images/broken.png`);

    // switch to the okay on complete
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {
    // could add a loading message here
  }

  update() {}
}
