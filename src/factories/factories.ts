import type {
  Fighter,
  King,
  Adviser,
  Squire,
  Character,
  Level,
  CharacterWithoutMethods,
} from "../types.js";

export const kingMessage = "Vais a morir todos";
export const fighterMessage = "Primero pego y luego pregunto";
export const adviserMessage = "No sé por qué, pero creo que voy a morir pronto";
export const squireMessage = "Soy un loser";

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
  message: kingMessage,
  speak(this: King) {
    return kingMessage;
  },
  die(this: King) {
    this.isAlive = false;
  },
});

const joffreyBaratheon: King = createKingCharacter(
  "Jofrrey",
  "Baratheon",
  14,
  2,
);

export const createFighterCharacter = (
  character: CharacterWithoutMethods,
  weapon: string,
  skillLevel: Level,
): Fighter => ({
  name: character.name,
  lastName: character.lastName,
  age: character.age,
  isAlive: true,
  weapon,
  message: fighterMessage,
  skillLevel,
  speak(this: Fighter) {
    return fighterMessage;
  },
  die(this: Fighter) {
    this.isAlive = false;
  },
});
