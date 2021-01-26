import React/* , { useState, useEffect } */ from 'react'
import '../Styles/skills.css'

import JavaScript from "../images/techs/javaScript.svg";
import JSX from "../images/techs/jsx.svg";
import HTML from "../images/techs/html5-original.svg";
import CSS from "../images/techs/css3-original.svg"
import LESS from "../images/techs/less-plain-wordmark.svg"
import Express from "../images/techs/express-original.svg"
import Git from "../images/techs/git-original.svg"
import MongoDB from "../images/techs/mongodb-original.svg"
import npm from "../images/techs/npm-original-wordmark.svg"
import Photoshop from "../images/techs/photoshop-line.svg"
import Node from "../images/techs/nodejs-original.svg"
import Sequelize from "../images/techs/sequelize-original.svg"
import ReactJs from "../images/techs/react-original.svg"
import Redux from "../images/techs/redux-original.svg"
import Postgres from "../images/techs/postgresql-original.svg"
import Figma from "../images/techs/figma.svg"
import ReactNative from "../images/techs/react-native.svg"
import MaterialUI from "../images/techs/material-ui.svg"
import Expo from "../images/techs/expo.svg"
import StyledComponents from "../images/techs/styled-components.svg"
import Firebase from "../images/techs/firebase.svg"
import SQLite from "../images/techs/SQLite.svg"

const Skills = ({ language }) => {
  const skills = {
    programLanguages: [
      { name: "JavaScript", logo: JavaScript },
    ],
    frontendTechnologies: [
      { name: "JSX", logo: JSX },
      { name: "HTML", logo: HTML },
      { name: "CSS", logo: CSS },
      { name: "LESS", logo: LESS },
      { name: "React", logo: ReactJs },
      { name: "Redux", logo: Redux },
      { name: "React Native", logo: ReactNative },
      { name: "Expo", logo: Expo },
      { name: "Material UI", logo: MaterialUI },
      { name: (<span>Styled<br />Components</span>), logo: StyledComponents },
    ],
    backendTechnologies: [
      { name: "Node Js", logo: Node },
      { name: "Express", logo: Express },
      { name: "MongoDB", logo: MongoDB },
      { name: "SQLite", logo: SQLite },
      { name: "Sequelize", logo: Sequelize },
      { name: "Firebase", logo: Firebase },
      { name: "Postgres", logo: Postgres },
    ],
    otherTechnologies: [
      { name: "Git", logo: Git },
      { name: "npm", logo: npm },
      { name: "Photoshop", logo: Photoshop },
      { name: "Figma", logo: Figma },
    ]
  }

  return (
    <div id='skills-container'>
      <h1>{language.eng ? 'Skills' : language.esp ? 'Tecnologías' : 'Des Compétances'}</h1>
      <h3>{language.eng ? 'Programming languages' : language.esp ? 'Lenguajes de programación' : 'Langages de programmation'}</h3>
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
      <h3>{language.eng ? 'Frontend Technologies' : language.esp ? 'Technologías Frontend' : 'Des technologies Frontend'}</h3>
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
      <h3>{language.eng ? 'Backend Technologies' : language.esp ? 'Technologías Backend' : 'Des technologies Backend'}</h3>
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
      <h3>{language.eng ? 'Other Technologies' : language.esp ? 'Otras Technologías' : 'Des autres Technologies'}</h3>
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
      {/* <Message language={language} /> */}
    </div>
  )
}

export default Skills;
