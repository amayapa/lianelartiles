/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Styles/header.css';
import { logos } from "../constants/logos";

const Header = (props) => {
  const { darkMode, languages } = props;
  const location = useLocation();

  return (
    <header className='main-header'>
      <Link to='/'>
        <img
          src={darkMode ? logos.lightImadev : logos.darkImadev}
          className='logo'
          alt="imadev"
        />
      </Link>
      <nav className='header'>
        <ul>
          <Link className={location.pathname === '/resume' ? 'link hLinkSelected' : 'link hlink'} to='/resume'>
            <span>{languages.eng ? 'Resume' : languages.esp ? 'CV' : 'CV'}</span>
          </Link>
          <Link className={location.pathname === '/education' ? 'link hLinkSelected' : 'link hlink'} to='/education'>
            <span>{languages.eng ? 'Education' : languages.esp ? 'Educación' : 'Éducation'}</span>
          </Link>
          <Link className={location.pathname === '/skills' ? 'link hLinkSelected' : 'link hlink'} to='/skills'>
            <span>{languages.eng ? 'Skills' : languages.esp ? 'Tecnologías' : 'Compétences'}</span>
          </Link>
          <Link className={location.pathname === '/projects' ? 'link hLinkSelected' : 'link hlink'} to='/projects'>
            <span>{languages.eng ? 'Projects' : languages.esp ? 'Proyectos' : 'Projects'}</span>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
