import React from 'react'
import Message from "./productionMsg";
import '../Styles/contactme.css'

const ContactMe = (props) => {
  const darkMode = props.darkMode;

  return (
    <div className='contactme-container'>
      <h1>Contact me</h1>
      <h3>Working on it</h3>
      <Message />
    </div>
  )
}

export default ContactMe
