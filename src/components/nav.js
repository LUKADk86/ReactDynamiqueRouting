import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className='list'>
          <li><NavLink exact to='/'>Accueil</NavLink></li>
          <li><NavLink to ='/presentation'>presenation</NavLink></li>
          <li><NavLink exact to='/blog'>Blog</NavLink></li>
        </ul>
        </div>
    </div>
  )
}
export default Nav;
