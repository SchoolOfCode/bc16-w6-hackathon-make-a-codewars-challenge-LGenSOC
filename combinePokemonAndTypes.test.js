import { test, expect, it, describe } from "vitest";
import request from "supertest";
import combinePokemonAndTypes from "./combinePokemonAndTypes.js";

describe("combinePokemonAndTypes function", () => {
  it("should combine arrays when both pokemon and type are of the same length and no null elements", () => {
    const pokemon = ["Pikachu", "Charmander", "Squirtle"];
    const types = ["Electric", "Fire", "Water"];

    expect(combinePokemonAndTypes(pokemon, types)).toEqual([
      ["Charmander", "Fire"],
      ["Pikachu", "Electric"],
      ["Squirtle", "Water"],
    ]);
  });

  it("should handle arrays of different lengths", () => {
    const pokemon = ["Pikachu", "Charmander", "Squirtle"];
    const types = ["Electric", "Fire"];

    expect(combinePokemonAndTypes(pokemon, types)).toEqual([
      ["Charmander", "Fire"],
      ["Pikachu", "Electric"],
    ]);
  });

  it("should return an empty array if both input arrays are empy", () => {
    const pokemon = [];
    const types = [];

    expect(combinePokemonAndTypes(pokemon, types)).toEqual([]);
  });
});
