import React from 'react'
import './portfolio.css'
import TripTracker from '../../assets/TripTracker.png'
import NBATeamChat from '../../assets/NBA-TeamChat.png'
import Speedracer from '../../assets/SpeedRacer1000.png'
import {FiGithub} from 'react-icons/fi'
import {GoLinkExternal} from 'react-icons/go'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <h2>Projects</h2>
        <div className="project__container">
          <div className="project">
            <div className="project__media">
              <img src={TripTracker} alt="project info" />
            </div>
            <div className="project__description">
              <h3>TripTracker</h3>
              <p>Collaborated with 3 other developers to create a full
  stack web application using MERN stack. The
  application allows users to create and store
  information they will use while traveling</p>
              <div className="link__container">
                <a href="https://github.com/wonkatin/Project3_Server" target="_blank"><FiGithub/></a>
                <a href="https://trip-tracker-whatever.netlify.app/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="project__container">
          <div className="project">
            <div className="project__description">
              <h3>NBA TeamChat</h3>
              <p>Full Stack Web application. Users can create an account to log in and view their favorite team's season results. Leverages BallDontLie api to pull game scores.</p>
              <div className="link__container">
                <a href="https://github.com/gabrielbustos550/NBATeamChat" target="_blank"><FiGithub/></a>
                <a href="https://nba-teamchat-poject.herokuapp.com/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
            <div className="project__media">
              <img src={NBATeamChat} alt="project info" />
            </div>
          </div>
        </div>
        <div className="project__container">
          <div className="project">
            <div className="project__media">
              <img src={Speedracer} alt="project info" />
            </div>
            <div className="project__description">
              <h3>SpeedRacer 1000</h3>
              <p>Created this web game using the Canvas.js software. Finish the course in the fastest time to be the 1st place finisher while avoiding hit boxes and out of bounds.</p>
              <div className="link__container">
                <a href="https://github.com/gabrielbustos550/SpeedRacer-1000" target="_blank"><FiGithub/></a>
                <a href="https://gabrielbustos550.github.io/" target="_blank"><GoLinkExternal/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio