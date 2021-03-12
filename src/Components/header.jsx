/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';
import darkLogo from '../images/dark-imadev.svg'
import lightLogo from '../images/light-imadev.svg'
import { useLocation } from "react-router-dom";

const Header = ({ darkMode, language }) => {
  const location = useLocation();

  return (
    <nav className='main-header cContainer'>
      <div>
        <Link to='/'>
          <img
            src={darkMode ? lightLogo : darkLogo}
            className='logo'
            alt="imadev"
          />
        </Link>
      </div>
      <div className='header'>
        <ul>
          <Link className={location.pathname === '/resume' ? 'link hLinkSelected' : 'link hlink'} to='/resume'>
            <span>{language.eng ? 'Resume' : language.esp ? 'CV' : 'CV'}</span>
          </Link>
          <Link className={location.pathname === '/education' ? 'link hLinkSelected' : 'link hlink'} to='/education'>
            <span>{language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}</span>
          </Link>
          <Link className={location.pathname === '/skills' ? 'link hLinkSelected' : 'link hlink'} to='/skills'>
            <span>{language.eng ? 'Skills' : language.esp ? 'Tecnologías' : 'Compétences'}</span>
          </Link>
          <Link className={location.pathname === '/projects' ? 'link hLinkSelected' : 'link hlink'} to='/projects'>
            <span>{language.eng ? 'Projects' : language.esp ? 'Proyectos' : 'Projects'}</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
