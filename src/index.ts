import { characters } from "./characters/data/characters.js";
import { Character, type Characters } from "./types.js";
import { renderCharacterList, renderGeneralLayout } from "./ui/index.js";

renderGeneralLayout("Game of Thrones", characters);
renderCharacterList(characters);
