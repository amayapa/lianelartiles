/* ======================= IMPORTATIONS ======================= */
import React from 'react';
import '../Styles/footer.css';
import darkToggle from '../images/Dark Toggle.svg';
import lightToggle from '../images/Light Toggle.svg';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import { Tooltip } from '@material-ui/core';
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  /* ======================= STATE ======================= */
  const { darkMode, setDarkMode, language, setLanguage } = props;
  const location = useLocation();

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
          {!language.esp ? (
            <button
              id='esp'
              onClick={() => setLanguage({
                eng: false,
                esp: true,
                fre: false
              })}
            >
              Esp
            </button>
          ) : null}
          {!language.eng ? (
            <button
              id='eng'
              onClick={() => setLanguage({
                eng: true,
                esp: false,
                fre: false
              })}
            >Eng</button>
          ) : null}
          {!language.fre ? (
            <button
              id='fre'
              onClick={() => setLanguage({
                eng: false,
                esp: false,
                fre: true
              })}
            >Fre</button>
          ) : null}
        </div>
        <div className='footer'>
          <Link className='link' to='/about'>
            <span className={location.pathname.includes('about') ? 'fLinkSelected' : 'flink'}>{language.eng ? 'About me' : language.esp ? 'Sobre mi' : 'Sur moi'}</span>
          </Link>
          <Link className='link' to='/contact'>
            <span className={location.pathname.includes('contact') ? 'fLinkSelected' : 'flink'}>{language.eng ? 'Contact me' : language.esp ? 'Contactame' : 'Contactez moi'}</span>
          </Link>
        </div>
        <div className='toggle'>
          <Tooltip title={language.eng ? 'Dark Mode' : language.esp ? 'Modo Oscuro' : 'Mode Sombre'}>
            <img
              id='toggle'
              src={darkMode ? darkToggle : lightToggle}
              alt="toggleMode"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
            /></Tooltip>
        </div>
      </nav>
    </>
  )
}

export default Footer;
