import React from 'react';
import './experience.css';
import { useState } from 'react';

const Experience = () => {

  const [activeButton, setActiveButton] = useState('tab-0');

      // <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeLine/></a>
  return (
    <section id='experience'>
      <div className="container experience__container">
        <h2>Experience</h2>
        <div className="employer__profile">
          <div className="employer__name">
            <button id="tab-0" onClick={() => setActiveButton('tab-0')} className={activeButton === 'tab-0' ? 'button active' : 'button'} role="tab"><span>VEA Technologies</span></button>
            <button id="tab-1" onClick={() => setActiveButton('tab-1')} className={activeButton === 'tab-1' ? 'button active' : 'button'}role="tab"><span>General Assembly</span></button>
            <button id="tab-2" onClick={() => setActiveButton('tab-2')} className={activeButton === 'tab-2' ? 'button active' : 'button'}role="tab"><span>SelectQuote</span></button>
            <button id="tab-3" onClick={() => setActiveButton('tab-3')} className={activeButton === 'tab-3' ? 'button active' : 'button'}role="tab"><span>Autonation Subaru West</span></button>
            <button id="tab-4" onClick={() => setActiveButton('tab-4')} className={activeButton === 'tab-4' ? 'button active' : 'button'}role="tab" ><span>Mike Shaw Subaru</span></button>
          </div>
          <div className="employer__info">
            <div className={activeButton === 'tab-0' ? 'employer active' : 'employer'}>
              <h3>Web Developer <a href="https://veatechnologies.com" target="_blank"> @ VEA Technologies</a></h3>
              <p>April 2022 - Present</p>
              <li>
                <ul>Communicate with the marketing deparment in order to create viable and responsive sites and web pages. Adapting completed projects in order to meet customers vision.</ul>
                <ul>Delivering finsihed projects in a effecient and timely manner. Working around the clock to meet tight deadlines.</ul>
                <ul>Working in a team environment and learning from others in order to improve and diversify skills.</ul>
              </li>
            </div>
            <div className={activeButton === 'tab-1' ? 'employer active' : 'employer'}>
              <h3>Student @ General Assembly</h3>
              <p>January 2021 - April 2021</p>
              <li>
                <ul>Completed a rigorous 12 week full stack coding bootcamp consisting of learning JavaScript, Python, HTML, and CSS to name a few.</ul>
                <ul>Learned the importance of communicating as a team and collaboration. Most projects consisted of working with others.</ul>
                <ul>Refired my online searching skills and the ability to learn on the go. This helped me become fearless when tackling new projects.</ul>
              </li>
            </div>
            <div className={activeButton === 'tab-2' ? 'employer active' : 'employer'}>
              <h3>Sales Representative @ SelectQuote</h3>
              <p>August 2019 - January 2021</p>
              <li>
                <ul>Combined company CRM with government websites
  in order to provide an insurance analysis.</ul>
                <ul>Was the 10th leading sales representative for the annual enrollment period from October 15th to December 7th out of 200 sales representatives. </ul>
                <ul>Averaged a tier 1 closing rate for entire tenure.</ul>
              </li>
            </div>
            <div className={activeButton === 'tab-3' ? 'employer active' : 'employer'}>
              <h3>Sales Representative @ Autonation Subaru West</h3>
              <p>August 2018 - July 2019</p>
              <li>
                <ul>Utilizing product knowledge and market
  comprehension to provide new customers efficient
  and competitive pricing structures</ul>
                <ul>Was leader in sales 3 months in a row to start 2019.</ul>
                <ul>Hightest closing rate in dealership for entire tenure with an average of 20% on all leads.</ul>
              </li>
            </div>
            <div className={activeButton === 'tab-4' ? 'employer active' : 'employer'}>
              <h3>Sales Manager @ Mike Shaw Subaru</h3>
              <p>February 2014 - July 2018 </p>
              <li>
                <ul>Managed and led a team of 25+ sales representatives to meet
  100% of the Subaru of America required sales goal
  every month.</ul>
                <ul> Overhauled the internet department in
  order to provide sales representatives with more
  accurate market pricing leading to increased sales</ul>
                <ul> Responsible for online review management leading to a 4.6 google rating.</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience