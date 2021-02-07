import React, { useState } from 'react';
import LeftArrow from "../images/GoLeft.svg"
import RightArrow from "../images/GoRight.svg"
import LeftArrowLight from "../images/GoLeft-Light.svg"
import RightArrowLight from "../images/GoRight-Light.svg"
import '../Styles/education.css'
import { schools } from "../data/schools";

const Education = ({ language, darkMode }) => {
  const [current, setCurrent] = useState(0);
  const length = schools.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleOnSlide = (index) => {
    setCurrent(index);
  }

  return (
    <div id='education-container'>
      <h1>{language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}</h1>
      <div id='school-container'>
        <img onClick={() => prevSlide()} className='arrows left-arrow' src={darkMode ? LeftArrowLight : LeftArrow} alt='ups' />
        {
          schools.map((school, index) => {
            return (
              <div key={index} className={index === current ? 'school' : 'inactive'}>
                {index === current && (
                  <>
                    <a href={school.webSite} target='_blank' rel="noopener noreferrer">
                      <img src={school.logo} alt={school.name} />
                    </a>
                    <h1 className={school && school.webSite && school.webSite.includes('uccfd') ? 'school-name fajardo' : 'school-name'}>
                      {
                        language.eng ? school.name || school.engName :
                          language.esp ? school.name || school.espName :
                            school.name || school.freName
                      }
                    </h1>
                    <p>{language.eng ? school.engText : language.esp ? school.spaText : school.freText}</p>
                  </>
                )}
              </div>
            )
          })
        }
        <img onClick={() => nextSlide()} className='arrows right-arrow' src={darkMode ? RightArrowLight : RightArrow} alt='ups' />
      </div>
      <div id='inputs'>
        {schools.map((school, index) => {
          return (
            <div
              key={index}
              className={index !== current ? 'inputs' : 'checked'}
              onClick={() => handleOnSlide(index)}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Education;
