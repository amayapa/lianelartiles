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
          <img 
            src={espFlag}
            alt="imadev"
          />
        </div>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <div>
          <img 
            src={engFlag}
            alt="imadev"
          />
        </div>
      </div>
      <div className='footer'>
        <Link className='link' to='/about'>
          <span>About me</span>
        </Link>
        <Link className='link' to='/contact'>
          <span>Contact me</span>
        </Link>
      </div>
      <div className='toggle'>
        <img
          id='toggle'
          src={darkToggle} 
          alt="toggleMode"
        />
      </div>
    </nav>
  )
}

export default Footer;
