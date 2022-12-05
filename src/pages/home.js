import { useState, useEffect } from 'react';
import { fetchTrends } from 'components/services/api';
import { Trends } from 'components/trends';
import { Error } from 'components/Error';
import { HeaderComponent } from 'components/header';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendFilms = async () => {
      try {
        setLoading(true);
        const response = await fetchTrends();
        const result = response.results;
        setMovies(result);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchTrendFilms();
  }, []);
  return (
    <div>
      <HeaderComponent />
      {loading && <h3>Loading...</h3>}
      <div className="homepage-container">
        <h1>Trends today</h1>
        <Trends movies={movies} />
        {error && <Error />}
      </div>
    </div>
  );
};

export default Home;
