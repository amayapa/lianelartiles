/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';
import darkLogo from '../images/dark-imadev.svg'
import lightLogo from '../images/light-imadev.svg'

const Header = () => {
  /* ======================= STATE ======================= */
  const [darkMode, setDarkMode] = useState(true)

  /* ======================= FUNCTIONS ======================= */
  
  
  /* ======================= RENDERING ======================= */
  return (
    <nav className='main-header cContainer header-andres'>
      <div className='cont-logo'>
        <Link to='/'>
          <img 
            src={darkMode ? lightLogo : darkLogo}
            className='logo logoheader' 
            alt="imadev"
          />
        </Link>
      </div>
      <nav className='menu-header'>
          <Link to='/education' className='link-header'>Education</Link>
          <Link to='/skills' className='link-header'>Skills</Link>
          <Link to='/projects' className='link-header'>Projects</Link>
          <Link to='/about' className='link-header'>Resume</Link>
      </nav>
      
    </nav>
  )
}

export default Header
