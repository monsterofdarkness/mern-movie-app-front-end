import React, {Children, useState} from 'react'
import "./readMoreReadLess.scss"

const ReadMoreReadLess = ({limit, children}) => {

    const text = children

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
  return (
    <span className='comment__item-content'>
        {isReadMoreShown ? text : text.substr(0, limit)}
        <button onClick={toggleBtn} className="btn__read">
            {isReadMoreShown ? 'Read less' : '...Read more'}
        </button>
    </span>
  )
}

export default ReadMoreReadLess