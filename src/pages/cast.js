import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from 'components/cast-list';
import { Error } from 'components/Error';
import { fetchActors } from 'components/api';

const Cast = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const actors = async () => {
      try {
        const movieActors = await fetchActors(id);
        setState(movieActors.cast);
      } catch (error) {
        setError(error);
      }
    };
    actors();
  }, [id]);

  return (
    <div>
      <h3 className='title'>Actors</h3>
      {state && <CastList cast={state} />}
      {error && <Error />}
    </div>
  );
};
export default Cast;
