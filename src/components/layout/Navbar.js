import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import { auth } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';


const Navbar = () => {
 // current user
 const [user, setUser] = useState({});

 //user state
 const [loggedIn, setLoggedIn] = useState(false);

 onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
 })

 return (
  <nav className='nav-wrapper grey darken-3'>
   <div className="container">
    <Link to='/' className='brand-logo'>
    <i className="large-logo material-icons">note</i>
     Online-Notes
     </Link>
    <SignedInLinks user={user}/>
    <SignedOutLinks user={user}/>
   </div>
  </nav>
 )
}

export default Navbar;