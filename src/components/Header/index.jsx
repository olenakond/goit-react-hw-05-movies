import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
