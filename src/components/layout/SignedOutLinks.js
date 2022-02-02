import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = ({isAuth}) => {
 return (
  <ul className='right'>
   {!isAuth && <li><NavLink to='/signup'>Sign up</NavLink></li>}
   {!isAuth && <li><NavLink to='/signin'>Login</NavLink></li>}
  </ul>
 )
}

export default SignedOutLinks;



// <li><NavLink to='/signup'>{ user?.email ? '' : 'Sign up' }</NavLink></li>
// <li><NavLink to='/signin'>{ user?.email ? user?.email : 'Login' }</NavLink></li>