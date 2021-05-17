import React from 'react'
import { images } from '../constants/images';
import '../Styles/resume.css'

const Resume = (props) => {
  const { languages } = props;

  return (
    <div id='jscv'>
      <h1>{languages.eng ? 'JavaScript Resume' : languages.esp ? 'CV JavaScript' : 'CV JavaScript'}</h1>
      <p>{languages.eng ?
        'Here you are an extract of my resume, designed with some of my JavaScript knowledge.' :
        languages.esp ?
          'Este es un extracto de mi currículum, diseñado con algunos de mis conocimientos de JavaScript.' :
          'Voici un extrait de mon CV, conçu avec certaines de mes connaissances JavaScript.'}</p>
      <img src={images.JsCV} alt='jscv' />
    </div>
  )
}

export default Resume;
