import type { Fighter, King, Adviser, Squire, Character } from "../types.js";

export const joffreyBaratheon: King = {
  name: "Joffrey",
  lastname: "Baratheon",
  age: 14,
  message: "Vais a morir todos",
  isAlive: true,
  yearsOfReign: 2,
  speak(this: King) {
    return this.message;
  },
  die(this: King) {
    this.isAlive = true;
  },
};

export const jaimeLannister: Fighter = {
  name: "Jaime",
  lastname: "Lannister",
  age: 34,
  message: "Primero pego y luego pregunto",
  isAlive: true,
  weapon: "Sword",
  skillLevel: 8,
  speak(this: Fighter) {
    return this.message;
  },
  die(this: Fighter) {
    this.isAlive = true;
  },
};

export const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  lastname: "Targaryen",
  age: 23,
  message: "Primero pego y luego pregunto",
  isAlive: true,
  weapon: "Sword",
  skillLevel: 9,
  speak(this: Fighter) {
    return this.message;
  },
  die(this: Fighter) {
    this.isAlive = true;
  },
};

export const tyronLannister: Adviser = {
  name: "Tyron",
  lastname: "Lannister",
  age: 27,
  message: "No sé por qué, pero creo que voy a morir pronto",
  isAlive: true,
  characterWhomItAdvise: daenerysTargaryen,
  speak(this: Fighter) {
    return this.message;
  },
  die(this: Fighter) {
    this.isAlive = true;
  },
};

export const bronn: Squire = {
  name: "Bronn",
  lastname: "",
  age: 32,
  isAlive: true,
  message: "Soy un loser",
  characterWhomItServes: jaimeLannister,
  flatteryLevel: 7,
  speak(this: Squire) {
    return this.message;
  },
  die(this: Squire) {
    this.isAlive = true;
  },
};

export const characters: Character[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyronLannister,
  bronn,
];

const createCharacter = (name: string, lastname: string, age: number) => ({
  name,
  lastname,
  age,
  isAlive: true,
});

const createKingCharacter = (
  yearsOfReign: number,
  speak: string,
  die: void,
) => ({
  yearsOfReign: 7,
  speak: "Vais a morir todos",
  die,
});
console.log(createKingCharacter);

const createFighterCharacter = (
  weapon: string,
  skillLevel: number,
  speak: string,
  die: void,
) => ({
  weapon,
  skillLevel,
  speak,
  die,
});

const createAdviserrCharacter = (
  characterWhomItAdvise: Fighter | King | Squire,
  speak: string,
  die: void,
) => ({
  characterWhomItAdvise,
  speak,
  die,
});
const createSquireCharacter = (
  characterWhomItServes: Fighter | King | Squire,
  flatteryLevel: number,
  speak: string,
  die: void,
) => ({
  characterWhomItServes,
  flatteryLevel,
  speak,
  die,
});
