import React from 'react'
import Message from './productionMsg'

const Projects = ({ language, darkMode }) => {

  return (
    <div>
      <h1>{language.eng ? 'Projects' : language.esp ? 'Proyectos' : 'Des Projects'}</h1>
      <Message language={language} darkMode={darkMode} />
    </div>
  )
}

export default Projects
