import cache from '../src'
import { Driver } from '../src'
cache.setDriver(Driver.memory)

describe('storage-cache', () => {
  it('can save', () => {
    cache.remember('foo', 30, () => 1)
    expect(cache.driver.store.foo).toBe(1)
    expect(cache.remember('foo', 30, () => 1)).toBe(1)
  })
})
