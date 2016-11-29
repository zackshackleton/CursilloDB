import axios from 'axios';

class UserService {
  constructor () {
    this.axios = axios;
    this.apiDomain = `localhost:8000`;
  }
  
  createIndividual (payload) {
    const url = `http://${this.apiDomain}/addIndividual`;
    return axios.post(url, payload);
  }

  createCursillo (payload) {
    const url = `http://${this.apiDomain}/addCursillo`;
    return axios.post(url, payload);
  }

  createParish (payload) {
    const url = `http://${this.apiDomain}/addParish`;
    return axios.post(url, payload);
  }



  lookUpIndividual (payload) {
    const url = `http://${this.apiDomain}/getIndividuals`;
    return axios.post(url, payload);
  }

  lookUpCursillo (payload) {
    const url = `http://${this.apiDomain}/getCursillos`;
    return axios.post(url, payload);
  }

  lookUpParish (payload) {
    const url = `http://${this.apiDomain}/getParishs`;
    return axios.post(url, payload);
  }



  removeIndividual (payload) {
    const url = `http://${this.apiDomain}/removeIndividual`;
    return axios.post(url, payload);
  }

  removeCursillo (payload) {
    const url = `http://${this.apiDomain}/removeCursillo`;
    return axios.post(url, payload);
  }

  removeParish (payload) {
    const url = `http://${this.apiDomain}/removeParish`;
    return axios.post(url, payload);
  }

}

export default UserService;
