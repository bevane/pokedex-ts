import { State } from './state.js'

export async function commandMap(state: State) {
  const locations = await state.api.fetchLocations(state.nextLocationsURL ?? undefined)
  state.nextLocationsURL = locations.next
  state.prevLocationsURL = locations.previous
  for (const location of locations.results) {
    console.log(location.name)
  }
}


export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page")
    return
  }
  const locations = await state.api.fetchLocations(state.prevLocationsURL)
  state.nextLocationsURL = locations.next
  state.prevLocationsURL = locations.previous
  for (const location of locations.results) {
    console.log(location.name)
  }
}
