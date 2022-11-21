import { NavLink } from 'react-router-dom';

export function Trends({ movies }) {
  const trendingItem = movies.map(({ id, title, name }) => {
    return (
      <li key={id}>
        <NavLink to={`/movies/${id}`}>
          <p>{title ? title : name}</p>
        </NavLink>
      </li>
    );
  });
  return <ul>{trendingItem}</ul>;
}
