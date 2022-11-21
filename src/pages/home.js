import { useState, useEffect } from 'react';
import { fetchTrends } from 'components/api';
import { Trends } from 'components/trends';
import { Error } from 'components/Error';
import { HeaderComponent } from 'components/header';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchTrendFilms = async () => {
      try {
        const response = await fetchTrends();
        const result = response.results;
        setMovies(result);
        // console.log(movies);
      } catch (error) {
        setError(error);
      }
    };
    fetchTrendFilms();
  }, []);
  return (
    <div>
      <HeaderComponent />
      <div className="homepage-container">
        <h1>Trends today</h1>
        <Trends movies={movies} />
        {error && <Error />}
      </div>
    </div>
  );
};

export default Home;
