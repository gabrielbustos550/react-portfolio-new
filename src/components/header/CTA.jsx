import React from 'react'
import Resume from '../../assets/GabrielBustoFlores_resume.pdf';

const CTA = () => {
  return (
    <div className='cta' id="#">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA