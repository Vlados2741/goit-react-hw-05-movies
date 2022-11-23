import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { fetchFilm } from 'components/api';
import { Error } from 'components/Error';
import { HeaderComponent } from 'components/header';

export const MoviePage = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState('');
  const [genresList, setGenresList] = useState([]);

  const { id } = useParams();
  const location = useLocation();

  const castPage = location.pathname.includes('cast');
  const castLink = castPage ? `/movies/${id}` : `/movies/${id}/cast`;
  const reviewPage = location.pathname.includes('reviews');
  const reviewLink = reviewPage ? `/movies/${id}` : `/movies/${id}/reviews`;

  const imageURL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    const movieInfo = async () => {
      try {
        const info = await fetchFilm(id);
        const genres = info.genres.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ));
        setState(info);
        setGenresList(genres);
      } catch (error) {
        setError(error);
      }
    };
    movieInfo();
  }, [id]);

  return (
    <div>
      <HeaderComponent />
      <div>
        <button className="go-back-button">
          <NavLink to={location.state.from}>Go back</NavLink>
        </button>
      </div>

      {error && <Error />}
      {state && (
        <div>
          <div className="movie-card">
            <img
              className="movie-img"
              src={
                state.poster_path
                  ? `${imageURL}${state.poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
              }
              alt={state.tagline}
              width="200"
            />
            <ul className="movie-info">
              <li>
                <h3>
                  "{state.title ? state.title : state.name}"<span> | </span>
                  {state.release_date.substr(0, 4)}
                </h3>
              </li>
              <li className="user-score">
                User Score: {Math.round(state.vote_average * 10)} %
              </li>
              <li>Overview: {state.overview}</li>
              <li>
                <span className="genre-list">
                  <span className="genre-title">Genre: </span> {genresList}
                </span>
              </li>
            </ul>
          </div>
          <ul className="movie-more-info">
            <li>
              <NavLink to={castLink}>Actors</NavLink>
            </li>
            <li>
              <NavLink to={reviewLink}>Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};
export default MoviePage;
