import React from 'react'
import '../Styles/aboutme.css'
import Pic from "./pic";

const AboutMe = (props) => {
  const language = props.language;

  return (
    <div className='aboutme-container'>
      <Pic />
      <div className='text'>
        {
          language.eng ? (
            <p>
              My self-sacrificing, disciplined and responsible aptitudes 🧘🏼‍♂️, ➕ quarantine, were the main keys to walk through this difficult path, and make true that dream of make myself a Developer. 🦾
              Passionate by foreign languages, teamwork and solve technical problems.
              FullStack development experience of web and mobile applications.
            </p>
          ) : language.esp ?
              (
                <p>
                  Me considero una persona disciplinada y responsable 🧘🏼‍♂️, esas características ➕ la cuarentena me hicieron posible enfrentar este difícil camino y cumplir mi sueño de volverme desarrollador. 💪🏼
                  Me satisface trabajar en equipo, me apasionan los idiomas y solucionar problemas técnicos.
                  Experiencia en desarrollo FullStack tanto Web como de aplicaciones móviles.
                </p>
              ) : (
                <p>
                  Je suis dévoué, discipliné et responsable, 🧘🏼‍♂️ et ces compétences ➕ quarantaine sont les principales clés qui m'ont conduit sur ce chemin difficile de devenir un professionnel des sciences IT. 🦾
                  Apasioné des langues étrangers, le travail en equipe et de solutionné des problèmes techniques.
                  Experience en développement autant web que mobile.
                </p>
              )
        }
      </div>
    </div>
  )
}

export default AboutMe
