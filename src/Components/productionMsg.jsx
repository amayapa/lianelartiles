import React from 'react'
import "../Styles/msg.css";
const Message = (props) => {
  const darkMode = props.darkMode;

  return (
    <>
      <div>
        <p style={{ padding: '15px', fontSize: 22 }}>
          This website is under construction.<br />
          For the moment you can go to the following pages:
        </p>
        <span className='check'>✔</span><span>Home<br /></span>
        <span className='check'>✔</span><span>JavasCript Resume<br /></span>
        <p style={{ padding: '15px', fontSize: 22 }}>And try the following features:</p>
        <span className='check'>✔</span><span>Dark Mode<br /></span>
      </div>
    </>
  )
}

export default Message
