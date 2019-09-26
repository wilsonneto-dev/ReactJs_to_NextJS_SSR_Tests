import axios from 'axios';

export const servicesAPIs = {
  suggestions: "http://demo1589835.mockable.io/suggestions"
}

export const defaultConfigAPIs = {
  headers: {'Access-Control-Allow-Origin': '*'}
}

const api = axios.create();

export default api;