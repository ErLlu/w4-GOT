import { type Character } from "../types.js";

export const createCharacterCard = (character: Character) => {
  const card = document.createElement("article");
  const characterTitle = document.createElement("h2");
  characterTitle.classList.add("character-title");

  const fullName = `${character.name} ${character.lastName}`;
  characterTitle.textContent = fullName;
  card.classList.add("character-card");

  const characterAge = document.createElement("p");
  characterAge.classList.add("character__age");
  characterAge.textContent = `Age: ${character.age} years`;

  const characterStatus = document.createElement("div");
  characterStatus.classList.add("character__status");
  characterStatus.textContent = "Status:";

  card.appendChild(characterTitle);
  card.appendChild(characterAge);
  card.appendChild(characterStatus);

  return card;
};
