import { NavLink, useLocation } from 'react-router-dom';

export function Trends({ movies }) {
  const location = useLocation();
  const trendingItem = movies.map(({ id, title, name }) => {
    return (
      <li key={id}>
        <NavLink to={`/movies/${id}`} state={{ from: location }}>
          <p>{title ? title : name}</p>
        </NavLink>
      </li>
    );
  });
  return <ul>{trendingItem}</ul>;
}
