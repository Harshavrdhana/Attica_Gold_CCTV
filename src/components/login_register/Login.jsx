import React from 'react';
import './login.css'
import logo from '../../assets/attica-gold-company-logo.jpg'
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  const [loginDet, setLoginDet] = React.useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDet((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  console.log(loginDet);

  return (
    <div className='login-section'>
      <div className='login'>
        <div className='login-logo'>
          <img src={logo} alt="" />
        </div>
        <div className='login-credential'>
          <div></div>
          <label htmlFor="username">User name</label>
          <input
            className='login-input'
            type="text"
            name="username"
            value={loginDet.username}
            onChange={handleChange}
          />
          <label htmlFor="password" className='label-password'>Password</label>
          <input
            className='login-input'
            type="password"
            name="password"
            value={loginDet.password}
            onChange={handleChange}
          />
        </div>
        <div className='login-button'>
          <div className='forget-password'>
            <a href="">Forget Password?</a>
          </div>
          <button type='submit'>Login</button>
          <p>No account yet? <Link to='/register'>Register</Link> one now</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
