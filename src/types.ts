type LevelsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Character = {
  name: string;
  lastname: string;
  age: number;
  status: "alive" | "deceased";
};

type King = Character & {
  massage: "Vais a morir todos";
  yearsOfReign: number;
};

type Fighter = Character & {
  massage: "Primero pego y luego pregunto";
  weapon: string;
  skill: LevelsRange;
};

type Adviser = Character & {
  massage: "No sé por qué, pero creo que voy a morir pronto";
  characterWhomItAdvise: Character;
};

type Squire = Character & {
  massage: "Soy un loser";
  characterWhomItServes: Fighter;
  degreeOfFlattery: LevelsRange;
};
