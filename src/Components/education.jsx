import React from 'react'
import LeftArrow from "../images/GoLeft.svg"
import RightArrow from "../images/GoRight.svg"
import LeftArrowLight from "../images/GoLeft-Light.svg"
import RightArrowLight from "../images/GoRight-Light.svg"
import LogoHenry from "../images/Henry.svg";
import '../Styles/education.css'

const Education = ({ language, darkMode }) => {
  const schools = [
    {
      name: 'Henry',
      type: 'BootCamp',
      logo: LogoHenry,
      engText: 'Almost five months of an incredible crash course that trained me as a Full Stack Web and Mobile Developer, with JavaScript as the core technology.',
      spaText: 'Casi cinco meses de un increíble curso intensivo que me capacitó como desarrollador web y móvil Full Stack, con JavaScript como tecnología principal.',
      freText: "Près de cinq mois d'un incroyable cours intensif qui m'a formé en tant que développeur Web et mobile Full Stack, avec JavaScript comme technologie de base."
    },
  ]

  return (
    <div>
      <h1>{language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}</h1>
      <div id='education-container'>
        <img src={darkMode ? LeftArrowLight : LeftArrow} alt='ups' />
        {
          schools.map((school, index) => {
            return (
              <div key={index} className='school'>
                <img src={LogoHenry} alt={school.name} />
                <h1>{school.name} {school.type}</h1>
                <p>{language.eng ? school.engText : language.esp ? school.spaText : school.freText}</p>
              </div>
            )
          })
        }
        <img src={darkMode ? RightArrowLight : RightArrow} alt='ups' />
      </div>
      {/* <Message language={language} /> */}
    </div>
  )
}

export default Education
