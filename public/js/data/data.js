export const joffreyBaratheon = {
  name: "Joffrey",
  lastname: "Baratheon",
  age: 14,
  message: "Vais a morir todos",
  isAlive: true,
  yearsOfReign: 2,
  speak: () => joffreyBaratheon.message,
  die: () => joffreyBaratheon.isAlive,
};
export const jaimeLannister = {
  name: "Jaime",
  lastname: "Lannister",
  age: 34,
  message: "Primero pego y luego pregunto",
  isAlive: true,
  weapon: "Sword",
  skill: 8,
  speak: () => jaimeLannister.message,
  die: () => jaimeLannister.isAlive,
};
export const daenerysTargaryen = {
  name: "Daenerys",
  lastname: "Targaryen",
  age: 23,
  message: "Primero pego y luego pregunto",
  isAlive: true,
  weapon: "Sword",
  skill: 9,
  speak: () => daenerysTargaryen.message,
  die() {
    daenerysTargaryen.isAlive = true;
  },
};
export const tyronLannister = {
  name: "Tyron",
  lastname: "Lannister",
  age: 27,
  message: "No sé por qué, pero creo que voy a morir pronto",
  isAlive: true,
  characterWhomItAdvise: daenerysTargaryen,
  speak: () => tyronLannister.message,
  die: () => tyronLannister.isAlive,
};
export const bronn = {
  name: "Bronn",
  lastname: "",
  age: 32,
  isAlive: true,
  message: "Soy un loser",
  characterWhomItServes: jaimeLannister,
  flattery: 7,
  speak: () => bronn.message,
  die() {
    bronn.isAlive = true;
  },
};
export const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyronLannister,
  bronn,
];
//# sourceMappingURL=data.js.map
