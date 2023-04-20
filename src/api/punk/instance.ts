import { AxiosInstance } from 'axios';

import { createInstance } from 'api/axios';

let apiInstance: AxiosInstance;

export function configureApiInstance() {
  apiInstance = createInstance(process.env.REACT_APP_PUNK_API_HOST);
}

export function getApiInstance() {
  return apiInstance;
}

configureApiInstance();
