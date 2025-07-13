import { State } from './state.js'

export async function commandInspect(state: State, name: string) {
  const pokemon = state.pokedex[name]
  if (!pokemon) {
    console.log("you have not caught that pokemon")
    return
  }

  let hp: number = 0;
  let attack: number = 0;
  let defense: number = 0;
  let specialAttack: number = 0;
  let specialDefense: number = 0;
  let speed: number = 0;
  let typesStr: string = "";

  for (const stat of pokemon.stats) {
    switch (stat.stat.name) {
      case "hp":
        hp = stat.base_stat;
        break;
      case "attack":
        attack = stat.base_stat;
        break;
      case "defense":
        defense = stat.base_stat;
        break;
      case "special-attack":
        specialAttack = stat.base_stat;
        break;
      case "special-defense":
        specialDefense = stat.base_stat;
        break;
      case "speed":
        speed = stat.base_stat;
        break;
    }
  }

  for (const pokemonType of pokemon.types) {
    typesStr += ` - ${pokemonType.type.name}\n`;
  }

  console.log(`Name: ${pokemon.name}
Height: ${pokemon.height}
Weight: ${pokemon.weight}
Stats:
  -hp: ${hp}
  -attack: ${attack}
  -defense: ${defense}
  -special-attack: ${specialAttack}
  -special-defense: ${specialDefense}
  -speed: ${speed}
Types:
${typesStr}`);
}
