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
    <nav className='main-footer cContainer footer-general'>
      <div className="flags-footer">
      <a href={`${window.location.href}`}>
          <img 
          className='flag-footer'
            src={espFlag}
            alt="imadev"
            id='esp'
            onClick={e=>console.log(e)}
            />
          </a>

          <a href={`${window.location.href}`}>
            <img 
            className='flag-footer'
              src={engFlag}
              alt="imadev"
              id='eng'
              onClick={e=>console.log(e)}
            />
          </a>
      </div>
      <div className="about-footer">
         <Link className='link-footer' to='/about'>About me</Link>
         <Link className='link-footer' to='/contact'>Contact me</Link>
      </div>

      <div className="darkmode-footer">
      <div className='toggle'>
        <a href={`${window.location.href}`}>
          <img
          className='toggleimg'
            id='toggle'
            src={darkToggle} 
            alt="toggleMode"
          />
        </a>  
      </div> 
      </div>

      
    </nav>
  )
}

export default Footer;
