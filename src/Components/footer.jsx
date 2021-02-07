/* ======================= IMPORTATIONS ======================= */
import React from 'react';
import '../Styles/footer.css';
import espFlag from '../images/españa.svg';
import engFlag from '../images/USA.svg';
import freFlag from '../images/francia.svg';
import darkToggle from '../images/Dark Toggle.svg';
import lightToggle from '../images/Light Toggle.svg';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';

const Footer = (props) => {
  /* ======================= STATE ======================= */
  const { darkMode, setDarkMode, language, setLanguage } = props;

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <>
      <div className='sm'>
        <SocialMedia
          darkMode={darkMode}
          language={language}
        />
      </div>
      <p id='copyright'>
        Copyright &copy; {new Date().getFullYear()}, Lianel Artiles
      </p>
      <nav className='main-footer'>
        <div className='flags'>
          {!language.esp ? (<img
            src={espFlag}
            alt="imadev"
            id='esp'
            onClick={() => setLanguage({
              eng: false,
              esp: true,
              fre: false
            })}
          />) : null}
          {!language.eng ? (<img
            src={engFlag}
            alt="imadev"
            id='eng'
            onClick={() => setLanguage({
              eng: true,
              esp: false,
              fre: false
            })}
          />) : null}
          {!language.fre ? (<img
            src={freFlag}
            alt="imadev"
            id='fre'
            onClick={() => setLanguage({
              eng: false,
              esp: false,
              fre: true
            })}
          />) : null}
        </div>
        <div className='footer'>
          <Link className='link' to='/about'>
            <span className='flink'>{language.eng ? 'About me' : language.esp ? 'Sobre mi' : 'Sur moi'}</span>
          </Link>
          <Link className='link' to='/contact'>
            <span className='flink'>{language.eng ? 'Contact me' : language.esp ? 'Contactame' : 'Contactez moi'}</span>
          </Link>
        </div>
        <div className='toggle'>
          <img
            id='toggle'
            src={darkMode ? darkToggle : lightToggle}
            alt="toggleMode"
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          />
        </div>
      </nav>
    </>
  )
}

export default Footer;
