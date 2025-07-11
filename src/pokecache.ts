type CacheEntry<T> = {
  createdAt: number
  val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalID: NodeJS.Timeout | undefined = undefined
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval
    this.#startReapLoop()

  }

  add<T>(key: string, val: T) {
    const newEntry: CacheEntry<T> = {
      createdAt: Date.now(),
      val: val,
    }
    this.#cache.set(key, newEntry)
  }

  get<T>(key: string): T | undefined {
    return this.#cache.get(key)?.val
  }

  #reap() {
    for (const [key, entry] of this.#cache) {
      if (!entry) {
        continue
      }
      if (entry.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key)
      }
    }
  }

  #startReapLoop() {
    const intervalID = setInterval(() => this.#reap(), this.#interval)
    this.#reapIntervalID = intervalID
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalID)
    this.#reapIntervalID = undefined
  }
}
