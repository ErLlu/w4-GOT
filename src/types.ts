export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Character {
  name: string;
  lastname: string;
  age: number;
  isAlive: true | false;
  message: string;
  speak: () => string;
  die: () => void;
}

export interface King extends Character {
  yearsOfReign: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillLevel: Level;
}

export interface Adviser extends Character {
  characterWhomItAdvise: Squire | Fighter | King;
}

export interface Squire extends Character {
  characterWhomItServes: Fighter;
  flatteryLevel: Level;
}
