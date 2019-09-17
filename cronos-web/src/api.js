import axios from 'axios';
// import {getCookie} from '../services/cookies'

export default axios.create({
  baseURL: `http://localhost:8080/api/`,
//   headers: {'x-access-token': getCookie('token').token}
});