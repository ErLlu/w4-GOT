import { getMainContainer } from "./mainContainer.js";
import { getHeader } from "./header.js";

export const renderGeneralLayout = (webTitle: string): void => {
  const rootElement = document.querySelector(".root");
  const mainContainer = getMainContainer();
  const header = getHeader();

  if (!mainContainer) {
    throw new Error("Element not found");
  }

  if (rootElement) {
    mainContainer.appendChild(header);
    rootElement.appendChild(mainContainer);
  }
};
