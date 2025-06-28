import React from 'react'
import Logo from '../logo/Logo'
import "./Navbar.css"
import Navlist from '../navlist/Navlist'
import TranslateWidget from '../Translate'

const Navbar = () => {
  return (
    <div className='navbarr container'>
        <Logo/>
        <TranslateWidget/>
        <Navlist/>
    </div>
  )
}

export default Navbar