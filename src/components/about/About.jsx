import React from 'react'
import './about.css'
import {AiOutlineHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {SiWordpress} from 'react-icons/si';
import {FaPhp} from 'react-icons/fa';
import {FaNode} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {SiPostgresql} from 'react-icons/si';
import {SiAdobexd} from 'react-icons/si';

import Me from '../../assets/IMG_1692.PNG';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="bio">
          <h2>About Me</h2>
          <p>Hello! My name is Gabe and I am a passionate web developer that loves to create. I began my journey in web development in 2020 by creating basic web pages as a side hobby. By learning the basics of html and css,<br/> I was able to understand that with code, anything is possible!
          </p>
          <p>After spending 6 years in sales I decided to enroll in a coding bootcamp in 2021 to jumpstart my software-engineering career. Since then, I have been able to leverage my sales experience to build succesulful relationships with clients which, in turn, allows me to create viable websites and applications.
          </p>
          <p>My current focus is building responsive, accessible, and inclusive products at <a href="https://veatechnologies.com" target="_blank">VEA Technologies</a>
          </p>
          <p>
            Here are some of the technologies that I work with:
          </p>
          <div className="technologies__container">
            <div className="tech">
              <AiOutlineHtml5 id='icon'/>
              <span>HTML5</span>
            </div>
            <div className="tech" >
              <DiCss3 id='icon'/>
              <span>CSS3</span>
            </div>
            <div className="tech">
              <IoLogoJavascript id='icon'/>
              <span>JavaScript</span>
            </div>
            <div className="tech">
              <FaReact id='icon'/>
              <span>React</span>
            </div>
            <div className="tech">
              <FaNode id='icon'/>
              <span>Node</span>
            </div>
            <div className="tech">
              <FiGithub id='icon'/>
              <span>GitHub</span>
            </div>
            <div className="tech">
              <SiWordpress id='icon'/>
              <span>Wordpress</span>
            </div>
            <div className="tech">
              <FaPhp id='icon'/>
              <span>PHP</span>
            </div>
            <div className="tech">
              <SiPostgresql id='icon'/>
              <span>PostgreSQL</span>
            </div>
            <div className="tech">
              <SiAdobexd id='icon'/>
              <span>Adobe Xd</span>
            </div>
          </div>
        </div>
        <div className="about__picture__container">
          <div className="about__picture__effect">
            <img class="about__picture" src={Me} alt="about me picture" />
          </div>
        </div>


      </div>
    </section>
  )
}

export default About