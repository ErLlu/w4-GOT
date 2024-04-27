const root = document.querySelector(".root");

export const getHeader = (): HTMLElement => {
  const title = document.createElement("h1");

  title.textContent = "Game Of Thrones";
  const header = document.createElement("header");
  header.appendChild(title);

  return header;
};
