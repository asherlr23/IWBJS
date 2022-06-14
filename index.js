import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Playerhitbox from "./Playerhitbox/Playerhitbox.js";
import Level from "./Level/Level.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Playerhitbox: new Playerhitbox({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
