import React from 'react'
import "../Styles/msg.css";

const Message = (props) => {
  const language = props.language || true;

  return (
    <div className='msg'>
      {
        language.eng ?
          (<>
            <p style={{ padding: '15px', fontSize: 22 }}>
              This website is under construction.<br />
          For the moment you can go to the following pages:
        </p>
            <span className='check'>✔</span><span>Home<br /></span>
            <span className='check'>✔</span><span>JavasCript Resume<br /></span>
            <span className='check'>✔</span><span>About me<br /></span>
            <span className='check'>✔</span><span>Contact me<br /></span>
            <p style={{ padding: '15px', fontSize: 22 }}>And try the following features:</p>
            <span className='check'>✔</span><span>Dark Mode<br /></span>
            <span className='check'>✔</span><span>Language<br /></span>
            <span className='check'>✔</span><span>Social media buttons<br /></span>
          </>) : language.esp ?
            (<>
              <p style={{ padding: '15px', fontSize: 22 }}>
                Este sitio web está en construcción. <br />
              Por el momento puedes ir a las siguientes páginas:
            </p>
              <span className='check'>✔</span><span>Inicio<br /></span>
              <span className='check'>✔</span><span>CV en JavasCript<br /></span>
              <span className='check'>✔</span><span>Sobre mi<br /></span>
              <span className='check'>✔</span><span>Contactame<br /></span>
              <p style={{ padding: '15px', fontSize: 22 }}>Y probar las siguientes funcionalidades:</p>
              <span className='check'>✔</span><span>Modo oscuro<br /></span>
              <span className='check'>✔</span><span>Idioma<br /></span>
              <span className='check'>✔</span><span>Iconos de redes sociales<br /></span>
            </>) :
            (<>
              <p style={{ padding: '15px', fontSize: 22 }}>
                Ce site est en construction. <br />
                Pour le moment vous pouvez aller aux pages suivantes:
              </p>
              <span className='check'>✔</span><span>Page d'accueil<br /></span>
              <span className='check'>✔</span><span>CV JavasCript<br /></span>
              <span className='check'>✔</span><span>Sur moi<br /></span>
              <span className='check'>✔</span><span>Contactez moi<br /></span>
              <p style={{ padding: '15px', fontSize: 22 }}>Et essayez les fonctionnalités suivantes:</p>
              <span className='check'>✔</span><span>Mode sombre<br /></span>
              <span className='check'>✔</span><span>Langue<br /></span>
              <span className='check'>✔</span><span>Icônes de médias sociaux<br /></span>
            </>)
      }
    </div>
  )
}

export default Message
