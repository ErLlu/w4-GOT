import { getHeader } from "./header";
describe("Given the function getHeader", () => {
  describe("When its called", () => {
    test("Then it should return a title Game Of Thrones in a header", () => {
      const header = getHeader();

      const title = header.querySelector("h1");

      expect(title).not.toBeNull();
      expect(title?.textContent).toBe("Game Of Thrones");
    });
  });
});
