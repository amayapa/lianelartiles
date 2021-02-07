/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const language = props.language;

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <div id='me' >
      <span id='las'>Lianel Artiles</span><br />
      <span id='dev'>
        {language.eng ? 'FullStack Web and Mobile Developer' : language.esp ? 'Desarrollador FullStack Web y Mobile' : 'Développeur Web et Mobile FullStack'}
      </span><br />
      <span id='lema'>
        {language.eng ? 'At last working on my passion' : language.esp ? 'Finalmente haciendo lo que me apasiona' : 'En travaillant enfin sur ma passion'}
      </span>
    </div>
  )
}

export default LandingPage
