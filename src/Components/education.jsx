import React, { useState } from 'react';
import LeftArrow from "../images/GoLeft.svg"
import RightArrow from "../images/GoRight.svg"
import LeftArrowLight from "../images/GoLeft-Light.svg"
import RightArrowLight from "../images/GoRight-Light.svg"
import LogoHenry from "../images/henry.png";
import Fajardo from "../images/UCCFD.svg";
import Alliance from "../images/alianza.png";
import '../Styles/education.css'

const Education = ({ language, darkMode }) => {
  const [current, setCurrent] = useState(0);

  const schools = [
    {
      name: 'Henry',
      logo: LogoHenry,
      engText: "Incredible academy that trained me as a Full Stack Web and Mobile Developer with an wide technological stack, and with JavaScript as the core technology.",
      spaText: "Increíble academia que me capacitó como desarrollador web y móvil Full Stack con un amplio stack tecnológico, y con JavaScript como tecnología principal.",
      freText: "Incroyable académie qui m'a formé en tant que développeur Web et mobile Full Stack avec un large pile technologique, et avec JavaScript comme technologie principal.",
      webSite: "https://soyhenry.com/"
    },
    {
      name:
        language.eng ? 'University of Sciences of Physical Culture and Sports' :
          language.esp ? 'Univesidad de las Ciencias de la Cultura Física y el Deporte'
            : 'Université des Sciences de la Culture Physique et des Sports',
      logo: Fajardo,
      engText: 'The University of Physical Culture and Sports Sciences "Manuel Fajardo" (UCCFD) is an institution certified by the National Accreditation Board, internationally recognized as the "University of Cuban Sports", its classrooms have graduated more than 90% of the Cuban Olympic champions. It is the governing center of 17 other faculties throughout the country, its campus is located in a central Cerro de La Habana municipality. It is close to the Sports City.',
      spaText: 'La Universidad de Ciencias de la Cultura Física y el Deporte "Manuel Fajardo" (UCCFD) es una institución certificada por la Junta de Acreditación Nacional, reconocida internacionalmente como la “Universidad del Deporte Cubano”, de sus aulas han egresado más del 90 % de los campeones olímpicos cubanos. Es el Centro rector de otras 17 facultades a lo largo de todo el país, su campus está ubicado en un céntrico municipio Cerro de La Habana. Aledaña a la Ciudad Deportiva.',
      freText: "L'Université de la culture physique et des sciences du sport 'Manuel Fajardo' (UCCFD) est une institution certifiée par le Conseil national d'accréditation, internationalement reconnue comme l 'Université des sports cubains, ses salles de classe ont diplômé plus de 90% des champions olympiques cubains. C'est le centre administratif de 17 autres facultés à travers le pays, son campus est situé dans une municipalité centrale de Cerro de La Habana. Il est proche de la Ville des sports.",
      webSite: "http://accion.uccfd.cu/index.php/accion"
    },
    {
      name: language.eng ? 'French Alliance' : language.esp ? 'Alianza Francesa' : 'Alliance française',
      logo: Alliance,
      engText: `International organization that aims to promote the French language and francophone culture around the world. Created in Paris on 21 July 1883 under the name Alliance française pour la propagation de la langue nationale dans les colonies et à l'étranger (French alliance for the propagation of the national language in the colonies and abroad) — now known simply as L'Alliance française — its primary concern is teaching French as a second language and is headquartered in Paris.`,
      spaText: "Organización internacional que tiene como objetivo promover la lengua francesa y la cultura francófona en todo el mundo. Creada en París el 21 de julio de 1883 con el nombre de Alliance française pour la propagation de la langue nationale dans les colonies et à l'étranger (alianza francesa para la propagación de la lengua nacional en las colonias y en el extranjero), ahora conocida simplemente como L ' Alliance française: su principal preocupación es la enseñanza del francés como segundo idioma y tiene su sede en París.",
      freText: "Organisation internationale qui vise à promouvoir la langue française et la culture francophone dans le monde. Créée à Paris le 21 juillet 1883 sous le nom d'Alliance française pour la propagation de la langue nationale dans les colonies et à l'étranger (maintenant simplement connue sous le nom de L' Alliance française) sa principale préoccupation est l'enseignement du français comme deuxième langue et a son siège à Paris.",
      webSite: "https://www.fondation-alliancefr.org/"
    },
  ];

  const length = schools.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <h1>{language.eng ? 'Education' : language.esp ? 'Educación' : 'Éducation'}</h1>
      <div id='education-container'>
        <img onClick={() => nextSlide()} className='arrows' src={darkMode ? LeftArrowLight : LeftArrow} alt='ups' />
        {
          schools.map((school, index) => {
            return (
              <div key={index} className={index === current ? 'school' : 'inactive'}>
                {index === current && (
                  <>
                    <a href={school.webSite} target='_blank' rel="noopener noreferrer">
                      <img src={school.logo} alt={school.name} />
                    </a>
                    <h1 id='school-name'>{school.name}</h1>
                    <p>{language.eng ? school.engText : language.esp ? school.spaText : school.freText}</p>
                  </>
                )}
              </div>
            )
          })
        }
        <img onClick={() => prevSlide()} className='arrows' src={darkMode ? RightArrowLight : RightArrow} alt='ups' />
      </div>
    </>
  )
}

export default Education;
