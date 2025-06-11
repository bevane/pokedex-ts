export function cleanInput(input: string): string[] {
  const out = []
  for (const word of input.split(" ")) {
    const trimmedWord = word.trim()
    trimmedWord ? out.push(trimmedWord) : undefined
  }
  return out
}
