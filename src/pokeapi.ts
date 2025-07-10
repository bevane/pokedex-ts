import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache

  constructor() {
    this.#cache = new Cache(30)
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullURL = pageURL ? pageURL : PokeAPI.baseURL + "/location-area?offset=0&limit=20"
    let data
    const cachedResp = this.#cache.get<ShallowLocations>(fullURL)
    if (cachedResp) {
      data = cachedResp
    } else {
      const resp = await fetch(fullURL)
      data = (await resp.json()) as ShallowLocations
      this.#cache.add<ShallowLocations>(fullURL, data)
    }
    return data
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullURL = PokeAPI.baseURL + "/location-area/" + locationName
    const resp = await fetch(fullURL)
    return (await resp.json()) as Location
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string
    url: string
  }>
}

export type Location = {
  encounter_method_rates: Array<{
    encounter_method: {
      name: string
      url: string
    }
    version_details: Array<{
      rate: number
      version: {
        name: string
        url: string
      }
    }>
  }>
  game_index: number
  id: number
  location: {
    name: string
    url: string
  }
  name: string
  names: Array<{
    language: {
      name: string
      url: string
    }
    name: string
  }>
  pokemon_encounters: Array<{
    pokemon: {
      name: string
      url: string
    }
    version_details: Array<{
      encounter_details: Array<{
        chance: number
        condition_values: Array<any>
        max_level: number
        method: {
          name: string
          url: string
        }
        min_level: number
      }>
      max_chance: number
      version: {
        name: string
        url: string
      }
    }>
  }>
}
