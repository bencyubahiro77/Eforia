import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from '../images/gettyimages-1364964016.jpg';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ScaleLoader } from 'react-spinners';

function Contact() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsRegistering(true);
    const { email, password } = event.target.elements;

    try {
      const token = localStorage.getItem('token');
      if (token) {
        Swal.fire({
          icon: 'error',
          title: 'Already Logged In',
          text: 'You are already logged in.',
        }).then(() => {
          navigate('/'); // Redirect to the previous page
        });
      } else {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, {
          email: email.value,
          password: password.value,
        });

        if (response.status === 200) {
          const { token } = response.data;
          localStorage.setItem('token', token);
          navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Invalid credentials',
        text: 'Please enter valid email and password',
      }).then(() => {
        formRef.current.reset(); // Reset the form
      });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <body>
      <div className="Register">
        <div className="Rinfo">
          <h1>Welcome at EFORIA LTD</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="Password">Password:</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              {passwordVisible ? (
                <FiEyeOff className="eye-icon" onClick={togglePasswordVisibility} />
              ) : (
                <FiEye className="eye-icon" onClick={togglePasswordVisibility} />
              )}
            </div>
            <div className="submit-container">
              {!isRegistering ? (
                <input type="submit" value="Sign In" />
              ) : (
                <ScaleLoader color="#1f2328" loading={true} height={35} width={4} radius={2} margin={2} style={{alignItems:'center', display:'flex', justifyContent:'center'}} />
              )}
            </div>
          </form>
          <div className="already">
            {/* <h4>
              Don't have an account yet?<Link to="/register">Register</Link>
            </h4> */}
          </div>
        </div>
        <img src={pic1} alt=" " />
      </div>
    </body>
  );
}

export default Contact;
