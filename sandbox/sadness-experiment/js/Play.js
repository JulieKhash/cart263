// The play scene that drives overall game. Create sprites (avatars), hearts, and brokenhearts
// Adds keybord controls for the avatar. Adds collisions, and overlaps to handle physcis

class Play extends Phaser.Scene {
  // sets the scene's name
  constructor() {
    super({ key: `play` });
  }

  create() {
    // physics for the avatar and make it collide with the wall
    this.avatar = this.physics.add.sprite(200, 200, `neutral-avatar`);
    this.avatar.setCollideWorldBounds(true);

    // assign a random position
    // let x = Math.random() * this.sys.canvas.width;
    // let y = Math.random() * this.sys.canvas.height;
    this.brokenheart = this.physics.add.sprite(0, 0, `broken-heart`);
    // another way to assign brokenheart in a random position
    Phaser.Actions.RandomRectangle(
      [this.brokenheart],
      this.physics.world.bounds
    );

    // create a group of hearts with some basic physics configs
    this.love = this.physics.add.group({
      // image to use
      key: `love`,
      // how many
      quantity: 100,
      // how much to bounce when hit smth
      bounceX: 0.5,
      bounceY: 0.5,
      // collide with the walls
      setCollideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    // Position all the members of the group randomly within a rectangle the same
    // dimensions and position as the world's bounds (e.g. the canvas)
    Phaser.Actions.RandomRectangle(
      this.love.getChildren(),
      this.physics.world.bounds
    );

    // Listen for when the avatar overlaps the thumbs up and handle it,
    // remembering to set "this" so that we can use "this" in the method it calls
    this.physics.add.overlap(
      this.avatar,
      this.brokenheart,
      this.getBroken,
      null,
      this
    );
    // Add colliders between the avatar and the happiness, and the happiness and itself
    // so that we get lots of fun bouncy physics for free!
    this.physics.add.collider(this.avatar, this.love);
    this.physics.add.collider(this.love, this.love); // hearts collide with each other
    this.physics.add.collider(this.brokenheart, this.love); // hearts and brokenheart collide

    // add keybord control
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  getBroken(avatar, brokenheart) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.brokenheart.setPosition(x, y);
  }

  // listens to the user's input
  update() {
    this.handleInput();
  }

  handleInput() {
    // If either left or right is pressed, rotate appropriately
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    } else {
      // Otherwise stop rotating
      this.avatar.setAngularVelocity(0);
    }
    // If the up key is pressed, accelerate in the current rotation direction
    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.avatar.rotation,
        400,
        this.avatar.body.acceleration
      );
    } else {
      // Otherwise, zero the acceleration
      this.avatar.setAcceleration(0);
    }
  }
}
