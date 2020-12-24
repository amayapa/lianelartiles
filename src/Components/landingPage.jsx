/* ======================= IMPORTATIONS ======================= */
import React, { useEffect } from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const language = props.language;

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <div id='me' >
      {
        language.eng ? (
          <>
            <span id='las'>Lianel Artiles</span><br />
            <span id='dev'>FullStack Web and Mobile Developer</span><br />
            <span id='lema'>At last working on my pasion</span>
          </ >
        ) :
          language.esp ? (
            <>
              <span id='las'>Lianel Artiles</span><br />
              <span id='dev'>Desarrollador FullStack Web y Mobile</span><br />
              <span id='lema'>Finalmente haciendo lo que me apasiona</span>
            </>
          ) : (
              <>
                <span id='las'>Lianel Artiles</span><br />
                <span id='dev'>Développeur Web et Mobile FullStack</span><br />
                <span id='lema'>En travaillant enfin sur ma passion</span>
              </>
            )
      }
    </div>
  )
}

export default LandingPage
