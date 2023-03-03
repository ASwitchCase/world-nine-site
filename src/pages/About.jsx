import React from 'react'
import wrtimg from '../../images/write.gif'
import Button from '../components/Button'
import { Outlet, Link } from "react-router-dom";
import NavButton from '../components/NavButton';
import Channels from '../components/Channels';
import homeimg from '../../images/home.png';
import jokerimg from '../../images/joker.png';
const About = () => {
  return (
    <React.Fragment>
        <div className='page-container'>
            <div className='side-content'>
                <Link to='/'>
                    <div className='home-button'>
                        <img src={homeimg}></img>
                    </div>
                </Link>
                <img className='side-pic' src={jokerimg}></img>
            </div>
            
            <div className='content-container'>
                <div className='content-header'>
                    <br></br>
                    <h1>About</h1>
                </div>
                
                <hr></hr>

                <div className='content'>
                    <p>World Nine is a place where normal people play smash competitively. The rules are simple:</p>
                    <ol>
                        <li><p>No messing around in tournaments. Try to have a serious match. Tournaments are meant for competitive play</p></li>
                        <li><p>Be respectful, we are all friends. The tournaments are not just for smash, they are wholesome social gatherings.</p></li>
                        <li><p>SHOWER, with soap</p></li>
                        <li><p>Remember to save each game after they are complete.</p></li>
                        <li><p>Most importantly have fun.</p></li>
                    </ol>
                    <img className='about-logo' src={wrtimg}></img>
                    
                </div>
            </div>
            <div className='side-content'>
                <Channels></Channels>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About
