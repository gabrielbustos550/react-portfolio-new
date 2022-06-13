import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri';
import {BiUserPin} from 'react-icons/bi';
import {MdWork} from 'react-icons/md';
import {RiFolderLine} from 'react-icons/ri';
import {AiOutlineContacts} from 'react-icons/ai';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
   
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeLine/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiFolderLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
     
    </nav>
  )
}


export default Nav