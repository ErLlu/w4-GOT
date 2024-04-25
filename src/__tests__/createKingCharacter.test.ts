import { createKingCharacter } from "../data/data";
import { type King } from "../types";

describe("Given the function createKingCharacter", () => {
  describe("When it recives the name Joffrey, the surname Baratheon, the age 14, and the years reigning 2", () => {
    test("Then it should return a 14 years old King called Joffrey Baratheon, who has been reignin for 2 years", () => {
      const name = "Joffrey";
      const lastName = "Baratheon";
      const age = 14;
      const yearsOfReign = 2;
      const expectedKing: Omit<King, "die" | "speak"> = {
        name,
        lastName,
        age,
        yearsOfReign,
        isAlive: true,
      };

      const actualKing = createKingCharacter(name, lastName, age, yearsOfReign);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });
});
