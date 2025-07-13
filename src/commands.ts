import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap, commandMapBack } from './command_map.js';
import { commandExplore } from './command_explore.js';
import { CLICommand } from './state.js';
import { commandCatch } from './command_catch.js';
import { commandInspect } from './command_inspect.js';
import { commandPokedex } from './command_pokedex.js';


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Go to next locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Go to previous locations",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "See list of all Pokemon in a given area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "See all caught pokemon",
      callback: commandPokedex,
    },
  }
}
