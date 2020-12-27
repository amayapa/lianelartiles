/* ======================= IMPORTATIONS ======================= */
import React from 'react';
import '../Styles/footer.css';
import espFlag from '../images/españa.svg';
import engFlag from '../images/USA.svg';
import freFlag from '../images/francia.svg';
import darkToggle from '../images/Dark Toggle.svg';
import lightToggle from '../images/Light Toggle.svg';
import wapp from '../images/wapp.svg';
import github from '../images/github.svg';
import linkedin from '../images/in.svg';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  /* ======================= STATE ======================= */
  const { darkMode, setDarkMode, language, setLanguage } = props;
  const wappMsg = 'http://wa.me/?text=I want to share with you this website that I found interesting. https://larts85.github.io/lianelartiles'
  const wappMsj = 'http://wa.me/?text=Te comparto este sitio web que me pareció interesante. https://larts85.github.io/lianelartiles'
  const wappMssg = "http://wa.me/?text=Je vous partage ce site Web que j'ai trouvé intéressant. https://larts85.github.io/lianelartiles"
  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <div>
      <div className='sm'>
        <a id='gitLink' target="_blank" rel="noreferrer" href='https://github.com/larts85'>
          <img className="smIcon" src={github} alt="Ups!" />
          <span id='gitMsg'>{language.eng ? 'Check my repositories' : language.esp ? 'Revisa mis repositorios' : 'Vérifier mes référentiels'}</span>
        </a>
        <a id='inLink' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/imadev'>
          <img className="smIcon" src={linkedin} alt="Ups!" />
          <span id='inMsg'>{language.eng ? "Let's connect" : language.esp ? 'Conectemos' : 'Connectons-nous'}</span>
        </a>
        <a id='wappLink' target="_blank" rel="noreferrer" href={`${language.eng ? wappMsg : language.esp ? wappMsj : wappMssg}`}>
          <img className="smIcon" src={wapp} alt="Ups!" />
          <span id='wappMsg'>{language.eng ? 'Share this website' : language.esp ? 'Compartir este sitio web' : 'Partagez ce site'}</span>
        </a>
      </div>
      <p id='copyright'>
        Copyright &copy; {new Date().getFullYear()}, Lianel Artiles
      </p>
      <nav className='main-footer'>
        <div className='flags'>
          <img
            src={espFlag}
            alt="imadev"
            id='esp'
            onClick={() => setLanguage({
              eng: false,
              esp: true,
              fre: false
            })}
          />
          <img
            src={engFlag}
            alt="imadev"
            id='eng'
            onClick={() => setLanguage({
              eng: true,
              esp: false,
              fre: false
            })}
          />
          <img
            src={freFlag}
            alt="imadev"
            id='fre'
            onClick={() => setLanguage({
              eng: false,
              esp: false,
              fre: true
            })}
          />
        </div>
        {
          language.eng ?
            (<div className='footer'>
              <Link className='link' to='/about'>
                <span className='flink'>About me</span>
              </Link>
              <Link className='link' to='/contact'>
                <span className='flink'>Contact me</span>
              </Link>
            </div>) : language.esp ?
              (<div className='footer'>
                <Link className='link' to='/about'>
                  <span className='flink'>Sobre mi</span>
                </Link>
                <Link className='link' to='/contact'>
                  <span className='flink'>Contactame</span>
                </Link>
              </div>) :
              (<div className='footer'>
                <Link className='link' to='/about'>
                  <span className='flink'>Sur moi</span>
                </Link>
                <Link className='link' to='/contact'>
                  <span className='flink'>Contactez moi</span>
                </Link>
              </div>)
        }
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
