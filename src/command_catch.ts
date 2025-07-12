import { State } from './state.js'

export async function commandCatch(state: State, name: string) {
  if (!name) {
    console.log("Please enter name of area to explore")
    return
  }
  const pokemon = await state.api.fetchPokemon(name);
  console.log(`Throwing a Pokeball at ${name}...`)
  const baseExp = pokemon.base_experience
  const lowestBaseExp = 36

  const catchParam = Math.random() * baseExp
  if (catchParam <= lowestBaseExp - 1) {
    console.log(`Gotcha! ${name} was caught!`)
    state.pokedex[pokemon.name] = pokemon
  } else {
    console.log(`Oh no! ${name} got away!`)
  }
}
