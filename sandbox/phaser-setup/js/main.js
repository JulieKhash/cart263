"use strict";

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 1000,
  physics: {
    default: `arcade`,
  },
  scene: [Boot, Play],
};

let game = new Phaser.Game(config);
