/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import '../Styles/footer.css';
import espFlag from '../images/españa.png'
import engFlag from '../images/USA.png'
import darkToggle from '../images/Dark Toggle.svg'
import lightToggle from '../images/Light Toggle.svg'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  /* ======================= STATE ======================= */
  const darkMode = props.darkMode
  const setDarkMode = props.setDarkMode

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <div style={{backgroundColor: 'black'}}>
      {
        darkMode ? (<p id='copyright' style={{color: 'white'}}>
        Copyright &copy; {new Date().getFullYear()}, Lianel Artiles
        </p>):
        (<p id='copyright' style={{color: 'black'}}>
        Copyright &copy; {new Date().getFullYear()}, Lianel Artiles
        </p>)
      }
      <nav className='main-footer'>
        <div className='flags'>
          <div>
          <a href={`${window.location.href}`}>
            <img 
              src={espFlag}
              alt="imadev"
              id='esp'
              onClick={e=>console.log(e)}
            />
            </a>
          </div>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <div>
            <a href={`${window.location.href}`}>
              <img 
                src={engFlag}
                alt="imadev"
                id='eng'
                onClick={e=>console.log(e)}
              />
            </a>
          </div>
        </div>
        <div>
          {
            darkMode ? 
            (<div className='footer'>
              <Link className='link' to='/about'>
                <span className='flink' style={{color: 'black'}}>About me</span>
              </Link>
              <Link className='link' to='/contact'>
                <span className='flink' style={{color: 'black'}}>Contact me</span>
              </Link>
            </div>) :
            (<div className='footer'>
              <Link className='link' to='/about'>
                <span className='flink' style={{color: 'white'}}>About me</span>
              </Link>
              <Link className='link' to='/contact'>
                <span className='flink' style={{color: 'white'}}>Contact me</span>
              </Link>
            </div>)
          }
        </div>
        <div className='toggle'>
          <a href={`${window.location.href}`}>
            <img
              id='toggle'
              src={darkMode ? darkToggle : lightToggle} 
              alt="toggleMode"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
            />
          </a>  
        </div>
      </nav>
    </div>
  )
}

export default Footer;
