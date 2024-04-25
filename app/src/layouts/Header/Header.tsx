import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header>
    <div className="brand">
      <span>Maps</span>
    </div>
    <nav>
      <Link to="/parks">Parks</Link>
      <Link to="/">Monuments</Link>
      <Link to="/me">My Location</Link>
    </nav>
  </header>
);

export default Header;
