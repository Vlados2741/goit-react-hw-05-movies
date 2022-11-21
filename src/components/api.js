import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = '79f5f6d0598b4877015b692900b7580b';

export const fetchTrends = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY_API}&language=en`
  );
  return response.data;
};

export const fetchFilm = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY_API}&language=en`
  );
  return response.data;
};

export const fetchFilmByName = async searchName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&language=en&page=1&include_adult=false&query=${searchName}`
  );
  return response.data;
};

export const fetchActors = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY_API}&language=en`
  );
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY_API}&language=en&page=1`
  );
  return response.data;
};
