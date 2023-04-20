import { AxiosError } from 'axios';

export type ApiError = Readonly<{
  message?: string;
}> &
  AxiosError &
  Error;

export function getErrorMessage(error: ApiError) {
  if (error.response) {
    if (error.response.data) {
      if (typeof error.response.data === 'string') return error.response.data;
      return JSON.stringify(error.response.data);
    } else if (error.response.statusText) {
      return error.response.statusText;
    }
  }
  return error.message;
}
