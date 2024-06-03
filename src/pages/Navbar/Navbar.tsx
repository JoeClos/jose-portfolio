import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './navbar.css';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <Icon
          icon="ion:infinite"
          width="2rem"
          height="2rem"
          style={{ color: '#B01038' }}
        />
        <p className="hero-name">Joe</p>
      </div>
      <div className='links'>
        <ul className="links-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'active' : ''}`.trim()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
