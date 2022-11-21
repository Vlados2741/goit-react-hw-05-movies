import { useNavigate } from 'react-router-dom';
import { Error } from 'components/Error';

const NotFound = () => {
  const navigate = useNavigate('/');
  const toHome = () => navigate('/');
  const toMovies = () => navigate('/movies');

  return (
    <div>
      <div>
        <button type="button" onClick={toHome}>
          Trends
        </button>
        <button type="button" onClick={toMovies}>
          Movies
        </button>
      </div>
      <Error />
    </div>
  );
};
export default NotFound;
