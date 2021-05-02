import React from 'react'
import '../Styles/skills.css'
import { technologies } from '../constants/technologies';

const Skills = ({ language }) => {
  const { esp, eng } = language;

  const skills = {
    programLanguages: [
      { name: "JavaScript", logo: technologies.JavaScript },
      { name: "TypeScript", logo: technologies.TypeScript },
    ],
    frontendTechnologies: [
      { name: "HTML", logo: technologies.HTML },
      { name: "CSS", logo: technologies.CSS },
      { name: "LESS", logo: technologies.LESS },
      { name: "React", logo: technologies.ReactJs },
      { name: "Redux", logo: technologies.Redux },
      { name: "React Native", logo: technologies.ReactNative },
      { name: "Expo", logo: technologies.Expo },
      { name: "Material UI", logo: technologies.MaterialUI },
      { name: "React-Bootstrap", logo: technologies.ReactBootstrap },
      { name: (<span>Styled<br />Components</span>), logo: technologies.StyledComponents },
    ],
    backendTechnologies: [
      { name: "Node Js", logo: technologies.Node },
      { name: "Express", logo: technologies.Express },
      { name: "MongoDB", logo: technologies.MongoDB },
      { name: "SQLite", logo: technologies.SQLite },
      { name: "Sequelize", logo: technologies.Sequelize },
      { name: "Firebase", logo: technologies.Firebase },
      { name: "Postgres", logo: technologies.Postgres },
      { name: "", logo: technologies.IndexedDB },
    ],
    otherTechnologies: [
      { name: "Git", logo: technologies.Git },
      { name: "npm", logo: technologies.NPM },
      { name: "Photoshop", logo: technologies.Photoshop },
      { name: "Figma", logo: technologies.Figma },
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
