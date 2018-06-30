import { DriverInterface } from './DriverInterface'

export default class LocalStorageDriver implements DriverInterface {
  store: any = {}

  get(name: string) {
    return JSON.stringify(localStorage.getItem(name))
  }

  set(name: string, value: string) {
    return JSON.stringify(localStorage.setItem(name, value))
  }
}
