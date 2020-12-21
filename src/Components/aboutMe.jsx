import React from 'react'
import Message from './productionMsg'
import '../Styles/aboutme.css'

const AboutMe = (props) => {
  const language = props.language;
  console.log(language);

  return (
    <div className='aboutme-container'>
      {
        language.eng ? (
          <>
            <h1>About me</h1>
            <h3>Working on it</h3>
          </>
        ) : language.esp ?
            (
              <>
                <h1>Sobre mi</h1>
                <h3>En construcción</h3>
              </>
            ) : (
              <>
                <h1>Sur moi</h1>
                <h3>En construction</h3>
              </>
            )
      }
      <Message language={language} />
    </div>
  )
}

export default AboutMe
