import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import NoteDetails from './components/notes/NoteDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateNote from './components/notes/CreateNote';
import {useState} from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import Welcome from './components/dashboard/Welcome';

function App() {

 // current user
 const [user, setUser] = useState({});

 onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
 })

 const [isAuth, setIsAuth] = useState(false);

 const logout = async () => {
  await signOut(auth);
  localStorage.clear();
  setIsAuth(false);
  window.location.pathname = "/signin";
 };

  return (
   <BrowserRouter>
    <div className="App">

    <nav className='nav-wrapper grey darken-3'>
     <div className="container">
      <Link to='/' className='brand-logo'>
      <i className="large-logo material-icons">note</i>
       Online-Notes
      </Link>
      {isAuth && 
      <ul className='right'>
       <li><NavLink to='/create'>New Note</NavLink></li>
       <li><NavLink to='/' onClick={logout}>Log Out</NavLink></li>
       <li><NavLink to='/' className='btn btn-floating ponk-lighten-1'>MA</NavLink></li>
       <li><NavLink to='/'>{user?.email}</NavLink></li>
      </ul>
      }

     {!isAuth &&
      <ul className='right'>
       <li><NavLink to='/signup'>Sign up</NavLink></li>
       <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
     }
     
     </div>
    </nav>
     

     <Routes>
     {isAuth ? 
     <Route exact path='/' element={<Dashboard/>} /> : 
     <Route exact path='/' element={<Welcome/>} />
     }
      <Route path='/note/:id' element={<NoteDetails/>} />
     
      <Route path='/signin' element={<SignIn setIsAuth={setIsAuth}/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/create' element={<CreateNote/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
