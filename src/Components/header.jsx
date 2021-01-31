/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';
import darkLogo from '../images/dark-imadev.svg'
import lightLogo from '../images/light-imadev.svg'

const Header = ({ darkMode, language }) => {
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
          <Link className='link hlink' to='/resume'>
            <span>{language.eng ? 'Resume' : language.esp ? 'CV' : 'CV'}</span>
          </Link>
          <Link className='link hlink' to='/education'>
            <span>{language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}</span>
          </Link>
          <Link className='link hlink' to='/skills'>
            <span>{language.eng ? 'Skills' : language.esp ? 'Tecnologías' : 'Compétences'}</span>
          </Link>
          <Link className='link hlink' to='/projects'>
            <span>{language.eng ? 'Projects' : language.esp ? 'Proyectos' : 'Projects'}</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
