import { test, expect, it, describe } from "vitest";
import request from "supertest";
import combinePokemonAndTypes from "./main.js";

assert.deepEqual(combinePokemonAndTypes( [], []);
assert.deepEqual(combinePokemonAndTypes([["Charmander"], ["Fire"]]), ["Charmander", "Fire"]);
assert.deepEqual(
  combinePokemonAndTypes([
    ["Charmander", "Bulbasaur", "Squirtle", "Pikachu"],
    ["Fire", "Grass", "Water", "Electric"],
  ]),
  ["Charmander", "Fire"], ["Bulbasaur", "Grass"], ["Squirtle", "Water"],["Pikachu", "Electric"]]
);



