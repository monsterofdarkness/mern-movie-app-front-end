import React from 'react'
import { Link } from 'react-router-dom'
import "./searchItem.scss"


const SearchItem = (item) => {
  return (
    <div className="searchItem">
      <div className="searchItem__img">
        <img 
        className='searchItem__img-img'
        src= {item.imgSm}/>

        <span>{item.title}</span>
      </div>
    </div>
  )
}

export default SearchItem