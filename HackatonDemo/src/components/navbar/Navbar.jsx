import React from 'react'
import Logo from '../logo/Logo'
import "./Navbar.css"
import Navlist from '../navlist/Navlist'

const Navbar = () => {
  return (
    <div className='navbarrr container'>
        <Logo/>
        <Navlist/>
    </div>
  )
}

export default Navbar