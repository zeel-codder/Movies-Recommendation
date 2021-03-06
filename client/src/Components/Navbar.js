import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login.js';
import { SignUp } from './SignUp';
// import '../CSS/navbar.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {AiOutlineBars} from 'react-icons/ai'
import { useRef ,useState} from 'react';
export const Navbar = () => {
    
    const bar=useRef(null);
  

    function ToggleNavbar(){

      // console.log(bar)

      bar.current.classList.toggle('show');

    }

 


    return (
        <div className="navbar">
        <div className="bar none" onClick={ToggleNavbar}><AiOutlineBars /></div>
            <Router>
  
        <div className='nav' ref={bar} >
        <Fade left big>
          <h2 className='title'>Movies Recommendation System</h2>
        </Fade>
        <Slide left>
          <ul>
            <li className='links'><Link className='inside' to={'/home'} > Home </Link></li>
            <li className='links'><Link className='inside' to={'/login'} >Login</Link></li>
            <li className='links'><Link className='inside' to={'/signup'} >SignUp</Link></li>
          </ul>
            </Slide>
          </div>
          <div>  
          <Switch>
          <Route exact path='/'>
              <Redirect to="/home"/>
              </Route>
              <Route exact path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
        </div>
    )
}
