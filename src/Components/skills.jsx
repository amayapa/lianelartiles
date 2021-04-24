import React from 'react'
import '../Styles/skills.css'
import * as technologies from '../constants/technologies';

const Skills = ({ language }) => {
  const { esp, eng } = language;

  const skills = {
    programLanguages: [
      { name: "JavaScript", logo: technologies.javascript },
      { name: "TypeScript", logo: technologies.typescript },
    ],
    frontendTechnologies: [
      { name: "HTML", logo: technologies.html5 },
      { name: "CSS", logo: technologies.css },
      { name: "LESS", logo: technologies.less },
      { name: "React", logo: technologies.reactJs },
      { name: "Redux", logo: technologies.redux },
      { name: "React Native", logo: technologies.reactNative },
      { name: "Expo", logo: technologies.expo },
      { name: "Material UI", logo: technologies.materialUI },
      { name: "React-Bootstrap", logo: technologies.reactBootstrap },
      { name: (<span>Styled<br />Components</span>), logo: technologies.styledComponents },
    ],
    backendTechnologies: [
      { name: "Node Js", logo: technologies.nodejs },
      { name: "Express", logo: technologies.express },
      { name: "MongoDB", logo: technologies.mongodb },
      { name: "SQLite", logo: technologies.sQLite },
      { name: "Sequelize", logo: technologies.sequelize },
      { name: "Firebase", logo: technologies.firebase },
      { name: "Postgres", logo: technologies.postgresql },
      { name: "", logo: technologies.indexedDB },
    ],
    otherTechnologies: [
      { name: "Git", logo: technologies.git },
      { name: "npm", logo: technologies.npm },
      { name: "Photoshop", logo: technologies.photoshop },
      { name: "Figma", logo: technologies.figma },
    ]
  }

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
