import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './styles.css';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email:'',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedValue = value;

    // Validate phone number input to accept only Canadian numbers
    if (name === 'phoneNumber') {
      // Remove all characters except digits
      updatedValue = value.replace(/\D/g, '');
      // Ensure the number starts with '1' (country code for Canada)
      if (updatedValue.length > 0 && updatedValue[0] !== '1') {
        updatedValue = '1' + updatedValue;
      }
      // Limit the length to 11 characters (including country code)
      updatedValue = updatedValue.slice(0, 11);
    }

    // Update form data
    setFormData({
      ...formData,
      [name]: updatedValue
    });

    // Validate password confirmation
    if (name === 'confirmPassword') {
      if (updatedValue !== formData.password) {
        event.target.setCustomValidity("Passwords do not match");
      } else {
        event.target.setCustomValidity('');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(formData);
  };

  return (
    <div className='body-signup'>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        </div>
        <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' required />
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create Password" required />
        <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <input type="submit" value="Sign Up" />
        <p>Already have an account? <Link to="EventPlanner/login">Login here</Link></p> {/* Assuming "/login" is the route to your login page */}
      </form>
    </div>
  );
};

export default SignUp;
