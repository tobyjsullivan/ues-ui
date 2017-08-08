import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <div className="LoginForm">
      <p><input type="email" placeholder="email" /></p>
      <p><input type="password" placeholder="password" /></p>
      <p><Link to="/account"><button>Log In</button></Link></p>
    </div>
  );
};

export default LoginForm;
