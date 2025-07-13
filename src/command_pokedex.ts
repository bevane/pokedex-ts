import { State } from "./state.js"

export async function commandPokedex(state: State) {
  if (Object.keys(state.pokedex).length === 0) {
    console.log("You have not caught any Pokemon")
    return
  }
  for (const pokemon of Object.values(state.pokedex)) {
    console.log(`- ${pokemon.name}`)
  }
}
