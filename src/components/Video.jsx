import React from 'react'

const Video = (props) => {
  return (
    <React.Fragment>
        <div className='video-container'>
            <iframe src={props.imgsrc}></iframe>
            <h2>{props.title}</h2>
        </div>
    </React.Fragment>
  )
}

export default Video
