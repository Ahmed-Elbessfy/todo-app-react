import React from 'react'

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>To-Do App</h1>
    </header>
  )
}

const headerStyle ={
  background: '#222',
  color: '#fff',
  padding : '1rem',
  textAlign : 'center',
  textTransform : 'uppercase',
}

export default Header
