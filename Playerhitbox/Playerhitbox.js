/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playerhitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "CharacterHitbox",
        "./Playerhitbox/costumes/CharacterHitbox.svg",
        { x: 26.30084499999998, y: 39.218530000000044 }
      ),
      new Costume("costume2", "./Playerhitbox/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Playerhitbox/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.playerSpeedX = 0;
    this.vars.playerSpeedY = 0;
  }

  *runPlatformingScripts() {
    // rex's codegolf scripts converted by hand
    for (
      let i = 0;
      i < 10 * this.keyPressed("right arrow") || this.keyPressed("left arrow");
      i++
    ) {
      // do something fun here
      this.x += this.keyPressed("right arrow") - 0.5;

      if (this.touching("Level") || this.touching("edge")) {
        this.x += 0.5 - this.keyPressed("right arrow");
        this.y += this.vars.yVelocity == 0;
        this.y += -2 * this.touching("Level");
      }
      this.vars.yVelocity +=
        this.vars.jump * 40 * this.keyPressed("up arrow") - 5;
      for (let i = 0; i < Math.Abs(this.vars.yVelocity); i++) {
        // do something fun here
        this.y += this.vars.yVelocity > 0 - 0.5;
        if (this.touching("Level") || this.touching("Level")) {
          this.y += 0.5 - this.vars.yVelocity > 0;
          this.vars.jump = this.vars.yVelocity < 0;
          this.vars.yVelocity = 0;
          return;
        }
        yield;
      }

      yield;
    }
  }

  *beginLevelid(levelnumber) {
    this.stage.vars.loadlevel = levelnumber;
    this.broadcast("SwapLevel");
    this.size = 30;

    while (true) {
      yield* this.runPlatformingScripts();
      yield;
    }
  }

  *whenGreenFlagClicked() {
    yield* this.beginLevelLid(1);
  }
}
