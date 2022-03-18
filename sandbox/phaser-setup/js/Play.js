class Play extends Phaser.Scene {
  constructor() {
    super({ key: `play` });
  }

  create() {
    // make a group of walls
    this.walls = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 40,
    });
    this.walls.children.each(function (wall) {
      // generate a random number of x,y based on a canvas size
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      wall.setPosition(x, y);
      wall.setTint(0x40e0d0);
    }, this);

    // make a group of walls
    this.collectables = this.physics.add.group({
      key: `wall`,
      quantity: 40,
    });
    this.collectables.children.each(function (collectable) {
      // generate a random number of x,y based on a canvas size
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      collectable.setPosition(x, y);
      collectable.setTint(0xffbf00);
    }, this);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    // this.avatar.setVelocityX(100);
    this.avatar.play(`avatar-moving`);
    this.avatar.setCollideWorldBounds(true); //collides to the edge of the canvas and stops

    this.physics.add.collider(this.avatar, this.walls);
    this.physics.add.overlap(
      this.avatar,
      this.collectables,
      this.collectItem,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  collectItem(avatar, collectable) {
    collectable.destroy();
  }

  createAnimations() {
    this.anims.create({
      key: `avatar-moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 5,
      }),
      frameRate: 24,
      repeat: -1, // move infinetely
    });

    this.anims.create({
      key: `avatar-idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 0,
      }),
      frameRate: 24,
      repeat: 0, // move infinetely
    });
  }
  update() {
    this.avatar.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    }

    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(300);
    }

    // if avatar is moving along x/y axis than show the moving avatar
    if (
      this.avatar.body.velocity.x !== 0 ||
      this.avatar.body.velocity.y !== 0
    ) {
      this.avatar.play(`avatar-moving`, true);
    } else {
      this.avatar.play(`avatar-idle`, true);
    }
  }
}
