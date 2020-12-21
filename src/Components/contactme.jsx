import React from 'react'
import Message from "./productionMsg";
import '../Styles/contactme.css'

const ContactMe = (props) => {
  const language = props.language;

  return (
    <div className='contactme-container'>
      {
        language.eng ? (
          <>
            <h1>Contact me</h1>
            <h3>Working on it</h3>
          </>
        ) : language.esp ?
            (
              <>
                <h1>Contactame</h1>
                <h3>En construcción</h3>
              </>
            ) : (
              <>
                <h1>Contactez moi</h1>
                <h3>En construction</h3>
              </>
            )
      }
      <Message language={language} />
    </div>
  )
}

export default ContactMe
