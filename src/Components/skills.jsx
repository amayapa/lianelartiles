import React from 'react'
import Message from './productionMsg'

const Skills = (props) => {
  const language = props.language;

  return (
    <div>
      {
        language.eng ? (
          <>
            <h1>Skills</h1>
            <h3>Working on it</h3>
          </>
        ) : language.esp ?
            (
              <>
                <h1>Tecnologías</h1>
                <h3>En construcción</h3>
              </>
            ) : (
              <>
                <h1>Des Compétances</h1>
                <h3>En construction</h3>
              </>
            )
      }
      <Message language={language} />
    </div>
  )
}

export default Skills;
