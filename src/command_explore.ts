import { State } from './state.js'

export async function commandExplore(state: State, name: string) {
  if (!name) {
    console.log("Please enter name of area to explore")
    return
  }
  const location = await state.api.fetchLocation(name);
  console.log(`Exploring ${name}...`)
  console.log("Found Pokemon:")

  for (const encounter of location.pokemon_encounters) {
    console.log(encounter.pokemon.name)
  }
}
