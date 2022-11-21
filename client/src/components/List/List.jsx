import React from 'react'
import { useRef, useState } from "react";
import ListItem from '../ListItem/ListItem'
import './list.scss'

export default function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list?.title}</span>
      <div className="wrapper">
        <i
          className="ri-arrow-left-s-line sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}>
        </i>
        <div className="container" ref={listRef}>
          {list?.content && list.content.map((item, i) => (
              <ListItem index={i} item={item} />
            ))}
        </div>
        <i
          className="ri-arrow-right-s-line sliderArrow right"
          onClick={() => handleClick("right")}>
        </i>
      </div>
    </div>
  );
}
