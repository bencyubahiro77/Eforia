/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData(form.current);

    setIsSending(true);

    try {
      // Send the form data to the backend
      await axios.post(`${process.env.REACT_APP_BASE_URL}/contact`,formData);

      setIsSending(false);
      form.current.reset();
      showSuccessMessage();
    } catch (error) {
      console.error(error);
      setIsSending(false);
      showErrorMessage();
    }
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

    <div className='contact-sec-1'>
      <h2>Contact</h2>
      <p>WE WOULD LOVE TO HEAR FROM YOU</p>
    </div>

    <div className='home-sec-6'>
      <div className='home-sec-6-a'>

        <div className='home-sec-6-a-1'>
          <div className='home-sec-6-2'>
          <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className='home-sec-6-3'>
            <h4>Call Us</h4>
            <h4>(250) 781 486 001</h4>
          </div>
        </div>

        <div className='home-sec-6-a-1'>
        <div className='home-sec-6-2'>
          <FaMapMarkerAlt />
          </div>
          <div className='home-sec-6-3'>
            <h4>ADDRESS</h4>
            <h4> KK 6 Ave, Kigali</h4>
          </div>
        </div>

        <div className='home-sec-6-a-1'>
        <div className='home-sec-6-2'>
          < FaEnvelope />
          </div>
          <div className='home-sec-6-3'>
            <h4>EMAIL</h4>
            <h4>eforialtd1@gmail.com</h4>
          </div>
        </div>

      </div>
    </div>

    <div className="contact3">
      <h2>If you have any questions, Please let us know.</h2>
      <div className='contactor'>
      <form ref={form} onSubmit={handleSubmit}>
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

            <div className="submit-container">
              {!isSending ? (
                <input type="submit" value="Send" />
              ) : (
                <ScaleLoader color="#1f2328" loading={true} height={35} width={4} radius={2} margin={2} style={{alignItems:'center', display:'flex', justifyContent:'center'}} />
              )}
            </div>
        </form>
        <div>
        <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4535681576094!2d30.081713009493548!3d-1.9727649382640942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca752267b8627%3A0xbdc6b5e80e429041!2sEFORIA%20LTD!5e0!3m2!1sen!2srw!4v1686761697711!5m2!1sen!2srw"  
         style={{border:"0"}}
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"
         className='map'
         >
         </iframe>
       </div>
      </div>
    </div>
    </body>

  );
}

export default Contact;