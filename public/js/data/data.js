export const kingMessage = "Vais a morir todos";
export const fighterMessage = "Primero pego y luego pregunto";
export const adviserMessage = "No sé por qué, pero creo que voy a morir pronto";
export const squireMessage = "Soy un loser";
const createCharacter = (name, lastName, age) => ({
  name,
  lastName,
  age,
  isAlive: true,
});
export const createKingCharacter = (name, lastName, age, yearsOfReign) => ({
  name,
  lastName,
  age,
  isAlive: true,
  yearsOfReign,
  speak() {
    return kingMessage;
  },
  die() {
    this.isAlive = false;
  },
});
const joffreyBaratheon = createKingCharacter("Jofrrey", "Baratheon", 14, 2);
export const createFightCharacter = (character, weapon, skillLevel) => ({
  name: character.name,
  lastName: character.lastName,
  age: character.age,
  isAlive: true,
  weapon,
  message: fighterMessage,
  skillLevel,
  speak() {
    return fighterMessage;
  },
  die() {
    this.isAlive = false;
  },
});
//# sourceMappingURL=data.js.map
