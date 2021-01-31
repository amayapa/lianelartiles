import React from 'react'
import "../Styles/msg.css";

const Message = ({ language, darkMode }) => {
  return (
    <div className='msg'>
      <h3>{language.eng ? 'Working on it' : language.esp ? 'En construcción' : 'En construction'}</h3>
      <p style={{ padding: '15px', fontSize: 22 }}>
        <b style={{
          color: 'yellow',
          fontSize: 50,
          filter: darkMode ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, .5))' : 'drop-shadow(2px 2px 2px rgb(0, 0, 0))'
        }}>⚠ </b>
        {language.eng
          ? 'This website is under construction.' : language.esp
            ? 'Este sitio web está en construcción.'
            : 'Ce site est en construction.'}
        <br />
        {language.eng
          ? 'For the moment you can go to the following pages:' : language.esp
            ? 'Por el momento puedes ir a las siguientes páginas:'
            : 'Pour le moment vous pouvez aller aux pages suivantes:'}
      </p>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Home' : language.esp ? 'Inicio' : "Page d'accueil"}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Resume' : language.esp ? 'CV' : 'CV'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'About me' : language.esp ? 'Sobre mi' : 'Sur moi'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Contact me' : language.esp ? 'Contactame' : 'Contactez moi'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Skills' : language.esp ? 'Tecnologías' : 'Compétences'}<br />
      </span>
      <p style={{ padding: '15px', fontSize: 22 }}>
        {language.eng ? 'And try the following features:' : language.esp ? 'Y probar las siguientes funcionalidades:' : 'Et essayez les fonctionnalités suivantes:'}
      </p>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Dark Mode' : language.esp ? 'Modo oscuro' : 'Mode sombre'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Language' : language.esp ? 'Idioma' : 'Langue'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {language.eng ? 'Social media buttons' : language.esp ? 'Iconos de redes sociales' : 'Icônes de médias sociaux'}<br />
      </span>
    </div>
  )
}

export default Message
