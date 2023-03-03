import React from 'react'
import theoryimg from '../../images/theory.jpg';
import madimg from '../../images/madSpace.jpg';
import SeveN from '../../images/SeveN.jpg';
import world9Logo from '../../images/world9Logo.jpg';
import { Link } from 'react-router-dom';
const Channels = () => {
  return (
    <React.Fragment>
        <div className='channels-container'>
            <h1>Channels</h1>
            <hr></hr>
            <div className='channel'>
                <Link to='https://www.youtube.com/channel/UCzLOAjXkVVhmYHGBe_vQyfw'><img src={world9Logo}></img></Link>
                <h3>World Nine</h3>
            </div>

            <div className='channel'>
                <Link to='https://www.youtube.com/@theory4k'><img src={theoryimg}></img></Link>
                <h3>Theory</h3>
            </div>

            <div className='channel'>
                <Link to='https://www.youtube.com/@MadSpace'><img src={madimg}></img></Link>
                <h3>MadSpace</h3>
            </div>

            <div className='channel'>
                <Link to='https://www.youtube.com/@GlassesGamer322'><img src={SeveN}></img></Link>
                <h3>SeveN</h3>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Channels
