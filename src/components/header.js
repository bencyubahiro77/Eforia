import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="eforia-logo.png" alt="Eforia logo" />
            <h1>Eforia</h1>
          </Link>
        </div>
        <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${showMenu ? 'active' : ''}`}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="">Services</Link></li>
        </ul>
        <div className="contact">
          <Link to="/contact" className="button">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
