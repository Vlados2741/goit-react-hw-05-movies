import { useState } from 'react';

const request =
  'https://api.themoviedb.org/3/trending/all/day?api_key=79f5f6d0598b4877015b692900b7580b';

export const Home = () => {
  const [trendList, useTrendList] = useState('');

  const fetchMovies = async () => {
    const response = await fetch(request);
    useTrendList(response);
    console.log(trendList);
  };
  // fetchMovies();
  return <h1>Trending today</h1>;
};
