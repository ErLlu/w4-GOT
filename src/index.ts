import { characters } from "./characters/data/characters.js";
import { Character, type Characters } from "./types.js";
import { renderGeneralLayout } from "./ui/index.js";

renderGeneralLayout("Game of Thrones", characters);

const response = await fetch("http://localhost:3000/characters", {});

const data = (await response.json()) as Characters;
console.log(data.characters);
