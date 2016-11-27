import axios from 'axios';

class UserService {
  constructor () {
    this.axios = axios;
    this.apiDomain = `localhost:3000`;
  }
  
  createIndividual (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

  createCursillo (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

  createParish (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

  lookUpIndividual (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

  lookUpCursillo (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

  lookUpParish (payload) {
    const url = `http://${this.apiDomain}/`;
    return axios.get(url, { params: payload });
  }

}

export default UserService;
