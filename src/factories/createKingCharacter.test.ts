import { createKingCharacter, kingMessage } from "./factories";
import { type King, type Fighter } from "../types";

describe("Given the function createKingCharacter", () => {
  describe("When it receive the name Joffrey, the surname Baratheon, the age 14, and the years reigning 2", () => {
    test("Then it should return a 14 years old King called Joffrey Baratheon, who has been reignin for 2 years", () => {
      const name = "Joffrey";
      const lastName = "Baratheon";
      const age = 14;
      const yearsOfReign = 2;
      const message = kingMessage;
      const expectedKing: Omit<King, "die" | "speak"> = {
        name,
        lastName,
        age,
        yearsOfReign,
        isAlive: true,
        message,
      };

      const actualKing = createKingCharacter(name, lastName, age, yearsOfReign);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });

  describe("When it receive the name Joffrey, the surname Baratheon, the age 0, and the years reigning 0", () => {
    test("Then it should return a 0 years old King called Joffrey Baratheon, who has been reignin for 0 years", () => {
      const name = "Joffrey";
      const lastName = "Baratheon";
      const age = 0;
      const yearsOfReign = 0;
      const message = kingMessage;
      const expectedKing: Omit<King, "die" | "speak"> = {
        name,
        lastName,
        age,
        yearsOfReign,
        isAlive: true,
        message,
      };

      const actualKing = createKingCharacter(name, lastName, age, yearsOfReign);

      expect(actualKing).toMatchObject(expectedKing);
    });
  });
});
