import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (token) {
      // Redirect back to the previous page if token exists
      navigate.goBack();
    }
  };

  return (
    <>
      <footer>
        <div className="address">
         
          <h3> 23GM+VW4, KK 6 Ave, Kigali</h3>
          <h3>+(250) 781 486 001</h3>
          <h3> eforialtd1@gmail.com</h3>
        </div>
        <div>
          <ul className="menu1">
            <li>
              <Link to="#" className="menu-link">
                <FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="menu-link">
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="menu-link">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </Link>
            </li>
            {!token && (
              <li>
                <Link to="/login" className="menu-link" onClick={handleLoginClick}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </footer>
      <p className="Website__rights">&#169; Eforia 2023 All rights reserved.</p>
    </>
  );
}

export default Footer;
