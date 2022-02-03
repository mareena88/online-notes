import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

 // declare state
 const [captureEmail, setCaptureEmail] = useState('');
 const [capturePassword, setCapturePassword] = useState('');
 const [captureFirstName, setCaptureFirstName] = useState('');
 const [captureLastName, setCaptureLastName] = useState('');

 // current user
 const [user, setUser] = useState({});

 onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
 })


 // use navigate to redirect user to another page:
 const navigate = useNavigate();

 // functions

 const registerUser = async () => {
  try {
   const user = await createUserWithEmailAndPassword(auth, captureEmail, capturePassword);
   console.log(user);
   navigate("/signin");
  } catch(error) {
   console.log(error.message);
  }
 }

 const handleEmail = (e) => {
  setCaptureEmail(e.target.value);
 }

 const handlePassword = (e) => {
  setCapturePassword(e.target.value);
 }

 const handleFirstName = (e) => {
  setCaptureFirstName(e.target.value);
 }

 const handleLastName = (e) => {
  setCaptureLastName(e.target.value);
 }

 console.log(capturePassword);
 console.log(captureEmail);
 console.log(captureFirstName);
 console.log(captureLastName);

 const pageModel = (
  <div className='container'>
   {/* <form className='white'>
    <h5 className='grey-text text-darken-3'>Create an account</h5>
    <div className='input-field'>
     <label htmlFor='firstName'>First Name</label>
     <input type='text' id='firstName' onChange={handleFirstName}/>
    </div>

    <div className='input-field'>
     <label htmlFor='lastName'>Last Name</label>
     <input type='text' id='lastName' onChange={handleLastName}/>
    </div>

    <div className='input-field'>
     <label htmlFor='email'>Email</label>
     <input type='email' id='email' onChange={handleEmail}/>
    </div>

    <div className='input-field'>
     <label htmlFor='password'>Password</label>
     <input type='password' id='password' onChange={handlePassword}/>
    </div>

    <div className='input-field'>
     <button onClick={registerUser} className='btn pink lighten-1 z-depth-0'>Sign Up</button>
    </div>

   </form> */}

    <h5 className='grey-text text-darken-3'>Create an account</h5>

    <div className='input-field'>
     <label htmlFor='firstName'>First Name</label>
     <input type='text' id='firstName' onChange={handleFirstName}/>
    </div>

    <div className='input-field'>
     <label htmlFor='lastName'>Last Name</label>
     <input type='text' id='lastName' onChange={handleLastName}/>
    </div>
    
    <div className='input-field'>
     <label htmlFor='email'>Email</label>
     <input type='email' id='email' onChange={handleEmail}/>
    </div>

    <div className='input-field'>
     <label htmlFor='password'>Password</label>
     <input type='password' id='password' onChange={handlePassword}/>
    </div>

    <div className='input-field'>
     <button onClick={registerUser} className='btn pink lighten-1 z-depth-0'>Sign Up</button>
    </div>
   
  </div>
 )
 return pageModel;
}

export default SignUp;
