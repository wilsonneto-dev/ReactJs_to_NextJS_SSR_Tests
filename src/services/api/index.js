import axios from 'axios';

export const servicesAPIs = {
  suggestions: "http://demo1589835.mockable.io/suggestions",
  channelVideos: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDokzfhBGfUkE_ezOsRlZdR0nOVuWRYYhc&channelId=UCl8MCsaxzWnm_D4izigpTeg&part=snippet,id&order=date&maxResults=3"
}

export const defaultConfigAPIs = {
  headers: {'Access-Control-Allow-Origin': '*'}
}

const api = axios.create();

export default api;