import { initState } from './state.js';

export function cleanInput(input: string): string[] {
  const out = []
  for (const word of input.split(" ")) {
    const trimmedWord = word.trim().toLowerCase()
    trimmedWord ? out.push(trimmedWord) : undefined
  }
  return out
}

export function startREPL() {
  const state = initState()
  state.rl.prompt()
  state.rl.on("line", async (input) => {
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
    try {
      await state.commands[words[0]].callback(state)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message)
      } else {
        console.log(err)
      }
    }
    state.rl.prompt()
  })
}

