import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <body>
            <div className="contimg">
      <div className="contact2">
        <h1>Contact Us</h1>
      </div>
      <div className="contact1">
        <h3>Phone: 078888888</h3>
        <h3>Email: example@gmail.com</h3>
      </div>
    </div>

    <div className="contact3">
      <h2>If you have any questions, Please let us know.</h2>
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="name" name="name" required />

          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <Link to="/">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    </div>
    </body>

  );
}

export default Contact;