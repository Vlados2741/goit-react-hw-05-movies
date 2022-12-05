import { HeaderComponent } from 'components/header';
import { Search } from 'components/search';
import { useEffect, useState } from 'react';
import { Trends } from 'components/trends';
import { fetchFilmByName } from 'components/services/api';
import { useSearchParams } from 'react-router-dom';
import { Error } from 'components/Error';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchedFilm = async () => {
      if (!search) {
        return;
      }
      try {
        setLoading(true);
        const response = await fetchFilmByName(search);
        const result = response.results;
        if (response.total_pages === 0) {
          alert('No films!');
        }
        setMovies(result);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchSearchedFilm();
  }, [search]);

  const onSubmit = name => {
    setSearchParams({ search: name });
  };

  return (
    <div>
      <HeaderComponent />
      {loading && <h3>Loading...</h3>}
      <div className="movie-container">
        <Search onSubmit={onSubmit} />
        <Trends movies={movies} />
        {error && <Error />}
      </div>
    </div>
  );
};
export default Movies;
