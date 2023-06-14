import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    const nameInput = form.current.elements.name;
    const emailInput = form.current.elements.email;
    const messageInput = form.current.elements.message;

    if (!nameInput.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else {
      errors.name = '';
    }

    if (!messageInput.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else {
      errors.message = '';
    }

    if (!emailInput.value.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      errors.email = 'Please provide a valid email';
      isValid = false;
    } else {
      errors.email = '';
    }

    setErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const showSuccessMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: 'Your message has been sent successfully!',
    });
  };

  const showErrorMessage = () => {
    Swal.fire({
      icon: 'error',
      title: 'Message Not Sent',
      text: 'An error occurred while sending the message. Please try again later.',
    });
  };

  const handleNameChange = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: '',
    }));
  };

  const handleEmailChange = () => {
    const emailInput = form.current.elements.email;
    const isValid = isValidEmail(emailInput.value.trim());
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? '' : 'Please provide a valid email',
    }));
  };

  const handleMessageChange = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: '',
    }));
  };

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
      <form ref={form} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleNameChange} required />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleEmailChange} required />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={handleMessageChange} required></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <input type="submit" value={isSending ? 'Sending...' : 'Send'} disabled={isSending} />
          </form>
      </div>
    </div>
    </body>

  );
}

export default Contact;