import React from 'react';
import '../Login/Account.css';
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <Link to='/shop'>
      <button className="login-btn">Login</button>
      </Link>
    </div>
  );
};

export default Login;
