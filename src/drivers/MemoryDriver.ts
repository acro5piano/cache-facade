import { DriverInterface } from './DriverInterface'

export default class MemoryDriver implements DriverInterface {
  store: any = {}

  get(name: string) {
    return this.store[name]
  }

  set(name: string, value: any) {
    this.store[name] = value
  }

  clear(name: string) {
    delete this.store[name]
  }
}
