/* ======================= IMPORTATIONS ======================= */
import React from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const { esp, eng } = props.languages;

  /* ======================= FUNCTIONS ======================= */

  /* ======================= RENDERING ======================= */
  return (
    <div id='me' >
      <span id='las'>Lianel Artiles</span><br />
      <span id='dev'>
        {eng ? 'FullStack Web and Mobile Developer' : esp ? 'Desarrollador FullStack Web y Mobile' : 'Développeur Web et Mobile FullStack'}
      </span><br />
      <span id='lema'>
        {eng ? 'Working on my passion' : esp ? 'Haciendo lo que me apasiona' : 'En travaillant sur ma passion'}
      </span>
    </div>
  )
}

export default LandingPage
