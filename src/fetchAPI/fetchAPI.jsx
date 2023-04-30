import axios from 'axios';
const BASE_URL = 'https://644a281ea8370fb3214639fc.mockapi.io/api/v1/users';

axios.defaults.baseURL = BASE_URL;

export const getUsers = params => {
  return axios.get(params).then(({ data }) => {
    return data;
  });
};

export const setFollower = (id, followers) => {
  return axios.put(`${id}`, { followers }).then(({ data }) => {
    return data;
  });
};
