import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const HeaderComponent = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navlink">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
