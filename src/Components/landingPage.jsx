/* ======================= IMPORTATIONS ======================= */
import React, {useState} from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const darkMode = props.darkMode;
  
  /* ======================= FUNCTIONS ======================= */
  
  
  /* ======================= RENDERING ======================= */
  
  if(darkMode){
    return (
      <div id='me'>
        <span style={{color: 'white'}} id='las'>Lianel Artiles</span><br/>
        <span style={{color: 'white'}} id='dev'>FullStack Web and Mobile Developer</span><br/>
        <span style={{color: 'white'}} id='lema'>At last working on my pasion</span>
      </div>
    )
  }
  else{
    return (
      <div id='me'>
        <span style={{color: 'black'}} id='las'>Lianel Artiles</span><br/>
        <span style={{color: 'black'}} id='dev'>FullStack Web and Mobile Developer</span><br/>
        <span style={{color: 'black'}} id='lema'>At last working on my pasion</span>
      </div>
    )
  }
}

export default LandingPage
