import React from 'react';
import './Login.css';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contextApi/AuthContext';  // ✅ Import Auth Context

const Login = () => {
  const { user, login, logout } = useAuth();  // ✅ Get login state & functions
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log("Google sign in success", credentialResponse);
    login(credentialResponse); // ✅ Update global state
    navigate('/');
  };

  const handleError = () => {
    console.log("Google sign in Error");
  };

  return (
    <div className="login-container">
      <h2>{user ? `Welcome` : "Login"}</h2>
      <GoogleOAuthProvider clientId="335145155557-7p9jlieap1qu8pk685o8ot0ljevvlmmi.apps.googleusercontent.com" redirectUri="https://quick-cart-7eat.vercel.app/login">
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        )}
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
