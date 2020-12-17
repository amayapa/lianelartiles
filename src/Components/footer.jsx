/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import '../Styles/footer.css';
import espFlag from '../images/españa.png'
import engFlag from '../images/USA.png'
import darkToggle from '../images/Dark Toggle.svg'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  /* ======================= STATE ======================= */

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <nav className='main-footer cContainer'>
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
      <div className='footer'>
        <Link className='link' to='/about'>
          <span className='flink'>About me</span>
        </Link>
        <Link className='link' to='/contact'>
          <span className='flink'>Contact me</span>
        </Link>
      </div>
      <div className='toggle'>
        <a href={`${window.location.href}`}>
          <img
            id='toggle'
            src={darkToggle} 
            alt="toggleMode"
          />
        </a>  
      </div>
    </nav>
  )
}

export default Footer;
