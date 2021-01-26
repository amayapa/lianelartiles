import React from 'react'
import jsResume from '../images/jsCV.svg';
import '../Styles/resume.css'

const Resume = (props) => {
  const language = props.language;

  return (
    <>
      {
        language.eng ?
          (<div id='jscv'>
            <h1>JavaScript Resume</h1>
            <p>Here you are an extract of my resume, designed with some of my JavaScript knowledge.
            </p>
            <img src={jsResume} alt='jscv' />
          </div>) : language.esp ?
            (<div id='jscv'>
              <h1>CV JavaScript</h1>
              <p>Este es un extracto de mi currículum, diseñado con algunos de mis conocimientos de JavaScript.
              </p>
              <img src={jsResume} alt='jscv' />
            </div>) :
            (<div id='jscv'>
              <h1>CV JavaScript</h1>
              <p>Voici un extrait de mon CV, conçu avec certaines de mes connaissances JavaScript.
              </p>
              <img src={jsResume} alt='jscv' />
            </div>)
      }
    </>
  )
}

export default Resume;
