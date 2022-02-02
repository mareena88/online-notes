import React from 'react';
import { useState } from 'react/cjs/react.development';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const SignIn = ({setIsAuth}) => {

 // declare state
 const [captureEmail, setCaptureEmail] = useState('');
 const [capturePassword, setCapturePassword] = useState('');

 // use navigate to redirect user to another page:
 const navigate = useNavigate();

 // functions

 const handleSubmit = (e) => {
  e.preventDefault();
 }

 const handleEmail = (e) => {
  setCaptureEmail(e.target.value);
 }

 const handlePassword = (e) => {
  setCapturePassword(e.target.value);
 }

 console.log(capturePassword);
 console.log(captureEmail);

 const login = async () => {
  try {
   const user = await signInWithEmailAndPassword(auth, captureEmail, capturePassword);
   console.log(user);
   localStorage.setItem("is Auth", true);
   setIsAuth(true);
   navigate("/");
  } catch(error) {
   console.log(error.message);
  }
 }

 const pageModel = (
  <div className='container'>
   <form onSubmit={handleSubmit} className='white'>
    <h5 className='grey-text text-darken-3'>Sign In</h5>
    <div className='input-field'>
     <label htmlFor='email'>Email</label>
     <input type='email' id='email' onChange={handleEmail}/>
    </div>

    <div className='input-field'>
     <label htmlFor='password'>Password</label>
     <input type='password' id='password' onChange={handlePassword}/>
    </div>

    <div className='input-field'>
     <button className='btn pink lighten-1 z-depth-0' onClick={login}>Login</button>
    </div>

   </form>
   <div>
    <p>Don't have an account? <a href='/signup'>Sign up here</a> </p>
   </div>
  </div>
 )
 return pageModel;
}

export default SignIn;
