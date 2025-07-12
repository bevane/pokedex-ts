import { createInterface, type Interface } from 'readline';
import { getCommands } from './commands.js';
import { PokeAPI, Pokemon } from './pokeapi.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>
}

export type State = {
  rl: Interface
  commands: Record<string, CLICommand>
  api: PokeAPI
  nextLocationsURL: string | null
  prevLocationsURL: string | null
  pokedex: Record<string, Pokemon>
}

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });
  const commands = getCommands()
  const api = new PokeAPI()
  return {
    rl,
    commands,
    api,
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {}
  }
}
