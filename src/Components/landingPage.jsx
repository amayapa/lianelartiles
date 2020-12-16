/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import '../Styles/landingPage.css'
const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const [darkMode, setDarkMode] = useState(true)
  
  /* ======================= FUNCTIONS ======================= */
  
  
  /* ======================= RENDERING ======================= */
  return (
    <div id='me' className={darkMode ? 'landingDark cContainer' : 'landingLight cContainer'}>
      <span id='las'>Lianel Artiles</span><br/>
      <span id='dev'>FullStack Web and Mobile Developer</span><br/>
      <span id='lema'>At last working on my pasion</span>
    </div>
  )
}

export default LandingPage
