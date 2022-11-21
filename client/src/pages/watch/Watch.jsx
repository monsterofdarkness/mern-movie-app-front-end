import React from 'react'
import './watch.scss'
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  console.log(location.hash)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <i className='ri-arrow-left-s-line'></i>
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src= {location.hash.substring(1)}
      />
    </div>
  )
}

export default Watch