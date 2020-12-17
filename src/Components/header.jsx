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
          <Link className='link hlink' to='/education'>
            <span>Education</span>
          </Link>
          <Link className='link hlink' to='/skills'>
            <span>Skills</span>
          </Link>
          <Link className='link hlink' to='/projects'>
            <span>Projects</span>
          </Link>
          <Link className='link hlink' to='/resume'>
            <span>Resume</span>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
