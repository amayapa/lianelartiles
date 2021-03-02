import React from 'react'
import jsResume from '../images/JsCV.svg';
import '../Styles/resume.css'

const Resume = (props) => {
  const language = props.language;

  return (
    <div id='jscv'>
      <h1>{language.eng ? 'JavaScript Resume' : language.esp ? 'CV JavaScript' : 'CV JavaScript'}</h1>
      <p>{language.eng ?
        'Here you are an extract of my resume, designed with some of my JavaScript knowledge.' :
        language.esp ?
          'Este es un extracto de mi currículum, diseñado con algunos de mis conocimientos de JavaScript.' :
          'Voici un extrait de mon CV, conçu avec certaines de mes connaissances JavaScript.'}</p>
      <img src={jsResume} alt='jscv' />
    </div>
  )
}

export default Resume;
