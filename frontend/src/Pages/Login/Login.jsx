import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [userType, setUserType] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userType, email, password })
      });
      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login successful:', data);
        // Redirect to the home page
        window.location.href = '/EventPlanner';
      } else {
        // Login failed
        console.error('Error logging in:', data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='body-login'>
      <form onSubmit={handleSubmit} className='loginForm'>
        <div className='title'>
          <h2>Login</h2>
        </div>
        <div id="userCredentials" style={{ display: userType === 'user' ? 'block' : 'none' }}>
          <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Email"  />
          <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Password"  />
        </div>
        
        {error && <div className="error-message" style={{ background:"gray",color:"red", textAlign:"center", margin:"3px 0", padding:"5px"}}>{error}</div>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
