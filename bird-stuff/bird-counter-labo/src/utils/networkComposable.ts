//composable

//global vars

const baseUrl = "http://localhost:3000"

const cashe = {}

//composable ITSELF

export const useNetwork = () => {
  //local stuff

  const get = (endpoint: string) =>
    fetch(`${baseUrl}/${endpoint}`).then(r => r.json())

  //make accessible

  return { get }
}
