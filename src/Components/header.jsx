/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';
import darkLogo from '../images/dark-imadev.svg'
import lightLogo from '../images/light-imadev.svg'

const Header = (props) => {
  /* ======================= STATE ======================= */
  const darkMode = props.darkMode

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
        {
          darkMode ?
            (<ul>
              <Link className='link hlink' to='/education'>
                <span style={{color: 'white'}}>Education</span>
              </Link>
              <Link className='link hlink' to='/skills'>
                <span style={{color: 'white'}}>Skills</span>
              </Link>
              <Link className='link hlink' to='/projects'>
                <span style={{color: 'white'}}>Projects</span>
              </Link>
              <Link className='link hlink' to='/resume'>
                <span style={{color: 'white'}}>Resume</span>
              </Link>
            </ul>) : 
              (<ul>
                <Link className='link hlink' to='/education'>
                  <span style={{color: 'black'}}>Education</span>
                </Link>
                <Link className='link hlink' to='/skills'>
                  <span style={{color: 'black'}}>Skills</span>
                </Link>
                <Link className='link hlink' to='/projects'>
                  <span style={{color: 'black'}}>Projects</span>
                </Link>
                <Link className='link hlink' to='/resume'>
                  <span style={{color: 'black'}}>Resume</span>
                </Link>
              </ul>)
        }
      </div>
    </nav>
  )
}

export default Header
