import axios, { CancelTokenSource } from 'axios';

export const getCancelToken = (cancelToken: CancelTokenSource) => {
  if (cancelToken) cancelToken.cancel('canceled');
  return axios.CancelToken.source();
};

export function createInstance(baseURL: string) {
  const instance = axios.create({
    validateStatus: (status) => status >= 200 && status < 400,
    baseURL,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return instance;
}
