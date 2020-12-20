import React from 'react'
import "../Styles/msg.css";
const Message = (props) => {
  const darkMode = props.darkMode;

  return (
    <>
      {
        darkMode ? (<div>
          <p style={{color: 'white'}}>
            This website is under construction.<br/>
            For the moment you can go to the following pages:
          </p>
          <span className='check'>✔</span><span style={{color: 'white'}}> Home <br/></span>
          <span className='check'>✔</span><span style={{color: 'white'}}> About me <br/></span>
          <p style={{color: 'white'}}>And try the following features:</p>
          <span className='check'>✔</span><span style={{color: 'white'}}> Dark Mode <br/></span>
        </div>) : 
          (<div>
            <p style={{color: 'black'}}>
              This website is under construction.<br/>
              For the moment you can go to the following pages:
            </p>
            <span className='check'>✔</span><span style={{color: 'black'}}> Home <br/></span>
            <span className='check'>✔</span><span style={{color: 'black'}}> About me <br/></span>
            <p style={{color: 'black'}}>And try the following features:</p>
            <span className='check'>✔</span><span style={{color: 'black'}}> Dark Mode <br/></span>
          </div>)
      }
    </>
  )
}

export default Message
