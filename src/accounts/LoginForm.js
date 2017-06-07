import React from 'react';

function LoginForm(props) {
  return (
    <div className="LoginForm">
      <p><input type="email" placeholder="email" /></p>
      <p><input type="password" placeholder="password" /></p>
      <p><button>Log In</button></p>
    </div>
  );
}

export default LoginForm;
