# MAKE A CODEWAR CHALLENGE

In this project I will create my own programming challenge, including unit tests, for other SOC course members to solve.

# THE CONCPET

I have brainstormed options using the Disney Ideation method. See link to the documentation below:

## Documentation

[Documentation](https://docs.google.com/presentation/d/1IupRT-EVtTvKoCTbPb4RrmXyWJdq7-MX16poszK1lbc/edit#slide=id.g2c2ddcf7578_0_0)

## The Challenge

The goal of your challenge is to write a CodeWars kata that:

Given two arrays, one containing a list of Pokemons and the other one containing their corresponding types, write a function that return one array where each element is itself an array of the two elements ["Pokemon", "Type"] sorted in ascending order.

If the two arrays are of different lenght the function should ingore the Pokemon/type combination for that index.

Example:

Given:

["Charmander", "Bulbasaur", "Squirtle", "Pikachu"], and ["Fire", "Grass", "Water", "Electric"]

your function should return:

[["Bulbasaur", "Grass"], ["Charmander", "Fire"], ["Pikachu", "Electric"], ["Squirtle", "Water"]].

Given:

["Charmander", "Bulbasaur", "Squirtle",], and ["Fire", "Grass", "Water", "Electric"]

your function should return:

[["Bulbasaur", "Grass"], ["Charmander", "Fire"], ["Squirtle", "Water"]].

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

function combinePokemonAndTypes(pokemon, types) {
// your plan here!
return combinedArray;
}
