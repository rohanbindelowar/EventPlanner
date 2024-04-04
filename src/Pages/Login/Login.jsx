import React, { useState } from 'react';
import './styles.css';

export const Login = () => {
  const [userType, setUserType] = useState('user');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className='body-login'>
      <form action="/" method="POST" className='loginForm'>
        <div className='title'>
        <h2>Login</h2>
       <div className="selection">
       <label htmlFor="userType">Are you a:   </label>
        <select id="userType" name="userType" onChange={handleUserTypeChange}>
          <option value="user">User</option>
          <option value="eventPlanner">Event Planner</option>
          <option value="vendor">Vendor</option>
        </select>
       </div>
        </div>
        <div id="userCredentials" style={{ display: userType === 'user' ? 'block' : 'none' }}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div id="otherCredentials" style={{ display: userType !== 'user' ? 'block' : 'none' }}>
          <input type="text" name="idNumber" placeholder="ID Number" />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;