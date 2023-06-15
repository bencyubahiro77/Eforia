import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import pic1 from '../images/ logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout
        localStorage.removeItem('token');
        Swal.fire({
          title: 'Logged out successfully!',
          icon: 'success',
        }).then(() => {
          navigate('/');
        });
      }
    });
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={pic1} alt=" " />
            <h1>EFORIA</h1>
          </Link>
        </div>
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
           <li>
            {
            <Link
              to="/"
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
            }
          </li>
          <li>
            <Link
              to="/blog"
              className={`link ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </li>
          {token && (
            <li>
              <div className="dropdown" ref={dropdownRef}>
                <span className="dropdown-toggle" onClick={toggleDropdown}>
                  Profile
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                  <li>
                    <Link
                      to="/dashboard/blog"
                      className="link"
                      onClick={() => {
                      handleMenuItemClick();
                      closeMenu();
                      }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create"
                      className="link"
                      onClick={() => {
                        handleMenuItemClick();
                        closeMenu();
                      }}
                    >
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="change-pass"
                      className="link"
                      onClick={() => {
                        handleMenuItemClick();
                        closeMenu();
                      }}
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className="link" onClick={handleLogout} style={{ cursor:'pointer'}}>
                    Logout
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
