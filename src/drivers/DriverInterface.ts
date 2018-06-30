export interface DriverInterface {
  store: any
  get(name: string): any
  set(name: string, value: any): any
}
