import React from 'react'
import { Link } from 'react-router-dom';
import pic1 from '../images/think-professional.jpg'

const Register = () => {
  return (
    <div class="signup-container">
        <div class="signup-image">
          <img src={pic1} alt=" " />
        </div>
        <div class="signup-form">
            <h2>Sign Up</h2>
            <div class="form-group">
              <div class="name-group">
                <div class="input-group">
                  <label for="first-name">First Name</label>
                  <input type="text" id="first-name" placeholder="Enter your First Name" />
                </div>
                <div class="input-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="Enter Your Last Name" />
                </div>
              </div>
              <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter Your Password" />
              </div>
              <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm Your Password" />
              </div>
              <div class="input-group">
                <button type="submit">Register</button>
                <h4>Already have an account?{' '}<Link to="/login" style={{ color: 'blue' }}>Login</Link></h4>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Register
