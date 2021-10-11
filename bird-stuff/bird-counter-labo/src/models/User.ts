import Obeservations from "./Observations"

export enum GenderEnum {
  M = "m",
  V = "v",
}

export default interface User {
  uuid?: string
  name?: string
  locationOfResidence?: string
  age?: number
  gender?: GenderEnum
  registrationDate: Date
  observations: Obeservations[]
}
