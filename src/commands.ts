import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap, commandMapBack } from './command_map.js';
import { CLICommand } from './state.js';


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
  }
}
