/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import '../Styles/landingPage.css'
const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const [darkMode, setDarkMode] = useState(true)
  
  /* ======================= FUNCTIONS ======================= */
  
  
  /* ======================= RENDERING ======================= */
  return (
    <div id='me' className={darkMode ? 'landingDark' : 'landingLight'}>
      <h1 id='las'>Lianel Artiles</h1>
      <h3>FullStack Web and Mobile Developer</h3>
      <span>At last working on my pasion</span>
    </div>
  )
}

export default LandingPage
