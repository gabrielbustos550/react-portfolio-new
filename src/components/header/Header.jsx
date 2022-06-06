import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <HeaderSocials />
      <div className="container header__container">
        <h3 id='intro'>Hello, my name is</h3>
        <h1>Gabriel Bustos Flores.</h1>
        <h1 id='header__statement'>I bring code to life.</h1>
        <p className='header__description'>I'm an independent fullstack web developer specializing in constructing scalable products. Currently building responsive, user-centered products at <a href="https://veatechnologies.com" target="_blank">VEA Technologies</a>  </p>
        <CTA />
      </div>
      <div className="scroll__down__container">
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header;