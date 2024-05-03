import { getMainContainer } from "./mainContainer";
describe("Given the function getMainContainer", () => {
  describe("When its called", () => {
    test("Then it should return a 'main-container'", () => {
      const mainContainer = getMainContainer();

      const actualMainContainer = mainContainer.querySelector("div");

      expect(mainContainer.tagName).toBe("DIV");
      expect(mainContainer.classList.contains("main-container")).toBe(true);
    });
  });
});
