import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Video from '../components/Video';

const Gallery = () => {
  return (
    <React.Fragment>
        <div className='page-container'>
            <div className='side-content'>
            <Link to='/'>
                    <div className='home-button'>
                        <img src='../../images/home.png'></img>
                    </div>
            </Link>
            <img className='side-pic' src='../../images/robot.png'></img>
            </div>

            <div className='content-container' style={{width:"80%"}}>
              <div className='content-header'>
                <br></br>
                <h1>Gallery</h1>
              </div>
                
              <hr></hr>
              <div className='gallery-container'>
                <Video imgsrc="https://www.youtube.com/embed/9En7mS9bPkM" title="Best Of Jokin"></Video>
                <Video imgsrc="https://www.youtube.com/embed/SVIOzbtoa9o" title="SolDrakkon(Fox) vs Pk_Love (Cloud)"></Video>
                <Video imgsrc="https://www.youtube.com/embed/uZ6KQxhejFs" title="When you're late to Smashfest"></Video>

                <Video imgsrc="https://www.youtube.com/embed/a4faoewGSlM" title="GigaBash | Kiryu Combos"></Video>
                <Video imgsrc="https://www.youtube.com/embed/8kW3u4lMSgE" title="More OFFLINE Practice | Playing Wolf"></Video>
                <Video imgsrc="https://www.youtube.com/embed/dDPLgQuRTJE" title="SEPHIROTH IS IN SMASH [REACTION]"></Video>
              </div>
              
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default Gallery
