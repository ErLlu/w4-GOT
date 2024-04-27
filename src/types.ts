export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Message =
  | "Vais a morir todos"
  | "Primero pego y luego pregunto"
  | "No sé por qué, pero creo que voy a morir pronto"
  | "Soy un loser";

export type CharacterWithoutMethods = Omit<
  Character,
  "speak" | "die" | "isAlive"
>;
export interface Character {
  name: string;
  lastName: string;
  age: number;
  isAlive: true | false;
  message: Message;
  speak: () => string;
  die: () => void;
}

export interface King extends Character {
  yearsOfReign: number;
}

export interface Fighter extends Character {
  message: Message;
  weapon: string;
  skillLevel: Level;
}

export interface Adviser extends Character {
  message: Message;
  characterWhomItAdvise: Squire | Fighter | King;
}

export interface Squire extends Character {
  message: Message;
  characterWhomItServes: Fighter;
  flatteryLevel: Level;
}
