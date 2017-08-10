import React from 'react';
import {Link} from 'react-router-dom';

const ConfirmEmailNotice = (props) => {
  return (
    <div>
      <p>Please click the link in the email we sent you to confirm your account.</p>
      <p>Already did? <Link to="/login">Sign in here</Link></p>
    </div>
  );
};

export default ConfirmEmailNotice;
