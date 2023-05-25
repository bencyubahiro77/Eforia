import React from 'react'
import { Link } from 'react-router-dom';
import pic2 from '../images/gettyimages-1364964016.jpg'

const Login = () => {
  return (
    <div class="signup-container">
    <div class="signup-image">
      <img src={pic2} alt=" " />
    </div>
    <div class="signup-form">
        <h2>Login</h2>
        <div class="form-group">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter Your Password" />
          </div>
          <div class="input-group">
            <button type="submit">Login</button>
            <h4>Doesn't have an account?{' '}<Link to="/register" style={{ color: 'blue' }}>Signup</Link></h4>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Login
