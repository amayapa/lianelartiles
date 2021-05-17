import React from 'react'
import '../Styles/aboutme.css'
import Pic from "./pic";

const AboutMe = (props) => {
  const languages = props.languages;

  return (
    <div className='aboutme-container'>
      <Pic />
      <div className='text'>
        {languages.eng ? (
            <p>
              My self-sacrificing, disciplined and responsible aptitudes 🧘🏼‍♂️, were the main keys to walk through this difficult path, and make true that dream of make myself a Developer. 💪🏼<br/>
              Passionate by foreign languages, teamwork and solve technical problems.
              FullStack development experience of web and mobile applications.
            </p>
          ) : languages.esp ?
              (
                <p>
                  Me considero una persona disciplinada y responsable 🧘🏼‍♂️. Esas características me permitieron enfrentar los desafíos que nos puso la cuarentena e hicieron posible cumplir mi sueño de volverme desarrollador.💪🏼<br/>
                  Me satisface trabajar en equipo, me apasionan los idiomas y solucionar problemas técnicos. Tengo experiencia en desarrollo FullStack, tanto Web como de Apps móviles.
                </p>
              ) : (
                <p>
                  Je suis dévoué, discipliné et responsable 🧘🏼‍♂️, et ces compétences sont les principales clés qui m'ont conduit sur ce chemin difficile de devenir un professionnel des sciences IT. 💪🏼<br/>
                  Apasioné des langues étrangers, le travail en equipe et de solutionné des problèmes techniques. Experience en développement autant web que mobile.
                </p>
              )}
      </div>
    </div>
  )
}

export default AboutMe
