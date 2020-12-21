import React from 'react'
import jsResume from '../images/jsCV.svg';
import '../Styles/resume.css'

const Resume = () => {


  return (
    <div id='jscv'>
      <h1>JavasCript Resume</h1>
      <p>Here you are an extract of my resume, designed with some of my JavaScript knowledge.
      </p>
      <img src={jsResume} alt='jscv' />
    </div>
  )
}

export default Resume;
