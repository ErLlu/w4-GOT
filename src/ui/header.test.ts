import { getHeader } from "./header";
describe("Given the function getHeader", () => {
  describe("When its called", () => {
    test("Then it should return a title Game Of Thrones in a heading", () => {
      const header = getHeader("heading");

      const title = header.querySelector("h1");
      title?.classList.add("main-title");

      expect(title).not.toBeNull();
      expect(title?.textContent).toBe("heading");
    });
  });
});
