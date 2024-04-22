export interface Character {
  name: string;
  lastname: string;
  age: number;
  status: boolean;
  alive: boolean;
  massage: string;
}

export interface King {
  name: string;
  lastname: string;
  age: number;
  status: boolean;
  alive: boolean;
  massage: string;
  yearsOfReign: number;
}

export interface Fighter {
  name: string;
  lastname: string;
  age: number;
  status: boolean;
  alive: boolean;
  massage: string;
  weapon: string;
  skill: number;
}

export interface Adviser {
  name: string;
  lastname: string;
  age: number;
  status: boolean;
  alive: boolean;
  massage: string;
  characterWhomAdvise: string;
}

export interface Squire {
  name: string;
  lastname: string;
  age: number;
  status: boolean;
  alive: boolean;
  massage: string;
  characterWhomServes: string;
  degreeOfFlattery: number;
}
