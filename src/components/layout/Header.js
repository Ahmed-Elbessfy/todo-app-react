import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const headerStyle ={
    background: '#222',
    color: '#fff',
    padding : '1rem',
    textAlign : 'center',
    textTransform : 'uppercase',
  }
  return (
    <header style={headerStyle}>
      <h1>To-Do App</h1>
      <NavLink exact to='/' className='navlinkStyle'>home</NavLink> | <NavLink to='/about' className='navlinkStyle'>about</NavLink>
    </header>
  )
}


export default Header
