import { createInterface } from 'readline';
import { getCommands } from './commands.js';
import { initState } from './state.js';

export function cleanInput(input: string): string[] {
  const out = []
  for (const word of input.split(" ")) {
    const trimmedWord = word.trim().toLowerCase()
    trimmedWord ? out.push(trimmedWord) : undefined
  }
  return out
}

export function startREPL(): void {
  const state = initState()
  state.rl.prompt()
  state.rl.on("line", (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
      state.rl.prompt()
      return
    }
    if (!(words[0] in state.commands)) {
      console.log("Unknown command")
      state.rl.prompt()
      return
    }
    state.commands[words[0]].callback(state)
    state.rl.prompt()
  })
}

