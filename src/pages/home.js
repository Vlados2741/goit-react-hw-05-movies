// import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// const request =
//   'https://api.themoviedb.org/3/trending/all/day?api_key=2994e3a31c3cad99fd99bf3fe61d916f';

export const Home = async () => {
  // const [trendList, useTrendList] = useState('');

  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=2994e3a31c3cad99fd99bf3fe61d916f&language=en-US`
  );
  // useTrendList(response);
  const result = response.data.results;

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {result.map(({ title }) => (
          <NavLink to="/film">{title}</NavLink>
        ))}
      </ul>
    </div>
  );
};
