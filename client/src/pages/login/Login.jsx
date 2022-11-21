import React, { useContext, useState } from "react";
import Helmet from "../../components/Helmet/Helmet"
import './login.scss'
import logoweb from'../../assets/images/logoweb.png'
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login");
    await login({ email, password }, dispatch);
  };
  return (
    <Helmet title="Login">
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src= {logoweb}
              alt=""
            />
          </div>
        </div>
        <div className="container">
            <img
                  className="logo"
                  src= {logoweb}
                  alt=""
                />
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <input 
              type="email" 
              placeholder="Email or phone number" 
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
            <button 
              className="loginButton"
              disabled={isFetching}>
                Sign In
            </button>
            
            <span>
              New to Cinema? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default Login