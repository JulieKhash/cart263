"use strict";

let config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 700,
  physics: {
    default: `arcade`,
  },
  scene: [Boot, Play],
};

let game = new Phaser.Game(config);
