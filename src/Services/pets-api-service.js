import config from '../config';

const PetsApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('No pets left for adoption');
        }
      })
      .then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  }
};

export default PetsApiService;
