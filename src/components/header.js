import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="header-items">
            <li>
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="navlink">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
