import { type Fighter, type King } from "../../types";
import {
  createFighterCharacter,
  createKingCharacter,
  fighterMessage,
  kingMessage,
} from "../../factories/factories";

const daenerysTargaryen: Fighter = createFighterCharacter(
  {
    name: "Daenerys",
    lastName: "Targaryen",
    age: 25,
    message: fighterMessage,
  },
  "Fire bow",
  9,
);

const jaimeLannister: Fighter = createFighterCharacter(
  {
    name: "Jaime",
    lastName: "Lannister",
    age: 34,
    message: fighterMessage,
  },
  "Sword",
  8,
);

const joffreyBaratheon: King = createKingCharacter(
  "Joffrey",
  "Baratheon",
  14,
  2,
);

export const characters = [joffreyBaratheon, jaimeLannister, daenerysTargaryen];
