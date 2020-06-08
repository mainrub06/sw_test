import axios from "axios";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://swapi.dev/api/`,
    timeout: 5000,
    withCredentials: false,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
