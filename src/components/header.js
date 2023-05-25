import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/ logo.png'

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/home">
          <img src={pic1} alt=" " />
            <h1>EFORIA LTD</h1>
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
