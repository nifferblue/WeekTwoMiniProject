import React from 'react'
import logo from './assets/logo.svg'

function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt="Fylo" className='logo'/>
      <div className='header'>
        <span> Features</span>
        <span>Team </span>
        <span> Sign In</span>
     
      </div>
    </div>
  )
}

export default Header
