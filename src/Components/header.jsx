/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css';
import darkLogo from '../images/dark-imadev.svg'
import lightLogo from '../images/light-imadev.svg'

const Header = (props) => {
  /* ======================= STATE ======================= */
  const darkMode = props.darkMode
  const language = props.language;

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
          language.eng ?
            (<ul>
              <Link className='link hlink' to='/resume'>
                <span>JsResume</span>
              </Link>
              <Link className='link hlink' to='/education'>
                <span>Education</span>
              </Link>
              <Link className='link hlink' to='/skills'>
                <span>Skills</span>
              </Link>
              <Link className='link hlink' to='/projects'>
                <span>Projects</span>
              </Link>
            </ul>) : language.esp ?
              (<ul>
                <Link className='link hlink' to='/resume'>
                  <span>JsCV</span>
                </Link>
                <Link className='link hlink' to='/education'>
                  <span>Educación</span>
                </Link>
                <Link className='link hlink' to='/skills'>
                  <span>Tecnologías</span>
                </Link>
                <Link className='link hlink' to='/projects'>
                  <span>Proyectos</span>
                </Link>
              </ul>) :
              (<ul>
                <Link className='link hlink' to='/resume'>
                  <span>JsCV</span>
                </Link>
                <Link className='link hlink' to='/education'>
                  <span>Education</span>
                </Link>
                <Link className='link hlink' to='/skills'>
                  <span>Compétences</span>
                </Link>
                <Link className='link hlink' to='/projects'>
                  <span>Projects</span>
                </Link>
              </ul>)
        }
      </div>
    </nav>
  )
}

export default Header
