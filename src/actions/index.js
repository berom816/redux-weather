import axios from 'axios';

const API_KEY = '524d26dfec71c4d181707879059c8d70';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type:FETCH_WEATHER,
    payload:request
  }
}
