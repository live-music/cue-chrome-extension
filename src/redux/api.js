import axios from 'axios';

import { apiUrl } from '../baseUrl';

const api = axios.create({
  baseURL: apiUrl(),
  responseType: 'json',
  crossDomain: true
});

function setAuthToken(token) {
  axios.defaults.headers.common.Authorization = token;
}


exports.login = (user, password) => {
  return api.post('/api/users/login', { user, password })
  .then((res) => {
    setAuthToken(res.data.token);
    return res.data
  })
  .catch((err) => { throw err.response; });
}

exports.getStreams = () => {
  return api.get('/api/rooms/getRooms')
  .then((res) => res.data)
  .catch((err) => { throw err.response; });
}