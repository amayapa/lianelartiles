/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'

const Header = () => {
  /* ======================= STATE ======================= */
  const [darkMode, setDarkMode] = useState(true)

  /* ======================= FUNCTIONS ======================= */
  
  
  /* ======================= RENDERING ======================= */
  return (
    <div className='main-header'>
      <Link to='/landing'>
        <img 
          src={darkMode ? "/images/light imadev.svg" : "/images/dark imadev.svg"} 
          className='logo' alt="imadev"
        />
      </Link>
      <nav className='header'>
        <ul>
          <Link className='link' to='/education'>
            <li>Education</li>
          </Link>
          <Link className='link' to='/skills'>
            <li>Skills</li>
          </Link>
          <Link className='link' to='/projects'>
            <li>Projects</li>
          </Link>
          <Link className='link' to='/jsresume'>
            <li>Js Resume</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
