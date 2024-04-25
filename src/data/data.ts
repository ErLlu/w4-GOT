import type {
  Message,
  Fighter,
  King,
  Adviser,
  Squire,
  Character,
  Level,
} from "../types.js";

const kingMessage = "Vais a morir todos";

const createCharacter = (name: string, lastName: string, age: number) => ({
  name,
  lastName,
  age,
  isAlive: true,
});

export const createKingCharacter = (
  name: string,
  lastName: string,
  age: number,
  yearsOfReign: number,
): King => ({
  name,
  lastName,
  age,
  isAlive: true,
  yearsOfReign,
  speak(this: King) {
    return kingMessage;
  },
  die(this: King) {
    this.isAlive = false;
  },
});
