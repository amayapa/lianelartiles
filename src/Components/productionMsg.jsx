import React from 'react'
import "../Styles/msg.css";

const Message = ({ languages, darkMode }) => {
  return (
    <div className='msg'>
      <h3>{languages.eng ? 'Working on it' : languages.esp ? 'En construcción' : 'En construction'}</h3>
      <p style={{ padding: '15px', fontSize: 22 }}>
        <b style={{
          color: 'yellow',
          fontSize: 50,
          filter: darkMode ? 'drop-shadow(2px 2px 2px rgba(0, 0, 0, .5))' : 'drop-shadow(2px 2px 2px rgb(0, 0, 0))'
        }}>⚠ </b>
        {languages.eng
          ? 'This website is under construction.' : languages.esp
            ? 'Este sitio web está en construcción.'
            : 'Ce site est en construction.'}
        <br />
        {languages.eng
          ? 'For the moment you can go to the following pages:' : languages.esp
            ? 'Por el momento puedes ir a las siguientes páginas:'
            : 'Pour le moment vous pouvez aller aux pages suivantes:'}
      </p>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Home' : languages.esp ? 'Inicio' : "Page d'accueil"}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Resume' : languages.esp ? 'CV' : 'CV'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'About me' : languages.esp ? 'Sobre mi' : 'Sur moi'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Contact me' : languages.esp ? 'Contactame' : 'Contactez moi'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Education' : languages.esp ? 'Educación' : 'Éducation'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Skills' : languages.esp ? 'Tecnologías' : 'Compétences'}<br />
      </span>
      <p style={{ padding: '15px', fontSize: 22 }}>
        {languages.eng ? 'And try the following features:' : languages.esp ? 'Y probar las siguientes funcionalidades:' : 'Et essayez les fonctionnalités suivantes:'}
      </p>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Dark Mode' : languages.esp ? 'Modo oscuro' : 'Mode sombre'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'languages' : languages.esp ? 'Idioma' : 'Langue'}<br />
      </span>
      <span className='check'>✔</span>
      <span>
        {languages.eng ? 'Social media buttons' : languages.esp ? 'Iconos de redes sociales' : 'Icônes de médias sociaux'}<br />
      </span>
    </div>
  )
}

export default Message
