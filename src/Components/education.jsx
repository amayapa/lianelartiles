import React from 'react'
import Message from './productionMsg'

const Education = (props) => {
  const language = props.language;

  return (
    <div>
      {
        language.eng ? (
          <>
            <h1>Education</h1>
            <h3>Working on it</h3>
          </>
        ) : language.esp ?
            (
              <>
                <h1>Educatión</h1>
                <h3>En construcción</h3>
              </>
            ) : (
              <>
                <h1>Éducation</h1>
                <h3>En construction</h3>
              </>
            )
      }
      <Message language={language} />
    </div>
  )
}

export default Education
