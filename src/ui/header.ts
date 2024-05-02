const root = document.querySelector(".main-container");

export const getHeader = (titleText: string) => {
  const title = document.createElement("h1");
  const header = document.createElement("header");
  title.classList.add("main-title");

  title.textContent = titleText;
  header.appendChild(title);

  return header;
};
