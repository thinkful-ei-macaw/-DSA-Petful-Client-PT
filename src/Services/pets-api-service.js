import config from '../config'

const PetsApiService = {
  getPets() {
    return fetch (`${config.API_ENDPOINT}/pets`, {
      headers: {
      
      },
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
  },
}

export default PetsApiService