const root = document.querySelector(".main-container");

export const getHeader = (titleText: string) => {
  const heading = document.createElement("h1");
  const header = document.createElement("header");
  heading.classList.add("main-title");

  heading.textContent = titleText;
  header.appendChild(heading);

  return header;
};
