import React from 'react'
import wNineChars from '../../images/w9Chars.png'
import disk1 from '../../images/disk1Logo.gif'
import Button from '../components/Button'
import { Outlet, Link } from "react-router-dom";
import Register from '../components/Popup';

const Start = () => {
  return (
    <React.Fragment>
        <div className='page-container'>

        <div className='left-container'>
        <div className='logo-container'>
            <img src={disk1}></img>
            <h1>World Nine</h1>
        </div>
        <div className='buttons-container'>
            <Register trigger={<a><Button text="Register"></Button></a>}></Register>
            <Link to='/Gallery' style={{ textDecoration: 'none' }}><Button text="Gallery"></Button></Link>
            <Link to='/About' style={{ textDecoration: 'none' }} ><Button text="About"></Button></Link>
        </div>
        </div>

        <div className='right-container'>
        <img className='chars' src={wNineChars}></img>
        </div>

        </div>
    </React.Fragment>
  )
}

export default Start
