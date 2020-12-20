import React from 'react'
import Message from "./productionMsg";
import '../Styles/contactme.css'

const ContactMe = (props) => {
  const darkMode = props.darkMode;

  return (
    <div className='contactme-container'>
      <h1>Working on it</h1>
      <Message darkMode={darkMode}/>
    </div>
  )
}

export default ContactMe
