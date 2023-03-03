import React from 'react'
import curser from '../../images/curser.gif'
const Button = (props) => {
  return (
    <React.Fragment>
      
        <div className='button-container'>
        <img className='curser' src={curser}></img>
            <div className='button-dot'></div>
            <h1>{props.text}</h1>
        </div>
        
    </React.Fragment>
  )
}

export default Button
