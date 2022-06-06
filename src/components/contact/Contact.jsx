import React, {useRef} from 'react'
import './contact.css'
import {GrDribbble} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'
import {SiUpwork} from 'react-icons/si'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ec3bdd', 'template_ysu43wr', form.current, '-VdCalcqmMjCSxIox')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className="container contact__container">
        <h2>Contact</h2>
          <div className="contact">
            <div className="contact__description">
              <p>Reaching out to say hello, asking for my resume, or seeing if we can build something together? 
                  </p>
                
              <p>Fill in your info on this form and we can get started. 
              </p>
              <p>Or if social media works best you can reach me on these apps below!</p>
              <div className="socials__container">
                <a href='https://twitter.com/Gbf_550' target="_blank"><FiTwitter/></a>
                <a href='https://www.instagram.com/gabe_bustos/' target="_blank"><BsInstagram/></a>
                <a href='https://dribbble.com/gbf550' target="_blank"><GrDribbble/></a>
                <a href='https://www.upwork.com/freelancers/~01a10ab1ed7dc4e906' target="_blank"><SiUpwork/></a>
              </div>
            </div>
            <div className="form__container">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Name' required />
                <input type="email" name="email" placeholder='Email' required />
                <textarea name="message" rows="7" placeholder='Message' required></textarea>
                <button type='submit' class='btn'>Send Email</button>
              </form>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact