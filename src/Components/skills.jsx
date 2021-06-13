import React from 'react'
import '../Styles/skills.css'
import { skills } from '../data/skills';

const Skills = ({ languages }) => {
  const { esp, eng } = languages;

  return (
    <div id='skills-container'>
      <h1>{eng ? 'Skills' : esp ? 'Tecnologías' : 'Des Compétances'}</h1>
      <h3>{eng ? 'Programming languages' : esp ? 'Lenguajes de programación' : 'Langages de programmation'}</h3>
      <div className='skillsContainer' id='programLanguages' >
        {
          skills.programLanguages.map((lang, index) => {
            return (
              <div className='tech' key={index}>
                <img src={lang.logo} alt={lang.name} />
                <p>{lang.name}</p>
              </div>
            )
          })
        }
      </div>
      <h3>{eng ? 'Frontend Technologies' : esp ? 'Technologías Frontend' : 'Des technologies Frontend'}</h3>
      <div className='skillsContainer'>
        {
          skills.frontendTechnologies.map((lang, index) => {
            return (
              <div className='tech' key={index}>
                <img src={lang.logo} alt={lang.name} />
                <p>{lang.name}</p>
              </div>
            )
          })
        }
      </div>
      <h3>{eng ? 'Backend Technologies' : esp ? 'Technologías Backend' : 'Des technologies Backend'}</h3>
      <div className='skillsContainer'>
        {
          skills.backendTechnologies.map((lang, index) => {
            return (
              <div className='tech' key={index}>
                <img src={lang.logo} alt={lang.name} />
                <p>{lang.name}</p>
              </div>
            )
          })
        }
      </div>
      <h3>{eng ? 'Other Technologies' : esp ? 'Otras Technologías' : 'Des autres Technologies'}</h3>
      <div className='skillsContainer'>
        {
          skills.otherTechnologies.map((lang, index) => {
            return (
              <div className='tech' key={index}>
                <img src={lang.logo} alt={lang.name} />
                <p>{lang.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills;
