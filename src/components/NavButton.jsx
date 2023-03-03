import React from 'react'
import { Link } from 'react-router-dom'
import curser from '../../images/curser.gif'

const NavButton = (props) => {
  return (
    <React.Fragment>
        <Link to={props.link}>
        <div className='nav-container'>
        <img className='curser' src={curser}></img>
            <div className='button-dot'></div>
            <h1>{props.text}</h1>
        </div>
        </Link>
    </React.Fragment>
  )
}

export default NavButton
