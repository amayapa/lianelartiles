import React from 'react'
import Message from './productionMsg'

const Projects = (props) => {
  const language = props.language;

  return (
    <div>
      {
        language.eng ? (
          <>
            <h1>Projects</h1>
            <h3>Working on it</h3>
          </>
        ) : language.esp ?
            (
              <>
                <h1>Proyectos</h1>
                <h3>En construcción</h3>
              </>
            ) : (
              <>
                <h1>Des Projects</h1>
                <h3>En construction</h3>
              </>
            )
      }
      <Message language={language} />
    </div>
  )
}

export default Projects
