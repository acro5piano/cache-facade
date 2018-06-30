import MemoryDriver from './drivers/MemoryDriver'
import LocalStorageDriver from './drivers/LocalStorageDriver'
import { DriverInterface } from './drivers/DriverInterface'

export enum Driver {
  'memory',
  'localStorage',
}

class Cache {
  driver: DriverInterface = new LocalStorageDriver()

  async remember(name: string, minutes: number, alternate: () => any) {
    const saved = this.driver.get(name)
    if (saved) {
      return saved
    }
    const res = await Promise.resolve(alternate())
    this.driver.set(name, res)
    console.log(this.driver.get(name))
    return res
  }

  setDriver(driver: Driver) {
    switch (driver) {
      case Driver.memory:
        this.driver = new MemoryDriver()
        return
      case Driver.localStorage:
        this.driver = new LocalStorageDriver()
        return
    }
  }

  clear() {
    Object.keys(this.driver).forEach(key => {
      this.driver.clear(key)
    })
  }
}

export default new Cache()
