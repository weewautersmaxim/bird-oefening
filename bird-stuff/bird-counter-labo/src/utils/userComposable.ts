import Obeservations from "../models/Observations"
import User, { GenderEnum } from "../models/User"

const mockUser: User = {
  uuid: "ge1242",
  name: "marty",
  locationOfResidence: "brussel",
  age: 49,
  gender: GenderEnum.M,
  registrationDate: new Date(),
  observations: [],
}

export const userComposable = () => {
  const getCurrentUser = () => mockUser
  const makeNewObservation = (o: Obeservations) => {
    mockUser.observations?.push(o)
  }

  return {
    getCurrentUser,
    makeNewObservation,
  }
}
