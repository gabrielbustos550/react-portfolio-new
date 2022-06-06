import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {SiUpwork} from 'react-icons/si'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href='https://www.upwork.com/freelancers/~01a10ab1ed7dc4e906' target="_blank"><SiUpwork/></a>
          <a href='https://www.linkedin.com/in/gabrielbustosflores/' target="_blank"><FiLinkedin/></a>
          <a href='https://github.com/gabrielbustos550' target="_blank"><FiGithub/></a>
          <a href='https://twitter.com/Gbf_550' target="_blank"><FiTwitter/></a>
          <a href='https://www.instagram.com/gabe_bustos/' target="_blank"><BsInstagram/></a>
      </div>
    )
}

export default HeaderSocials