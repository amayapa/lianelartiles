import React from 'react'
import Message from './productionMsg'
import '../Styles/aboutme.css'

const AboutMe = (props) => {
  const darkMode = props.darkMode
  return (
    <div className='aboutme-container'>
      <h1>Working on it</h1>
      <Message darkMode={darkMode}/>
    </div>
  )
}

export default AboutMe
