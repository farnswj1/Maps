import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <header className="flex justify-between items-center px-4 py-0 h-[60px]">
    <div className="m-0">
      <span className="text-3xl font-bold">Maps</span>
    </div>
    <nav className="flex justify-end items-center gap-6">
      <Link to="/parks">Parks</Link>
      <Link to="/">Monuments</Link>
      <Link to="/me">My Location</Link>
    </nav>
  </header>
);

export default Header;
