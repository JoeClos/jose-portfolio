import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navigation-bar'>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isTransitioning }) =>
              `${isActive ? 'active' : ''}  ${isTransitioning ? 'transitioning' : ''}`.trim()
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
