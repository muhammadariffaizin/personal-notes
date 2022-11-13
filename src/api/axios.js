import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://notes-api.dicoding.dev/v1',
});

export const isAxiosError = (error) => {
  if (error instanceof AxiosError) {
    return axios.isAxiosError(error);
  }
};
