import React from 'react';
import './LogoutButton.css';

const LoginButton = ({handleClick}) => {


  return (
    <div className="LoginButton" onClick={handleClick}>
         <h2>Sign In With Google</h2>   
    </div>
  )
}

export default LoginButton