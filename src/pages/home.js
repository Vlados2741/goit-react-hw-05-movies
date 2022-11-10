// import { useState } from 'react';

const request =
  'https://api.themoviedb.org/3/trending/all/day?api_key=2994e3a31c3cad99fd99bf3fe61d916f';

export const Home = () => {
  // const [trendList, useTrendList] = useState('');

  const fetchMovies = async () => {
    const response = await fetch(request);
    // useTrendList(response);
    console.log(response);
  };
  fetchMovies();
  return <h1>Trending today</h1>;
};
