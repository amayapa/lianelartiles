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
            <>
              <p>
                Mi carácter sacrificado, disciplinado y
                responsable he podido enfrentar este difícil
                camino de volverme desarrollador. En mi caso
                esta pandemia fue una oportunidad para
                alcanzar el sueño de volverme profesional en
                las ciencias informáticas.
                Me satisface trabajar en equipo, me gusta
                superarme y dar lo mejor de mí. Soy afable,
                entusiasta y me apasionan los idiomas y
                solucionar problemas técnicos. Experiencia en
                desarrollo FullStack tanto web como de
                aplicaciones móviles.
              </p>
            </>
          ) : language.esp ?
              (
                <>
                  <p>
                    FullStack developer self-sacrificing, disciplined
                    and responsible. I love teamwork and
                    leadership; I like to improve and always give
                    my best. Kind, empathetic and enthusiastic
                    character. Passionate by foreign languages
                    and solve technical problems.
                    Experience in FullStack development of web
                    and mobile applications. Specialist in Physical
                    Culture, Sports and Massage therapy.
                    Empirical skills, experience and love for design
                    and sales.
                  </p>
                </>
              ) : (
                <>
                  <h1>Sur moi</h1>
                </>
              )
        }
      </div>
    </div>
  )
}

export default AboutMe
