import React, { useEffect, useState } from 'react';
import { getRegister } from '../../api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const [getRes, setRes] = useState("")
  const handleSubmit = e => {
    e.preventDefault();
    getRegister(data).then(response => setRes(response.data))
  };
  
  useEffect(()=>{

  },[])

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate()

  return (
    <div className='auth-form'>
      <img src="./image/auth-image.png" alt="" />
      <div className="form">
        <h1 className='Register'>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="username input-wrapper">
            <label>Username</label>
            <input type="text" name="name" onChange={handleChange} placeholder='Username' />
          </div>
          <div className="email input-wrapper">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} placeholder='Email' />
          </div>
          <div className="password input-wrapper">
            <label>Password</label>
            <div className="input-password">
              <input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} placeholder='Password' />
              <i className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={togglePassword}></i>
            </div>
          </div>
          <button className='submit' type='submit'>Register</button><br />
          <button className='forgot red'>Forgot password?</button><br />
          <small>Already have an account? <span className='red' onClick={() => navigate('/')}>Login here</span></small>
        </form>
      </div>
      {console.log(getRes)}
    </div>
  );
}

export default Register