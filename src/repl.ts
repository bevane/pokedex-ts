import { createInterface } from 'node:readline';

export function cleanInput(input: string): string[] {
  const out = []
  for (const word of input.split(" ")) {
    const trimmedWord = word.trim().toLowerCase()
    trimmedWord ? out.push(trimmedWord) : undefined
  }
  return out
}

export function startREPL(): void {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
  });
  rl.prompt()
  rl.on("line", (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
      rl.prompt()
      return
    }
    console.log(`Your command was: ${words[0]}`)
    rl.prompt()
  })

}
