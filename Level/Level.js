/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("main-l1", "./Level/costumes/main-l1.svg", {
        x: 61.19308176248995,
        y: -13.859227084602765
      }),
      new Costume("spike", "./Level/costumes/spike.svg", {
        x: 10.835056835670002,
        y: 11.651294337019948
      }),
      new Costume("box", "./Level/costumes/box.svg", {
        x: 10.56295,
        y: 10.527780000000007
      })
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "SwapLevel" },
        this.whenIReceiveSwaplevel
      )
    ];
  }

  *whenIReceiveSwaplevel() {
    if (null) {
      this.effects.pixelate = 20;
      this.costume = this.stage.vars.loadlevel;
      if (this.costume.name == "box" || this.costume.name == "spike") {
        null;
      } else {
        null;
      }
    }
  }
}
