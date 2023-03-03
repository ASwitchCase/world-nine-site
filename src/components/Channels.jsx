import React from 'react'

const Channels = () => {
  return (
    <React.Fragment>
        <div className='channels-container'>
            <h1>Channels</h1>
            <hr></hr>
            <div className='channel'>
                <img src='../../images/world9Logo.jpg'></img>
                <h3>World Nine</h3>
            </div>

            <div className='channel'>
                <img src='../../images/theory.jpg'></img>
                <h3>Theory</h3>
            </div>

            <div className='channel'>
                <img src='../../images/madSpace.jpg'></img>
                <h3>MadSpace</h3>
            </div>

            <div className='channel'>
                <img src='../../images/SeveN.jpg'></img>
                <h3>SeveN</h3>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Channels
