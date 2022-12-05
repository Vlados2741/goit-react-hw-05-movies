import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from 'components/movies/cast-list';
import { Error } from 'components/Error';
import { fetchActors } from 'components/services/api';

const Cast = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const actors = async () => {
      try {
        setLoading(true);
        const movieActors = await fetchActors(id);
        setState(movieActors.cast);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    actors();
  }, [id]);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      <h3 className="title">Actors</h3>
      {state && <CastList cast={state} />}
      {error && <Error />}
    </div>
  );
};
export default Cast;
