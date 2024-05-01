import { type Character } from "../types.js";
import { createCharacterCard } from "./characterCards.js";

export const getCardContainer = (characters: Character[]) => {
  const charactersList = document.createElement("ul");
  charactersList.classList.add("card-container");

  characters.forEach((character) => {
    const characterElement = document.createElement("li");
    characterElement.appendChild(createCharacterCard(character));
    charactersList.appendChild(characterElement);
  });

  return charactersList;
};
