import cache from '../src'
import { Driver } from '../src'
cache.setDriver(Driver.memory)

describe('storage-cache', () => {
  afterEach(() => {
    cache.clear()
  })
  it('can save', async () => {
    await cache.remember('foo', 30, () => 1)
    expect(cache.driver.store.foo).toBe(1)
    expect(await cache.remember('foo', 30, () => 1)).toBe(1)
  })
  it('can save with promise', async () => {
    await cache.remember('bar', 30, async () => 1)
    expect(cache.driver.store.bar).toBe(1)
    expect(await cache.remember('bar', 30, async () => 1)).toBe(1)
  })
})
