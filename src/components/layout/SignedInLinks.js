import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignedInLinks = ({user, setIsAuth, isAuth}) => {

 // use navigate to redirect user to another page:
 const navigate = useNavigate();

 const logout = async () => {
  await signOut(auth);
  setIsAuth(false);
  navigate("/signin");
 };

 return (
  <ul className='right'>
   {isAuth &&<li><NavLink to='/create'>New Note</NavLink></li>}
   <li><NavLink to='/' onClick={logout}>Log Out</NavLink></li>
   <li><NavLink to='/' className='btn btn-floating ponk-lighten-1'>MA</NavLink></li>
   <li><NavLink to='/'>{user?.email}</NavLink></li>
  </ul>
 )
}

export default SignedInLinks;