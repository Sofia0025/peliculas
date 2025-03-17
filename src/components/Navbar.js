import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/search/popular">Populares</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
