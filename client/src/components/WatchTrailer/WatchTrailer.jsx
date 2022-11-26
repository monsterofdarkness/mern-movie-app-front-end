import React from 'react'
import './watchTrailer.scss'

const WatchTrailer = () => {
  return (
    <div className='watchTrailer'>
        <video
        className="video"
        autoPlay
        progress
        controls
        // src= {}
      />
    </div>
  )
}

export default WatchTrailer