import React from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'

const Header = () =>{

  return (
    <nav className='header__wrapper'>
      <div className='header container'>
        <h1>
          <NavLink to='/' exact>Beers</NavLink>
        </h1>

        <ul>
          <li>
            <NavLink to='/breweries'>Breweries</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
};


export default Header;