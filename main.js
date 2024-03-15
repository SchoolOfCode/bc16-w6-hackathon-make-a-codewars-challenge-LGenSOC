function combinePokemonAndTypes(pokemon, types) {
  const combinedArray = [];

  for (let i = 0; i < pokemon.length; i++) {
    if (types[i]) {
      combinedArray.push([pokemon[i], types[i]]);
    }
  }

  return combinedArray;
}

export default combinePokemonAndTypes;
