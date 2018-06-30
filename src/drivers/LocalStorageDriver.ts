import { DriverInterface } from './DriverInterface'

export default class LocalStorageDriver implements DriverInterface {
  store: any = {}

  get(name: string) {
    const item = localStorage.getItem(name)
    if (!item) {
      return null
    }
    return JSON.parse(item)
  }

  set(name: string, value: string) {
    localStorage.setItem(name, JSON.stringify(value))
  }
}
