import axios from 'axios';
const deployBackendURL = 'https://news-feed-app-me-backend.herokuapp.com';
export const axiosClient = axios.create({
  baseURL: `${deployBackendURL}/api`,
});
