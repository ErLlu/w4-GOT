import { getMainContainer } from "./mainContainer.js";
import { getHeader } from "./header.js";
import { type Character } from "../types.js";
import { getCardContainer } from "./cardContainer.js";

export const createMainContainer = () => {
  const mainContainer = document.createElement("div");

  mainContainer.classList.add("main-container");

  return mainContainer;
};

export const renderGeneralLayout = (
  heading: string,
  characters: Character[],
) => {
  const rootElement = document.querySelector(".root");
  const mainContainer = getMainContainer();
  const header = getHeader("Game Of Thrones");
  const caracterList = getCardContainer(characters);

  if (!mainContainer) {
    throw new Error("Element not found");
  }

  if (rootElement) {
    rootElement.appendChild(mainContainer);
    mainContainer.appendChild(header);
    mainContainer.appendChild(caracterList);
  }
};
