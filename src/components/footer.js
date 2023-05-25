import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer>
      <div className="address">
        <p>Our Cooking School features a long and proud history of more than 100 years<br />
          Founded at the end of the XIXth century.
        </p>
        <h3> KG 245 Gasabo,Rwanda</h3>
        <h3>+(250) 780000000</h3>
        <h3> example24@gmail.com</h3>
      </div>
      <div>
        <ul className="menu1">
          <li><Link to="#"><FontAwesomeIcon icon={faFacebook} />Facebook</Link></li>
          <li><Link to="#"><FontAwesomeIcon icon={faTwitter} />Twitter</Link></li>
          <li><Link to="#"><FontAwesomeIcon icon={faInstagram} />Instagram</Link></li>
          <li><Link to=""><FontAwesomeIcon icon={faUser} />Admin</Link></li>
        </ul>
      </div>
    </footer>
    <p class="Website__rights">&#169; Eforia 2023 All rights reserved.</p>
    </>
  );
}

export default Footer;
