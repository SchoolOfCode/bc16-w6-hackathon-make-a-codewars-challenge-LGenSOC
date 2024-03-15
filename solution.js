function combinePokemonAndTypes(pokemon, types) {
  const combinedArray = [];

  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i] && types[i]) {
      combinedArray.push([pokemon[i], types[i]]);
    }
  }
  combinedArray.sort((a, b) => a[0].localeCompare(b[0])); // Sort based on the string in the first element

  return combinedArray;
}
