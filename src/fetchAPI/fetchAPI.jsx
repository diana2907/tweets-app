import axios from 'axios';
const BASE_URL = 'https://644a281ea8370fb3214639fc.mockapi.io/api/v1/users';

axios.defaults.baseURL = BASE_URL;

export const getUsers = () => {
  return axios.get().then(({ data }) => {
    return data;
  });
};
