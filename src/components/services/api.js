const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = '79f5f6d0598b4877015b692900b7580b';

export const fetchTrends = async () => {
  const response = await fetch(
    `${BASE_URL}trending/all/day?api_key=${KEY_API}&language=en`
  );
  const trends = await response.json();
  return trends;
};

export const fetchFilm = async id => {
  const response = await fetch(
    `${BASE_URL}movie/${id}?api_key=${KEY_API}&language=en`
  );
  const films = await response.json();
  return films;
};

export const fetchFilmByName = async searchName => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${KEY_API}&language=en&page=1&include_adult=false&query=${searchName}`
  );
  const filmByName = await response.json();
  return filmByName;
};

export const fetchActors = async id => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY_API}&language=en`
  );
  const actors = await response.json();
  return actors;
};

export const fetchReviews = async id => {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY_API}&language=en&page=1`
  );
  const reviews = await response.json();
  return reviews;
};
