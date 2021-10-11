interface FoodProperties {
  description: string
  what: string
  where: string
}

export default interface Bird {
  id: string
  name: string
  image: string
  short: string
  recon: string[]
  food: FoodProperties
  see: string
}
